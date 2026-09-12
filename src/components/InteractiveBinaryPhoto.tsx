"use client";

import React, { useRef, useEffect, useState } from "react";

interface BinaryParticle {
  x: number;
  y: number;
  char: string;
  speed: number;
  alpha: number;
  size: number;
}

export default function InteractiveBinaryPhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({ bytes: "0x4C55495A", stream: "01001100 01010101", baud: "115200" });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: BinaryParticle[] = [];
    const maxParticles = 140;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();
    window.addEventListener("resize", resize);

    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHovered) {
        // Spawn binary characters near mouse pointer
        if (particles.length < maxParticles) {
          for (let i = 0; i < 4; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 110;
            particles.push({
              x: mousePos.x + Math.cos(angle) * dist,
              y: mousePos.y + Math.sin(angle) * dist,
              char: Math.random() > 0.6 ? (Math.random() > 0.5 ? "1" : "0") : Math.floor(Math.random() * 16).toString(16).toUpperCase(),
              speed: 45 + Math.random() * 95,
              alpha: 0.95,
              size: 11 + Math.floor(Math.random() * 6),
            });
          }
        }
      }

      // Update & render particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y += p.speed * delta;
        p.alpha -= 0.75 * delta;

        if (Math.random() < 0.1) {
          p.char = Math.random() > 0.5 ? (p.char === "1" ? "0" : "1") : Math.floor(Math.random() * 16).toString(16).toUpperCase();
        }

        if (p.alpha <= 0 || p.y > canvas.height) {
          particles.splice(i, 1);
          continue;
        }

        ctx.font = `bold ${p.size}px ui-monospace, monospace`;
        ctx.fillStyle = `rgba(204, 255, 0, ${p.alpha})`;
        ctx.shadowColor = "#ccff00";
        ctx.shadowBlur = 6;
        ctx.fillText(p.char, p.x, p.y);
        ctx.shadowBlur = 0;
      }

      // If hovered, render retro 1980s HUD reticle with tracking crosshairs
      if (isHovered) {
        // Outer targeting circle
        ctx.strokeStyle = "rgba(204, 255, 0, 0.45)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 48, 0, Math.PI * 2);
        ctx.stroke();

        // Crosshairs
        ctx.strokeStyle = "rgba(0, 240, 255, 0.6)";
        ctx.beginPath();
        ctx.moveTo(mousePos.x - 60, mousePos.y);
        ctx.lineTo(mousePos.x + 60, mousePos.y);
        ctx.moveTo(mousePos.x, mousePos.y - 60);
        ctx.lineTo(mousePos.x, mousePos.y + 60);
        ctx.stroke();

        // Telemetry coordinate badge
        ctx.font = "10px ui-monospace, monospace";
        ctx.fillStyle = "rgba(204, 255, 0, 0.9)";
        ctx.fillText(
          `[LOC: ${Math.round(mousePos.x)},${Math.round(mousePos.y)}]`,
          mousePos.x + 14,
          mousePos.y - 14
        );
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [isHovered, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const bin1 = Math.floor(Math.random() * 256).toString(2).padStart(8, "0");
    const bin2 = Math.floor(Math.random() * 256).toString(2).padStart(8, "0");
    const hex = "0x" + Math.floor(Math.random() * 65535).toString(16).toUpperCase();
    setStats({ bytes: hex, stream: `${bin1} ${bin2}`, baud: "115200" });
  };

  return (
    <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto font-mono">
      {/* 1980s Analog CRT Outer Bezel with chassis brackets */}
      <div className="absolute -inset-3 rounded-2xl bg-[#090b12] border-2 border-white/10 shadow-[0_0_40px_rgba(204,255,0,0.1)] pointer-events-none" />

      {/* Chassis Screws / Crosshair corners */}
      <div className="absolute -top-1.5 -left-1.5 text-xs text-brand-lime font-mono z-30 font-bold select-none">[+]</div>
      <div className="absolute -top-1.5 -right-1.5 text-xs text-brand-lime font-mono z-30 font-bold select-none">[+]</div>
      <div className="absolute -bottom-1.5 -left-1.5 text-xs text-brand-lime font-mono z-30 font-bold select-none">[+]</div>
      <div className="absolute -bottom-1.5 -right-1.5 text-xs text-brand-lime font-mono z-30 font-bold select-none">[+]</div>

      {/* Top Telemetry Header Tag */}
      <div className="absolute -top-4.5 left-6 z-30 bg-[#07080d] px-3 py-0.5 text-[10px] font-mono text-brand-lime uppercase font-bold border border-brand-lime/40 rounded flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span>REC ● CH-01 // ANALOG_CRT_1984</span>
      </div>

      {/* Top-Right Baud Rate Tag */}
      <div className="absolute -top-4.5 right-6 z-30 bg-[#07080d] px-2.5 py-0.5 text-[10px] font-mono text-brand-cyan uppercase font-bold border border-brand-cyan/30 rounded hidden sm:block">
        BAUD: {stats.baud} // SYNC: OK
      </div>

      {/* Main Image Container with Canvas Overlay */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative w-full h-[460px] sm:h-[540px] md:h-[600px] rounded-xl overflow-hidden bg-black border-2 border-brand-lime/30 cursor-crosshair box-phosphor-lime transition-all duration-300"
      >
        {/* Real Profile Photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/profile.jpg"
          alt="Luiz Henrique da Silva de Oliveira"
          className={`w-full h-full object-cover object-center transition-all duration-500 filter ${
            isHovered
              ? "brightness-95 contrast-125 saturate-115 scale-[1.02]"
              : "brightness-85 contrast-115 grayscale-[15%]"
          }`}
        />

        {/* 1980s CRT Horizontal Scanlines Overlay */}
        <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-50 z-10" />

        {/* CRT Convex Vignette Overlay */}
        <div className="absolute inset-0 crt-vignette pointer-events-none z-10" />

        {/* Fluid Binary & Hex Particles Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
        />

        {/* Bottom CRT Status HUD */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/85 to-transparent p-5 z-30 font-mono text-left border-t border-brand-lime/20">
          <div className="flex items-center justify-between text-xs text-brand-lime font-bold">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
              LUIZ HENRIQUE // OPERADOR
            </span>
            <span className="text-brand-cyan tracking-wider">{stats.bytes}</span>
          </div>

          <div className="text-[11px] text-slate-300 mt-1 flex items-center justify-between font-mono">
            <span>REGISTRO: {stats.stream}</span>
            <span className="text-slate-400 text-[10px] hidden sm:inline">MOUSE HOVER: DECODIFICAR</span>
          </div>
        </div>

        {/* Corner Reticles inside frame */}
        <div className="absolute top-3 left-3 text-brand-lime/70 text-xs font-mono pointer-events-none z-20">┌</div>
        <div className="absolute top-3 right-3 text-brand-lime/70 text-xs font-mono pointer-events-none z-20">┐</div>
        <div className="absolute bottom-16 left-3 text-brand-lime/70 text-xs font-mono pointer-events-none z-20">└</div>
        <div className="absolute bottom-16 right-3 text-brand-lime/70 text-xs font-mono pointer-events-none z-20">┘</div>
      </div>

      {/* Bottom Frame Monospace Data Tag */}
      <div className="absolute -bottom-4 left-6 z-30 bg-[#07080d] px-3 py-0.5 text-[10px] font-mono text-slate-400 border border-white/10 rounded flex items-center gap-2">
        <span className="text-brand-lime font-bold">MEM: 640K OK</span>
        <span>•</span>
        <span>V-SYNC: LOCKED</span>
      </div>

      <div className="absolute -bottom-4 right-6 z-30 bg-[#07080d] px-3 py-0.5 text-[10px] font-mono text-brand-amber border border-amber-500/30 rounded text-amber-400 font-bold">
        DISPONÍVEL // REMOTO
      </div>
    </div>
  );
}
