import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ImagePlaceholder from "./ImagePlaceholder";
import { Check } from "lucide-react";
import { socials } from "../data/siteConfig";

export default function MobileAppSection() {
  const features = [
    "Live map with vehicle clustering",
    "Real-time fuel level & refill notifications",
    "Geo-fence, speed and SOS push alerts",
    "Trip history & driver scorecards",
    "One-tap driver communication",
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface-50 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup / Glass container */}
          <AnimatedSection direction="left">
            <div className="relative mx-auto max-w-sm">
              {/* Ambient glow behind the image */}
              <div className="absolute inset-0 bg-sky-300/20 rounded-3xl blur-3xl scale-110" />

              {/* True glassmorphism container matching the Hero Section */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10 bg-white/40 backdrop-blur-xl flex items-center justify-center p-2 border border-white/60 ring-1 ring-inset ring-white/50">
                <img
                  src="/images/mobilescrren.png"
                  alt="FuelTracks Mobile App Screen"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5 pointer-events-none" />
              </div>

              {/* Floating notification — fuel alert */}
              <div className="absolute -right-8 top-1/4 bg-white/70 backdrop-blur-xl rounded-2xl p-3 shadow-xl shadow-primary-900/5 border border-white/60 ring-1 ring-inset ring-white/50 animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center shadow-md shadow-red-500/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-surface-900">Fuel Alert</p>
                    <p className="text-xs text-surface-500">-20L drain detected</p>
                  </div>
                </div>
              </div>

              {/* Second floating card — route achievement */}
              <motion.div
                className="absolute -left-8 bottom-1/3 bg-white/70 backdrop-blur-xl rounded-2xl p-3 shadow-xl shadow-primary-900/5 border border-white/60 ring-1 ring-inset ring-white/50"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-500 flex items-center justify-center shadow-md shadow-accent-500/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-surface-900">Trip Complete</p>
                    <p className="text-xs text-surface-500">Saved 8.4L fuel today</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-accent-700 text-xs font-semibold uppercase tracking-wider">
                Mobile App
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-surface-900 leading-[1.1]">
                Your fleet,{" "}
                <span className="text-gradient block">in your pocket.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed">
                Native iOS and Android apps with live tracking, fuel alerts,
                push notifications and one-tap driver communication.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <ul className="mt-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-sky-600" />
                    </div>
                    <span className="text-surface-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                {socials.playStore && (
                  <a
                    href={socials.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-900 text-white font-medium hover:bg-surface-800 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                    Google Play
                  </a>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
