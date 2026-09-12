"use client";

import React from "react";
import { CORE_METRICS } from "@/data/portfolioData";

export default function StatsGrid() {
  return (
    <section className="py-20 bg-[#07080d] border-b border-white/10 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase">
            [MÉTRICAS & CREDENCIAIS TÉCNICAS] // DADOS CONCRETOS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            INDICADORES DE FORMAÇÃO E IMPACTO
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-sans">
            Métricas acadêmicas, certificações internacionais e números comprovados em projetos de engenharia de software e hardware.
          </p>
        </div>

        {/* 4x2 Grid without decorative icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CORE_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-surface border border-white/10 hover:border-brand-lime/40 transition-all text-left space-y-2"
            >
              <div className="text-xs font-bold text-slate-400 uppercase">
                {metric.label}
              </div>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {metric.value}
              </div>
              
              <div className="text-[11px] text-slate-400 font-sans leading-relaxed pt-1 border-t border-white/5">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
