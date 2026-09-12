"use client";

import React from "react";
import InteractiveBinaryPhoto from "./InteractiveBinaryPhoto";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-white/10 text-[11px] font-mono font-bold text-brand-lime uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping mr-1" />
              STATUS: ATIVO EM PRODUÇÃO // CURITIBA - PR
            </div>

            {/* Title & Stacks */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight uppercase leading-[0.95] text-white font-mono">
                {PERSONAL_INFO.callsign}
              </h1>
              <div className="text-base sm:text-xl font-mono font-bold text-brand-lime tracking-tight uppercase">
                ENGENHARIA DE SOFTWARE & SISTEMAS DE BAIXO A ALTO NÍVEL
              </div>
            </div>

            {/* Direct Technical Description */}
            <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed max-w-2xl">
              Desenvolvedor Full-Stack Pleno e graduado em Ciência da Computação (Média Global 8.74, 3º lugar na Maratona de Programação). Experiência comprovada em projetos de alta complexidade: de comunicação serial com hardware e drivers C#/C++ para a <strong className="text-white">Positivo Tecnologia</strong> a monolitos modulares de alta concorrência em <strong className="text-white">NestJS, Bun, PostgreSQL e TypeScript</strong> na <strong className="text-white">LYX Engenharia</strong> (410 commits e 86 PRs em produção).
            </p>

            {/* Proof of Stacks Summary Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-surface border border-white/10 space-y-1">
                <div className="text-brand-lime font-bold text-[11px] uppercase">
                  [PROVA: HARDWARE & EMBARCADO]
                </div>
                <div className="text-slate-300">
                  Positivo Vision R15M: Minitela secundária via protocolo serial, C#, C++, UWP e Microsoft Store.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface border border-white/10 space-y-1">
                <div className="text-brand-cyan font-bold text-[11px] uppercase">
                  [PROVA: MONOLITO & ESCALA]
                </div>
                <div className="text-slate-300">
                  lyx-monolith: 4 módulos do zero, 714 testes reais em Postgres WASM (PGlite), zero mocks de banco.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface border border-white/10 space-y-1">
                <div className="text-slate-200 font-bold text-[11px] uppercase">
                  [PROVA: FORENSE & DADOS]
                </div>
                <div className="text-slate-300">
                  Axiom APL: 562 eventos órfãos erradicados por assinatura temporal (30min vs 20min) e hostname.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface border border-white/10 space-y-1">
                <div className="text-slate-200 font-bold text-[11px] uppercase">
                  [PROVA: CERTIFICAÇÃO]
                </div>
                <div className="text-slate-300">
                  Harvard CS50x (C, Python, SQL, Estruturas de Dados) e Inglês C1 Advanced (EF SET).
                </div>
              </div>
            </div>

            {/* Quick Action Buttons without icons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
              <a
                href="#vision-r15m"
                className="px-5 py-3 rounded-lg bg-brand-lime hover:bg-brand-limeHover text-black font-bold uppercase tracking-wider transition-all"
              >
                [VER CASE: POSITIVO VISION R15M]
              </a>

              <a
                href="#cases"
                className="px-5 py-3 rounded-lg bg-surface hover:bg-surface-hover border border-white/10 text-white font-semibold uppercase transition-all"
              >
                [VER MÓDULOS LYX MONOLITH]
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf"
                className="px-4 py-3 rounded-lg bg-surface border border-white/10 hover:border-brand-lime text-slate-300 hover:text-white uppercase transition-all"
              >
                [BAIXAR CV PDF]
              </a>
            </div>

            {/* Contacts info line */}
            <div className="pt-2 text-xs font-mono text-slate-400 flex flex-wrap items-center gap-4">
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
