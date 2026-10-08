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
  ChevronLeft,
  ChevronRight,
  Activity,
  Sparkles,
  Maximize2,
  X,
  Server,
  Receipt,
  Stethoscope,
  Glasses,
  Layers,
  ArrowUpRight,
} from "lucide-react";

// Product-specific live feature chips and interactive views
const PRODUCT_EXTRAS: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    badgeColor: string;
    chips: { es: string; en: string; tag: string }[];
    views: { es: string; en: string }[];
  }
> = {
  ferrecore: {
    icon: Receipt,
    accentColor: "#3B82F6",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    chips: [
      { es: "Ticket #F001-4928 Emitido en 0.08s", en: "Receipt #F001-4928 Cleared in 0.08s", tag: "POS" },
      { es: "Kardex sincronizado entre 8 almacenes", en: "Kardex synced across 8 warehouses", tag: "STOCK" },
      { es: "Modo Offline: Operatividad sin caídas", en: "Offline Mode: 100% Resilient", tag: "OFFLINE" },
    ],
    views: [
      { es: "Terminal de Venta", en: "POS Terminal" },
      { es: "Kardex & Multialmacén", en: "Warehouse Kardex" },
      { es: "Facturación SUNAT", en: "Electronic Invoicing" },
    ],
  },
  medclinic: {
    icon: Stethoscope,
    accentColor: "#10B981",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    chips: [
      { es: "Historia Clínica #7429 Cifrada AES-256", en: "Medical Record #7429 AES-256 Encrypted", tag: "HIPAA" },
      { es: "Triaje digital con catálogo CIE-10", en: "Digital Triage with ICD-10 Diagnostics", tag: "TRIAGE" },
      { es: "Recordatorio WhatsApp autodespachado", en: "Automated WhatsApp patient reminder", tag: "TELEMED" },
    ],
    views: [
      { es: "Expediente Clínico", en: "Patient Record" },
      { es: "Agenda & Triaje", en: "Triage & Schedule" },
      { es: "Recetas Médicas", en: "Prescription Engine" },
    ],
  },
  optivision: {
    icon: Glasses,
    accentColor: "#8B5CF6",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    chips: [
      { es: "Fórmula OD: -2.25 cyl -0.50 eje 180°", en: "Prescription OD: -2.25 cyl -0.50 axis 180°", tag: "RX" },
      { es: "Laboratorio: Luna en proceso de biselado", en: "Lens Lab: Edge grinding in progress", tag: "LAB" },
      { es: "Stock de monturas: 1,480 unidades", en: "Frames inventory: 1,480 units live", tag: "FRAMES" },
    ],
    views: [
      { es: "Ficha Optométrica", en: "Optometric Chart" },
      { es: "Taller & Laboratorio", en: "Lab Workshop" },
      { es: "Control de Inventario", en: "Frames Inventory" },
    ],
  },
  lexurcloud: {
    icon: Server,
    accentColor: "#EC4899",
    badgeColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    chips: [
      { es: "12 Microservicios en línea • Latencia 4ms", en: "12 Microservices live • Latency 4ms", tag: "CORE" },
      { es: "Replicación Multi-Región Activa", en: "Multi-Region Active Replication", tag: "CLOUD" },
      { es: "Blindaje DDoS Cloudflare Enterprise", en: "DDoS Mitigation Cloudflare Enterprise", tag: "SECURITY" },
    ],
    views: [
      { es: "Topología Cloud", en: "Cloud Topology" },
      { es: "Telemetría en Vivo", en: "Live Telemetry" },
      { es: "Ciberseguridad & Logs", en: "Security & Logs" },
    ],
  },
};

