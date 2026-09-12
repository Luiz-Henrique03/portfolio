"use client";

import React from "react";
import { ARCHITECTURE_PILLARS } from "@/data/portfolioData";
import { sound } from "@/utils/sound";
import { 
  GitMerge, 
  Database, 
  Lock, 
  ShieldCheck, 
  Activity, 
  Workflow, 
  Server, 
  Network 
} from "lucide-react";

export default function ArchitecturePhilosophy() {
  const comparison = [
    {
      factor: "Consistência de Dados",
      microservices: "Sagas distribuídas, estado intermediário corrompido e compensações manuais.",
      modularMonolith: "1 Transação ACID. O boletim grava linhas, ledger e assinatura juntos ou aborta tudo.",
    },
    {
      factor: "Comunicação entre Bounded Contexts",
      microservices: "Chamadas HTTP/gRPC com timeout, circuit breakers, retry storms e versionamento de contrato.",
      modularMonolith: "Injeção de Service tipada em TypeScript. Verificada pelo compilador em tempo de build.",
    },
    {
      factor: "Fronteira de Domínio",
      microservices: "Fronteira física dada pela rede, com alto custo de latência e overhead de infra.",
      modularMonolith: "Enforçada por máquina: dependency-cruiser roda como erro no CI bloqueando imports de tabelas vizinhas.",
    },
    {
      factor: "Deploy & Migrations Concorrentes",
      microservices: "Deploy orquestrado com incompatibilidade transitória de versões de schemas.",
      modularMonolith: "Advisory lock do Postgres em conexão dedicada (max: 1) no boot com padrão expand-contract.",
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-[#07080c] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-lime uppercase">
            <span>// BLUEPRINT ARQUITETURAL</span>
            <span className="w-12 h-[1px] bg-brand-lime/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            MONOLITO MODULAR: POR QUE NÃO MICROSERVIÇOS?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
            Decisões técnicas não devem ser baseadas em modismos do Twitter/X. Na LYX, conectamos Mentor, ERP SAP, Suplos, Teams, Kommo, Contraktor e SEFAZ dentro de um processo robusto, testável e de custo marginal zero.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ARCHITECTURE_PILLARS.map((p, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="p-6 sm:p-7 rounded-xl bg-surface/70 border border-white/10 hover:border-brand-lime/40 transition-all space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-center font-mono font-bold text-brand-lime text-xs">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="text-xs text-brand-cyan font-mono">{p.subtitle}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {p.description}
              </p>

              <div className="pt-2 border-t border-white/5 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <span className="text-brand-lime">✦</span>
                <span>{p.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Side by Side Architecture Comparison Table */}
        <div className="rounded-2xl bg-surface border border-white/10 overflow-hidden shadow-xl">
          <div className="p-4 sm:p-6 bg-[#0c0e15] border-b border-white/10 flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Workflow className="w-4 h-4 text-brand-lime" />
              Tabela de Decisão Técnica: Microserviços vs Monolito Modular
            </h3>
            <span className="text-xs font-mono text-brand-lime font-semibold hidden sm:inline">
              lyx-monolith production proof
            </span>
          </div>

          <div className="divide-y divide-white/5">
            {comparison.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                <div className="lg:col-span-3 text-xs sm:text-sm font-mono font-bold text-white uppercase">
                  {item.factor}
                </div>
                <div className="lg:col-span-4 p-3 rounded-lg bg-red-950/20 border border-red-500/20 text-xs text-slate-300">
                  <span className="font-mono text-red-400 font-bold block mb-1">Custo Microserviços:</span>
                  {item.microservices}
                </div>
                <div className="lg:col-span-5 p-3 rounded-lg bg-brand-lime/5 border border-brand-lime/30 text-xs text-slate-200">
                  <span className="font-mono text-brand-lime font-bold block mb-1">Solução no Monolito Modular:</span>
                  {item.modularMonolith}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
