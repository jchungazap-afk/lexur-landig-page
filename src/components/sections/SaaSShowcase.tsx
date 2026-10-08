"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { SAAS_PRODUCTS } from "../../data/products";
import {
  CheckCircle2,
  ArrowRight,
  Lock,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";

export default function SaaSShowcase() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].saas;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeProduct = SAAS_PRODUCTS[activeIndex];

  // Auto-cycle or smooth keyboard/nav support
  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : SAAS_PRODUCTS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < SAAS_PRODUCTS.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation when focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="saas"
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 bg-[#020306] border-t border-white/10 z-20 scroll-mt-20"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/[0.04] blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#3B82F6] mb-3 bg-[#0c1322] px-3.5 py-1 rounded-full border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            {t.overline}
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            {t.title}
          </h2>
          <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Product Selector Tabs (Sticky style) */}
        <div className="sticky top-20 z-30 mb-8 sm:mb-12 py-2">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
            <div className="flex items-center gap-2 bg-[#0a0d14]/90 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-2xl">
              {SAAS_PRODUCTS.map((product, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={product.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative whitespace-nowrap px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "bg-white text-black font-semibold shadow-lg scale-[1.02]"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] ${
                        isActive ? "text-zinc-600 font-bold" : "text-zinc-500"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span>{product.name}</span>
                    {isActive && (
                      <span className="hidden md:inline-block text-[10px] px-1.5 py-0.2 rounded bg-black/10 font-mono font-medium">
                        {product.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cinematic Main Showcase Frame */}
        <div className="relative rounded-3xl bg-[#080b12] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300">
          {/* Workstation Browser Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0d121c] border-b border-white/10">
            {/* Mac Traffic Lights & Nav Arrows */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
              </div>
              <div className="hidden sm:flex items-center gap-1 ml-2 text-zinc-500">
                <button
                  onClick={handlePrev}
                  className="p-1 hover:text-white transition-colors"
                  aria-label="Anterior sistema"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1 hover:text-white transition-colors"
                  aria-label="Siguiente sistema"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* URL Command Bar */}
            <div className="flex items-center justify-center gap-2 bg-[#05070a] border border-white/10 px-4 py-1 rounded-full text-xs font-mono text-zinc-300 max-w-sm sm:max-w-md w-full mx-2 shadow-inner">
              <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">
                https://{activeProduct.id}.lexur.cloud/system-live
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse shrink-0 ml-auto" />
            </div>

            {/* System Status Pill */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
              <Activity className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[11px] font-semibold">PRODUCTION READY</span>
            </div>
          </div>

          {/* Large High-Definition Image Showcase Area */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8.8] bg-[#030508] overflow-hidden group">
            <Image
              src={activeProduct.image}
              alt={activeProduct.name}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
              priority
              quality={95}
            />

            {/* Subtle Gradient Vignette at edges */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-transparent opacity-80" />

            {/* Live Indicator Overlay */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-[11px] font-semibold">
                DEMO REAL • MULTI-TENANT
              </span>
            </div>
          </div>

          {/* System Deep-Dive Command Dashboard (Below Screenshot) */}
          <div className="p-6 sm:p-10 lg:p-12 bg-[#080b12] border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Product Information & Telemetry */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md font-semibold">
                      {activeProduct.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      SISTEMA 0{activeIndex + 1} DE 0{SAAS_PRODUCTS.length}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
                    {activeProduct.tagline[language]}
                  </h3>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal mb-8">
                    {activeProduct.description[language]}
                  </p>
                </div>

                {/* Telemetry Metric Pills */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
                    {t.metricsLabel}
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {activeProduct.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-center hover:border-white/20 transition-colors"
                      >
                        <span className="text-lg sm:text-2xl font-mono font-bold text-white tracking-tight">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-zinc-400 font-medium truncate mt-0.5">
                          {m.label[language]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Capabilities Checklist & CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-white/10 h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                      {t.featureLabel}
                    </span>
                    <Layers className="w-4 h-4 text-blue-400" />
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {activeProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-zinc-200 font-medium leading-relaxed">
                          {feat[language]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-xl group"
                  >
                    <span>{t.demoCta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#case-studies"
                    className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold px-4 py-3.5 rounded-full transition-all duration-200"
                  >
                    <span>{language === "es" ? "Ver Casos" : "Case Studies"}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
