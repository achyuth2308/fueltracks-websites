import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { Target, Eye, Zap, Heart, Shield, Users, MapPin, Fuel, ScanLine, Headphones } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */
const services = [
  "Real-Time GPS Tracking",
  "Fuel Level Monitoring",
  "RFID Driver Identification",
  "Route Optimisation",
  "Geo-Fencing & Alerts",
  "Fleet Analytics & Reports",
  "Mobile App (Android)",
  "24/7 Technical Support",
];

const coreValues = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Our hardware and software are engineered for India's harshest conditions — extreme heat, remote coverage, and rugged roads.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Every deployment is customised. Your fleet's ROI is our primary measure of success.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We continuously upgrade our IoT stack — from multi-constellation GPS to capacitive fuel sensing.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build long-term relationships with operators, dealers, and enterprise clients across India.",
  },
];

const timeline = [
  {
    label: "FOUNDATION",
    description:
      "Fuel Tracks Technologies established in Hyderabad with a focus on GPS fleet tracking for commercial vehicles.",
  },
  {
    label: "EXPANSION",
    description:
      "Introduced capacitive fuel sensors and RFID systems, expanding into construction, mining, and school bus segments.",
  },
  {
    label: "GROWTH",
    description:
      "Crossed 1,000+ active clients and 15,000+ vehicles tracked across 18+ states in India.",
  },
  {
    label: "TODAY",
    description:
      "A trusted full-stack IoT fleet-intelligence platform serving logistics, government, and enterprise fleets with 99.9% uptime.",
  },
];

