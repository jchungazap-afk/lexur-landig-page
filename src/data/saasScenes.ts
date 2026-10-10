import type { ComponentType } from "react";
import {
  ToolboxDuo,
  StethoscopeDuo,
  EyeglassesDuo,
  HardDrivesDuo,
  ShieldCheckDuo,
  LightningDuo,
} from "../components/common/Icons";
import {
  NextJsIcon,
  PostgresIcon,
  RedisIcon,
  TypeScriptIcon,
  TailwindIcon,
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
  TimescaleIcon,
} from "../components/common/BrandIcons";

type Localized = { es: string; en: string };

export interface SaasStackItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

export interface SaasLink {
  label: Localized;
  href: string;
  /** primary = botón sólido, secondary = botón contorno */
  variant: "primary" | "secondary";
  external?: boolean;
}

export interface SaasGradient {
  /** Colores del degradado (de arriba a abajo según el ángulo) */
  colors: [string, string, string];
  /** Ángulo CSS en grados */
  angle: number;
  /** Color del halo de luz detrás del mockup */
  glow: string;
}

export interface SaasScene {
  id: string;
  name: string;
  icon: ComponentType<{ className?: string }>;
  /** Sector / categoría corta (overline) */
  sector: Localized;
  /** Qué es, en una frase */
  tagline: Localized;
  /** A quién va dirigido */
  audience: Localized;
  description: Localized;
  /** Lado al que se desplaza el mockup en desktop. El panel entra por el lado opuesto. */
  side: "left" | "right";
  gradient: SaasGradient;
  /** Color de producto (manual LEXUR §9: cambia solo el color final del degradado) */
  accent: string;
  image: {
    src: string;
    /** Dimensiones reales del archivo: definen la proporción del marco (sin recortes) */
    width: number;
    height: number;
    alt: Localized;
  };
  /** Texto que se muestra en la barra de URL del marco del navegador */
  url: string;
  modules: Localized[];
  stack: SaasStackItem[];
  metrics: { value: string; label: Localized }[];
  links: SaasLink[];
  /** Duración de la escena en alturas de pantalla (100vh). Por defecto: 3.2 */
  scrollLength?: number;
}

