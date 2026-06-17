import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, Rocket, Send } from "lucide-react";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "services", "case-studies", "pricing", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/50 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-2 group cursor-pointer"
          id="nav-logo"
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm text-white group-hover:bg-indigo-500 transition-all duration-200">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-left">
            <span className="font-display font-extrabold text-lg tracking-tight text-slate-900 block leading-tight">
              AURA<span className="text-indigo-600">DIGITAL</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 block -mt-1 font-bold uppercase">
              Performance Lab
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { id: "services", label: "Services" },
            { id: "case-studies", label: "Case Studies" },
            { id: "pricing", label: "Pricing & Tiers" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer relative py-1 ${
                activeSection === item.id
                  ? "text-indigo-600"
                  : "text-slate-500 hover:text-slate-900"
              }`}
              id={`nav-link-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick("contact")}
            className="px-5 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1.5"
            id="nav-cta"
          >
            Book Analysis
            <Rocket className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-700 hover:text-zinc-900 focus:outline-hidden cursor-pointer p-1"
          aria-label="Toggle navigation menu"
          id="nav-mobile-hamburger"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-lg px-6 py-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-200">
          {[
            { id: "services", label: "Services" },
            { id: "case-studies", label: "Case Studies" },
            { id: "pricing", label: "Pricing & Tiers" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left font-sans text-base font-semibold py-2 border-b border-zinc-100 ${
                activeSection === item.id ? "text-indigo-600" : "text-zinc-700"
              }`}
              id={`nav-mobile-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl text-center shadow-md shadow-indigo-600/10 cursor-pointer flex items-center justify-center gap-2"
            id="nav-mobile-cta"
          >
            Work with us
            <Send className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}
