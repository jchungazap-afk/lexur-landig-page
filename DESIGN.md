# DESIGN.md · LEXUR

Sistema de diseño de la landing de **LEXUR Corporation**, basado en el *Manual de identidad LEXUR v2* (octubre 2026) y en cómo está implementado en este proyecto. Si una decisión no está aquí, manda el manual.

> **Lema:** Tecnología que trabaja contigo
> **Propósito:** hacer que el software trabaje para las empresas, y no al revés.

---

## 1. Principios

1. **Un solo fondo, el color vive en la luz.** Toda la página usa el mismo navy. El azul y el cian aparecen como resplandor, borde o acento, nunca como bloques de fondo distintos por sección.
2. **El navy manda.** Proporción orientativa del manual: 60 % fondo claro, 25 % navy, 10 % azul, 5 % cian. En el tema oscuro, el navy pasa a ser el fondo.
3. **La cuchilla a 48° es el gesto propio.** Se repite en la trama de fondo, los separadores y el movimiento.
4. **Una sola cosa protagonista por pantalla.** El resto se mantiene sobrio.
5. **Movimiento que responde al usuario.** El scroll, el cursor y los clics producen efectos; nada se mueve "porque sí". Siempre se respeta `prefers-reduced-motion`.

## 2. Voz y tono

| Rasgo | Sí | No |
|---|---|---|
| **Precisa** | Dice exactamente lo que hace el producto | Fría o técnica de más |
| **Cercana** | Habla de tú a tú | Informal en exceso |
| **Confiable** | Cumple lo que promete y lo demuestra | Exagera o promete de más |
| **Ágil** | Resuelve rápido y va al grano | Apresurada o descuidada |

- ✅ «Configura tus copias de seguridad en dos pasos.» · «Tu factura se envía sola cada mes.»
- ❌ «Revolucionamos la gestión con soluciones disruptivas.» · «Sinergias de última generación.»
- Mayúsculas solo al inicio de la frase (*sentence case*). Nada de etiquetas en MAYÚSCULAS espaciadas.
- Los productos se llaman **sistemas empresariales**. No usar "SaaS" en textos visibles.
- Los botones dicen lo que pasa: «Habla con nosotros», «Solicitar demo», «Enviar por WhatsApp».
- Las cifras tienen que ser verificables. Si no hay dato real, no se pone.

## 3. Logo

Archivos en `public/brand/` (extraídos en vector del manual):

| Archivo | Uso |
|---|---|
| `lexur-horizontal.svg` | Cabeceras y footer sobre fondo claro |
| `lexur-horizontal-negativo.svg` | Sobre navy y fondos oscuros |
| `lexur-simbolo.svg` | Favicon, avatar, sellos |
| `lexur-simbolo-negativo.svg` | Símbolo sobre fondo oscuro |

- En código se usa siempre `<BrandLogo />` (`src/components/common/BrandLogo.tsx`). Elige la versión según el tema; las rutas se configuran en `src/data/brand.ts`.
- **El logotipo nunca se escribe con una fuente:** siempre el archivo.
- **Área de protección:** como mínimo la altura de las letras de LEXUR (*x*) libre alrededor.
- **Tamaños mínimos:** horizontal 140 px, símbolo 24 px. Hasta 48 px se usa el símbolo pequeño.
- **No:** deformar, girar, cambiar colores, añadir sombras o efectos, ni usar sobre fondos sin contraste.

## 4. Color

### 4.1 Paleta de marca

| Token | Hex | Rol |
|---|---|---|
| `--color-navy` | `#0A1E45` | Principal: logo, texto en claro, fondos |
| `--color-brand` | `#2F6BEA` | Azul Lexur: botones y enlaces |
| `--color-cyan` | `#16C6CC` | Acento. **Nunca como texto sobre blanco** |
| `--color-mist` | `#EEF2F8` | Niebla: fondo del tema claro |
| `--color-graphite` | `#55607A` | Grafito: texto secundario en claro |
| `--flow` | `linear-gradient(110deg, #2F6BEA, #16C6CC)` | **Lexur Flow.** Solo para el logo y momentos destacados |

### 4.2 Colores por producto

Cada sistema conserva la marca y solo cambia su color propio. **Este color se usa únicamente en detalles** (icono, marcadores de módulos, barra de progreso), nunca en fondos.

| Sistema | Color |
|---|---|
| FerreCore | `#F5A524` |
| MedClinic EHR | `#1FBF86` |
| OptiVision Cloud | `#8B6CFF` |
| Lexur Cloud Core | `#16C6CC` |

Un producto nuevo necesita un color legible sobre blanco y sobre navy, distinto de los activos.

### 4.3 Temas

El tema se guarda en `localStorage` (`lexur_theme`) y se aplica antes de pintar (`THEME_SCRIPT` en `src/app/layout.tsx`). Por defecto es oscuro.

