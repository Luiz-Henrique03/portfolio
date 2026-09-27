"use client";

import React, { useState, useEffect, useMemo } from "react";
import InteractiveBinaryPhoto from "./InteractiveBinaryPhoto";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  const fullBioText = useMemo(() => [
    "Bacharel em Ciência da Computação pela Universidade Positivo e certificado CS50x pela Harvard University, com proficiência em inglês C1 Advanced.",
    "",
    "Atuação sólida na engenharia de software de ponta a ponta, unindo baixo nível, desenvolvimento web, resiliência de backend e arquitetura de dados:",
    "",
    "• HARDWARE OEM & BAIXO NÍVEL: Desenvolvimento em C#, C++ e chamadas Win32 nativas (P/Invoke) para controle de barramento serial e drivers da minitela embutida em notebook OEM com tela secundária (Vision R15M), com aplicação UWP homologada na Microsoft Store.",
    "",
    "• DESENVOLVIMENTO WEB & APLICAÇÕES MODERNAS: Construção de aplicações e interfaces modernas em Next.js, React e TypeScript, incluindo a página oficial de download de distribuição Linux corporativa e o desenvolvimento de portais operacionais, formulários dinâmicos e módulos web para sistemas corporativos de grande porte.",
    "",
    "• BACKEND & MONÓLITOS MODULARES: Arquitetura de monólitos modulares de alta concorrência em NestJS, Bun e TypeScript para plataformas corporativas de missão crítica, com circuit breakers, resiliência contra falhas de rede e suíte com mais de 700 testes automatizados reais rodando sobre PostgreSQL WASM (PGlite).",
    "",
    "• ENGENHARIA DE DADOS & BI: Modelagem dimensional Star Schema (dimensões e fatos), pipelines de ETL serializados por advisory locks no PostgreSQL e dashboards operacionais em tempo real com Next.js App Router e Server Actions."
  ].join("\n"), []);

  const [charIndex, setCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (charIndex < fullBioText.length) {
      // Stream characters at dynamic pace (~12ms per tick, streaming 1-3 chars for natural feel)
      const timeout = setTimeout(() => {
        const step = Math.random() > 0.4 ? 2 : 1;
        setCharIndex((prev) => Math.min(prev + step, fullBioText.length));
      }, 14);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [charIndex, fullBioText]);

  const handleInstantComplete = () => {
    setCharIndex(fullBioText.length);
    setIsTypingComplete(true);
  };

  const displayedText = fullBioText.slice(0, charIndex);

  return (
    <section className="min-h-screen flex flex-col justify-between pt-24 pb-10 relative overflow-hidden font-mono text-left">
      {/* 1980s Ambient Phosphor Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid: Prominent Large Photo + Dynamic Typewriter Terminal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Prominent, Enlarged Interactive Photo with 1980s Analog CRT Framing (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <InteractiveBinaryPhoto />
          </div>

          {/* Right: Dynamic Typewriter Terminal Screen (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            
            {/* Terminal Window Frame (macOS Style) */}
            <div
              onClick={!isTypingComplete ? handleInstantComplete : undefined}
              className="relative rounded-2xl bg-[#080a10]/95 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden cursor-pointer group"
            >
              {/* Top CRT Scanlines */}
              <div className="absolute inset-0 crt-scanlines opacity-25 pointer-events-none z-10" />

              {/* macOS Window Title Bar */}
              <div className="relative px-4 py-3 bg-[#12151f]/95 border-b border-white/10 flex items-center justify-between select-none z-20">
                {/* Left: macOS Traffic Light Buttons */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block shadow-sm" />
                </div>

                {/* Center: macOS Window Title */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono font-medium">
                  <span className="text-slate-500">~</span>
                  <span>luiz@portfolio: — -zsh — 80×24</span>
                </div>

                {/* Right: Skip typing button or session status */}
                <div>
                  {!isTypingComplete ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleInstantComplete();
                      }}
                      className="btn-sheen px-2.5 py-0.5 rounded-md bg-surface border border-brand-lime/50 text-brand-lime hover:bg-brand-lime hover:text-black text-[10px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(204,255,0,0.4)] active:scale-95"
                    >
                      [PULAR DIGITAÇÃO ⚡]
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                      <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">zsh</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">UTF-8</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Terminal Window Body */}
              <div className="p-5 sm:p-7 relative z-20">
                {/* Shell Command Prompt */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3 pb-2 border-b border-white/5">
                  <span className="text-brand-cyan font-bold">luiz@desktop</span>
                  <span className="text-slate-600">:</span>
                  <span className="text-brand-lime font-bold">~</span>
                  <span className="text-slate-300 font-semibold">$ whoami --presentation</span>
                </div>

                {/* Dynamic Typewriter Stream Display */}
                <div className="relative font-serif font-bold text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed max-h-[480px] overflow-y-auto pr-1">
                  <pre className="whitespace-pre-wrap font-serif font-bold select-text">
                    {displayedText}
                    <span className="inline-block w-2 h-5 bg-brand-lime ml-1 align-middle animate-cursor-blink shadow-[0_0_8px_#ccff00]" />
                  </pre>
                </div>

                {/* Bottom Terminal Telemetry Footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] font-mono text-slate-400 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-cyan">HARVARD CS50x</span>
                    <span>•</span>
                    <span className="text-brand-lime">EF SET C1 ENGLISH</span>
                    <span>•</span>
                    <span>POS_TECH OEM</span>
                  </div>
                  <div className="text-slate-500">
                    {!isTypingComplete ? "DIGITANDO EM TEMPO REAL..." : "CLIQUE PARA REVISITAR"}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Link Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1 px-1">
              <div className="flex items-center gap-3 text-[11px] text-slate-400">
                <span>E-MAIL: <strong className="text-white">{PERSONAL_INFO.email}</strong></span>
                <span>•</span>
                <span>TEL: <strong className="text-white">{PERSONAL_INFO.phone}</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-sheen px-3 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-brand-lime text-slate-300 hover:text-white text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(204,255,0,0.3)] active:translate-y-0 active:scale-95"
                >
                  [GITHUB]
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-sheen px-3 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-brand-cyan text-slate-300 hover:text-white text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] active:translate-y-0 active:scale-95"
                >
                  [LINKEDIN]
                </a>
                <a
                  href={PERSONAL_INFO.cvPath}
                  download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
                  className="btn-sheen px-3.5 py-1.5 rounded-lg bg-brand-lime/10 border border-brand-lime/50 text-brand-lime hover:bg-brand-lime hover:text-black font-bold text-[11px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] active:translate-y-0 active:scale-95"
                >
                  [CV PDF]
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Retro 1980s Animated Scroll Prompter at bottom of the initial screen */}
      <div className="w-full flex flex-col items-center justify-center pt-8 z-20 select-none">
        <a
          href="#vision-r15m"
          className="group flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-brand-lime transition-all"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-surface border border-white/10 group-hover:border-brand-lime/50 text-[10px] uppercase tracking-widest text-slate-300 group-hover:text-brand-lime transition-all">
            <span>ROLE A PÁGINA PARA FORMAR OS SISTEMAS</span>
          </div>
          <div className="text-brand-lime font-bold text-sm animate-bounce">
            ▼
          </div>
        </a>
      </div>
    </section>
  );
}
