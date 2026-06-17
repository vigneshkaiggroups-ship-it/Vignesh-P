import React from "react";
import { Search, TrendingUp, MousePointerClick, FileText } from "lucide-react";
import { SERVICES } from "../data";

// Mapping string names to Lucide icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search: Search,
  TrendingUp: TrendingUp,
  MousePointerClick: MousePointerClick,
  FileText: FileText,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block mb-3">
              WHAT WE DO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Systematic client acquisition engines, built for conversion
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
              We focus purely on compounding performance. No vanity metrics or bloated decks. Just real growth pipelines engineered to generate high-intent buyers.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Search;

            return (
              <div
                key={service.id}
                className="group relative bg-slate-50 hover:bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between hover:shadow-md hover:border-indigo-300"
                id={`service-card-${service.id}`}
              >
                {/* Visual top accent indicator slide-in */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-950 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Performance stats bar with line decoration */}
                <div className="border-t border-slate-200 pt-6 mt-4 flex items-center gap-4">
                  <span className="font-display text-3xl font-black text-indigo-600 tracking-tight">
                    {service.keyStats}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest font-bold text-slate-400 uppercase block">
                      Proven Result
                    </span>
                    <span className="text-xs font-semibold text-slate-600">
                      {service.keyStatsLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
