import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import VideoEmbed from "./VideoEmbed";

const hardwareProducts = [
  {
    name: "VLTD 4G Device",
    description: "High-speed 4G tracking device with fallback support, ideal for real-time commercial fleet monitoring.",
    image: "/images/products/VLTD 4g device.jpeg",
    badge: "Premium",
  },
  {
    name: "VLTD 2G Device",
    description: "Reliable and cost-effective 2G tracking solution for standard logistics and compliance.",
    image: "/images/products/VLTD 2G.jpeg",
    badge: "Bestseller",
  },
  {
    name: "Basic GPS Device",
    description: "Compact and discreet tracker for 2-wheelers and light vehicles. Easy plug and play.",
    image: "/images/products/basic device.jpeg",
    badge: "Compact",
  },
  {
    name: "Capacitive Fuel Sensor",
    description: "High-precision fuel probe that detects minute drains and verifies every single refill.",
    image: "/images/products/fuel-sensor.png",
    badge: "High Accuracy",
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Ocean Slate ambient gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-50/50 rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />
      
      {/* Subtle top border wave */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-50/50 border border-sky-100/80 text-primary-600 text-[10px] font-bold uppercase tracking-[0.2em]">
              Our Hardware
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 tracking-tight">
              Industrial-grade devices built for{" "}
              <span className="text-surface-400">India's roads.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-2xl mx-auto">
              Our hardware is designed to withstand harsh conditions while providing reliable, real-time data to your dashboard.
            </p>
          </AnimatedSection>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hardwareProducts.map((product, i) => (
            <AnimatedSection key={product.name} delay={0.1 * i} className="h-full">
              {/* Double-Bezel Outer Shell */}
              <div className="group h-full p-1.5 rounded-[2rem] bg-surface-50 border border-surface-100 hover:bg-sky-50/50 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer">
                
                {/* Inner Core */}
                <div className="h-full flex flex-col bg-white rounded-[calc(2rem-0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,1)] ring-1 ring-black/[0.03]">
                  
                  {/* Image Area */}
                  <div className="aspect-[4/3] bg-surface-50/30 p-6 flex items-center justify-center relative overflow-hidden group-hover:bg-sky-50/30 transition-colors duration-700">
                    <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-white/90 border border-surface-100 text-surface-600 text-[10px] font-bold uppercase tracking-[0.15em] z-20 backdrop-blur-md shadow-sm">
                      {product.badge}
                    </span>
                    
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/0 to-sky-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain relative z-10 group-hover:scale-[1.08] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] mix-blend-multiply"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-surface-900 tracking-tight group-hover:text-primary-600 transition-colors duration-500">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-sm text-surface-500 leading-relaxed flex-1">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Installation Video Section */}
        <div className="mt-32 lg:mt-40">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <AnimatedSection>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-100/50 border border-surface-200 text-surface-600 text-[10px] font-bold uppercase tracking-[0.2em]">
                Installation Guide
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h3 className="mt-6 text-4xl sm:text-5xl font-bold text-surface-900 tracking-tight">
                Seamless <span className="text-surface-400">Integration.</span>
              </h3>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-xl mx-auto">
                Watch our quick installation guide to get your fleet up and running in minutes. No complex wiring required.
              </p>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.3}>
            {/* Double-Bezel Architecture for Video */}
            <div className="max-w-4xl mx-auto p-2 sm:p-3 rounded-[2.5rem] bg-surface-50 border border-surface-200/60 shadow-2xl shadow-surface-900/10">
              <div className="relative rounded-[calc(2.5rem-0.75rem)] overflow-hidden bg-surface-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ring-1 ring-black/10">
                <VideoEmbed 
                  youtubeId="RJ8p30zMMKw" 
                  className="w-full aspect-video opacity-90 hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
