"use client";

import React, { useState, useRef, useEffect } from "react";
import { sound } from "@/utils/sound";
import confetti from "canvas-confetti";

interface LogEntry {
  type: "input" | "output" | "error" | "system";
  text: string;
}

export default function ForensicsTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<LogEntry[]>([
    {
      type: "system",
      text: "LUIZ HENRIQUE // FORENSIC SHELL v2.6.4 [Axiom Telemetry & Test Replay]",
    },
    {
      type: "system",
      text: "Digite um comando ou selecione um atalho para inspecionar métricas e auditorias de produção.",
    },
    {
      type: "input",
      text: "axiom --query 'summarize count() by hostname, event'",
    },
    {
      type: "output",
      text: `[AUDIT SUCCESS] 2 Containers encontrados concorrendo no mesmo cron de agendamento:
-----------------------------------------------------------------------------------------
HOSTNAME                    EVENT                              COUNT   BUILD STATUS
-----------------------------------------------------------------------------------------
prod-app-monolith-7c4a1b    agenda-fiscais.agendamento_cron    154     VIVA [Grade 20min]
prod-app-legacy-3f8d9e      agenda-fiscais.agendamento_cron    562     ZUMBI [Grade 30min] (BANCO DIVERGENTE)
-----------------------------------------------------------------------------------------
DIAGNÓSTICO: Build antiga sem cleanup gerava 562 eventos órfãos no Microsoft Teams.
AÇÃO EXECUTADA: Script sequencial com backoff de 180ms por delete. 100% dos órfãos eliminados. Zero falhas.`,
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCmd = (cmd: string) => {
    sound.playClick();
    const clean = cmd.trim();
    if (!clean) return;

    const newHistory: LogEntry[] = [...history, { type: "input", text: clean }];
    const lower = clean.toLowerCase();

    if (lower === "clear" || lower === "cls") {
      setHistory([]);
      setInputVal("");
      return;
    }

    if (lower.includes("vision") || lower.includes("positivo") || lower.includes("r15m")) {
      newHistory.push({
        type: "output",
        text: `[POSITIVO VISION R15M - ESPECIFICAÇÃO DE BAIXO NÍVEL]
- Hardware: Display secundário LCD integrado no notebook Positivo Vision R15M.
- Stack: C#, C++ (.NET) com P/Invoke Win32 API e comunicação serial RS-232/UART.
- Telemetria: Coleta de métricas térmicas, bateria e CPU sem sobrecarga de clock.
- Distribuição: Homologação e assinatura de código na Microsoft Store para imagem de fábrica OEM.`,
      });
    } else if (lower.includes("axiom") || lower.includes("hostname") || lower.includes("zombie")) {
      newHistory.push({
        type: "output",
        text: `[FORENSE AXIOM APL] Query executada com sucesso:
---------------------------------------------------------------------
Query: 'summarize count() by hostname, event'
Resultado:
- Hostname 1: prod-app-monolith-7c4a1b (154 eventos ativos, 20min)
- Hostname 2: prod-app-legacy-3f8d9e (562 eventos orfaos, 30min)
Assinatura: Duracao de 30min vs 20min permitiu script de delecao cirurgica sem tocar nos dados ativos!`,
      });
    } else if (lower.includes("test") || lower.includes("pglite") || lower.includes("spec")) {
      sound.playSuccess();
      newHistory.push({
        type: "output",
        text: `[BUN TEST RUNNER] Executando suite com Postgres WASM (PGlite) real e Better Auth...
✓ src/modules/agenda-fiscais/regras/motor.spec.ts (1.723 linhas de cenarios reais) (214ms)
✓ src/modules/almoxarifado/planejamento/cobertura.spec.ts (88ms)
✓ src/modules/medicoes/conciliacao/orcamento.spec.ts (142ms)
✓ src/modules/pessoas/admissao/funil.spec.ts (160ms)
-----------------------------------------------------------------------------------------
Test Suites: 86 passed, 86 total
Tests:       714 passed, 714 total (ZERO MOCKS DE BANCO)
Snapshots:   0
Time:        4.12s
Status:      TODOS OS GATES DE QUALIDADE VERDES`,
      });
    } else if (lower.includes("whoami") || lower.includes("bio")) {
      newHistory.push({
        type: "output",
        text: `Luiz Henrique da Silva de Oliveira
- Titulo: Software Engineer & Systems Architect
- Formacao: Bacharel em Ciencia da Computacao (Universidade Positivo, Media 8.74, 3o Maratona)
- Certificacoes: Harvard CS50x, EF SET C1 Advanced English
- Localizacao: Curitiba - PR (Disponivel Remoto / Hibrido)
- Contato: luizdasilvaoliveira7@gmail.com | (41) 99895-7337`,
      });
    } else if (lower.includes("stack") || lower.includes("skills")) {
      newHistory.push({
        type: "output",
        text: `CORE STACK & ARQUITETURA:
- Baixo Nível & Desktop: C#, C++, .NET, Windows UWP, Win32 API, Serial UART
- Backend & Monolito: NestJS, Bun, Node.js, TypeScript, Python, PHP
- Bancos de Dados: PostgreSQL, Drizzle ORM, PGlite (WASM), SQL Server, MariaDB, MySQL
- DevOps & Observabilidade: Jenkins, Docker, Linux, Axiom APL, Pino Logging, RabbitMQ`,
      });
    } else if (lower.includes("cv") || lower.includes("download")) {
      sound.playSuccess();
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
      } catch {}
      newHistory.push({
        type: "output",
        text: `[DOWNLOAD] Baixando Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf...
Link: /cv.pdf`,
      });
      if (typeof window !== "undefined") {
        window.open("/cv.pdf", "_blank");
      }
    } else if (lower === "help") {
      newHistory.push({
        type: "system",
        text: `Comandos disponiveis:
- vision: Inspeciona arquitetura da minitela do notebook Positivo Vision R15M
- axiom: Replay da investigacao forense dos 562 containers zumbis
- test: Executa suite de 714 testes reais em PGlite WASM
- whoami: Exibe credenciais e formacao academica
- stack: Exibe matriz de tecnologias dominadas
- cv: Abre / baixa curriculo em PDF
- clear: Limpa o terminal`,
      });
    } else {
      newHistory.push({
        type: "error",
        text: `Comando nao reconhecido: '${clean}'. Digite 'help' para listar comandos suportados.`,
      });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const copySnippet = () => {
    sound.playSuccess();
    setCopied(true);
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText("summarize count() by hostname, event");
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 bg-[#050508] border-b border-white/10 relative font-mono text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-8">
          <div className="text-xs font-bold tracking-widest text-brand-cyan uppercase">
            [TERMINAL FORENSE DE PRODUÇÃO] // SHELL INTERATIVO
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            CONSOLE DE TELEMETRIA & REPLAY DE COMANDOS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans">
            Comandos funcionais para inspecionar o caso Positivo Vision R15M, consultas APL no Axiom e execução de testes reais.
          </p>
        </div>

        {/* Shortcut buttons without icons */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
          <span className="text-slate-500 mr-1">[ATALHOS]:</span>
          <button
            onClick={() => executeCmd("vision")}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-brand-lime text-brand-lime"
          >
            $ inspect --vision-r15m
          </button>
          <button
            onClick={() => executeCmd("axiom")}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-brand-cyan text-brand-cyan"
          >
            $ axiom --forensics
          </button>
          <button
            onClick={() => executeCmd("test")}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-white text-slate-300"
          >
            $ test --pglite-wasm
          </button>
          <button
            onClick={() => executeCmd("stack")}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-white text-slate-300"
          >
            $ stack
          </button>
          <button
            onClick={() => executeCmd("cv")}
            className="px-2.5 py-1 rounded bg-brand-lime text-black font-bold"
          >
            $ download-cv
          </button>
          <button
            onClick={() => executeCmd("clear")}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 text-slate-500 hover:text-slate-300"
          >
            $ clear
          </button>
        </div>

        {/* Terminal Window */}
        <div className="rounded-xl terminal-window overflow-hidden border border-white/15 shadow-2xl">
          {/* Top Window Bar */}
          <div className="bg-[#0e1017] px-4 py-2 flex items-center justify-between border-b border-white/10 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-brand-lime font-bold">[SHELL]</span>
              <span>luiz@lyx-monolith:~ (telemetry stream)</span>
            </div>

            <button
              onClick={copySnippet}
              className="text-[11px] text-slate-400 hover:text-white"
            >
              {copied ? "[COPIADO]" : "[COPIAR APL QUERY]"}
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 text-xs sm:text-[13px] leading-relaxed max-h-[400px] overflow-y-auto space-y-3 bg-[#08090f]">
            {history.map((h, i) => (
              <div key={i} className="space-y-1">
                {h.type === "input" && (
                  <div className="flex items-center gap-2 text-brand-lime">
                    <span className="text-slate-500">guest@prod:~$</span>
                    <span className="font-semibold">{h.text}</span>
                  </div>
                )}
                {h.type === "system" && (
                  <div className="text-slate-500 italic">{h.text}</div>
                )}
                {h.type === "output" && (
                  <pre className="text-slate-300 whitespace-pre-wrap font-mono leading-relaxed pl-2 border-l-2 border-brand-lime/30">
                    {h.text}
                  </pre>
                )}
                {h.type === "error" && (
                  <div className="text-red-400 pl-2 border-l-2 border-red-500">{h.text}</div>
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Terminal Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              executeCmd(inputVal);
            }}
            className="bg-[#0b0d14] px-4 py-2.5 border-t border-white/10 flex items-center gap-2 text-xs sm:text-sm"
          >
            <span className="text-brand-lime font-bold shrink-0">guest@prod:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Digite: vision, axiom, test, stack, cv..."
              className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-600 font-mono"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded bg-brand-lime text-black font-bold text-xs"
            >
              [ENVIAR]
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
