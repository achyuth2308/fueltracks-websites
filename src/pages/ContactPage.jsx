import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import ContactSection from "../components/ContactSection";
import CTASection from "../components/CTASection";
import { HelpCircle, MessagesSquare, Wrench } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-surface-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <AnimatedSection>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
              Support & Sales
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Get in <span className="text-surface-400">Touch.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Whether you need a custom enterprise quote, technical support, or just want to learn more about our hardware — we're here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The main contact form section */}
      <ContactSection />

      {/* FAQ / Support Promise Section */}
      <section className="py-24 bg-surface-50 relative overflow-hidden">
        <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">Frequently Asked Questions</h2>
              <p className="mt-4 text-surface-500 font-medium">Quick answers to common questions about our platform and hardware.</p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="h-full">
              <div className="bg-white p-8 rounded-3xl border border-surface-200/60 shadow-xl shadow-surface-900/5 h-full hover:shadow-2xl hover:shadow-surface-900/10 transition-shadow duration-500">
                <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-sky-600">
                  <MessagesSquare size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-surface-900 mb-3 tracking-tight">How fast do you respond?</h3>
                <p className="text-surface-600 leading-relaxed text-sm font-medium">
                  Our sales team typically responds within 2 hours during business hours. For existing customers, our technical support is available 24/7.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="h-full">
              <div className="bg-white p-8 rounded-3xl border border-surface-200/60 shadow-xl shadow-surface-900/5 h-full hover:shadow-2xl hover:shadow-surface-900/10 transition-shadow duration-500">
                <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
                  <Wrench size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-surface-900 mb-3 tracking-tight">Do you provide installation?</h3>
                <p className="text-surface-600 leading-relaxed text-sm font-medium">
                  Yes, we have a pan-India network of certified technicians who can install GPS trackers and fuel sensors directly at your location or depot.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="h-full">
              <div className="bg-white p-8 rounded-3xl border border-surface-200/60 shadow-xl shadow-surface-900/5 h-full hover:shadow-2xl hover:shadow-surface-900/10 transition-shadow duration-500">
                <div className="w-12 h-12 bg-accent-50 rounded-2xl flex items-center justify-center mb-6 text-accent-600">
                  <HelpCircle size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-surface-900 mb-3 tracking-tight">Can I get a custom quote?</h3>
                <p className="text-surface-600 leading-relaxed text-sm font-medium">
                  Absolutely. If you have a large fleet (50+ vehicles), fill out the form and we will arrange a custom enterprise pricing plan for you.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
