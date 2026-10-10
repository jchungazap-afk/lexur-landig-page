"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";

export default function Headline() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full max-w-5xl px-2 my-2">
      {/* Titular */}

      <h1 className="font-heading text-center m-0 p-0 text-white font-semibold tracking-[-0.035em] leading-[1.02] text-[40px] min-[400px]:text-[46px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
        <span
          className="block opacity-0 translate-y-3.5"
          style={{ animation: "headlineFade 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards", animationDelay: "0.12s" }}
        >
          {t.headlineLine1}
        </span>
        <span
          className="block opacity-0 translate-y-3.5"
          style={{ animation: "headlineFade 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards", animationDelay: "0.28s" }}
        >
          {t.headlineLine2}
        </span>
      </h1>
    </div>
  );
}
