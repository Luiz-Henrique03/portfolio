"use client";

import React, { useState } from "react";
import { SKILL_GROUPS } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function SkillsRadar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 bg-[#050508] border-b border-white/10 relative text-left font-mono overflow-hidden">
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
            <span>[ARSENAL TÉCNICO] // DOMÍNIO DE STACK 1984_V2</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase tracking-tight">
            TECNOLOGIAS E NÍVEL DE PROFICIÊNCIA
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans">
            Linguagens, frameworks, bancos relacionais e ferramentas de engenharia de dados e DevOps aplicadas em ambiente produtivo.
          </p>
        </motion.div>

        {/* Categories Tab Selector with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8"
        >
          {SKILL_GROUPS.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 rounded-lg border text-left transition-all ${
                activeTab === idx
                  ? "bg-brand-lime text-black border-brand-lime font-bold shadow-md shadow-lime-500/20"
                  : "bg-[#090b14] border-white/10 text-slate-400 hover:border-brand-lime/40 hover:text-white"
              }`}
            >
              <div className="text-[10px] text-slate-500 font-bold block mb-1">
                [GRUPO {String(idx + 1).padStart(2, "0")}]
              </div>
              <div className="text-xs tracking-tight font-bold">
                {cat.group}
              </div>
            </button>
          ))}
        </motion.div>

        {/* Active Category Skills List with Motion */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-8 rounded-2xl bg-[#090b14] border-2 border-brand-lime/25 shadow-2xl relative overflow-hidden box-phosphor-lime"
        >
          {/* Corner crosshairs */}
          <div className="absolute top-2 left-2 text-[10px] text-brand-lime/40 select-none">[+]</div>
          <div className="absolute top-2 right-2 text-[10px] text-brand-lime/40 select-none">[+]</div>

          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 text-xs">
            <span className="font-bold text-white uppercase phosphor-lime">
              // {SKILL_GROUPS[activeTab].group}
            </span>
            <span className="text-brand-cyan text-[11px]">
              Proficiência Validada por Código em Produção
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_GROUPS[activeTab].items.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1.5 hover:border-brand-lime/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">
                    {skill.name}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-brand-lime/10 text-brand-lime font-bold border border-brand-lime/30">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
