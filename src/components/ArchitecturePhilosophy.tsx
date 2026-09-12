"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ArchitecturePhilosophy() {
  const principles = [
    {
      title: "Consistência Transacional vs Complexidade Prematura",
      rule: "Manter transações ACID reais no banco de dados enquanto os limites de domínio couberem em um monolito modular bem estruturado. Microsserviços só são adotados quando há necessidade estrita de escala independente de times ou infraestrutura, evitando sagas desnecessárias e estados inconsistentes.",
      detail: "1 transação atômica que grava ou reverte tudo, sem falhas parciais de rede.",
    },
    {
      title: "Isolamento Estrito entre Banco Analítico (BI) e Operacional",
      rule: "Sistemas de Business Intelligence e dashboards nunca devem consultar o banco operacional diretamente. As leituras analíticas são isoladas em um banco dedicado (Star Schema) abastecido por pipelines de ETL atômicos, protegendo a aplicação de concorrência com relatórios pesados.",
      detail: "Zero impacto na experiência do usuário final durante a geração de relatórios.",
    },
    {
      title: "Fronteiras de Módulos Enforçadas por Ferramentas de CI",
      rule: "Em arquiteturas modulares, a fronteira entre domínios não pode depender apenas de bom senso em reviews. Ferramentas de análise estática como dependency-cruiser devem rodar como erro no pipeline de CI para bloquear imports indevidos de tabelas ou arquivos internos entre módulos vizinhos.",
      detail: "Chamadas cross-context estritamente tipadas por injeção de interfaces/services.",
    },
    {
      title: "Testes de Integração com Banco Real (PGlite WASM)",
      rule: "Mocks excessivos de ORM e banco de dados criam testes que passam no CI mas quebram em produção na primeira migration ou constraint violada. A utilização de PostgreSQL compilado em WebAssembly permite suítes de testes de integração completas e ultrarrápidas sem mocks artificiais.",
      detail: "Validação real de constraints, foreign keys, triggers e integridade referencial.",
    },
  ];

  return (
    <section id="principles" className="py-24 bg-[#07080c] border-b border-white/10 relative text-left font-mono overflow-hidden">
      {/* Background CRT scanlines */}
      <div className="absolute inset-0 crt-scanlines opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-12"
        >
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-ping" />
            <span>[PRINCÍPIOS DE ENGENHARIA] // PADRÕES DE ARQUITETURA 1984</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            FILOSOFIA E BOAS PRÁTICAS DE DESENVOLVIMENTO
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-sans">
            Diretrizes técnicas que guiam minhas decisões no desenho de software: desde sistemas embarcados até arquiteturas corporativas de backend e dados.
          </p>
        </motion.div>

        {/* Principles Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-xl bg-[#090b12] border border-white/10 hover:border-brand-lime/50 transition-all space-y-3 relative group overflow-hidden box-phosphor-lime"
            >
              {/* Corner crosshairs */}
              <div className="absolute top-1.5 left-2 text-[9px] text-brand-lime/40 select-none">[+]</div>
              <div className="absolute top-1.5 right-2 text-[9px] text-brand-lime/40 select-none">[+]</div>

              <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                <span className="text-xs font-bold text-brand-lime phosphor-lime">
                  [{String(idx + 1).padStart(2, "0")}]
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                  {p.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {p.rule}
              </p>

              <div className="pt-2 text-xs text-brand-cyan flex items-center gap-1.5">
                <span className="text-brand-lime font-bold">// Vantagem:</span>
                <span>{p.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
