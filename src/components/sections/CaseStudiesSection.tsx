"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { CASE_STUDIES } from "../../data/consulting";
import { TrendingUp, Award, CheckCircle } from "lucide-react";

export default function CaseStudiesSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].cases;

  return (
    <section
      id="case-studies"
      className="relative w-full py-24 sm:py-32 bg-[#05070a] border-t border-white/10 z-20 scroll-mt-20"
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

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CASE_STUDIES.map((item, idx) => {
            const metricColors = [
              "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
              "text-blue-400 border-blue-500/20 bg-blue-500/5",
              "text-purple-400 border-purple-500/20 bg-purple-500/5",
            ];
            const badgeColor = metricColors[idx % metricColors.length];

            return (
              <div
                key={item.id}
                className="group p-8 sm:p-10 rounded-3xl bg-[#0a0d14] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Sector & Verified Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#a1a1aa]">
                      {item.sector[language]}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-white/50">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] font-mono">
                        {language === "es" ? "En Producción" : "In Production"}
                      </span>
                    </div>
                  </div>

                  {/* Client title */}
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-6 group-hover:text-white transition-colors">
                    {item.client}
                  </h3>

                  {/* Impact Metric Callout */}
                  <div className={`p-6 rounded-2xl border mb-6 ${badgeColor}`}>
                    <div className="text-4xl sm:text-5xl font-mono font-bold tracking-tight mb-2">
                      {item.metric}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wider text-[#d4d4d8]">
                      {item.metricLabel[language]}
                    </div>
                  </div>

                  {/* Impact Summary */}
                  <p className="text-[#a1a1aa] text-sm leading-relaxed font-normal">
                    {item.summary[language]}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-[#71717a]">
                  <span className="font-mono text-[11px]">LEXUR ENTERPRISE IMPACT</span>
                  <TrendingUp className="w-4 h-4 text-white/30" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
