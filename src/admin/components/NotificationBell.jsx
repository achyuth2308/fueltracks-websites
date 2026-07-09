import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X, UserPlus } from "lucide-react";
import { supabase, isSupabaseReady } from "../../lib/supabaseClient";
import { formatMobileForDisplay } from "../../utils/mobile";

function timeAgo(dateStr) {
  const diff = (Date.now() - new Date(dateStr).getTime()) / 1000;
  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function NotificationBell() {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!isSupabaseReady || !supabase) return;

    const channel = supabase
      .channel("admin-demo-users")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "demo_users" },
        (payload) => {
          const record = payload.new;
          if (!record) return;

          const isUpdate = payload.eventType === "UPDATE";
          const count = record.registration_count || 1;

          setNotifications((prev) => {
            const formatted = formatMobileForDisplay(record.mobile_number);
            // Filter out existing notifications for the same mobile number to keep it clean
            const filtered = prev.filter((n) => n.mobile !== formatted);
            return [
              {
                id: record.id,
                name: isUpdate 
                  ? `${record.full_name} (Attempt #${count})` 
                  : record.full_name,
                mobile: formatted,
                time: record.last_registered_at || record.created_at || new Date().toISOString(),
              },
              ...filtered,
            ].slice(0, 20);
          });
          setUnread((n) => n + 1);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openPanel = () => {
    setOpen((v) => !v);
    if (!open) setUnread(0);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        id="admin-notification-bell"
        onClick={openPanel}
        className="relative w-10 h-10 rounded-xl border border-surface-200 bg-white flex items-center justify-center text-surface-500 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200 shadow-sm"
        aria-label="Notifications"
      >
        <Bell size={18} />
        <AnimatePresence>
          {unread > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow"
            >
              {unread > 9 ? "9+" : unread}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-12 w-80 bg-white rounded-2xl border border-surface-200 shadow-2xl shadow-surface-900/10 z-50 overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-surface-100 bg-surface-50">
              <div className="flex items-center gap-2">
                <Bell size={14} className="text-primary-600" />
                <span className="text-sm font-bold text-surface-800">Notifications</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg hover:bg-surface-200 text-surface-400 hover:text-surface-600 transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-surface-400">
                  <Bell size={28} className="mb-3 opacity-30" />
                  <p className="text-sm font-medium">No notifications yet</p>
                  <p className="text-xs mt-1 opacity-70">New registrations will appear here</p>
                </div>
              ) : (
                notifications.map((n, i) => (
                  <motion.div
                    key={n.id || i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-start gap-3 px-4 py-3 border-b border-surface-50 hover:bg-primary-50/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                      <UserPlus size={14} className="text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-surface-800 truncate">{n.name}</p>
                      <p className="text-xs text-surface-500 truncate">{n.mobile}</p>
                      <p className="text-[11px] text-surface-400 mt-0.5">{timeAgo(n.time)}</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                  </motion.div>
                ))
              )}
            </div>

            {notifications.length > 0 && (
              <div className="px-4 py-2.5 border-t border-surface-100 bg-surface-50">
                <button
                  onClick={() => setNotifications([])}
                  className="text-xs text-surface-400 hover:text-red-500 font-medium transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
