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
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <AnimatedSection direction="left">
            <div className="relative mx-auto max-w-sm">
              {/* Phone frame */}
              <div className="relative bg-surface-900 rounded-[3rem] p-3 shadow-2xl shadow-surface-900/20">
                <div className="bg-white rounded-[2.4rem] overflow-hidden aspect-[9/19.5]">
                  <img src="/images/trackingimage.png" alt="Mobile App Tracking" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -right-8 top-1/4 glass rounded-2xl p-3 shadow-xl animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center">
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
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-xs font-semibold uppercase tracking-wider">
                MOBILE APP
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 leading-tight">
                Your fleet,{" "}
                <span className="text-gradient">in your pocket.</span>
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
                    <div className="w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-accent-600" />
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
