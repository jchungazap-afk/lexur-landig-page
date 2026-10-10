import { NavLink, StatItemData } from "../types";

export const NAV_LINKS: NavLink[] = [
  { key: "home", href: "#", label: { es: "Inicio", en: "Home" } },
  { key: "solutions", href: "#solutions", label: { es: "Soluciones", en: "Product" } },
  { key: "cases", href: "#case-studies", label: { es: "Casos de Éxito", en: "Case Studies" } },
  { key: "contact", href: "#contact", label: { es: "Contacto", en: "Contact" } },
];

export const STATS_DATA: StatItemData[] = [
  {
    icon: "<",
    target: 120,
    suffix: "ms",
    decimals: 0,
    label: {
      es: "Tiempo de Respuesta",
      en: "Inference Time",
    },
  },
  {
    icon: "%",
    target: 99.99,
    suffix: "%",
    decimals: 2,
    label: {
      es: "Disponibilidad Cloud",
      en: "Platform Uptime",
    },
  },
  {
    icon: "*",
    target: 24,
    suffix: "/7",
    decimals: 0,
    label: {
      es: "Operatividad Continua",
      en: "Autonomous Runtime",
    },
  },
  {
    icon: "#",
    target: 2.4,
    suffix: "M",
    decimals: 1,
    label: {
      es: "Capacidad de Contexto",
      en: "Context Windows",
    },
  },
];

export const TRANSLATIONS = {
  es: {
    hero: {
      trustPill: "Más de 2000+ empresas confían en nosotros",
      headlineLine1: "Inteligencia",
      headlineLine2: "Construida Para Evolucionar",
      subhead:
        "Construimos aplicaciones que razonan, se adaptan y colaboran utilizando una plataforma modular de software e inteligencia artificial de alto rendimiento para consultoría empresarial.",
      cta: "Comenzar Ahora",
    },
    partners: {
      overline: "INFRAESTRUCTURA & ALIANZAS TECNOLÓGICAS",
      title: "Proveedores y tecnologías de clase mundial que respaldan cada arquitectura",
      subtitle:
        "Garantizamos disponibilidad global, seguridad bancaria y rendimiento extremo integrando los mayores estándares del mercado.",
    },
  },
  en: {
    hero: {
      trustPill: "Trusted by 2000+ Enterprises",
      headlineLine1: "Intelligence",
      headlineLine2: "Designed To Evolve",
      subhead:
        "Build applications that reason, adapt and collaborate using a modular AI platform designed for production.",
      cta: "Get Started",
    },
    partners: {
      overline: "INFRASTRUCTURE & TECH ALLIANCES",
      title: "World-class providers and technologies backing every software architecture",
      subtitle:
        "We guarantee global availability, bank-grade security, and extreme performance integrating industry-leading standards.",
    },
  },
};
