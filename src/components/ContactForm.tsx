import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, User, Mail, Building, Tag, DollarSign, Edit, AlertCircle, Sparkles, Trash2 } from "lucide-react";
import { ContactFormData } from "../types";

interface ContactFormProps {
  selectedPlan: string;
}

export default function ContactForm({ selectedPlan }: ContactFormProps) {
  // Setup forms state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "$2,500 - $10,000 /mo",
    message: ""
  });

  // Handle selected plan synchronization
  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        // Match plan names directly
        service: `Full Scale: ${selectedPlan}`,
        message: `Inquiry regarding the customized ${selectedPlan} tier.`
      }));
    }
  }, [selectedPlan]);

  // Handle submittals histories
  const [submissionHistory, setSubmissionHistory] = useState<ContactFormData[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Retrieve existing local submissions history
  useEffect(() => {
    try {
      const stored = localStorage.getItem("aura_form_submissions");
      if (stored) {
        setSubmissionHistory(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Local storage lookup failed", e);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Custom validations
    if (!formData.name.trim()) {
      setErrorMessage("Please supply your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid business email address.");
      return;
    }

    setSubmitting(true);
    setErrorMessage("");

    // Simulate database write
    setTimeout(() => {
      try {
        const payload = { ...formData };
        const updatedList = [payload, ...submissionHistory];
        localStorage.setItem("aura_form_submissions", JSON.stringify(updatedList));
        setSubmissionHistory(updatedList);

        // Reset form data while preserving basic template
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "$2,500 - $10,000 /mo",
          message: ""
        });
        setSubmitting(false);
        setSubmitted(true);
      } catch (err) {
        setSubmitting(false);
        setErrorMessage("Something went wrong saving your inquiry. Please try again.");
      }
    }, 1200);
  };

  const handleClearHistory = () => {
    try {
      localStorage.removeItem("aura_form_submissions");
      setSubmissionHistory([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-b border-slate-200 relative">
      {/* Wave shape divider */}
      <div className="absolute inset-0 z-0 opacity-[0.25] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Direct Marketing copy panels */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block mb-3">
                SECURE FREE GROWTH AUDIT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                Let's model your pipeline conversions
              </h2>
              <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                Submit your current marketing goals below. Our Lead Growth Architects will perform a comprehensive performance and SEO sweep on your site, constructing a bespoke 60-day conversion blueprint. Zero obligation. No pressure.
              </p>

              <div className="space-y-6">
                {/* Visual guarantee item */}
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-slate-200 bg-white text-emerald-650 rounded-lg shrink-0 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">Custom Funnel Audit Included</h4>
                    <p className="text-xs text-slate-500 leading-normal">
                      We trace leak issues inside your shopping sequence, mapping exact conversion improvements.
                    </p>
                  </div>
                </div>

                {/* Visual guarantee item */}
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-slate-200 bg-white text-indigo-650 rounded-lg shrink-0 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-slate-900">Next-Day Response Guarantee</h4>
                    <p className="text-xs text-slate-500 leading-normal">
                      We reject automated replies. A principal growth specialist will email or Slack you individually.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submissions tracking history box for visual validation */}
            {submissionHistory.length > 0 && (
              <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest font-bold text-slate-400 uppercase">
                      My Logged Inquiries ({submissionHistory.length})
                    </span>
                  </div>
                  <button
                    onClick={handleClearHistory}
                    className="text-[10px] text-rose-500 hover:text-rose-700 font-bold flex items-center gap-1 hover:underline cursor-pointer"
                    id="clear-submissions-btn"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Reset List
                  </button>
                </div>
                <div className="max-h-40 overflow-y-auto space-y-3 pr-1" id="submission-list">
                  {submissionHistory.map((sub, i) => (
                    <div key={i} className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex flex-col gap-1 text-left text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800">{sub.name}</span>
                        <span className="text-[9px] font-mono bg-emerald-50 border border-emerald-200 text-emerald-700 py-0.5 px-2 rounded-sm font-semibold uppercase tracking-wider">
                          Logged
                        </span>
                      </div>
                      <div className="text-slate-500 font-medium">Company: {sub.company || "N/A"}</div>
                      <div className="text-slate-405 truncate">Requested Plan: {sub.service || "General Inquiry"}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Form Interactive Core Box */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs flex flex-col justify-center">
            
            {submitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in-95 duration-300" id="form-success-box">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                  Inquiry logged securely!
                </h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-md mx-auto mb-8">
                  Thank you for your submission. Your technical audit slot is locked. An experienced strategist is gathering technical insights for your business and will reach out with actionable steps tomorrow.
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-full cursor-pointer transition-all shadow-xs"
                    id="submit-another-btn"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-marketing-form">
                
                {/* Form Title */}
                <div className="text-left">
                  <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 mb-1">
                    Ready to scale? Connect with our pod.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Provide basic detail parameters, and we will take care of the rest.
                  </p>
                </div>

                {errorMessage && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-xl flex items-center gap-3 text-xs sm:text-sm text-left font-medium animate-in slide-in-from-top-1">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="form-name" className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2 text-left">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        id="form-name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Liam Sterling"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-hidden focus:border-indigo-650 focus:bg-white focus:ring-4 focus:ring-indigo-650/5 transition-all text-left"
                      />
                    </div>
                  </div>

                  {/* Email fields */}
                  <div>
                    <label htmlFor="form-email" className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2 text-left">
                      Business Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        id="form-email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. liam@aurahome.com"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-hidden focus:border-indigo-650 focus:bg-white focus:ring-4 focus:ring-indigo-650/5 transition-all text-left"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company field */}
                  <div>
                    <label htmlFor="form-company" className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2 text-left">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="company"
                        id="form-company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Aura Home Ltd."
                        className="w-full pl-10 pr-4 py-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-hidden focus:border-indigo-650 focus:bg-white focus:ring-4 focus:ring-indigo-650/5 transition-all text-left"
                      />
                    </div>
                  </div>

                  {/* Target service list */}
                  <div>
                    <label htmlFor="form-service" className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2 text-left">
                      Service / Plan of Interest
                    </label>
                    <div className="relative">
                      <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <select
                        name="service"
                        id="form-service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-10 pr-8 py-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-hidden focus:border-indigo-650 focus:bg-white focus:ring-4 focus:ring-indigo-650/5 transition-all appearance-none text-left font-sans cursor-pointer"
                      >
                        <option value="">-- Choose Campaign Type --</option>
                        <option value="Standard Setup">Starter Setup / Audit — $1,499</option>
                        <option value="Vanguard Growth">Vanguard Performance Growth — $2,999</option>
                        <option value="Enterprise Omnichannel">Enterprise Elite Omnichannel — $5,900</option>
                        <option value="SEO Architecture">Organic SEO Domain Restructuring</option>
                        <option value="Conversion CRO">Conversion Rate Optimization A/B Sprites</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Estimate Budget selection */}
                <div>
                  <label htmlFor="form-budget" className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2 text-left">
                    Anticipated Monthly Media Advertising Budget
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      name="budget"
                      id="form-budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full pl-10 pr-8 py-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-hidden focus:border-indigo-650 focus:bg-white focus:ring-4 focus:ring-indigo-650/5 transition-all appearance-none text-left font-sans cursor-pointer"
                    >
                      <option value="Under $2,500 /mo">Testing phase: Under $2,500 /mo</option>
                      <option value="$2,500 - $10,000 /mo">Inbound scale: $2,500 - $10,000 /mo</option>
                      <option value="$10,000 - $30,000 /mo">Dominance scale: $10,000 - $30,000 /mo</option>
                      <option value="$30,000 - $100,000 /mo">Enterprise scale: $30,000 - $100,000 /mo</option>
                      <option value="Over $100,000 /mo">Uncapped market size: Over $100,000 /mo</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Additional notes message */}
                <div>
                  <label htmlFor="form-message" className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2 text-left">
                    Brief explanation of your business goals
                  </label>
                  <div className="relative">
                    <Edit className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <textarea
                      name="message"
                      id="form-message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a bit about your target customer, current product challenges, or specific milestones you want to achieve..."
                      className="w-full pl-10 pr-4 py-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-hidden focus:border-indigo-650 focus:bg-white focus:ring-4 focus:ring-indigo-650/5 transition-all text-left"
                    />
                  </div>
                </div>

                {/* Complete submission trigger button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-slate-900 hover:bg-slate-805 disabled:bg-slate-400 text-white font-bold text-xs uppercase tracking-wider py-4.5 px-6 rounded-full cursor-pointer transition-all flex items-center justify-center gap-2 text-sm sm:text-base font-display"
                  id="submit-contact-form-btn"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Locking audit schedule...
                    </>
                  ) : (
                    <>
                      Lock in my Free Strategy Audit
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
