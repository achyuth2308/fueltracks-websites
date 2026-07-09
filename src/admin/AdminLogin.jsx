import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle, Fuel, Shield } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter both email and password.");
      triggerShake();
      return;
    }

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      setError("Admin credentials are not configured. Add VITE_ADMIN_EMAIL and VITE_ADMIN_PASSWORD to your .env file.");
      triggerShake();
      return;
    }

    setLoading(true);
    // Simulate slight delay for UX
    await new Promise((r) => setTimeout(r, 700));

    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("ft_admin_auth", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
      triggerShake();
      setLoading(false);
    }
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-primary-50/40 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-primary-300/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-accent-300/10 rounded-full blur-3xl" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231b56f5' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0zm20 0h1v1h-1zm0 20h1v1h-1zM0 20h1v1H0z'/%3E%3C/g%3E%3C/svg%3E")` }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-sm relative"
      >
        {/* Card glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-[2rem] blur-2xl scale-110" />

        <motion.div
          animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="relative bg-white/90 backdrop-blur-2xl border border-white/60 rounded-[2rem] shadow-2xl shadow-surface-900/8 overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-accent-400 to-primary-400" />

          <div className="p-8">
            {/* Logo + title */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-500 shadow-lg shadow-primary-600/25 mb-4">
                <Fuel size={26} className="text-white" />
              </div>
              <h1 className="text-2xl font-extrabold text-surface-900">Admin Portal</h1>
              <p className="text-sm text-surface-500 mt-1 font-medium">Fuel Tracks Management System</p>
            </div>

            {/* Secure badge */}
            <div className="flex items-center justify-center gap-2 mb-6 py-2 px-4 rounded-xl bg-primary-50 border border-primary-100">
              <Shield size={13} className="text-primary-600" />
              <span className="text-xs font-semibold text-primary-700">Secure Admin Access</span>
            </div>

            <form onSubmit={handleLogin} noValidate className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="admin-email" className="block text-xs font-bold text-surface-600 uppercase tracking-wider mb-1.5">
                  Admin Email
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-400 pointer-events-none" />
                  <input
                    id="admin-email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="admin@fueltracks.com"
                    autoComplete="email"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-surface-200 text-sm font-medium text-surface-900 placeholder:text-surface-300 focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition-all bg-white/80"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="admin-password" className="block text-xs font-bold text-surface-600 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-400 pointer-events-none" />
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-surface-200 text-sm font-medium text-surface-900 placeholder:text-surface-300 focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-400 transition-all bg-white/80"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-700 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium"
                  >
                    <AlertCircle size={15} className="shrink-0" />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.01 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-sm shadow-lg shadow-primary-600/25 hover:shadow-primary-600/35 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <><Loader2 size={16} className="animate-spin" />Signing in…</>
                ) : (
                  "Sign In to Admin Panel"
                )}
              </motion.button>
            </form>

            <p className="text-center text-xs text-surface-400 mt-6">
              <Link to="/" className="hover:text-primary-600 transition-colors font-medium">← Back to Fuel Tracks website</Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
