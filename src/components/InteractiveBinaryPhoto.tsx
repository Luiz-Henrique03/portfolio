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
      {/* Main Image Container with Canvas Overlay */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative w-full h-[460px] sm:h-[540px] md:h-[600px] rounded-2xl overflow-hidden bg-black border border-white/15 hover:border-brand-lime/40 cursor-crosshair shadow-2xl transition-all duration-300"
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

        {/* CRT Horizontal Scanlines Overlay */}
        <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-40 z-10" />

        {/* Fluid Binary & Hex Particles Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
        />

        {/* Bottom Status bar inside the photo */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 z-30 font-mono text-left">
          <div className="flex items-center justify-between text-xs text-brand-lime font-bold">
            <span>LUIZ HENRIQUE</span>
            <span className="text-brand-cyan tracking-wider">{stats.bytes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
