import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import { flagshipProducts, catalogCategories } from "../data/productsData";
import { Check, Shield, Cpu, Zap, Headphones, ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-mesh-dark overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-surface-300 text-xs font-semibold uppercase tracking-wider">
              Our Products
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Industrial-Grade{" "}
              <span className="text-gradient">Hardware & Software</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-surface-400 max-w-3xl mx-auto leading-relaxed">
              From high-precision capacitive fuel sensors to AIS-140 certified GPS trackers and powerful analytics dashboards, discover the tools that power India's toughest fleets.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Flagship Products — Alternating Layout */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {flagshipProducts.map((product, i) => (
              <div
                key={product.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
              >
                {/* Content */}
                <AnimatedSection
                  direction={i % 2 === 0 ? "left" : "right"}
                  className={i % 2 === 1 ? "lg:order-2" : "lg:order-1"}
                >
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-xs font-semibold uppercase tracking-wider">
                      {product.badge}
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 leading-tight">
                      {product.name}
                    </h2>
                    <p className="mt-6 text-lg text-surface-500 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Tech Specs */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {product.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="p-4 rounded-xl bg-surface-50 border border-surface-100">
                          <p className="text-xs text-surface-500 font-semibold uppercase">{spec.label}</p>
                          <p className="mt-1 text-sm font-bold text-surface-900">{spec.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <ul className="mt-8 space-y-3">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                            <Check size={12} className="text-primary-600" />
                          </div>
                          <span className="text-surface-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 flex gap-4">
                      <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20">
                        Get a Quote
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Visual */}
                <AnimatedSection
                  direction={i % 2 === 0 ? "right" : "left"}
                  className={i % 2 === 1 ? "lg:order-1" : "lg:order-2"}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10 bg-surface-50 p-8 sm:p-12 border border-surface-200 group">
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/10 to-accent-400/10 group-hover:scale-105 transition-transform duration-700 rounded-3xl" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-contain relative z-10 group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
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

      {/* Standard Catalog Grid */}
      <section className="py-20 lg:py-32 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {catalogCategories.map((category, index) => (
            <div key={category.id}>
              <AnimatedSection>
                <div className="mb-12 border-b border-surface-200 pb-8">
                  <h2 className="text-3xl font-bold text-surface-900">{category.name}</h2>
                  <p className="mt-3 text-lg text-surface-500 max-w-3xl">
                    {category.description}
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, pIndex) => (
                  <AnimatedSection key={product.id} delay={0.1 * pIndex}>
                    <div className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-surface-200 shadow-lg shadow-surface-900/5 hover:shadow-xl hover:shadow-primary-900/10 hover:border-primary-200 transition-all duration-300">

                      {/* Image Header */}
                      <div className="aspect-video bg-gradient-to-br from-surface-100 to-white p-6 flex items-center justify-center relative overflow-hidden border-b border-surface-100">
                        <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-md bg-surface-900/5 text-surface-700 text-[10px] font-bold uppercase tracking-wider z-20 backdrop-blur-md">
                          {product.badge}
                        </span>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-surface-900 group-hover:text-primary-700 transition-colors">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm text-surface-500 leading-relaxed flex-1">
                          {product.description}
                        </p>

                        {/* Specs Grid */}
                        <div className="mt-6 pt-6 border-t border-surface-100 grid grid-cols-2 gap-3">
                          {product.specs.map((spec, i) => (
                            <div key={i}>
                              <p className="text-[10px] font-bold text-surface-400 uppercase tracking-wider">{spec.label}</p>
                              <p className="text-xs font-semibold text-surface-900 mt-0.5">{spec.value}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6">
                          <a href="/contact" className="block w-full text-center py-2.5 rounded-lg bg-surface-50 text-surface-900 font-semibold text-sm hover:bg-surface-100 transition-colors border border-surface-200">
                            Request Info
                          </a>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
