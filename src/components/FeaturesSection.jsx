import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import VideoEmbed from "./VideoEmbed";
import { premiumFeatures } from "../data/servicesData";
import { Check, ArrowRight } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#D9A94D]/10 to-[#DEA95A]/10 border border-[#D9A94D]/20 text-[#D9A94D] text-xs font-semibold uppercase tracking-wider">
              Premium Features
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 leading-tight">
              Engineered for accuracy.{" "}
              <span className="text-gradient-violet">Designed for clarity.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-lg text-surface-500">
              A precision-built data stack delivered through a beautifully simple interface.
            </p>
          </AnimatedSection>
        </div>

        {/* Feature blocks — alternating layout like Stripe */}
        <div className="mt-20 space-y-24 lg:space-y-32">
          {premiumFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
            >
              {/* Content */}
              <AnimatedSection
                direction={i % 2 === 0 ? "left" : "right"}
                className={i % 2 === 1 ? "lg:order-2" : "lg:order-1"}
              >
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#D9A94D]/10 to-[#DEA95A]/10 border border-[#D9A94D]/20 text-[#D9A94D] text-xs font-semibold uppercase tracking-wider">
                    {feature.badge}
                  </span>
                  <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg text-surface-500 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bullet list */}
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-accent-600" />
                        </div>
                        <span className="text-surface-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>


                </div>
              </AnimatedSection>

              {/* Visual — Video/Image slot */}
              <AnimatedSection
                direction={i % 2 === 0 ? "right" : "left"}
                className={i % 2 === 1 ? "lg:order-1" : "lg:order-2"}
              >
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-surface-900/10">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
