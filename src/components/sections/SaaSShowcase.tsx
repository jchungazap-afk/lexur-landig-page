"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { SAAS_PRODUCTS } from "../../data/products";
import {

  NextJsIcon,
  PostgresIcon,
  TimescaleIcon,
  RedisIcon,
  TypeScriptIcon,
  TailwindIcon,
  StripeIcon,
  ReactIcon,
  GraphQlIcon,
  WhatsAppIcon,
  DockerIcon,
  PythonIcon,
  AwsIcon,
  KubernetesIcon,
  GoIcon,
  CloudflareIcon,
  KafkaIcon,
  TerraformIcon,
} from "../common/BrandIcons";
import {
  CheckCircle2,
  ArrowRight,
  Lock,
  Activity,
  Sparkles,
  Maximize2,
  X,
  Receipt,
  Stethoscope,
  Glasses,
  Server,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Layers,
  Code2,
} from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProductExtra {
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  glowColor: string;
  accentBg: string;
  badgeBorder: string;
  badgeText: string;
  liveUrl: string;
  technologies: TechItem[];
  chips: { es: string; en: string; tag: string }[];
  modules: { es: string; en: string }[];
}

const PRODUCT_EXTRAS: Record<string, ProductExtra> = {
  ferrecore: {
    icon: Receipt,
    accentColor: "#3B82F6",
    glowColor: "rgba(59, 130, 246, 0.18)",
    accentBg: "bg-blue-500/10",
    badgeBorder: "border-blue-500/30",
    badgeText: "text-blue-400",
    liveUrl: "https://ferrecore.lexur.cloud/pos-v4",
    technologies: [
      { name: "Next.js 15", category: "Framework", icon: NextJsIcon },
      { name: "PostgreSQL", category: "Database", icon: PostgresIcon },
      { name: "TimescaleDB", category: "Time-Series", icon: TimescaleIcon },
      { name: "Redis Cache", category: "In-Memory", icon: RedisIcon },
      { name: "TypeScript", category: "Language", icon: TypeScriptIcon },
      { name: "Stripe / SUNAT", category: "Billing", icon: StripeIcon },
      { name: "Tailwind CSS", category: "Styling", icon: TailwindIcon },
      { name: "WebSockets", category: "Realtime", icon: Zap },
    ],
    chips: [
      { es: "Ticket #F001-4928 Emitido en 0.08s", en: "Receipt #F001-4928 Cleared in 0.08s", tag: "POS" },
      { es: "Kardex sincronizado entre 8 almacenes", en: "Kardex synced across 8 warehouses", tag: "STOCK" },
      { es: "Modo Offline Activo sin caídas", en: "Offline Mode: 100% Resilient", tag: "OFFLINE" },
    ],
    modules: [
      { es: "Terminal de Venta", en: "POS Terminal" },
      { es: "Kardex & Almacén", en: "Warehouse Kardex" },
      { es: "Facturación SUNAT", en: "Electronic Invoicing" },
    ],
  },
  medclinic: {
    icon: Stethoscope,
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.18)",
    accentBg: "bg-emerald-500/10",
    badgeBorder: "border-emerald-500/30",
    badgeText: "text-emerald-400",
    liveUrl: "https://medclinic.lexur.cloud/ehr-v2",
    technologies: [
      { name: "React 19", category: "Frontend", icon: ReactIcon },
      { name: "TypeScript", category: "Language", icon: TypeScriptIcon },
      { name: "GraphQL API", category: "Data Layer", icon: GraphQlIcon },
      { name: "WhatsApp Cloud", category: "Messaging", icon: WhatsAppIcon },
      { name: "Cifrado AES-256", category: "Security", icon: ShieldCheck },
      { name: "Docker", category: "Containers", icon: DockerIcon },
      { name: "Tailwind CSS", category: "Styling", icon: TailwindIcon },
      { name: "Redis Cache", category: "In-Memory", icon: RedisIcon },
    ],
    chips: [
      { es: "Historia #7429 Cifrada AES-256", en: "Record #7429 AES-256 Encrypted", tag: "HIPAA" },
      { es: "Triaje digital con CIE-10", en: "Digital Triage with ICD-10", tag: "TRIAGE" },
      { es: "Recordatorio WhatsApp despachado", en: "Automated WhatsApp Reminder", tag: "TELEMED" },
    ],
    modules: [
      { es: "Expediente Clínico", en: "Patient Record" },
      { es: "Agenda & Triaje", en: "Triage & Schedule" },
      { es: "Recetas Médicas", en: "Prescription Engine" },
    ],
  },
  optivision: {
    icon: Glasses,
    accentColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.18)",
    accentBg: "bg-purple-500/10",
    badgeBorder: "border-purple-500/30",
    badgeText: "text-purple-400",
    liveUrl: "https://optivision.lexur.cloud/lab-v3",
    technologies: [
      { name: "Next.js 15", category: "Frontend", icon: NextJsIcon },
      { name: "Python Lab", category: "Optics Engine", icon: PythonIcon },
      { name: "PostgreSQL DB", category: "Relational", icon: PostgresIcon },
      { name: "Amazon AWS S3", category: "Cloud Storage", icon: AwsIcon },
      { name: "TypeScript", category: "Language", icon: TypeScriptIcon },
      { name: "Redis Cache", category: "In-Memory", icon: RedisIcon },
      { name: "Tailwind CSS", category: "Styling", icon: TailwindIcon },
      { name: "Docker K8s", category: "Containers", icon: DockerIcon },
    ],
    chips: [
      { es: "Fórmula OD: -2.25 cyl -0.50 eje 180°", en: "Prescription OD: -2.25 cyl -0.50 axis 180°", tag: "RX" },
      { es: "Laboratorio: Biselado en curso", en: "Lens Lab: Edge grinding in progress", tag: "LAB" },
      { es: "Stock: 1,480 monturas activas", en: "Frames inventory: 1,480 units live", tag: "FRAMES" },
    ],
    modules: [
      { es: "Ficha Optométrica", en: "Optometric Chart" },
      { es: "Taller & Biselado", en: "Lab Workshop" },
      { es: "Stock de Monturas", en: "Frames Inventory" },
    ],
  },
  lexurcloud: {
    icon: Server,
    accentColor: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.18)",
    accentBg: "bg-pink-500/10",
    badgeBorder: "border-pink-500/30",
    badgeText: "text-pink-400",
    liveUrl: "https://core.lexur.cloud/telemetry",
    technologies: [
      { name: "Kubernetes (K8s)", category: "Orchestration", icon: KubernetesIcon },
      { name: "Go (Golang)", category: "Microservices", icon: GoIcon },
      { name: "Cloudflare Ent.", category: "Security & WAF", icon: CloudflareIcon },
      { name: "Apache Kafka", category: "Event Streams", icon: KafkaIcon },
      { name: "Redis Cluster", category: "Caching", icon: RedisIcon },
      { name: "Terraform IaC", category: "DevOps", icon: TerraformIcon },
      { name: "Docker Engine", category: "Containers", icon: DockerIcon },
      { name: "TypeScript", category: "Language", icon: TypeScriptIcon },
    ],
    chips: [
      { es: "12 Microservicios en línea • Latencia 4ms", en: "12 Microservices live • Latency 4ms", tag: "CORE" },
      { es: "Replicación Multi-Región Activa", en: "Multi-Region Active Replication", tag: "CLOUD" },
      { es: "Blindaje DDoS Enterprise Activo", en: "DDoS Mitigation Enterprise", tag: "SECURITY" },
    ],
    modules: [
      { es: "Topología de Servicios", en: "Service Mesh" },
      { es: "Telemetría en Vivo", en: "Live Telemetry" },
      { es: "Cluster Multi-Región", en: "Multi-Region Cloud" },
    ],
  },
};