export const SAAS_SCENES: SaasScene[] = [
  {
    id: "ferrecore",
    name: "FerreCore",
    icon: ToolboxDuo,
    sector: { es: "Ferreterías & Retail técnico", en: "Hardware stores & technical retail" },
    tagline: {
      es: "El sistema de gestión que tu ferretería necesita: vende, controla stock y cotiza desde un solo lugar.",
      en: "The management system your hardware store needs: sell, control stock and quote from one place.",
    },
    audience: {
      es: "Para ferreterías, distribuidoras de materiales y cadenas con varios almacenes.",
      en: "For hardware stores, building-supply distributors and multi-warehouse chains.",
    },
    description: {
      es: "Punto de venta rápido, inventario multialmacén con alertas de stock mínimo, gestión de proveedores y cotizaciones que se convierten en venta con un clic. Funciona incluso sin internet.",
      en: "Fast point of sale, multi-warehouse inventory with minimum-stock alerts, supplier management and quotes that turn into sales in one click. Works even offline.",
    },
    side: "left",
    gradient: { colors: ["#081634", "#060f26", "#050d20"], angle: 160, glow: "rgba(47,107,234,0.30)" },
    accent: "#f5a524",
    image: {
      src: "/assets/ferrecore_pos_system.jpg",
      width: 1376,
      height: 768,
      alt: {
        es: "Pantalla del punto de venta de FerreCore con catálogo, carrito y totales",
        en: "FerreCore point-of-sale screen with catalog, cart and totals",
      },
    },
    url: "app.ferrecore.lexur.cloud/pos",
    modules: [
      { es: "Inventario multialmacén", en: "Multi-warehouse inventory" },
      { es: "Punto de venta", en: "Point of sale" },
      { es: "Proveedores", en: "Suppliers" },
      { es: "Cotizaciones", en: "Quotes" },
      { es: "Control de stock mínimo", en: "Minimum-stock control" },
      { es: "Reportes", en: "Reports" },
    ],
    // ← Stack de ejemplo: edítalo libremente
    stack: [
      { name: "Next.js", icon: NextJsIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "TimescaleDB", icon: TimescaleIcon },
      { name: "Redis", icon: RedisIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
    metrics: [
      { value: "< 80 ms", label: { es: "por venta", en: "per checkout" } },
      { value: "100k+", label: { es: "productos (SKU)", en: "SKUs supported" } },
      { value: "99.9%", label: { es: "disponibilidad", en: "uptime" } },
    ],
    links: [
      { label: { es: "Solicitar demo", en: "Request a demo" }, href: "#contact", variant: "primary" },
      { label: { es: "Ver más detalles", en: "See details" }, href: "#contact", variant: "secondary" },
    ],
  },
  {
    id: "medclinic",
    name: "MedClinic EHR",
    icon: StethoscopeDuo,
    sector: { es: "Salud & Clínicas", en: "Healthcare & Clinics" },
    tagline: {
      es: "Historia clínica electrónica, agenda y recetas en una plataforma segura.",
      en: "Electronic health records, scheduling and prescriptions on one secure platform.",
    },
    audience: {
      es: "Para policlínicos, centros de especialidades y consultorios privados.",
      en: "For polyclinics, specialty centers and private practices.",
    },
    description: {
      es: "Agenda inteligente con recordatorios por WhatsApp, historia clínica cifrada, triaje digital con CIE-10 y liquidación de honorarios médicos.",
      en: "Smart scheduling with WhatsApp reminders, encrypted medical records, digital triage with ICD-10 and doctor fee settlement.",
    },
    side: "right",
    gradient: { colors: ["#081634", "#060f26", "#050d20"], angle: 200, glow: "rgba(22,198,204,0.22)" },
    accent: "#1fbf86",
    image: {
      src: "/assets/medclinic_ehr_system.jpg",
      width: 1376,
      height: 768,
      alt: { es: "Panel de MedClinic EHR con agenda y fichas de pacientes", en: "MedClinic EHR dashboard with schedule and patient records" },
    },
    url: "app.medclinic.lexur.cloud/ehr",
    modules: [
      { es: "Historia clínica", en: "Medical records" },
      { es: "Agenda & triaje", en: "Scheduling & triage" },
      { es: "Recetas & CIE-10", en: "Prescriptions & ICD-10" },
      { es: "Recordatorios WhatsApp", en: "WhatsApp reminders" },
      { es: "Liquidación médica", en: "Doctor settlements" },
    ],
    stack: [
      { name: "React 19", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "GraphQL", icon: GraphQlIcon },
      { name: "WhatsApp API", icon: WhatsAppIcon },
      { name: "AES-256", icon: ShieldCheckDuo },
      { name: "Docker", icon: DockerIcon },
    ],
    metrics: [
      { value: "3×", label: { es: "triaje más rápido", en: "faster triage" } },
      { value: "AES-256", label: { es: "cifrado de datos", en: "data encryption" } },
      { value: "99.9%", label: { es: "disponibilidad", en: "uptime" } },
    ],
    links: [
      { label: { es: "Solicitar demo", en: "Request a demo" }, href: "#contact", variant: "primary" },
      { label: { es: "Contactar", en: "Contact us" }, href: "#contact", variant: "secondary" },
    ],
  },
  {
    id: "optivision",
    name: "OptiVision Cloud",
    icon: EyeglassesDuo,
    sector: { es: "Ópticas & Centros visuales", en: "Optical stores & eye-care" },
    tagline: {
      es: "Gestión óptica integral: fórmulas, taller de lunas y venta.",
      en: "End-to-end optical management: prescriptions, lens lab and sales.",
    },
    audience: {
      es: "Para cadenas ópticas y consultorios optométricos.",
      en: "For optical chains and optometry practices.",
    },
    description: {
      es: "Ficha optométrica paramétrica (esfera, cilindro, eje, adición), trazabilidad de pedidos al laboratorio e inventario de monturas y lunas en todas las sedes.",
      en: "Parametric optometric charts (sphere, cylinder, axis, add), lab order tracking and frame & lens inventory across every branch.",
    },
    side: "left",
    gradient: { colors: ["#081634", "#060f26", "#050d20"], angle: 150, glow: "rgba(47,107,234,0.30)" },
    accent: "#8b6cff",
    image: {
      src: "/assets/optivision_eye_system.jpg",
      width: 1376,
      height: 768,
      alt: { es: "Ficha optométrica en OptiVision Cloud", en: "Optometric chart in OptiVision Cloud" },
    },
    url: "app.optivision.lexur.cloud/lab",
    modules: [
      { es: "Ficha optométrica", en: "Optometric chart" },
      { es: "Taller & biselado", en: "Lab & edging" },
      { es: "Stock de monturas", en: "Frame inventory" },
      { es: "Punto de venta", en: "Point of sale" },
      { es: "Multisede", en: "Multi-branch" },
    ],
    stack: [
      { name: "Next.js", icon: NextJsIcon },
      { name: "Python", icon: PythonIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "AWS S3", icon: AwsIcon },
      { name: "Redis", icon: RedisIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
    metrics: [
      { value: "100%", label: { es: "trazabilidad", en: "traceability" } },
      { value: "0", label: { es: "errores de fórmula", en: "Rx errors" } },
      { value: "N sedes", label: { es: "sincronizadas", en: "in sync" } },
    ],
    links: [
      { label: { es: "Solicitar demo", en: "Request a demo" }, href: "#contact", variant: "primary" },
      { label: { es: "Contactar", en: "Contact us" }, href: "#contact", variant: "secondary" },
    ],
  },
  {
    id: "lexurcloud",
    name: "Lexur Cloud Core",
    icon: HardDrivesDuo,
    sector: { es: "Infraestructura a medida", en: "Custom infrastructure" },
    tagline: {
      es: "El motor cloud sobre el que corren todos nuestros sistemas.",
      en: "The cloud engine that powers every one of our systems.",
    },
    audience: {
      es: "Para empresas que necesitan alta concurrencia y cero caídas.",
      en: "For companies that need high concurrency and zero downtime.",
    },
    description: {
      es: "Microservicios de alta concurrencia, replicación multi-región, telemetría en vivo y protección anti-DDoS. Despliegues continuos sin interrupciones.",
      en: "High-concurrency microservices, multi-region replication, live telemetry and anti-DDoS protection. Continuous deploys with zero downtime.",
    },
    side: "right",
    gradient: { colors: ["#081634", "#060f26", "#050d20"], angle: 210, glow: "rgba(22,198,204,0.24)" },
    accent: "#16c6cc",
    image: {
      src: "/assets/lexur_cloud_system.jpg",
      width: 1376,
      height: 768,
      alt: { es: "Telemetría de servicios en Lexur Cloud Core", en: "Service telemetry in Lexur Cloud Core" },
    },
    url: "core.lexur.cloud/telemetry",
    modules: [
      { es: "Service mesh", en: "Service mesh" },
      { es: "Telemetría en vivo", en: "Live telemetry" },
      { es: "Multi-región", en: "Multi-region" },
      { es: "Anti-DDoS & WAF", en: "Anti-DDoS & WAF" },
      { es: "CI/CD sin caídas", en: "Zero-downtime CI/CD" },
    ],
    stack: [
      { name: "Kubernetes", icon: KubernetesIcon },
      { name: "Go", icon: GoIcon },
      { name: "Kafka", icon: KafkaIcon },
      { name: "Cloudflare", icon: CloudflareIcon },
      { name: "Terraform", icon: TerraformIcon },
      { name: "Edge", icon: LightningDuo },
    ],
    metrics: [
      { value: "< 10 ms", label: { es: "latencia de API", en: "API latency" } },
      { value: "0", label: { es: "caídas en deploy", en: "deploy downtime" } },
      { value: "24/7", label: { es: "monitoreo", en: "monitoring" } },
    ],
    links: [
      { label: { es: "Hablemos de tu proyecto", en: "Let's talk" }, href: "#contact", variant: "primary" },
    ],
  },
];
