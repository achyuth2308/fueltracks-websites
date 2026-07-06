import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const highlights = [
  "No setup fees",
  "Same-day installation",
  "24/7 live support",
  "Cancel anytime",
];

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-sky-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden bg-white border border-[#D9A94D]/30 shadow-xl shadow-[#D9A94D]/10">
            {/* Ambient gold glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9A94D]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DEA95A]/10 rounded-full blur-3xl" />

            {/* Grid texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0V0zm20 0h1v1h-1V0zM0 20h1v1H0v-1zm20 20h1v1h-1v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center">
              {/* Decorative Icon */}
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#D9A94D]/10 to-[#DEA95A]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#D9A94D]/20 shadow-sm">
                <ShieldCheck size={32} className="text-[#D9A94D]" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight max-w-3xl mx-auto mb-6">
                Ready to take control of your <span className="bg-gradient-to-r from-[#D9A94D] to-[#DEA95A] bg-clip-text text-transparent">fleet?</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-xl mx-auto mb-8 font-medium">
                Talk to our team about GPS tracking, fuel monitoring and
                end-to-end fleet visibility — tailored for your operation.
              </p>

              {/* Feature highlights */}
              <div className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {highlights.map((h) => (
                  <span key={h} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                    <CheckCircle2 size={16} className="text-[#D9A94D]" />
                    {h}
                  </span>
                ))}
              </div>

              <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D9A94D] to-[#DEA95A] text-white font-bold hover:shadow-lg hover:shadow-[#D9A94D]/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
                >
                  Contact us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
