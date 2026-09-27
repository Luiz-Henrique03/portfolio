"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import confetti from "canvas-confetti";

export default function Navbar() {
  const { t, personalInfo } = useLanguage();
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
    { label: t.nav.vision, href: "#vision-r15m" },
    { label: t.nav.bi, href: "#bi-dashboards" },
    { label: t.nav.cases, href: "#cases" },
    { label: t.nav.discoveries, href: "#discoveries" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.journey, href: "#journey" },
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
          <div className="px-2 py-1 rounded bg-brand-lime text-black font-black text-xs shadow-[0_0_10px_rgba(204,255,0,0.3)]">
            LH
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm tracking-wider uppercase text-white hover:text-brand-lime transition-colors">
                LUIZ HENRIQUE
              </span>
            </div>
            <p className="text-[10px] text-slate-400">{t.nav.role}</p>
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

        {/* Action Controls with Language Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Flag-based Language Switcher (🇧🇷 / 🇺🇸) */}
          <LanguageToggle />

          {/* Download CV */}
          <a
            href={personalInfo.cvPath}
            download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
            onClick={triggerDownloadCV}
            className="btn-sheen px-3.5 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-brand-lime text-[11px] font-bold text-slate-200 hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(204,255,0,0.25)] active:translate-y-0 active:scale-95"
          >
            {t.nav.downloadCv}
          </a>

          {/* WhatsApp */}
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sheen px-4 py-1.5 rounded-lg bg-brand-lime hover:bg-brand-limeHover text-black font-bold text-[11px] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(204,255,0,0.45)] active:translate-y-0 active:scale-95"
          >
            {t.nav.whatsapp}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-sheen px-3 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-brand-lime/60 text-[11px] text-slate-200 font-bold hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            {mobileMenuOpen ? t.nav.close : t.nav.menu}
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
              href={personalInfo.cvPath}
              download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
              onClick={triggerDownloadCV}
              className="text-center py-2 rounded bg-surface border border-white/10 text-xs text-slate-200 font-bold"
            >
              {t.nav.downloadCv}
            </a>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2 rounded bg-brand-lime text-black font-bold text-xs uppercase"
            >
              {t.nav.whatsapp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
