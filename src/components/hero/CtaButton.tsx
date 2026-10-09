"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { CaretDoubleRight } from "../common/Icons";

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
        className="btn-flow inline-flex items-center justify-center gap-2.5 font-medium text-[15px] sm:text-[16px] py-3 sm:py-3.5 pl-7 pr-6 sm:pl-8 sm:pr-7 rounded-full cursor-pointer"
      >
        {t.cta}
        <CaretDoubleRight className="chev" />
      </a>
    </div>
  );
}
