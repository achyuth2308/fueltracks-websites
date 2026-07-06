import AnimatedSection from "./AnimatedSection";
import DynamicIcon from "./DynamicIcon";
import { industries } from "../data/industriesData";

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-32 gradient-mesh-dark relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse-dot ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#D9A94D]/10 to-[#DEA95A]/10 border border-[#D9A94D]/20 text-[#D9A94D] text-xs font-semibold uppercase tracking-wider">
              Industries We Serve
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Trusted across every category of{" "}
              <span className="text-gradient">mobility.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-lg text-surface-400">
              From single-truck owners to enterprise operators — Fuel Tracks
              adapts to your industry.
            </p>
          </AnimatedSection>
        </div>

        {/* Industry cards grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.title} delay={0.05 * i}>
              <div className="group relative p-6 rounded-2xl glass-dark hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default h-full">
                {/* Icon slot */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-colors">
                  <DynamicIcon
                    name={industry.icon}
                    size={22}
                    className="text-sky-300"
                  />
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-accent-300 transition-colors">
                  {industry.title}
                </h3>
                <p className="mt-1 text-sm text-surface-400">
                  {industry.subtitle}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
