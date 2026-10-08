"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";

export default function Headline() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full max-w-5xl px-2 my-2">
      {/* Subtle text contrast backing */}
      <div className="absolute inset-0 bg-black/40 blur-2xl -z-10 pointer-events-none rounded-full" />

      <h1 className="text-center tracking-tight leading-[1.12] m-0 p-0">
        {/* Line 1: Dot Matrix Style Display */}
        <span
          className="font-display block text-[26px] min-[400px]:text-[32px] sm:text-[46px] md:text-[56px] lg:text-[68px] text-white tracking-[-0.02em] opacity-0 translate-y-3.5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          style={{
            animation: "headlineFade 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards",
            animationDelay: "0.12s",
          }}
        >
          {t.headlineLine1}
        </span>

        {/* Line 2: Ultra-Crisp Sans Bold Typography with 100% visible C */}
        <span
          className="block font-sans font-bold sm:font-extrabold text-[28px] min-[400px]:text-[36px] sm:text-[52px] md:text-[66px] lg:text-[76px] tracking-[-0.04em] opacity-0 translate-y-3.5 mt-1 sm:mt-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
          style={{
            animation: "headlineFade 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards",
            animationDelay: "0.28s",
          }}
        >
          {language === "es" ? (
            <>
              <span className="text-white font-black underline decoration-blue-500/40 decoration-wavy decoration-1 underline-offset-8">
                C
              </span>
              <span className="text-white">onstruida</span>{" "}
              <span className="text-zinc-300">Para Evolucionar</span>
            </>
          ) : (
            <>
              <span className="text-white font-black">Designed</span>{" "}
              <span className="text-zinc-300">To Evolve</span>
            </>
          )}
        </span>
      </h1>
    </div>
  );
}
