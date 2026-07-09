import { Menu } from "lucide-react";
import NotificationBell from "./NotificationBell";
import { useLocation } from "react-router-dom";

const PAGE_TITLES = {
  "/admin/dashboard": { title: "Dashboard", sub: "Welcome back, Admin" },
  "/admin/registrations": { title: "Demo Registrations", sub: "Manage all registration requests" },
  "/admin/analytics": { title: "Analytics", sub: "Registration trends and insights" },
  "/admin/export": { title: "Export Data", sub: "Download registrations in Excel or CSV" },
  "/admin/settings": { title: "Settings", sub: "Manage your admin profile" },
};

export default function TopBar({ onMenuOpen }) {
  const location = useLocation();
  const page = PAGE_TITLES[location.pathname] || { title: "Admin", sub: "" };

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-surface-100 px-5 py-3.5 flex items-center gap-4">
      {/* Mobile hamburger */}
      <button
        id="topbar-menu-btn"
        onClick={onMenuOpen}
        className="lg:hidden w-9 h-9 rounded-xl border border-surface-200 flex items-center justify-center text-surface-500 hover:bg-surface-50 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* Page title */}
      <div className="flex-1 min-w-0">
        <h1 className="text-base font-bold text-surface-900 leading-none truncate">{page.title}</h1>
        <p className="text-xs text-surface-400 font-medium mt-0.5 hidden sm:block">{page.sub}</p>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2.5">
        <NotificationBell />

        {/* Admin avatar */}
        <div className="flex items-center gap-2.5 pl-3 border-l border-surface-100">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
            A
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-bold text-surface-800 leading-none">Admin</p>
            <p className="text-[10px] text-surface-400 mt-0.5">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
