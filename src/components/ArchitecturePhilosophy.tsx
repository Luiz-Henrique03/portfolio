"use client";

import React from "react";
import { ARCHITECTURE_PILLARS } from "@/data/portfolioData";

export default function ArchitecturePhilosophy() {
  const comparison = [
    {
      factor: "Consistência de Dados",
      microservices: "Sagas distribuídas, estado intermediário inconsistente e compensações manuais com falhas de rede.",
      modularMonolith: "1 Transação ACID. O boletim grava linhas, ledger e assinatura de forma atômica ou faz rollback.",
    },
    {
      factor: "Comunicação entre Bounded Contexts",
      microservices: "Chamadas HTTP/gRPC com latência de rede, timeouts, circuit breakers e overhead de versionamento.",
      modularMonolith: "Injeção de Service tipada em TypeScript. Verificada pelo compilador em tempo de build (zero custo de rede).",
    },
    {
      factor: "Fronteira de Domínio",
      microservices: "Fronteira física dada pela rede com custo de infraestrutura e latência.",
      modularMonolith: "Fronteira enforçada por máquina: dependency-cruiser no CI configurado como erro para imports cruzados.",
    },
    {
      factor: "Deploy & Migrations Concorrentes",
      microservices: "Orquestração complexa de múltiplos serviços com estados de banco divergentes em trânsito.",
      modularMonolith: "Advisory lock do Postgres em conexão dedicada (max: 1) no boot com padrão expand-contract.",
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-[#07080c] border-b border-white/10 relative text-left font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase">
            [ENGENHARIA DE ARQUITETURA] // DECISÕES DE INFRAESTRUTURA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            MONOLITO MODULAR: POR QUE NÃO MICROSERVIÇOS?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans">
            A decisão na LYX de integrar Mentor, ERP SAP, Suplos, Teams, Kommo e SEFAZ em um único processo e banco com 33 bounded contexts estritamente isolados.
          </p>
        </div>

        {/* 4 Pillars Grid without icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ARCHITECTURE_PILLARS.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-surface border border-white/10 hover:border-brand-lime/40 transition-all space-y-3"
            >
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                <span className="text-xs font-bold text-brand-lime">
                  [{String(idx + 1).padStart(2, "0")}]
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase">
                    {p.title}
                  </h3>
                  <div className="text-xs text-brand-cyan">{p.subtitle}</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {p.description}
              </p>

              <div className="pt-2 text-xs text-slate-400">
                <span className="text-brand-lime mr-1.5">[MÉTRICA]:</span>
                <span>{p.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Side by Side Architecture Comparison Table */}
        <div className="rounded-2xl bg-surface border border-white/10 overflow-hidden shadow-xl">
          <div className="p-4 sm:p-5 bg-[#0b0d14] border-b border-white/10 flex items-center justify-between text-xs">
            <span className="font-bold text-white uppercase">
              TABELA COMPARATIVA DE DECISÃO TÉCNICA
            </span>
            <span className="text-brand-lime font-bold">
              VALIDADO EM PRODUÇÃO NO LYX-MONOLITH
            </span>
          </div>

          <div className="divide-y divide-white/5">
            {comparison.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start text-xs">
                <div className="lg:col-span-3 font-bold text-white uppercase">
                  {item.factor}
                </div>
                <div className="lg:col-span-4 p-3 rounded bg-red-950/20 border border-red-500/20 text-slate-300 font-sans">
                  <span className="font-mono text-red-400 font-bold block mb-1 text-[11px] uppercase">
                    Microserviços Prematuros:
                  </span>
                  {item.microservices}
                </div>
                <div className="lg:col-span-5 p-3 rounded bg-brand-lime/5 border border-brand-lime/30 text-slate-200 font-sans">
                  <span className="font-mono text-brand-lime font-bold block mb-1 text-[11px] uppercase">
                    Monolito Modular LYX:
                  </span>
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
