import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TelemetryTicker from "@/components/TelemetryTicker";
import StatsGrid from "@/components/StatsGrid";
import ManifestoSection from "@/components/ManifestoSection";
import CaseStudies from "@/components/CaseStudies";
import ForensicRules from "@/components/ForensicRules";
import ArchitecturePhilosophy from "@/components/ArchitecturePhilosophy";
import ForensicsTerminal from "@/components/ForensicsTerminal";
import SkillsRadar from "@/components/SkillsRadar";
import CareerTimeline from "@/components/CareerTimeline";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060709] bg-grid-pattern relative selection:bg-brand-lime selection:text-black">
      <Navbar />
      <Hero />
      <TelemetryTicker />
      <StatsGrid />
      <ManifestoSection />
      <CaseStudies />
      <ForensicRules />
      <ArchitecturePhilosophy />
      <ForensicsTerminal />
      <SkillsRadar />
      <CareerTimeline />
      <ContactCTA />
      <Footer />
    </main>
  );
}
