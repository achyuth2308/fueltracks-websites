import AnimatedSection from "./AnimatedSection";
import { testimonials } from "../data/testimonialsData";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-warm-400/10 border border-warm-400/20 text-warm-600 text-xs font-semibold uppercase tracking-wider">
              Testimonials
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 leading-tight">
              What our customers{" "}
              <span className="text-gradient">say.</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Testimonial cards — Stripe-style horizontal scroll on mobile */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={0.05 * i}>
              <div className="group relative h-full p-8 rounded-2xl bg-surface-50 border border-surface-100 hover:bg-white hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary-100 transition-all duration-300">
                {/* Quote icon */}
                <Quote
                  size={32}
                  className="text-primary-200 mb-4"
                />

                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="text-warm-500 fill-warm-500"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-surface-700 leading-relaxed text-base">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-surface-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-surface-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
