"use client";

import React, { useState } from "react";
import { FORENSIC_RULES, ForensicRule } from "@/data/portfolioData";
import { sound } from "@/utils/sound";
import { 
  Terminal, 
  Lightbulb, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Filter 
} from "lucide-react";

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
    <section id="forensics" className="py-24 bg-[#06070a] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-lime uppercase">
            <span>// APRENDIZADO DE TRINCHEIRA</span>
            <span className="w-12 h-[1px] bg-brand-lime/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            OS 10 ACHADOS TÉCNICOS QUE MAIS RENDERAM
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
            Lições cruas acumuladas ao longo de 410 commits no monolito da LYX. Problemas reais que custaram semanas de investigação e foram resolvidos com rigor científico.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            FILTRAR:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setFilter(cat);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                filter === cat
                  ? "bg-brand-lime text-black font-bold shadow-md"
                  : "bg-surface border border-white/10 text-slate-400 hover:text-white hover:border-brand-lime/30"
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
                    : "bg-surface/50 border-white/5 hover:border-white/15 hover:bg-surface/80"
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleExpand(rule.id)}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-mono text-sm sm:text-base font-black text-brand-lime bg-brand-lime/10 px-2.5 py-1 rounded border border-brand-lime/20 shrink-0">
                      #{rule.id.toString().padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-1.5 py-0.2 rounded border border-brand-cyan/20">
                          {rule.category}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {rule.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono hidden sm:block">
                        {rule.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="text-slate-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-brand-lime" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/10 space-y-4 animate-in fade-in-50 duration-200">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Insight */}
                      <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1">
                        <div className="text-xs font-mono font-bold text-slate-300 uppercase">
                          O Achado Diagnóstico:
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {rule.insight}
                        </p>
                      </div>

                      {/* Impact */}
                      <div className="p-4 rounded-lg bg-brand-lime/5 border border-brand-lime/20 space-y-1">
                        <div className="text-xs font-mono font-bold text-brand-lime uppercase">
                          O Impacto no Produto:
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                          {rule.impact}
                        </p>
                      </div>
                    </div>

                    {/* Golden Rule Quote */}
                    <div className="p-3 rounded-lg bg-surface-muted border-l-2 border-brand-gold text-xs sm:text-sm italic font-mono text-brand-gold/90">
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
