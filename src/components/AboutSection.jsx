import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { aboutStats } from "../data/servicesData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-surface-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Map / Image placeholder */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/5">
                <img src="/images/fuelsensor.png" alt="Fuel Sensor" className="w-full h-full object-cover" />
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Content */}
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold uppercase tracking-wider">
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
              <p className="mt-6 text-lg text-surface-500 leading-relaxed">
                From single-truck owners to enterprise transport companies,
                Fuel Tracks delivers a unified GPS + fuel-monitoring stack
                engineered for accuracy, uptime and ROI.
              </p>
            </AnimatedSection>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {aboutStats.map((stat, i) => (
                <AnimatedSection key={stat.title} delay={0.2 + i * 0.1}>
                  <div className="p-5 rounded-2xl bg-surface-50 border border-surface-100 hover:border-primary-200 hover:bg-white hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-surface-700 group-hover:text-primary-700 transition-colors">
                        {stat.title}
                      </h3>
                      <span className="text-2xl font-bold text-primary-600">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm text-surface-500">
                      {stat.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
