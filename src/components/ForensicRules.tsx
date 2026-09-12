"use client";

import React, { useState } from "react";
import { FORENSIC_RULES } from "@/data/portfolioData";
import { sound } from "@/utils/sound";

export default function ForensicRules() {
  const [filter, setFilter] = useState<string>("Todos");
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const categories = ["Todos", "Observabilidade", "Integração", "Modelagem", "Forense"];

  const filtered = filter === "Todos"
    ? FORENSIC_RULES
    : FORENSIC_RULES.filter((r) => r.category === filter);

  const toggleExpand = (id: number) => {
    sound.playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="forensics" className="py-24 bg-[#06070a] border-b border-white/10 relative text-left font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-10">
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase">
            [AUDITORIA FORENSE DE PRODUÇÃO] // 10 CASOS DOCUMENTADOS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            OS 10 ACHADOS TÉCNICOS QUE MAIS RENDERAM
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans">
            Lições cruas acumuladas ao longo de 410 commits no monolito da LYX. Diagnósticos reais resolvidos com observabilidade e análise estrita de protocolos e dados.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs text-slate-500 mr-2 uppercase">
            [FILTRAR CATEGORIA]:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setFilter(cat);
              }}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                filter === cat
                  ? "bg-brand-lime text-black"
                  : "bg-surface border border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 10 Rules Accordion Grid */}
        <div className="space-y-3">
          {filtered.map((rule) => {
            const isExpanded = expandedId === rule.id;
            return (
              <div
                key={rule.id}
                className={`rounded-xl transition-all border overflow-hidden ${
                  isExpanded
                    ? "bg-surface border-brand-lime/40 shadow-xl"
                    : "bg-surface/50 border-white/5 hover:border-white/15"
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleExpand(rule.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-sm sm:text-base font-black text-brand-lime bg-brand-lime/10 px-2.5 py-1 rounded border border-brand-lime/20 shrink-0">
                      #{rule.id.toString().padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-1.5 py-0.2 rounded border border-brand-cyan/20">
                          {rule.category}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {rule.title}
                      </h3>
                      <p className="text-xs text-slate-400 hidden sm:block">
                        {rule.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="text-brand-lime font-bold text-sm shrink-0">
                    {isExpanded ? "[- RECOLHER]" : "[+ EXPANDIR]"}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/10 space-y-4 animate-in fade-in-50 duration-200">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Insight */}
                      <div className="p-4 rounded bg-black/50 border border-white/5 space-y-1">
                        <div className="text-xs font-bold text-slate-300 uppercase">
                          // Diagnóstico Técnico:
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                          {rule.insight}
                        </p>
                      </div>

                      {/* Impact */}
                      <div className="p-4 rounded bg-brand-lime/5 border border-brand-lime/20 space-y-1">
                        <div className="text-xs font-bold text-brand-lime uppercase">
                          // Impacto no Sistema:
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-medium">
                          {rule.impact}
                        </p>
                      </div>
                    </div>

                    {/* Rule Quote */}
                    <div className="p-3 rounded bg-surface-muted border-l-2 border-brand-lime text-xs sm:text-sm italic text-slate-300">
                      &ldquo;{rule.quote}&rdquo;
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
