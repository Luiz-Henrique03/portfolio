"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export interface MinitelaScreen {
  id: string;
  short: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  technicalHighlights: string[];
  hardwareSignal: string;
  color: "lime" | "cyan" | "amber";
}

const SCREENS: MinitelaScreen[] = [
  {
    id: "whatsapp",
    short: "01. WhatsApp",
    title: "WhatsApp: Notificações Diretamente na Minitela",
    badge: "NOTIFICAÇÕES EM TEMPO REAL",
    image: "/minitela/whatsapp.png",
    description:
      "Envia notificações de mensagens instantâneas recebidas diretamente na minitela integrada, permitindo visualizar remetente, horário e o texto da mensagem sem interromper o trabalho na tela principal do notebook.",
    technicalHighlights: [
      "Serviço em segundo plano em C# (.NET/UWP) capturando notificações de sistema.",
      "Serialização de dados em pacotes binários compactos para transmissão sem atraso.",
      "Renderização vetorial com contraste otimizado para o display LCD secundário.",
    ],
    hardwareSignal: "PACKET_RX: NOTIF_WHATSAPP [BAUD 115200] -> DISPLAY_FLUSH",
    color: "lime",
  },
  {
    id: "notas",
    short: "02. Notas",
    title: "Notas: Post-it Digital para Anotações e Lembretes",
    badge: "POST-IT DIGITAL NO HARDWARE",
    image: "/minitela/notas.png",
    description:
      "Post-it digital permanente para anotações rápidas e lembretes diários. Permanece exibido no hardware da carcaça para consulta visual imediata a qualquer momento.",
    technicalHighlights: [
      "Persistência em banco de dados relacional local para armazenamento do estado das notas.",
      "Sincronização bidirecional entre o aplicativo desktop UWP e a memória da tela.",
      "Formatação de texto com ajuste automático de quebra de linha para a resolução da minitela.",
    ],
    hardwareSignal: "STORAGE_COMMIT: LOCAL_SQLITE -> BUFFER_UPDATE [DIRTY_BIT=0]",
    color: "amber",
  },
  {
    id: "monitor",
    short: "03. Monitor",
    title: "Monitor: Telemetria e Informações do Computador",
    badge: "TELEMETRIA DE HARDWARE WIN32",
    image: "/minitela/monitor.png",
    description:
      "Painel de telemetria em tempo real que exibe a porcentagem e saúde da bateria, o nome e status da rede Wi-Fi conectada e periféricos Bluetooth ativos.",
    technicalHighlights: [
      "Chamadas nativas Win32 API via P/Invoke (GetSystemPowerStatus em kernel32.dll).",
      "Leitura de adaptadores WLAN e Bluetooth sem consumir ciclos de GPU.",
      "Atualização periódica inteligente que reduz a frequência de polling quando em bateria.",
    ],
    hardwareSignal: "WIN32_CALL: GetSystemPowerStatus(sps) [BATTERY: 85% | AC_LINE=0]",
    color: "cyan",
  },
  {
    id: "gifs",
    short: "04. GIFs",
    title: "GIFs: Reprodução de Animações Pré-Definidas",
    badge: "STREAMING DE FRAMES ANIMADOS",
    image: "/minitela/gifs.png",
    description:
      "Permite reproduzir GIFs e animações pré-definidas na minitela com taxa de quadros (FPS) controlada e otimizada para manter o consumo de energia no mínimo.",
    technicalHighlights: [
      "Decomposição de arquivos .GIF frame a frame em arrays de bytes de pixels.",
      "Despacho contínuo via barramento serial respeitando a taxa de atualização do microcontrolador.",
      "Algoritmo de temporização para eliminar tearing e oscilações visuais na tela.",
    ],
    hardwareSignal: "STREAM_TX: 24FPS_FRAME_BUFFER -> SERIAL_STREAM [FLUSH_OK]",
    color: "lime",
  },
  {
    id: "imagens",
    short: "05. Imagens",
    title: "Imagens: Inserção de Foto à Escolha do Usuário",
    badge: "PERSONALIZAÇÃO GRÁFICA DO USUÁRIO",
    image: "/minitela/imagens.png",
    description:
      "Permite ao usuário inserir qualquer imagem de sua escolha para aparecer na minitela, personalizando a estética do notebook com fotos pessoais, mascotes ou artes personalizadas.",
    technicalHighlights: [
      "Pipeline de redimensionamento e recorte proporcional automático para resolução nativa.",
      "Conversão de espaço de cores RGB para o formato bitmap aceito pelo controlador do display.",
      "Cache persistente na memória flash para exibição instantânea mesmo durante o boot.",
    ],
    hardwareSignal: "BITMAP_ENCODER: USER_IMG_RGB888 -> DISPLAY_NATIVE_RAW",
    color: "cyan",
  },
  {
    id: "clima",
    short: "06. Clima",
    title: "Clima: Previsão Meteorológica Dinâmica",
    badge: "INTEGRAÇÃO METEOROLÓGICA",
    image: "/minitela/clima.png",
    description:
      "Painel climático sincronizado via API meteorológica com temperatura atual, mínima, máxima e projeção para os próximos dias da semana com ícones de clima dinâmicos.",
    technicalHighlights: [
      "Consumo assíncrono de API externa com cache local de 30 minutos para poupar dados.",
      "Mapeamento dinâmico de ícones meteorológicos em alta visibilidade.",
      "Atualização em tempo real sem impacto no desempenho de jogos ou aplicações pesadas.",
    ],
    hardwareSignal: "API_SYNC: WEATHER_FORECAST -> PARSE_PAYLOAD -> DISPLAY_RENDER",
    color: "cyan",
  },
];

