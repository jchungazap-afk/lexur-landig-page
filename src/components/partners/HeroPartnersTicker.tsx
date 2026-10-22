"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  DeloitteLogo,
  ElephantLogo,
  FedExLogo,
  HubSpotLogo,
  MicrosoftLogo,
  WalmartLogo,
  AmazonLogo,
} from "./PartnerLogos";

const LOGO_COMPONENTS = [
  { id: "deloitte", Component: DeloitteLogo },
  { id: "elephant", Component: ElephantLogo },
  { id: "fedex", Component: FedExLogo },
  { id: "hubspot", Component: HubSpotLogo },
  { id: "microsoft", Component: MicrosoftLogo },
  { id: "walmart", Component: WalmartLogo },
  { id: "amazon", Component: AmazonLogo },
];

export default function HeroPartnersTicker() {
  const { language } = useLanguage();

  // Duplicate list 3 times for continuous seamless infinite marquee loop
  const marqueeItems = [...LOGO_COMPONENTS, ...LOGO_COMPONENTS, ...LOGO_COMPONENTS];

  const headline =
    language === "es"
      ? "Con la confianza de startups, empresas y líderes de la industria."
      : "Trusted by startups, enterprises, and industry giants alike.";

  return (
    <section className="relative w-full py-8 sm:py-12 overflow-hidden select-none">
      {/* 1. Header Headline — exact text & style from reference */}
      <p className="text-center text-[14px] sm:text-[15px] font-normal tracking-[-0.01em] text-zinc-400 mb-8 sm:mb-10 px-4">
        {headline}
      </p>

      {/* 2. Infinite Scrolling Logo Marquee with Lateral Fade Mask */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient edge fades for smooth infinite dissolve */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 z-10 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 z-10 bg-gradient-to-l from-[var(--bg)] via-[var(--bg)]/80 to-transparent"
        />

        <div className="animate-marquee flex items-center gap-12 sm:gap-16 lg:gap-24 py-2">
          {marqueeItems.map((item, index) => {
            const Logo = item.Component;
            return (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 text-zinc-300 hover:text-white"
              >
                <Logo className="h-6 sm:h-7 w-auto" />
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Architectural CAD Dimension Ruler Line (from reference image) */}
      <div className="relative w-full max-w-5xl mx-auto mt-10 sm:mt-14 px-4 sm:px-6">
        <div className="relative border-b border-white/15 dark:border-white/15 border-zinc-300 w-full">
          {/* Left CAD dimension tick mark: ├── */}
          <span className="absolute -left-px -top-2 h-4 w-px bg-zinc-400 dark:bg-zinc-500" />
          <span className="absolute -left-2 top-0 h-px w-2 bg-zinc-400 dark:bg-zinc-500" />

          {/* Right CAD dimension tick mark: ──┤ */}
          <span className="absolute -right-px -top-2 h-4 w-px bg-zinc-400 dark:bg-zinc-500" />
          <span className="absolute -right-2 top-0 h-px w-2 bg-zinc-400 dark:bg-zinc-500" />
        </div>
      </div>
    </section>
  );
}
