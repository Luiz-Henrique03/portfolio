"use client";

import React from "react";
import { sound } from "@/utils/sound";
import { Check, X, ShieldAlert, Cpu, Award, Zap } from "lucide-react";

export default function ManifestoSection() {
  const pillars = [
    {
      badge: "PILAR 01",
      title: "Forense de Produção vs Tentativa e Erro",
      amateur: "Reinicia o container, coloca console.log e torce pro bug fantasma não reaparecer.",
      luizApproach:
        "Analisa logs estruturados no Axiom com query APL, identifica container concorrente pela duração do evento (30min vs 20min) e limpa 562 órfãos sem derrubar a API do Microsoft Graph.",
      tag: "Observabilidade Autorizada",
    },
    {
      badge: "PILAR 02",
      title: "Monolito Modular vs Microserviços Prematuros",
      amateur: "Separa 10 serviços com sagas complexas, consistência eventual quebrada e falhas de rede em cascata.",
      luizApproach:
        "Desenvolve 33 bounded contexts em 1 processo e 1 banco com transações ACID reais, enforçando fronteiras com dependency-cruiser no CI (zero imports de tabelas vizinhas).",
      tag: "Arquitetura Pragmática",
    },
    {
      badge: "PILAR 03",
      title: "Testes com Banco Real vs Mocks Ilusórios",
      amateur: "Mocka o ORM, mocka a autenticação, mocka o banco. Os testes ficam verdes, mas a migration quebra no deploy.",
      luizApproach:
        "714 testes de integração rodando contra Postgres compilado em WebAssembly (PGlite) e Better Auth real. O volume de teste supera o código de produção.",
      tag: "Confiabilidade Extrema",
    },
    {
      badge: "PILAR 04",
      title: "Do Baixo Nível ao Domínio Corporativo",
      amateur: "Preso à bolha de frameworks web e assustado quando precisa tocar em hardware ou arquivos binários.",
      luizApproach:
        "Programa em C# e C++ para displays embarcados em notebooks Positivo, escreve parser de arquivos .mpp do MS Project em TS nativo (250ms p/ 2.490 tarefas) e fala a língua do negócio.",
      tag: "Engenharia Integral",
    },
  ];

  return (
    <section className="py-24 bg-[#050508] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-mono font-bold tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>O CASO LUIZ HENRIQUE // POR QUE ELE?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            A DIFERENÇA ENTRE QUEM CRIA CÓDIGO E QUEM <span className="text-brand-lime">RESOLVE O PROBLEMA</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Em tempos onde qualquer um copia e cola templates gerados por IA, o diferencial real de um engenheiro está na capacidade de diagnosticar, blindar e arquitetar sistemas que sobrevivem à vida real.
          </p>
        </div>

        {/* Pillars Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="p-6 sm:p-7 rounded-2xl bg-surface/70 border border-white/10 hover:border-brand-lime/40 transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-brand-lime bg-brand-lime/10 px-2 py-0.5 rounded border border-brand-lime/20">
                    {pillar.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white">
                  {pillar.title}
                </h3>

                {/* The Ordinary Way */}
                <div className="p-3.5 rounded-lg bg-red-950/20 border border-red-500/20 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase font-mono">
                    <X className="w-3.5 h-3.5 shrink-0" />
                    <span>O Desenvolvedor Comum</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-5">
                    {pillar.amateur}
                  </p>
                </div>

                {/* The Luiz Henrique Way */}
                <div className="p-3.5 rounded-lg bg-brand-lime/5 border border-brand-lime/30 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-lime uppercase font-mono">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>O Padrão Luiz Henrique</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed pl-5 font-medium">
                    {pillar.luizApproach}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Quote Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-surface-muted via-[#10131e] to-surface-muted border border-white/10 text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg font-mono text-slate-200 italic">
            &ldquo;A regra é simples: se o teste não falhar antes do fix, você não provou nada. Se a migration puder travar o banco, o deploy é irresponsável. Engenharia é rigor.&rdquo;
          </p>
          <div className="mt-3 text-xs font-mono text-brand-lime font-bold uppercase">
            — Filosofia de Trabalho de Luiz Henrique
          </div>
        </div>

      </div>
    </section>
  );
}
