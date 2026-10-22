"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  NextJsIcon,
  ReactIcon,
  TypeScriptIcon,
  PostgresIcon,
  AwsIcon,
  GoogleCloudIcon,
  AzureIcon,
  CloudflareIcon,
  DockerIcon,
  KubernetesIcon,
  SupabaseIcon,
  RedisIcon,
  StripeIcon,
  TailwindIcon,
} from "../common/BrandIcons";

const TECH_PARTNERS = [
  { id: "nextjs", name: "Next.js", Icon: NextJsIcon },
  { id: "aws", name: "Amazon Web Services", Icon: AwsIcon },
  { id: "react", name: "React 19", Icon: ReactIcon },
  { id: "gcp", name: "Google Cloud", Icon: GoogleCloudIcon },
  { id: "postgres", name: "PostgreSQL", Icon: PostgresIcon },
  { id: "azure", name: "Microsoft Azure", Icon: AzureIcon },
  { id: "typescript", name: "TypeScript", Icon: TypeScriptIcon },
  { id: "docker", name: "Docker", Icon: DockerIcon },
  { id: "cloudflare", name: "Cloudflare", Icon: CloudflareIcon },
  { id: "kubernetes", name: "Kubernetes", Icon: KubernetesIcon },
  { id: "supabase", name: "Supabase", Icon: SupabaseIcon },
  { id: "redis", name: "Redis", Icon: RedisIcon },
  { id: "stripe", name: "Stripe", Icon: StripeIcon },
  { id: "tailwind", name: "Tailwind CSS", Icon: TailwindIcon },
];

export default function HeroPartnersTicker() {
  const { language } = useLanguage();

  // Duplicate for smooth seamless infinite marquee loop
  const marqueeItems = [...TECH_PARTNERS, ...TECH_PARTNERS];

  const headline =
    language === "es"
      ? "Construido con tecnología, infraestructura y estándares de clase mundial."
      : "Trusted by startups, enterprises, and industry giants alike.";

  return (
    <section className="relative w-full py-8 sm:py-12 overflow-hidden select-none">
      {/* 1. Header Headline — estilo y posición exacta de la referencia */}
      <p className="text-center text-[14px] sm:text-[15px] font-normal tracking-[-0.01em] text-zinc-400 mb-8 sm:mb-10 px-4">
        {headline}
      </p>

      {/* 2. Marquesina infinita con máscara de desvanecimiento lateral */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 z-10 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 z-10 bg-gradient-to-l from-[var(--bg)] via-[var(--bg)]/80 to-transparent"
        />

        <div className="animate-marquee flex items-center gap-10 sm:gap-14 lg:gap-16 py-2">
          {marqueeItems.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 flex items-center gap-3.5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-default"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 transition-transform duration-200 group-hover:scale-110">
                  <Icon className="w-full h-full" />
                </div>
                <span className="text-[14px] sm:text-[15px] font-medium tracking-tight text-zinc-300 group-hover:text-white whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Línea arquitectónica de cota CAD (con las marcas exactas ├── ──┤ de la referencia) */}
      <div className="relative w-full max-w-5xl mx-auto mt-10 sm:mt-14 px-4 sm:px-6">
        <div className="relative border-b border-white/15 dark:border-white/15 border-zinc-300 w-full">
          {/* Marca CAD izquierda: ├── */}
          <span className="absolute -left-px -top-2 h-4 w-px bg-zinc-400 dark:bg-zinc-500" />
          <span className="absolute -left-2 top-0 h-px w-2 bg-zinc-400 dark:bg-zinc-500" />

          {/* Marca CAD derecha: ──┤ */}
          <span className="absolute -right-px -top-2 h-4 w-px bg-zinc-400 dark:bg-zinc-500" />
          <span className="absolute -right-2 top-0 h-px w-2 bg-zinc-400 dark:bg-zinc-500" />
        </div>
      </div>
    </section>
  );
}
