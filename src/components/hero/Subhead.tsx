"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";

export default function Subhead() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <p
      className="max-w-[560px] text-[15px] sm:text-[18px] text-[#d0d0d0] opacity-80 leading-[1.55] font-normal mt-3 sm:mt-5 mb-5 sm:mb-8 text-center px-4 anim-item"
      style={{ animationDelay: "0.28s" }}
    >
      {t.subhead}
    </p>
  );
}
