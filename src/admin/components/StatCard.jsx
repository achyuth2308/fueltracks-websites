import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function StatCard({ icon: Icon, label, value, description, gradient, iconBg, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative group bg-white rounded-2xl border border-surface-100 shadow-sm hover:shadow-xl hover:shadow-primary-600/6 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default"
    >
      {/* Gradient background accent */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${gradient}`} />

      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg} shadow-sm`}>
            <Icon size={22} className="text-white" />
          </div>
          {/* Trend indicator */}
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 border border-emerald-100">
            <TrendingUp size={11} className="text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-600">Live</span>
          </div>
        </div>

        <div>
          <motion.p
            className="text-3xl font-extrabold text-surface-900 tabular-nums"
            key={value}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {value ?? "—"}
          </motion.p>
          <p className="text-sm font-semibold text-surface-600 mt-1">{label}</p>
          {description && (
            <p className="text-xs text-surface-400 mt-1">{description}</p>
          )}
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${iconBg} opacity-40`} />
      </div>
    </motion.div>
  );
}
