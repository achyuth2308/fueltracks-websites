import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Users, BarChart3, Download, Settings, LogOut, Fuel, X, ChevronRight,
} from "lucide-react";

const NAV = [
  { to: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/registrations", icon: Users, label: "Demo Registrations" },
  { to: "/admin/analytics", icon: BarChart3, label: "Analytics" },
  { to: "/admin/export", icon: Download, label: "Export Data" },
  { to: "/admin/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("ft_admin_auth");
    navigate("/admin/login");
  };

  const Content = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-surface-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center shadow-md shadow-primary-600/20">
            <Fuel size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-extrabold text-surface-900 leading-none">FuelTracks</p>
            <p className="text-[10px] font-semibold text-primary-600 uppercase tracking-widest mt-0.5">Admin Portal</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="px-3 py-2 text-[10px] font-bold text-surface-400 uppercase tracking-widest">Main Menu</p>
        {NAV.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-primary-600 text-white shadow-md shadow-primary-600/20"
                  : "text-surface-600 hover:bg-surface-100 hover:text-surface-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={17} className={isActive ? "text-white" : "text-surface-400 group-hover:text-primary-600 transition-colors"} />
                <span className="flex-1">{label}</span>
                {isActive && <ChevronRight size={14} className="text-primary-200" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-surface-100">
        <button
          id="sidebar-logout-btn"
          onClick={handleLogout}
          className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-surface-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
        >
          <LogOut size={17} className="text-surface-400 group-hover:text-red-500 transition-colors" />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex flex-col w-60 shrink-0 border-r border-surface-100 bg-white h-screen sticky top-0">
        <Content />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-surface-900/30 backdrop-blur-[2px] z-40 lg:hidden"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-surface-100 z-50 lg:hidden flex flex-col"
            >
              <button
                onClick={onClose}
                className="absolute right-3 top-3 w-8 h-8 rounded-xl hover:bg-surface-100 text-surface-400 flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
              <Content />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
