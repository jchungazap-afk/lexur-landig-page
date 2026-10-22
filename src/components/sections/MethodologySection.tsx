"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { METHODOLOGY_STEPS } from "@/data/consulting";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconCircleCheck, IconChevronRight } from "@tabler/icons-react";

export default function MethodologySection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].methodology;

  return (
    <section
      id="methodology"
      className="relative w-full py-20 sm:py-28 bg-black z-20 scroll-mt-20"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
          <Badge variant="default" className="uppercase tracking-widest">
            {t.overline}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-white leading-tight text-balance">
            {t.title}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Steps Timeline / Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <Card
              key={step.step}
              className="p-7 justify-between hover:-translate-y-1"
            >
              <div>
                {/* Step Header with numeric indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-zinc-500 group-hover/card:text-white transition-colors tabular-nums">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 group-hover/card:text-white transition-colors">
                    <IconCircleCheck className="w-4 h-4" stroke={1.75} />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-3">
                  {step.title[language]}
                </h3>

                {/* Step Description */}
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.description[language]}
                </p>
              </div>

              {/* Step Footer Connection */}
              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                <span className="font-mono text-[11px] uppercase tracking-wider">
                  {language === "es" ? `Fase 0${idx + 1}` : `Phase 0${idx + 1}`}
                </span>
                {idx < METHODOLOGY_STEPS.length - 1 ? (
                  <IconChevronRight className="w-4 h-4 text-zinc-500 hidden lg:block" stroke={1.75} />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
