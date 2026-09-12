"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    setCopiedEmail(true);
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#ccff00", "#00f0ff", "#ffffff", "#ffd700"],
      });
    } catch {}
  };

  return (
    <section className="py-24 bg-[#050508] relative overflow-hidden text-left font-mono">
      {/* Background CRT scanlines */}
      <div className="absolute inset-0 crt-scanlines opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#090b14] border-2 border-brand-lime/30 p-8 sm:p-12 lg:p-14 shadow-2xl space-y-6 relative box-phosphor-lime overflow-hidden"
        >
          {/* Corner crosshairs */}
          <div className="absolute top-2 left-2 text-[10px] text-brand-lime/40 select-none">[+]</div>
          <div className="absolute top-2 right-2 text-[10px] text-brand-lime/40 select-none">[+]</div>
          <div className="absolute bottom-2 left-2 text-[10px] text-brand-lime/40 select-none">[+]</div>
          <div className="absolute bottom-2 right-2 text-[10px] text-brand-lime/40 select-none">[+]</div>
          
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase flex items-center gap-2">
            <span>[CONTRATAÇÃO & CONTATO PROFISSIONAL] // CANAL DIRETO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase tracking-tight leading-tight phosphor-lime">
            CONTATO DIRETO & OPORTUNIDADES DE ENGENHARIA
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
            Para oportunidades de desenvolvimento de software em C#, C++, TypeScript, Python, backend, desktop/embarcado ou engenharia de dados e BI: entre em contato diretamente.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sheen px-6 py-3.5 rounded-lg bg-brand-lime hover:bg-brand-limeHover text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-lime-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(204,255,0,0.5)] active:translate-y-0 active:scale-95"
            >
              [CONVERSAR NO WHATSAPP]
            </a>

            <a
              href={PERSONAL_INFO.cvPath}
              download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
              onClick={handleDownload}
              className="btn-sheen px-6 py-3.5 rounded-lg bg-black/60 border border-brand-lime/50 text-brand-lime hover:bg-brand-lime hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(204,255,0,0.4)] active:translate-y-0 active:scale-95"
            >
              [BAIXAR CURRÍCULO PDF]
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-sheen px-5 py-3.5 rounded-lg bg-[#080a12] border border-white/15 hover:border-brand-cyan text-slate-300 hover:text-white font-bold text-xs uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,240,255,0.35)] active:translate-y-0 active:scale-95"
            >
              {copiedEmail ? "[E-MAIL COPIADO!]" : "[COPIAR E-MAIL]"}
            </button>
          </div>

          {/* Contact coordinates */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <div>
              <span className="text-slate-500 block text-[10px]">E-MAIL:</span>
              <span className="text-white font-bold">{PERSONAL_INFO.email}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">TELEFONE:</span>
              <span className="text-white font-bold">{PERSONAL_INFO.phone}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">LOCALIZAÇÃO:</span>
              <span className="text-white font-bold">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
