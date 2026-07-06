import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Flame } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "No setup fees",
  "Same-day installation",
  "24/7 live support",
  "Cancel anytime",
];

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-sky-50 relative overflow-hidden">
      {/* Ocean Slate ambient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden grain-overlay">
            {/* Ocean Slate gradient — blue to cyan */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-500" />

            {/* Animated orbs — sky + cyan */}
            <motion.div
              className="absolute top-0 right-0 w-72 h-72 bg-sky-400/15 rounded-full blur-3xl"
              animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-56 h-56 bg-accent-400/20 rounded-full blur-2xl"
              animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-40 h-40 bg-sky-300/10 rounded-full blur-2xl"
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Grid texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0V0zm20 0h1v1h-1V0zM0 20h1v1H0v-1zm20 20h1v1h-1v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center">
              {/* Eyebrow badge */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider mb-6">
                <Flame size={12} className="text-warm-400" />
                Start tracking today
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
                Ready to take control of your fleet?
              </h2>
              <p className="mt-4 text-lg text-white/75 max-w-xl mx-auto">
                Talk to our team about GPS tracking, fuel monitoring and
                end-to-end fleet visibility — tailored for your operation.
              </p>

              {/* Feature highlights */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {highlights.map((h) => (
                  <span key={h} className="inline-flex items-center gap-1.5 text-sm text-white/80">
                    <CheckCircle2 size={15} className="text-sky-300" />
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-surface-900 font-semibold hover:bg-sky-50 active:scale-[0.98] transition-all duration-200 shadow-xl hover:-translate-y-0.5"
                >
                  Contact us
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/917997660442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/20 active:scale-[0.98] transition-all duration-200"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
