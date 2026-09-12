"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PositivoVisionDeepDive() {
  const [activeLayer, setActiveLayer] = useState<"hardware" | "firmware" | "store">("hardware");

  const layers = {
    hardware: {
      title: "CAMADA DE BAIXO NÍVEL // DRIVER & BARRAMENTO SERIAL",
      desc: "Comunicação direta com o microcontrolador proprietário embutido no chassi do Positivo Vision R15M.",
      specs: [
        { label: "Linguagens Utilizadas", val: "C++ / C# (.NET) / P/Invoke Win32" },
        { label: "Protocolo de Barramento", val: "Serial RS-232 / UART sobre USB HID Controller" },
        { label: "Mapeamento de I/O", val: "Buffers binários para comandos de display e taxa de clock" },
        { label: "Coleta de Métricas", val: "Win32 API (kernel32 / advapi32) para telemetria de CPU e bateria" },
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
      title: "CAMADA DE SOFTWARE // APLICAÇÃO UWP & SERVIÇOS",
      desc: "Aplicação responsiva integrada ao ecossistema Windows para gerenciamento das funções da minitela.",
      specs: [
        { label: "Arquitetura", val: "Windows Universal Windows Platform (UWP) + Background Task" },
        { label: "Consumo de Bateria", val: "Otimizado para suspensão e ciclo de vida Connected Standby" },
        { label: "Banco de Dados Local", val: "MySQL / MariaDB local para histórico de clima e notificações" },
        { label: "Integrações", val: "Listener de notificações WhatsApp e consumo de APIs REST meteorológicas" },
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
      title: "CERTIFICAÇÃO OEM // MICROSOFT STORE & RELEASES",
      desc: "Ciclo completo de conformidade e empacotamento para distribuição em computadores de fábrica.",
      specs: [
        { label: "Empacotamento", val: "MSIX / AppxBundle com manifesto estrito de permissões" },
        { label: "Assinatura de Código", val: "Certificados corporativos e auditoria de binários" },
        { label: "Controle de Versão", val: "GitLab com branching strategy para releases de imagem OEM" },
        { label: "Homologação", val: "Aprovado sem ressalvas na Microsoft Store para a linha Positivo Vision" },
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
    <section id="vision-r15m" className="py-24 bg-[#08090d] border-b border-white/10 relative text-left overflow-hidden">
      {/* Subtle CRT scanline overlay */}
      <div className="absolute inset-0 crt-scanlines opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 mb-12"
        >
          <div className="text-xs font-mono font-bold tracking-widest text-brand-lime uppercase flex items-center gap-2">
            <span>[ENGENHARIA DE HARDWARE EMBARCADO] // CASE DE IMPACTO OEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase tracking-tight">
            POSITIVO VISION R15M: MINITELA EMBARCADA
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-mono">
            Desenvolvimento completo da camada de software e integração de baixo nível para a mini tela física integrada no chassi do notebook Positivo Vision R15M. Do barramento serial à publicação na Microsoft Store.
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
                <span className="text-brand-lime font-bold">PRODUTO OFICIAL</span>
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
                <span>DEPLOYMENT: IMAGEM DE FÁBRICA OEM</span>
                <span className="text-brand-cyan">MICROSOFT STORE CERTIFIED</span>
              </div>
            </div>

            {/* Hardware Telemetry Spec Sheet */}
            <div className="p-4 rounded-xl bg-surface border border-white/10 space-y-2 font-mono text-xs">
              <div className="text-brand-lime font-bold uppercase text-[11px] pb-1 border-b border-white/5">
                // ESPECIFICAÇÕES DO SUBSISTEMA
              </div>
              <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                <span className="text-slate-500">Componente:</span>
                <span className="font-bold text-white">Display Secundário LCD Minitela</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                <span className="text-slate-500">Comunicação:</span>
                <span className="font-bold text-white">Barramento Serial via Microcontrolador</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                <span className="text-slate-500">Stack Principal:</span>
                <span className="font-bold text-white">C#, .NET, C++, Windows UWP</span>
              </div>
              <div className="flex justify-between py-1 text-slate-300">
                <span className="text-slate-500">Distribuição:</span>
                <span className="font-bold text-white">Publicado na Microsoft Store</span>
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
                className={`py-3 px-3 rounded-xl font-mono text-xs font-bold border transition-all text-center ${
                  activeLayer === "hardware"
                    ? "bg-brand-lime text-black border-brand-lime"
                    : "bg-surface border-white/10 text-slate-400 hover:text-white"
                }`}
              >
                [01] BAIXO NÍVEL
              </button>
              <button
                onClick={() => setActiveLayer("firmware")}
                className={`py-3 px-3 rounded-xl font-mono text-xs font-bold border transition-all text-center ${
                  activeLayer === "firmware"
                    ? "bg-brand-lime text-black border-brand-lime"
                    : "bg-surface border-white/10 text-slate-400 hover:text-white"
                }`}
              >
                [02] APLICAÇÃO UWP
              </button>
              <button
                onClick={() => setActiveLayer("store")}
                className={`py-3 px-3 rounded-xl font-mono text-xs font-bold border transition-all text-center ${
                  activeLayer === "store"
                    ? "bg-brand-lime text-black border-brand-lime"
                    : "bg-surface border-white/10 text-slate-400 hover:text-white"
                }`}
              >
                [03] STORE & OEM
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

              {/* Code Snippet */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono text-slate-500 uppercase">
                  // TRECHO DE IMPLEMENTAÇÃO TÉCNICA
                </div>
                <div className="rounded-xl bg-[#06070a] border border-white/10 p-4 font-mono text-xs text-slate-300 overflow-x-auto">
                  <pre>
                    <code>{layers[activeLayer].code}</code>
                  </pre>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="pt-3 border-t border-white/10 space-y-2 font-mono text-xs text-slate-300">
                <div className="text-white font-bold">Responsabilidades Concretas Exercidas no Projeto:</div>
                <ul className="space-y-1.5 text-slate-400 list-disc list-inside">
                  <li>Gerenciamento completo do repositório no GitLab e esteiras de build.</li>
                  <li>Interação de baixo nível com hardware para interpretação de comandos da minitela embarcada.</li>
                  <li>Desenvolvimento em C# para conversão de código em linguagem de máquina e consumo de APIs externas.</li>
                  <li>Utilização de bibliotecas nativas do Windows para leitura de telemetria de hardware (temperatura, clock, bateria).</li>
                  <li>Desenvolvimento do banco de dados relacional local para armazenamento de estado e lembretes.</li>
                  <li>Empacotamento e publicação oficial na Microsoft Store.</li>
                </ul>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
