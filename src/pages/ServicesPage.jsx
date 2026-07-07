import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import { services } from "../data/servicesData";
import {
  MapPin,
  Fuel,
  ScanLine,
  School,
  BarChart3,
  UserCheck,
  Fence,
  Power,
  ShieldAlert,
  Smartphone,
  Video,
  ArrowRight,
  Check
} from "lucide-react";

// Helper to map string icon names to Lucide components
const iconMap = {
  MapPin,
  Fuel,
  ScanLine,
  School,
  BarChart3,
  UserCheck,
  Fence,
  Power,
  ShieldAlert,
  Smartphone,
  Video,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 bg-surface-950 overflow-hidden">
        {/* Subtle noise and gradient background */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D9A94D]/10 to-[#DEA95A]/10 border border-[#D9A94D]/20 text-[#D9A94D] text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
              Our Services
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Next-Gen <br />
              <span className="text-surface-400 font-bold">Fleet Intelligence.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Comprehensive telemetry, real-time analytics, and uncompromising security. Protect your assets and optimize your operations with our premium ecosystem.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Zig-Zag Layout */}
      <section className="py-24 lg:py-40 bg-surface-50 relative overflow-hidden">
        {/* Ambient background orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sky-100 rounded-full blur-[120px] opacity-40 pointer-events-none translate-x-1/3" />
        <div className="absolute bottom-1/4 left-0 w-[800px] h-[800px] bg-sky-50 rounded-full blur-[120px] opacity-60 pointer-events-none -translate-x-1/3" />

        <div className="relative w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32 lg:space-y-48">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || MapPin;

              return (
                <div
                  key={service.title}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center`}
                >
                  {/* Text Information */}
                  <AnimatedSection
                    direction={i % 2 === 0 ? "left" : "right"}
                    className={i % 2 === 1 ? "lg:order-2" : "lg:order-1"}
                  >
                    <div className="max-w-lg mx-auto lg:mx-0">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-surface-200 flex items-center justify-center shadow-lg shadow-surface-900/5 mb-8">
                        <Icon className="text-sky-600" size={28} strokeWidth={2.5} />
                      </div>
                      <h2 className="text-4xl sm:text-5xl font-extrabold text-surface-900 tracking-tight leading-[1.1]">
                        {service.title}
                      </h2>
                      <p className="mt-6 text-lg text-surface-600 leading-relaxed font-medium">
                        {service.description}
                      </p>

                      <ul className="mt-10 space-y-4">
                        {['Real-time precision analytics', 'Cloud-synced operational data', 'Enterprise-grade security'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-4 text-surface-700">
                            <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                              <Check size={14} className="text-sky-600" strokeWidth={3} />
                            </div>
                            <span className="font-semibold text-[15px]">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-12">
                        <a href="/contact" className="group inline-flex items-center gap-4 px-7 py-4 rounded-full bg-surface-900 text-white font-semibold hover:bg-surface-800 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-xl shadow-surface-900/10">
                          <span className="pl-2">Get Started</span>
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                            <ArrowRight size={14} strokeWidth={2.5} />
                          </div>
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Image Visual (Premium Glass Container) */}
                  <AnimatedSection
                    direction={i % 2 === 0 ? "right" : "left"}
                    className={i % 2 === 1 ? "lg:order-1" : "lg:order-2"}
                  >
                    <div className="relative p-2 sm:p-3 rounded-[2.5rem] bg-white border border-surface-200/60 shadow-2xl shadow-surface-900/5 group hover:shadow-surface-900/10 transition-shadow duration-700">
                      <div className="relative rounded-[calc(2.5rem-0.75rem)] overflow-hidden bg-sky-50 flex items-center justify-center p-2 min-h-[400px]">
                        <div className="absolute inset-0 bg-sky-300/20 blur-3xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Only render img if service has an image, to avoid broken icons, though they all should have images now */}
                        {service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-auto max-h-[500px] object-cover relative z-10 rounded-2xl group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] drop-shadow-2xl"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-80 flex items-center justify-center text-surface-400 font-medium">Image processing...</div>
                        )}
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none z-20" />
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
