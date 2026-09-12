"use client";

import React, { useState } from "react";
import { PROJECTS, ProjectItem } from "@/data/portfolioData";

export default function CaseStudies() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(PROJECTS[0]);

  return (
    <section id="cases" className="py-24 bg-[#07070a] border-b border-white/10 relative font-mono text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase">
            [PORTFÓLIO DE PROJETOS] // ENGENHARIA DE SOFTWARE & SISTEMAS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            PROJETOS DE SOFTWARE DESENVOLVIDOS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans">
            Sistemas completos desenvolvidos ao longo da trajetória profissional: software embarcado, dashboards de BI analítico, microsserviços e automação de redes.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PROJECTS.map((project) => {
            const isSelected = selectedProject.id === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
                  isSelected
                    ? "bg-brand-lime text-black border-brand-lime shadow-lg"
                    : "bg-surface text-slate-400 border-white/10 hover:border-brand-lime/40 hover:text-white"
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
        </div>

        {/* Featured Project Panel */}
        <div className="rounded-2xl bg-surface border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
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
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-300 font-sans mt-2 max-w-3xl">
                {selectedProject.summary}
              </p>
            </div>

            {/* Role Badge */}
            <div className="px-3 py-1.5 rounded bg-surface-muted border border-white/10 text-xs text-slate-300">
              ATUAÇÃO: <strong className="text-white">{selectedProject.role}</strong>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {selectedProject.metrics.map((m, i) => (
              <div key={i} className="p-4 rounded-lg bg-black/50 border border-white/5 space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-white">
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
            <div className="p-5 rounded-lg bg-red-950/20 border border-red-500/20 space-y-2">
              <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                [DESAFIO TÉCNICO]
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedProject.problem}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-brand-lime/5 border border-brand-lime/30 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-lime uppercase tracking-wider">
                [SOLUÇÃO DE ENGENHARIA]
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
                  className="p-3 rounded bg-black/40 border border-white/5 text-xs text-slate-300 font-sans flex items-start gap-2"
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
                className="px-2 py-0.5 rounded text-[11px] bg-surface-muted border border-white/10 text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
