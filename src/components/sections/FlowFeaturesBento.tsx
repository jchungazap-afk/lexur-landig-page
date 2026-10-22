"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IconActivityHeartbeat,
  IconArrowUpRight,
  IconCircleCheck,
  IconCpu,
  IconDatabase,
  IconFileCheck,
  IconRefresh,
  IconShieldCheck,
  IconSparkles,
  IconTrendingUp,
  IconBolt,
} from "@tabler/icons-react";

export default function FlowFeaturesBento() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative z-20 py-20 sm:py-28 bg-black scroll-mt-20"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 space-y-4 text-center max-w-3xl mx-auto">
          <Badge variant="default" className="uppercase tracking-widest">
            <IconSparkles className="size-3.5" stroke={1.75} />
            {isEs ? "Arquitectura & Capacidades" : "Architecture & Capabilities"}
          </Badge>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-white text-balance"
          >
            {isEs
              ? "Potencia empresarial, simple de operar"
              : "Enterprise power, simple to operate"}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-[54ch] mx-auto">
            {isEs
              ? "Todo lo que necesitas para controlar ventas, inventario multi-sede, facturación electrónica y atención al cliente sin fricción."
              : "Everything you need to control sales, multi-location inventory, electronic billing, and customer care without friction."}
          </p>
        </div>

        {/* 3-Column Shadcn Flow Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Real-time Billing & Ledger */}
            <Card className="justify-between gap-8 p-6 hover:-translate-y-0.5">
              <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-lg bg-white/[0.06] text-white border border-white/10">
                      <IconFileCheck className="size-4" stroke={1.75} />
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {isEs ? "Facturación SUNAT / OSE" : "Electronic Invoicing"}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400">
                        F001-004928 · 80 ms
                      </div>
                    </div>
                  </div>
                  <Badge variant="emerald" className="text-[10px] px-2 py-0.5">
                    {isEs ? "Aceptado" : "Cleared"}
                  </Badge>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>FerreCore POS · Sede Central</span>
                    <span className="font-mono font-semibold text-white">S/ 4,850.00</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>MedClinic EHR · Consulta #742</span>
                    <span className="font-mono text-zinc-200">S/ 320.00</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>OptiVision · Lentes Progresivos</span>
                    <span className="font-mono text-zinc-200">S/ 1,190.00</span>
                  </div>
                </div>
              </div>

              <CardContent className="px-0 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {isEs ? "Operación y Caja en Tiempo Real" : "Real-Time POS & Billing"}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {isEs
                    ? "Emite comprobantes electrónicos, concilia pagos y controla cierres de caja al instante desde cualquier sucursal."
                    : "Issue electronic invoices, reconcile payments, and track register closures instantly across every branch."}
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Offline-first & High Availability */}
            <Card className="justify-between gap-8 p-6 hover:-translate-y-0.5">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex size-3">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:hidden" />
                    <span className="relative size-3 rounded-full bg-emerald-400" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {isEs ? "Modo Resiliente Activo" : "Resilient Offline Mode"}
                    </div>
                    <div className="text-[11px] text-zinc-400 font-mono">
                      {isEs ? "Sincronización automática" : "Zero data loss sync"}
                    </div>
                  </div>
                </div>
                <span className="font-mono text-lg font-bold text-white tabular-nums">
                  99.99%
                </span>
              </div>

              <CardContent className="px-0 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {isEs ? "Continuidad sin Interrupciones" : "Uninterrupted Continuity"}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {isEs
                    ? "Si tu conexión a internet falla, tu negocio sigue vendiendo y atendiendo. Todo se sincroniza al recuperar la red."
                    : "If your internet drops, your business keeps selling and serving patients. Data syncs automatically once back online."}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Column 2 (Center Hero Bento Card) */}
          <div className="flex flex-col gap-6">
            <Card className="flex-1 justify-between gap-8 p-6 border-white/20 bg-white/[0.035] hover:-translate-y-0.5">
              <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-black/50 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-white flex items-center gap-1.5">
                    <IconActivityHeartbeat className="size-4" stroke={1.75} />
                    LEXUR CLOUD CORE
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    p95 &lt; 120ms
                  </span>
                </div>

                {/* Telemetry Bars */}
                <div className="space-y-3 pt-2">
                  {[
                    {
                      label: isEs ? "Sincronización Multi-Almacén" : "Multi-Warehouse Sync",
                      pct: "98%",
                    },
                    {
                      label: isEs ? "Cifrado Clínico AES-256" : "AES-256 Clinical Encryption",
                      pct: "100%",
                    },
                    {
                      label: isEs ? "Automatización WhatsApp API" : "WhatsApp API Automation",
                      pct: "94%",
                    },
                  ].map((bar) => (
                    <div key={bar.label} className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-300">{bar.label}</span>
                        <span className="font-mono text-white">{bar.pct}</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-white"
                          style={{ width: bar.pct }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connected Nodes */}
                <div className="mt-2 grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center">
                  <div className="rounded-lg bg-white/[0.03] p-2.5 border border-white/10">
                    <IconDatabase className="size-4 mx-auto text-zinc-200 mb-1" stroke={1.75} />
                    <div className="font-mono text-xs font-semibold text-white">PostgreSQL</div>
                    <div className="text-[10px] text-zinc-400">HA Replicas</div>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] p-2.5 border border-white/10">
                    <IconBolt className="size-4 mx-auto text-zinc-200 mb-1" stroke={1.75} />
                    <div className="font-mono text-xs font-semibold text-white">Redis</div>
                    <div className="text-[10px] text-zinc-400">Sub-ms Cache</div>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] p-2.5 border border-white/10">
                    <IconShieldCheck className="size-4 mx-auto text-zinc-200 mb-1" stroke={1.75} />
                    <div className="font-mono text-xs font-semibold text-white">WAF + TLS</div>
                    <div className="text-[10px] text-zinc-400">Zero-Trust</div>
                  </div>
                </div>
              </div>

              <CardContent className="px-0 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {isEs
                    ? "Un Solo Núcleo para Toda tu Empresa"
                    : "One Unified Core for Your Entire Business"}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {isEs
                    ? "Conecta sucursales, almacenes, consultorios y talleres ópticos sobre una misma arquitectura cloud segura, auditable y escalable."
                    : "Connect branches, warehouses, clinics, and optical labs on a single secure, auditable, and scalable cloud architecture."}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 md:col-span-2 xl:col-span-1">
            {/* Card 4: Multi-warehouse stock */}
            <Card className="justify-between gap-8 p-6 hover:-translate-y-0.5">
              <div className="flex flex-col gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between text-xs text-zinc-400 pb-1">
                  <span className="font-mono uppercase">Kardex Live</span>
                  <IconRefresh className="size-3.5 text-zinc-300" stroke={1.75} />
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <div className="text-[11px] text-zinc-400">
                      {isEs ? "Rotación Mensual" : "Monthly Turnover"}
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-mono text-lg font-bold text-white">+42.8%</span>
                      <IconTrendingUp className="size-3.5 text-emerald-400" stroke={1.75} />
                    </div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <div className="text-[11px] text-zinc-400">
                      {isEs ? "Quiebres de Stock" : "Stockouts"}
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-mono text-lg font-bold text-emerald-400">-85%</span>
                      <IconCircleCheck className="size-3.5 text-emerald-400" stroke={1.75} />
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="px-0 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {isEs ? "Kardex e Inventario Inteligente" : "Smart Kardex & Inventory"}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {isEs
                    ? "Alertas de reposición mínima, control por lotes/series y transferencias entre sedes con trazabilidad completa."
                    : "Minimum restock alerts, batch/serial tracking, and inter-branch transfers with full audit trails."}
                </p>
              </CardContent>
            </Card>

            {/* Card 5: Custom Integrations */}
            <Card className="justify-between gap-8 p-6 hover:-translate-y-0.5">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-white/[0.06] text-white border border-white/10">
                    <IconCpu className="size-4 text-zinc-200" stroke={1.75} />
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {isEs ? "APIs & Desarrollo a Medida" : "APIs & Custom Engineering"}
                    </div>
                    <div className="text-[11px] text-zinc-400 font-mono">
                      REST · GraphQL · Webhooks
                    </div>
                  </div>
                </div>
                <a
                  href="#contact"
                  aria-label={isEs ? "Consultar integración" : "Inquire integration"}
                  className="grid size-8 place-items-center rounded-full border border-white/15 text-zinc-300 hover:bg-white hover:text-black transition-colors"
                >
                  <IconArrowUpRight className="size-4" stroke={1.75} />
                </a>
              </div>

              <CardContent className="px-0 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {isEs ? "Adaptado a tus Reglas de Negocio" : "Tailored to Your Business Rules"}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {isEs
                    ? "¿Necesitas un flujo único o conectar tu ERP actual? Construimos módulos a medida sobre nuestra base probada."
                    : "Need a custom workflow or ERP integration? We engineer bespoke modules on top of our battle-tested foundation."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
