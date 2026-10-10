"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { SAAS_PRODUCTS } from "../../data/products";
import { ArrowUpRight, Lock, Activity, Sparkles, ChevronRight } from "lucide-react";

export default function CinematicScrollHero() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activePreviewIndex, setActivePreviewIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = containerHeight - windowHeight;

      if (scrollableDistance <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Current active preview product inside workstation
  const activeProduct = SAAS_PRODUCTS[activePreviewIndex] || SAAS_PRODUCTS[0];

  // Interpolated visual values
  const textOpacity = Math.max(0, 1 - scrollProgress * 2.2);
  const textTranslateY = -scrollProgress * 80;
  const horizonTranslateY = `${-60 + scrollProgress * 20}%`;
  
  // Preview card animation
  const cardOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.12) * 2.2));
  const cardScale = Math.min(1, 0.85 + scrollProgress * 0.15);
  const cardTranslateY = Math.max(0, (1 - scrollProgress) * 70);

  return (
    <section ref={containerRef} className="relative h-[180vh] w-full bg-black text-white">
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Luminous Celestial Horizon */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute h-full w-full pointer-events-none transition-transform duration-75 ease-out"
            style={{
              isolation: "isolate",
              transform: `translateY(${horizonTranslateY})`,
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[100%]"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px -4px 28px 0px rgba(255,255,255,0.75)",
                transform: "scale(1.32)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[100%]"
              style={{
                background: "#A558FB",
                filter: "blur(32px)",
                transform: "scale(1.2)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[100%]"
              style={{
                background: "#4922E5",
                filter: "blur(22px)",
                transform: "scale(1.24)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[100%]"
              style={{
                background: "#000000",
                filter: "blur(50px)",
                transform: "scale(1.2)",
              }}
            />
          </div>
        </div>

        {/* Hero Title & Primary CTAs (Fades out smoothly on scroll) */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 sm:gap-6 px-6 text-center max-w-4xl mx-auto my-auto -mt-20 sm:-mt-24 pointer-events-auto transition-all duration-75"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px)`,
            pointerEvents: textOpacity < 0.1 ? "none" : "auto",
          }}
        >
          {/* Trust Overline Badge */}
          <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-white/15 px-3.5 py-1 rounded-full text-xs font-mono text-zinc-300 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">
              {language === "es" ? "Arquitectura Empresarial" : "Enterprise Architecture"}
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-blue-400 font-mono">99.99% SLA</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-3xl">
            {language === "es" ? (
              <>
                <span>Ingeniería ágil.</span>{" "}
                <span className="text-zinc-400 font-medium">Software que escala.</span>
              </>
            ) : (
              <>
                <span>Build faster.</span>{" "}
                <span className="text-zinc-400 font-medium">Scale smarter.</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-zinc-400 font-normal">
            {language === "es"
              ? "Consultoría de software e ingeniería cloud de alta precisión. Construimos plataformas empresariales, microservicios y sistemas empresariales de alto impacto."
              : "High-precision software engineering and cloud architecture. We engineer scalable multi-tenant platforms, microservices and production-ready business systems."}
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_24px_rgba(255,255,255,0.3)] hover:scale-105 group"
            >
              <span>{language === "es" ? "Cotizar Proyecto a Medida" : "Get Custom Proposal"}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#saas"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/15 transition-all duration-200"
            >
              <span>{language === "es" ? "Explorar Sistemas Empresariales" : "Explore Business Systems"}</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Cinematic App Interface Workstation (Scales up & reveals on scroll) */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center p-4 sm:p-8 pointer-events-none transition-all duration-75"
          style={{
            opacity: cardOpacity,
            transform: `translateY(${cardTranslateY}px) scale(${cardScale})`,
            pointerEvents: cardOpacity > 0.4 ? "auto" : "none",
          }}
        >
          <div className="relative aspect-[16/10] w-full max-w-4xl sm:max-w-5xl rounded-3xl bg-[#070a12] border border-white/20 shadow-[0_32px_100px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col">
            {/* Workstation Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0c101c] border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-1 ml-3 bg-white/5 p-0.5 rounded-lg border border-white/10">
                  {SAAS_PRODUCTS.map((prod, idx) => (
                    <button
                      key={prod.id}
                      onClick={() => setActivePreviewIndex(idx)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activePreviewIndex === idx
                          ? "bg-white text-black font-bold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {prod.name.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* URL Address */}
              <div className="hidden sm:flex items-center justify-center gap-2 bg-[#04060a] border border-white/10 px-4 py-1 rounded-full text-xs font-mono text-zinc-300 shadow-inner">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>https://{activeProduct.id}.lexur.cloud/system-live</span>
              </div>

              {/* Live Badge */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                <Activity className="w-3 h-3" />
                <span className="font-semibold">PRODUCTION READY</span>
              </div>
            </div>

            {/* Workstation Image Display */}
            <div className="relative flex-1 w-full bg-[#03050a] overflow-hidden group">
              <Image
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.name}
                fill
                className="object-cover object-top"
                priority
              />

              {/* Bottom live overlay status */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-black/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs text-white shadow-xl">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold">{activeProduct.name}</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-300 font-mono text-[11px]">{activeProduct.badge}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Marquee of Reviews / Verified Clients */}
        <div
          className="absolute bottom-3 left-0 right-0 z-30 pointer-events-auto transition-opacity duration-200"
          style={{ opacity: scrollProgress > 0.85 ? 1 : Math.max(0, 1 - scrollProgress * 1.5) }}
        >
          <p className="mb-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400 font-mono">
            {language === "es"
              ? "RESPALDADO POR EMPRESAS Y ARQUITECTURAS DE MISIÓN CRÍTICA"
              : "TRUSTED BY ENTERPRISES AND MISSION-CRITICAL ARCHITECTURES"}
          </p>

          <div className="w-full overflow-hidden mask-gradient-x">
            <div className="animate-marquee flex gap-3 px-4">
              {[
                {
                  name: "Ing. Carlos Mendoza",
                  role: "CTO, Distribuidora Ferretera",
                  quote: "FerreCore sincroniza nuestras 8 sedes y 100k SKU sin una sola caída.",
                  stars: "5.0 ★★★★★",
                },
                {
                  name: "Dra. Valeria Ramos",
                  role: "Directora Médica, Policlínico Sur",
                  quote: "MedClinic redujo el tiempo de atención a la mitad y cumple con cifrado médico total.",
                  stars: "5.0 ★★★★★",
                },
                {
                  name: "Roberto Castillo",
                  role: "Gerente General, Ópticas Prisma",
                  quote: "OptiVision eliminó al 100% los errores en tallado y pedidos a laboratorio.",
                  stars: "5.0 ★★★★★",
                },
                {
                  name: "Ing. Andrea Salazar",
                  role: "VP de Ingeniería, FinTech Hub",
                  quote: "La consultoría cloud de LEXUR diseñó una infraestructura con latencia sub-10ms.",
                  stars: "5.0 ★★★★★",
                },
              ].map((rev, i) => (
                <div
                  key={i}
                  className="flex-none w-[280px] sm:w-[320px] p-3 rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-md shadow-lg flex flex-col justify-between"
                >
                  <p className="text-xs text-zinc-300 font-normal leading-snug mb-2">
                    “{rev.quote}”
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-white/10">
                    <div>
                      <span className="font-semibold text-white block">{rev.name}</span>
                      <span className="text-zinc-500 text-[10px]">{rev.role}</span>
                    </div>
                    <span className="text-amber-400 font-mono text-[10px] font-bold">{rev.stars}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
