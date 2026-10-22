"use client";

import React from "react";
import SculptureHero from "@/components/ui/liquid-sculpture-hero";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/components/common/ThemeToggle";
import StatsFooter from "@/components/stats/StatsFooter";
import HeroPartnersTicker from "@/components/partners/HeroPartnersTicker";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Hero() {
  const { language } = useLanguage();
  const theme = useTheme();

  const copy =
    language === "es"
      ? {
          eyebrow: "Ingeniería de Software & Sistemas Empresariales — Est. Perú",
          headline: "Tecnología que\ntrabaja contigo.",
          headlineAccent: "trabaja contigo.",
          body: "Diseñamos sistemas empresariales y software a medida con la precisión de la ingeniería — plataformas que aceleran tus ventas, stock y operación diaria.",
          primaryCta: { label: "Iniciar un proyecto", href: "#contact" },
          secondaryCta: { label: "Explorar sistemas", href: "#saas" },
          hint: "Mueve el cursor sobre la escultura",
          hintTouch: "Toca la escultura",
          trustedTitle:
            "Respaldados por infraestructura de clase mundial y métricas verificadas en producción.",
        }
      : {
          eyebrow: "Enterprise Software Engineering — Est. Peru",
          headline: "Technology that\nworks with you.",
          headlineAccent: "works with you.",
          body: "We engineer enterprise systems and custom platforms with precision and craft — software that accelerates your sales, inventory, and daily operations.",
          primaryCta: { label: "Start a project", href: "#contact" },
          secondaryCta: { label: "Selected systems", href: "#saas" },
          hint: "Move across the form",
          hintTouch: "Touch the form",
          trustedTitle:
            "Backed by world-class cloud infrastructure and verified production telemetry.",
        };

  return (
    <>
      <div id="home" data-hero className="relative w-full z-10">
        <SculptureHero
          showNav={false}
          theme={theme}
          src="/assets/sculpture/sculpture-light.webp"
          darkSrc="/assets/sculpture/sculpture-dark.webp"
          mobileSrc="/assets/sculpture/sculpture-mobile-light.webp"
          mobileDarkSrc="/assets/sculpture/sculpture-mobile-dark.webp"
          background="#EBE9E5"
          darkBackground="#111110"
          eyebrow={copy.eyebrow}
          headline={copy.headline}
          headlineAccent={copy.headlineAccent}
          body={copy.body}
          primaryCta={copy.primaryCta}
          secondaryCta={copy.secondaryCta}
          hint={copy.hint}
          hintTouch={copy.hintTouch}
          backdropText="LEXUR"
          height="100svh"
          sculptureScale={1}
          mobileSculptureScale={1}
          strength={1}
          radius={220}
          particleDensity={1}
          turbulence={1}
          liquid={1}
          streaks={true}
          ambient={false}
          intro={false}
          loadFonts={false}
          showCredit={false}
        />
      </div>

      <SectionDivider />

      {/* Trusted Brands & Production Telemetry Section */}
      <section
        id="trusted-brands"
        className="relative z-10 py-10 sm:py-14 bg-[var(--bg)]"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
          <p className="text-center text-sm sm:text-base text-zinc-400 max-w-2xl">
            {copy.trustedTitle}
          </p>
          <StatsFooter />
          <HeroPartnersTicker />
        </div>
      </section>
    </>
  );
}
