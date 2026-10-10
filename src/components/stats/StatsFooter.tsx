"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { STATS_DATA } from "../../data/translations";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function StatsFooter() {
  const { language } = useLanguage();
  const [counts, setCounts] = useState<number[]>(STATS_DATA.map(() => 0));
  const hasAnimated = useRef<boolean>(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    STATS_DATA.forEach((stat, index) => {
      const duration = 1500 + index * 80;
      const startOffset = 480 + index * 90;

      setTimeout(() => {
        let startTime: number | null = null;

        function step(timestamp: number) {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentVal = stat.target * easeOutCubic(progress);

          setCounts((prev) => {
            const next = [...prev];
            next[index] = progress >= 1 ? stat.target : currentVal;
            return next;
          });

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        }

        requestAnimationFrame(step);
      }, startOffset);
    });
  }, []);

  const formatDisplay = (val: number, decimals: number, suffix: string) => {
    if (decimals === 0) {
      return Math.round(val) + suffix;
    }
    return val.toFixed(decimals) + suffix;
  };

  return (
    <footer
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-4 w-full max-w-[920px] gap-4 sm:gap-8 shrink-0 z-10 px-4"
      aria-label="Métricas de Desempeño y Rendimiento"
    >
      {STATS_DATA.map((stat, idx) => {
        const animDelay = `${0.5 + idx * 0.08}s`;
        return (
          <div
            key={idx}
            className="flex flex-col items-center text-center anim-item"
            style={{ animationDelay: animDelay }}
          >
            <span className="font-display text-white text-[22px] sm:text-[30px] leading-none mb-1.5">
              {stat.icon}
            </span>
            <span className="text-white text-[20px] sm:text-[26px] font-semibold tracking-tight tabular-nums leading-tight">
              {formatDisplay(counts[idx], stat.decimals, stat.suffix)}
            </span>
            <span className="text-[#8e8e8e] text-[11px] sm:text-[12.5px] font-medium mt-1">
              {stat.label[language]}
            </span>
          </div>
        );
      })}
    </footer>
  );
}
