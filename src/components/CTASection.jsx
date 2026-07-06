import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600" />

            {/* Animated orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-400/20 rounded-full blur-2xl" />

            <div className="relative px-8 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
                Ready to track smarter?
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                Talk to our team about GPS tracking, fuel monitoring and
                end-to-end fleet visibility — tailored for your operation.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-surface-900 font-semibold hover:bg-surface-50 transition-colors shadow-xl"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/917997660442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
