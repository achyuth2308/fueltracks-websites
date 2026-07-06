import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Truck,
  Users,
  Target,
  Headphones,
  ArrowRight,
  Play,
} from "lucide-react";
import { hero } from "../data/heroData";

const iconMap = {
  truck: Truck,
  users: Users,
  target: Target,
  headphones: Headphones,
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Floating gradient orbs — Stripe-style */}
      <motion.div
        className="absolute top-20 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent-400/15 rounded-full blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium">
                {hero.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-surface-900 leading-[1.1]"
            >
              {hero.title}{" "}
              <span className="text-primary-600">{hero.subtitle}</span>
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface-900 text-white font-semibold hover:bg-surface-800 transition-all duration-200 shadow-xl shadow-surface-900/20 hover:shadow-surface-900/30 hover:-translate-y-0.5"
              >
                {hero.primaryCta.label}
                <ArrowRight size={18} />
              </Link>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-surface-200 text-surface-700 font-semibold hover:border-surface-300 hover:bg-surface-50 transition-all duration-200"
              >
                <Play size={16} className="text-primary-600" />
                {hero.secondaryCta.label}
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {hero.stats.map((stat, i) => {
                const Icon = iconMap[stat.icon] || Target;
                return (
                  <div key={i} className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <Icon size={16} className="text-primary-600" />
                      <span className="text-2xl font-bold text-surface-900">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm text-surface-500">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right side — Phone mockup image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10 bg-surface-50 flex items-center justify-center p-2 border border-surface-200/50">
              <img 
                src="/images/livetrackingimage.png" 
                alt="FuelTracks Live Tracking App" 
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-500 flex items-center justify-center">
                  <Truck size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-surface-900">
                    Live Tracking
                  </p>
                  <p className="text-xs text-surface-500">
                    42 vehicles active now
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
