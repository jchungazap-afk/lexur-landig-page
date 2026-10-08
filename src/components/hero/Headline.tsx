"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";

export default function Headline() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <h1 className="font-display text-white text-[20px] min-[380px]:text-[24px] sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[64px] tracking-[-0.03em] sm:tracking-[-0.04em] leading-[1.18] flex flex-col items-center justify-center m-0 p-0 select-none w-full max-w-5xl px-2">
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
        className="block opacity-0 translate-y-3.5 text-center"
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
