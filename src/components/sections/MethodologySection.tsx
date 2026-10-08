"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { METHODOLOGY_STEPS } from "../../data/consulting";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function MethodologySection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].methodology;

  return (
    <section
      id="methodology"
      className="relative w-full py-24 sm:py-32 bg-[#000000] border-t border-white/10 z-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#3B82F6] mb-3 bg-[#0c1322] px-3.5 py-1 rounded-full border border-blue-500/20">
            {t.overline}
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            {t.title}
          </h2>
          <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Steps Timeline / Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="group relative p-7 sm:p-8 rounded-3xl bg-[#0a0d14] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Step Header with numeric indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white/40 group-hover:text-blue-400 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#71717a] group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-blue-500/80" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                  {step.title[language]}
                </h3>

                {/* Step Description */}
                <p className="text-[#a1a1aa] text-sm leading-relaxed font-normal">
                  {step.description[language]}
                </p>
              </div>

              {/* Step Footer Connection */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#71717a]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">
                  {language === "es" ? `Fase 0${idx + 1}` : `Phase 0${idx + 1}`}
                </span>
                {idx < METHODOLOGY_STEPS.length - 1 ? (
                  <ChevronRight className="w-4 h-4 text-white/20 hidden lg:block" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
