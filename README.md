# LEXUR · Landing

Sitio de **Lexur Corporation** — *Tecnología que trabaja contigo*.
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
```

Requiere Node.js 20.9 o superior.

## Despliegue en Vercel

1. En Vercel: **Add New → Project** e importa `Lexur-Software-Solutions/lxss-optix-landing`.
2. Framework: **Next.js** (se detecta solo). No hace falta cambiar comandos.
3. Variable de entorno opcional: `NEXT_PUBLIC_SITE_URL` = dominio final (p. ej. `https://lexur.pe`), usada para las URLs absolutas de metadatos y redes.
4. Cada push a `main` despliega producción; cada rama/PR, una vista previa.

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Contacto (WhatsApp, correo, ciudad, horario) | `src/data/company.ts` |
| Sistemas SaaS: textos, módulos, stack, métricas, color, lado | `src/data/saasScenes.ts` |
| Ritmo del scroll de la sección SaaS | `src/components/saas/timeline.ts` |
| Textos del hero y métricas | `src/data/translations.ts` |
| Paleta, temas claro/oscuro, botones de marca | `src/app/globals.css` (bloque «MARCA LEXUR») |
| Archivos del logo | `public/brand/` (rutas en `src/data/brand.ts`) |
| Iconos (Phosphor, incrustados) | `src/components/common/Icons.tsx` |

## Marca

Manual de identidad LEXUR v2: Navy `#0A1E45`, Azul `#2F6BEA`, Cian `#16C6CC`, Niebla `#EEF2F8`, Grafito `#55607A`;
tipografías Lexend (titulares), IBM Plex Sans (texto) y JetBrains Mono (datos).
