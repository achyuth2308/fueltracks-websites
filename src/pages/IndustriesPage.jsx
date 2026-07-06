import AnimatedSection from "../components/AnimatedSection";
import DynamicIcon from "../components/DynamicIcon";
import { industries } from "../data/industriesData";
import CTASection from "../components/CTASection";

export default function IndustriesPage() {
  return (
    <>
      <section className="relative w-full h-screen flex items-center pt-24 lg:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/industry.png"
            alt="Industries Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-950/90 via-surface-950/30 to-transparent" />
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-4 shadow-xl">
              Our Reach
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl mb-6">
              Industries We Serve
            </h1>
            <p className="text-base sm:text-lg text-white drop-shadow-xl font-light italic border-l-2 border-[#D9A94D] pl-4 opacity-90">
              "Empowering diverse fleets with real-time tracking, total visibility, and intelligent operations."
            </p>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-surface-950 mb-8 tracking-tight">
            Different industries. Similar tracking goals.
          </h2>
          <div className="space-y-6 text-lg text-surface-600 leading-relaxed font-medium">
            <p>
              Every industry operates uniquely, facing its own set of logistical challenges, terrain conditions, and compliance requirements.
            </p>
            <p>
              Yet, all modern fleets share the same fundamental needs: maximizing operational efficiency, ensuring asset security, and reducing fuel costs while delivering superior service to their customers.
            </p>
            <p>
              Fuel Tracks combines advanced GPS technology, deep telematics, and intelligent analytics to help businesses across all sectors monitor, manage, and optimize their fleet operations in real-time.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-surface-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-surface-900 mb-12 tracking-tight text-center lg:text-left">
            Industries we serve
          </h2>
          {/* Industry cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <AnimatedSection key={industry.title} delay={0.05 * i}>
                <div className="group bg-white flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                  {/* Image slot */}
                  <div className="w-full h-56 bg-white overflow-hidden relative flex items-center justify-center border-b border-surface-100">
                    {industry.image ? (
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <DynamicIcon
                          name={industry.icon}
                          size={48}
                          className="text-primary-400 opacity-50"
                        />
                      </div>
                    )}
                  </div>

                  {/* Text content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-base text-surface-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
