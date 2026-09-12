"use client";

import React, { useState } from "react";
import { BI_DASHBOARDS } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function BiDashboardsSection() {
  const [activeBi, setActiveBi] = useState<number>(0);
  const current = BI_DASHBOARDS[activeBi];

  return (
    <section id="bi-dashboards" className="py-24 bg-[#08090d] border-b border-white/10 relative text-left font-mono overflow-hidden">
      {/* Background CRT scanlines */}
      <div className="absolute inset-0 crt-scanlines opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-12"
        >
          <div className="text-xs font-bold tracking-widest text-brand-cyan uppercase flex items-center gap-2">
            <span>[BUSINESS INTELLIGENCE & DADOS] // ENGENHARIA ANALÍTICA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase tracking-tight">
            DASHBOARDS DE ENGENHARIA & BI
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans">
            Soluções de Business Intelligence e engenharia de dados desenvolvidas para apoiar decisões operacionais e estratégicas em tempo real.
          </p>
        </motion.div>

        {/* Switcher Buttons with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {BI_DASHBOARDS.map((bi, idx) => (
            <button
              key={bi.id}
              onClick={() => setActiveBi(idx)}
              className={`btn-sheen py-2.5 px-4 rounded-lg text-xs font-bold border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                activeBi === idx
                  ? "bg-brand-cyan text-black border-brand-cyan shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                  : "bg-[#090b12] border-white/10 text-slate-400 hover:text-white hover:border-brand-cyan/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              }`}
            >
              [PROJETO {idx + 1}] {bi.title}
            </button>
          ))}
        </motion.div>

        {/* High-Level Showcase Card with 1980s Analog CRT Framing */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-8 rounded-2xl bg-[#090b14] border-2 border-brand-cyan/30 space-y-6 shadow-2xl relative box-phosphor-cyan overflow-hidden"
        >
          {/* Card Corner Accents */}
          <div className="absolute top-2 left-2 text-[10px] text-brand-cyan/40 select-none">[+]</div>
          <div className="absolute top-2 right-2 text-[10px] text-brand-cyan/40 select-none">[+]</div>
          <div className="absolute bottom-2 left-2 text-[10px] text-brand-cyan/40 select-none">[+]</div>
          <div className="absolute bottom-2 right-2 text-[10px] text-brand-cyan/40 select-none">[+]</div>

          {/* Header Row */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs text-brand-cyan font-bold uppercase mb-1 flex items-center gap-2">
                <span>SOLUÇÃO DE BUSINESS INTELLIGENCE // STAR_SCHEMA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase tracking-tight phosphor-cyan">
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
                  className="px-2 py-0.5 rounded text-[10px] bg-black/60 text-brand-cyan border border-brand-cyan/30"
                >
                  #{s}
                </span>
              ))}
            </div>
          </div>

          {/* High-Level Architecture & Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            
            {/* Technical Approach */}
            <div className="p-5 rounded-xl bg-black/50 border border-white/10 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-lime uppercase tracking-wider flex items-center gap-2">
                <span>[ABORDAGEM TÉCNICA]</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {current.architecture}
              </p>
            </div>

            {/* Business Impact */}
            <div className="p-5 rounded-xl bg-brand-cyan/5 border border-brand-cyan/25 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider flex items-center gap-2">
                <span>[IMPACTO NO NEGÓCIO & OPERAÇÃO]</span>
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
                  className="p-3.5 rounded-lg bg-black/40 border border-white/10 text-xs text-slate-300 font-sans flex items-start gap-2"
                >
                  <span className="font-mono text-brand-cyan font-bold shrink-0">[OK]</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