export default function SaaSShowcase() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].saas;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeSubView, setActiveSubView] = useState<number>(0);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const activeProduct = SAAS_PRODUCTS[activeIndex];
  const extras = PRODUCT_EXTRAS[activeProduct.id] || PRODUCT_EXTRAS.ferrecore;

  const handleSelectProduct = (index: number) => {
    setActiveIndex(index);
    setActiveSubView(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : SAAS_PRODUCTS.length - 1));
    setActiveSubView(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < SAAS_PRODUCTS.length - 1 ? prev + 1 : 0));
    setActiveSubView(0);
  };

  return (
    <section
      id="saas"
      className="relative w-full py-24 sm:py-32 bg-[#020306] border-t border-white/10 z-20 scroll-mt-20 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-blue-600/[0.04] blur-[160px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#3B82F6] mb-3 bg-[#0c1322] px-3.5 py-1 rounded-full border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            {t.overline}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            {t.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          {/* Quick Nav Pill Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#080b12] border border-white/10 p-1.5 rounded-full shadow-2xl">
              {SAAS_PRODUCTS.map((product, idx) => {
                const isActive = idx === activeIndex;
                const pExtra = PRODUCT_EXTRAS[product.id];
                const IconComp = pExtra?.icon || Layers;

                return (
                  <button
                    key={product.id}
                    id={`tab-saas-pill-${idx}`}
                    onClick={() => handleSelectProduct(idx)}
                    className={`relative whitespace-nowrap px-3 sm:px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "bg-white text-black font-semibold shadow-lg scale-[1.02]"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-black" : "text-zinc-400"}`} />
                    <span className="font-mono text-[10px] opacity-75">0{idx + 1}.</span>
                    <span>{product.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Layout with Sticky Desktop Workstation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Vertical Product Accordion & Narrative (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {SAAS_PRODUCTS.map((product, idx) => {
              const isActive = idx === activeIndex;
              const pExtra = PRODUCT_EXTRAS[product.id];
              const IconComp = pExtra?.icon || Layers;

              if (!isActive) {
                // Collapsed Inactive System Tab
                return (
                  <button
                    key={product.id}
                    id={`tab-saas-card-${idx}`}
                    onClick={() => handleSelectProduct(idx)}
                    className="w-full text-left p-5 rounded-2xl bg-[#07090f] hover:bg-[#0c101a] border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:scale-105 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-zinc-500 font-semibold">
                            0{idx + 1}.
                          </span>
                          <span className="font-semibold text-sm sm:text-base text-zinc-200 group-hover:text-white transition-colors">
                            {product.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-500 font-normal block mt-0.5">
                          {product.badge}
                        </span>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                );
              }

              // Active Expanded Product Card
              return (
                <div
                  key={product.id}
                  className="p-6 sm:p-7 rounded-3xl bg-[#080b14] border border-white/15 shadow-2xl relative overflow-hidden transition-all duration-300"
                >
                  {/* Subtle active left border highlight */}
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1 bg-blue-500"
                    style={{ backgroundColor: pExtra.accentColor }}
                  />

                  {/* Header Badge & Position */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md font-semibold border ${pExtra.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      SISTEMA 0{idx + 1} DE 0{SAAS_PRODUCTS.length}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 leading-snug">
                    {product.tagline[language]}
                  </h3>

                  {/* In-depth Narrative */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal mb-5">
                    {product.description[language]}
                  </p>

                  {/* Key Capabilities Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                      {t.featureLabel}
                    </span>
                    <ul className="space-y-2">
                      {product.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="font-medium leading-snug">{feat[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Telemetry Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 mb-5">
                    {product.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-center text-center"
                      >
                        <span className="text-sm sm:text-base font-mono font-bold text-white tracking-tight">
                          {m.value}
                        </span>
                        <span className="text-[10px] text-zinc-400 font-medium truncate mt-0.5">
                          {m.label[language]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href="#contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-semibold px-4 py-3 rounded-full transition-all duration-200 shadow-xl group"
                    >
                      <span>{t.demoCta}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <button
                      onClick={() => setIsZoomOpen(true)}
                      className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                      title="Ver captura en pantalla completa"
                      aria-label="Ver pantalla completa"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky High-Tech Workstation Window (lg:col-span-7) */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <div className="rounded-3xl bg-[#060810] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-300">
              {/* Workstation Top Bar */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-[#0c101c] border-b border-white/10">
                {/* Traffic Lights & Prev/Next */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                  </div>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <button
                      onClick={handlePrev}
                      className="p-1 hover:text-white transition-colors rounded hover:bg-white/5"
                      aria-label="Sistema anterior"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-1 hover:text-white transition-colors rounded hover:bg-white/5"
                      aria-label="Siguiente sistema"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* URL Address Bar */}
                <div className="flex items-center justify-center gap-2 bg-[#030408] border border-white/10 px-3.5 py-1 rounded-full text-[11px] font-mono text-zinc-300 max-w-xs sm:max-w-sm w-full mx-2 shadow-inner">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">
                    https://{activeProduct.id}.lexur.cloud/system-v4
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse shrink-0 ml-auto" />
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
                  <Activity className="w-3 h-3" />
                  <span className="hidden sm:inline font-semibold">PRODUCTION READY</span>
                </div>
              </div>

              {/* Sub-view Navigator Tabs inside Mockup */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#090d18] border-b border-white/10 text-xs overflow-x-auto scrollbar-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 mr-1">
                    MÓDULOS:
                  </span>
                  {extras.views.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSubView(i)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                        activeSubView === i
                          ? "bg-white/15 text-white font-semibold"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {v[language]}
                    </button>
                  ))}
                </div>

                <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">
                  SLA: 99.99% UPTIME
                </span>
              </div>

              {/* High-Resolution Screenshot Canvas */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/9.5] bg-[#020408] overflow-hidden group">
                <Image
                  key={activeProduct.id}
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  className="object-cover object-top transition-all duration-700 group-hover:scale-[1.01]"
                  priority
                  quality={95}
                />

                {/* Edge vignetting */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-transparent opacity-60" />

                {/* Interactive Telemetry Overlay Chips */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto z-10 flex flex-col gap-1.5 pointer-events-none">
                  {extras.chips.map((chip, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[11px] text-zinc-200 shadow-xl max-w-max"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded bg-white/10 font-bold text-blue-400">
                        {chip.tag}
                      </span>
                      <span className="font-medium truncate">{chip[language]}</span>
                    </div>
                  ))}
                </div>

                {/* Expand Hover Pill */}
                <button
                  onClick={() => setIsZoomOpen(true)}
                  className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/75 hover:bg-black/95 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-xs text-white shadow-lg transition-transform hover:scale-105"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-medium hidden sm:inline">
                    {language === "es" ? "Ver Completo" : "Expand"}
                  </span>
                </button>
              </div>

              {/* Footer Bar inside Workstation with quick link */}
              <div className="p-4 bg-[#090d18] border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span className="font-mono text-[11px]">
                    SISTEMA MULTI-INQUILINO • CONCILIACIÓN EN TIEMPO REAL
                  </span>
                </div>
                <a
                  href="#contact"
                  className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 group"
                >
                  <span>{language === "es" ? "Probar este sistema" : "Try this system"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen High-Resolution Image Lightbox Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-4 sm:p-8 animate-fade-in"
          onClick={() => setIsZoomOpen(false)}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto w-full pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-white">{activeProduct.name}</span>
              <span className="text-xs font-mono text-zinc-400 bg-white/10 px-2 py-0.5 rounded">
                {activeProduct.badge}
              </span>
            </div>
            <button
              onClick={() => setIsZoomOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="relative flex-1 max-w-7xl mx-auto w-full my-4 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeProduct.image}
              alt={activeProduct.name}
              fill
              className="object-contain"
              priority
              quality={100}
            />
          </div>
        </div>
      )}
    </section>
  );
}
