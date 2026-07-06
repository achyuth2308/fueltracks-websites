import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Truck,
  Users,
  Target,
  Headphones,
  ArrowRight,
  Play,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { hero } from "../data/heroData";

const iconMap = {
  truck: Truck,
  users: Users,
  target: Target,
  headphones: Headphones,
};

const trustedBrands = [
  "RK Logistics",
  "Reddy Transport",
  "SafeKids Bus Services",
  "Deccan Mining Co.",
  "Vijay Carriers",
  "Andhra Express",
  "PrimeMove Fleet",
  "GreenRoute Transport",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Ocean Slate gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Floating gradient orbs — blue + cyan + sky */}
      <motion.div
        className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-primary-400/15 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent-400/12 rounded-full blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-72 h-72 bg-sky-300/10 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b56f5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-primary-700 text-sm font-medium">
                <span className="w-2 h-2 bg-primary-500 rounded-full pulse-dot" />
                {hero.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-surface-900 leading-[1.05]"
            >
              {hero.title}{" "}
              <span className="text-gradient block">{hero.subtitle}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-surface-500 leading-relaxed max-w-lg"
            >
              {hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to={hero.primaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-primary-600/25 hover:shadow-primary-600/35 hover:-translate-y-0.5"
              >
                {hero.primaryCta.label}
                <ArrowRight size={18} />
              </Link>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-sky-200 text-surface-700 font-semibold hover:border-sky-300 hover:bg-sky-50 active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <Play size={16} className="text-primary-600 fill-primary-600" />
                {hero.secondaryCta.label}
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-sky-100 pt-8"
            >
              {hero.stats.map((stat, i) => {
                const Icon = iconMap[stat.icon] || Target;
                return (
                  <div key={i} className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                      <Icon size={15} className="text-accent-500" />
                      <span className="text-2xl font-bold text-surface-900 tabular-nums">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-xs text-surface-500 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right side — Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            {/* Light blue ambient glow behind the image */}
            <div className="absolute inset-0 bg-sky-200/30 rounded-3xl blur-2xl scale-105" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/8 bg-sky-50 flex items-center justify-center p-2 border border-sky-200/60">
              <img
                src="/images/livetrackingimage.png"
                alt="FuelTracks Live Tracking App — real-time vehicle and fuel monitoring dashboard"
                className="w-full h-auto object-cover rounded-2xl"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />
            </div>

            {/* Floating card — Live Tracking */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl shadow-primary-500/10 border border-sky-100"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-500 flex items-center justify-center shadow-accent-tinted">
                  <Truck size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-surface-900">Live Tracking</p>
                  <p className="text-xs text-surface-500">42 vehicles active now</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card — Security badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-lg rounded-2xl p-3 shadow-xl shadow-primary-500/10 border border-sky-100"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center shadow-primary-tinted">
                  <ShieldCheck size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-surface-900">99.9% Uptime</p>
                  <p className="text-xs text-surface-500 flex items-center gap-1">
                    <Zap size={10} className="text-warm-500" />
                    Certified secure
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Trusted-by marquee ticker — sky-blue strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative w-full mt-16 border-t border-sky-100 py-6 overflow-hidden bg-sky-50/70"
      >
        <p className="text-center text-xs font-semibold text-sky-600 uppercase tracking-widest mb-4">
          Trusted by fleet operators across India
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...trustedBrands, ...trustedBrands].map((brand, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-8 text-sm font-semibold text-surface-500 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
                {brand}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
