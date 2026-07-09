import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye, EyeOff, User, Phone, Lock, ArrowRight,
  CheckCircle2, Shield, Zap, Clock,
  Smartphone, Check, AlertCircle, Loader2, Mail,
} from "lucide-react";
import bcrypt from "bcryptjs";
import { supabase, isSupabaseReady, supabaseValidationError } from "../lib/supabaseClient";
import { normalizeMobile, validateMobile } from "../utils/mobile";

/* ─────────────── Helpers ─────────────── */

function getPasswordStrength(password) {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { score, label: "Weak", color: "bg-red-400" };
  if (score <= 4) return { score, label: "Fair", color: "bg-amber-400" };
  return { score, label: "Strong", color: "bg-emerald-500" };
}

function validateFullName(v) {
  if (!v.trim()) return "Full name is required.";
  if (v.trim().length < 3) return "Name must be at least 3 characters.";
  if (v.trim().length > 50) return "Name cannot exceed 50 characters.";
  if (!/^[A-Za-z\s]+$/.test(v.trim())) return "Only alphabetic characters and spaces allowed.";
  return "";
}

function validateEmail(v) {
  if (!v || !v.trim()) return "Email address is required.";
  const trimmed = v.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) return "Please enter a valid email address.";
  return "";
}



function validatePassword(v) {
  if (!v) return "Password is required.";
  if (v.length < 8) return "Password must be at least 8 characters.";
  if (v.length > 30) return "Password cannot exceed 30 characters.";
  if (!/[A-Z]/.test(v)) return "Must contain at least one uppercase letter.";
  if (!/[a-z]/.test(v)) return "Must contain at least one lowercase letter.";
  if (!/[0-9]/.test(v)) return "Must contain at least one number.";
  if (!/[^A-Za-z0-9]/.test(v)) return "Must contain at least one special character.";
  return "";
}

/* ─────────────── Trust Badge ─────────────── */
function TrustBadge({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 text-sm text-surface-500 font-medium">
      <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
        <Icon size={13} className="text-primary-600" />
      </div>
      {text}
    </div>
  );
}

