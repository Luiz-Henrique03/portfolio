"use client";

import React from "react";
import InteractiveBinaryPhoto from "./InteractiveBinaryPhoto";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden text-left font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-white/10 text-[11px] font-bold text-slate-300 uppercase">
              CURITIBA - PR // ENGENHARIA DE SOFTWARE
            </div>

            {/* Title & Stacks */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight uppercase leading-[0.95] text-white">
                {PERSONAL_INFO.callsign}
              </h1>
              <div className="text-sm sm:text-lg font-bold text-brand-lime tracking-tight uppercase">
                DESENVOLVEDOR DE SOFTWARE FULL-STACK
              </div>
            </div>

            {/* Direct, Grounded & Technical Description */}
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
              Bacharel em Ciência da Computação pela Universidade Positivo (Média Global 8.74, 3º lugar na Maratona de Programação) e certificado CS50x pela Harvard University. 
              Atuação prática no desenvolvimento de software de ponta a ponta: engenharia de software embarcado e desktop em <strong className="text-white">C#, C++ e .NET</strong> integrada a hardware OEM para a Positivo Tecnologia, sistemas backend e microsserviços em <strong className="text-white">NestJS, Bun, TypeScript e Python</strong>, e engenharia de dados com <strong className="text-white">Next.js App Router, Star Schema e pipelines de ETL</strong>.
            </p>

            {/* Core Competency Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-lg bg-surface border border-white/10 space-y-1">
                <div className="text-brand-lime font-bold text-[11px] uppercase">
                  [HARDWARE & DESKTOP OEM]
                </div>
                <div className="text-slate-300 font-sans text-xs">
                  Positivo Vision R15M: Minitela integrada via barramento serial, P/Invoke Win32, C#, C++ e homologação na Microsoft Store.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface border border-white/10 space-y-1">
                <div className="text-brand-cyan font-bold text-[11px] uppercase">
                  [BI & ENGENHARIA DE DADOS]
                </div>
                <div className="text-slate-300 font-sans text-xs">
                  Dashboards em Next.js App Router com Star Schema (4 dimensões, 5 fatos), ETL atômico e advisory locks no PostgreSQL.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface border border-white/10 space-y-1">
                <div className="text-slate-200 font-bold text-[11px] uppercase">
                  [BACKEND & CONCORRÊNCIA]
                </div>
                <div className="text-slate-300 font-sans text-xs">
                  Módulos corporativos em NestJS e Bun, circuit breakers, advisory locks em migrations e 714 testes reais em Postgres WASM (PGlite).
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface border border-white/10 space-y-1">
                <div className="text-slate-200 font-bold text-[11px] uppercase">
                  [REDES & INFRAESTRUTURA]
                </div>
                <div className="text-slate-300 font-sans text-xs">
                  Daemons em Linux com sockets UDP para Wake-On-LAN na Caixa Econômica, além de automação de CI/CD com Jenkins e Docker.
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <a
                href="#vision-r15m"
                className="px-5 py-3 rounded-lg bg-brand-lime hover:bg-brand-limeHover text-black font-bold uppercase tracking-wider transition-all"
              >
                [VER POSITIVO VISION R15M]
              </a>

              <a
                href="#bi-dashboards"
                className="px-5 py-3 rounded-lg bg-surface hover:bg-surface-hover border border-white/10 text-brand-cyan font-bold uppercase transition-all"
              >
                [VER DASHBOARDS DE BI]
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
                className="px-4 py-3 rounded-lg bg-surface border border-white/10 hover:border-brand-lime text-slate-300 hover:text-white uppercase transition-all"
              >
                [BAIXAR CV PDF]
              </a>
            </div>

            {/* Direct Contacts Info */}
            <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-4">
              <span>E-MAIL: {PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>TEL: {PERSONAL_INFO.phone}</span>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-brand-lime hover:underline">
                GITHUB
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-brand-cyan hover:underline">
                LINKEDIN
              </a>
            </div>

          </div>

          {/* Interactive Binary Photo Column (5 cols) */}
          <div className="lg:col-span-5">
            <InteractiveBinaryPhoto />
          </div>

        </div>
      </div>
    </section>
  );
}
