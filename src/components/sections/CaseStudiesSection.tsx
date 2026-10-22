"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { CASE_STUDIES } from "@/data/consulting";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconTrendingUp, IconCircleCheck, IconStarFilled } from "@tabler/icons-react";

const TESTIMONIALS = [
  {
    name: "Carlos Mendoza",
    role: { es: "Director de Operaciones · Grupo Ferretero Sur", en: "Operations Director · Grupo Ferretero Sur" },
    initials: "CM",
    quote: {
      es: "Pasamos de perder horas cuadrando inventarios entre 6 tiendas a tener el stock y la facturación SUNAT en tiempo real con FerreCore.",
      en: "We went from losing hours reconciling inventory across 6 stores to having real-time stock and electronic invoicing with FerreCore.",
    },
  },
  {
    name: "Dra. Valeria Salazar",
    role: { es: "Directora Médica · Clínica San Gabriel", en: "Medical Director · San Gabriel Clinic" },
    initials: "VS",
    quote: {
      es: "MedClinic EHR redujo el tiempo de admisión y triaje a menos de dos minutos. Los recordatorios automáticos por WhatsApp bajaron el ausentismo un 60%.",
      en: "MedClinic EHR cut patient admission and triage time to under two minutes. Automated WhatsApp reminders reduced no-shows by 60%.",
    },
  },
  {
    name: "Ing. Rodrigo Paredes",
    role: { es: "Gerente General · Centros Ópticos Visión+", en: "General Manager · Vision+ Optical Centers" },
    initials: "RP",
    quote: {
      es: "Con OptiVision conectamos el consultorio optométrico directamente con el laboratorio de biselado y caja. Cero errores en fórmulas.",
      en: "With OptiVision we connected the optometric chart directly with our lens lab and checkout. Zero prescription transcription errors.",
    },
  },
];

export default function CaseStudiesSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].cases;

  return (
    <section
      id="case-studies"
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

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CASE_STUDIES.map((item) => (
            <Card
              key={item.id}
              className="p-7 sm:p-8 justify-between hover:-translate-y-1"
            >
              <div>
                {/* Sector & Verified Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-zinc-400">
                    {item.sector[language]}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <IconCircleCheck className="w-4 h-4 text-emerald-400" stroke={1.75} />
                    <span className="text-[11px] font-mono">
                      {language === "es" ? "En Producción" : "In Production"}
                    </span>
                  </div>
                </div>

                {/* Client title */}
                <h3 className="text-lg font-semibold text-white tracking-tight mb-5">
                  {item.client}
                </h3>

                {/* Impact Metric Callout */}
                <div className="p-5 rounded-2xl border border-white/12 bg-white/[0.03] mb-5">
                  <div className="text-4xl sm:text-5xl font-mono font-bold tracking-tight mb-1.5 text-white tabular-nums">
                    {item.metric}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    {item.metricLabel[language]}
                  </div>
                </div>

                {/* Impact Summary */}
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.summary[language]}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                <span className="font-mono text-[11px]">LEXUR ENTERPRISE IMPACT</span>
                <IconTrendingUp className="w-4 h-4 text-zinc-400" stroke={1.75} />
              </div>
            </Card>
          ))}
        </div>

        {/* Flow-style Testimonials Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <Card key={item.name} className="p-6 justify-between bg-white/[0.02]">
              <p className="text-sm sm:text-[15px] text-zinc-300 leading-relaxed">
                &ldquo;{item.quote[language]}&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    data-slot="avatar"
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.06] font-mono text-xs font-semibold text-white"
                  >
                    {item.initials}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white truncate">
                      {item.name}
                    </div>
                    <div className="text-xs text-zinc-400 truncate">
                      {item.role[language]}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400 shrink-0" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStarFilled key={i} className="size-3.5" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
