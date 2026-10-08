import { SaaSProduct } from "../types";

export const SAAS_PRODUCTS: SaaSProduct[] = [
  {
    id: "ferrecore",
    name: "FerreCore Cloud POS",
    badge: "SaaS Retail & Ferreterías",
    tagline: {
      es: "Punto de Venta, Control de Inventario Multialmacén y Facturación en Milisegundos",
      en: "Point of Sale, Multi-Warehouse Inventory & Electronic Invoicing in Milliseconds",
    },
    description: {
      es: "Diseñado para ferreterías, retail técnico y distribuidoras mayoristas. Soporte offline, conciliación de caja en tiempo real y arquitectura de base de datos ultrarrápida sin caídas.",
      en: "Designed for hardware retailers, technical supply and wholesale distributors. Offline support, real-time till reconciliation and ultra-fast resilient database architecture.",
    },
    image: "/assets/ferrecore_pos_system.jpg",
    metrics: [
      { label: { es: "Latencia de Venta", en: "Checkout Latency" }, value: "< 80ms" },
      { label: { es: "Capacidad de Catálogo", en: "Catalog Capacity" }, value: "100k+ SKU" },
      { label: { es: "Disponibilidad", en: "Uptime" }, value: "99.99%" },
    ],
    features: [
      { es: "Facturación Electrónica Nativa", en: "Native Electronic Invoicing" },
      { es: "Sincronización Multisede en Vivo", en: "Live Multi-Branch Synchronization" },
      { es: "Alertas Predictivas de Stock", en: "Predictive Stock Alerts" },
      { es: "Auditoría de Movimientos y Kardex", en: "Kardex & Complete Audit Trails" },
    ],
  },
  {
    id: "medclinic",
    name: "MedClinic EHR",
    badge: "SaaS Salud & Clínicas",
    tagline: {
      es: "Expediente Clínico Electrónico, Teleconsulta y Gestión Hospitalaria Integral",
      en: "Electronic Health Records, Telehealth & Comprehensive Clinic Management",
    },
    description: {
      es: "Plataforma médica para policlínicos, centros de especialidades y consultorios privados. Agendamiento inteligente, historia médica digital cifrada y gestión de recetas con altos estándares de privacidad.",
      en: "Medical platform for clinics, specialty healthcare centers, and private practices. Smart scheduling, encrypted digital medical records, and prescription workflows complying with medical standards.",
    },
    image: "/assets/medclinic_ehr_system.jpg",
    metrics: [
      { label: { es: "Cifrado Extremo", en: "Zero Data Loss" }, value: "Zero Leak" },
      { label: { es: "Velocidad de Triaje", en: "Patient Triage Speed" }, value: "3x Más Rápido" },
      { label: { es: "Disponibilidad", en: "Cloud Uptime" }, value: "99.99%" },
    ],
    features: [
      { es: "Historias Clínicas Cifradas End-to-End", en: "End-to-End Encrypted Patient Records" },
      { es: "Agendamiento con Recordatorios WhatsApp", en: "Automated WhatsApp Appointment Reminders" },
      { es: "Módulo de Receta Médica y Diagnósticos CIE-10", en: "Prescription & ICD-10 Diagnostics Engine" },
      { es: "Panel de Métricas y Liquidación de Médicos", en: "Doctor Compensation & Telemetry Dashboards" },
    ],
  },
  {
    id: "optivision",
    name: "OptiVision Cloud",
    badge: "SaaS Ópticas & Centros Visuales",
    tagline: {
      es: "Gestión Óptica Integral: Recetas Oftalmológicas, Taller de Lunas y Facturación",
      en: "Comprehensive Optical Management: Prescription Tracking, Lens Lab & Billing",
    },
    description: {
      es: "El sistema especializado para cadenas ópticas y consultorios optométricos. Control milimétrico de parámetros de lentes (esfera, cilindro, eje, adición), trazabilidad de laboratorio y punto de venta integrado.",
      en: "Specialized ERP for optical chains and optometrists. Accurate optical prescription tracking (sphere, cylinder, axis, addition), optical lab workshop workflows, and integrated retail checkout.",
    },
    image: "/assets/optivision_eye_system.jpg",
    metrics: [
      { label: { es: "Trazabilidad de Taller", en: "Lab Tracking" }, value: "100% Control" },
      { label: { es: "Precisión de Fórmulas", en: "Prescription Accuracy" }, value: "Cero Errores" },
      { label: { es: "Gestión de Red", en: "Network Sync" }, value: "Multisede" },
    ],
    features: [
      { es: "Ficha Optométrica y Graduación Paramétrica", en: "Parametric Optometric Records" },
      { es: "Control de Pedidos a Laboratorio y Taller", en: "Optical Lab & Workshop Order Tracking" },
      { es: "Historial de Salud Visual del Paciente", en: "Patient Visual Health History" },
      { es: "Inventario de Monturas y Lunas Graduadas", en: "Frames & Prescription Lens Inventory" },
    ],
  },
  {
    id: "lexurcloud",
    name: "Lexur Cloud Core",
    badge: "Arquitectura a Medida",
    tagline: {
      es: "Infraestructura Cloud Distribuida y Microservicios de Alta Concurrencia",
      en: "Distributed Cloud Infrastructure & High-Concurrency Microservices",
    },
    description: {
      es: "El motor de ingeniería sobre el cual construimos todas las soluciones de software de LEXUR. Respaldo multi-región, APIs de alto rendimiento con latencias sub-10ms y seguridad defensiva certificada.",
      en: "The foundational core powering all LEXUR software architectures. Multi-region redundancy, high-throughput APIs with sub-10ms latencies, and certified defensive security.",
    },
    image: "/assets/lexur_cloud_system.jpg",
    metrics: [
      { label: { es: "Latencia de API", en: "API Latency" }, value: "< 10ms" },
      { label: { es: "Despliegues", en: "Continuous Deploys" }, value: "Zero Downtime" },
      { label: { es: "Nivel de Seguridad", en: "Security Level" }, value: "Enterprise" },
    ],
    features: [
      { es: "Arquitectura Serverless y Microservicios", en: "Serverless & Microservices Architecture" },
      { es: "Bases de Datos Distribuidas con Replicación", en: "Distributed Databases with Active Replication" },
      { es: "Monitoreo y Telemetría en Tiempo Real", en: "Real-Time Telemetry & Performance Monitoring" },
      { es: "Protección Anti-DDoS y Autenticación Segura", en: "Anti-DDoS Shielding & Secure Authentication" },
    ],
  },
];
