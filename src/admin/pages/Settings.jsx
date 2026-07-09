import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User, Lock, LogOut, Eye, EyeOff, CheckCircle2, AlertCircle, Info } from "lucide-react";

export default function Settings() {
  const navigate = useNavigate();
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ current: "", newPass: "", confirm: "" });
  const [msg, setMsg] = useState(null);

  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || "Not configured";

  const handleLogout = () => {
    sessionStorage.removeItem("ft_admin_auth");
    navigate("/admin/login");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

    if (form.current !== ADMIN_PASSWORD) {
      setMsg({ type: "error", text: "Current password is incorrect." });
      return;
    }
    if (form.newPass.length < 8) {
      setMsg({ type: "error", text: "New password must be at least 8 characters." });
      return;
    }
    if (form.newPass !== form.confirm) {
      setMsg({ type: "error", text: "New passwords do not match." });
      return;
    }

    // Note: env vars are read-only at runtime; actual update requires editing .env file.
    setMsg({
      type: "info",
      text: "To change your password, update VITE_ADMIN_PASSWORD in your .env file and restart the dev server.",
    });
  };

  const Field = ({ id, label, value, type = "text", show, onToggle, onChange, placeholder }) => (
    <div>
      <label htmlFor={id} className="block text-xs font-bold text-surface-600 uppercase tracking-wider mb-1.5">{label}</label>
      <div className="relative">
        <input
          id={id}
          type={onToggle ? (show ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={!onChange}
          className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400
            ${!onChange ? "bg-surface-50 text-surface-500 border-surface-200 cursor-default" : "bg-white text-surface-800 border-surface-200"}`}
        />
        {onToggle && (
          <button type="button" onClick={onToggle} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-700 transition-colors">
            {show ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h2 className="text-xl font-extrabold text-surface-900">Settings</h2>
        <p className="text-sm text-surface-400 mt-0.5">Manage your admin profile and security</p>
      </div>

      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl border border-surface-100 shadow-sm overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-surface-100 bg-surface-50 flex items-center gap-2">
          <User size={15} className="text-primary-600" />
          <h3 className="text-sm font-bold text-surface-800">Admin Profile</h3>
        </div>
        <div className="p-6 space-y-4">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-600/20">
              A
            </div>
            <div>
              <p className="font-bold text-surface-900 text-base">Administrator</p>
              <p className="text-sm text-surface-500">{adminEmail}</p>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-50 border border-primary-100 text-xs font-semibold text-primary-700 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                Super Admin
              </span>
            </div>
          </div>

          <Field id="settings-email" label="Admin Email" value={adminEmail} />
          <Field id="settings-role" label="Role" value="Super Administrator" />
        </div>
      </motion.div>

      {/* Change Password */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-2xl border border-surface-100 shadow-sm overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-surface-100 bg-surface-50 flex items-center gap-2">
          <Lock size={15} className="text-primary-600" />
          <h3 className="text-sm font-bold text-surface-800">Change Password</h3>
        </div>
        <div className="p-6">
          <div className="flex items-start gap-2 px-3 py-2.5 rounded-xl bg-blue-50 border border-blue-100 mb-5">
            <Info size={14} className="text-blue-500 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-600 font-medium leading-relaxed">
              Admin credentials are managed via the <code className="bg-blue-100 px-1 rounded text-[11px]">.env</code> file.
              To change your password, update <code className="bg-blue-100 px-1 rounded text-[11px]">VITE_ADMIN_PASSWORD</code> and restart the dev server.
            </p>
          </div>

          <form onSubmit={handlePasswordChange} className="space-y-4">
            <Field
              id="current-password"
              label="Current Password"
              show={showCurrent}
              onToggle={() => setShowCurrent((p) => !p)}
              value={form.current}
              onChange={(e) => { setForm((f) => ({ ...f, current: e.target.value })); setMsg(null); }}
              placeholder="Enter current password"
            />
            <Field
              id="new-password"
              label="New Password"
              show={showNew}
              onToggle={() => setShowNew((p) => !p)}
              value={form.newPass}
              onChange={(e) => { setForm((f) => ({ ...f, newPass: e.target.value })); setMsg(null); }}
              placeholder="Enter new password (min 8 chars)"
            />
            <Field
              id="confirm-password"
              label="Confirm New Password"
              type="password"
              value={form.confirm}
              onChange={(e) => { setForm((f) => ({ ...f, confirm: e.target.value })); setMsg(null); }}
              placeholder="Repeat new password"
            />

            <AnimatePresence>
              {msg && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium ${
                    msg.type === "error" ? "bg-red-50 border border-red-100 text-red-600" :
                    "bg-blue-50 border border-blue-100 text-blue-600"
                  }`}
                >
                  {msg.type === "error" ? <AlertCircle size={14} /> : <Info size={14} />}
                  {msg.text}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-colors shadow-sm shadow-primary-600/20 flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={15} />
              Update Password
            </button>
          </form>
        </div>
      </motion.div>

      {/* Danger zone */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white rounded-2xl border border-red-100 shadow-sm overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-red-100 bg-red-50 flex items-center gap-2">
          <LogOut size={15} className="text-red-500" />
          <h3 className="text-sm font-bold text-red-700">Session</h3>
        </div>
        <div className="p-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-surface-800">Sign out of Admin Portal</p>
            <p className="text-xs text-surface-400 mt-0.5">Your session will be cleared from this browser.</p>
          </div>
          <button
            id="settings-logout-btn"
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-200 text-red-600 font-semibold text-sm hover:bg-red-50 transition-colors"
          >
            <LogOut size={15} />
            Logout
          </button>
        </div>
      </motion.div>
    </div>
  );
}
