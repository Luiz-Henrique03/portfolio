"use client";

import React, { useState, useEffect } from "react";
import InteractiveBinaryPhoto from "./InteractiveBinaryPhoto";
import HeroTechMarquee from "./HeroTechMarquee";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, personalInfo, language, isPt } = useLanguage();
  const fullBioText = t.hero.bio;

  const [charIndex, setCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Reset and re-type on language change
  useEffect(() => {
    setCharIndex(0);
    setIsTypingComplete(false);
  }, [language]);

  useEffect(() => {
    if (charIndex < fullBioText.length) {
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

      {/* Flowing Tech Logos Marquee Stream in Background */}
      <HeroTechMarquee />

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
                      {t.hero.skipTyping}
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
                    {!isTypingComplete
                      ? (isPt ? "DIGITANDO EM TEMPO REAL..." : "STREAMING IN REAL-TIME...")
                      : (isPt ? "CLIQUE PARA REVISITAR" : "CLICK TO REPLAY")}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Link Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1 px-1">
              <div className="flex items-center gap-3 text-[11px] text-slate-400">
                <span>E-MAIL: <strong className="text-white">{personalInfo.email}</strong></span>
                <span>•</span>
                <span>TEL: <strong className="text-white">{personalInfo.phone}</strong></span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-sheen inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] active:translate-y-0 active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.396 0 .029 5.367.029 12.003c0 2.119.553 4.186 1.606 6.01L.002 24l6.167-1.618a11.96 11.96 0 0 0 5.862 1.524h.005c6.634 0 12.001-5.367 12.001-12.003A12.01 12.01 0 0 0 12.031 0zm0 21.913a9.92 9.92 0 0 1-5.06-1.39l-.363-.215-3.757.986.998-3.664-.236-.375a9.916 9.916 0 0 1-1.517-5.252c0-5.485 4.464-9.949 9.953-9.949 2.658 0 5.157 1.036 7.036 2.915a9.89 9.89 0 0 1 2.91 7.037c0 5.487-4.464 9.952-9.951 9.952zm5.454-7.447c-.299-.15-1.77-.874-2.044-.974-.275-.099-.475-.15-.675.15s-.774.974-.95 1.173c-.174.2-.35.225-.649.075-.3-.15-1.266-.467-2.411-1.488-.891-.795-1.493-1.778-1.668-2.078-.175-.3-.019-.462.131-.611.135-.134.3-.35.45-.525.15-.175.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.625-.925-2.224-.244-.584-.492-.505-.675-.514-.175-.009-.375-.009-.575-.009-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.898 1.225 3.098c.15.2 2.115 3.23 5.123 4.531.716.31 1.275.495 1.71.634.719.229 1.373.197 1.89.12.577-.087 1.77-.724 2.02-1.423.25-.699.25-1.298.175-1.423-.075-.125-.275-.2-.575-.35z" />
                  </svg>
                  <span>WHATSAPP</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-sheen inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-brand-lime text-slate-300 hover:text-white text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(204,255,0,0.3)] active:translate-y-0 active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GITHUB</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-sheen inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-brand-cyan text-slate-300 hover:text-white text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] active:translate-y-0 active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z" />
                  </svg>
                  <span>LINKEDIN</span>
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
            <span>{isPt ? "ROLE A PÁGINA PARA EXPLORAR OS SISTEMAS" : "SCROLL TO EXPLORE SYSTEMS"}</span>
          </div>
          <div className="text-brand-lime font-bold text-sm animate-bounce">
            ▼
          </div>
        </a>
      </div>
    </section>
  );
}
