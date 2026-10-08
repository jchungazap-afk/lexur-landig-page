"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { ArrowRight, Layers, ShieldCheck, Clock, MessageSquare } from "lucide-react";

export default function CtaBanner() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].ctaBanner;

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-[#000000] border-t border-white/10 z-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0a0d14] border border-white/10 p-8 sm:p-14 lg:p-16 overflow-hidden">
          {/* Subtle Hairline Grid Pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Overline Badge */}
            <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#3B82F6] mb-4 bg-[#0c1322] px-3.5 py-1 rounded-full border border-blue-500/20">
              {t.overline}
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
              {t.title}
            </h2>

            {/* Subtitle */}
            <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:contacto@lexur.pe?subject=Consulta%20T%C3%A9cnica%20-%20LEXUR%20CORP"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-black hover:bg-neutral-200 text-sm font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-xl group"
              >
                <span>{t.primaryBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#saas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#181d28] hover:bg-[#222838] text-white border border-white/15 text-sm font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                <Layers className="w-4 h-4 text-blue-400" />
                <span>{t.secondaryBtn}</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3 text-xs text-[#a1a1aa]">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  {language === "es"
                    ? "Respuesta técnica en menos de 2 horas"
                    : "Technical response under 2 hours"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#a1a1aa]">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === "es"
                    ? "Acuerdo de Confidencialidad (NDA)"
                    : "Signed Confidential NDA"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#a1a1aa]">
                <MessageSquare className="w-4 h-4 text-purple-400 shrink-0" />
                <span>
                  {language === "es"
                    ? "Trato directo con arquitectos senior"
                    : "Direct contact with senior architects"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
