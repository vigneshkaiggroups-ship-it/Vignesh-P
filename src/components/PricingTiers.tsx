import React, { useState } from "react";
import { Check, Info, TrendingUp, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import { PRICING_TIERS } from "../data";

interface PricingTiersProps {
  onScrollToSection: (sectionId: string) => void;
  onSelectPlan: (planName: string) => void;
}

export default function PricingTiers({ onScrollToSection, onSelectPlan }: PricingTiersProps) {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");
  
  // States for the ROI / Investment calculator
  const [selectedPlanId, setSelectedPlanId] = useState<string>("price-growth");
  const [mediaSpend, setMediaSpend] = useState<number>(5000);

  // Active pricing tier configurations
  const activePlan = PRICING_TIERS.find((p) => p.id === selectedPlanId) || PRICING_TIERS[1];
  const activeFee = billingInterval === "monthly" ? activePlan.priceMonthly : activePlan.priceYearly;

  // Calculative formula variables
  const getEstimatedRoas = (planId: string) => {
    switch (planId) {
      case "price-starter":
        return 3.2; // 3.2x average ROAS for baseline optimizations
      case "price-growth":
        return 4.2; // 4.2x average ROAS with CRO design
      case "price-enterprise":
        return 4.8; // 4.8x average ROAS with omnichannel scale
      default:
        return 3.5;
    }
  };

  const getConversionLift = (planId: string) => {
    switch (planId) {
      case "price-starter":
        return 12;
      case "price-growth":
        return 28;
      case "price-enterprise":
        return 42;
      default:
        return 20;
    }
  };

  const estimatedRoas = getEstimatedRoas(selectedPlanId);
  const totalMonthlyInvestment = activeFee + mediaSpend;
  const estimatedGrossReturn = mediaSpend * estimatedRoas;
  const netCampaignValue = estimatedGrossReturn - totalMonthlyInvestment;
  const estimatedLiftPercent = getConversionLift(selectedPlanId);

  const handleCtaClick = (planName: string) => {
    onSelectPlan(planName);
    onScrollToSection("contact");
  };

  return (
    <section id="pricing" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block mb-3">
            SERVICE PRICING TIERS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Transparent retainer pricing tiers. No hidden charges.
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Choose the growth acceleration Tier that aligns with your current monthly ad spend limits and pipeline scale targets. Save 20% on any plan by selecting annual billing.
          </p>

          {/* Billing Interval Toggle */}
          <div className="inline-flex items-center gap-2 mt-8 bg-slate-100 p-1.5 rounded-full border border-slate-200">
            <button
              onClick={() => setBillingInterval("monthly")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                billingInterval === "monthly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              id="billing-monthly"
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingInterval("yearly")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                billingInterval === "yearly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              id="billing-yearly"
            >
              Annual Save 20%
              <span className="bg-indigo-50 border border-indigo-200 text-indigo-700 text-[9px] font-bold py-0.5 px-1.5 rounded-full">
                SAVE
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch" id="pricing-tiers-grid">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.popular;
            const price = billingInterval === "monthly" ? tier.priceMonthly : tier.priceYearly;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-slate-905 text-white shadow-md border border-slate-800 scale-100 lg:scale-[1.02] z-10"
                    : "bg-white text-slate-800 border border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
                style={isPopular ? { backgroundColor: "#0f172a" } : undefined}
                id={`tier-card-${tier.id}`}
              >
                {/* Popular Badge */}
                {isPopular && tier.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-650 text-white font-mono tracking-widest text-[9px] font-bold py-1 px-3.5 rounded-full border border-indigo-550 shadow-xs uppercase">
                    {tier.badge}
                  </span>
                )}

                <div>
                  {/* Tier Name */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className={`font-display text-xl font-extrabold ${isPopular ? "text-white" : "text-slate-900"}`}>
                      {tier.name}
                    </h3>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[18px] font-semibold text-slate-400">$</span>
                      <span className="text-4xl sm:text-5xl font-black tracking-tight font-display">
                        {price.toLocaleString()}
                      </span>
                      <span className={`text-xs ${isPopular ? "text-slate-400" : "text-slate-500"} ml-1`}>
                        / monthly retainer
                      </span>
                    </div>
                    {billingInterval === "yearly" && (
                      <span className="text-[10px] font-mono text-emerald-500 font-bold block mt-1">
                        Billed annually (saves ${( (tier.priceMonthly - tier.priceYearly) * 12 ).toLocaleString()}/yr)
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className={`font-sans text-sm leading-relaxed mb-8 ${isPopular ? "text-slate-300" : "text-slate-500"}`}>
                    {tier.description}
                  </p>

                  <div className={`h-px w-full my-6 ${isPopular ? "bg-slate-800" : "bg-slate-200"}`} />

                  {/* Features list */}
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <div className={`shrink-0 p-0.5 rounded-full mt-0.5 ${isPopular ? "bg-indigo-950 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={isPopular ? "text-slate-200" : "text-slate-650"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Call Action button */}
                <button
                  onClick={() => handleCtaClick(tier.name)}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isPopular
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs active:scale-95"
                      : "bg-slate-900 hover:bg-slate-800 text-white active:scale-95 shadow-xs"
                  }`}
                  id={`cta-btn-${tier.id}`}
                >
                  {isPopular ? "Secure Campaign Spot" : tier.ctaText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Dynamic Marketing Investment & ROI Estimator Widget */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10" id="investment-estimator">
          {/* Section subtitle */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-200 pb-6">
            <div className="text-left">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest font-bold text-indigo-600 uppercase mb-2">
                <TrendingUp className="w-3.5 h-3.5" />
                DIVERSIFIED MODELING UTILITY
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Evaluate your dynamic ad-spend pipeline ROI
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200/50 py-2 px-4 rounded-xl">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-semibold text-indigo-800">
                Data calibrated from 2025 agency-wide campaigns
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-8">
              {/* Selector Plan buttons */}
              <div>
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">
                  STEP 1: Select your target Agency Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PRICING_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedPlanId(tier.id)}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedPlanId === tier.id
                          ? "bg-white border-slate-950 ring-2 ring-slate-950/10"
                          : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700"
                      }`}
                      id={`est-tier-select-${tier.id}`}
                    >
                      <div className="text-xs font-extrabold font-display text-slate-900">{tier.name}</div>
                      <div className="text-[10px] text-slate-500 mt-1 font-mono">
                        retainer: ${(billingInterval === "monthly" ? tier.priceMonthly : tier.priceYearly).toLocaleString()}/mo
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for advertising spend */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    STEP 2: Estimate Monthly Media Budget
                  </label>
                  <span className="font-mono text-xs font-bold bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-800">
                    ${mediaSpend.toLocaleString()} /mo
                  </span>
                </div>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={mediaSpend}
                    onChange={(e) => setMediaSpend(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-hidden"
                    id="media-spend-range"
                  />
                  <div className="flex items-center justify-between font-mono text-[9px] text-slate-400 uppercase tracking-wider">
                    <span>$1,000 spend</span>
                    <span>$10,000</span>
                    <span>$25,000</span>
                    <span>$50,000 max Cap</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live Outputs */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
              <span className="text-[10px] font-mono tracking-widest font-bold text-slate-400 uppercase block">
                SIMULATED MONTHLY RETURN METRICS
              </span>

              {/* Total combined Investment */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-medium text-slate-500">Total Investment (Agency + Media Spend):</span>
                <span className="font-mono text-xs font-bold text-slate-900">${totalMonthlyInvestment.toLocaleString()}</span>
              </div>

              {/* Blended multi-attribution conversion lift estimate */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-medium text-slate-500">Target Conversion Optimization Uplift:</span>
                <span className="font-mono text-xs font-bold text-emerald-600">+{estimatedLiftPercent}% lift</span>
              </div>

              {/* Conservative estimated ROAS */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <span>Conservative ROAS Multiplier:</span>
                  <div className="group relative">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-950 text-[10px] text-white p-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg font-sans leading-normal z-20">
                      Representative metric based on standard historical agency returns across same category channels.
                    </div>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-indigo-650">{estimatedRoas}x blended</span>
              </div>

              {/* Master Gross and Net output blocks */}
              <div className="space-y-3 pt-2">
                <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-150">
                  <span className="text-[10px] font-mono tracking-wider font-bold text-indigo-700 uppercase block mb-1">
                    ESTIMATED GROSS REVENUE RETURN
                  </span>
                  <div className="font-display text-2xl sm:text-3xl font-black text-indigo-900 leading-none">
                    ${Math.round(estimatedGrossReturn).toLocaleString()}
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-150">
                  <span className="text-[10px] font-mono tracking-wider font-bold text-emerald-700 uppercase block mb-1">
                    NET ADDED PIPELINE VALUE
                  </span>
                  <div className="font-display text-2xl sm:text-3xl font-black text-emerald-950 leading-none">
                    ${Math.round(netCampaignValue).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Bottom CTA to secure simulated metrics */}
              <button
                onClick={() => handleCtaClick(activePlan.name)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest py-4 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
                id="securing-estimate-roi-btn"
              >
                Secure this forecast pipeline
                <ArrowRight className="w-4 h-4 text-indigo-400 animate-pulse" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
