import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { testimonials } from "../data/testimonialsData";
import { Star, Quote } from "lucide-react";

const allTestimonials = [
  ...testimonials,
  {
    name: "Vikram Naidu",
    role: "Director",
    company: "SunRise Cargo Solutions",
    quote: "Installation was done in one day. Within a week we had full visibility of our 28-truck fleet. The ROI was obvious in the first month.",
    avatar: null,
    rating: 5,
  },
  {
    name: "Asha Menon",
    role: "Transport Head",
    company: "Kerala Roads & Carriers",
    quote: "The geo-fence boundary alerts helped us catch 3 unauthorized diversions in the first month alone.",
    avatar: null,
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-sky-50 relative overflow-hidden">
      {/* Ocean Slate ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned for asymmetry */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#D9A94D]/10 to-[#DEA95A]/10 border border-[#D9A94D]/20 text-[#D9A94D] text-xs font-semibold uppercase tracking-wider">
                Customer stories
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 leading-tight">
                What fleet operators{" "}
                <span className="text-gradient">say about us.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-4 text-lg text-surface-500 leading-relaxed">
                Real feedback from transport companies across India — not cherry-picked, just the actual results.
              </p>
            </AnimatedSection>
          </div>

          {/* Aggregate metric card — Ocean Slate dark */}
          <AnimatedSection delay={0.3} direction="right">
            <div className="bg-surface-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/15 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="text-warm-400 fill-warm-400" />
                  ))}
                </div>
                <p className="text-4xl font-bold tabular-nums">4.9<span className="text-2xl text-surface-400">/5</span></p>
                <p className="text-surface-400 mt-1 text-sm">Based on 280+ fleet deployments</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="flex -space-x-2">
                    {allTestimonials.slice(0, 4).map((t, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-surface-900"
                      >
                        {t.name.split(" ").map(n => n[0]).join("")}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-surface-400">
                    <span className="text-white font-semibold">1,000+ vehicles</span> tracked daily
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Testimonial cards — staggered masonry-style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {allTestimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name + i} delay={0.05 * i}>
              <div className="break-inside-avoid group relative p-7 rounded-2xl bg-white border border-sky-100 hover:bg-white hover:shadow-xl hover:shadow-primary-500/6 hover:border-primary-200 transition-all duration-300 mb-6 card-spotlight cursor-default">
                {/* Quote icon */}
                <Quote
                  size={28}
                  className="text-sky-300 mb-3 group-hover:text-primary-300 transition-colors"
                />

                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating || 5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-warm-500 fill-warm-500"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-surface-700 leading-relaxed text-base">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="mt-5 flex items-center gap-3 border-t border-sky-50 pt-4">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-9 h-9 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xs shadow-primary-tinted">
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
