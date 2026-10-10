"use client";

import React from "react";
import { PARTNERS_DATA } from "../../data/partners";
import { BRAND_ICON_MAP } from "../common/BrandIcons";

export default function HeroPartnersTicker() {
  const items = [...PARTNERS_DATA, ...PARTNERS_DATA];

  return (
    <div className="w-full max-w-5xl overflow-hidden py-1 relative mask-gradient-x opacity-85 hover:opacity-100 transition-opacity">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent" />

      <div className="animate-marquee flex items-center gap-4 sm:gap-6 whitespace-nowrap">
        {items.map((partner, idx) => {
          const IconComponent = BRAND_ICON_MAP[partner.id];

          return (
            <span
              key={`${partner.id}-ticker-${idx}`}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-zinc-400 uppercase select-none hover:text-white transition-all py-1.5 px-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.08]"
            >
              {IconComponent ? (
                <IconComponent className="w-4 h-4 shrink-0" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              )}
              <span>{partner.name}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