/* ─────────────── Input Field ─────────────── */
function FormField({ id, label, type = "text", value, onChange, onBlur, error, placeholder, icon: Icon, rightElement, autoComplete }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-surface-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-400 pointer-events-none">
          <Icon size={17} />
        </div>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`w-full pl-10 pr-${rightElement ? "12" : "4"} py-3.5 rounded-xl border text-sm font-medium text-surface-900 placeholder:text-surface-300 bg-white/80 transition-all duration-200 outline-none
            ${error
              ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50"
              : "border-surface-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-50"
            }`}
        />
        {rightElement && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5 text-xs font-medium text-red-500 mt-1"
          >
            <AlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────── Password Strength Bar ─────────────── */
function PasswordStrengthBar({ password }) {
  const { score, label, color } = getPasswordStrength(password);
  if (!password) return null;
  const bars = 6;
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="space-y-1.5 mt-2"
    >
      <div className="flex gap-1">
        {Array.from({ length: bars }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i < score ? color : "bg-surface-100"}`}
          />
        ))}
      </div>
      <p className={`text-xs font-semibold ${score <= 2 ? "text-red-400" : score <= 4 ? "text-amber-500" : "text-emerald-500"}`}>
        Password strength: {label}
      </p>
    </motion.div>
  );
}



/* ─────────────── Main Page ─────────────── */
export default function GetDemoPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", mobile: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | duplicate | error
  const [serverError, setServerError] = useState("");

  const handleChange = useCallback((field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    // Live-validate touched fields
    if (touched[field]) {
      const validator = { fullName: validateFullName, mobile: validateMobile, email: validateEmail, password: validatePassword }[field];
      setErrors((prev) => ({ ...prev, [field]: validator(value) }));
    }
  }, [touched]);

  const handleBlur = useCallback((field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validator = { fullName: validateFullName, mobile: validateMobile, email: validateEmail, password: validatePassword }[field];
    setErrors((prev) => ({ ...prev, [field]: validator(form[field]) }));
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Touch all fields
    setTouched({ fullName: true, mobile: true, email: true, password: true });

    const nameErr = validateFullName(form.fullName);
    const mobileErr = validateMobile(form.mobile);
    const emailErr = validateEmail(form.email);
    const passErr = validatePassword(form.password);
    setErrors({ fullName: nameErr, mobile: mobileErr, email: emailErr, password: passErr });

    if (nameErr || mobileErr || emailErr || passErr) return;

    setStatus("loading");
    setServerError("");

    // Guard: Supabase not yet configured
    if (!isSupabaseReady) {
      setServerError(supabaseValidationError || "Supabase is not configured. Add your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables.");
      setStatus("error");
      return;
    }
    try {
      // Helper to normalize mobile numbers - now using the top-level helper function

      console.log("Searching existing user...");
      
      const normalizedMobile = normalizeMobile(form.mobile);
      const normalizedEmail = form.email.trim().toLowerCase();

      // Search database using Mobile Number OR Email Address
      const { data: existingList, error: checkErr } = await supabase
        .from("demo_users")
        .select("*")
        .or(`mobile_number.eq.${normalizedMobile},email.eq.${normalizedEmail}`);

      if (checkErr) {
        console.error("Supabase Error (Searching user):", checkErr);
        throw checkErr;
      }

      const existing = existingList && existingList.length > 0 ? existingList[0] : null;

      // 2. Hash password
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(form.password, salt);
      const now = new Date().toISOString();

      // Check if schema has registration_count and daily_registration_count columns
      let hasNewSchema = false;
      if (existing) {
        hasNewSchema = 'registration_count' in existing && 'daily_registration_count' in existing;
      } else {
        const { error: schemaErr } = await supabase
          .from("demo_users")
          .select("registration_count, daily_registration_count")
          .limit(1);
        hasNewSchema = !schemaErr;
      }

      if (existing) {
        console.log("Existing user found...");
        console.log("Updating registration count...");

        // Date logic: check if the last registration was on the same day
        const prevDate = new Date(existing.last_registered_at || existing.created_at);
        const today = new Date();
        const isSameDay = 
          prevDate.getFullYear() === today.getFullYear() &&
          prevDate.getMonth() === today.getMonth() &&
          prevDate.getDate() === today.getDate();

        // 3a. UPDATE existing record
        const updateData = {
          full_name: form.fullName.trim(),
          email: normalizedEmail,
          mobile_number: normalizedMobile,
          password_hash: passwordHash,
          updated_at: now,
        };
        if (hasNewSchema) {
          updateData.registration_count = (existing.registration_count || 1) + 1;
          updateData.daily_registration_count = isSameDay 
            ? (existing.daily_registration_count || 1) + 1 
            : 1;
          updateData.last_registered_at = now;
        }

        const { data: updatedRows, error: updateErr } = await supabase
          .from("demo_users")
          .update(updateData)
          .eq("id", existing.id)
          .select();

        if (updateErr) {
          console.error("Supabase Error (Updating user):", updateErr);
          throw updateErr;
        }

        // Verify that the UPDATE query actually executed successfully (affected at least 1 row)
        if (!updatedRows || updatedRows.length === 0) {
          throw new Error(
            "Update query did not affect any rows. This is usually caused by a missing UPDATE policy in Row Level Security (RLS) on 'demo_users'. Please execute the SQL migration script in 'supabase_schema.sql' inside your Supabase SQL editor to create the policy."
          );
        }
      } else {
        console.log("Creating new user...");

        // 3b. INSERT new record
        const insertData = {
          full_name: form.fullName.trim(),
          mobile_number: normalizedMobile,
          email: normalizedEmail,
          password_hash: passwordHash,
          demo_access: false,
          created_at: now,
          updated_at: now,
        };
        if (hasNewSchema) {
          insertData.registration_count = 1;
          insertData.daily_registration_count = 1;
          insertData.first_registered_at = now;
          insertData.last_registered_at = now;
        }

        const { error: insertErr } = await supabase.from("demo_users").insert(insertData);

        if (insertErr) {
          console.error("Supabase Error (Creating user):", insertErr);
          throw insertErr;
        }
      }

      console.log("Registration successful...");
      navigate("/demo-access");
    } catch (err) {
      console.error("[GetDemo] Registration error:", err);
      let errorMsg = err?.message || err?.details || JSON.stringify(err) || "Unknown error during registration.";
      if (err) {
        if (err.code === "23505" || err.message?.includes("duplicate")) {
          errorMsg = `This mobile number is already registered: ${err.message || err.details || JSON.stringify(err)}`;
        } else if (err.code === "PGRST205" || err.message?.includes("relation") || err.message?.includes("cache") || err.message?.includes("not found")) {
          errorMsg = `Database table 'demo_users' does not exist. Please create the table in your Supabase SQL editor: ${err.message}`;
        } else if (err.code === "42501" || err.message?.includes("permission") || err.message?.includes("policy")) {
          errorMsg = `Permission denied. Check if Row Level Security (RLS) is blocking inserts on 'demo_users': ${err.message}`;
        } else {
          errorMsg = `Database Error: ${err.message || err.details || JSON.stringify(err)}`;
        }
      }
      setServerError(errorMsg);
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm({ fullName: "", mobile: "", email: "", password: "" });
    setErrors({});
    setTouched({});
    setStatus("idle");
    setServerError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-accent-300/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] bg-sky-300/15 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b56f5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─── Left Hero Column ─── */}
          <div className="lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/" className="inline-flex items-center mb-8">
                <img src="/images/logo.webp" alt="Fuel Tracks" className="h-10 w-auto object-contain mix-blend-multiply" />
              </Link>

              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                Free Demo Access
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-surface-900 leading-[1.08] tracking-tight">
                Get Your{" "}
                <span className="text-gradient">Free App Demo</span>
              </h1>

              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-md">
                Experience the Fuel Tracks GPS Tracking Platform before making your decision. Register below and explore our live interactive demo.
              </p>

              {/* Feature list */}
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Zap, text: "Live GPS tracking with sub-10s refresh" },
                  { icon: Shield, text: "Real-time fuel monitoring & theft alerts" },
                  { icon: Clock, text: "365-day trip history & analytics" },
                  { icon: Smartphone, text: "Works on Android & iOS instantly" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-primary-600" />
                    </div>
                    <span className="text-surface-700 font-medium text-[15px]">{text}</span>
                  </li>
                ))}
              </ul>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap gap-4">
                <TrustBadge icon={Shield} text="100% Secure" />
                <TrustBadge icon={CheckCircle2} text="No Credit Card" />
                <TrustBadge icon={Zap} text="Instant Access" />
              </div>
            </motion.div>
          </div>

          {/* ─── Right Form Column ─── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glassmorphism Card */}
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-[2rem] blur-2xl scale-105" />

              <div className="relative bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2rem] shadow-2xl shadow-surface-900/8 overflow-hidden">
                {/* Card top accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-accent-400 to-primary-400" />

                <div className="p-8 sm:p-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Card header */}
                        <div className="mb-8">
                          <h2 className="text-2xl font-bold text-surface-900">Create your account</h2>
                        </div>

                        <form onSubmit={handleSubmit} noValidate className="space-y-5">
                          {/* Full Name */}
                          <FormField
                            id="demo-fullname"
                            label="Full Name"
                            type="text"
                            value={form.fullName}
                            onChange={handleChange("fullName")}
                            onBlur={handleBlur("fullName")}
                            error={errors.fullName}
                            placeholder="e.g. Rahul Sharma"
                            icon={User}
                            autoComplete="name"
                          />

                          {/* Mobile Number */}
                          <FormField
                            id="demo-mobile"
                            label="Mobile Number"
                            type="tel"
                            value={form.mobile}
                            onChange={(e) => {
                              const v = e.target.value.replace(/[^0-9+\s()-]/g, "").slice(0, 20);
                              handleChange("mobile")({ target: { value: v } });
                            }}
                            onBlur={handleBlur("mobile")}
                            error={errors.mobile}
                            placeholder="10-digit Indian mobile number"
                            icon={Phone}
                            autoComplete="tel"
                          />

                          {/* Email Address */}
                          <FormField
                            id="demo-email"
                            label="Email Address"
                            type="email"
                            value={form.email}
                            onChange={handleChange("email")}
                            onBlur={handleBlur("email")}
                            error={errors.email}
                            placeholder="Enter your email address"
                            icon={Mail}
                            autoComplete="email"
                          />

                          {/* Password */}
                          <div className="space-y-1.5">
                            <label htmlFor="demo-password" className="block text-sm font-semibold text-surface-700">
                              Create Password
                            </label>
                            <div className="relative">
                              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-400 pointer-events-none">
                                <Lock size={17} />
                              </div>
                              <input
                                id="demo-password"
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                onChange={handleChange("password")}
                                onBlur={handleBlur("password")}
                                placeholder="Min 8 chars, include A-Z, 0-9, symbol"
                                autoComplete="new-password"
                                className={`w-full pl-10 pr-12 py-3.5 rounded-xl border text-sm font-medium text-surface-900 placeholder:text-surface-300 bg-white/80 transition-all duration-200 outline-none
                                  ${errors.password
                                    ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50"
                                    : "border-surface-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-50"
                                  }`}
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword((p) => !p)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-700 transition-colors"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                              >
                                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                              </button>
                            </div>
                            <AnimatePresence>
                              {errors.password && (
                                <motion.p
                                  initial={{ opacity: 0, y: -4 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -4 }}
                                  className="flex items-center gap-1.5 text-xs font-medium text-red-500 mt-1"
                                >
                                  <AlertCircle size={12} />
                                  {errors.password}
                                </motion.p>
                              )}
                            </AnimatePresence>
                            <AnimatePresence>
                              {form.password && <PasswordStrengthBar password={form.password} />}
                            </AnimatePresence>
                          </div>

                          {/* Server error */}
                          <AnimatePresence>
                            {status === "error" && serverError && (
                              <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium"
                              >
                                <AlertCircle size={15} className="shrink-0" />
                                {serverError}
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Submit Button */}
                          <motion.button
                            type="submit"
                            disabled={status === "loading"}
                            whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
                            whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                            className="w-full relative mt-2 py-4 px-6 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-[15px] shadow-lg shadow-primary-600/25 hover:shadow-primary-600/35 hover:from-primary-500 hover:to-primary-400 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
                          >
                            {status === "loading" ? (
                              <>
                                <Loader2 size={18} className="animate-spin" />
                                Securing your registration…
                              </>
                            ) : (
                              <>
                                Request Demo Access
                                <ArrowRight size={18} />
                              </>
                            )}
                          </motion.button>

                          {/* Footer note */}
                          <p className="text-center text-xs text-surface-400 mt-4 leading-relaxed">
                            By registering, you agree to Fuel Tracks&apos; Terms of Service.
                            <br />Your data is encrypted and never shared.
                          </p>
                        </form>
                      </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
