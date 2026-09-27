"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="py-10 bg-[#040406] border-t border-white/10 text-slate-500 font-mono text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left info */}
        <div>
          <span className="font-bold text-white uppercase">{PERSONAL_INFO.name}</span>
          <p className="text-[11px] text-slate-500 font-sans">
            Software Engineer & Systems Architect
          </p>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-lime transition-colors"
          >
            [GITHUB]
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-cyan transition-colors"
          >
            [LINKEDIN]
          </a>
        </div>

        {/* Right back to top */}
        <button
          onClick={scrollToTop}
          className="px-3 py-1.5 rounded bg-surface border border-white/10 hover:border-brand-lime text-slate-400 hover:text-white transition-all text-[11px]"
        >
          [SUBIR AO TOPO]
        </button>

      </div>
    </footer>
  );
}
