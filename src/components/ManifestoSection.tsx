"use client";

import React from "react";

export default function ManifestoSection() {
  const proofs = [
    {
      stack: "C# / C++ / .NET // BAIXO NÍVEL & DRIVERS",
      role: "Positivo Tecnologia (Notebook Vision R15M)",
      evidence:
        "Implementação de interoperabilidade P/Invoke com Win32 API (kernel32), gerenciamento de buffers seriais para envio de frames gráficos a microcontrolador proprietário e ciclo de vida de processo em background no Windows UWP.",
      impact:
        "Minitela integrada ao chassi em produção de fábrica na linha Positivo Vision R15M, aprovada nas restrições de consumo de bateria e certificada oficialmente na Microsoft Store.",
      tags: ["Win32 API", "Serial UART", "Buffers Binários", "MSIX", "Microsoft Store"],
    },
    {
      stack: "NESTJS / BUN / TYPESCRIPT // MONOLITO MODULAR",
      role: "LYX Engenharia (lyx-monolith)",
      evidence:
        "Estruturação de 33 bounded contexts em 1 processo e 1 banco com transações ACID completas. Enforçamento de fronteiras arquiteturais via dependency-cruiser no CI configurado como erro (zero imports de tabelas vizinhas ou internals).",
      impact:
        "410 commits e 86 PRs mergeadas em 5 meses, entregando 4 produtos de missão crítica do zero com custo marginal zero de infraestrutura e zero acoplamento indevido.",
      tags: ["33 Módulos", "dependency-cruiser", "Trunk-based", "Injeção de Service"],
    },
    {
      stack: "POSTGRESQL / DRIZZLE ORM // BANCO & CONCORRÊNCIA",
      role: "LYX Engenharia (Deploy & Migrations)",
      evidence:
        "Execução de migrations no boot do container novo antes de expor a porta HTTP, utilizando advisory locks do Postgres em conexão dedicada (pool max: 1) para prevenir condições de corrida entre réplicas simultâneas.",
      impact:
        "Eliminação total de deadlocks e inconsistências de schema em deploys start-first, com evolução de banco pelo padrão expand-contract (duas PRs com backfill para alterações destrutivas).",
      tags: ["Advisory Locks", "Drizzle Kit", "Expand-Contract", "Transações ACID"],
    },
    {
      stack: "PGLITE WASM // TESTES DE INTEGRAÇÃO REAIS",
      role: "LYX Engenharia (Garantia de Qualidade)",
      evidence:
        "Configuração de esteira de testes rodando contra instância real do PostgreSQL compilada em WebAssembly (PGlite) e Better Auth real, banindo mocks de banco de dados e mocks de autenticação em services e controllers.",
      impact:
        "714 testes automatizados verdes bloqueantes no CI (volume de linhas de teste superior ao de código de produção na maioria dos módulos), com replay de motor contra dados reais de produção antes do merge.",
      tags: ["714 Testes", "PGlite WASM", "Zero Mocks", "Better Auth Real"],
    },
    {
      stack: "AXIOM APL & PINO // OBSERVABILIDADE & FORENSE",
      role: "LYX Engenharia (Auditoria de Produção)",
      evidence:
        "Logs estruturados contendo hostname, evento canônico e IDs de domínio. Investigação de anomalias no agendamento através de query APL 'summarize count() by hostname, event' correlacionando a duração do evento (30min vs 20min) como assinatura técnica.",
      impact:
        "Identificação de container zumbi com build antiga apontando para banco divergente e erradicação sequencial com backoff de 562 eventos órfãos no Microsoft Teams sem interrupção de serviço.",
      tags: ["Axiom APL", "Pino JSON", "Cardinalidade 257 colunas", "Backoff Seguro"],
    },
    {
      stack: "PYTHON & LINUX // AUTOMAÇÃO DE REDE",
      role: "FiscalTech / Caixa Econômica Federal",
      evidence:
        "Desenvolvimento de daemons Linux e rotinas de rede com sockets UDP para montagem e transmissão de pacotes mágicos Wake-On-LAN (WOL) para inicialização e controle remoto de estações de trabalho bancárias.",
      impact:
        "Operação remota de parque corporativo distribuído em rede heterogênea sem necessidade de intervenção física de técnicos nos locais.",
      tags: ["Sockets UDP", "Wake-On-LAN", "Linux Daemons", "REST APIs"],
    },
  ];

  return (
    <section className="py-24 bg-[#06070a] border-b border-white/10 relative text-left font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-14">
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase">
            [COMPROVAÇÕES DE DOMÍNIO TÉCNICO] // EVIDÊNCIAS DE ENGENHARIA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            PROVAS REAIS DE COMPETÊNCIA TÉCNICA
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
            Demonstração prática das linguagens, frameworks e bancos de dados dominados, acompanhados da implementação exata e do impacto mensurado em produção.
          </p>
        </div>

        {/* 2-column Grid of Technical Proofs without icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proofs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-surface border border-white/10 hover:border-brand-lime/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                  <span className="font-bold text-brand-lime">
                    [{String(idx + 1).padStart(2, "0")}] {item.stack}
                  </span>
                  <span className="text-slate-400 text-[11px]">{item.role}</span>
                </div>

                <div className="space-y-2 text-xs leading-relaxed">
                  <div>
                    <span className="text-slate-500 uppercase block text-[10px]">
                      // Implementação & Mecanismo:
                    </span>
                    <p className="text-slate-300 font-sans text-xs sm:text-sm pt-0.5">
                      {item.evidence}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <span className="text-brand-cyan uppercase block text-[10px] font-bold">
                      // Impacto Mensurado:
                    </span>
                    <p className="text-slate-200 font-sans text-xs sm:text-sm pt-0.5">
                      {item.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                {item.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-slate-400 border border-white/5"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
