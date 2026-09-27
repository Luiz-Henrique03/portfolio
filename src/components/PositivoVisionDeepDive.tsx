"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import MinitelaStickyShowcase from "./MinitelaStickyShowcase";
import { useLanguage } from "@/context/LanguageContext";

export default function PositivoVisionDeepDive() {
  const { t, isPt } = useLanguage();
  const [activeLayer, setActiveLayer] = useState<"hardware" | "firmware" | "store">("hardware");

  const layers = {
    hardware: {
      title: isPt
        ? "CAMADA DE BAIXO NÍVEL // DRIVER & BARRAMENTO SERIAL"
        : "LOW-LEVEL LAYER // DRIVER & SERIAL BUS",
      desc: isPt
        ? "Comunicação direta com o microcontrolador proprietário embutido no chassi do Positivo Vision R15M."
        : "Direct communication with the proprietary microcontroller embedded in the Positivo Vision R15M laptop chassis.",
      specs: [
        {
          label: isPt ? "Linguagens Utilizadas" : "Languages Used",
          val: "C++ / C# (.NET) / P/Invoke Win32",
        },
        {
          label: isPt ? "Protocolo de Barramento" : "Bus Protocol",
          val: isPt ? "Serial RS-232 / UART sobre USB HID Controller" : "Serial RS-232 / UART over USB HID Controller",
        },
        {
          label: isPt ? "Mapeamento de I/O" : "I/O Mapping",
          val: isPt ? "Buffers binários para comandos de display e taxa de clock" : "Binary buffers for display commands and clock rate",
        },
        {
          label: isPt ? "Coleta de Métricas" : "Metrics Collection",
          val: isPt ? "Win32 API (kernel32 / advapi32) para telemetria de CPU e bateria" : "Win32 API (kernel32 / advapi32) for CPU and battery telemetry",
        },
      ],
      code: `// Chamada P/Invoke para leitura de status de bateria e hardware no Windows
[DllImport("kernel32.dll", SetLastError = true)]
public static extern bool GetSystemPowerStatus(out SYSTEM_POWER_STATUS sps);

public void EnviarPacoteParaMinitela(byte[] frameBuffer) {
    if (_serialPort != null && _serialPort.IsOpen) {
        // Envio direto do payload binário de pixels e texto para o display LCD
        _serialPort.Write(frameBuffer, 0, frameBuffer.Length);
        _serialPort.BaseStream.Flush();
    }
}`,
    },
    firmware: {
      title: isPt
        ? "CAMADA DE SOFTWARE // APLICAÇÃO UWP & SERVIÇOS"
        : "SOFTWARE LAYER // UWP APPLICATION & SERVICES",
      desc: isPt
        ? "Aplicação responsiva integrada ao ecossistema Windows para gerenciamento das funções da minitela."
        : "Responsive application integrated into the Windows ecosystem for secondary display function management.",
      specs: [
        {
          label: isPt ? "Arquitetura" : "Architecture",
          val: "Windows Universal Windows Platform (UWP) + Background Task",
        },
        {
          label: isPt ? "Consumo de Bateria" : "Battery Consumption",
          val: isPt ? "Otimizado para suspensão e ciclo de vida Connected Standby" : "Optimized for sleep states and Connected Standby lifecycle",
        },
        {
          label: isPt ? "Banco de Dados Local" : "Local Database",
          val: isPt ? "MySQL / MariaDB local para histórico de clima e notificações" : "Local MySQL / MariaDB for weather cache and notification history",
        },
        {
          label: isPt ? "Integrações" : "Integrations",
          val: isPt ? "Listener de notificações WhatsApp e consumo de APIs REST meteorológicas" : "WhatsApp notification listener and weather REST API consumption",
        },
      ],
      code: `// Despacho assíncrono de notificações de mensageria para a tela secundária
public async Task ProcessarNotificacaoWhatsApp(string remetente, string mensagemResumida) {
    var payload = FrameBuilder.CriarFrameTexto(
        icone: IconeTipo.Mensageria,
        titulo: remetente,
        conteudo: mensagemResumida,
        duracaoMs: 4000
    );
    await _minitelaDriver.DespacharBufferAsync(payload);
}`,
    },
    store: {
      title: isPt
        ? "CERTIFICAÇÃO OEM // MICROSOFT STORE & RELEASES"
        : "OEM CERTIFICATION // MICROSOFT STORE & RELEASES",
      desc: isPt
        ? "Ciclo completo de conformidade e empacotamento para distribuição em computadores de fábrica."
        : "Full compliance cycle and packaging for factory computer OEM pre-installation.",
      specs: [
        {
          label: isPt ? "Empacotamento" : "Packaging",
          val: isPt ? "MSIX / AppxBundle com manifesto estrito de permissões" : "MSIX / AppxBundle with strict permission manifest",
        },
        {
          label: isPt ? "Assinatura de Código" : "Code Signing",
          val: isPt ? "Certificados corporativos e auditoria de binários" : "Corporate certificates and binary auditing",
        },
        {
          label: isPt ? "Controle de Versão" : "Version Control",
          val: isPt ? "GitLab com branching strategy para releases de imagem OEM" : "GitLab branching strategy for factory OEM image releases",
        },
        {
          label: isPt ? "Homologação" : "Store Certification",
          val: isPt ? "Aprovado sem ressalvas na Microsoft Store para a linha Positivo Vision" : "Approved without remarks on Microsoft Store for Positivo Vision line",
        },
      ],
      code: `<!-- Declaração estrita de capacidades no Package.appxmanifest para OEM -->
<Capabilities>
  <Capability Name="internetClient" />
  <DeviceCapability Name="serialcommunication">
    <Device Id="any">
      <Function Type="name:serialPort" />
    </Device>
  </DeviceCapability>
</Capabilities>`,
    },
  };

  return (
    <section id="vision-r15m" className="py-24 bg-[#08090d] border-b border-white/10 relative text-left">
      {/* Subtle CRT scanline overlay */}
      <div className="absolute inset-0 crt-scanlines opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-12"
        >
          <div className="text-xs font-mono font-bold tracking-widest text-brand-lime uppercase flex items-center gap-2">
            <span>{t.vision.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase tracking-tight">
            {t.vision.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-mono">
            {t.vision.subtitle}
          </p>
        </motion.div>

        {/* Product Showcase + Architecture Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Product Image and Hardware Telemetry specs (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-2xl bg-black border border-white/15 p-4 overflow-hidden relative group box-phosphor-lime">
              {/* Monospace frame tags */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono text-slate-400">
                <span>HARDWARE: POSITIVO VISION R15M</span>
                <span className="text-brand-lime font-bold">{isPt ? "PRODUTO OFICIAL" : "OFFICIAL PRODUCT"}</span>
              </div>

              {/* Real Product Image */}
              <div className="relative w-full h-[260px] sm:h-[320px] rounded-xl overflow-hidden my-3 bg-[#0d0f14] flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/vision-r15m.webp"
                  alt="Notebook Positivo Vision R15M com Minitela"
                  className="w-full h-full object-contain p-2 filter contrast-105"
                />
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{isPt ? "DEPLOYMENT: IMAGEM DE FÁBRICA OEM" : "DEPLOYMENT: OEM FACTORY IMAGE"}</span>
                <span className="text-brand-cyan">MICROSOFT STORE CERTIFIED</span>
              </div>
            </div>

            {/* Hardware Telemetry Spec Sheet */}
            <div className="p-4 rounded-xl bg-surface border border-white/10 space-y-2 font-mono text-xs">
              <div className="text-brand-lime font-bold uppercase text-[11px] pb-1 border-b border-white/5">
                {isPt ? "// ESPECIFICAÇÕES DO SUBSISTEMA" : "// SUBSYSTEM SPECIFICATIONS"}
              </div>
              <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                <span className="text-slate-500">{isPt ? "Componente:" : "Component:"}</span>
                <span className="font-bold text-white">{isPt ? "Display Secundário LCD Minitela" : "Secondary LCD Display (Sub-screen)"}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                <span className="text-slate-500">{isPt ? "Comunicação:" : "Communication:"}</span>
                <span className="font-bold text-white">{isPt ? "Barramento Serial via Microcontrolador" : "Serial Bus via Microcontroller"}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                <span className="text-slate-500">{isPt ? "Stack Principal:" : "Core Stack:"}</span>
                <span className="font-bold text-white">C#, .NET, C++, Windows UWP</span>
              </div>
              <div className="flex justify-between py-1 text-slate-300">
                <span className="text-slate-500">{isPt ? "Distribuição:" : "Distribution:"}</span>
                <span className="font-bold text-white">{isPt ? "Publicado na Microsoft Store" : "Published on Microsoft Store"}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Layer Switcher & Evidence (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Layer Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveLayer("hardware")}
                className={`btn-sheen py-3 px-3 rounded-xl font-mono text-xs font-bold border transition-all duration-200 text-center hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                  activeLayer === "hardware"
                    ? "bg-brand-lime text-black border-brand-lime shadow-[0_0_20px_rgba(204,255,0,0.35)]"
                    : "bg-surface border-white/10 text-slate-400 hover:text-white hover:border-brand-lime/50 hover:shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                }`}
              >
                {isPt ? "[01] BAIXO NÍVEL" : "[01] LOW-LEVEL"}
              </button>
              <button
                onClick={() => setActiveLayer("firmware")}
                className={`btn-sheen py-3 px-3 rounded-xl font-mono text-xs font-bold border transition-all duration-200 text-center hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                  activeLayer === "firmware"
                    ? "bg-brand-lime text-black border-brand-lime shadow-[0_0_20px_rgba(204,255,0,0.35)]"
                    : "bg-surface border-white/10 text-slate-400 hover:text-white hover:border-brand-lime/50 hover:shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                }`}
              >
                {isPt ? "[02] APLICAÇÃO UWP" : "[02] UWP APP"}
              </button>
              <button
                onClick={() => setActiveLayer("store")}
                className={`btn-sheen py-3 px-3 rounded-xl font-mono text-xs font-bold border transition-all duration-200 text-center hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                  activeLayer === "store"
                    ? "bg-brand-lime text-black border-brand-lime shadow-[0_0_20px_rgba(204,255,0,0.35)]"
                    : "bg-surface border-white/10 text-slate-400 hover:text-white hover:border-brand-lime/50 hover:shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                }`}
              >
                {isPt ? "[03] STORE & OEM" : "[03] STORE & OEM"}
              </button>
            </div>

            {/* Active Layer Details */}
            <div className="p-6 rounded-2xl bg-surface border border-white/15 space-y-5">
              <div>
                <span className="text-[11px] font-mono text-brand-lime font-bold uppercase">
                  {layers[activeLayer].title}
                </span>
                <p className="text-sm text-slate-300 font-mono mt-1">
                  {layers[activeLayer].desc}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {layers[activeLayer].specs.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-black/50 border border-white/5 space-y-1 font-mono">
                    <div className="text-[10px] text-slate-500 uppercase">{item.label}</div>
                    <div className="text-xs text-white font-bold">{item.val}</div>
                  </div>
                ))}
              </div>

              {/* Responsibilities list */}
              <div className="pt-3 border-t border-white/10 space-y-2 font-mono text-xs text-slate-300">
                <div className="text-white font-bold">
                  {isPt ? "Responsabilidades Concretas Exercidas no Projeto:" : "Concrete Engineering Responsibilities in Project:"}
                </div>
                <ul className="space-y-1.5 text-slate-400 list-disc list-inside">
                  {isPt ? (
                    <>
                      <li>Gerenciamento completo do repositório no GitLab e esteiras de build.</li>
                      <li>Interação de baixo nível com hardware para interpretação de comandos da minitela embarcada.</li>
                      <li>Desenvolvimento em C# para conversão de código em linguagem de máquina e consumo de APIs externas.</li>
                      <li>Utilização de bibliotecas nativas do Windows para leitura de telemetria de hardware (temperatura, clock, bateria).</li>
                      <li>Desenvolvimento do banco de dados relacional local para armazenamento de estado e lembretes.</li>
                      <li>Empacotamento e publicação oficial na Microsoft Store.</li>
                    </>
                  ) : (
                    <>
                      <li>Full Git repository and automated build pipeline management on GitLab.</li>
                      <li>Low-level hardware interaction for embedded sub-display command processing.</li>
                      <li>C# development for binary payload serialization and external API consumption.</li>
                      <li>Native Win32 APIs for hardware telemetry (CPU, battery health, Wi-Fi status).</li>
                      <li>Local relational database design for state persistence, notes, and alerts.</li>
                      <li>Official packaging, signing, and Microsoft Store OEM deployment.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Sub-tópico Showcase das Telas Desenvolvidas */}
        <div className="pt-12 sm:pt-16 border-t border-white/10 space-y-3">
          <div className="text-xs font-mono font-bold tracking-widest text-brand-lime uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            <span>{isPt ? "SUB-TÓPICO // DISPLAY SECUNDÁRIO OEM" : "SUB-TOPIC // OEM SECONDARY DISPLAY"}</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white uppercase tracking-tight">
            {isPt ? "SHOWCASE DAS TELAS DESENVOLVIDAS" : "SHOWCASE OF DEVELOPED SCREENS"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-mono leading-relaxed">
            {isPt
              ? "Modos de operação e funcionalidades programadas para a minitela do Positivo Vision R15M. Conforme você rola a página, cada tela é reproduzida com sua respectiva camada de controle e comunicação serial."
              : "Operating modes and features developed for the Positivo Vision R15M sub-display. As you scroll, each screen is showcased with its respective control layer and serial communication protocol."}
          </p>
        </div>

      </div>

      {/* Pinned Scrollytelling Showcase of Minitela Modes (Scrolls through the 6 screens) */}
      <MinitelaStickyShowcase />
    </section>
  );
}
