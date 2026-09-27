"use client";

import React, { useRef, useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const PROJECT_META: Record<
  string,
  { shortTitle: string; subtitle: string; badge: string }
> = {
  "positivo-vision": {
    shortTitle: "Vision R15M",
    subtitle: "Minitela Embarcada & Driver Win32",
    badge: "Hardware OEM",
  },
  "agenda-fiscais": {
    shortTitle: "Agenda Fiscais",
    subtitle: "Motor Autônomo & Graph API",
    badge: "NestJS",
  },
  "bi-dashboards": {
    shortTitle: "Engenharia de Dados & BI",
    subtitle: "Star Schema & ETL",
    badge: "Data / BI",
  },
  "backend-monolito": {
    shortTitle: "Monólito Modular",
    subtitle: "Alta Concorrência & 714 Testes",
    badge: "NestJS / Bun",
  },
  "caixa-wol": {
    shortTitle: "Gerenciamento WOL",
    subtitle: "Wake-On-LAN & Sockets UDP",
    badge: "Redes / Linux",
  },
  "timecontrol": {
    shortTitle: "TimeControl Corporativo",
    subtitle: "Gestão de Equipes & CI/CD",
    badge: "Web / CI/CD",
  },
};

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      PROJECTS.length - 1,
      Math.max(0, Math.floor(latest * PROJECTS.length))
    );
    setActiveIndex(idx);
  });

  const handleSelectProject = (idx: number) => {
    setActiveIndex(idx);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      const height = containerRef.current.offsetHeight;
      const scrollableRange = Math.max(0, height - window.innerHeight);
      const targetY = absoluteTop + ((idx + 0.5) / PROJECTS.length) * scrollableRange;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  const selectedProject = PROJECTS[activeIndex];

  return (
    <section id="cases" className="relative bg-[#07070a] border-b border-white/10 font-mono text-left">
      {/* Background CRT scanlines */}
      <div className="absolute inset-0 crt-scanlines opacity-15 pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10">
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-lime uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            <span>[PORTFÓLIO DE PROJETOS] // MAINFRAME DE ENGENHARIA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase tracking-tight">
            PROJETOS DE SOFTWARE DESENVOLVIDOS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans">
            Sistemas completos desenvolvidos ao longo da trajetória profissional: software embarcado, dashboards de BI analítico, monólitos modulares e automação de redes.
          </p>
        </div>
      </div>

      {/* Scrollytelling Runway: As you scroll down, projects cycle smoothly */}
      <div ref={containerRef} className="relative min-h-[360vh] w-full">
        {/* Sticky viewport frame */}
        <div className="sticky top-20 sm:top-24 h-[calc(100vh-5.5rem)] sm:h-[calc(100vh-6.5rem)] flex items-center justify-center py-2 sm:py-4 z-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Mobile Project Selector Tabs (uncompressed, smooth horizontal scroll) */}
            <div className="flex lg:hidden overflow-x-auto gap-2 pb-3 mb-3 scrollbar-none">
              {PROJECTS.map((project, idx) => {
                const isSelected = activeIndex === idx;
                const meta = PROJECT_META[project.id] || {
                  shortTitle: project.title.split(":")[0],
                  badge: project.context.split(" ")[0],
                };
                return (
                  <button
                    key={project.id}
                    onClick={() => handleSelectProject(idx)}
                    className={`btn-sheen px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 shrink-0 ${
                      isSelected
                        ? "bg-brand-lime text-black border-brand-lime shadow-[0_0_15px_rgba(204,255,0,0.35)]"
                        : "bg-surface border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-[10px]">0{idx + 1}.</span>
                    <span>{meta.shortTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop 12-Column Grid: Left Sidebar List + Right Featured Project Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column (4 cols): Spacious, Uncompressed Vertical Project List */}
              <div className="hidden lg:flex lg:col-span-4 flex-col gap-2.5">
                <div className="flex items-center justify-between pb-1 text-xs text-slate-400 font-mono">
                  <span className="text-[11px] font-bold uppercase text-brand-lime flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                    ÍNDICE DE SISTEMAS
                  </span>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-brand-lime font-bold">0{activeIndex + 1}</span>
                    <span className="text-slate-600">/</span>
                    <span className="text-slate-400">0{PROJECTS.length}</span>
                  </div>
                </div>

                {PROJECTS.map((project, idx) => {
                  const isSelected = activeIndex === idx;
                  const meta = PROJECT_META[project.id] || {
                    shortTitle: project.title.split(":")[0],
                    subtitle: project.category,
                    badge: project.context.split(" ")[0],
                  };

                  return (
                    <button
                      key={project.id}
                      onClick={() => handleSelectProject(idx)}
                      className={`btn-sheen w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-200 relative group flex items-start gap-3 hover:-translate-y-0.5 active:scale-[0.99] ${
                        isSelected
                          ? "bg-surface border-brand-lime text-white shadow-[0_0_20px_rgba(204,255,0,0.25)] box-phosphor-lime"
                          : "bg-[#090b14]/80 border-white/10 text-slate-400 hover:text-white hover:border-brand-lime/40 hover:bg-surface/50"
                      }`}
                    >
                      {/* Left accent indicator bar */}
                      <div
                        className={`w-1 self-stretch rounded-full transition-all duration-300 shrink-0 mt-0.5 ${
                          isSelected
                            ? "bg-brand-lime shadow-[0_0_10px_rgba(204,255,0,0.8)]"
                            : "bg-transparent group-hover:bg-white/20"
                        }`}
                      />

                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`text-[10px] font-mono font-bold tracking-wider ${
                              isSelected ? "text-brand-lime" : "text-slate-500"
                            }`}
                          >
                            PROJETO 0{idx + 1}
                          </span>
                          <span
                            className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold uppercase shrink-0 ${
                              isSelected
                                ? "bg-brand-lime/20 text-brand-lime border border-brand-lime/40"
                                : "bg-white/5 text-slate-400 border border-white/10"
                            }`}
                          >
                            {meta.badge}
                          </span>
                        </div>

                        <div
                          className={`text-xs sm:text-sm font-bold truncate leading-tight ${
                            isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {meta.shortTitle}
                        </div>

                        <div className="text-[11px] text-slate-400 truncate font-sans">
                          {meta.subtitle}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column (8 cols): Featured Project Panel with AnimatePresence & CRT Framing */}
              <div className="lg:col-span-8 w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl bg-[#090b14]/95 border-2 border-brand-lime/25 p-5 sm:p-7 shadow-2xl relative overflow-hidden box-phosphor-lime max-h-[calc(100vh-7rem)] sm:max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin"
                  >
                    {/* Corner crosshairs */}
                    <div className="absolute top-2 left-2 text-[10px] text-brand-lime/40 select-none">[+]</div>
                    <div className="absolute top-2 right-2 text-[10px] text-brand-lime/40 select-none">[+]</div>
                    <div className="absolute bottom-2 left-2 text-[10px] text-brand-lime/40 select-none">[+]</div>
                    <div className="absolute bottom-2 right-2 text-[10px] text-brand-lime/40 select-none">[+]</div>

                    {/* Header Row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-4 mb-5">
                      <div className="space-y-1 max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="text-brand-lime font-bold bg-brand-lime/10 px-2 py-0.5 rounded border border-brand-lime/30 uppercase text-[11px]">
                            {selectedProject.category}
                          </span>
                          <span className="text-slate-400 text-[11px]">
                            {selectedProject.context} // {selectedProject.period}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-3xl font-serif font-bold text-white uppercase tracking-tight phosphor-lime pt-1">
                          {selectedProject.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1 leading-relaxed">
                          {selectedProject.summary}
                        </p>
                      </div>

                      {/* Role Badge */}
                      <div className="px-3 py-1.5 rounded bg-black/60 border border-white/10 text-xs text-slate-300 font-mono shrink-0">
                        ATUAÇÃO: <strong className="text-brand-lime">{selectedProject.role}</strong>
                      </div>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-5">
                      {selectedProject.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-lg bg-black/60 border border-white/10 space-y-0.5 relative font-mono">
                          <div className="text-lg sm:text-2xl font-black text-white phosphor-lime">
                            {m.value}
                          </div>
                          <div className="text-[11px] font-bold text-brand-lime uppercase">
                            {m.label}
                          </div>
                          {m.detail && <div className="text-[10px] text-slate-400 font-sans line-clamp-2">{m.detail}</div>}
                        </div>
                      ))}
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5 font-sans">
                      <div className="p-4 rounded-lg bg-red-950/25 border border-red-500/25 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                          <span>[DESAFIO TÉCNICO]</span>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">
                          {selectedProject.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-brand-lime/5 border border-brand-lime/30 space-y-1.5">
                        <div className="text-xs font-mono font-bold text-brand-lime uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                          <span>[SOLUÇÃO DE ENGENHARIA]</span>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>

                    {/* Technical Highlights */}
                    <div className="space-y-2 mb-5">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        // DESTAQUES DE ARQUITETURA & CÓDIGO
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.technicalHighlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded bg-black/40 border border-white/10 text-xs text-slate-300 font-sans flex items-start gap-2"
                          >
                            <span className="font-mono text-brand-lime font-bold shrink-0 text-[11px]">[OK]</span>
                            <span className="leading-snug text-[12px]">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/10 text-xs">
                      <span className="text-slate-500 mr-1 text-[11px]">STACKS:</span>
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 border border-white/10 text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
