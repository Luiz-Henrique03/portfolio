"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function FlagBR({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 504"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bandeira do Brasil"
    >
      <rect width="720" height="504" fill="#009B3A" rx="40" />
      <polygon points="360,60 660,252 360,444 60,252" fill="#FEDF00" />
      <circle cx="360" cy="252" r="126" fill="#002776" />
      <path
        d="M234 252C280 200 440 200 486 252"
        stroke="#FFFFFF"
        strokeWidth="14"
        fill="none"
      />
    </svg>
  );
}

export function FlagUS({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 504"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="United States Flag"
    >
      <rect width="720" height="504" fill="#B22234" rx="40" />
      {/* 6 White stripes */}
      <rect y="38.7" width="720" height="38.7" fill="#FFFFFF" />
      <rect y="116.1" width="720" height="38.7" fill="#FFFFFF" />
      <rect y="193.5" width="720" height="38.7" fill="#FFFFFF" />
      <rect y="270.9" width="720" height="38.7" fill="#FFFFFF" />
      <rect y="348.3" width="720" height="38.7" fill="#FFFFFF" />
      <rect y="425.7" width="720" height="38.7" fill="#FFFFFF" />
      {/* Blue canton */}
      <rect width="288" height="270.9" fill="#3C3B6E" rx="30" />
      {/* Simple stylized star dots */}
      <circle cx="60" cy="50" r="10" fill="#FFFFFF" />
      <circle cx="120" cy="50" r="10" fill="#FFFFFF" />
      <circle cx="180" cy="50" r="10" fill="#FFFFFF" />
      <circle cx="240" cy="50" r="10" fill="#FFFFFF" />
      <circle cx="90" cy="100" r="10" fill="#FFFFFF" />
      <circle cx="150" cy="100" r="10" fill="#FFFFFF" />
      <circle cx="210" cy="100" r="10" fill="#FFFFFF" />
      <circle cx="60" cy="150" r="10" fill="#FFFFFF" />
      <circle cx="120" cy="150" r="10" fill="#FFFFFF" />
      <circle cx="180" cy="150" r="10" fill="#FFFFFF" />
      <circle cx="240" cy="150" r="10" fill="#FFFFFF" />
      <circle cx="90" cy="200" r="10" fill="#FFFFFF" />
      <circle cx="150" cy="200" r="10" fill="#FFFFFF" />
      <circle cx="210" cy="200" r="10" fill="#FFFFFF" />
    </svg>
  );
}

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center p-1 rounded-lg bg-surface/90 border border-white/15 backdrop-blur-md shadow-inner"
      role="group"
      aria-label="Seletor de idioma / Language selector"
    >
      {/* Portuguese Button */}
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold font-mono transition-all duration-200 active:scale-95 ${
          language === "pt"
            ? "bg-brand-lime text-black shadow-[0_0_15px_rgba(204,255,0,0.5)] font-black"
            : "text-slate-300 hover:text-white hover:bg-white/10"
        }`}
        title="Mudar para Português (Brasil)"
        aria-pressed={language === "pt"}
      >
        <span className="w-4 h-3 overflow-hidden rounded-[2px] inline-flex items-center justify-center shadow-sm">
          <FlagBR className="w-full h-full object-cover" />
        </span>
        <span>PT</span>
      </button>

      {/* English Button */}
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold font-mono transition-all duration-200 active:scale-95 ${
          language === "en"
            ? "bg-brand-lime text-black shadow-[0_0_15px_rgba(204,255,0,0.5)] font-black"
            : "text-slate-300 hover:text-white hover:bg-white/10"
        }`}
        title="Switch to English (US)"
        aria-pressed={language === "en"}
      >
        <span className="w-4 h-3 overflow-hidden rounded-[2px] inline-flex items-center justify-center shadow-sm">
          <FlagUS className="w-full h-full object-cover" />
        </span>
        <span>EN</span>
      </button>
    </div>
  );
}
