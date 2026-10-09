"use client";

import { useEffect } from "react";

/** Mueve el brillo especular de los botones .btn-flow siguiendo al cursor. */
export default function LiquidGlassFx() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.<HTMLElement>(".btn-flow");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    const onLeave = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.<HTMLElement>(".btn-flow");
      if (!el) return;
      el.style.setProperty("--mx", "50%");
      el.style.setProperty("--my", "0%");
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onLeave, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onLeave);
    };
  }, []);
  return null;
}
