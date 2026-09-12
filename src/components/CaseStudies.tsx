"use client";

import React, { useState } from "react";
import { CASE_STUDIES, ProjectCase } from "@/data/portfolioData";
import { sound } from "@/utils/sound";
import { 
  Building2, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  ArrowUpRight, 
  Code2, 
  ChevronRight, 
  Sparkles,
  Calendar,
  ExternalLink
} from "lucide-react";

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<ProjectCase>(CASE_STUDIES[0]);

  return (
    <section id="cases" className="py-24 bg-[#07070a] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-lime uppercase">
            <span>// PRODUTOS & SISTEMAS ENTREGUES</span>
            <span className="w-12 h-[1px] bg-brand-lime/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            ESTUDOS DE CASO: DO ZERO À PRODUÇÃO
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
            Sistemas críticos construídos para canteiros de obras, hardware embarcado corporativo e operações financeiras. Sem teoria: código rodando com usuários reais.
          </p>
        </div>

        {/* Navigation Tabs (Horizontal Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CASE_STUDIES.map((project) => {
            const isSelected = selectedCase.id === project.id;
            return (
              <button
                key={project.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedCase(project);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold whitespace-nowrap transition-all border flex items-center gap-2 ${
                  isSelected
                    ? "bg-brand-lime text-black border-brand-lime shadow-lg glow-lime"
                    : "bg-surface/80 text-slate-300 border-white/10 hover:border-brand-lime/40 hover:text-white"
                }`}
              >
                <span>{project.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                    isSelected ? "bg-black/20 text-black" : "bg-white/5 text-slate-400"
                  }`}
                >
                  {project.company.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Case Study Panel */}
        <div className="rounded-2xl bg-surface/90 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden text-left">
          
          {/* Ambient Corner Flare */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-lime/10 blur-[100px] pointer-events-none rounded-full" />

          {/* Header Row */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold text-brand-lime bg-brand-lime/10 px-2.5 py-0.5 rounded border border-brand-lime/30">
                  {selectedCase.highlightBadge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedCase.company} • {selectedCase.period}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {selectedCase.title}
              </h3>
              <p className="text-sm sm:text-base text-brand-cyan font-mono">
                {selectedCase.subtitle}
              </p>
            </div>

            {/* Role Badge */}
            <div className="px-3 py-1.5 rounded-lg bg-surface-muted border border-white/10 text-xs font-mono text-slate-300">
              Função: <strong className="text-white">{selectedCase.role}</strong>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {selectedCase.metrics.map((m, i) => (
              <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                  {m.value}
                </div>
                <div className="text-xs font-mono font-bold text-brand-lime uppercase">
                  {m.label}
                </div>
                {m.detail && <div className="text-[11px] text-slate-400">{m.detail}</div>}
              </div>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Problem */}
            <div className="p-5 sm:p-6 rounded-xl bg-red-950/15 border border-red-500/20 space-y-2">
              <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                O Desafio / Gargalo Crítico
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedCase.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-5 sm:p-6 rounded-xl bg-brand-lime/5 border border-brand-lime/30 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-lime uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-lime" />
                A Solução de Engenharia Entregue
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedCase.solution}
              </p>
            </div>
          </div>

          {/* Technical Highlights Bullet List */}
          <div className="space-y-3 mb-8">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              // DESTAQUES DE ARQUITETURA & CÓDIGO
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedCase.technicalHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-surface-muted/50 border border-white/5 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Code Snippet Window */}
          {selectedCase.codeSnippet && (
            <div className="space-y-2 mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-brand-cyan" />
                  <span>{selectedCase.codeSnippet.filename}</span>
                </div>
                <span className="text-[11px] text-slate-500">{selectedCase.codeSnippet.explanation}</span>
              </div>
              <div className="rounded-xl bg-[#08090e] border border-white/10 p-4 font-mono text-xs text-slate-200 overflow-x-auto">
                <pre className="text-slate-300 leading-relaxed">
                  <code>{selectedCase.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tags Footer */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
            <span className="text-xs font-mono text-slate-500 mr-2">TECNOLOGIAS:</span>
            {selectedCase.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-surface-muted border border-white/10 text-slate-300 hover:text-white hover:border-brand-lime/40 transition-colors"
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
