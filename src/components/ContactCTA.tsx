"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactCTA() {
  const { t, isPt, personalInfo } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    setCopiedEmail(true);
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(personalInfo.email);
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
            <span className="inline-block w-2 h-2 rounded-full bg-brand-lime animate-ping" />
            <span>{t.contact.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase tracking-tight leading-tight phosphor-lime">
            {t.contact.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {t.contact.subtitle}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sheen inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-brand-lime hover:bg-brand-limeHover text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-lime-500/20 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(204,255,0,0.5)] active:translate-y-0 active:scale-95"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 0C5.396 0 .029 5.367.029 12.003c0 2.119.553 4.186 1.606 6.01L.002 24l6.167-1.618a11.96 11.96 0 0 0 5.862 1.524h.005c6.634 0 12.001-5.367 12.001-12.003A12.01 12.01 0 0 0 12.031 0zm0 21.913a9.92 9.92 0 0 1-5.06-1.39l-.363-.215-3.757.986.998-3.664-.236-.375a9.916 9.916 0 0 1-1.517-5.252c0-5.485 4.464-9.949 9.953-9.949 2.658 0 5.157 1.036 7.036 2.915a9.89 9.89 0 0 1 2.91 7.037c0 5.487-4.464 9.952-9.951 9.952zm5.454-7.447c-.299-.15-1.77-.874-2.044-.974-.275-.099-.475-.15-.675.15s-.774.974-.95 1.173c-.174.2-.35.225-.649.075-.3-.15-1.266-.467-2.411-1.488-.891-.795-1.493-1.778-1.668-2.078-.175-.3-.019-.462.131-.611.135-.134.3-.35.45-.525.15-.175.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.625-.925-2.224-.244-.584-.492-.505-.675-.514-.175-.009-.375-.009-.575-.009-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.898 1.225 3.098c.15.2 2.115 3.23 5.123 4.531.716.31 1.275.495 1.71.634.719.229 1.373.197 1.89.12.577-.087 1.77-.724 2.02-1.423.25-.699.25-1.298.175-1.423-.075-.125-.275-.2-.575-.35z" />
              </svg>
              <span>[{t.contact.whatsappButton}]</span>
            </a>

            <a
              href={personalInfo.cvPath}
              download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
              onClick={handleDownload}
              className="btn-sheen inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-black/60 border border-brand-lime/50 text-brand-lime hover:bg-brand-lime hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(204,255,0,0.4)] active:translate-y-0 active:scale-95"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="12" y2="18" />
                <line x1="15" y1="15" x2="12" y2="18" />
              </svg>
              <span>{isPt ? "[BAIXAR CURRÍCULO PDF]" : "[DOWNLOAD CV PDF]"}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-sheen inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#080a12] border border-white/15 hover:border-brand-cyan text-slate-300 hover:text-white font-bold text-xs uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,240,255,0.35)] active:translate-y-0 active:scale-95"
            >
              {copiedEmail ? (
                <>
                  <svg className="w-4 h-4 text-brand-lime shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{isPt ? "[E-MAIL COPIADO!]" : "[EMAIL COPIED!]"}</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>{isPt ? "[COPIAR E-MAIL]" : "[COPY EMAIL]"}</span>
                </>
              )}
            </button>
          </div>

          {/* Contact coordinates */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-slate-400">
            <div>
              <span className="text-slate-500 block text-[10px]">E-MAIL:</span>
              <span className="text-white font-bold">{personalInfo.email}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">{isPt ? "TELEFONE / WHATSAPP:" : "PHONE / WHATSAPP:"}</span>
              <span className="text-white font-bold">{personalInfo.phone}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">{isPt ? "LOCALIZAÇÃO:" : "LOCATION:"}</span>
              <span className="text-white font-bold">{personalInfo.location}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">{isPt ? "DISPONIBILIDADE:" : "AVAILABILITY:"}</span>
              <span className="text-brand-lime font-bold">{isPt ? "Projetos & Oportunidades" : "Projects & Opportunities"}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
