"use client";

/* eslint-disable @next/next/no-img-element -- SVG de marca servido tal cual, sin optimizar */
import { useEffect, useState } from "react";
import { BRAND_LOGO } from "../../data/brand";
import { useTheme } from "./ThemeToggle";

/**
 * Logo horizontal de LEXUR. El logotipo nunca se escribe con una fuente
 * (manual §7): se usa el archivo. Mientras no estén los SVG en /public/brand,
 * muestra el símbolo anterior con el nombre.
 */
export default function BrandLogo({ height = 28, forceDark = false }: { height?: number; forceDark?: boolean }) {
  const theme = useTheme();
  // Hasta confirmar que el SVG existe se muestra el respaldo (evita un icono de imagen rota)
  const [hasSvg, setHasSvg] = useState(false);
  const dark = forceDark || theme === "dark";
  const src = dark ? BRAND_LOGO.horizontalNegative : BRAND_LOGO.horizontal;

  useEffect(() => {
    let alive = true;
    fetch(src, { method: "HEAD" })
      .then((r) => alive && setHasSvg(r.ok && (r.headers.get("content-type") ?? "").includes("svg")))
      .catch(() => alive && setHasSvg(false));
    return () => {
      alive = false;
    };
  }, [src]);

  if (!hasSvg) {
    return (
      <span className="inline-flex items-center gap-2.5">
        <img src={BRAND_LOGO.fallback} alt="" width={Math.round(height * 0.8)} height={height} className="object-contain" style={{ height }} />
        <span className="font-heading font-semibold tracking-[0.06em] text-white" style={{ fontSize: height * 0.62 }}>
          LEXUR
        </span>
      </span>
    );
  }

  return (
    <img
      src={src}
      alt="LEXUR"
      height={height}
      style={{ height, width: "auto" }}
      onError={() => setHasSvg(false)}
    />
  );
}
