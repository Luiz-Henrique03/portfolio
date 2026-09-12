"use client";

import React from "react";
import { CAREER_JOURNEY, EDUCATION_HONORS } from "@/data/portfolioData";
import { sound } from "@/utils/sound";
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

export default function CareerTimeline() {
  return (
    <section id="journey" className="py-24 bg-[#07070a] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-lime uppercase">
            <span>// TRAJETÓRIA & ACADEMIA</span>
            <span className="w-12 h-[1px] bg-brand-lime/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            DO CÓDIGO EMBARCADO AOS MONOLITOS DISTRIBUÍDOS
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Uma formação disciplinada desde a fábrica da Volkswagen e laboratórios de pesquisa até a liderança de módulos em produção.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Professional Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-lg font-mono font-bold text-white uppercase flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-brand-lime" />
              Histórico Profissional
            </h3>

            <div className="relative border-l border-white/10 ml-3 pl-6 space-y-8">
              {CAREER_JOURNEY.map((job, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => sound.playHover()}
                  className="relative group space-y-2"
                >
                  {/* Pin icon on line */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#07070a] border-2 border-brand-lime group-hover:scale-125 transition-transform" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-brand-lime transition-colors">
                      {job.role}
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-surface px-2 py-0.5 rounded border border-white/5">
                      {job.period}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-brand-cyan">
                    {job.company} • <span className="text-slate-500">{job.type}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-muted text-slate-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Honors (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-lg font-mono font-bold text-white uppercase flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-cyan" />
              Formação & Honras
            </h3>

            <div className="space-y-4">
              {EDUCATION_HONORS.map((edu, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => sound.playHover()}
                  className="p-5 rounded-xl bg-surface/80 border border-white/10 hover:border-brand-cyan/40 transition-all space-y-2 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {edu.title}
                  </h4>

                  <div className="text-xs font-mono text-brand-lime font-semibold">
                    {edu.highlight}
                  </div>

                  <div className="text-xs text-slate-400 font-mono">
                    {edu.institution}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
