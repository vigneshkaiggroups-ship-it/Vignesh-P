import React from "react";
import { ArrowRight, Sparkles, TrendingUp, Search, MousePointerClick } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-slate-50 border-b border-slate-200"
    >
      {/* Visual background grid */}
      <div className="absolute inset-0 z-0 opacity-[0.35] bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Glowing neutral-indigo ambient blur */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Label Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Full-Service Performance Agency
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8"
          >
            Driving Growth <br />Through <span className="text-indigo-600 italic">Precision</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            We combine high-conversion data pipelines with creative excellence to scale your digital presence globally. Engineering compounding returns on your performance spend.
          </motion.p>

          {/* Social Trust Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex gap-3 justify-center items-center mb-10"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-indigo-700">JD</div>
              <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-700">MK</div>
              <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs">+</div>
            </div>
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider self-center">Trusted by 140+ Fortune 500 Brands</span>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <button
              onClick={() => onScrollToSection("contact")}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-full transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              id="hero-primary-cta"
            >
              Book Analysis
              <ArrowRight className="w-4 h-4 text-indigo-400" />
            </button>
            <button
              onClick={() => onScrollToSection("case-studies")}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-bold py-3.5 px-8 rounded-full border border-slate-200 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              id="hero-secondary-cta"
            >
              View Case Studies
            </button>
          </motion.div>

          {/* Core Trust & Metrics Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white border border-slate-200/80 p-6 md:p-8 rounded-2xl shadow-sm relative"
          >
            {/* Metric 1 */}
            <div className="text-center md:border-r border-zinc-100 last:border-0 pb-4 md:pb-0">
              <div className="flex justify-center items-center gap-1.5 text-indigo-600 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-[11px] font-mono tracking-widest font-bold uppercase">Average Lift</span>
              </div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900">+280%</div>
              <div className="text-xs text-zinc-500 font-medium mt-1">Clients' Conversion Growth</div>
            </div>

            {/* Metric 2 */}
            <div className="text-center md:border-r border-zinc-100 last:border-0 pb-4 md:pb-0">
              <div className="flex justify-center items-center gap-1.5 text-emerald-600 mb-1">
                <Search className="w-4 h-4" />
                <span className="text-[11px] font-mono tracking-widest font-bold uppercase">Organic Traffic</span>
              </div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900">410%</div>
              <div className="text-xs text-zinc-500 font-medium mt-1">SEO Inbound Pipeline Lift</div>
            </div>

            {/* Metric 3 */}
            <div className="text-center md:border-r border-zinc-100 last:border-0 pt-4 md:pt-0">
              <div className="flex justify-center items-center gap-1.5 text-rose-600 mb-1">
                <MousePointerClick className="w-4 h-4" />
                <span className="text-[11px] font-mono tracking-widest font-bold uppercase">Ad Return</span>
              </div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900">4.2x</div>
              <div className="text-xs text-zinc-500 font-medium mt-1">Blended Campaign ROAS</div>
            </div>

            {/* Metric 4 */}
            <div className="text-center pt-4 md:pt-0">
              <div className="flex justify-center items-center gap-1.5 text-amber-600 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-mono tracking-widest font-bold uppercase">Ad Managed</span>
              </div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900">$18M+</div>
              <div className="text-xs text-zinc-500 font-medium mt-1">Combined Paid Spend Managed</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
