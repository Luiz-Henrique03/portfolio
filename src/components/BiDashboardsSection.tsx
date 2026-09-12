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
            [BUSINESS INTELLIGENCE & DADOS] // CASOS DE ENGENHARIA ANALÍTICA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            DASHBOARDS DE ENGENHARIA & STAR SCHEMA
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans">
            Construção de soluções de Business Intelligence de ponta a ponta: pipelines de ETL atômico, modelagem dimensional em Star Schema e aplicações analíticas em Next.js App Router com banco analítico dedicado.
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
              [MÓDULO {idx + 1}] {bi.title}
            </button>
          ))}
        </div>

        {/* Active BI Showcase Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-white/15 space-y-8 shadow-2xl">
          
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs text-brand-lime font-bold uppercase mb-1">
                ARQUITETURA: {current.architecture}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-2 max-w-3xl">
                {current.overview}
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

          {/* Model Breakdown: Dimensions & Facts (for Fiscalização) OR KPIs (for Impedimentos) */}
          {current.dimensions && current.facts && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Dimensions */}
              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-3">
                <div className="text-xs text-brand-lime font-bold uppercase pb-1 border-b border-white/10">
                  // TABELAS DIMENSÃO (STAR SCHEMA)
                </div>
                <div className="space-y-2">
                  {current.dimensions.map((dim, idx) => (
                    <div key={idx} className="flex flex-col text-xs">
                      <span className="text-white font-bold">{dim.name}</span>
                      <span className="text-slate-400 font-sans text-[11px]">{dim.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facts */}
              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-3">
                <div className="text-xs text-brand-cyan font-bold uppercase pb-1 border-b border-white/10">
                  // TABELAS FATO (STAR SCHEMA)
                </div>
                <div className="space-y-2">
                  {current.facts.map((fact, idx) => (
                    <div key={idx} className="flex flex-col text-xs">
                      <span className="text-white font-bold">{fact.name}</span>
                      <span className="text-slate-400 font-sans text-[11px]">{fact.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* KPIs if available */}
          {current.kpis && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {current.kpis.map((kpi, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-brand-cyan">
                    {kpi.value}
                  </div>
                  <div className="text-xs font-bold text-white uppercase">
                    {kpi.label}
                  </div>
                  <div className="text-[10px] text-slate-400 font-sans">
                    {kpi.detail}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technical highlights */}
          <div className="space-y-3">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              // DESTAQUES DE IMPLEMENTAÇÃO TÉCNICA
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {current.technicalHighlights.map((th, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-surface-muted border border-white/5 text-xs text-slate-300 font-sans flex items-start gap-2"
                >
                  <span className="font-mono text-brand-cyan font-bold shrink-0">[OK]</span>
                  <span>{th}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
