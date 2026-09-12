"use client";

import React, { useState, useRef, useEffect } from "react";
import { sound } from "@/utils/sound";
import { Terminal as TerminalIcon, Play, RefreshCw, Copy, Check } from "lucide-react";
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
      text: "LUIZ HENRIQUE // FORENSIC SHELL v2.6.4 [Axiom + NestJS Telemetry Stream]",
    },
    {
      type: "system",
      text: "Digite um comando ou selecione um dos atalhos abaixo para inspecionar producao.",
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
DIAGNOSTICO: Build antiga sem cleanup gerava 562 eventos orfaos no Microsoft Teams.
ACAO EXECUTADA: Script sequencial com backoff de 180ms por delete. 100% dos orfaos eliminados. Zero falhas.`,
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

    if (lower.includes("axiom") || lower.includes("hostname") || lower.includes("zombie")) {
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
- Backend: NestJS, Bun, Node.js, C#, .NET, C++, Python, PHP
- Bancos de Dados: PostgreSQL, Drizzle ORM, PGlite (WASM), SQL Server, MariaDB, MySQL, MongoDB
- DevOps & CI/CD: Jenkins, Docker, Linux, GitHub Actions, RabbitMQ
- Observabilidade: Axiom APL, Pino Structured Logging, Cardinality Vacuuming
- Frontend: Next.js 14, React, Tailwind CSS, TypeScript, Web Audio API`,
      });
    } else if (lower.includes("manifesto") || lower.includes("cat")) {
      newHistory.push({
        type: "output",
        text: `"Engenharia nao e seguir receitas prontas. E ter a disciplina de investigar a causa raiz, nao mascarar erro com retry cego, provar que o teste falha sem o fix e garantir que o monolito seja verdadeiramente modular. Menos hype, mais resultado em producao."`,
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
- axiom: Replay da investigacao forense dos 562 containers zumbis
- test: Executa suite de 714 testes reais em PGlite WASM
- whoami: Exibe biografia e credenciais
- stack: Exibe matriz de tecnologias dominadas
- cat manifesto.txt: Exibe manifesto de engenharia
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
    <section id="terminal" className="py-20 bg-[#050508] border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase">
            <TerminalIcon className="w-4 h-4" />
            <span>// AUDITORIA FORENSE INTERATIVA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            TERMINAL DE TELEMETRIA EM TEMPO REAL
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Experimente comandos reais usados para desvendar anomalias de produção e validar centenas de testes automatizados.
          </p>
        </div>

        {/* Shortcut buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 mr-2">ATALHOS:</span>
          <button
            onClick={() => executeCmd("axiom")}
            onMouseEnter={() => sound.playHover()}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-brand-lime text-[11px] font-mono text-brand-lime"
          >
            $ axiom --forensics
          </button>
          <button
            onClick={() => executeCmd("test")}
            onMouseEnter={() => sound.playHover()}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-brand-cyan text-[11px] font-mono text-brand-cyan"
          >
            $ test --pglite-wasm
          </button>
          <button
            onClick={() => executeCmd("whoami")}
            onMouseEnter={() => sound.playHover()}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-white text-[11px] font-mono text-slate-300"
          >
            $ whoami
          </button>
          <button
            onClick={() => executeCmd("cat manifesto.txt")}
            onMouseEnter={() => sound.playHover()}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-white text-[11px] font-mono text-slate-300"
          >
            $ cat manifesto.txt
          </button>
          <button
            onClick={() => executeCmd("cv")}
            onMouseEnter={() => sound.playHover()}
            className="px-2.5 py-1 rounded bg-surface border border-brand-lime/30 text-[11px] font-mono text-brand-lime bg-brand-lime/10"
          >
            $ download-cv
          </button>
          <button
            onClick={() => executeCmd("clear")}
            onMouseEnter={() => sound.playHover()}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 text-[11px] font-mono text-slate-500 hover:text-slate-300"
          >
            $ clear
          </button>
        </div>

        {/* Terminal Window */}
        <div className="rounded-xl terminal-window overflow-hidden border border-white/15 shadow-2xl">
          {/* Top Window Bar */}
          <div className="bg-[#0e1017] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">
                luiz@lyx-monolith: ~ (production telemetry)
              </span>
            </div>

            <button
              onClick={copySnippet}
              className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white"
              title="Copiar query forense"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-brand-lime" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copiada" : "Copiar APL"}</span>
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed max-h-[420px] overflow-y-auto space-y-3 bg-[#08090f]">
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
            className="bg-[#0b0d14] px-4 py-3 border-t border-white/10 flex items-center gap-2 font-mono text-xs sm:text-sm"
          >
            <span className="text-brand-lime font-bold shrink-0">guest@prod:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Digite um comando (ex: axiom, test, whoami, stack, cv)..."
              className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-600 font-mono"
            />
            <button
              type="submit"
              className="p-1.5 rounded bg-brand-lime/20 text-brand-lime hover:bg-brand-lime hover:text-black transition-colors"
            >
              <Play className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
