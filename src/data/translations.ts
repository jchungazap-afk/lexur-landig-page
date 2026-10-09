import { NavLink, StatItemData } from "../types";

export const NAV_LINKS: NavLink[] = [
  { key: "home", href: "#", label: { es: "Inicio", en: "Home" } },
  { key: "saas", href: "#saas", label: { es: "SaaS Propios", en: "SaaS Suite" } },
  { key: "contact", href: "#contact", label: { es: "Contacto", en: "Contact" } },
];

export const STATS_DATA: StatItemData[] = [
  {
    icon: "#",
    target: 4,
    suffix: "",
    decimals: 0,
    label: {
      es: "Sistemas SaaS Propios",
      en: "Proprietary SaaS Products",
    },
  },
  {
    icon: "+",
    target: 21,
    suffix: "+",
    decimals: 0,
    label: {
      es: "Módulos de Negocio Listos",
      en: "Ready-made Business Modules",
    },
  },
  {
    icon: "%",
    target: 99.9,
    suffix: "%",
    decimals: 1,
    label: {
      es: "Disponibilidad en Producción",
      en: "Production Uptime",
    },
  },
  {
    icon: "*",
    target: 24,
    suffix: "/7",
    decimals: 0,
    label: {
      es: "Soporte y Monitoreo",
      en: "Support & Monitoring",
    },
  },
];

export const TRANSLATIONS = {
  es: {
    hero: {
      trustPill: "Más de 2000+ empresas confían en nosotros",
      headlineLine1: "Tecnología que",
      headlineLine2: "trabaja contigo",
      subhead:
        "Sistemas SaaS y software a medida para empresas en Perú. Vende, controla tu stock y atiende a tus clientes desde un solo lugar.",
      cta: "Habla con nosotros",
    },
    partners: {
      overline: "INFRAESTRUCTURA & ALIANZAS TECNOLÓGICAS",
      title: "Proveedores y tecnologías de clase mundial que respaldan cada arquitectura",
      subtitle:
        "Garantizamos disponibilidad global, seguridad bancaria y rendimiento extremo integrando los mayores estándares del mercado.",
    },
    saas: {
      overline: "Suite de productos propios",
      title: "Sistemas SaaS empresariales listos para implementar",
      subtitle:
        "Plataformas diseñadas con arquitectura en la nube de alta disponibilidad, cero deuda técnica y soporte especializado para tu sector.",
      demoCta: "Solicitar Demostración en Vivo",
      featureLabel: "Capacidades Clave:",
      metricsLabel: "Telemetría en Producción:",
    },
    consulting: {
      overline: "CONSULTORÍA & SOFTWARE A MEDIDA",
      title: "Ingeniería de software de alta precisión para desafíos corporativos",
      subtitle:
        "Transformamos requerimientos complejos en arquitecturas digitales escalables, limpias y preparadas para soportar el crecimiento de tu empresa.",
      cta: "Cotizar Proyecto a Medida",
    },
    methodology: {
      overline: "PROCESO DE INGENIERÍA",
      title: "Cómo diseñamos y construimos tu solución",
      subtitle:
        "Un ciclo de entrega disciplinado con pruebas rigurosas, total transparencia técnica y despliegues sin interrupción de servicio.",
    },
    cases: {
      overline: "CASOS DE ÉXITO & IMPACTO",
      title: "Resultados medibles en entornos de producción reales",
      subtitle:
        "Casos verificados donde nuestras arquitecturas y sistemas SaaS transformaron radicalmente la velocidad y rentabilidad de nuestros clientes.",
    },
    ctaBanner: {
      overline: "¿LISTO PARA TRANSFORMAR TU SOFTWARE?",
      title: "Hablemos de tu próximo sistema o implementación empresarial",
      subtitle:
        "Nuestros arquitectos de software evaluarán tus requerimientos para ofrecerte la solución técnica más eficiente, segura y escalable.",
      primaryBtn: "Agendar Asesoría Técnica",
      secondaryBtn: "Ver Demostraciones SaaS",
    },
  },
  en: {
    hero: {
      trustPill: "Trusted by 2000+ Enterprises",
      headlineLine1: "Technology that",
      headlineLine2: "works with you",
      subhead:
        "SaaS systems and custom software for companies in Peru. Sell, control your stock and serve your customers from one place.",
      cta: "Talk to us",
    },
    partners: {
      overline: "INFRASTRUCTURE & TECH ALLIANCES",
      title: "World-class providers and technologies backing every software architecture",
      subtitle:
        "We guarantee global availability, bank-grade security, and extreme performance integrating industry-leading standards.",
    },
    saas: {
      overline: "Proprietary SaaS suite",
      title: "Enterprise SaaS systems ready for immediate deployment",
      subtitle:
        "Platforms engineered with high-availability cloud architecture, zero technical debt, and dedicated industry support.",
      demoCta: "Request Live Interactive Demo",
      featureLabel: "Key Capabilities:",
      metricsLabel: "Production Telemetry:",
    },
    consulting: {
      overline: "CONSULTING & CUSTOM SOFTWARE",
      title: "High-precision software engineering for corporate challenges",
      subtitle:
        "We turn complex technical requirements into scalable, clean digital architectures built to support your business expansion.",
      cta: "Request Custom Proposal",
    },
    methodology: {
      overline: "ENGINEERING METHODOLOGY",
      title: "How we architect and build your solution",
      subtitle:
        "A disciplined delivery lifecycle with rigorous testing, total architectural transparency, and zero-downtime deployments.",
    },
    cases: {
      overline: "CASE STUDIES & IMPACT",
      title: "Measurable impact in real production environments",
      subtitle:
        "Verified case studies where our custom architectures and SaaS suites radically accelerated velocity and profitability.",
    },
    ctaBanner: {
      overline: "READY TO ELEVATE YOUR SOFTWARE?",
      title: "Let's discuss your next system or enterprise deployment",
      subtitle:
        "Our principal software architects will review your technical needs to deliver the most efficient, secure, and scalable solution.",
      primaryBtn: "Book Technical Consultation",
      secondaryBtn: "Explore SaaS Demos",
    },
  },
};
