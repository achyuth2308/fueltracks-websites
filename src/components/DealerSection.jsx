import AnimatedSection from "./AnimatedSection";
import DynamicIcon from "./DynamicIcon";
import { dealerProgram } from "../data/dealerData";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function DealerSection() {
  return (
    <section className="py-20 lg:py-32 bg-sky-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-surface-900 via-surface-800 to-primary-900 p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <AnimatedSection>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#D9A94D]/10 to-[#DEA95A]/10 border border-[#D9A94D]/20 text-[#D9A94D] text-xs font-semibold uppercase tracking-wider">
                  {dealerProgram.badge}
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {dealerProgram.title}
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="mt-4 text-lg text-surface-300 leading-relaxed">
                  {dealerProgram.description}
                </p>
              </AnimatedSection>

              {/* Stats */}
              <AnimatedSection delay={0.3}>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {dealerProgram.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-surface-400 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={dealerProgram.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary-600/25"
                  >
                    Apply Now
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors"
                  >
                    Talk to Sales
                    <ArrowRight size={16} />
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Benefits */}
            <div className="space-y-4">
              {dealerProgram.benefits.map((benefit, i) => (
                <AnimatedSection key={benefit.title} delay={0.1 + i * 0.1}>
                  <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-accent-500/20 flex items-center justify-center shrink-0">
                      <DynamicIcon
                        name={benefit.icon}
                        size={20}
                        className="text-accent-400"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{benefit.title}</h4>
                      <p className="text-sm text-surface-400 mt-0.5">
                        {benefit.description}
                      </p>
                    </div>
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
