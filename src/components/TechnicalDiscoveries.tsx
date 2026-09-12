"use client";

import React, { useState } from "react";
import { TECHNICAL_DISCOVERIES } from "@/data/portfolioData";

export default function TechnicalDiscoveries() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="discoveries" className="py-24 bg-[#06070a] border-b border-white/10 relative text-left font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase">
            [ENGENHARIA NA PRÁTICA] // RESOLUÇÃO DE PROBLEMAS COMPLEXOS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            CASOS DE DIAGNÓSTICO E SOLUÇÃO TÉCNICA
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans">
            Exemplos concretos de gargalos e inconsistências técnicas identificados e solucionados em sistemas de hardware, dados e microsserviços.
          </p>
        </div>

        {/* Discoveries List */}
        <div className="space-y-3">
          {TECHNICAL_DISCOVERIES.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl transition-all border overflow-hidden ${
                  isExpanded
                    ? "bg-surface border-brand-lime/40 shadow-xl"
                    : "bg-surface/50 border-white/5 hover:border-white/15"
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-sm sm:text-base font-black text-brand-lime bg-brand-lime/10 px-2.5 py-1 rounded border border-brand-lime/20 shrink-0">
                      #{item.id.toString().padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5 text-[10px]">
                        <span className="uppercase text-brand-cyan bg-brand-cyan/10 px-1.5 py-0.2 rounded border border-brand-cyan/20">
                          {item.area}
                        </span>
                        <span className="text-slate-500">[{item.context}]</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="text-brand-lime font-bold text-xs shrink-0">
                    {isExpanded ? "[- RECOLHER]" : "[+ DETALHES]"}
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/10 space-y-4 animate-in fade-in-50 duration-200">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Problem */}
                      <div className="p-4 rounded bg-black/50 border border-white/5 space-y-1">
                        <div className="text-xs font-bold text-red-400 uppercase">
                          // Gargalo / Problema Diagnosticado:
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                          {item.problemFound}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="p-4 rounded bg-brand-lime/5 border border-brand-lime/20 space-y-1">
                        <div className="text-xs font-bold text-brand-lime uppercase">
                          // Solução de Engenharia Aplicada:
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-medium">
                          {item.engineeringSolution}
                        </p>
                      </div>
                    </div>

                    {/* Lesson / Takeaway */}
                    <div className="p-3 rounded bg-surface-muted border-l-2 border-brand-lime text-xs sm:text-sm italic text-slate-300">
                      &ldquo;{item.takeaway}&rdquo;
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
