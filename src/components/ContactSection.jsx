import { useState } from "react";
import { motion } from "framer-motion";
import {
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

    // Friendly validation check
    if (!formData.name || !formData.name.trim()) {
      alert("Please enter your Full Name.");
      return;
    }
    if (!formData.phone || !formData.phone.trim()) {
      alert("Please enter your Phone Number.");
      return;
    }
    if (!formData.product) {
      alert("Please select a Product Interested In.");
      return;
    }
    if (!formData.message || !formData.message.trim()) {
      alert("Please enter your Message / Requirement.");
      return;
    }

    const nameVal = formData.name.trim();
    const phoneVal = formData.phone.trim();
    const emailVal = formData.email ? formData.email.trim() : "";
    const cityVal = formData.city ? formData.city.trim() : "";
    const productVal = formData.product;
    const messageVal = formData.message.trim();

    const messageTemplate = `Hello Fuel Tracks Team,

I would like to enquire about one of your products.

━━━━━━━━━━━━━━━━━━━━

Customer Details

👤 Name:
${nameVal}

📞 Phone:
${phoneVal}

📧 Email:
${emailVal || "Not Provided"}

📍 City:
${cityVal || "Not Provided"}

━━━━━━━━━━━━━━━━━━━━

📦 Product Interested In:

${productVal}

━━━━━━━━━━━━━━━━━━━━

📝 Requirement:

${messageVal}

━━━━━━━━━━━━━━━━━━━━

Kindly provide:

• Product Brochure (PDF)

• Product Catalogue

• Technical Specifications

• Product Images

• Price Quotation

• Installation Details

• Warranty Information

Please contact me at your earliest convenience.

Thank you.`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/917337433351?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-surface-50 border border-surface-200 text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-400 transition-all duration-300 font-medium";

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-50 rounded-full blur-[120px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-50 rounded-full blur-[100px] opacity-40 pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="relative w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Contact info */}
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[10px] font-bold uppercase tracking-[0.2em]">
                Direct Contact
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-surface-900 leading-[1.1] tracking-tight">
                Let's build smarter fleet management,{" "}
                <span className="text-gradient block">together.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed font-medium max-w-lg">
                Talk to our team about GPS tracking, fuel monitoring and
                end-to-end fleet visibility — tailored for your operation.
              </p>
            </AnimatedSection>

            {/* Premium Contact cards */}
            <AnimatedSection delay={0.3}>
              <div className="mt-12 space-y-4">
                <div className="group flex items-start gap-5 p-6 rounded-[1.5rem] bg-white border border-surface-200/60 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 hover:border-surface-300 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center shrink-0 border border-sky-100 relative z-10 group-hover:scale-105 transition-transform duration-300">
                    <MapPin size={22} className="text-sky-600" strokeWidth={2.5} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[11px] font-bold text-surface-400 uppercase tracking-widest mb-1">
                      Headquarters
                    </p>
                    <a
                      href={company.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-surface-900 hover:text-sky-600 transition-colors leading-relaxed block"
                    >
                      {company.address}
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-6 rounded-[1.5rem] bg-white border border-surface-200/60 shadow-sm hover:shadow-xl hover:shadow-primary-900/5 hover:border-surface-300 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0 border border-primary-100 relative z-10 group-hover:scale-105 transition-transform duration-300">
                    <Phone size={22} className="text-primary-600" strokeWidth={2.5} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[11px] font-bold text-surface-400 uppercase tracking-widest mb-1">
                      Phone Support
                    </p>
                    <div className="space-y-1">
                      <a href={`tel:${company.phone}`} className="text-base font-semibold text-surface-900 hover:text-primary-600 transition-colors block">
                        {company.phone}
                      </a>
                      <a href={`tel:${company.phone2}`} className="text-base font-semibold text-surface-900 hover:text-primary-600 transition-colors block">
                        {company.phone2}
                      </a>
                      <a href={`tel:${company.landline}`} className="text-base font-semibold text-surface-900 hover:text-primary-600 transition-colors block">
                        {company.landline}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-6 rounded-[1.5rem] bg-white border border-surface-200/60 shadow-sm hover:shadow-xl hover:shadow-violet-900/5 hover:border-surface-300 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center shrink-0 border border-violet-100 relative z-10 group-hover:scale-105 transition-transform duration-300">
                    <Mail size={22} className="text-violet-600" strokeWidth={2.5} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[11px] font-bold text-surface-400 uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <div className="space-y-1">
                      <a
                        href={`mailto:${company.email}`}
                        className="text-base font-semibold text-surface-900 hover:text-violet-600 transition-colors block"
                      >
                        {company.email}
                      </a>
                      <a
                        href={`mailto:${company.email2}`}
                        className="text-base font-semibold text-surface-900 hover:text-violet-600 transition-colors block"
                      >
                        {company.email2}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-5 p-6 rounded-[1.5rem] bg-white border border-surface-200/60 shadow-sm hover:shadow-xl hover:shadow-warm-900/5 hover:border-surface-300 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-warm-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-12 h-12 rounded-2xl bg-warm-50 flex items-center justify-center shrink-0 border border-warm-100 relative z-10 group-hover:scale-105 transition-transform duration-300">
                    <Clock size={22} className="text-warm-600" strokeWidth={2.5} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[11px] font-bold text-surface-400 uppercase tracking-widest mb-1">
                      Business Hours
                    </p>
                    <p className="text-base font-semibold text-surface-900">
                      {company.hours}
                    </p>
                    <p className="text-sm text-surface-500 mt-0.5 font-medium">
                      Responds within 2 hours
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Form */}
          <AnimatedSection direction="right" delay={0.2} className="h-full">
            <div className="relative p-8 sm:p-10 rounded-[2.5rem] bg-white border border-surface-200/60 shadow-2xl shadow-surface-900/5 h-full flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] mb-6">
                  <MessageCircle size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-extrabold text-surface-900 tracking-tight">
                  Message us on WhatsApp
                </h3>
                <p className="text-surface-500 mt-3 text-lg font-medium">
                  Skip the emails. Fill this out and we'll connect with you instantly on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-bold text-surface-700 mb-2 uppercase tracking-wide">
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
                      <label className="block text-[13px] font-bold text-surface-700 mb-2 uppercase tracking-wide">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-bold text-surface-700 mb-2 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-surface-700 mb-2 uppercase tracking-wide">
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
                    <label className="block text-[13px] font-bold text-surface-700 mb-2 uppercase tracking-wide">
                      Product Interested In *
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className={`${inputClass} appearance-none cursor-pointer`}
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
                    <label className="block text-[13px] font-bold text-surface-700 mb-2 uppercase tracking-wide">
                      Message / Requirement *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className={`${inputClass} resize-none`}
                      placeholder="I need GPS tracking for 15 trucks…"
                    />
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-surface-100">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20 text-lg"
                  >
                    <MessageCircle size={22} strokeWidth={2.5} />
                    Continue to WhatsApp
                  </motion.button>

                  <p className="text-[13px] text-center text-surface-400 font-medium mt-4">
                    Your details will be pre-filled in a secure WhatsApp chat.
                  </p>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
