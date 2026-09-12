"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { sound } from "@/utils/sound";
import confetti from "canvas-confetti";

export default function ContactCTA() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    sound.playSuccess();
    setCopiedEmail(true);
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownload = () => {
    sound.playSuccess();
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl bg-surface border border-white/15 p-8 sm:p-12 lg:p-14 shadow-2xl space-y-6">
          
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase">
            [CONTRATAÇÃO & PARCERIA TÉCNICA] // CONTATO DIRETO
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            DISPONÍVEL PARA DESAFIOS DE ENGENHARIA DE ALTA COMPLEXIDADE
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
            Para liderar módulos de sistemas críticos, diagnosticar gargalos de produção ou arquitetar monolitos modulares de alta concorrência: entre em contato diretamente.
          </p>

          {/* Action buttons without icons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg bg-brand-lime hover:bg-brand-limeHover text-black font-bold text-xs uppercase tracking-wider transition-all"
            >
              [CONVERSAR NO WHATSAPP]
            </a>

            <a
              href={PERSONAL_INFO.cvPath}
              download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
              onClick={handleDownload}
              className="px-6 py-3.5 rounded-lg bg-surface-muted hover:bg-surface-hover border border-white/15 text-xs font-bold text-white transition-all uppercase"
            >
              [BAIXAR CURRÍCULO (PDF)]
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-lg bg-surface border border-white/10 hover:border-brand-cyan text-xs text-slate-300 hover:text-white transition-all uppercase"
            >
              {copiedEmail ? "[E-MAIL COPIADO COM SUCESSO]" : "[COPIAR E-MAIL]"}
            </button>
          </div>

          {/* Contact Details Footnote */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400">
            <div>
              <span className="text-slate-500 uppercase block text-[10px]">E-mail:</span>
              <span className="text-white">{PERSONAL_INFO.email}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase block text-[10px]">Celular / WhatsApp:</span>
              <span className="text-white">{PERSONAL_INFO.phone}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase block text-[10px]">Localidade:</span>
              <span className="text-white">{PERSONAL_INFO.location}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