// Subcomponent for each single product with expansive GSAP-like scroll reveal
function ProductRow({
  product,
  index,
  language,
  onZoom,
}: {
  product: (typeof SAAS_PRODUCTS)[0];
  index: number;
  language: "es" | "en";
  onZoom: (img: string, title: string) => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const extra = PRODUCT_EXTRAS[product.id] || PRODUCT_EXTRAS.ferrecore;
  const isEven = index % 2 === 0; // Even: Mockup Left, Specs Right. Odd: Specs Left, Mockup Right.

  return (
    <div
      ref={rowRef}
      id={`product-${product.id}`}
      className="relative py-20 sm:py-32 border-b border-white/[0.08] last:border-b-0 scroll-mt-28"
    >
      {/* Dynamic Ambient Background Glow in Product's signature accent color */}
      <div
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[600px] blur-[170px] -z-10 rounded-full transition-opacity duration-1000"
        style={{
          left: isEven ? "20%" : "60%",
          backgroundColor: extra.glowColor,
          opacity: isVisible ? 0.9 : 0,
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
        {/* ======================================================== */}
        {/* EXPANSIVE VISUAL PANEL (Workstation Browser Frame)        */}
        {/* ======================================================== */}
        <div
          className={`lg:col-span-7 xl:col-span-7 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isEven ? "lg:order-1" : "lg:order-2"
          } ${
            isVisible
              ? "opacity-100 translate-x-0 translate-y-0 scale-100"
              : isEven
              ? "opacity-0 -translate-x-12 sm:-translate-x-16 translate-y-10 scale-[0.93]"
              : "opacity-0 translate-x-12 sm:translate-x-16 translate-y-10 scale-[0.93]"
          }`}
        >
          <div
            className="rounded-2xl sm:rounded-3xl bg-[#060810] border border-white/15 shadow-[0_32px_100px_rgba(0,0,0,0.92)] overflow-hidden transition-all duration-500 hover:border-white/30 group"
            style={{
              boxShadow: isVisible
                ? `0 24px 80px -10px rgba(0,0,0,0.9), 0 0 50px -15px ${extra.glowColor}`
                : undefined,
            }}
          >
            {/* Workstation Top Bar / OS Chrome */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0a0e1a] border-b border-white/10">
              {/* macOS Traffic Lights */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
              </div>

              {/* URL Address Bar */}
              <div className="flex items-center justify-center gap-2.5 bg-[#030408] border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono text-zinc-300 max-w-sm sm:max-w-md w-full mx-3 shadow-inner">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">{extra.liveUrl}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse shrink-0 ml-auto" />
              </div>

              {/* Status Pill */}
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full shrink-0">
                <Activity className="w-3 h-3" />
                <span className="hidden sm:inline font-semibold">99.99% UPTIME</span>
              </div>
            </div>

            {/* Interactive Module Tabs inside Workstation */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#080b14] border-b border-white/10 text-xs overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-zinc-500 mr-1 font-semibold">
                  MÓDULOS:
                </span>
                {extra.modules.map((mod, mIdx) => (
                  <button
                    key={mIdx}
                    onClick={() => setActiveModuleIndex(mIdx)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeModuleIndex === mIdx
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {mod[language]}
                  </button>
                ))}
              </div>

              <span className="text-[10px] font-mono text-zinc-400 hidden md:inline">
                SLA: HIGH AVAILABILITY
              </span>
            </div>

            {/* Expansive High-Resolution Screenshot Canvas */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] bg-[#020408] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.018]"
                sizes="(max-width: 1024px) 100vw, 65vw"
                priority={index === 0}
                quality={95}
              />

              {/* Vignette film */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-transparent opacity-65" />

              {/* Overlaid Live Telemetry Chips */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 flex flex-col gap-2 pointer-events-none">
                {extra.chips.map((chip, cIdx) => (
                  <div
                    key={cIdx}
                    className="inline-flex items-center gap-2.5 bg-black/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs text-zinc-200 shadow-2xl max-w-max"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded bg-white/10 font-bold text-blue-400">
                      {chip.tag}
                    </span>
                    <span className="font-medium truncate">{chip[language]}</span>
                  </div>
                ))}
              </div>

              {/* Fullscreen Zoom Pill */}
              <button
                onClick={() => onZoom(product.image, product.name)}
                className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-black/80 hover:bg-black/95 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs text-white shadow-xl transition-all hover:scale-105"
                title="Ampliar captura en pantalla completa"
                aria-label="Ampliar captura"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="text-xs font-medium hidden sm:inline">
                  {language === "es" ? "Pantalla Completa" : "Expand"}
                </span>
              </button>
            </div>

            {/* Bottom Workstation Bar */}
            <div className="px-5 py-3.5 bg-[#090d18] border-t border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5 text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                <span className="font-mono text-[11px] sm:text-xs">
                  {language === "es"
                    ? "ARQUITECTURA MULTI-INQUILINO • LISTO PARA PRODUCCIÓN"
                    : "MULTI-TENANT ARCHITECTURE • PRODUCTION READY"}
                </span>
              </div>
              <a
                href="#contact"
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 group/link"
              >
                <span>{language === "es" ? "Probar este sistema" : "Demo this system"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SPECIFICATIONS & TECHNOLOGIES PANEL                      */}
        {/* ======================================================== */}
        <div
          className={`lg:col-span-5 xl:col-span-5 flex flex-col transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${
            isEven ? "lg:order-2" : "lg:order-1"
          } ${
            isVisible
              ? "opacity-100 translate-x-0 translate-y-0"
              : isEven
              ? "opacity-0 translate-x-12 sm:translate-x-16 translate-y-10"
              : "opacity-0 -translate-x-12 sm:-translate-x-16 translate-y-10"
          }`}
        >
          {/* Header Row: Index counter & Sector badge */}
          <div className="flex items-center gap-3 mb-3.5">
            <span className="font-mono text-xs font-semibold text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
              0{index + 1} / 0{SAAS_PRODUCTS.length}
            </span>
            <span
              className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-md font-semibold border ${extra.accentBg} ${extra.badgeBorder} ${extra.badgeText}`}
            >
              {product.badge}
            </span>
          </div>

          {/* Product Name & Tagline */}
          <h3 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-2.5">
            {product.name}
          </h3>
          <p className="text-base sm:text-lg font-semibold text-zinc-300 mb-4 leading-snug">
            {product.tagline[language]}
          </p>

          {/* Descriptive Narrative */}
          <p className="text-sm text-zinc-400 leading-relaxed font-normal mb-6">
            {product.description[language]}
          </p>

          {/* ======================================================== */}
          {/* TECHNOLOGIES STACK WITH OFFICIAL BRAND ICONS             */}
          {/* ======================================================== */}
          <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#080b14] border border-white/10 shadow-inner">
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold">
                  {language === "es" ? "Stack & Tecnologías:" : "Stack & Technologies:"}
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">
                {extra.technologies.length} COMPONENTES
              </span>
            </div>

            {/* Grid of Technologies with Authentic Brand Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {extra.technologies.map((tech, tIdx) => {
                const TechIconComp = tech.icon;

                return (
                  <div
                    key={tIdx}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.07] transition-all duration-200 group/tech"
                  >
                    <div className="w-6 h-6 rounded-md bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover/tech:scale-110 transition-transform">
                      <TechIconComp className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-zinc-200 group-hover/tech:text-white transition-colors truncate block">
                        {tech.name}
                      </span>
                      <span className="text-[9px] text-zinc-500 font-mono truncate block">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Capabilities Checklist */}
          <div className="space-y-2.5 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block">
              {language === "es" ? "Capacidades Clave:" : "Key Capabilities:"}
            </span>
            <ul className="space-y-2">
              {product.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{feat[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Telemetry Metrics Grid */}
          <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10 mb-6">
            {product.metrics.map((m, mIdx) => (
              <div
                key={mIdx}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-center text-center hover:bg-white/[0.06] transition-colors"
              >
                <span className="text-base sm:text-lg font-mono font-bold text-white tracking-tight">
                  {m.value}
                </span>
                <span className="text-[10px] text-zinc-400 font-medium truncate mt-0.5">
                  {m.label[language]}
                </span>
              </div>
            ))}
          </div>

          {/* Actions CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-xl group/btn hover:scale-[1.01]"
            >
              <span>
                {language === "es" ? "Solicitar Demostración en Vivo" : "Request Live Demo"}
              </span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => onZoom(product.image, product.name)}
              className="inline-flex items-center justify-center p-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
              title="Ver captura en pantalla completa"
              aria-label="Ver pantalla completa"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SaaSShowcase() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].saas;
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);

  const handleZoom = (src: string, title: string) => {
    setZoomImage({ src, title });
  };

  return (
    <section
      id="saas"
      className="relative w-full py-24 sm:py-36 bg-[#020306] border-t border-white/10 z-20 scroll-mt-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-blue-600/[0.04] blur-[180px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-3/4 left-1/3 -translate-x-1/2 w-[900px] h-[550px] bg-emerald-600/[0.03] blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* Main Expansive Container */}
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
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

          {/* Quick Anchor Navigation Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#080b12] border border-white/10 p-1.5 rounded-full shadow-2xl">
              {SAAS_PRODUCTS.map((prod, idx) => {
                const extra = PRODUCT_EXTRAS[prod.id];
                const IconComp = extra?.icon || Layers;

                return (
                  <a
                    key={prod.id}
                    href={`#product-${prod.id}`}
                    className="whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 group"
                  >
                    <IconComp className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-[10px] text-zinc-500">0{idx + 1}.</span>
                    <span>{prod.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sequential Product Rows with Alternating Zigzag on Scroll */}
        <div className="space-y-6">
          {SAAS_PRODUCTS.map((product, idx) => (
            <ProductRow
              key={product.id}
              product={product}
              index={idx}
              language={language}
              onZoom={handleZoom}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen High-Resolution Image Lightbox Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-4 sm:p-8 animate-fade-in"
          onClick={() => setZoomImage(null)}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto w-full pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-base font-bold text-white">{zoomImage.title}</span>
              <span className="text-xs font-mono text-zinc-400 bg-white/10 px-2 py-0.5 rounded">
                CAPTURAS DE SISTEMA EN PRODUCCIÓN
              </span>
            </div>
            <button
              onClick={() => setZoomImage(null)}
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
              src={zoomImage.src}
              alt={zoomImage.title}
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
