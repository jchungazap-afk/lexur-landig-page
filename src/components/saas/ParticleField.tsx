"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Estado que el motor de scroll comparte con el campo de partículas.
 * Se escribe por referencia (sin re-render de React).
 */
export interface FieldState {
  /** Progreso global en "pantallas" (el mismo `u` del motor) */
  u: number;
  /** 0 = color del SaaS activo · 1 = mezcla de todos los colores (presentación) */
  mix: number;
  /** Índice del SaaS activo */
  active: number;
}

interface Props {
  state: RefObject<FieldState>;
  /** Colores de acento (hex) de cada SaaS, en orden */
  colors: string[];
}

type RGB = [number, number, number];
const hexToRgb = (hex: string): RGB => {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

interface P {
  x: number;
  y: number;
  z: number; // profundidad 0.25–1 (tamaño, velocidad y brillo)
  vx: number;
  vy: number;
  dx: number; // desplazamiento por el cursor (se amortigua)
  dy: number;
  c: number; // índice de color propio (para la presentación)
  tw: number; // fase del parpadeo
}

/**
 * Campo de "datos": partículas con profundidad que suben lentamente, se conectan
 * en red cuando están cerca, se estiran en estelas con la velocidad del scroll,
 * se apartan del cursor y toman el color del SaaS activo.
 */
export default function ParticleField({ state, colors }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    const palette = colors.map(hexToRgb);
    const tint: RGB = [...palette[0]];

    let w = 0;
    let h = 0;
    let dpr = 1;
    let parts: P[] = [];
    let raf = 0;
    let running = false;
    let lastU = state.current?.u ?? 0;
    let vel = 0; // velocidad de scroll suavizada (pantallas / frame)
    let isMobile = false;
    const mouse = { x: -9999, y: -9999, on: false };

    const seed = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.round(rect.width * dpr));
      h = Math.max(1, Math.round(rect.height * dpr));
      canvas.width = w;
      canvas.height = h;
      const area = rect.width * rect.height;
      isMobile = rect.width < 768;
      const count = isMobile ? 24 : Math.round(Math.min(170, area / 8000));
      parts = Array.from({ length: count }, () => {
        const z = 0.25 + Math.random() * 0.75;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          vx: (Math.random() - 0.5) * 0.12 * dpr,
          vy: -(0.06 + Math.random() * 0.18) * z * dpr,
          dx: 0,
          dy: 0,
          c: Math.floor(Math.random() * palette.length),
          tw: Math.random() * Math.PI * 2,
        };
      });
    };

    const frame = () => {
      const s = state.current;
      const u = s?.u ?? 0;
      const mix = s?.mix ?? 0;
      const target = palette[s?.active ?? 0] ?? palette[0];

      // velocidad de scroll (con suavizado) → deriva y estelas
      const du = u - lastU;
      lastU = u;
      vel += (du - vel) * 0.18;
      const scrollPx = vel * h * 0.55;

      // el tinte global persigue el color del SaaS activo (crossfade suave)
      for (let k = 0; k < 3; k++) tint[k] += (target[k] - tint[k]) * 0.05;

      ctx.clearRect(0, 0, w, h);
      // Oscuro: luz aditiva. Claro: tinta normal (la luz aditiva desaparece sobre blanco)
      const light = document.documentElement.dataset.theme === "light";
      ctx.globalCompositeOperation = light ? "source-over" : "lighter";
      const k = light ? 0.75 : 1;

      const linkDist = 120 * dpr;
      const linkDist2 = linkDist * linkDist;
      const repel = 140 * dpr;
      const t = performance.now() * 0.001;

      // mover
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy - scrollPx * p.z;
        if (mouse.on) {
          const mx = p.x + p.dx - mouse.x;
          const my = p.y + p.dy - mouse.y;
          const d2 = mx * mx + my * my;
          if (d2 < repel * repel && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const f = (1 - d / repel) * 2.2 * p.z * dpr;
            p.dx += (mx / d) * f;
            p.dy += (my / d) * f;
          }
        }
        p.dx *= 0.92;
        p.dy *= 0.92;
        // envolver bordes
        if (p.y < -20) p.y += h + 40;
        else if (p.y > h + 20) p.y -= h + 40;
        if (p.x < -20) p.x += w + 40;
        else if (p.x > w + 20) p.x -= w + 40;
      }

      const colorOf = (p: P, a: number) => {
        const own = palette[p.c];
        const r = own[0] * mix + tint[0] * (1 - mix);
        const g = own[1] * mix + tint[1] * (1 - mix);
        const b = own[2] * mix + tint[2] * (1 - mix);
        return `rgba(${r | 0},${g | 0},${b | 0},${a * k})`;
      };

      // red: solo la capa cercana para no saturar
      if (!isMobile) {
      ctx.lineWidth = 0.6 * dpr;
      for (let i = 0; i < parts.length; i++) {
        const a = parts[i];
        if (a.z < 0.6) continue;
        const ax = a.x + a.dx;
        const ay = a.y + a.dy;
        for (let j = i + 1; j < parts.length; j++) {
          const b = parts[j];
          if (b.z < 0.6) continue;
          const dx = ax - (b.x + b.dx);
          const dy = ay - (b.y + b.dy);
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDist2) {
            ctx.strokeStyle = colorOf(a, (1 - d2 / linkDist2) * 0.16);
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(b.x + b.dx, b.y + b.dy);
            ctx.stroke();
          }
        }
      }

      // puntos + estelas
      }
      const streak = Math.min(Math.abs(scrollPx) * 6, 90 * dpr);
      for (const p of parts) {
        const x = p.x + p.dx;
        const y = p.y + p.dy;
        const twinkle = 0.75 + 0.25 * Math.sin(t * 1.6 + p.tw);
        const alpha = (0.22 + p.z * 0.65) * twinkle;
        const r = (0.5 + p.z * 1.5) * dpr;
        if (streak > 2 * dpr) {
          ctx.strokeStyle = colorOf(p, alpha * 0.55);
          ctx.lineWidth = r * 1.1;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + Math.sign(scrollPx) * streak * p.z);
          ctx.stroke();
        }
        ctx.fillStyle = colorOf(p, alpha);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
        // halo suave en las partículas más cercanas
        if (p.z > 0.85) {
          ctx.fillStyle = colorOf(p, alpha * 0.12);
          ctx.beginPath();
          ctx.arc(x, y, r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      lastU = state.current?.u ?? 0;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    seed();
    const ro = new ResizeObserver(seed);
    ro.observe(canvas);

    // Solo anima cuando la sección está en pantalla y la pestaña visible
    let inView = false;
    const sync = () => (inView && !document.hidden ? start() : stop());
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      sync();
    });
    io.observe(canvas);
    document.addEventListener("visibilitychange", sync);

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * dpr;
      mouse.y = (e.clientY - rect.top) * dpr;
      mouse.on = true;
    };
    const onLeave = () => (mouse.on = false);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [state, colors]);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" />;
}
