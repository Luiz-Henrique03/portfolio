"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { sound } from "@/utils/sound";

export default function SkillsRadar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 bg-[#050508] border-b border-white/10 relative text-left font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase">
            [ARSENAL TÉCNICO] // MATRIZ DE DOMÍNIO DE STACK
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            STACKS DE COMBATE & COMPROVAÇÕES
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans">
            Linguagens, frameworks e ferramentas validadas em produção sob concorrência e restrições de baixo nível.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                sound.playClick();
                setActiveTab(idx);
              }}
              className={`p-3.5 rounded-lg border text-left transition-all ${
                activeTab === idx
                  ? "bg-brand-lime text-black border-brand-lime font-bold shadow-md"
                  : "bg-surface border-white/10 text-slate-400 hover:border-brand-lime/40 hover:text-white"
              }`}
            >
              <div className="text-[10px] text-slate-500 font-bold block mb-1">
                [CAT {String(idx + 1).padStart(2, "0")}]
              </div>
              <div className="text-xs tracking-tight font-bold">
                {cat.category}
              </div>
            </button>
          ))}
        </div>

        {/* Active Category Skills List */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 text-xs">
            <span className="font-bold text-white uppercase">
              // {SKILL_CATEGORIES[activeTab].category}
            </span>
            <span className="text-slate-400">
              Proficiência Validada por Código em Produção
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#090a0f] border border-white/5 space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">
                    {skill.name}
                  </span>
                  <span className="font-bold text-brand-lime">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-brand-lime rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-xs text-slate-300 font-sans">
                  {skill.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
