"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";

export default function Headline() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <h1 className="font-display text-white text-[22px] sm:text-[42px] md:text-[58px] lg:text-[76px] tracking-[-0.04em] sm:tracking-[-0.05em] leading-[1.12] whitespace-nowrap overflow-hidden flex flex-col items-center m-0 p-0 select-none max-w-full">
      <span
        className="block opacity-0 translate-y-3.5"
        style={{
          animation: "headlineFade 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards",
          animationDelay: "0.12s",
        }}
      >
        {t.headlineLine1}
      </span>
      <span
        className="block opacity-0 translate-y-3.5"
        style={{
          animation: "headlineFade 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards",
          animationDelay: "0.3s",
        }}
      >
        {t.headlineLine2}
      </span>
    </h1>
  );
}
