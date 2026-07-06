import AnimatedSection from "./AnimatedSection";
import DynamicIcon from "./DynamicIcon";
import { services } from "../data/servicesData";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-surface-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold uppercase tracking-wider">
              Our Services
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 leading-tight">
              Everything your fleet needs,{" "}
              <span className="text-gradient">in one platform.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-lg text-surface-500 leading-relaxed">
              A complete suite of GPS, fuel and IoT solutions — modular,
              scalable and built for Indian conditions.
            </p>
          </AnimatedSection>
        </div>

        {/* Horizontal scrollable row */}
        <div className="mt-16 flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((service, i) => (
            <AnimatedSection 
              key={service.title} 
              delay={0.05 * i}
              className="snap-start shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] xl:w-[23vw]"
            >
              <div className="group relative h-[400px] rounded-3xl flex flex-col overflow-hidden bg-surface-900 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-surface-800">
                      <DynamicIcon
                        name={service.icon}
                        size={64}
                        className="text-surface-600 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  )}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>

                {/* Content / Bottom Section */}
                <div className="relative z-20 flex flex-col justify-end p-6 md:p-8 text-white h-full">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-surface-200 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
