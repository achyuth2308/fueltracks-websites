import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, Activity, CheckCircle, Users, Wifi, MapPin, 
  Map, AlertCircle, GitCommit, Bell, ArrowRight, Check, Minus, ChevronDown, Cpu, Box
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import { flagshipProducts, catalogCategories, comparisonTableData } from "../data/productsData";

const iconMap = {
  Shield, Activity, CheckCircle, Users, Wifi, MapPin, Map, AlertCircle, GitCommit, Bell, Cpu, Box
};

export default function ProductDetailsPage() {
  const { productId } = useParams();
  
  // Find product
  let product = flagshipProducts.find(p => p.id === productId);
  if (!product) {
    for (const cat of catalogCategories) {
      const found = cat.products.find(p => p.id === productId);
      if (found) {
        product = found;
        break;
      }
    }
  }
  // Fallback if truly not found
  product = product || flagshipProducts[0];
  const [openAccordion, setOpenAccordion] = useState(0);

  // Safely fallback if detailed data is missing (only VLTD 4G has it currently)
  const overview = product.detailedOverview;
  const premium = product.premiumFeatures;
  const tech = product.technicalDetails;

  return (
    <>
      <div className="pt-20 lg:pt-28 bg-white" />

      {/* Hero Section */}
      <section className="py-16 lg:py-28 bg-surface-50 relative overflow-hidden border-b border-surface-200">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[100px] opacity-30 pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[90px] opacity-20 pointer-events-none translate-y-1/3 -translate-x-1/4" />
        <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <AnimatedSection>
               <div>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    {product.badge}
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-surface-900 tracking-tight leading-[1.1]">
                    {product.name}
                  </h1>
                  <p className="mt-6 text-xl text-surface-500 leading-relaxed font-medium">
                    {product.description}
                  </p>
                  <div className="mt-10 flex gap-4">
                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all hover:-translate-y-1 shadow-xl shadow-primary-500/25 group">
                      More Details
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
               </div>
             </AnimatedSection>
             <AnimatedSection direction="right">
               <div className="relative rounded-[2.5rem] bg-surface-50 p-8 sm:p-12 border border-surface-200 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 to-transparent rounded-[2.5rem]" />
                  <img src={product.image} alt={product.name} className="max-w-md w-full h-auto max-h-[400px] object-contain drop-shadow-2xl relative z-10" />
               </div>
             </AnimatedSection>
           </div>
        </div>
      </section>

      {/* Overview Section */}
      {overview && (
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-surface-200 text-sky-600 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm mb-6">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-2" />
                Overview
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-surface-900 tracking-tight">
                {overview.title}
              </h2>
              <p className="mt-4 text-xl text-surface-500 font-medium">
                {overview.subtitle}
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overview.items.map((item, i) => {
              const Icon = iconMap[item.icon] || Shield;
              return (
                <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                  <div className="bg-white p-8 rounded-3xl border border-surface-200/60 shadow-lg shadow-surface-900/5 h-full relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <span className="absolute top-8 right-8 text-xs font-bold text-surface-300 tracking-widest">
                      0{i + 1}
                    </span>
                    <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-surface-900 mb-3">{item.title}</h3>
                    <p className="text-surface-500 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {/* Premium Features */}
      {premium && (
      <section className="py-24 bg-surface-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-surface-200 text-sky-600 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm mb-6">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-2" />
                Premium Features
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-surface-900 tracking-tight">
                {premium.title}
              </h2>
              <p className="mt-4 text-xl text-surface-500 font-medium">
                {premium.subtitle}
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premium.items.map((item, i) => {
              const Icon = iconMap[item.icon] || Shield;
              return (
                <AnimatedSection key={i} delay={i * 0.05} className="h-full">
                  <div className="bg-white p-8 rounded-3xl border border-surface-200/60 shadow-lg shadow-surface-900/5 h-full group hover:shadow-xl hover:-translate-y-1 hover:border-sky-200 transition-all duration-300">
                    <div className="w-12 h-12 flex items-center justify-center mb-5 text-sky-500 bg-sky-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-surface-900 mb-2">{item.title}</h3>
                    <p className="text-surface-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {/* Technical Details */}
      {tech && (
      <section className="py-24 bg-surface-50 relative overflow-hidden border-t border-surface-200">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-surface-900 tracking-tight">
              The technical details, neatly laid out.
            </h2>
            <p className="mt-4 text-xl text-surface-500 font-medium mb-16">
              Every number verified. Nothing hidden in fine print.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-surface-900/5 border border-surface-200 overflow-hidden text-left p-3">
              {tech.map((item, i) => {
                const isOpen = openAccordion === i;
                return (
                  <div key={i} className="mb-2 last:mb-0">
                    <button 
                      onClick={() => setOpenAccordion(isOpen ? -1 : i)}
                      className={`w-full px-8 py-6 flex items-center justify-between rounded-[1.5rem] transition-all duration-300 ${isOpen ? 'bg-surface-50 shadow-sm border border-surface-100' : 'bg-transparent border border-transparent hover:bg-surface-50'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 shrink-0">
                          <Box size={16} />
                        </div>
                        <span className="text-lg font-bold text-surface-900 text-left">{item.label}</span>
                      </div>
                      <ChevronDown 
                        className={`text-surface-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} 
                        size={20} 
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          className="overflow-hidden bg-surface-50/50"
                        >
                          <div className="px-8 pb-6 pt-4 pl-20 -mt-2">
                            <p className="text-surface-600 font-medium leading-relaxed">{item.value}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>
      )}

      {/* Comparison Table */}
      {comparisonTableData.headers.some(h => h.id === product.id) && (
      <section className="py-24 bg-white relative overflow-hidden border-t border-surface-100">
        <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <AnimatedSection>
            <div className="overflow-x-auto pb-8 rounded-3xl border border-surface-200/60 shadow-xl shadow-surface-900/5 bg-white">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr>
                    <th className="p-8 border-b border-surface-200 w-[20%] align-bottom">
                      <span className="text-[11px] font-bold text-surface-400 uppercase tracking-widest">Feature</span>
                    </th>
                    {comparisonTableData.headers.map((h, i) => {
                      const isCurrent = h.id === product.id;
                      return (
                      <th key={i} className={`p-8 border-b border-surface-200 w-[20%] align-bottom ${isCurrent ? 'bg-sky-50/40 relative' : ''}`}>
                        {isCurrent && (
                          <div className="absolute top-0 left-0 right-0 h-1 bg-sky-500" />
                        )}
                        {isCurrent && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500 text-white text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm">
                            Current
                          </span>
                        )}
                        <h4 className="text-base font-bold text-surface-900 mb-1">{h.title}</h4>
                        <p className="text-[10px] font-bold text-surface-400 uppercase tracking-widest">{h.subtitle}</p>
                      </th>
                    )})}
                  </tr>
                </thead>
                <tbody>
                  {comparisonTableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="group hover:bg-surface-50/30 transition-colors">
                      <td className="p-8 border-b border-surface-100 font-bold text-surface-900 text-sm">
                        {row.feature}
                      </td>
                      {row.values.map((val, vIdx) => {
                        const isCurrent = comparisonTableData.headers[vIdx].id === product.id;
                        return (
                          <td key={vIdx} className={`p-8 border-b border-surface-100 ${isCurrent ? 'bg-sky-50/40 font-semibold text-surface-900' : 'text-surface-500'} text-sm`}>
                            {typeof val === 'boolean' ? (
                              val ? (
                                <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center shadow-sm shadow-sky-500/20">
                                  <Check size={16} strokeWidth={2.5} className="text-white"/>
                                </div>
                              ) : (
                                <Minus size={20} strokeWidth={2} className="text-surface-300"/>
                              )
                            ) : (
                              val
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>
      )}

      <CTASection />
    </>
  );
}
