"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { sound } from "@/utils/sound";
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  MessageSquare,
  Sparkles
} from "lucide-react";
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
    <section className="py-24 bg-[#050508] relative overflow-hidden text-left">
      {/* Background glow effects */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-lime/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-surface via-[#0d0f16] to-[#08090f] border border-white/15 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DISPONÍVEL PARA DESAFIOS DE ALTO IMPACTO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[0.95]">
              VAMOS RESOLVER O SEU <br />
              <span className="text-brand-lime">PROBLEMA MAIS DIFÍCIL?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Seja para liderar a arquitetura de um monolito modular, destravar integrações críticas sem falsos alarmes ou construir sistemas robustos do zero até o deploy: você acabou de encontrar o engenheiro certo.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-lime hover:bg-brand-limeHover text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl hover:glow-lime"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Conversar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
                onClick={handleDownload}
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-surface-muted hover:bg-surface-hover border border-white/15 text-sm font-mono font-semibold text-white transition-all shadow-md"
              >
                <FileDown className="w-4 h-4 text-brand-lime" />
                <span>Baixar Currículo Completo (PDF)</span>
              </a>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-surface border border-white/10 hover:border-brand-cyan/50 text-sm font-mono text-slate-300 hover:text-white transition-all"
                title="Copiar e-mail"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-brand-lime" /> : <Copy className="w-4 h-4 text-brand-cyan" />}
                <span>{copiedEmail ? "E-mail Copiado!" : "Copiar E-mail"}</span>
              </button>
            </div>

            {/* Contact Details Footnote */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-lime shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
