import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { company } from "../data/siteConfig";

const products = [
  "GPS Tracking Device",
  "Fuel Sensor",
  "AIS-140 Device",
  "Fleet Management Software",
  "School Bus Tracking",
  "Other",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Fuel Tracks,%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ACity: ${formData.city}%0AProduct: ${formData.product}%0AMessage: ${formData.message}`;
    window.open(
      `https://wa.me/${company.whatsapp}?text=${text}`,
      "_blank"
    );
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-surface-50 border border-surface-200 text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all duration-200";

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact info */}
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#D9A94D]/10 to-[#DEA95A]/10 border border-[#D9A94D]/20 text-[#D9A94D] text-xs font-semibold uppercase tracking-wider">
                Contact Us
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-surface-900 leading-tight">
                Let's build smarter fleet management,{" "}
                <span className="text-gradient">together.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-4 text-lg text-surface-500 leading-relaxed">
                Talk to our team about GPS tracking, fuel monitoring and
                end-to-end fleet visibility — tailored for your operation.
              </p>
            </AnimatedSection>

            {/* Contact cards */}
            <AnimatedSection delay={0.3}>
              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-50 border border-surface-100">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-surface-900">
                      Headquarters
                    </p>
                    <a
                      href={company.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-surface-500 hover:text-primary-600 transition-colors"
                    >
                      {company.address}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-50 border border-surface-100">
                  <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-surface-900">
                      Phone
                    </p>
                    <div className="text-sm text-surface-500">
                      <a href={`tel:${company.phone}`} className="hover:text-primary-600 transition-colors block">
                        {company.phone}
                      </a>
                      <a href={`tel:${company.phone2}`} className="hover:text-primary-600 transition-colors block">
                        {company.phone2}
                      </a>
                      <a href={`tel:${company.landline}`} className="hover:text-primary-600 transition-colors block">
                        {company.landline}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-50 border border-surface-100">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-surface-900">
                      Email
                    </p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-sm text-surface-500 hover:text-primary-600 transition-colors block"
                    >
                      {company.email}
                    </a>
                    <a
                      href={`mailto:${company.email2}`}
                      className="text-sm text-surface-500 hover:text-primary-600 transition-colors block"
                    >
                      {company.email2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface-50 border border-surface-100">
                  <div className="w-10 h-10 rounded-xl bg-warm-400/20 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-warm-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-surface-900">
                      Business Hours
                    </p>
                    <p className="text-sm text-surface-500">
                      {company.hours} · Responds in 2 hours
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative p-8 rounded-3xl bg-white border border-surface-200 shadow-xl shadow-surface-900/5">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-surface-900">
                  Send your enquiry on WhatsApp
                </h3>
                <p className="text-sm text-surface-500 mt-1">
                  Fill the form and we'll open WhatsApp with your details
                  pre-filled.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">
                      City / Location
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Hyderabad"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">
                    Product Interested In *
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select a product…</option>
                    {products.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">
                    Message / Requirement *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="I need GPS tracking for 15 trucks…"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent-600 text-white font-semibold hover:bg-accent-500 transition-colors shadow-lg shadow-accent-600/25"
                >
                  <MessageCircle size={20} />
                  Send Enquiry on WhatsApp
                </motion.button>

                <p className="text-xs text-center text-surface-400">
                  Opens WhatsApp with your details pre-filled. We never share
                  your information.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
