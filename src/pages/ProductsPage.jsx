import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import VideoEmbed from "../components/VideoEmbed";
import { flagshipProducts, catalogCategories } from "../data/productsData";
import { Check, Shield, Cpu, Zap, Headphones, ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 bg-surface-950 overflow-hidden">
        {/* Subtle noise and gradient background */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-surface-300 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
              Our Products
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Industrial-Grade <br/>
              <span className="text-surface-400">Hardware & Software.</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto leading-relaxed font-medium">
              From high-precision capacitive fuel sensors to AIS-140 certified GPS trackers and powerful analytics dashboards, discover the tools that power India's toughest fleets.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Flagship Products — Editorial Split / Z-Axis Elements */}
      <section className="py-24 lg:py-40 bg-surface-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32 lg:space-y-48">
            {flagshipProducts.map((product, i) => (
              <div
                key={product.id}
                className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <AnimatedSection 
                  direction={i % 2 === 0 ? "left" : "right"}
                  className={i % 2 === 1 ? "lg:order-2" : "lg:order-1"}
                >
                  <div className="max-w-lg">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-200/50 border border-surface-300/50 text-surface-700 text-[10px] font-bold uppercase tracking-[0.2em]">
                      {product.badge}
                    </span>
                    <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 tracking-tight leading-[1.1]">
                      {product.name}
                    </h2>
                    <p className="mt-8 text-lg text-surface-600 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Tech Specs */}
                    <div className="mt-10 grid grid-cols-2 gap-6">
                      {product.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="relative group">
                          <div className="absolute -inset-2 bg-surface-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                          <p className="text-[10px] text-surface-400 font-bold uppercase tracking-[0.15em]">{spec.label}</p>
                          <p className="mt-2 text-sm font-semibold text-surface-900">{spec.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <ul className="mt-12 space-y-5 border-t border-surface-200/60 pt-8">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-surface-200 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={12} className="text-surface-700" strokeWidth={3} />
                          </div>
                          <span className="text-surface-700 font-medium leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-12">
                      <a href="/contact" className="group inline-flex items-center gap-4 px-6 py-3.5 rounded-full bg-surface-900 text-white font-medium hover:bg-surface-800 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-xl shadow-surface-900/10">
                        <span className="pl-2">Get a Quote</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                          <ArrowRight size={14} />
                        </div>
                      </a>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Visual - Double Bezel Architecture */}
                <AnimatedSection 
                  direction={i % 2 === 0 ? "right" : "left"}
                  className={i % 2 === 1 ? "lg:order-1" : "lg:order-2"}
                >
                  <div className="relative p-2 sm:p-3 rounded-[2.5rem] bg-surface-100/50 border border-surface-200/60 shadow-2xl shadow-surface-900/5 group">
                    <div className="relative rounded-[calc(2.5rem-0.75rem)] overflow-hidden bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,1)] flex items-center justify-center p-12 sm:p-16 h-full min-h-[400px]">
                      <div className="absolute inset-0 bg-gradient-to-tr from-surface-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                      
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-auto object-contain relative z-10 group-hover:scale-[1.05] group-hover:-rotate-1 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] drop-shadow-xl"
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

      {/* Why Choose Us Banner */}
      <section className="py-16 bg-surface-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {[
              { icon: Shield, title: "Rugged Design", desc: "Built for Indian conditions" },
              { icon: Zap, title: "High Precision", desc: "99.9% data accuracy" },
              { icon: Cpu, title: "Smart Edge Tech", desc: "Processes data instantly" },
              { icon: Headphones, title: "24/7 Support", desc: "Expert technical help" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="px-4 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4 text-accent-400">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-white font-bold">{item.title}</h4>
                  <p className="text-surface-400 text-sm mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standard Catalog Grid - Asymmetrical Bento Inspiration */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {catalogCategories.map((category, index) => (
            <div key={category.id}>
              <AnimatedSection>
                <div className="mb-16 border-b border-surface-200/50 pb-10 max-w-4xl">
                  <h2 className="text-4xl lg:text-5xl font-bold text-surface-900 tracking-tight">{category.name}</h2>
                  <p className="mt-6 text-xl text-surface-500 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </AnimatedSection>
              
              {category.products.length === 1 ? (
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left Side: Visual */}
                  <AnimatedSection direction="right" className="lg:order-1 h-full">
                    <div className="relative p-2 sm:p-3 rounded-[2.5rem] bg-surface-50 border border-surface-100 hover:bg-surface-100/50 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group h-full">
                      <div className="relative rounded-[calc(2.5rem-0.75rem)] overflow-hidden bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,1)] ring-1 ring-black/[0.03] flex items-center justify-center p-8 sm:p-12 h-full min-h-[300px]">
                        <span className="absolute top-5 left-5 inline-flex items-center px-3 py-1.5 rounded-full bg-white/90 border border-surface-200/50 text-surface-600 text-[10px] font-bold uppercase tracking-[0.2em] z-20 backdrop-blur-md shadow-sm">
                          {category.products[0].badge}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-tr from-surface-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <img 
                          src={category.products[0].image} 
                          alt={category.products[0].name} 
                          className="w-full h-auto max-h-[350px] object-contain relative z-10 group-hover:scale-[1.05] group-hover:-rotate-1 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] drop-shadow-xl"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  {/* Right Side: Information */}
                  <AnimatedSection direction="left" className="lg:order-2">
                    <div className="max-w-lg">
                      <h3 className="text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight leading-[1.1]">
                        {category.products[0].name}
                      </h3>
                      <p className="mt-6 text-lg text-surface-600 leading-relaxed">
                        {category.products[0].description}
                      </p>
                      
                      <div className="mt-8 grid grid-cols-2 gap-6">
                        {category.products[0].specs.map((spec, i) => (
                          <div key={i} className="relative group">
                            <div className="absolute -inset-2 bg-surface-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                            <p className="text-[10px] font-bold text-surface-400 uppercase tracking-[0.15em]">{spec.label}</p>
                            <p className="mt-2 text-sm font-semibold text-surface-900">{spec.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-10">
                        <a href="/contact" className="group inline-flex items-center gap-4 px-6 py-3.5 rounded-full bg-surface-900 text-white font-medium hover:bg-surface-800 active:scale-[0.98] transition-all duration-500 shadow-xl shadow-surface-900/10">
                          <span className="pl-2">Request Info</span>
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-all duration-500">
                            <ArrowRight size={14} />
                          </div>
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product, pIndex) => (
                    <AnimatedSection key={product.id} delay={0.1 * pIndex} className="h-full">
                      {/* Double-Bezel Architecture */}
                      <div className="group h-full p-2 rounded-[2rem] bg-surface-50 border border-surface-100 hover:bg-surface-100/50 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer">
                        
                        <div className="h-full flex flex-col bg-white rounded-[calc(2rem-0.5rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,1)] ring-1 ring-black/[0.03]">
                          
                          {/* Image Header */}
                          <div className="aspect-[4/3] bg-surface-50/30 p-8 flex items-center justify-center relative overflow-hidden group-hover:bg-surface-50/80 transition-colors duration-700">
                            <span className="absolute top-5 left-5 inline-flex items-center px-3 py-1.5 rounded-full bg-white/90 border border-surface-200/50 text-surface-600 text-[10px] font-bold uppercase tracking-[0.2em] z-20 backdrop-blur-md shadow-sm">
                              {product.badge}
                            </span>
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-contain relative z-10 group-hover:scale-[1.08] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] mix-blend-multiply"
                              loading="lazy"
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-surface-900 tracking-tight group-hover:text-surface-700 transition-colors duration-500">
                              {product.name}
                            </h3>
                            <p className="mt-4 text-sm text-surface-500 leading-relaxed flex-1">
                              {product.description}
                            </p>
                            
                            {/* Specs Grid */}
                            <div className="mt-8 pt-8 border-t border-surface-100/80 grid grid-cols-2 gap-4">
                              {product.specs.map((spec, i) => (
                                <div key={i}>
                                  <p className="text-[10px] font-bold text-surface-400 uppercase tracking-[0.15em]">{spec.label}</p>
                                  <p className="text-xs font-semibold text-surface-900 mt-1.5">{spec.value}</p>
                                </div>
                              ))}
                            </div>

                            <div className="mt-8 flex justify-end">
                               <div className="w-10 h-10 rounded-full bg-surface-50 border border-surface-200 flex items-center justify-center group-hover:bg-surface-900 group-hover:border-surface-900 group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] text-surface-400 group-hover:-rotate-45">
                                  <ArrowRight size={16} />
                               </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Installation Video Section */}
      <section className="py-24 lg:py-40 bg-surface-50 border-t border-surface-200/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side: Matter */}
            <AnimatedSection direction="right" className="max-w-lg">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-200/50 border border-surface-300 text-surface-700 text-[10px] font-bold uppercase tracking-[0.2em]">
                Installation Guide
              </span>
              <h3 className="mt-8 text-4xl sm:text-5xl font-bold text-surface-900 tracking-tight leading-[1.1]">
                Seamless <span className="text-surface-400">Integration.</span>
              </h3>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed">
                Watch our quick installation guide to get your fleet up and running in minutes. No complex wiring required. Our plug-and-play architecture ensures you can upgrade your fleet with zero downtime.
              </p>
              
              <ul className="mt-10 space-y-4">
                 {[
                   "Plug and play installation",
                   "Zero vehicle warranty void",
                   "Live in under 15 minutes"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-4">
                     <div className="w-6 h-6 rounded-full bg-surface-200 flex items-center justify-center shrink-0">
                       <Check size={12} className="text-surface-700" strokeWidth={3} />
                     </div>
                     <span className="text-surface-700 font-medium">{item}</span>
                   </li>
                 ))}
              </ul>
            </AnimatedSection>
            
            {/* Right Side: Video */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative p-2 sm:p-3 rounded-[2.5rem] bg-surface-100 border border-surface-200/60 shadow-2xl shadow-surface-900/10">
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

      <CTASection />
    </>
  );
}
