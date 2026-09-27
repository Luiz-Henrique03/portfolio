"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function CareerTimeline() {
  const { t, isPt, careerJourney, educationHonors } = useLanguage();

  return (
    <section id="journey" className="py-24 bg-[#07070a] border-b border-white/10 relative text-left font-mono overflow-hidden">
      {/* Background CRT scanlines */}
      <div className="absolute inset-0 crt-scanlines opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-16"
        >
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase flex items-center gap-2">
            <span>{t.career.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase tracking-tight">
            {t.career.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Professional Experience (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="text-sm font-bold text-white uppercase pb-2 border-b border-white/10 flex items-center justify-between">
              <span className="flex items-center gap-2">
                // {t.career.experienceTitle}
              </span>
              <span className="text-xs text-brand-lime font-mono">[{isPt ? "MERCADO" : "INDUSTRY"}]</span>
            </div>

            <div className="relative border-l border-brand-lime/30 ml-2 pl-6 space-y-8">
              {careerJourney.map((job, idx) => (
                <div key={idx} className="relative space-y-2">
                  {/* Glowing phosphor node on line */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-lime shadow-[0_0_8px_#ccff00]" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-base font-bold text-white">
                      {job.role}
                    </span>
                    <span className="text-xs text-slate-400 bg-black/60 px-2 py-0.5 rounded border border-white/10 font-mono">
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
                        className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-slate-400 border border-white/5"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Honors (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="text-sm font-bold text-white uppercase pb-2 border-b border-white/10 flex items-center justify-between">
              <span className="flex items-center gap-2">
                // {t.career.educationTitle}
              </span>
              <span className="text-xs text-brand-cyan font-mono">[ACADEMIA]</span>
            </div>

            <div className="space-y-4">
              {educationHonors.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#090b14] border border-white/10 space-y-2 relative group hover:border-brand-cyan/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20 uppercase font-mono">
                      [{edu.badge}]
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">{edu.period}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {edu.title}
                  </h4>

                  <div className="text-xs text-brand-lime font-bold phosphor-lime">
                    {edu.highlight}
                  </div>

                  <div className="text-xs text-slate-400 font-mono">
                    {edu.institution}
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
