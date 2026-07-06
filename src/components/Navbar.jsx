import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Fuel } from "lucide-react";
import { navigation, company } from "../data/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
          scrolled ? "top-4 px-4 sm:px-6 lg:px-8" : "top-0"
        }`}
      >
        <div className={`w-full max-w-7xl mx-auto transition-all duration-500 ${
          scrolled 
            ? "bg-white/20 backdrop-blur-sm backdrop-brightness-110 backdrop-saturate-[2.5] backdrop-contrast-[1.15] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] ring-1 ring-white/40 rounded-full px-6" 
            : "bg-transparent px-4 sm:px-6 lg:px-8"
        }`}>
          <div className="flex items-center justify-between h-12 lg:h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/images/logo.webp" 
                alt="Fuel Tracks" 
                className="h-12 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-4">
              {navigation.main.map((item) => {
                const isActive =
                  item.href === "/"
                    ? location.pathname === "/"
                    : location.pathname === item.href ||
                      (item.href.startsWith("/#") && location.pathname === "/");
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary-50 text-primary-700"
                        : "text-surface-600 hover:text-surface-900 hover:bg-surface-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="https://admin.fueltracks.in/login"
                target="_blank"
                rel="noreferrer"
                className="hidden xl:inline-flex items-center px-4 py-2 rounded-full border border-[#D9A94D] text-[#D9A94D] text-sm font-semibold hover:bg-[#D9A94D]/10 transition-colors"
              >
                Admin Login
              </a>
              <a
                href="https://fueltracks.online/gps/public/login"
                target="_blank"
                rel="noreferrer"
                className="hidden lg:inline-flex items-center px-4 py-2 rounded-full border border-[#D9A94D] text-[#D9A94D] text-sm font-semibold hover:bg-[#D9A94D]/10 transition-colors"
              >
                Live Login
              </a>
              <Link
                to={navigation.cta.href}
                className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-surface-900 text-white text-sm font-semibold hover:bg-surface-800 transition-colors shadow-lg shadow-surface-900/20"
              >
                {navigation.cta.label}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl text-surface-700 hover:bg-surface-100 transition-colors"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navigation.main.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-4 py-3 rounded-xl text-lg font-medium text-surface-700 hover:bg-surface-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <a
                  href="https://admin.fueltracks.in/login"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center px-5 py-3 rounded-xl border border-[#D9A94D] text-[#D9A94D] font-semibold hover:bg-[#D9A94D]/10"
                >
                  Admin Login
                </a>
                <a
                  href="https://fueltracks.online/gps/public/login"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center px-5 py-3 rounded-xl border border-[#D9A94D] text-[#D9A94D] font-semibold hover:bg-[#D9A94D]/10"
                >
                  Live Login
                </a>
                <Link
                  to={navigation.cta.href}
                  className="block w-full text-center px-5 py-3 rounded-xl bg-surface-900 text-white font-semibold"
                >
                  {navigation.cta.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
