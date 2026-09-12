"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import confetti from "canvas-confetti";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerDownloadCV = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.2 },
        colors: ["#ccff00", "#00f0ff", "#ffffff"],
      });
    } catch {}
  };

  const navLinks = [
    { label: "Positivo Vision R15M", href: "#vision-r15m" },
    { label: "BI & Engenharia de Dados", href: "#bi-dashboards" },
    { label: "Projetos de Software", href: "#cases" },
    { label: "Casos Técnicos", href: "#discoveries" },
    { label: "Skills", href: "#skills" },
    { label: "Trajetória", href: "#journey" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        scrolled
          ? "py-2.5 bg-[#07080d]/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#" className="flex items-center gap-2.5 text-left">
          <div className="px-2 py-1 rounded bg-brand-lime text-black font-black text-xs">
            LH
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs tracking-wider uppercase text-white hover:text-brand-lime transition-colors">
                LUIZ HENRIQUE
              </span>
              <span className="text-[10px] text-brand-lime bg-brand-lime/10 px-1 py-0.2 rounded border border-brand-lime/30">
                DISPONÍVEL
              </span>
            </div>
            <p className="text-[10px] text-slate-400">Software Developer</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 bg-surface-muted/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-brand-lime hover:bg-white/5 rounded transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls without audio */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Download CV */}
          <a
            href={PERSONAL_INFO.cvPath}
            download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
            onClick={triggerDownloadCV}
            className="px-3 py-1.5 rounded bg-surface border border-white/10 hover:border-brand-lime text-[11px] text-slate-200 hover:text-white transition-all"
          >
            [BAIXAR CV]
          </a>

          {/* WhatsApp */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded bg-brand-lime hover:bg-brand-limeHover text-black font-bold text-[11px] uppercase transition-all"
          >
            [WHATSAPP]
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 text-[11px] text-slate-200"
          >
            {mobileMenuOpen ? "[FECHAR]" : "[MENU]"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#090b12] border-b border-white/10 px-5 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-slate-300 hover:text-brand-lime bg-surface border border-white/5 rounded"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.cvPath}
              download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
              onClick={triggerDownloadCV}
              className="text-center py-2 rounded bg-surface border border-white/10 text-xs text-slate-200"
            >
              [BAIXAR CURRÍCULO COMPLETO PDF]
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2 rounded bg-brand-lime text-black font-bold text-xs uppercase"
            >
              [CONVERSAR NO WHATSAPP]
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
