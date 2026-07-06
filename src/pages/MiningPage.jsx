import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import { HardHat, Activity, ShieldAlert, Zap, Map, Database, ArrowRight, Pickaxe, Settings, SignalHigh } from "lucide-react";

export default function MiningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-40 bg-surface-900 overflow-hidden border-b border-surface-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/mining/hero_truck.png" 
            alt="Mining Truck at Dawn" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-900/95 via-surface-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent opacity-90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
                <Pickaxe size={12} />
                Heavy Industry Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-2xl">
                Total Visibility in the <span className="text-amber-500 drop-shadow-lg">Harshest Environments.</span>
              </h1>
              <p className="mt-6 text-xl text-surface-400 leading-relaxed max-w-2xl">
                Open-pit mines demand equipment that doesn't quit. FuelTracks provides military-grade telemetry and fleet intelligence designed specifically for excavators, dump trucks, and heavy mining vehicles.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-surface-900 font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                  Discuss Mining Solutions
                  <ArrowRight size={16} />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Fleet Intelligence Section */}
      <section className="py-24 bg-surface-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right" className="lg:order-2">
              <div className="relative rounded-[2.5rem] bg-white p-2 shadow-2xl shadow-surface-900/10 border border-surface-200">
                <div className="rounded-[calc(2.5rem-0.5rem)] overflow-hidden">
                  <img 
                    src="/images/mining/dashboard.png" 
                    alt="Mining Analytics Dashboard" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating Stat */}
                <div className="absolute -bottom-6 -left-6 bg-surface-900 text-white p-6 rounded-3xl shadow-xl border border-surface-700 animate-bounce-slow hidden sm:block">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-surface-400 mb-1">Fuel Saved</p>
                  <p className="text-3xl font-bold text-amber-500">~18%<span className="text-lg text-white font-medium">/mo</span></p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left" className="lg:order-1">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 leading-tight">
                  Fleet Intelligence for Better <span className="text-gradient">Mining Performance.</span>
                </h2>
                <p className="mt-6 text-lg text-surface-600 leading-relaxed">
                  In remote mining zones, data is your only link to operational efficiency. The FuelTracks Cloud Suite turns raw sensor data into actionable intelligence, ensuring maximum uptime and zero fuel pilferage.
                </p>
                
                <div className="mt-10 space-y-8">
                  {[
                    { title: "Predictive Maintenance", desc: "Monitor engine hours, harsh idling, and temperature spikes to schedule maintenance before catastrophic machinery failure occurs.", icon: Settings },
                    { title: "Fuel Theft Prevention", desc: "Mining vehicles carry thousands of liters of diesel. Our analytics instantly highlight unauthorized drains during stationary periods.", icon: Activity },
                    { title: "Zone-Based Analytics", desc: "Create custom geo-fences around loading and dumping zones to track exact turnaround times and identify operational bottlenecks.", icon: Map }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-surface-900">{item.title}</h4>
                          <p className="mt-2 text-surface-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Rugged Hardware Integration */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
               <div className="relative rounded-[2.5rem] bg-surface-50 p-8 sm:p-12 border border-surface-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent rounded-[2.5rem]" />
                  <img src="/images/mining/sensor.png" alt="Rugged Fuel Sensor" className="w-full h-auto object-contain drop-shadow-2xl relative z-10 rounded-2xl" />
               </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-100 border border-surface-200 text-surface-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                  Hardware Built for the Pit
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 leading-tight">
                  Deploy sensors that <span className="text-amber-600">refuse to break.</span>
                </h2>
                <p className="mt-6 text-lg text-surface-600 leading-relaxed">
                  Mining environments destroy standard tracking devices in weeks due to extreme vibrations, dust, and temperature fluctuations. Our industrial-grade hardware is over-engineered to outlast the vehicles they are installed on.
                </p>
                
                <ul className="mt-8 space-y-4">
                  {[
                    "IP67 sealed capacitive fuel sensors unaffected by deep dust.",
                    "Aviation-grade aluminum construction prevents physical damage.",
                    "Internal offline storage buffers data when 4G networks drop deep in the pit.",
                    "Seamless 4G LTE to 2G fallback for uninterrupted telemetry."
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 bg-surface-50 p-4 rounded-2xl border border-surface-100">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        <Zap size={14} className="text-amber-600" />
                      </div>
                      <span className="text-surface-800 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10">
                  <Link to="/products/capacitive-fuel-sensor" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors">
                    Explore our Capacitive Fuel Sensors
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mining Advantages Grid */}
      <section className="py-24 bg-surface-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">Why Top Mining Operators Choose FuelTracks</h2>
              <p className="mt-4 text-surface-400 text-lg">We don't just provide tracking; we provide absolute control over your most expensive moving assets.</p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: HardHat, title: "Extreme Durability", desc: "Hardware tested against extreme shock, vibration, and temperature swings inherent in mining operations." },
              { icon: Database, title: "Offline Data Buffering", desc: "When vehicles drive into deep pits without cellular coverage, devices store up to 40,000 logs and sync automatically once back in range." },
              { icon: ShieldAlert, title: "Anti-Sabotage", desc: "Tamper-proof casing and instant alerts if wiring is cut or sensors are bypassed by operators." },
              { icon: SignalHigh, title: "Multi-Network Fallback", desc: "Automatic switching between 4G LTE and 2G bands to maximize connectivity in remote geographical areas." },
              { icon: Zap, title: "High-Voltage Protection", desc: "Built-in surge protection handles electrical noise and spikes from heavy mining machinery up to 90V." },
              { icon: Activity, title: "Idling Cost Control", desc: "Identify exact durations of engine idling to cut down massive amounts of wasted diesel." }
            ].map((adv, i) => {
              const Icon = adv.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-[2rem] bg-surface-800 border border-surface-700 hover:bg-surface-800/80 transition-colors h-full">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 flex items-center justify-center mb-6">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
                    <p className="text-surface-400 leading-relaxed">{adv.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
