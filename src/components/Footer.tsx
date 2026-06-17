import React from "react";
import { Sparkles, ArrowUp, Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 text-left space-y-4">
            <button
              onClick={() => onScrollToSection("hero")}
              className="flex items-center gap-3 text-left group cursor-pointer"
              id="footer-logo"
            >
              <div className="bg-slate-900 text-white p-2 rounded-full border border-slate-800 shrink-0 group-hover:border-slate-700 transition-colors">
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <span className="font-display font-black text-lg tracking-tight text-white block leading-none">
                  AURA
                </span>
                <span className="text-[9px] font-mono tracking-widest text-indigo-400 block mt-0.5 font-bold">
                  DIGITAL LABS
                </span>
              </div>
            </button>
            <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-sm">
              We engineer conversion rate optimization funnels, Google Search algorithms, and Meta/TikTok Creator performance channels designed to unlock profitable scale.
            </p>
          </div>

          {/* Links Col */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              Structure
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => onScrollToSection("services")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                  id="footer-link-services"
                >
                  Growth Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection("case-studies")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                  id="footer-link-cases"
                >
                  Campaign Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection("pricing")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                  id="footer-link-pricing"
                >
                  Transparent Retainers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection("contact")}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                  id="footer-link-contact"
                >
                  Free Conversion Audit
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="md:col-span-4 text-left space-y-3 text-sm text-slate-500">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              Agency Contact
            </h4>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
              <a href="mailto:vignesh.kaiggroups@gmail.com" className="hover:text-white transition-colors text-slate-400">
                vignesh.kaiggroups@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="text-slate-400">+1 (800) 555-0142</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="text-slate-400 font-sans">San Francisco HQ &bull; Tokyo Client Office</span>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-left">
            &copy; {new Date().getFullYear()} Aura Digital Labs. All rights reserved. Built for performance conversion indexing.
          </p>
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-all border border-slate-800 rounded-full py-2 px-4 hover:bg-slate-900 cursor-pointer"
            id="back-to-top-btn"
          >
            Back to summit
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
