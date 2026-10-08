import { ConsultingService, MethodologyStep, CaseStudy } from "../types";

export const CONSULTING_SERVICES: ConsultingService[] = [
  {
    id: "cloud-architecture",
    iconName: "Cloud",
    title: {
      es: "Arquitectura Cloud & Microservicios",
      en: "Cloud Architecture & Microservices",
    },
    description: {
      es: "Diseñamos e implementamos arquitecturas elásticas en AWS, Google Cloud y Azure. Cero cuellos de botella, auto-escalado dinámico y resiliencia probada para soportar millones de transacciones continuas.",
      en: "We architect and deploy elastic systems on AWS, GCP, and Azure. Zero bottlenecks, dynamic auto-scaling, and verified resilience handling millions of uninterrupted transactions.",
    },
    tags: ["Kubernetes", "Serverless", "Event-Driven", "Docker", "Terraform"],
  },
  {
    id: "multiplatform-dev",
    iconName: "Smartphone",
    title: {
      es: "Desarrollo Multiplataforma (Web, Mobile & Desktop)",
      en: "Multiplatform Engineering (Web, Mobile & Desktop)",
    },
    description: {
      es: "Construimos aplicaciones nativas y multiplataforma de alta precisión con Next.js, React, Flutter, Compose y Tauri. Rendimiento sostenido a 60/120 FPS sin bloqueos ni consumo desmedido de memoria.",
      en: "High-precision native and multiplatform software with Next.js, React, Flutter, Compose, and Tauri. Sustained 60/120 FPS fluid performance with zero memory leaks.",
    },
    tags: ["Next.js", "Flutter", "Jetpack Compose", "SwiftUI", "TypeScript"],
  },
  {
    id: "legacy-modernization",
    iconName: "Cpu",
    title: {
      es: "Modernización de Sistemas & Cero Deuda Técnica",
      en: "Legacy Modernization & Zero Technical Debt",
    },
    description: {
      es: "Eliminamos deuda técnica estructural. Migramos sistemas monolíticos obsoletos a microservicios modernos, tipados y seguros sin detener ni un solo minuto la operación diaria de tu negocio.",
      en: "Eliminate structural technical debt. We migrate outdated legacy monoliths into modern, type-safe microservices with zero downtime during business operations.",
    },
    tags: ["Refactoring", "Clean Architecture", "Zero Downtime", "SQL Tuning"],
  },
  {
    id: "security-audit",
    iconName: "ShieldCheck",
    title: {
      es: "Ciberseguridad Defensiva & Auditoría de Código",
      en: "Defensive Cybersecurity & Code Auditing",
    },
    description: {
      es: "Blindaje contra vulnerabilidades OWASP Top 10, pruebas de penetración en caja blanca, políticas estrictas CSP, cifrado avanzado en reposo/tránsito y auditoría de permisos RBAC.",
      en: "Protection against OWASP Top 10 vulnerabilities, white-box penetration testing, strict CSP headers, advanced encryption in transit/at rest, and RBAC privilege control.",
    },
    tags: ["Pen-Testing", "OWASP", "Encryption", "RBAC", "Zero Trust"],
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: "01",
    title: {
      es: "Diagnóstico & Auditoría de Requerimientos",
      en: "Diagnosis & Technical Requirements Audit",
    },
    description: {
      es: "Analizamos la infraestructura actual, identificamos cuellos de botella y definimos un roadmap técnico sin ambigüedades ni sobrecostos.",
      en: "We analyze current architecture, detect critical bottlenecks, and establish an actionable technical roadmap with zero ambiguity.",
    },
  },
  {
    step: "02",
    title: {
      es: "Arquitectura & Estándares de Ingeniería",
      en: "Architecture & Engineering System Design",
    },
    description: {
      es: "Modelamos esquemas de datos relacionales, microservicios distribuidos y design tokens antes de escribir la primera línea de código de negocio.",
      en: "We model relational database schemas, distributed services, and design tokens before writing a single line of business code.",
    },
  },
  {
    step: "03",
    title: {
      es: "Desarrollo Ágil con CI/CD & Testing Continuo",
      en: "Agile Development with CI/CD & Automated Testing",
    },
    description: {
      es: "Sprints enfocados con entregables funcionales cada semana. Pruebas unitarias, de integración y revisión estricta de seguridad en cada commit.",
      en: "Focused sprints with functional deliverables every week. Unit testing, component tests, and strict security linting on every commit.",
    },
  },
  {
    step: "04",
    title: {
      es: "Despliegue Zero-Downtime & Soporte 24/7",
      en: "Zero-Downtime Deployment & 24/7 Telemetry",
    },
    description: {
      es: "Lanzamiento a producción con pipelines automatizados, telemetría de latencia en vivo y monitoreo preventivo continuo.",
      en: "Production launch with automated pipelines, live latency telemetry, and proactive continuous uptime monitoring.",
    },
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-ferrecore",
    client: "Distribuidora & Cadena Ferretera Nacional",
    sector: { es: "Retail & Cadena de Suministro", en: "Retail & Supply Chain" },
    metric: "+340%",
    metricLabel: { es: "Aceleración en Emisión de Comprobantes", en: "Checkout & Invoicing Speedup" },
    summary: {
      es: "Migración de sistema desktop legacy a FerreCore Cloud POS con sincronización de inventario en tiempo real entre 8 almacenes y facturación offline garantizada.",
      en: "Migration from a legacy desktop system to FerreCore Cloud POS with live inventory sync across 8 warehouses and guaranteed offline POS checkout.",
    },
  },
  {
    id: "case-medclinic",
    client: "Red de Policlínicos & Centros Médicos",
    sector: { es: "Salud & Servicios Médicos", en: "Healthcare & Specialized Clinics" },
    metric: "-65%",
    metricLabel: { es: "Reducción en Tiempo de Espera de Pacientes", en: "Patient Wait Time Reduction" },
    summary: {
      es: "Implementación de MedClinic EHR con expedientes médicos cifrados, triaje automatizado y recordatorios automáticos reduciendo el ausentismo a menos del 4%.",
      en: "Deployment of MedClinic EHR with encrypted health records, automated triage, and appointment reminders cutting no-shows to under 4%.",
    },
  },
  {
    id: "case-optivision",
    client: "Grupo Óptico & Laboratorio Oftalmológico",
    sector: { es: "Salud Visual & Manufactura", en: "Optical Care & Lens Manufacturing" },
    metric: "99.99%",
    metricLabel: { es: "Trazabilidad de Fórmulas y Pedidos", en: "Prescription & Lab Accuracy" },
    summary: {
      es: "Integración de OptiVision Cloud para conectar consultorios optométricos directamente con el taller de corte y montaje de lunas, eliminando devoluciones por errores manuales.",
      en: "OptiVision Cloud integration connecting optometrist consultation rooms directly to the lens lab workshop, eliminating prescription formula errors.",
    },
  },
];
