"use client";

import React from "react";
import { sound } from "@/utils/sound";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Flame, 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Layers, 
  Activity 
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Hero() {
  const triggerConfetti = () => {
    sound.playSuccess();
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ccff00", "#00f0ff", "#ffffff", "#ffd700"],
      });
    } catch {
      // Ignore
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-brand-cyan/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Manifesto Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-muted border border-brand-lime/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
              </span>
              <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-slate-200">
                DISPONÍVEL PARA IMPACTO • 410+ COMMITS EM PRODUÇÃO
              </span>
            </div>

            {/* Giant Title Inspired by Lando Norris & Ballon d'Or campaign */}
            <div className="space-y-1">
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-brand-lime uppercase">
                // MANIFESTO DO DESENVOLVEDOR
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-[0.92] text-white">
                NÃO É HYPE. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-emerald-300 to-brand-cyan">
                  É ENGENHARIA
                </span> <br />
                DE VERDADE.
              </h1>
            </div>

            {/* Powerful Pitch */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Eu sou <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong> — desenvolvedor e arquiteto de software. 
              Não fico preso a tutoriais de CRUD. Trabalho onde o bicho pega: de <span className="text-brand-lime font-mono text-sm">drivers C#/C++ com hardware embarcado</span> a <span className="text-brand-cyan font-mono text-sm">monolitos modulares de alta concorrência</span> com NestJS, Bun, PostgreSQL e 714 testes reais sem mocks.
            </p>

            {/* Key Proof Points Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-2.5 rounded-lg bg-surface/80 border border-white/5 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white">714 Testes Verdes</div>
                  <div className="text-slate-400 text-[11px]">PGlite WASM real</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-surface/80 border border-white/5 flex items-start gap-2">
                <Flame className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white">86 PRs na Main</div>
                  <div className="text-slate-400 text-[11px]">Trunk-based deploy</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-surface/80 border border-white/5 flex items-start gap-2 col-span-2 sm:col-span-1">
                <Cpu className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white">Harvard CS50x</div>
                  <div className="text-slate-400 text-[11px]">Ciência da Computação 8.74</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#cases"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-lime hover:bg-brand-limeHover text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl hover:glow-lime"
              >
                <span>Explorar Sistemas Entregues</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#forensics"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-muted hover:bg-surface-hover border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all"
              >
                <Terminal className="w-4 h-4 text-brand-cyan" />
                <span>Os 10 Achados Forenses</span>
              </a>

              <button
                onClick={triggerConfetti}
                onMouseEnter={() => sound.playHover()}
                className="p-3.5 rounded-xl bg-surface border border-white/10 hover:border-brand-lime/40 text-slate-300 hover:text-brand-lime transition-all"
                title="Celebrar Engenharia"
              >
                <Layers className="w-4 h-4" />
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-4 pt-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Conecte:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-brand-lime" />
                <span>github/Luiz-Henrique03</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-brand-cyan" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Telemetry HUD (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-lime/30 via-brand-cyan/20 to-emerald-500/30 blur-lg opacity-70" />

              <div className="relative rounded-2xl bg-[#0b0d13] border border-white/15 p-5 shadow-2xl overflow-hidden text-left">
                {/* HUD Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">lyx-monolith@core:sys</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-brand-lime bg-brand-lime/10 px-2 py-0.5 rounded border border-brand-lime/30">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>PROD_ACTIVE</span>
                  </div>
                </div>

                {/* Telemetry Metric Cards */}
                <div className="space-y-3 font-mono">
                  {/* Card 1: lyx-monolith summary */}
                  <div className="p-3 rounded-lg bg-surface border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">REPOSITÓRIO</span>
                      <span className="text-white font-bold">lyx-monolith (mai-set 2026)</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                      <div className="bg-[#151822] p-1.5 rounded">
                        <div className="text-sm font-black text-brand-lime">410</div>
                        <div className="text-[9px] text-slate-400">Commits</div>
                      </div>
                      <div className="bg-[#151822] p-1.5 rounded">
                        <div className="text-sm font-black text-brand-cyan">86</div>
                        <div className="text-[9px] text-slate-400">PRs Merged</div>
                      </div>
                      <div className="bg-[#151822] p-1.5 rounded">
                        <div className="text-sm font-black text-emerald-400">4</div>
                        <div className="text-[9px] text-slate-400">Módulos Zero-to-One</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Forensic Discovery */}
                  <div className="p-3 rounded-lg bg-surface border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">AUDITORIA FORENSE</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        RESOLVIDO
                      </span>
                    </div>
                    <p className="text-xs text-slate-200">
                      562 eventos órfãos apagados via assinatura temporal (30min vs 20min) e Axiom APL query.
                    </p>
                    <div className="text-[10px] text-slate-500">
                      Query: <code className="text-brand-lime">summarize count() by hostname</code>
                    </div>
                  </div>

                  {/* Card 3: Quality Gates */}
                  <div className="p-3 rounded-lg bg-surface border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">DISCIPLINA DE QUALIDADE</span>
                      <span className="text-brand-lime font-semibold">100% PASS</span>
                    </div>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div className="flex items-center justify-between">
                        <span>• PGlite Postgres WASM:</span>
                        <span className="text-white font-bold">714 Testes Verdes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• Dependency-Cruiser CI:</span>
                        <span className="text-brand-cyan">Zero Ciclos / Zero Leaks</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>• Complexidade Ciclomática:</span>
                        <span className="text-slate-300">Máx 12 Enforçada</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Positivo Embedded */}
                  <div className="p-2.5 rounded-lg bg-surface/50 border border-white/5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                      <span className="text-slate-300">Positivo Vision R15M</span>
                    </div>
                    <span className="text-[11px] text-brand-cyan font-bold">C# / C++ UWP Store</span>
                  </div>
                </div>

                {/* Footer status line */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>REGIONAL: BR-CWB (CURITIBA)</span>
                  <span className="text-emerald-400 font-bold">INTEGRITY 100%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
