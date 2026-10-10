"use client";

import React from "react";
import { PARTNERS_DATA } from "../../data/partners";

export default function HeroPartnersTicker() {
  const items = [...PARTNERS_DATA, ...PARTNERS_DATA];

  return (
    <div className="w-full max-w-4xl overflow-hidden py-1 relative mask-gradient-x opacity-70 hover:opacity-100 transition-opacity">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-black to-transparent" />

      <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap">
        {items.map((partner, idx) => (
          <span
            key={`${partner.id}-ticker-${idx}`}
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-gray-400 uppercase select-none hover:text-white transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 inline-block" />
            {partner.name}
          </span>
        ))}
      </div>
    </div>
  );
}
