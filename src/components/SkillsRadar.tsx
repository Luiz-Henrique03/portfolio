"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { sound } from "@/utils/sound";
import { Cpu, Server, Database, Activity, Code2, Sparkles } from "lucide-react";

export default function SkillsRadar() {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Server className="w-4 h-4" />;
      case 1:
        return <Database className="w-4 h-4" />;
      case 2:
        return <Activity className="w-4 h-4" />;
      case 3:
        return <Code2 className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#050508] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-lime uppercase">
            <span>// ARSENAL TÉCNICO</span>
            <span className="w-12 h-[1px] bg-brand-lime/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            STACK DE COMBATE EM PRODUÇÃO
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Tecnologias dominadas na prática sob pressão de canteiros, sistemas operacionais e hardware OEM.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                sound.playClick();
                setActiveTab(idx);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
                activeTab === idx
                  ? "bg-brand-lime text-black border-brand-lime shadow-lg glow-lime font-bold"
                  : "bg-surface border-white/5 text-slate-300 hover:border-brand-lime/40 hover:text-white"
              }`}
            >
              <div className={`${activeTab === idx ? "text-black" : "text-brand-lime"}`}>
                {getIcon(idx)}
              </div>
              <div className="text-xs font-mono tracking-tight font-bold">
                {cat.category}
              </div>
            </button>
          ))}
        </div>

        {/* Active Category Skills List */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface/90 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <h3 className="text-base sm:text-lg font-mono font-black text-white uppercase flex items-center gap-2">
              <span className="text-brand-lime">#</span>
              {SKILL_CATEGORIES[activeTab].category}
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Proficiência Validada por Código
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => sound.playHover()}
                className="p-4 rounded-xl bg-[#090a0f] border border-white/5 hover:border-brand-lime/30 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white group-hover:text-brand-lime transition-colors font-mono">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-brand-lime">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-lime to-emerald-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-xs text-slate-400 font-mono">
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