Los componentes usan las clases `white` / `black` / `zinc-*` de Tailwind; `globals.css` las reasigna a la paleta en cada tema:

| Variable | Oscuro | Claro |
|---|---|---|
| `--bg` / `--color-black` (fondo) | `#050D20` | `#EEF2F8` |
| `--color-white` (texto principal) | `#FFFFFF` | `#0A1E45` |
| `--color-zinc-400` (texto secundario) | `#8A96AE` | `#55607A` |
| `--color-blue-400` (enlaces y acentos) | `#6E9BFF` | `#2F6BEA` |
| Bordes | `white/10` → blanco al 10 % | navy al 10 % |

- `.theme-dark` fuerza el oscuro dentro de un bloque. Se usa en el **hero** (siempre oscuro), en el **navbar mientras está sobre el hero** y en el **marco de las capturas**.
- No usar hex sueltos en componentes (`bg-[#…]`): rompe el tema claro. Usar las clases o las variables.

## 5. Tipografía

| Rol | Familia | Pesos | Variable |
|---|---|---|---|
| Titulares | **Lexend** | 500, 600 | `--font-heading` (clase `font-heading`, y por defecto en `h1–h3`) |
| Texto e interfaz | **IBM Plex Sans** | 400, 500, 600 | `--font-sans` |
| Código y datos | **JetBrains Mono** | 400, 500 | `--font-mono` |

Se cargan con `next/font/google` en `src/app/layout.tsx`.

**Escala:**

| Uso | Tamaño | Interlineado | Espaciado |
|---|---|---|---|
| Hero | 40 → 96 px | 1.02 | −0.035em |
| Nombre del sistema (intro de escena) | `clamp(3.25rem, 10vw, 9rem)` | 0.88 | −0.05em |
| Título de sección | `clamp(2.5rem, 5.5vw, 4.5rem)` | 0.95 | −0.035em |
| Nombre en la ficha | 26 → 42 px | 1 | −0.035em |
| Frase destacada | 19 → 26 px | 1.3 | −0.01em |
| Texto | 15 – 17 px | 1.55 – 1.6 | normal |
| Etiqueta / meta | 13 px | 1.3 | normal (sin mayúsculas) |
| Cifra (métrica) | 20 → 28 px, `tabular-nums` | 1 | −0.03em |

- Ancho de lectura: máximo ~46–52 caracteres en párrafos (`max-w-[46ch]`).
- Titulares con `text-balance`.

## 6. Recurso gráfico: la cuchilla a 48°

- **Trama de cuchillas:** líneas paralelas a 48° con una destacada cada cuatro (`.saas-grid`, `.hero-hatch`). En CSS: `repeating-linear-gradient(-48deg, …)`, con máscara radial para que se desvanezca.
- **Separador:** `.blade`, una cuchilla corta con Lexur Flow, inclinada 48°. Va entre la marca y un nombre o lema.
- **Movimiento (video y web):** la cuchilla cruza en diagonal de abajo-izquierda a arriba-derecha y "abre" la L. Un solo gesto de unos **600 ms**.

## 7. Fondos y luz

- **Fondo único:** `var(--bg)` en todas las secciones, sin líneas divisorias entre ellas.
- **Hero** (`src/components/hero/Hero.tsx`):
  - navy + haz de luz superior (`.hero-beam`) + trama (`.hero-hatch`);
  - **horizonte:** un "planeta" navy con el borde iluminado en Lexur Flow (`.hero-horizon`, `.hero-planet`); solo asoma ~26 vh (20 vh en móvil);
  - grano sutil (`.hero-grain`) y fundido inferior hacia el fondo (`.hero-bg::after`), para no cortar con la sección siguiente.
- **Luz de sección:** `.section-light`, un haz azul con una línea de borde cian→azul en la parte alta del bloque (contacto, footer).
- **Escenas de sistemas:** navy casi plano (`#081634 → #050D20`) con un resplandor azul o cian; el crossfade entre escenas es casi imperceptible a propósito.

## 8. Componentes

### Botones
| Clase | Uso | Comportamiento |
|---|---|---|
| `.btn-flow` | **CTA principal** (hero, formulario, navbar) | Vidrio *liquid glass*: fondo translúcido con desenfoque, borde de luz (blanco arriba, azul abajo), brillo que sigue al cursor (`LiquidGlassFx.tsx`) y resplandor azul debajo. Flechas `»` que avanzan al pasar el cursor. Versión clara: vidrio blanco y texto navy |
| `.btn-brand` | Acción sólida secundaria | Azul Lexur `#2F6BEA`, texto blanco, hover `#2559C9` |
| Enlace subrayado | Acción terciaria («Ver más detalles», «Enviar por correo») | `underline underline-offset-[6px] decoration-white/30` |

Todos los botones tienen foco visible (`focus-visible:outline-2`).

