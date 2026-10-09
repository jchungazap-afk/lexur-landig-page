"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { PARTNERS_DATA } from "../../data/partners";
import { BRAND_ICON_MAP } from "../common/BrandIcons";

// Brand specific accent colors for hover glow & badge
const BRAND_ACCENTS: Record<string, { color: string; border: string; bg: string }> = {
  aws: { color: "#FF9900", border: "hover:border-[#FF9900]/40", bg: "group-hover:bg-[#FF9900]/10" },
  gcp: { color: "#4285F4", border: "hover:border-[#4285F4]/40", bg: "group-hover:bg-[#4285F4]/10" },
  azure: { color: "#0078D4", border: "hover:border-[#0078D4]/40", bg: "group-hover:bg-[#0078D4]/10" },
  stripe: { color: "#635BFF", border: "hover:border-[#635BFF]/40", bg: "group-hover:bg-[#635BFF]/10" },
  postgres: { color: "#336791", border: "hover:border-[#336791]/40", bg: "group-hover:bg-[#336791]/10" },
  vercel: { color: "#FFFFFF", border: "hover:border-white/40", bg: "group-hover:bg-white/10" },
  docker: { color: "#2496ED", border: "hover:border-[#2496ED]/40", bg: "group-hover:bg-[#2496ED]/10" },
  cloudflare: { color: "#F38020", border: "hover:border-[#F38020]/40", bg: "group-hover:bg-[#F38020]/10" },
  supabase: { color: "#3ECF8E", border: "hover:border-[#3ECF8E]/40", bg: "group-hover:bg-[#3ECF8E]/10" },
  redis: { color: "#DC382D", border: "hover:border-[#DC382D]/40", bg: "group-hover:bg-[#DC382D]/10" },
};

export default function PartnersCarousel() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].partners;

  // Duplicate items for continuous smooth infinite scrolling loop
  const marqueeItems = [...PARTNERS_DATA, ...PARTNERS_DATA];

  return (
    <section
      id="solutions"
      className="relative w-full py-20 sm:py-28 bg-[#05070a] border-t border-white/10 z-20 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
        <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#3B82F6] mb-3 bg-[#111827] px-3.5 py-1 rounded-full border border-blue-500/20">
          {t.overline}
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 max-w-3xl mx-auto leading-tight">
          {t.title}
        </h2>
        <p className="text-[#a1a1aa] text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden mask-gradient-x">
        {/* Left & Right gradient fades for smooth infinite edge dissolve */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-[#05070a] via-[#05070a]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-[#05070a] via-[#05070a]/80 to-transparent" />

        <div className="animate-marquee flex gap-4 sm:gap-6 py-4">
          {marqueeItems.map((partner, index) => {
            const IconComponent = BRAND_ICON_MAP[partner.id];
            const accent = BRAND_ACCENTS[partner.id] || {
              color: "#3B82F6",
              border: "hover:border-blue-500/40",
              bg: "group-hover:bg-blue-500/10",
            };

            return (
              <div
                key={`${partner.id}-${index}`}
                className={`flex flex-col justify-between w-[290px] sm:w-[330px] h-[142px] p-5 rounded-2xl bg-[#090c14] border border-white/10 ${accent.border} transition-all duration-300 shrink-0 group hover:-translate-y-1.5 shadow-lg hover:shadow-2xl`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 ${accent.bg} group-hover:scale-105 transition-all duration-200`}
                    >
                      {IconComponent ? (
                        <IconComponent className="w-5 h-5 shrink-0" />
                      ) : (
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-white transition-colors">
                      {partner.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300 font-semibold shrink-0 border border-white/10">
                    {partner.badge}
                  </span>
                </div>
                <p className="text-xs text-[#8e8e8e] font-normal leading-snug group-hover:text-zinc-300 transition-colors">
                  {partner.category[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
