"use client";

import React from "react";
import { CAREER_JOURNEY, EDUCATION_HONORS } from "@/data/portfolioData";

export default function CareerTimeline() {
  return (
    <section id="journey" className="py-24 bg-[#07070a] border-b border-white/10 relative text-left font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-16">
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase">
            [TRAJETÓRIA PROFISSIONAL & ACADÊMICA] // EXPERIÊNCIA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            DO CÓDIGO EMBARCADO AOS MONOLITOS DISTRIBUÍDOS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans">
            Evolução técnica desde automação industrial até projetos OEM de hardware na Positivo Tecnologia, arquitetura de sistemas distribuídos e engenharia de dados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Professional Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-sm font-bold text-white uppercase pb-2 border-b border-white/10 flex items-center justify-between">
              <span>// EXPERIÊNCIA PROFISSIONAL</span>
              <span className="text-xs text-brand-lime">[MERCADO]</span>
            </div>

            <div className="relative border-l border-white/10 ml-2 pl-6 space-y-8">
              {CAREER_JOURNEY.map((job, idx) => (
                <div key={idx} className="relative space-y-2">
                  {/* Pin point on line */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-lime" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-base font-bold text-white">
                      {job.role}
                    </span>
                    <span className="text-xs text-slate-400 bg-surface px-2 py-0.5 rounded border border-white/10">
                      {job.period}
                    </span>
                  </div>

                  <div className="text-xs text-brand-cyan">
                    {job.company} // <span className="text-slate-500">{job.type}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-surface-muted text-slate-400 border border-white/5"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Honors (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="text-sm font-bold text-white uppercase pb-2 border-b border-white/10 flex items-center justify-between">
              <span>// FORMAÇÃO & CERTIFICAÇÕES</span>
              <span className="text-xs text-brand-cyan">[ACADEMIA]</span>
            </div>

            <div className="space-y-4">
              {EDUCATION_HONORS.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface border border-white/10 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20 uppercase">
                      [{edu.badge}]
                    </span>
                    <span className="text-slate-500">{edu.period}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white">
                    {edu.title}
                  </h4>

                  <div className="text-xs text-brand-lime font-bold">
                    {edu.highlight}
                  </div>

                  <div className="text-xs text-slate-400">
                    {edu.institution}
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
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
