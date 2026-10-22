import type { SaasScene } from "../../data/saasScenes";
import type { Language } from "../../types";
import StackChips from "./StackChips";
import { CaretDoubleRight } from "../common/Icons";

const COPY = {
  es: { modules: "Qué incluye", stack: "Construido con" },
  en: { modules: "What's inside", stack: "Built with" },
};

/**
 * Ficha técnica del producto. Cada bloque lleva `data-reveal` para que el
 * motor de scroll lo anime en stagger (en orden de aparición).
 */
export default function SpecsPanel({ scene, language }: { scene: SaasScene; language: Language; index: number; total: number }) {
  const c = COPY[language];
  const Icon = scene.icon;

  return (
    <div className="saas-panel relative flex flex-col gap-4 lg:gap-7">
      <header data-reveal className="flex items-end gap-4">
        <span
          className="grid place-items-center w-11 h-11 lg:w-12 lg:h-12 rounded-2xl shrink-0"
          style={{ background: `color-mix(in oklab, ${scene.accent} 16%, transparent)`, color: scene.accent }}
        >
          <Icon className="w-5 h-5 lg:w-[22px] lg:h-[22px]" aria-hidden />
        </span>
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/12 text-[11px] font-mono tracking-wider uppercase text-zinc-300 mb-1.5 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: scene.accent }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: scene.accent }} />
            </span>
            {scene.sector[language]}
          </div>
          <p className="font-heading text-[26px] lg:text-[clamp(2rem,2.6vw,2.6rem)] font-semibold tracking-[-0.035em] leading-[1] text-white">
            {scene.name}
          </p>
        </div>
      </header>

      <p
        data-reveal
        className="text-[14px] lg:text-[17px] leading-[1.6] text-zinc-300 max-w-[46ch] line-clamp-3 lg:line-clamp-none max-lg:[@media(max-height:700px)]:hidden"
      >
        {scene.description[language]}
      </p>

      <section data-reveal aria-label={c.modules}>
        <h4 className="hidden lg:block mb-2 text-[13px] text-zinc-500">{c.modules}</h4>
        <ul className="grid grid-cols-2 gap-x-6 border-t border-white/10">
          {scene.modules.map((m) => (
            <li
              key={m.es}
              className="flex items-center gap-2.5 py-1.5 lg:py-2.5 border-b border-white/10 text-[13px] lg:text-[15px] text-zinc-100 leading-snug"
            >
              <span className="w-1.5 h-1.5 rounded-[2px] shrink-0" style={{ background: scene.accent }} aria-hidden />
              {m[language]}
            </li>
          ))}
        </ul>
      </section>

      <section data-reveal aria-label={c.stack}>
        <h4 className="hidden lg:block mb-3 text-[13px] text-zinc-500">{c.stack}</h4>
        <StackChips items={scene.stack} />
      </section>

      {scene.metrics.length > 0 && (
        <dl data-reveal className="grid grid-cols-3">
          {scene.metrics.map((m, k) => (
            <div
              key={m.value + m.label.es}
              className={`flex flex-col-reverse ${k > 0 ? "pl-4 lg:pl-5 border-l border-white/10" : ""} pr-2`}
            >
              <dt className="mt-1 text-[12px] lg:text-[13px] text-zinc-500 leading-tight">{m.label[language]}</dt>
              <dd className="text-[20px] lg:text-[28px] font-medium tracking-[-0.03em] tabular-nums text-white leading-none">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <div data-reveal className="flex items-center gap-6 pt-1">
        {scene.links.map((l) =>
          l.variant === "primary" ? (
            <a
              key={l.label.es}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="btn-flow inline-flex items-center justify-center gap-2 rounded-full pl-5 pr-4 lg:pl-6 lg:pr-5 py-2.5 lg:py-3 text-[14px] lg:text-[15px] font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {l.label[language]}
              <CaretDoubleRight className="chev" />
            </a>
          ) : (
            <a
              key={l.label.es}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-[14px] lg:text-[15px] font-medium text-zinc-200 underline decoration-white/30 underline-offset-[6px] hover:text-white hover:decoration-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white rounded-sm"
            >
              {l.label[language]}
            </a>
          )
        )}
      </div>
    </div>
  );
}
