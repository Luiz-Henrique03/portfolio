"use client";

import React from "react";
import { CORE_METRICS } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function StatsGrid() {
  return (
    <section className="py-24 bg-[#07080d] border-b border-brand-lime/20 relative font-mono overflow-hidden">
      {/* Background CRT Scanlines */}
      <div className="absolute inset-0 crt-scanlines opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        
        {/* Section Header with 1980s Telemetry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 mb-12"
        >
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase flex items-center gap-2">
            <span>[MÉTRICAS & CREDENCIAIS TÉCNICAS] // REGISTRO 1984_V2</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white uppercase tracking-tight">
            INDICADORES DE FORMAÇÃO E IMPACTO
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans">
            Tempo de mercado, certificação internacional e proficiência linguística para atuação em times de alta performance.
          </p>
        </motion.div>

        {/* 3-Col Grid with Staggered Scroll Reveal & 1980s Analog CRT Card Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {CORE_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-5 sm:p-6 rounded-xl bg-[#090b12] border border-white/10 hover:border-brand-lime/50 transition-all text-left space-y-2 relative group overflow-hidden box-phosphor-lime"
            >
              {/* Corner crosshairs */}
              <div className="absolute top-1.5 left-2 text-[9px] text-brand-lime/40 font-mono select-none">[+]</div>
              <div className="absolute top-1.5 right-2 text-[9px] text-brand-lime/40 font-mono select-none">[+]</div>
              
              {/* Card Scanlines on hover */}
              <div className="absolute inset-0 crt-scanlines opacity-15 pointer-events-none group-hover:opacity-30 transition-opacity" />

              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {metric.label}
              </div>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-brand-lime transition-colors phosphor-lime">
                {metric.value}
              </div>
              
              <div className="text-[11px] text-slate-400 font-sans leading-relaxed pt-2 border-t border-white/5">
                {metric.detail}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
