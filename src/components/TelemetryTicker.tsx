"use client";

import React from "react";

export default function TelemetryTicker() {
  const items = [
    "C# & C++ HARDWARE EMBARCADO",
    "POSITIVO VISION R15M (MICROSOFT STORE)",
    "NEXT.JS (APP ROUTER) & DASHBOARDS DE BI",
    "STAR SCHEMA (4 DIMENSÕES, 5 FATOS) & ETL ATÔMICO",
    "NESTJS, BUN & POSTGRESQL/DRIZZLE",
    "714 TESTES REAIS COM POSTGRES WASM (PGLITE)",
    "HARVARD UNIVERSITY CS50x",
    "BAC. CIÊNCIA DA COMPUTAÇÃO (MÉDIA 8.74)",
    "3º LUGAR NA MARATONA DE PROGRAMAÇÃO",
    "PYTHON & LINUX WAKE-ON-LAN (CAIXA)",
    "JENKINS CI/CD & TRUNK-BASED DEVELOPMENT",
    "PARSER MS PROJECT .MPP EM TYPESCRIPT PURO",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-brand-lime py-3 border-y-2 border-black selection:bg-black selection:text-brand-lime">
      <div className="flex select-none whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 text-black">
            <span className="font-black text-xs sm:text-sm tracking-wider uppercase font-mono">
              {item}
            </span>
            <span className="mx-4 sm:mx-6 text-black/40 text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
