"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { sound } from "@/utils/sound";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Volume2, 
  VolumeX, 
  FileDown, 
  Menu, 
  X, 
  Terminal as TerminalIcon, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Navbar() {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = () => {
    const next = sound.toggle();
    setAudioEnabled(next);
  };

  const triggerDownloadCV = () => {
    sound.playSuccess();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.2 },
        colors: ["#ccff00", "#00f0ff", "#ffffff"],
      });
    } catch {
      // Ignore
    }
  };

  const navLinks = [
    { label: "Casos Reais", href: "#cases" },
    { label: "10 Achados Forenses", href: "#forensics" },
    { label: "Arquitetura", href: "#architecture" },
    { label: "Terminal Interativo", href: "#terminal" },
    { label: "Skills", href: "#skills" },
    { label: "Trajetória", href: "#journey" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#07080d]/85 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="group flex items-center gap-3 text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-lime to-emerald-400 p-[1px] shadow-lg group-hover:glow-lime transition-all">
            <div className="w-full h-full bg-[#090a0f] rounded-[7px] flex items-center justify-center">
              <span className="font-mono font-black text-brand-lime text-base tracking-tighter">LH</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-sm tracking-wider uppercase text-white group-hover:text-brand-lime transition-colors">
                LUIZ HENRIQUE
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-brand-lime/10 text-brand-lime border border-brand-lime/30">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-ping mr-1" />
                ONLINE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono tracking-tight">Software Engineer & Systems</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-muted/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-brand-lime hover:bg-white/5 rounded-full transition-all tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions (Sound toggle + Download CV + Contact) */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Audio toggle */}
          <button
            onClick={toggleAudio}
            title={audioEnabled ? "Silenciar efeitos sonoros" : "Ativar efeitos sonoros"}
            className="p-2 rounded-lg bg-surface border border-surface-border text-slate-400 hover:text-brand-lime hover:border-brand-lime/40 transition-all"
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-brand-lime" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Download CV */}
          <a
            href={PERSONAL_INFO.cvPath}
            download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
            onClick={triggerDownloadCV}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-muted border border-white/10 hover:border-brand-lime/50 text-xs font-mono font-medium text-slate-200 hover:text-white transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-brand-lime" />
            <span>Baixar CV</span>
          </a>

          {/* WhatsApp / Hire Button */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-lime hover:bg-brand-limeHover text-black font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:glow-lime"
          >
            <span>Falar Agora</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleAudio}
            className="p-2 rounded-lg bg-surface border border-surface-border text-slate-400"
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-brand-lime" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-surface border border-surface-border text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0b12] border-b border-white/10 px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-brand-lime bg-surface/50 border border-white/5 rounded-lg"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.cvPath}
              download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
              onClick={triggerDownloadCV}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-surface border border-white/10 text-xs font-mono text-slate-200"
            >
              <FileDown className="w-4 h-4 text-brand-lime" />
              <span>Baixar Currículo (PDF)</span>
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-brand-lime text-black font-bold text-xs uppercase"
            >
              <span>Conversar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
