"use client";

import React from "react";

export default function TelemetryTicker() {
  const items = [
    "410+ COMMITS EM PRODUÇÃO",
    "86 PRS NA MAIN",
    "714 TESTES COM POSTGRES WASM REAL",
    "ZERO MOCKS DE BANCO",
    "DEPENDENCY-CRUISER CI GATES",
    "562 ZOMBIE EVENTS HUNTED",
    "2.490 TAREFAS .MPP EM 250MS TS PURO",
    "96% CONCILIAÇÃO FINANCEIRA ERP",
    "NESTJS + BUN + DRIZZLE + BETTER AUTH",
    "C# & C++ HARDWARE EMBARCADO POSITIVO",
    "HARVARD CS50x CERTIFIED",
    "BAC. CIÊNCIA DA COMPUTAÇÃO MÉDIA 8.74",
    "CI/CD JENKINS & TRUNK-BASED",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-brand-lime py-3 sm:py-3.5 border-y-2 border-black selection:bg-black selection:text-brand-lime">
      <div className="flex select-none whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 text-black">
            <span className="font-black text-xs sm:text-sm tracking-wider uppercase font-mono">
              {item}
            </span>
            <span className="mx-4 sm:mx-6 text-black/50 text-base">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
