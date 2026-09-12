"use client";

import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";

interface LogEntry {
  type: "input" | "output" | "error" | "system";
  text: string;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    {
      type: "system",
      text: "LUIZ HENRIQUE // TERMINAL DE DESENVOLVEDOR v3.0 [C#, C++, TS, Python, BI]",
    },
    {
      type: "system",
      text: "Digite um comando ou clique em um dos atalhos para inspecionar projetos e código.",
    },
    {
      type: "input",
      text: "whoami",
    },
    {
      type: "output",
      text: `Nome: Luiz Henrique da Silva de Oliveira
Função: Desenvolvedor de Software Full-Stack (C#, C++, TypeScript, Python, SQL)
Formação: Bacharel em Ciência da Computação - Universidade Positivo (Média Global 8.74, 3º lugar na Maratona de Programação)
Certificação: Harvard University CS50x | EF SET C1 Advanced English
Localização: Curitiba - PR (Disponível Remoto / Híbrido)`,
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCmd = (cmd: string) => {
    const clean = cmd.trim();
    if (!clean) return;

    const newHistory: LogEntry[] = [...history, { type: "input", text: clean }];
    const lower = clean.toLowerCase();

    if (lower === "clear" || lower === "cls") {
      setHistory([]);
      setInputVal("");
      return;
    }

    if (lower.includes("vision") || lower.includes("positivo") || lower.includes("hardware") || lower.includes("r15m")) {
      newHistory.push({
        type: "output",
        text: `[PROJETO: POSITIVO VISION R15M - MINITELA EMBARCADA]
- Produto: Notebook Positivo Vision R15M com tela secundária LCD no chassi.
- Stack: C#, C++ (.NET) com P/Invoke Win32 API e comunicação serial RS-232/UART.
- Telemetria: Coleta nativa de status de bateria, uso de CPU e clock sem onerar a CPU.
- Distribuição: Empacotamento MSIX/Appx e publicação oficial na Microsoft Store para imagem de fábrica OEM.`,
      });
    } else if (lower.includes("bi") || lower.includes("dados") || lower.includes("schema") || lower.includes("etl")) {
      newHistory.push({
        type: "output",
        text: `[ENGENHARIA DE DADOS & BI: FISCALIZAÇÃO & IMPEDIMENTOS]
1. BI Fiscalização:
   - Modelagem dimensional Star Schema (4 dimensões: dim_obra, dim_fiscal, dim_servico, dim_empreiteiro e 5 fatos).
   - Full reload atômico em 1-2s com advisory lock do Postgres (chave 427914).
   - Isolamento total entre banco operacional e banco analítico (supabase_bi_principal).
2. BI Impedimentos:
   - Next.js App Router com Server Actions e autorização no WHERE (exigirAutorUserId).
   - Gestão de SLA de 48h, agregação em memória de 8 semanas e Modo TV para murais de canteiro.`,
      });
    } else if (lower.includes("backend") || lower.includes("monolito") || lower.includes("test")) {
      newHistory.push({
        type: "output",
        text: `[BACKEND & ARQUITETURA DE SISTEMAS]
- Monolito Modular: 33 bounded contexts em NestJS + Bun + PostgreSQL (Drizzle ORM).
- Testes Reais: 714 testes automatizados em Postgres WASM real (PGlite) e Better Auth real (sem mocks).
- Performance: Parser MS Project (.mpp) em TypeScript nativo rodando 2.490 tarefas em 250ms sem runtime Java.
- Conciliação: Casamento orçamentário com ERP SAP por famílias de insumos espécie S com 96% de assertividade.`,
      });
    } else if (lower.includes("skills") || lower.includes("stack")) {
      newHistory.push({
        type: "output",
        text: `TECNOLOGIAS PRINCIPAIS:
- Desktop & Baixo Nível: C#, C++, .NET, Windows UWP, Win32 API, Serial UART
- Web & Backend: Next.js (App Router), NestJS, Bun, Node.js, TypeScript, Python, PHP
- Bancos & Dados: PostgreSQL, Drizzle ORM, Star Schema, MariaDB, MySQL, SQL Server, PGlite (WASM)
- DevOps & Ferramentas: Jenkins, Docker, Linux, Git/GitLab, Axiom APL, Vitest`,
      });
    } else if (lower.includes("whoami") || lower.includes("bio") || lower.includes("educacao")) {
      newHistory.push({
        type: "output",
        text: `Luiz Henrique da Silva de Oliveira
- Bacharel em Ciência da Computação - Universidade Positivo (2021-2024), Média 8.74, 3º lugar Maratona
- CS50x Introduction to Computer Science - Harvard University
- EF SET English Certificate C1 Advanced
- Contato: luizdasilvaoliveira7@gmail.com | (41) 99895-7337`,
      });
    } else if (lower.includes("cv") || lower.includes("download")) {
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
      } catch {}
      newHistory.push({
        type: "output",
        text: `[DOWNLOAD] Baixando Cv_Luiz_Henrique_da_Silva_de_Oliveira.pdf...
Link direto: /cv.pdf`,
      });
      if (typeof window !== "undefined") {
        window.open("/cv.pdf", "_blank");
      }
    } else if (lower === "help") {
      newHistory.push({
        type: "system",
        text: `Comandos suportados:
- vision: Inspeciona projeto Positivo Vision R15M (C#/C++/UWP)
- bi: Exibe arquitetura dos dashboards de BI (Star Schema e Server Actions)
- backend: Detalha microsserviços, monolito e suíte de testes PGlite
- skills: Lista linguagens e frameworks dominados
- whoami: Informações acadêmicas e credenciais
- cv: Faz download do currículo em PDF
- clear: Limpa o histórico do terminal`,
      });
    } else {
      newHistory.push({
        type: "error",
        text: `Comando '${clean}' não reconhecido. Digite 'help' para comandos válidos.`,
      });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <section id="terminal" className="py-20 bg-[#050508] border-b border-white/10 relative font-mono text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-8">
          <div className="text-xs font-bold tracking-widest text-brand-lime uppercase">
            [TERMINAL INTERATIVO] // INSPEÇÃO DE PROJETOS E STACK
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            CONSOLE DE COMANDOS TÉCNICOS
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Console funcional para consultar especificações do Positivo Vision R15M, dashboards de BI, backend e credenciais.
          </p>
        </div>

        {/* Shortcuts */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
          <span className="text-slate-500 mr-1">[ATALHOS]:</span>
          <button
            onClick={() => executeCmd("vision")}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-brand-lime text-brand-lime"
          >
            $ vision
          </button>
          <button
            onClick={() => executeCmd("bi")}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-brand-cyan text-brand-cyan"
          >
            $ bi
          </button>
          <button
            onClick={() => executeCmd("backend")}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-white text-slate-300"
          >
            $ backend
          </button>
          <button
            onClick={() => executeCmd("skills")}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-white text-slate-300"
          >
            $ skills
          </button>
          <button
            onClick={() => executeCmd("whoami")}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 hover:border-white text-slate-300"
          >
            $ whoami
          </button>
          <button
            onClick={() => executeCmd("cv")}
            className="px-2.5 py-1 rounded bg-brand-lime text-black font-bold"
          >
            $ cv
          </button>
          <button
            onClick={() => executeCmd("clear")}
            className="px-2.5 py-1 rounded bg-surface border border-white/10 text-slate-500 hover:text-slate-300"
          >
            $ clear
          </button>
        </div>

        {/* Window */}
        <div className="rounded-xl terminal-window overflow-hidden border border-white/15 shadow-2xl">
          <div className="bg-[#0e1017] px-4 py-2 flex items-center justify-between border-b border-white/10 text-xs text-slate-400">
            <div>
              <span className="text-brand-lime font-bold">[SHELL]</span>
              <span className="ml-2">luiz-henrique@dev-station:~</span>
            </div>
            <span className="text-[11px] text-slate-500">Node / Web Terminal</span>
          </div>

          <div className="p-4 sm:p-6 text-xs sm:text-[13px] leading-relaxed max-h-[380px] overflow-y-auto space-y-3 bg-[#08090f]">
            {history.map((h, i) => (
              <div key={i} className="space-y-1">
                {h.type === "input" && (
                  <div className="flex items-center gap-2 text-brand-lime">
                    <span className="text-slate-500">guest@portfolio:~$</span>
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

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              executeCmd(inputVal);
            }}
            className="bg-[#0b0d14] px-4 py-2.5 border-t border-white/10 flex items-center gap-2 text-xs sm:text-sm"
          >
            <span className="text-brand-lime font-bold shrink-0">guest@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Digite: vision, bi, backend, skills, whoami, cv..."
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
