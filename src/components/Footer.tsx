"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { sound } from "@/utils/sound";
import { ArrowUp, Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-[#040406] border-t border-white/5 text-slate-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left copyright */}
        <div className="text-center sm:text-left space-y-1">
          <div className="font-bold text-white tracking-wider uppercase">
            {PERSONAL_INFO.name}
          </div>
          <p className="text-slate-500 text-[11px]">
            Construído com Next.js 14, Bun, Tailwind CSS & Framer Motion. Zero mocks.
          </p>
        </div>

        {/* Center Socials */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="hover:text-brand-lime transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="hover:text-brand-cyan transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={PERSONAL_INFO.cvPath}
            download
            onMouseEnter={() => sound.playHover()}
            className="hover:text-white transition-colors"
          >
            Currículo (PDF)
          </a>
        </div>

        {/* Right back to top */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-white/10 hover:border-brand-lime/40 text-slate-400 hover:text-white transition-all"
        >
          <span>Topo</span>
          <ArrowUp className="w-3.5 h-3.5 text-brand-lime" />
        </button>

      </div>
    </footer>
  );
}
