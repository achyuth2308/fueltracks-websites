import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Phone, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { faqs } from "../data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Ocean Slate ambient — sky-blue orb */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-sky-100/60 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-50/70 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#D9A94D]/10 to-[#DEA95A]/10 border border-[#D9A94D]/20 text-[#D9A94D] text-xs font-semibold uppercase tracking-wider">
              Common questions
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 leading-tight">
              Frequently asked{" "}
              <span className="text-gradient">questions.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">
              Everything you need to know about FuelTracks — installation, features, pricing and support.
            </p>
          </AnimatedSection>
        </div>

        {/* Two-column: Accordion left, CTA panel right */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <AnimatedSection key={i} delay={0.05 * i}>
                  <div
                    className={`rounded-2xl border transition-all duration-300 ${isOpen
                      ? "bg-sky-50 border-primary-200 shadow-lg shadow-primary-500/5"
                      : "bg-white border-sky-100 hover:border-sky-200"
                      }`}
                  >
                    <button
                      id={`faq-button-${i}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span
                        className={`text-base sm:text-lg font-semibold pr-4 transition-colors ${isOpen ? "text-primary-700" : "text-surface-900"
                          }`}
                      >
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-primary-100 text-primary-600" : "bg-sky-100 text-surface-500"
                          }`}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-surface-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Right side — Support CTA panel */}
          <AnimatedSection delay={0.3} direction="right">
            <div className="sticky top-24 space-y-4">
              {/* Dark support card */}
              <div className="rounded-3xl bg-surface-900 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/15 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center mb-5 shadow-primary-tinted">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                  <p className="text-surface-400 text-sm leading-relaxed mb-6">
                    Our team is available around the clock. Reach out and we'll respond within minutes.
                  </p>
                  <a
                    href={`https://wa.me/917337433351?text=${encodeURIComponent("Hello Fuel Tracks Team,\n\nI would like to know more about your GPS Tracking and Fleet Management solutions.\n\nPlease share the product details, pricing, and installation process.\n\nThank you.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-xl bg-white text-surface-900 font-semibold hover:bg-sky-50 active:scale-[0.98] transition-all duration-200 text-sm"
                  >
                    Chat on WhatsApp
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              {/* Phone support card — sky blue */}
              <div className="rounded-3xl bg-sky-50 border border-sky-200 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
                    <Phone size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-surface-900">Call support</p>
                    <p className="text-xs text-surface-500 mt-0.5">24/7 · Telugu, Hindi & English</p>
                  </div>
                </div>
                <a
                  href="tel:+917997660442"
                  className="mt-4 block text-center py-2.5 rounded-xl border border-sky-200 text-primary-700 text-sm font-semibold hover:bg-sky-100 transition-colors"
                >
                  +91 79976 60442
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