/* ─── Sky-blue accent helpers ───────────────────────────── */
const SKY = "text-[#c9a226]";
const SKY_BG = "bg-[#c9a226]";
const SKY_LIGHT = "bg-[#c9a226]/10";
const SKY_BORDER = "border-[#c9a226]/30";

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          1. HERO — dark navy, static (no animation)
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#011f3a",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "80px",
          paddingBottom: "40px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9a226] mb-3">
            About Us
          </p>

          <h1
            style={{ fontSize: "32px", lineHeight: 1.2 }}
            className="font-extrabold text-white tracking-tight max-w-2xl"
          >
            A Trusted GPS &amp; Fleet Intelligence Platform
          </h1>

          <p
            style={{ fontSize: "13px" }}
            className="mt-4 text-slate-400 leading-relaxed max-w-xl"
          >
            Fuel Tracks Technologies is a Hyderabad-based IoT company committed
            to delivering measurable value across GPS tracking, fuel monitoring,
            RFID systems, and fleet analytics.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. WHO WE ARE — white bg, two-column
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <AnimatedSection>
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${SKY} mb-3`}>
                Who We Are
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-4">
                Smart Tracking. Real Savings.
                <span style={{ color: "#000", fontSize: "10px", display: "block" }} className="font-bold mt-1">
                  Trusted by 1,000+ Businesses.
                </span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Fuel Tracks Technologies is a Hyderabad-based IoT company delivering
                high-quality fleet solutions across{" "}
                <span className="font-medium">Real-Time GPS Tracking</span>,{" "}
                <span className="font-medium">Fuel Monitoring</span>,{" "}
                <span className="font-medium">RFID Systems</span>, and{" "}
                <span className="font-medium">Fleet Analytics</span>.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Founded on the principles of operational excellence and client
                partnership, we bring deep domain knowledge, disciplined
                installation processes, and a results-oriented approach to
                every deployment.
              </p>

              {/* 2-col bullet list */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
                {[
                  "Real-Time GPS Tracking",
                  "Fuel Level Monitoring",
                  "RFID Driver Identification",
                  "Route Optimisation",
                  "Geo-Fencing & Alerts",
                  "Fleet Analytics & Reports",
                  "Mobile App (Android)",
                  "24/7 Technical Support",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${SKY_BG} flex-shrink-0`} />
                    <span className="text-sm text-slate-600">{s}</span>
                  </div>
                ))}
              </div>

              {/* mini stats row */}
              <div className="flex gap-8 pt-5 border-t border-slate-100">
                {[
                  { value: "1,000+", label: "Clients Served" },
                  { value: "15,000+", label: "Vehicles Tracked" },
                  { value: "5+", label: "Years of Excellence" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-extrabold text-slate-900">{s.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — unified dark card */}
            <AnimatedSection direction="right">
              {/* ONE dark navy container: image + name + mission */}
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#011f3a" }}>

                {/* Taller image */}
                <div className="relative">
                  <img
                    src="/images/aboutus.png"
                    alt="Fuel Tracks team"
                    className="w-full object-cover"
                    style={{ height: "320px" }}
                    loading="lazy"
                  />
                  {/* name overlay at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#011f3a] to-transparent px-5 py-5">
                    <p className="text-white font-bold text-sm leading-tight">Fuel Tracks</p>
                    <p className="text-xs font-semibold" style={{ color: "#c9a226" }}>Technologies Pvt Ltd</p>
                  </div>
                </div>

                {/* Mission section — inside same dark card */}
                <div className="px-5 py-5">
                  <div className="flex items-center gap-3 mb-3">
                    {/* gold circle icon */}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(201,162,38,0.15)", border: "1.5px solid #c9a226" }}>
                      <Target size={18} style={{ color: "#c9a226" }} />
                    </div>
                    <h3 className="font-bold text-white text-base">Our Mission</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    To deliver reliable, high-accuracy fleet-intelligence solutions
                    that enable our clients to reduce fuel costs, prevent theft, and
                    manage their operations with complete visibility.
                  </p>
                </div>
              </div>

              {/* Vision — separate white card below */}
              <div className="border border-slate-100 rounded-2xl p-5 shadow-sm mt-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,162,38,0.1)", border: "1.5px solid #c9a226" }}>
                    <Eye size={18} style={{ color: "#c9a226" }} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Our Vision</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  To become the most trusted fleet-IoT platform for businesses
                  across India — recognised for accuracy, innovation, and
                  consistent delivery of measurable value.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. CORE VALUES — light gray bg
      ══════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${SKY} mb-4`}>
                What Guides Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Our Core Values
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                These principles shape every deployment we make and every
                relationship we build.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={0.08 * i}>
                  <div className="bg-white border border-[#c9a226]/40 rounded-2xl p-6 h-full hover:shadow-lg hover:border-[#c9a226] hover:shadow-[#c9a226]/10 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-xl ${SKY_LIGHT} flex items-center justify-center mb-4`}>
                      <Icon size={20} className="text-[#c9a226]" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. COMPANY TIMELINE — dark navy bg
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#011f3a] py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(56,189,248,0.06) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${SKY} mb-4`}>
                Our Journey
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Company Timeline
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                A steady progression of growth, innovation, and deepening expertise.
              </p>
            </div>
          </AnimatedSection>

          {/* vertical timeline */}
          <div className="relative max-w-2xl mx-auto">
            {/* connecting line */}
            <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-700" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.label} delay={0.1 * i}>
                  <div className="flex gap-6 items-start">
                    {/* dot */}
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full border-2 border-[#c9a226] bg-[#011f3a] flex items-center justify-center z-10 relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#c9a226]" />
                      </div>
                    </div>
                    {/* card */}
                    <div className="flex-1 bg-[#062a4a] border border-slate-700 rounded-xl px-6 py-5">
                      <p className={`text-xs font-bold uppercase tracking-[0.18em] ${SKY} mb-2`}>
                        {item.label}
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. BUSINESS PHILOSOPHY — white glassy bg
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white/70 backdrop-blur-xl border-t border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${SKY} mb-4`}>
              Business Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
              How We Think About Business
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                We believe the best IoT partnerships are built on mutual accountability, consistent device performance, 
                and strategic alignment. Every tracking solution we deploy is crafted with long-term ROI in mind — 
                not just immediate hardware installation.
              </p>
              <p>
                Our engineers are trained to approach each fleet challenge with structured thinking, technical insight, 
                and the flexibility to adapt to the unique operating context of every client and every terrain. 
                We invest in rigorous R&D because reliable technology creates great business outcomes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
