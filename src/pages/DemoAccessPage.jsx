import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Copy, ExternalLink, ArrowLeft, Shield, Key, UserCheck, Sparkles } from "lucide-react";

export default function DemoAccessPage() {
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "user") {
        setCopiedUser(true);
        setTimeout(() => setCopiedUser(false), 2000);
      } else {
        setCopiedPass(true);
        setTimeout(() => setCopiedPass(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-primary-50/30 relative overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Ambient Orbs */}
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

      <div className="relative w-full max-w-xl mx-auto z-10 text-center">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center mb-8">
          <img src="/images/logo.webp" alt="Fuel Tracks" className="h-10 w-auto object-contain mix-blend-multiply" />
        </Link>

        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-xl shadow-emerald-500/25 mx-auto mb-6"
          >
            <div className="absolute inset-0 rounded-full bg-emerald-500/25 animate-ping opacity-60" />
            <UserCheck size={36} className="text-white" strokeWidth={2} />
          </motion.div>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={12} className="text-emerald-500 animate-pulse" />
            Registration Successful!
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-surface-900 tracking-tight leading-tight">
            🎉 Registration Successful!
          </h1>
          <p className="mt-3 text-base text-surface-500 max-w-md mx-auto leading-relaxed">
            Thank you for registering for the Fuel Tracks App Demo. Your demo credentials have been generated successfully.
          </p>
        </motion.div>

        {/* Credentials Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          {/* Glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-3xl blur-xl scale-105" />

          <div className="relative bg-white/85 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-xl shadow-surface-900/5 p-6 sm:p-8">
            <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-accent-400 to-primary-400 absolute top-0 left-0 rounded-t-3xl" />

            <h2 className="text-sm font-bold text-surface-400 uppercase tracking-widest text-left mb-6 flex items-center gap-2">
              <Shield size={14} className="text-primary-500" />
              Demo Login Details
            </h2>

            <div className="space-y-4">
              {/* Demo User ID */}
              <div className="bg-surface-50/50 border border-surface-100 rounded-2xl p-4 flex items-center justify-between transition-all hover:bg-surface-50">
                <div className="text-left">
                  <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider">Demo User ID</p>
                  <p className="text-base font-extrabold text-surface-800 tracking-wide mt-1">FUELTRACKSDEMO</p>
                </div>
                <button
                  onClick={() => handleCopy("FUELTRACKSDEMO", "user")}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm
                    ${copiedUser
                      ? "bg-emerald-500 text-white shadow-emerald-500/20"
                      : "bg-white border border-surface-200 text-surface-600 hover:border-primary-300 hover:text-primary-600"
                    }`}
                >
                  <AnimatePresence mode="wait">
                    {copiedUser ? (
                      <motion.span
                        key="copied"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-1.5"
                      >
                        <Check size={13} />
                        Copied!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-1.5"
                      >
                        <Copy size={13} />
                        Copy
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* Demo Password */}
              <div className="bg-surface-50/50 border border-surface-100 rounded-2xl p-4 flex items-center justify-between transition-all hover:bg-surface-50">
                <div className="text-left">
                  <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider">Demo Password</p>
                  <p className="text-base font-extrabold text-surface-800 tracking-wide mt-1">123456</p>
                </div>
                <button
                  onClick={() => handleCopy("123456", "pass")}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm
                    ${copiedPass
                      ? "bg-emerald-500 text-white shadow-emerald-500/20"
                      : "bg-white border border-surface-200 text-surface-600 hover:border-primary-300 hover:text-primary-600"
                    }`}
                >
                  <AnimatePresence mode="wait">
                    {copiedPass ? (
                      <motion.span
                        key="copied"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-1.5"
                      >
                        <Check size={13} />
                        Copied!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-1.5"
                      >
                        <Copy size={13} />
                        Copy
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col gap-3.5 w-full max-w-sm mx-auto"
        >
          <a
            href="https://fueltracks.online/gps/public/login"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-[15px] shadow-lg shadow-primary-600/25 hover:shadow-primary-600/35 hover:from-primary-500 hover:to-primary-400 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Launch Demo
            <ExternalLink size={16} />
          </a>

          <Link
            to="/"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-surface-200 bg-white text-surface-700 font-bold text-sm hover:bg-surface-50 hover:border-surface-300 transition-all duration-200"
          >
            <ArrowLeft size={15} />
            Back to Website
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
