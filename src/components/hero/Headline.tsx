"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";

export default function Headline() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <h1 className="font-display text-white text-[18px] min-[400px]:text-[21px] sm:text-[38px] md:text-[54px] lg:text-[72px] tracking-[-0.04em] sm:tracking-[-0.05em] leading-[1.15] whitespace-nowrap overflow-hidden flex flex-col items-center m-0 p-0 select-none max-w-full">
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
