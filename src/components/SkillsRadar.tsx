"use client";

import React, { useState } from "react";
import { SKILL_GROUPS } from "@/data/portfolioData";

export default function SkillsRadar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 bg-[#050508] border-b border-white/10 relative text-left font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase">
            [ARSENAL TÉCNICO] // DOMÍNIO DE STACK
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            TECNOLOGIAS E NÍVEL DE PROFICIÊNCIA
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans">
            Linguagens, frameworks, bancos relacionais e ferramentas de engenharia de dados e DevOps aplicadas em ambiente produtivo.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {SKILL_GROUPS.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 rounded-lg border text-left transition-all ${
                activeTab === idx
                  ? "bg-brand-lime text-black border-brand-lime font-bold shadow-md"
                  : "bg-surface border-white/10 text-slate-400 hover:border-brand-lime/40 hover:text-white"
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
        </div>

        {/* Active Category Skills List */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 text-xs">
            <span className="font-bold text-white uppercase">
              // {SKILL_GROUPS[activeTab].group}
            </span>
            <span className="text-slate-400">
              Proficiência Validada por Código em Produção
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_GROUPS[activeTab].items.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#090a0f] border border-white/5 space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">
                    {skill.name}
                  </span>
                  <span className="font-bold text-brand-lime text-[11px]">
                    [{skill.level}]
                  </span>
                </div>

                <p className="text-xs text-slate-300 font-sans">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
