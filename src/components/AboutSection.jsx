import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { aboutStats } from "../data/servicesData";
import { TrendingUp, Award, Clock, MapPin } from "lucide-react";

const metricIcons = [TrendingUp, Award, Clock, MapPin];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Sky-blue ambient background */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-sky-100/60 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-50/70 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image with layered depth */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Back shadow layer — sky blue tint */}
              <div className="absolute inset-4 bg-sky-100 rounded-3xl" />
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/6">
                <img
                  src="/images/fuelsensor.png"
                  alt="Fuel sensor device used by FuelTracks for precision fleet monitoring"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/8 to-transparent pointer-events-none" />
              </div>

              {/* Floating metric callout */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-4 shadow-xl shadow-primary-500/10 border border-sky-100"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-primary-tinted">
                    <TrendingUp size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-surface-900 tabular-nums">₹2.4L+</p>
                    <p className="text-xs text-surface-500">avg. savings per fleet/yr</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right — Content */}
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#D9A94D]/10 to-[#DEA95A]/10 border border-[#D9A94D]/20 text-[#D9A94D] text-xs font-semibold uppercase tracking-wider">
                About Fuel Tracks
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 leading-tight">
                An IoT platform built for{" "}
                <span className="text-gradient">India's toughest fleets.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-[52ch]">
                From single-truck owners to enterprise transport companies,
                Fuel Tracks delivers a unified GPS + fuel-monitoring stack
                engineered for accuracy, uptime and ROI.
              </p>
            </AnimatedSection>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {aboutStats.map((stat, i) => {
                const Icon = metricIcons[i % metricIcons.length];
                return (
                  <AnimatedSection key={stat.title} delay={0.2 + i * 0.1}>
                    <div className="p-5 rounded-2xl bg-sky-50 border border-[#D9A94D]/40 hover:border-[#D9A94D] hover:bg-white hover:shadow-lg hover:shadow-[#D9A94D]/20 transition-all duration-300 group card-spotlight">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-sky-100 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                            <Icon size={14} className="text-primary-600" />
                          </div>
                          <h3 className="text-sm font-semibold text-surface-700 group-hover:text-primary-700 transition-colors">
                            {stat.title}
                          </h3>
                        </div>
                        <span className="text-2xl font-bold text-primary-600 tabular-nums">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-sm text-surface-500">{stat.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
