"use client";

import React, { useState } from "react";
import { BI_DASHBOARDS } from "@/data/portfolioData";

export default function BiDashboardsSection() {
  const [activeBi, setActiveBi] = useState<number>(0);
  const current = BI_DASHBOARDS[activeBi];

  return (
    <section id="bi-dashboards" className="py-24 bg-[#08090d] border-b border-white/10 relative text-left font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-bold tracking-widest text-brand-cyan uppercase">
            [BUSINESS INTELLIGENCE & DADOS] // ENGENHARIA ANALÍTICA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            DASHBOARDS DE ENGENHARIA & BI
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans">
            Soluções de Business Intelligence e engenharia de dados desenvolvidas para apoiar decisões operacionais e estratégicas em tempo real.
          </p>
        </div>

        {/* Switcher Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {BI_DASHBOARDS.map((bi, idx) => (
            <button
              key={bi.id}
              onClick={() => setActiveBi(idx)}
              className={`py-2.5 px-4 rounded-lg text-xs font-bold border transition-all ${
                activeBi === idx
                  ? "bg-brand-cyan text-black border-brand-cyan shadow-md"
                  : "bg-surface border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              [PROJETO {idx + 1}] {bi.title}
            </button>
          ))}
        </div>

        {/* High-Level Showcase Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-white/15 space-y-6 shadow-2xl">
          
          {/* Header Row */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs text-brand-cyan font-bold uppercase mb-1">
                SOLUÇÃO DE BUSINESS INTELLIGENCE
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-2 max-w-3xl leading-relaxed">
                {current.objective}
              </p>
            </div>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-1.5 max-w-xs">
              {current.stack.map((s, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[10px] bg-black/50 text-slate-300 border border-white/10"
                >
                  #{s}
                </span>
              ))}
            </div>
          </div>

          {/* High-Level Architecture & Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            
            {/* Technical Approach */}
            <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-lime uppercase tracking-wider">
                [ABORDAGEM TÉCNICA]
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {current.architecture}
              </p>
            </div>

            {/* Business Impact */}
            <div className="p-5 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">
                [IMPACTO NO NEGÓCIO & OPERAÇÃO]
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {current.impact}
              </p>
            </div>

          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              // PONTOS CHAVE DA ENTREGA
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {current.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-surface-muted border border-white/5 text-xs text-slate-300 font-sans flex items-start gap-2"
                >
                  <span className="font-mono text-brand-cyan font-bold shrink-0">[OK]</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
