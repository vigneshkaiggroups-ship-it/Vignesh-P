/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import PricingTiers from "./components/PricingTiers";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string>("");

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset slightly to account for the sticky navigation bar
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanForContact(planName);
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] selection:bg-slate-900 selection:text-white overflow-x-hidden">
      {/* Sticky Top Navbar */}
      <Navbar onScrollToSection={handleScrollToSection} />

      <main>
        {/* Hero Section */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Services Overview */}
        <Services />

        {/* Case Studies Portfolio */}
        <CaseStudies />

        {/* Dynamic Pricing Matrix & ROI Calculator */}
        <PricingTiers 
          onScrollToSection={handleScrollToSection} 
          onSelectPlan={handleSelectPlan} 
        />

        {/* Contact Submission & Live History Dashboard */}
        <ContactForm selectedPlan={selectedPlanForContact} />
      </main>

      {/* Modern High-End Footer */}
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}

