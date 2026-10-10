"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";

export default function CtaButton() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <div
      className="inline-flex anim-item anim-pulse-item"
      style={{ animationDelay: "0.4s" }}
    >
      <a
        href="#contact"
        className="inline-flex items-center justify-center bg-white text-black font-semibold text-[14px] sm:text-[15px] py-3 sm:py-3.5 px-6 sm:px-8 rounded-full cta-glow cursor-pointer"
      >
        {t.cta}
      </a>
    </div>
  );
}
