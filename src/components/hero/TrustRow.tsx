"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";

export default function TrustRow() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <div
      className="inline-flex items-center mb-4 sm:mb-6 anim-item max-w-full"
      style={{ animationDelay: "0.05s" }}
    >
      {/* 3 Overlapping Avatar Rings */}
      <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 bg-zinc-800 border border-white/20 rounded-full p-[5px] flex items-center justify-center shrink-0 transition-transform duration-300 hover:-translate-y-0.5">
        <div className="w-full h-full bg-[#ffffff] rounded-full grid place-items-center shadow-xs">
          <i className="fa-brands fa-microsoft text-[#0a1e45] text-[13px] leading-none" />
        </div>
      </div>

      <div className="relative z-20 -ml-4 w-9 h-9 sm:w-10 sm:h-10 bg-zinc-800 border border-white/20 rounded-full p-[5px] flex items-center justify-center shrink-0 transition-transform duration-300 hover:-translate-y-1">
        <div className="w-full h-full bg-[#ffffff] rounded-full grid place-items-center shadow-xs">
          <i className="fa-brands fa-amazon text-[#0a1e45] text-[13px] leading-none" />
        </div>
      </div>

      <div className="relative z-30 -ml-4 w-9 h-9 sm:w-10 sm:h-10 bg-zinc-800 border border-white/20 rounded-full p-[5px] flex items-center justify-center shrink-0 transition-transform duration-300 hover:-translate-y-0.5">
        <div className="w-full h-full bg-[#ffffff] rounded-full grid place-items-center shadow-xs">
          <i className="fa-brands fa-google text-[#0a1e45] text-[13px] leading-none" />
        </div>
      </div>

      {/* Trust Pill overlapping last avatar */}
      <div className="relative z-25 -ml-4 h-9 sm:h-10 bg-zinc-800 border border-white/20 rounded-full inline-flex items-center pl-6 pr-4 shrink-0 shadow-sm">
        <span className="text-zinc-300 text-[12px] sm:text-[13.5px] font-medium tracking-tight whitespace-nowrap">
          {t.trustPill}
        </span>
      </div>
    </div>
  );
}
