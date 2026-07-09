import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, AlertTriangle, Loader2, X } from "lucide-react";
import { supabase, isSupabaseReady } from "../../lib/supabaseClient";

export default function DeleteModal({ user, onClose, onDeleted }) {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    if (!isSupabaseReady || !supabase) { setError("Supabase not configured."); return; }
    setDeleting(true);
    setError("");
    try {
      const { error: deleteErr } = await supabase
        .from("demo_users")
        .delete()
        .eq("id", user.id);
      if (deleteErr) throw deleteErr;
      onDeleted();
      onClose();
    } catch (e) {
      setError(e.message || "Failed to delete record.");
      setDeleting(false);
    }
  };

  return (
    <AnimatePresence>
      {user && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-surface-900/30 backdrop-blur-[3px] z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 pb-0">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <Trash2 size={22} className="text-red-500" />
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-xl hover:bg-surface-100 text-surface-400 hover:text-surface-600 flex items-center justify-center transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="px-6 py-4">
                <h3 className="text-lg font-bold text-surface-900">Delete Registration</h3>
                <p className="mt-2 text-sm text-surface-500 leading-relaxed">
                  Are you sure you want to delete the registration for{" "}
                  <span className="font-semibold text-surface-800">{user.full_name}</span>?
                  This action cannot be undone.
                </p>

                {/* Warning */}
                <div className="mt-4 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-amber-50 border border-amber-100">
                  <AlertTriangle size={14} className="text-amber-500 shrink-0" />
                  <p className="text-xs text-amber-700 font-medium">
                    This will permanently remove the record from the database.
                  </p>
                </div>

                {error && (
                  <p className="mt-3 text-sm text-red-600 font-medium">{error}</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 px-6 pb-6">
                <button
                  id="delete-cancel-btn"
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-xl border border-surface-200 text-surface-600 font-semibold text-sm hover:bg-surface-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  id="delete-confirm-btn"
                  onClick={handleDelete}
                  disabled={deleting}
                  className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition-colors shadow-sm shadow-red-500/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {deleting ? <><Loader2 size={14} className="animate-spin" />Deleting…</> : <><Trash2 size={14} />Delete</>}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
