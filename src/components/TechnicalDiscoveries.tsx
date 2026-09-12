"use client";

import React, { useState } from "react";
import { TECHNICAL_DISCOVERIES } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function TechnicalDiscoveries() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="discoveries" className="py-24 bg-[#06070a] border-b border-white/10 relative text-left font-mono overflow-hidden">
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
            <span>[ENGENHARIA NA PRÁTICA] // RELATÓRIOS FORENSES DE PRODUÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase tracking-tight">
            CASOS DE DIAGNÓSTICO E SOLUÇÃO TÉCNICA
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans">
            Exemplos concretos de gargalos e inconsistências técnicas identificados e solucionados em sistemas de hardware, dados e microsserviços.
          </p>
        </motion.div>

        {/* Discoveries List with Staggered Motion */}
        <div className="space-y-3">
          {TECHNICAL_DISCOVERIES.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-xl transition-all border overflow-hidden relative ${
                  isExpanded
                    ? "bg-[#090b14] border-brand-lime/45 shadow-xl box-phosphor-lime"
                    : "bg-[#080910] border-white/10 hover:border-brand-lime/40 hover:shadow-[0_0_20px_rgba(204,255,0,0.08)]"
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 group transition-all"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-sm sm:text-base font-black text-brand-lime bg-black/60 px-2.5 py-1 rounded border border-brand-lime/30 shrink-0 phosphor-lime group-hover:shadow-[0_0_10px_rgba(204,255,0,0.3)] transition-all">
                      #{item.id.toString().padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5 text-[10px]">
                        <span className="uppercase text-brand-cyan bg-brand-cyan/10 px-1.5 py-0.2 rounded border border-brand-cyan/20">
                          {item.area}
                        </span>
                        <span className="text-slate-500 font-mono">[{item.context}]</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-brand-lime transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="text-brand-lime font-bold text-xs shrink-0 font-mono px-2.5 py-1 rounded bg-surface border border-brand-lime/30 group-hover:border-brand-lime group-hover:shadow-[0_0_12px_rgba(204,255,0,0.35)] transition-all">
                    {isExpanded ? "[- RECOLHER]" : "[+ DETALHES]"}
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/10 space-y-4 animate-in fade-in-50 duration-200">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Problem */}
                      <div className="p-4 rounded-lg bg-black/60 border border-red-500/20 space-y-1">
                        <div className="text-xs font-bold text-red-400 uppercase flex items-center gap-1.5">
                          <span>// Gargalo / Problema Diagnosticado:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                          {item.problemFound}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="p-4 rounded-lg bg-brand-lime/5 border border-brand-lime/25 space-y-1">
                        <div className="text-xs font-bold text-brand-lime uppercase flex items-center gap-1.5">
                          <span>// Solução de Engenharia Aplicada:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-medium">
                          {item.engineeringSolution}
                        </p>
                      </div>
                    </div>

                    {/* Lesson / Takeaway */}
                    <div className="p-3.5 rounded bg-black/40 border-l-2 border-brand-lime text-xs sm:text-sm italic text-slate-300 font-mono">
                      &ldquo;{item.takeaway}&rdquo;
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
