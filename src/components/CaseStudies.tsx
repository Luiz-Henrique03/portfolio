"use client";

import React, { useState } from "react";
import { PROJECTS, ProjectItem } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function CaseStudies() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(PROJECTS[0]);

  return (
    <section id="cases" className="py-24 bg-[#07070a] border-b border-white/10 relative font-mono text-left overflow-hidden">
      {/* Background CRT scanlines */}
      <div className="absolute inset-0 crt-scanlines opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-12"
        >
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase flex items-center gap-2">
            <span>[PORTFÓLIO DE PROJETOS] // MAINFRAME DE ENGENHARIA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase tracking-tight">
            PROJETOS DE SOFTWARE DESENVOLVIDOS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans">
            Sistemas completos desenvolvidos ao longo da trajetória profissional: software embarcado, dashboards de BI analítico, microsserviços e automação de redes.
          </p>
        </motion.div>

        {/* Project Selector Tabs with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          {PROJECTS.map((project) => {
            const isSelected = selectedProject.id === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
                  isSelected
                    ? "bg-brand-lime text-black border-brand-lime shadow-lg shadow-lime-500/20"
                    : "bg-[#090b12] text-slate-400 border-white/10 hover:border-brand-lime/40 hover:text-white"
                }`}
              >
                <span>{project.title.split(":")[0]}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isSelected ? "bg-black/20 text-black" : "bg-white/5 text-slate-400"
                  }`}
                >
                  {project.context.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Featured Project Panel with Motion & 1980s Analog CRT Framing */}
        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#090b14] border-2 border-brand-lime/25 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden box-phosphor-lime"
        >
          {/* Corner crosshairs */}
          <div className="absolute top-2 left-2 text-[10px] text-brand-lime/40 select-none">[+]</div>
          <div className="absolute top-2 right-2 text-[10px] text-brand-lime/40 select-none">[+]</div>
          <div className="absolute bottom-2 left-2 text-[10px] text-brand-lime/40 select-none">[+]</div>
          <div className="absolute bottom-2 right-2 text-[10px] text-brand-lime/40 select-none">[+]</div>

          {/* Header Row */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5 text-xs">
                <span className="text-brand-lime font-bold bg-brand-lime/10 px-2 py-0.5 rounded border border-brand-lime/30 uppercase">
                  {selectedProject.category}
                </span>
                <span className="text-slate-400">
                  {selectedProject.context} // {selectedProject.period}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white uppercase tracking-tight phosphor-lime">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-300 font-sans mt-2 max-w-3xl">
                {selectedProject.summary}
              </p>
            </div>

            {/* Role Badge */}
            <div className="px-3 py-1.5 rounded bg-black/60 border border-white/10 text-xs text-slate-300 font-mono">
              ATUAÇÃO: <strong className="text-brand-lime">{selectedProject.role}</strong>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {selectedProject.metrics.map((m, i) => (
              <div key={i} className="p-4 rounded-lg bg-black/60 border border-white/10 space-y-1 relative">
                <div className="text-2xl sm:text-3xl font-black text-white phosphor-lime">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-brand-lime uppercase">
                  {m.label}
                </div>
                {m.detail && <div className="text-[11px] text-slate-400 font-sans">{m.detail}</div>}
              </div>
            ))}
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 font-sans">
            <div className="p-5 rounded-lg bg-red-950/25 border border-red-500/25 space-y-2">
              <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                <span>[DESAFIO TÉCNICO]</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedProject.problem}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-brand-lime/5 border border-brand-lime/30 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-lime uppercase tracking-wider flex items-center gap-2">
                <span>[SOLUÇÃO DE ENGENHARIA]</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedProject.solution}
              </p>
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="space-y-3 mb-8">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              // DESTAQUES DE ARQUITETURA & CÓDIGO
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedProject.technicalHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded bg-black/40 border border-white/10 text-xs text-slate-300 font-sans flex items-start gap-2"
                >
                  <span className="font-mono text-brand-lime font-bold shrink-0">[OK]</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet */}
          {selectedProject.codeSnippet && (
            <div className="space-y-2 mb-8">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <div className="font-bold text-brand-cyan">
                  ARQUIVO: {selectedProject.codeSnippet.filename}
                </div>
                <span className="text-[11px] text-slate-500 font-sans">{selectedProject.codeSnippet.explanation}</span>
              </div>
              <div className="rounded-lg bg-[#050609] border border-white/10 p-4 text-xs text-slate-300 overflow-x-auto">
                <pre>
                  <code>{selectedProject.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 text-xs">
            <span className="text-slate-500 mr-1">STACKS:</span>
            {selectedProject.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] bg-black/60 border border-white/10 text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