### Iconos
- **Phosphor**, incrustados como SVG en `src/components/common/Icons.tsx` (sin dependencia npm).
- **Duotono** (`*Duo`) para iconos de producto, contacto y estado; **regular** para la interfaz (flechas, menú, cerrar).
- Micro-movimiento solo como respuesta a una acción: `.icon-nudge` (flecha ↗), `.icon-nudge-x` (→), `.icon-wiggle` (WhatsApp), `.icon-rise` (volver arriba), `.icon-pop` (confirmación).
- Logos de tecnologías: `src/components/common/BrandIcons.tsx`, en gris y con color al pasar el cursor.

### Ficha de sistema (`SpecsPanel`)
Formato de ficha técnica, **sin tarjeta ni cápsulas**: cabecera (icono + sector + nombre) → descripción → «Qué incluye» (lista en dos columnas con líneas finas y marcador del color del producto) → «Construido con» (logos y nombres en línea) → métricas separadas por líneas verticales → acciones. Detrás lleva un velo suave (`.saas-panel::before`) para que se lea sobre las partículas.

### Marco de capturas (`MockupFrame`)
Barra de navegador oscura con URL, botón de ampliar y captura con `object-contain` (nunca se recorta). Siempre `.theme-dark`.

### Formulario de contacto
Etiquetas visibles encima del campo, texto de 16 px (sin zoom en iOS), validación al enviar con error junto al campo y foco al primero que falte. Arma el mensaje y lo abre en WhatsApp o en el correo (no hay backend).

## 9. Movimiento

- **Scrollytelling de sistemas** (`src/components/saas/`): un escenario fijo con `position: sticky` y un solo `requestAnimationFrame` que escribe `transform` y `opacity`. Los rangos están en `timeline.ts`:
  - `PROLOGUE`: presentación (palabras en cascada, píldoras, zoom de salida);
  - `TIMELINE`: intro → el mockup sube → se desplaza a su lado → la ficha entra en cascada → salida;
  - `scrollLength` por sistema en `src/data/saasScenes.ts`.
- **Partículas** (`ParticleField.tsx`): red de "datos" en azul y cian que sube, se estira con la velocidad del scroll y se aparta del cursor. En claro se dibujan como tinta. Se pausan fuera de pantalla.
- **Curvas:** `cubic-bezier(0.22, 1, 0.36, 1)` (salida suave); duraciones de 200–350 ms en interacción y unos 600 ms en gestos de marca.
- **`prefers-reduced-motion`:** sin fijado de scroll (secciones apiladas con un fundido simple), sin partículas y sin animaciones de iconos.
- Animar solo `transform` y `opacity`; `will-change` solo mientras la sección está en pantalla.

## 10. Layout y responsive

- Contenedor: `max-w-[1240px]` con márgenes laterales de 20 px en móvil y 32 px en escritorio.
- Hero centrado; las escenas de sistemas alternan el lado (`side: "left" | "right"`) para romper la simetría.
- Corte a escritorio: **1024 px**. Por debajo, el mockup va arriba y la ficha debajo.
- Zona superior reservada para el navbar fijo: 88 px en escritorio y 106 px en móvil (escenas fijas).

## 11. Accesibilidad

- Contraste AA en ambos temas. **El cian nunca como texto sobre blanco.**
- Escenas no activas con `inert`. Enlace para saltar la sección de sistemas. Lightbox con `<dialog>` nativo (Esc cierra).
- Iconos decorativos con `aria-hidden`; botones solo con icono con `aria-label`.
- HTML semántico: `section` con `aria-labelledby`, `nav`, `dl` para métricas, `fieldset`/`legend` en el formulario.

## 12. Mapa de archivos

| Qué | Dónde |
|---|---|
| Tokens, temas, efectos | `src/app/globals.css` |
| Fuentes, metadatos, script de tema | `src/app/layout.tsx` |
| Logo | `public/brand/`, `src/data/brand.ts`, `src/components/common/BrandLogo.tsx` |
| Iconos | `src/components/common/Icons.tsx`, `BrandIcons.tsx` |
| Botón liquid glass | `.btn-flow` en `globals.css` + `src/components/common/LiquidGlassFx.tsx` |
| Selector de tema | `src/components/common/ThemeToggle.tsx` |
| Sistemas (datos) | `src/data/saasScenes.ts` |
| Sistemas (motor y escenas) | `src/components/saas/` |
| Datos de contacto | `src/data/company.ts` |
| Textos ES/EN | `src/data/translations.ts` |

## 13. Lo que no se hace

- Fondos de color distintos por sección, o el color del producto como fondo.
- Hex sueltos en componentes (`bg-[#…]`, `text-[#…]`).
- Lexur Flow en textos largos o en todos los títulos (solo logo y momentos destacados).
- Escribir "LEXUR" con una fuente en lugar del logo.
- Etiquetas en MAYÚSCULAS espaciadas, «01 · …» como decoración, o flechas en todos los enlaces.
- Tarjetas idénticas con cápsulas y sombras para todo.
- Cifras o promesas que no se puedan demostrar.
