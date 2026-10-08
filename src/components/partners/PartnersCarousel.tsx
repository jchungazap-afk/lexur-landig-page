"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { PARTNERS_DATA } from "../../data/partners";
import { BRAND_ICON_MAP } from "../common/BrandIcons";

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
        <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#3B82F6] mb-3 bg-[#111827] px-3 py-1 rounded-full border border-[#1e293b]">
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
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#05070a] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#05070a] to-transparent" />

        <div className="animate-marquee flex gap-4 sm:gap-6 py-4">
          {marqueeItems.map((partner, index) => {
            const IconComponent = BRAND_ICON_MAP[partner.id];

            return (
              <div
                key={`${partner.id}-${index}`}
                className="flex flex-col justify-between w-[280px] sm:w-[320px] h-[136px] p-5 rounded-2xl bg-[#0c0f17] border border-white/10 hover:border-white/30 transition-all duration-300 shrink-0 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {IconComponent ? (
                        <IconComponent className="w-4 h-4" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {partner.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300 font-medium shrink-0">
                    {partner.badge}
                  </span>
                </div>
                <p className="text-xs text-[#8e8e8e] font-normal leading-snug">
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
