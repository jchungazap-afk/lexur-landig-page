"use client";

/* eslint-disable @next/next/no-img-element -- SVG de marca servido tal cual, sin optimizar */
import { BRAND_LOGO } from "../../data/brand";
import { useTheme } from "./ThemeToggle";

/** Versión del logo */
type Tone = "mono" | "color";

/**
 * Logo horizontal de LEXUR. El logotipo nunca se escribe con una fuente
 * (manual §7): se usa siempre el archivo.
 *
 * - tone="mono" (por defecto): versión de una tinta. Blanco sobre oscuro y navy
 *   sobre claro; se integra con la página sin competir con el contenido.
 * - tone="color": versión con el degradado azul → cian, para momentos destacados.
 * - forceDark: úsalo cuando el logo está sobre un bloque siempre oscuro
 *   (por ejemplo, el navbar encima del hero) aunque la página esté en claro.
 */
export default function BrandLogo({
  height = 28,
  tone = "mono",
  forceDark = false,
}: {
  height?: number;
  tone?: Tone;
  forceDark?: boolean;
}) {
  const theme = useTheme();
  const dark = forceDark || theme === "dark";
  const src =
    tone === "mono"
      ? dark
        ? BRAND_LOGO.horizontalMonoWhite
        : BRAND_LOGO.horizontalMono
      : dark
        ? BRAND_LOGO.horizontalNegative
        : BRAND_LOGO.horizontal;

  return <img src={src} alt="LEXUR" height={height} style={{ height, width: "auto" }} />;
}
