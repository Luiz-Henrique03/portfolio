"use client";

import React from "react";
import { TELEMETRY_METRICS } from "@/data/portfolioData";
import { sound } from "@/utils/sound";

export default function StatsGrid() {
  return (
    <section className="py-20 bg-[#07080d] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-lime uppercase">
            <span>// TELEMETRIA DE PRODUÇÃO</span>
            <span className="w-12 h-[1px] bg-brand-lime/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            NÚMEROS QUE NÃO DÃO PRA FINGIR.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Métricas extraídas diretamente do histórico de repositórios, pipelines de CI/CD e auditorias em produção viva.
          </p>
        </div>

        {/* 4x2 Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TELEMETRY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="group p-5 rounded-xl bg-surface/60 border border-white/5 hover:border-brand-lime/40 hover:bg-surface transition-all text-left relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-brand-lime/10 to-transparent pointer-events-none group-hover:from-brand-lime/30 transition-colors" />
              
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tighter group-hover:text-brand-lime transition-colors">
                {metric.value}
              </div>
              
              <div className="mt-2 text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                {metric.label}
              </div>
              
              <div className="mt-1 text-[11px] text-slate-500 font-sans leading-relaxed">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
