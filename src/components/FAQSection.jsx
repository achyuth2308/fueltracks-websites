import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { faqs } from "../data/faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-surface-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <AnimatedSection>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold uppercase tracking-wider">
              FAQ
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 leading-tight">
              Frequently asked{" "}
              <span className="text-gradient">questions.</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={i} delay={0.05 * i}>
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-primary-200 shadow-lg shadow-primary-500/5"
                      : "bg-white border-surface-100 hover:border-surface-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span
                      className={`text-base sm:text-lg font-semibold pr-4 transition-colors ${
                        isOpen ? "text-primary-700" : "text-surface-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? "bg-primary-100 text-primary-600" : "bg-surface-100 text-surface-500"
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
      </div>
    </section>
  );
}
