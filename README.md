# luxer-landing-page

> **LEXUR CORP** — Enterprise Software Solutions, High-Precision Cloud Architecture & SaaS Suites.

Landing page oficial de **LEXUR CORP**, desarrollada con arquitectura modular en **React + Next.js App Router (TypeScript + Tailwind CSS)**.

---

## ⚡ Características Principales

- 🎥 **Full-Bleed Video Background**: Video de alta definición en loop continuo optimizado para alto rendimiento.
- 🌐 **Soporte Bilingüe Nativo (ES / EN)**: Selector instantáneo de idioma sin recarga de página, con persistencia local (`localStorage`) y textos oficiales para consultoría empresarial de software.
- 🎯 **Landing Pura (Sin Login)**: Enfoque 100% de conversión y presentación corporativa con Navbar limpio.
- 📊 **Telemetría & Métricas Interactivas**: Contadores dinámicos animados con interpolación cúbica (`easeOutCubic`) para tiempos de inferencia, disponibilidad cloud y contexto.
- 🤝 **Carrusel de Proveedores (Partners Marquee)**:
  - Ticker monocromático continuo integrado en la base del Hero.
  - Sección ampliada con marquesina infinita para AWS, Google Cloud, Azure, Stripe, PostgreSQL, Vercel, Docker, Cloudflare, Supabase y Redis.
- 🎨 **Estilo "Precision Dark"**: Cero degradados agresivos o desenfoques pesados; superficies sólidas, bordes hairline de 1px y tipografía retro dot-matrix (*BubbledotICG-FinePos* / *Geist Pixel Circle*).

---

## 🏗️ Arquitectura del Proyecto

```text
lexurpe-web/
├── public/
│   ├── assets/
│   │   └── logo.webp                  # Isotipo circular oficial de LEXUR
│   └── fonts/
│       └── GeistPixel-Circle.woff2    # Tipografía Geist Pixel Circle (fallback display)
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Fuentes (Inter, Bubbledot, FontAwesome) + LanguageProvider
│   │   ├── globals.css                # Tokens de diseño, animaciones y estilos de precisión
│   │   ├── page.tsx                   # Ensamblador principal de la Landing Page
│   │   └── partners/page.tsx          # Vista dedicada para el catálogo de partners
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Header flotante, logo L, selector ES/EN y menú móvil
│   │   │   └── Footer.tsx             # Estado operativo 99.99% Uptime y copyright corporativo
│   │   ├── hero/
│   │   │   ├── Hero.tsx               # Video background + composición principal del Hero
│   │   │   ├── TrustRow.tsx           # Anillos de avatares (MS, Amazon, Google) + Trust pill
│   │   │   ├── Headline.tsx           # Titular retro dot-matrix con animaciones escalonadas
│   │   │   ├── Subhead.tsx            # Subtítulo editorial para consultoría de software
│   │   │   └── CtaButton.tsx          # Botón de acción con resplandor suave
│   │   ├── stats/
│   │   │   └── StatsFooter.tsx        # Métricas de telemetría y contadores numéricos
│   │   └── partners/
│   │       ├── HeroPartnersTicker.tsx # Ticker fluido de proveedores al pie del Hero
│   │       └── PartnersCarousel.tsx   # Sección completa con marquesina infinita
│   ├── context/
│   │   └── LanguageContext.tsx        # Contexto reactivo de idioma (ES / EN)
│   ├── data/
│   │   ├── translations.ts            # Diccionario tipado en español e inglés
│   │   └── partners.ts                # Proveedores cloud y socios de infraestructura
│   └── types/
│       └── index.ts                   # Tipado estricto en TypeScript
├── package.json
└── tsconfig.json
```

---

## 🚀 Inicio Rápido

### 1. Instalación de dependencias
```bash
npm install
```

### 2. Modo desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Compilación para Producción (Vercel / Netlify)
```bash
npm run build
npm start
```

---

## 📦 Despliegue en Vercel o Netlify

El proyecto está configurado para desplegarse automáticamente sin configuración adicional:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

---

## 📄 Licencia

© 2026 LEXUR Software Solutions Corp. Todos los derechos reservados.
