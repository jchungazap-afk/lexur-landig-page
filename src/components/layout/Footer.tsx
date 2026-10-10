"use client";

import { useLanguage } from "../../context/LanguageContext";
import { SAAS_SCENES } from "../../data/saasScenes";
import { COMPANY } from "../../data/company";
import { ArrowUp } from "../common/Icons";
import BrandLogo from "../common/BrandLogo";

const T = {
  es: {
    about: "Software empresarial para empresas peruanas: sistemas empresariales listos para operar y desarrollo a medida sobre la misma base.",
    products: "Productos",
    company: "Empresa",
    contact: "Contacto",
    links: [
      { label: "Sistemas empresariales", href: "#saas" },
      { label: "Desarrollo a medida", href: "#contact" },
      { label: "Solicitar una demo", href: "#contact" },
    ],
    status: "Todos los sistemas operativos",
    rights: "Todos los derechos reservados.",
    top: "Volver arriba",
  },
  en: {
    about: "Business software for Peruvian companies: business systems ready to run, and custom development on the same foundation.",
    products: "Products",
    company: "Company",
    contact: "Contact",
    links: [
      { label: "Business systems", href: "#saas" },
      { label: "Custom development", href: "#contact" },
      { label: "Request a demo", href: "#contact" },
    ],
    status: "All systems operational",
    rights: "All rights reserved.",
    top: "Back to top",
  },
};

const linkCls =
  "text-[15px] text-zinc-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white rounded-sm";

export default function Footer() {
  const { language } = useLanguage();
  const t = T[language];

  return (
    <footer className="relative bg-black overflow-hidden">
      <div aria-hidden className="section-light opacity-60" />
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 sm:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12">
          {/* Marca */}
          <div className="col-span-2 lg:col-span-5">
            <a href="#" className="inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-white rounded-md" aria-label={`${COMPANY.name} — inicio`}>
              <BrandLogo height={32} />
            </a>
            <p className="font-heading mt-6 text-[20px] font-medium tracking-[-0.01em] text-white">
              <span className="blade mr-3 align-[-0.1em]" aria-hidden />
              {COMPANY.tagline[language]}
            </p>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.6] text-zinc-400">{t.about}</p>
          </div>

          {/* Columnas */}
          <nav aria-label={t.products} className="lg:col-span-2">
            <h2 className="mb-4 text-[13px] text-zinc-500">{t.products}</h2>
            <ul className="space-y-3">
              {SAAS_SCENES.map((s) => (
                <li key={s.id}>
                  <a href="#saas" className={linkCls}>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={t.company} className="lg:col-span-2">
            <h2 className="mb-4 text-[13px] text-zinc-500">{t.company}</h2>
            <ul className="space-y-3">
              {t.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-2 lg:col-span-3">
            <h2 className="mb-4 text-[13px] text-zinc-500">{t.contact}</h2>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${COMPANY.email}`} className={linkCls}>
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  WhatsApp {COMPANY.whatsappDisplay}
                </a>
                <span className="block mt-1 text-[13px] text-zinc-500">{COMPANY.whatsappUser}</span>
              </li>
              <li className="text-[15px] text-zinc-400">{COMPANY.city[language]}</li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-16 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 py-6 text-[13px] text-zinc-500">
          <p>
            © 2026 {COMPANY.legalName} {t.rights}
          </p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping motion-reduce:hidden" />
                <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              {t.status}
            </span>
            <a href="#" className="group inline-flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white rounded-sm">
              {t.top}
              <ArrowUp className="w-3.5 h-3.5 icon-rise" />
            </a>
          </div>
        </div>
      </div>

      {/* Firma tipográfica: la marca, grande y recortada al borde inferior */}
      <div aria-hidden className="select-none pointer-events-none max-w-[1240px] mx-auto px-5 sm:px-8 -mb-[0.22em] leading-[0.8]">
        <span className="footer-wordmark block text-[clamp(5rem,23vw,20rem)] font-semibold tracking-[-0.07em] text-center">
          LEXUR
        </span>
      </div>
    </footer>
  );
}