export default function MinitelaStickyShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPercent(Math.min(100, Math.max(0, Math.round(latest * 100))));
    // Map latest (0 to 1) into an integer from 0 to SCREENS.length - 1
    const idx = Math.min(
      SCREENS.length - 1,
      Math.max(0, Math.floor(latest * SCREENS.length))
    );
    setActiveIndex(idx);
  });

  const current = SCREENS[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[380vh] w-full"
    >
      {/* Sticky viewport frame that pins and stays static while scrolling */}
      <div className="sticky top-20 sm:top-24 h-[calc(100vh-5.5rem)] sm:h-[calc(100vh-6.5rem)] flex flex-col justify-between py-2 sm:py-4 z-30 font-mono text-left">
        
        {/* Top Header Card */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#090b14]/95 border border-white/15 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
            
            {/* Header Telemetry Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                <span className="font-bold text-brand-lime uppercase tracking-wider text-[11px]">
                  MINITELA VISION R15M // REPRODUÇÃO EM HARDWARE
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-400">
                <span>PROGRESSO: <strong className="text-white">{scrollPercent}%</strong></span>
                <span>•</span>
                <span className="text-brand-cyan font-bold">
                  TELA {activeIndex + 1} DE {SCREENS.length}
                </span>
              </div>
            </div>

            {/* Screen Selector Tabs (Interactive Click + Scroll-Driven) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {SCREENS.map((screen, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={screen.id}
                    onClick={() => {
                      setActiveIndex(idx);
                      // Scroll to roughly that position if user clicks
                      if (containerRef.current) {
                        const top = containerRef.current.offsetTop;
                        const height = containerRef.current.offsetHeight;
                        const targetY = top + (idx / SCREENS.length) * height + 10;
                        window.scrollTo({ top: targetY, behavior: "smooth" });
                      }
                    }}
                    className={`btn-sheen px-3 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all duration-200 border flex items-center gap-1.5 hover:-translate-y-0.5 active:scale-95 ${
                      isActive
                        ? "bg-brand-lime text-black border-brand-lime shadow-[0_0_15px_rgba(204,255,0,0.35)]"
                        : "bg-surface border-white/10 text-slate-400 hover:text-white hover:border-brand-lime/40"
                    }`}
                  >
                    <span>{screen.short}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Pinned Center: Minitela Device Chassis + Interactive Screen Breakdown */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Col (5 cols): Authentic Hardware Minitela Mockup Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-[#1b1e2b] via-[#10121a] to-[#0a0c12] border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] box-phosphor-lime">
                
                {/* Physical Chassis Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[10px] text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan/80" />
                    <span>POSITIVO VISION R15M</span>
                  </div>
                  <span className="text-brand-lime font-bold">SECONDARY LCD</span>
                </div>

                {/* Inner Screen Bezel */}
                <div className="relative aspect-square w-full rounded-2xl bg-black border-4 border-[#252a3a] shadow-inner overflow-hidden flex items-center justify-center group">
                  
                  {/* CRT Scanline Overlay inside the LCD */}
                  <div className="absolute inset-0 crt-scanlines opacity-30 pointer-events-none z-10" />

                  {/* Cross-fading Active Screen Image */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current.id}
                      src={current.image}
                      alt={current.title}
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover object-center filter contrast-115"
                    />
                  </AnimatePresence>

                  {/* Gloss reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-20" />
                </div>

                {/* Chassis Footer Telemetry */}
                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>RES: 144×144 RAW</span>
                  <span className="text-brand-cyan tracking-wider">UART ONLINE</span>
                </div>
              </div>
            </div>

            {/* Right Col (7 cols): Animated Technical Breakdown */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl bg-[#090b14]/95 border-2 border-brand-lime/30 p-6 sm:p-7 shadow-2xl relative space-y-4"
                >
                  {/* Badge & Telemetry Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10 text-xs">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-brand-lime/10 text-brand-lime border border-brand-lime/30 uppercase">
                      {current.badge}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      MODO DE TELA {activeIndex + 1} // {SCREENS.length}
                    </span>
                  </div>

                  {/* Screen Title */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase tracking-tight phosphor-lime">
                    {current.title}
                  </h3>

                  {/* Screen Explanation */}
                  <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
                    {current.description}
                  </p>

                  {/* Technical Highlights / Engineering Details */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      // IMPLEMENTAÇÃO DE ENGENHARIA (C# / C++ / UWP / WIN32)
                    </div>
                    <div className="space-y-2">
                      {current.technicalHighlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs text-slate-300 font-sans flex items-start gap-2.5"
                        >
                          <span className="font-mono text-brand-lime font-bold shrink-0">[OK]</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hardware Communication Stream Bar */}
                  <div className="p-3 rounded-lg bg-black/60 border border-brand-cyan/25 flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-2 truncate text-slate-300">
                      <span className="text-brand-cyan font-bold">[SINAL]:</span>
                      <span className="truncate text-slate-400">{current.hardwareSignal}</span>
                    </div>
                    <span className="text-brand-lime font-bold shrink-0 ml-2">200 OK</span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Bottom Pinned Footer: Interactive Scroll Progress Prompt */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-3 rounded-xl bg-black/80 border border-white/10 flex flex-wrap items-center justify-between text-xs gap-3">
            <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
              <span className="text-brand-lime animate-bounce">▼</span>
              <span>ROLE A PÁGINA PARA AVANÇAR ENTRE AS TELAS DA MINITELA (1 → {SCREENS.length})</span>
            </div>
            {/* Visual Progress Bar */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-full sm:w-48 h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-cyan to-brand-lime transition-all duration-150"
                  style={{ width: `${Math.max(5, scrollPercent)}%` }}
                />
              </div>
              <span className="text-[11px] font-mono text-slate-400 shrink-0">
                {scrollPercent}%
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
