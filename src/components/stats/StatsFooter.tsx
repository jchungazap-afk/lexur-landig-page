"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { STATS_DATA } from "../../data/translations";
import {
  IconStack2,
  IconBlocks,
  IconActivityHeartbeat,
  IconHeadset,
} from "@tabler/icons-react";

const STAT_ICONS = [
  IconStack2,
  IconBlocks,
  IconActivityHeartbeat,
  IconHeadset,
];

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
      className="grid grid-cols-2 md:grid-cols-4 w-full max-w-[960px] gap-4 sm:gap-6 shrink-0 z-10 px-4"
      aria-label="Métricas de Desempeño y Rendimiento"
    >
      {STATS_DATA.map((stat, idx) => {
        const animDelay = `${0.3 + idx * 0.08}s`;
        const IconComp = STAT_ICONS[idx % STAT_ICONS.length];
        return (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-4 rounded-2xl border border-white/10 bg-white/[0.02] anim-item"
            style={{ animationDelay: animDelay }}
          >
            <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 mb-2.5">
              <IconComp className="size-4" stroke={1.75} />
            </span>
            <span className="font-heading text-white text-[22px] sm:text-[28px] font-semibold tracking-tight tabular-nums leading-tight">
              {formatDisplay(counts[idx], stat.decimals, stat.suffix)}
            </span>
            <span className="text-zinc-400 text-[11.5px] sm:text-[12.5px] font-medium mt-1">
              {stat.label[language]}
            </span>
          </div>
        );
      })}
    </footer>
  );
}
