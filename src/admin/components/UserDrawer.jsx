import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Calendar, Clock, Hash, Lock, Mail } from "lucide-react";
import { formatMobileForDisplay } from "../../utils/mobile";

function Field({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-surface-50 last:border-0">
      <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={14} className="text-primary-600" />
      </div>
      <div>
        <p className="text-xs font-medium text-surface-400 uppercase tracking-wider">{label}</p>
        <p className="text-sm font-semibold text-surface-800 mt-0.5">{value || "—"}</p>
      </div>
    </div>
  );
}

function formatDateTime(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return {
    date: d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
    time: d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
  };
}

export default function UserDrawer({ user, onClose }) {
  const first = formatDateTime(user?.created_at);
  const last = formatDateTime(user?.last_registered_at || user?.updated_at || user?.created_at);

  return (
    <AnimatePresence>
      {user && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-surface-900/20 backdrop-blur-[2px] z-40"
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-surface-100 bg-gradient-to-r from-primary-600 to-primary-500">
              <div>
                <p className="text-xs font-semibold text-primary-200 uppercase tracking-widest">Registration Details</p>
                <h3 className="text-lg font-bold text-white mt-0.5">{user.full_name}</h3>
              </div>
              <button
                id="user-drawer-close"
                onClick={onClose}
                className="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-surface-50 rounded-2xl border border-surface-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-600/20">
                  {user.full_name?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <div>
                  <p className="font-bold text-surface-900">{user.full_name}</p>
                  <p className="text-sm text-surface-500">{formatMobileForDisplay(user.mobile_number)}</p>
                  <p className="text-xs text-surface-400 mt-0.5">{user.email || "—"}</p>
                </div>
              </div>

              <div className="space-y-0 bg-white rounded-2xl border border-surface-100 px-4 divide-y divide-surface-50">
                <Field icon={Hash} label="Registration ID" value={`#${user.id?.toString().slice(0, 8).toUpperCase()}`} />
                <Field icon={User} label="Full Name" value={user.full_name} />
                <Field icon={Phone} label="Mobile Number" value={formatMobileForDisplay(user.mobile_number)} />
                <Field icon={Mail} label="Email Address" value={user.email} />
                <Field icon={Hash} label="Total Registration Count (Lifetime)" value={user.registration_count || 1} />
                <Field
                  icon={Hash}
                  label="Today's Registration Count"
                  value={(() => {
                    if (!user?.last_registered_at) return 0;
                    const prevDate = new Date(user.last_registered_at);
                    const today = new Date();
                    const isToday =
                      prevDate.getFullYear() === today.getFullYear() &&
                      prevDate.getMonth() === today.getMonth() &&
                      prevDate.getDate() === today.getDate();
                    return isToday ? (user.daily_registration_count || 1) : 0;
                  })()}
                />
                <Field icon={Calendar} label="First Registration Date" value={first.date} />
                <Field icon={Calendar} label="Last Registration Date" value={last.date} />
                <Field icon={Clock} label="Last Registration Time" value={last.time} />
                
                {/* Password Hash block */}
                <div className="py-3 last:border-0">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Lock size={14} className="text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-surface-400 uppercase tracking-wider">Password Hash</p>
                      <div className="mt-1.5 p-2.5 rounded-lg bg-surface-50 border border-surface-150 text-[11px] font-mono text-surface-600 break-all select-all leading-normal">
                        {user.password_hash || "—"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-surface-100 bg-surface-50">
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl border border-surface-200 text-surface-600 font-semibold text-sm hover:bg-surface-100 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
