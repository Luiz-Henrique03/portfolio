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
  const [stats, setStats] = useState({ bytes: "0x4C55495A", stream: "01001100" });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: BinaryParticle[] = [];
    const maxParticles = 90;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();
    window.addEventListener("resize", resize);

    // Continuous animation loop
    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHovered) {
        // Spawn binary digits near mouse pointer
        if (particles.length < maxParticles) {
          for (let i = 0; i < 3; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 85;
            particles.push({
              x: mousePos.x + Math.cos(angle) * dist,
              y: mousePos.y + Math.sin(angle) * dist,
              char: Math.random() > 0.5 ? "1" : "0",
              speed: 40 + Math.random() * 80,
              alpha: 0.95,
              size: 10 + Math.floor(Math.random() * 6),
            });
          }
        }
      }

      // Update & render particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y += p.speed * delta;
        p.alpha -= 0.8 * delta;

        if (Math.random() < 0.1) {
          p.char = p.char === "1" ? "0" : "1";
        }

        if (p.alpha <= 0 || p.y > canvas.height) {
          particles.splice(i, 1);
          continue;
        }

        ctx.font = `bold ${p.size}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        ctx.fillStyle = `rgba(204, 255, 0, ${p.alpha})`;
        ctx.fillText(p.char, p.x, p.y);
      }

      // If hovered, render subtle cursor tracking ring and coordinates
      if (isHovered) {
        ctx.strokeStyle = "rgba(204, 255, 0, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 45, 0, Math.PI * 2);
        ctx.stroke();

        ctx.font = "9px ui-monospace, monospace";
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fillText(
          `X:${Math.round(mousePos.x)} Y:${Math.round(mousePos.y)}`,
          mousePos.x + 12,
          mousePos.y - 12
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

    // Generate changing binary byte string on movement
    const bin = Math.floor(Math.random() * 256).toString(2).padStart(8, "0");
    const hex = "0x" + Math.floor(Math.random() * 65535).toString(16).toUpperCase();
    setStats({ bytes: hex, stream: bin });
  };

  return (
    <div className="relative group max-w-sm mx-auto">
      {/* Outer border & engineering bracket indicators */}
      <div className="absolute -inset-2 rounded-2xl bg-surface border border-white/15 pointer-events-none" />
      
      {/* Monospace frame tags */}
      <div className="absolute -top-3 left-4 z-20 bg-[#07070a] px-2 text-[10px] font-mono text-brand-lime uppercase font-bold border border-brand-lime/30 rounded">
        PROFILE_ID: LH-2026 // BIOMETRIC_CANVAS
      </div>
      
      <div className="absolute -bottom-3 right-4 z-20 bg-[#07070a] px-2 text-[10px] font-mono text-slate-400 border border-white/10 rounded">
        {stats.bytes} [{stats.stream}]
      </div>

      {/* Main Image Container with Canvas Overlay */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative w-full h-[380px] sm:h-[420px] rounded-xl overflow-hidden bg-black border border-white/20 cursor-crosshair"
      >
        {/* Real Profile Photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/profile.jpg"
          alt="Luiz Henrique da Silva de Oliveira"
          className={`w-full h-full object-cover object-center transition-all duration-500 filter ${
            isHovered
              ? "brightness-90 contrast-125 saturate-110 scale-[1.02]"
              : "brightness-85 contrast-110 grayscale-[25%]"
          }`}
        />

        {/* Scanline pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

        {/* Fluid Binary Particles Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* Status HUD in lower section */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 z-20 font-mono text-left">
          <div className="flex items-center justify-between text-[11px] text-brand-lime font-bold">
            <span>STATUS: ATIVO</span>
            <span>FLUXO BINÁRIO INTERATIVO</span>
          </div>
          <div className="text-[10px] text-slate-400 tracking-tight mt-0.5">
            Passe o cursor sobre a imagem para decodificação em tempo real
          </div>
        </div>
      </div>
    </div>
  );
}
