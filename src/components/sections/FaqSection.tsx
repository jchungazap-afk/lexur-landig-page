"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { IconChevronDown, IconHelpCircle } from "@tabler/icons-react";

interface FaqItem {
  id: string;
  q: { es: string; en: string };
  a: { es: string; en: string };
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-lexur",
    q: {
      es: "¿Cuánto tiempo toma implementar un sistema empresarial de LEXUR?",
      en: "How long does it take to deploy a LEXUR business system?",
    },
    a: {
      es: "Nuestros sistemas propios (FerreCore, MedClinic EHR, OptiVision Cloud) están listos para operar en menos de 48 a 72 horas, incluyendo migración de catálogo o pacientes, configuración de series SUNAT y capacitación a tu equipo.",
      en: "Our proprietary systems (FerreCore, MedClinic EHR, OptiVision Cloud) are ready to run within 48 to 72 hours, including catalog or patient migration, electronic billing setup, and staff onboarding.",
    },
  },
  {
    id: "sunat-billing",
    q: {
      es: "¿Incluye facturación electrónica SUNAT sin costo por comprobante?",
      en: "Does it include electronic invoicing with unlimited documents?",
    },
    a: {
      es: "Sí. Todos nuestros planes empresariales incluyen emisión ilimitada de boletas, facturas, notas de crédito y guías de remisión electrónicas conectadas directamente a SUNAT / OSE.",
      en: "Yes. Every enterprise plan includes unlimited electronic receipts, invoices, credit notes, and waybills connected directly to tax authorities.",
    },
  },
  {
    id: "multi-branch",
    q: {
      es: "¿Puedo controlar varias sucursales o almacenes al mismo tiempo?",
      en: "Can I manage multiple branches or warehouses simultaneously?",
    },
    a: {
      es: "Por supuesto. La arquitectura multi-sede sincroniza stock, precios, traslados y cajas en tiempo real. Puedes auditar cada tienda desde tu celular o computadora.",
      en: "Absolutely. Our multi-branch architecture syncs stock, pricing, transfers, and registers in real time. You can audit every location from your phone or desktop.",
    },
  },
  {
    id: "custom-modules",
    q: {
      es: "¿Pueden adaptar el sistema a los procesos propios de mi empresa?",
      en: "Can you customize the platform to fit our specific workflows?",
    },
    a: {
      es: "Sí. A diferencia de los sistemas cerrados, somos los ingenieros autores de cada plataforma. Podemos desarrollar módulos a medida, reportes específicos o integraciones con tu contabilidad.",
      en: "Yes. Unlike closed third-party tools, we are the core engineers behind every platform. We build custom modules, bespoke reports, and ERP/accounting integrations.",
    },
  },
  {
    id: "security-backups",
    q: {
      es: "¿Qué tan seguros están mis datos y copias de seguridad?",
      en: "How secure are my business data and backups?",
    },
    a: {
      es: "Toda la información viaja cifrada con TLS 1.3 y se almacena con cifrado AES-256 en servidores cloud redundantes con copias de seguridad automáticas diarias y disponibilidad del 99.99%.",
      en: "All data is encrypted in transit via TLS 1.3 and at rest with AES-256 on redundant cloud servers with automated daily backups and 99.99% uptime SLA.",
    },
  },
  {
    id: "support-sla",
    q: {
      es: "¿Cómo funciona el soporte técnico si mi equipo tiene una duda?",
      en: "How does technical support work if my team needs help?",
    },
    a: {
      es: "Contamos con soporte directo por WhatsApp y canal técnico en Perú con tiempo de respuesta menor a 15 minutos en horario comercial y monitoreo 24/7 de infraestructura.",
      en: "We provide direct WhatsApp and technical support with response times under 15 minutes during business hours plus 24/7 infrastructure monitoring.",
    },
  },
];

export default function FaqSection() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const leftCol = FAQ_ITEMS.slice(0, 3);
  const rightCol = FAQ_ITEMS.slice(3, 6);

  const renderColumn = (items: FaqItem[]) => (
    <div data-slot="accordion" className="flex flex-col w-full divide-y divide-white/10 border-y border-white/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            data-slot="accordion-item"
            data-state={isOpen ? "open" : "closed"}
            className="py-1"
          >
            <h3 className="flex">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                data-slot="accordion-trigger"
                className="group flex flex-1 items-center justify-between gap-4 py-4 text-left text-[16px] font-medium text-white transition-colors hover:text-zinc-300 focus-visible:outline-2 focus-visible:outline-white rounded-sm"
              >
                <span>{item.q[language]}</span>
                <IconChevronDown
                  stroke={1.75}
                  className={`size-4 shrink-0 text-zinc-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>
            </h3>
            {isOpen && (
              <div
                data-slot="accordion-content"
                className="pb-4 pr-6 text-sm sm:text-[15px] leading-relaxed text-zinc-400"
              >
                {item.a[language]}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative z-20 py-20 sm:py-28 bg-black scroll-mt-20"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 space-y-4 text-center max-w-2xl mx-auto">
          <Badge variant="default" className="uppercase tracking-widest">
            <IconHelpCircle className="size-3.5" stroke={1.75} />
            FAQ
          </Badge>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-white text-balance"
          >
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            {isEs
              ? "Respuestas claras sobre implementación, facturación electrónica, seguridad y soporte técnico."
              : "Clear answers on deployment, electronic invoicing, security, and technical support."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
          {renderColumn(leftCol)}
          {renderColumn(rightCol)}
        </div>
      </div>
    </section>
  );
}
