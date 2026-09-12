import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreeCanvas from "@/components/ThreeCanvas";
import PositivoVisionDeepDive from "@/components/PositivoVisionDeepDive";
import BiDashboardsSection from "@/components/BiDashboardsSection";
import TelemetryTicker from "@/components/TelemetryTicker";
import StatsGrid from "@/components/StatsGrid";
import CaseStudies from "@/components/CaseStudies";
import ArchitecturePhilosophy from "@/components/ArchitecturePhilosophy";
import TechnicalDiscoveries from "@/components/TechnicalDiscoveries";
import SkillsRadar from "@/components/SkillsRadar";
import CareerTimeline from "@/components/CareerTimeline";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060709] bg-grid-pattern relative selection:bg-brand-lime selection:text-black font-mono">
      {/* 3D WebGL Canvas Layer (Three.js Cursor-reactive) */}
      <ThreeCanvas />

      {/* Global 1980s Analog CRT Scanlines & Vignette Layer */}
      <div className="fixed inset-0 crt-scanlines opacity-15 pointer-events-none z-30" />
      <div className="fixed inset-0 crt-vignette opacity-50 pointer-events-none z-30" />

      {/* Main Structural Components */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TelemetryTicker />
        <PositivoVisionDeepDive />
        <BiDashboardsSection />
        <StatsGrid />
        <CaseStudies />
        <ArchitecturePhilosophy />
        <TechnicalDiscoveries />
        <SkillsRadar />
        <CareerTimeline />
        <ContactCTA />
        <Footer />
      </div>
    </main>
  );
}
