# LEXUR · Landing Web (Next.js 16)

Sitio oficial y landing page de **Lexur Corporation** — *Tecnología que trabaja contigo*.
Este proyecto ha sido migrado a una arquitectura moderna para ofrecer el máximo rendimiento, escalabilidad y capacidades de SEO.

**Stack Tecnológico:**
- Next.js 16.4.0 (App Router, Server-Side Rendering)
- React 19.3.0
- TypeScript
- Tailwind CSS v4
- Lucide React (Iconografía)

## Desarrollo Local

Para ejecutar este proyecto en tu máquina de desarrollo:

```bash
# Instalación de dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# El servidor estará disponible en http://localhost:3000

# Compilar para producción
npm run build
npm run start
```
*Requiere Node.js 20.9 o superior.*

## Arquitectura y Componentes Clave

El proyecto se estructura en la carpeta `src/`:

- **`src/app/page.tsx`**: Entrada principal (Home) que ensambla todas las secciones.
- **`src/components/`**: Módulos y componentes visuales.
  - `layout/`: `Navbar.tsx`, `Footer.tsx`
  - `hero/`: `Hero.tsx`, `CinematicScrollHero.tsx`
  - `saas/`: `SaasShowcase.tsx`, `ParticleField.tsx`, `MockupFrame.tsx`
  - `common/`: `Icons.tsx`, `LiquidGlassFx.tsx`, `ThemeToggle.tsx`
- **`src/data/`**: Base de datos estática y configuración que alimenta la interfaz.
  - `company.ts`: Datos de contacto y negocio.
  - `saasScenes.ts`: Configuración y textos de los módulos SaaS.
  - `translations.ts`: Diccionarios de internacionalización (i18n).
  - `brand.ts` / `partners.ts`: Marcas y logos.

## Configuración y Contenido (Dónde editar)

La separación de responsabilidades permite editar el contenido sin tocar la UI:

| Qué editar | Archivo |
| --- | --- |
| Contacto (WhatsApp, correo, dirección) | `src/data/company.ts` |
| Textos principales y métricas (i18n) | `src/data/translations.ts` |
| Textos, módulos y colores de la sección SaaS | `src/data/saasScenes.ts` |
| Clientes y partners (Carrusel) | `src/data/partners.ts` |
| Rutas de logos y marca | `src/data/brand.ts` |

## Despliegue (Vercel)

1. Importar el repositorio desde Vercel (**Add New → Project**).
2. Framework Preset: **Next.js** (se detecta de forma automática).
3. **Variables de Entorno (Opcional):**
   - `NEXT_PUBLIC_SITE_URL`: Dominio principal (p. ej. `https://lexur.pe`), usado para URLs canónicas y metadatos SEO.
4. Vercel gestionará los despliegues de producción para la rama `main` y vistas previas automáticas para PRs.

## Pruebas (QA) y Automatización

Pruebas end-to-end con Playwright (carpeta `test/`):

```bash
npx playwright install   # solo la primera vez
npm run test:e2e
```

El plan de calidad y rendimiento está en [`docs/QA_Performance_Plan.md`](docs/QA_Performance_Plan.md).
