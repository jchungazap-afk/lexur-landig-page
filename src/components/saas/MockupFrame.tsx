import Image from "next/image";
import { LockSimple as Lock, ArrowsOutSimple as Maximize2 } from "../common/Icons";
import type { SaasScene } from "../../data/saasScenes";
import type { Language } from "../../types";

interface Props {
  scene: SaasScene;
  language: Language;
  /** false = aún no se descarga la imagen (lazy por escena) */
  load: boolean;
  onZoom: (scene: SaasScene) => void;
  onLoad?: () => void;
  sizes: string;
}

/** Marco de navegador + captura del producto. Siempre object-contain: nunca se recorta. */
export default function MockupFrame({ scene, language, load, onZoom, onLoad, sizes }: Props) {
  const { image } = scene;
  return (
    <div className="saas-frame theme-dark rounded-xl lg:rounded-2xl overflow-hidden border border-white/15 bg-[#05070d]">
      <div className="flex items-center gap-3 px-3 lg:px-4 h-8 lg:h-9 bg-[#0b0f1a] border-b border-white/10">
        <div className="flex gap-1.5 shrink-0" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 min-w-0 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 max-w-full truncate rounded-full bg-black/50 border border-white/10 px-3 py-0.5 text-[10px] lg:text-[11px] font-mono text-zinc-300">
            <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" aria-hidden />
            <span className="truncate">{scene.url}</span>
          </span>
        </div>
        <button
          type="button"
          onClick={() => onZoom(scene)}
          className="shrink-0 grid place-items-center w-6 h-6 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
          aria-label={language === "es" ? `Ampliar captura de ${scene.name}` : `Enlarge ${scene.name} screenshot`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>
      <div
        className="relative w-full bg-[#05070d]"
        style={{ aspectRatio: `${image.width} / ${image.height}` }}
      >
        {load ? (
          <Image
            src={image.src}
            alt={image.alt[language]}
            fill
            sizes={sizes}
            quality={90}
            className="object-contain"
            onLoad={onLoad}
          />
        ) : (
          <div className="absolute inset-0 animate-pulse bg-white/[0.03]" aria-hidden />
        )}
      </div>
    </div>
  );
}
