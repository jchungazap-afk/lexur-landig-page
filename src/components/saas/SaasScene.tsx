import type React from "react";
import { CaretDown as ChevronDown } from "../common/Icons";
import type { SaasScene as Scene } from "../../data/saasScenes";
import type { Language } from "../../types";
import MockupFrame from "./MockupFrame";
import SpecsPanel from "./SpecsPanel";

interface SceneProps {
  scene: Scene;
  index: number;
  total: number;
  language: Language;
  active: boolean;
  load: boolean;
  onZoom: (scene: Scene) => void;
  onImageLoad: () => void;
}

/** Degradado del fondo en ambos temas (el CSS elige según data-theme) */
export function sceneBgVars(scene: Scene): React.CSSProperties {
  const [a, b, c] = scene.gradient.colors;
  const { angle, glow } = scene.gradient;
  const acc = scene.accent;
  const light = "#f6f7f9";
  return {
    ["--g-dark" as string]: `radial-gradient(60% 50% at 50% 55%, ${glow.replace(/[\d.]+\)$/, "0.24)")}, transparent 70%), linear-gradient(${angle}deg, ${a}, ${b} 55%, ${c})`,
    ["--g-light" as string]: `radial-gradient(60% 50% at 50% 55%, color-mix(in oklab, ${acc} 22%, transparent), transparent 70%), linear-gradient(${angle}deg, color-mix(in oklab, ${acc} 20%, ${light}), ${light} 55%, color-mix(in oklab, ${acc} 8%, ${light}))`,
  } as React.CSSProperties;
}

const MOCK_SIZES = "(min-width: 1024px) 60vw, 92vw";

/**
 * Escena "pinned": todas las capas están en posición absoluta dentro del escenario
 * fijo. No hay estilos de animación aquí: el motor de SaasShowcase escribe
 * transform/opacity directamente sobre los nodos marcados con data-*.
 */
export function PinnedScene({ scene, index, total, language, active, load, onZoom, onImageLoad }: SceneProps) {
  const panelSide = scene.side === "left" ? "lg:right-[max(24px,4vw)] lg:left-auto" : "lg:left-[max(24px,4vw)] lg:right-auto";

  return (
    <article
      data-scene
      aria-labelledby={`saas-${scene.id}-title`}
      inert={!active}
      className="absolute inset-0"
      style={{ visibility: "hidden" }}
    >
      {/* 1 · INTRO */}
      <div data-intro className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-[15px] sm:text-[17px] text-zinc-400">
            <span className="inline-block w-2 h-2 rounded-[3px] mr-2.5 align-middle" style={{ background: scene.accent }} aria-hidden />
            {scene.sector[language]}
          </p>
          <h3
            id={`saas-${scene.id}-title`}
            className="text-[clamp(3.25rem,10vw,9rem)] font-semibold tracking-[-0.05em] text-white leading-[0.88]"
          >
            {scene.name}
          </h3>
          <p className="mt-7 mx-auto max-w-[34ch] text-[19px] sm:text-[22px] lg:text-[26px] text-zinc-100 leading-[1.3] tracking-[-0.01em] text-balance">
            {scene.tagline[language]}
          </p>
          <p className="mt-4 text-[14px] sm:text-[16px] text-zinc-500">{scene.audience[language]}</p>
          {index === 0 && (
            <ChevronDown className="mx-auto mt-10 w-5 h-5 text-zinc-500 animate-bounce" aria-hidden />
          )}
        </div>
      </div>

      {/* 2 · MOCKUP (+ glow) */}
      <div className="absolute inset-x-0 top-[106px] bottom-4 lg:top-[88px] lg:bottom-[72px] flex items-center justify-center pointer-events-none">
        <div
          data-glow
          aria-hidden
          className="absolute w-[70vw] h-[45vh] rounded-full blur-[90px] opacity-0"
          style={{ background: scene.gradient.glow }}
        />
        <div
          data-mock
          className="saas-mock relative pointer-events-auto opacity-0"
          style={{ ["--aspect" as string]: scene.image.width / scene.image.height }}
        >
          <MockupFrame
            scene={scene}
            language={language}
            load={load}
            onZoom={onZoom}
            onLoad={onImageLoad}
            sizes={MOCK_SIZES}
          />
        </div>
      </div>

      {/* 3 · SPECS (posición: lado opuesto al mockup en desktop, abajo en móvil) */}
      <div
        data-panel
        className={`absolute inset-x-5 bottom-5 lg:bottom-auto lg:top-1/2 lg:w-[clamp(360px,34vw,520px)] ${panelSide}`}
        style={{ visibility: "hidden" }}
      >
        <SpecsPanel scene={scene} language={language} index={index} total={total} />
      </div>
    </article>
  );
}

/** Versión sin pin (prefers-reduced-motion): secciones apiladas con fade simple. */
export function StaticScene({
  scene,
  index,
  total,
  language,
  onZoom,
}: Omit<SceneProps, "active" | "load" | "onImageLoad">) {
  const mockFirst = scene.side === "left";
  return (
    <article
      aria-labelledby={`saas-${scene.id}-title`}
      className="saas-static saas-bg relative px-4 sm:px-6 lg:px-[4vw] py-20 lg:py-28"
      style={sceneBgVars(scene)}
    >
      <header className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
        <p className="mb-4 text-[15px] text-zinc-400">{scene.sector[language]}</p>
        <h3 id={`saas-${scene.id}-title`} className="text-4xl lg:text-6xl font-semibold tracking-tight text-white">
          {scene.name}
        </h3>
        <p className="mt-4 text-lg text-zinc-100">{scene.tagline[language]}</p>
        <p className="mt-2 text-sm text-zinc-400">{scene.audience[language]}</p>
      </header>
      <div className="max-w-[1400px] mx-auto grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className={`lg:col-span-7 ${mockFirst ? "lg:order-1" : "lg:order-2"}`}>
          <MockupFrame scene={scene} language={language} load onZoom={onZoom} sizes={MOCK_SIZES} />
        </div>
        <div className={`lg:col-span-5 ${mockFirst ? "lg:order-2" : "lg:order-1"}`}>
          <SpecsPanel scene={scene} language={language} index={index} total={total} />
        </div>
      </div>
    </article>
  );
}
