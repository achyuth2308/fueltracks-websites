import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import DynamicIcon from "../components/DynamicIcon";
import { aboutStats } from "../data/servicesData";
import { Check, Globe } from "lucide-react";

const whyChooseUs = [
  {
    title: "GPS Tracking",
    description: "Multi-constellation, sub-10s refresh.",
    icon: "MapPin",
  },
  {
    title: "Fuel Monitoring",
    description: "Capacitive sensors, ±1% accuracy.",
    icon: "Fuel",
  },
  {
    title: "RFID Systems",
    description: "Driver, asset and trip identification.",
    icon: "ScanLine",
  },
  {
    title: "24/7 Support",
    description: "Phone, chat and on-site engineers.",
    icon: "Headphones",
  },
];

const applicationAreas = [
  "Logistics",
  "Cargo Trucks",
  "Generators",
  "Cranes",
  "School Buses",
  "Cold Storage",
  "Ambulances",
  "Police Vehicles",
  "Company Fleets",
  "Bulldozers",
];

const coverageCities = [
  "Delhi",
  "Mumbai",
  "Hyderabad",
  "Chennai",
  "Bangalore",
  "Kolkata",
  "Lucknow",
  "Patna",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold uppercase tracking-wider">
                  About Us
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-surface-900 leading-[1.1]"
              >
                An IoT platform built for{" "}
                <span className="text-gradient">India's toughest fleets.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg text-surface-500 leading-relaxed max-w-xl"
              >
                From single-truck owners to enterprise transport companies, Fuel
                Tracks delivers a unified GPS + fuel-monitoring stack engineered
                for accuracy, uptime and ROI.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 grid grid-cols-2 gap-4 sm:gap-6"
              >
                {[
                  { value: "1000+", label: "Clients" },
                  { value: "5+", label: "Years" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "24/7", label: "Support" },
                ].map((stat) => (
                  <div key={stat.label} className="p-5 rounded-2xl glass">
                    <p className="text-3xl font-bold text-surface-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-surface-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right side — Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:h-full flex items-center"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10 group w-full">
                <img 
                  src="/images/aboutus.png" 
                  alt="About Fuel Tracks" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/10 to-transparent pointer-events-none mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-surface-900">
                Built different.{" "}
                <span className="text-gradient">Trusted everywhere.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.1 * i}>
                <div className="group p-6 rounded-2xl bg-surface-50 border border-surface-100 hover:bg-white hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-4 group-hover:from-primary-200 group-hover:to-accent-200 transition-colors">
                    <DynamicIcon
                      name={item.icon}
                      size={22}
                      className="text-primary-600"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-surface-500">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-xs font-semibold uppercase tracking-wider">
                  Capabilities
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-surface-900 leading-tight">
                  Comprehensive fleet intelligence
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="mt-4 text-lg text-surface-500 leading-relaxed">
                  Every feature is purpose-built for Indian conditions — from
                  extreme heat to patchy network coverage.
                </p>
              </AnimatedSection>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {aboutStats.map((stat, i) => (
                  <AnimatedSection key={stat.title} delay={0.2 + i * 0.1}>
                    <div className="p-5 rounded-2xl bg-white border border-surface-100">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold text-surface-700">
                          {stat.title}
                        </h3>
                        <span className="text-2xl font-bold text-primary-600">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-sm text-surface-500">
                        {stat.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Coverage map placeholder */}
            <AnimatedSection direction="right">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-surface-900/5">
                {/* 
                  ✏️  REPLACE with your coverage map:
                  <img src="/images/fleet-coverage-map.png" alt="Coverage Map" />
                */}
                <div className="aspect-square bg-gradient-to-br from-surface-100 to-primary-50 flex items-center justify-center relative">
                  <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-primary-500 rounded-full pulse-dot"
                        style={{
                          top: `${15 + Math.random() * 70}%`,
                          left: `${15 + Math.random() * 70}%`,
                          animationDelay: `${i * 0.4}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-center z-10">
                    <Globe size={48} className="text-primary-300 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-surface-700">
                      Pan-India Coverage
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {coverageCities.map((city) => (
                        <span
                          key={city}
                          className="px-3 py-1 rounded-full bg-white/80 text-xs font-medium text-surface-600"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold uppercase tracking-wider">
                Application Areas
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-surface-900">
                Anywhere wheels turn.
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {applicationAreas.map((area, i) => (
              <AnimatedSection key={area} delay={0.05 * i}>
                <div className="px-6 py-3 rounded-full bg-surface-50 border border-surface-200 text-surface-700 font-medium hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-all duration-200 cursor-default">
                  {area}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
