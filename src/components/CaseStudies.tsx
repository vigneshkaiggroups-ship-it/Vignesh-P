import React, { useState } from "react";
import { ArrowRight, X, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "../data";
import { CaseStudy } from "../types";

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Categories extracted from our case study data tags
  const categories = ["All", "E-Commerce", "B2B SaaS", "Creative Labs"];

  // Mapping tags to general filter categories
  const filterByCategories = (study: CaseStudy, category: string) => {
    if (category === "All") return true;
    if (category === "E-Commerce") return study.tags.includes("E-Commerce") || study.tags.includes("Streetwear Retail");
    if (category === "B2B SaaS") return study.tags.includes("B2B SaaS");
    if (category === "Creative Labs") return study.tags.includes("Creative Partnership") || study.tags.includes("Social Virality");
    return true;
  };

  const filteredStudies = CASE_STUDIES.filter((study) => filterByCategories(study, activeCategory));

  // Determine the Tailwind styling for specific themes
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case "emerald":
        return {
          iconBg: "bg-emerald-50 text-emerald-600",
          badgeBg: "bg-emerald-500",
          cardBorder: "hover:border-emerald-200/80",
          textAccent: "text-emerald-600",
          btnBg: "bg-emerald-500 hover:bg-emerald-600",
          outlineBorder: "border-emerald-100",
          darkBg: "bg-emerald-950",
          glow: "shadow-emerald-500/10",
        };
      case "rose":
        return {
          iconBg: "bg-rose-50 text-rose-600",
          badgeBg: "bg-rose-500",
          cardBorder: "hover:border-rose-200/80",
          textAccent: "text-rose-600",
          btnBg: "bg-rose-500 hover:bg-rose-600",
          outlineBorder: "border-rose-100",
          darkBg: "bg-rose-950",
          glow: "shadow-rose-500/10",
        };
      case "amber":
        return {
          iconBg: "bg-amber-50 text-amber-600",
          badgeBg: "bg-amber-500",
          cardBorder: "hover:border-amber-200/80",
          textAccent: "text-amber-600",
          btnBg: "bg-amber-500 hover:bg-amber-600",
          outlineBorder: "border-amber-100",
          darkBg: "bg-amber-950",
          glow: "shadow-amber-500/10",
        };
      default: // indigo
        return {
          iconBg: "bg-indigo-50 text-indigo-600",
          badgeBg: "bg-indigo-500",
          cardBorder: "hover:border-indigo-200/80",
          textAccent: "text-indigo-600",
          btnBg: "bg-indigo-500 hover:bg-indigo-600",
          outlineBorder: "border-indigo-100",
          darkBg: "bg-indigo-950",
          glow: "shadow-indigo-500/10",
        };
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block mb-3">
            CASE STUDIES & PROOF
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-42">
            Compounding results for compounding brands
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
            Real campaigns, empirical revenue metrics, and full-funnel breakdowns. Click any card below to read the comprehensive strategy, challenge, and campaign breakdown.
          </p>
        </div>

        {/* Categories Tabs Selector */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-slate-200 pb-5" id="case-studies-filter">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
              }`}
              id={`filter-btn-${category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="case-studies-grid">
          {filteredStudies.map((study) => {
            const theme = getThemeClasses(study.colorTheme);

            return (
              <div
                key={study.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                id={`case-card-${study.id}`}
              >
                {/* Image/Visual Header Accent */}
                <div className="p-8 pb-4 flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 bg-slate-50/50">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-1">
                      {study.category}
                    </span>
                    <h3 className="font-display text-xl font-extrabold text-slate-950">
                      {study.client}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider font-bold bg-slate-100 text-slate-600 uppercase">
                    {study.date}
                  </span>
                </div>

                <div className="p-8 pt-6 flex-1">
                  {/* Highlight Metric Callout Box */}
                  <div className={`p-5 rounded-xl border border-dashed ${theme.outlineBorder} ${theme.iconBg} mb-6 flex flex-col justify-center`}>
                    <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-slate-500 mb-1">
                      KEY CAMPAIGN METRIC
                    </span>
                    <div className="font-display text-4xl font-black tracking-tight leading-none text-slate-900">
                      {study.metricValue}
                    </div>
                    <div className="text-xs font-semibold text-slate-600 mt-1.5">
                      {study.metricLabel}
                    </div>
                  </div>

                  {/* Core Statement */}
                  <h4 className="font-sans text-base font-bold text-slate-900 mb-3 leading-snug">
                    {study.title}
                  </h4>
                  <p className="font-sans text-sm text-slate-500 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono tracking-wider uppercase text-slate-500 bg-slate-50 border border-slate-200/50 px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="p-8 pt-0 border-t border-slate-50 bg-slate-50/20">
                  <button
                    onClick={() => setSelectedCaseStudy(study)}
                    className="w-full flex items-center justify-between text-left group/btn text-sm font-semibold text-slate-800 hover:text-indigo-600 py-4 cursor-pointer"
                    id={`view-study-btn-${study.id}`}
                  >
                    View Campaign Deep-Dive
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-mono text-slate-400 group-hover/btn:text-indigo-500 transition-colors">
                        READ STRATEGY
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover/btn:text-indigo-500 transition-all group-hover/btn:translate-x-0.5" />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal Overlay */}
        {selectedCaseStudy && (() => {
          const theme = getThemeClasses(selectedCaseStudy.colorTheme);
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-end bg-zinc-900/60 backdrop-blur-xs p-0 sm:p-4" id="case-study-modal-container">
              {/* Backing dismiss field */}
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={() => setSelectedCaseStudy(null)}
              />

              {/* Slide panel */}
              <div
                className="relative w-full max-w-2xl h-full sm:h-[90vh] bg-white sm:rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden z-10 animate-in slide-in-from-right duration-300"
                id="case-study-modal-panel"
              >
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-zinc-200/80 flex items-center justify-between gap-6 bg-zinc-50">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-600" />
                    <span className="text-xs font-mono tracking-wider font-bold text-zinc-500 uppercase">
                      Campaign Performance Deep-Dive
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="p-1.5 rounded-lg border border-zinc-200 bg-white text-zinc-500 hover:text-zinc-800 hover:border-zinc-300 transition-colors cursor-pointer"
                    aria-label="Dismiss detail modal"
                    id="case-study-modal-close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content body Scroll container */}
                <div className="p-6 md:p-8 flex-1 overflow-y-auto space-y-8">
                  {/* Summary Title Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
                        {selectedCaseStudy.client}
                      </span>
                      <span className="h-4 w-px bg-slate-300" />
                      <span className="text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded">
                        {selectedCaseStudy.category}
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950 tracking-tight leading-snug">
                      {selectedCaseStudy.title}
                    </h3>
                  </div>

                  {/* Impact Highlight Stats Panel */}
                  <div className={`p-6 rounded-2xl border-2 border-dashed ${theme.outlineBorder} ${theme.iconBg} ${theme.glow} shadow-sm relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-xl translate-x-10 -translate-y-10" />
                    <span className="text-xs font-mono tracking-widest font-bold text-slate-500 block mb-1">
                      VERIFIED PERFORMANCE IMPACT
                    </span>
                    <div className="font-display text-4xl sm:text-5xl font-black tracking-tight mb-2 leading-none">
                      {selectedCaseStudy.metricValue}
                    </div>
                    <div className="text-sm font-semibold text-slate-600">
                      {selectedCaseStudy.metricLabel}
                    </div>
                  </div>

                  {/* Detailed columns */}
                  <div className="grid grid-cols-1 gap-6">
                    {/* Challenge Block */}
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h4 className="flex items-center gap-2 font-display text-xs font-bold text-slate-950 mb-3 uppercase tracking-wider">
                        <span className="w-1.5 h-4 bg-rose-500 rounded-full" />
                        The Challenge
                      </h4>
                      <p className="font-sans text-slate-650 text-sm sm:text-base leading-relaxed">
                        {selectedCaseStudy.challenge}
                      </p>
                    </div>

                    {/* Solution Block */}
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h4 className="flex items-center gap-2 font-display text-xs font-bold text-slate-950 mb-3 uppercase tracking-wider">
                        <span className="w-1.5 h-4 bg-indigo-500 rounded-full" />
                        Our Tactical Action
                      </h4>
                      <p className="font-sans text-slate-650 text-sm sm:text-base leading-relaxed">
                        {selectedCaseStudy.solution}
                      </p>
                    </div>

                    {/* Empirical results block */}
                    <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-200">
                      <h4 className="flex items-center gap-2 font-display text-xs font-bold text-slate-950 mb-3 uppercase tracking-wider">
                        <span className="w-1.5 h-4 bg-emerald-500 rounded-full" />
                        Empirical Results
                      </h4>
                      <p className="font-sans text-slate-800 text-sm sm:text-base leading-relaxed font-semibold">
                        {selectedCaseStudy.results}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {selectedCaseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-zinc-600 bg-zinc-100 px-3.5 py-1.5 rounded-lg border border-zinc-200/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Modal Action */}
                <div className="p-6 md:p-8 bg-zinc-50 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left w-full sm:w-auto">
                    <span className="text-[10px] font-mono font-bold text-zinc-400 block tracking-wider uppercase">
                      Interested in similar scale?
                    </span>
                    <span className="text-xs font-semibold text-zinc-700">
                      We offer bespoke modeling arrays for checkout lifecycles.
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCaseStudy(null);
                      // Scroll to contact form
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`w-full sm:w-auto text-white text-sm font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer ${theme.btnBg}`}
                    id="case-modal-cta"
                  >
                    Consult with our team
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
