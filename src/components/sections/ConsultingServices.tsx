"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { CONSULTING_SERVICES } from "../../data/consulting";
import { Cloud, Smartphone, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-6 h-6 text-blue-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-emerald-400" />,
  Cpu: <Cpu className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-purple-400" />,
};

export default function ConsultingServices() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].consulting;

  return (
    <section
      id="services"
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {CONSULTING_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group p-8 sm:p-10 rounded-3xl bg-[#0a0d14] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {ICON_MAP[srv.iconName] || <Cpu className="w-6 h-6 text-white" />}
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-3">
                  {srv.title[language]}
                </h3>

                <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed font-normal mb-6">
                  {srv.description[language]}
                </p>
              </div>

              {/* Technology Tags */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {srv.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-[#d4d4d8] border border-white/5 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Banner */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#181d28] hover:bg-[#222838] text-white border border-white/15 text-sm font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg group"
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
