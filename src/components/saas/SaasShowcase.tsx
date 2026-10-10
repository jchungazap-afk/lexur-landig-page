"use client";

import { Fragment, useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowRight, CaretDown as ChevronDown, X } from "../common/Icons";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { SAAS_SCENES, type SaasScene } from "../../data/saasScenes";
import { PinnedScene, StaticScene, sceneBgVars } from "./SaasScene";
import ParticleField, { type FieldState } from "./ParticleField";
import {
  TIMELINE as TL,
  PROLOGUE as PRO_TL,
  DEFAULT_SCROLL_LENGTH,
  DESKTOP_MIN_WIDTH,
  SCRUB_SMOOTHING,
  clamp,
  ramp,
  easeOut,
  easeInOut,
} from "./timeline";

/* ------------------------------------------------------------------ */
/* prefers-reduced-motion                                              */
/* ------------------------------------------------------------------ */
const RM_QUERY = "(prefers-reduced-motion: reduce)";
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(RM_QUERY);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(RM_QUERY).matches,
    () => false
  );
}

/* ------------------------------------------------------------------ */
/* Geometría precalculada por escena (se recalcula en resize / carga)  */
/* ------------------------------------------------------------------ */
interface Nodes {
  scene: HTMLElement;
  intro: HTMLElement;
  mock: HTMLElement;
  glow: HTMLElement;
  panel: HTMLElement;
  reveal: HTMLElement[];
}
interface Geo {
  shiftX: number;
  shiftY: number;
  splitScale: number;
}

const LENGTHS = SAAS_SCENES.map((s) => s.scrollLength ?? DEFAULT_SCROLL_LENGTH);
const PRO = PRO_TL.length;
// Progreso global en "pantallas": [presentación][escena 1][escena 2]...
const TOTAL = PRO + LENGTHS.reduce((a, b) => a + b, 0);
// Partículas en los colores de marca (azul y cian Lexur), iguales en todas las escenas
const ACCENTS = ["#2f6bea", "#16c6cc", "#6e9bff", "#16c6cc"];
const STARTS = LENGTHS.map((_, i) => PRO + LENGTHS.slice(0, i).reduce((a, b) => a + b, 0));

export default function SaasShowcase() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].saas;
  const reduced = usePrefersReducedMotion();
  const [zoom, setZoom] = useState<SaasScene | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (zoom && !d.open) d.showModal();
    if (!zoom && d.open) d.close();
  }, [zoom]);

  return (
    <section id="saas" aria-labelledby="saas-heading" className="relative z-20 bg-black scroll-mt-20">
      <a
        href="#saas-end"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        {language === "es" ? "Saltar la sección de sistemas" : "Skip systems section"}
      </a>

      {reduced && (
      <header className="max-w-3xl mx-auto px-6 pt-24 sm:pt-32 pb-10 text-center">
        <p className="mb-3 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-blue-400">{t.overline}</p>
        <h2 id="saas-heading" className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
          {t.title}
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">{t.subtitle}</p>
      </header>
      )}

      {reduced ? (
        <div>
          {SAAS_SCENES.map((s, i) => (
            <StaticScene key={s.id} scene={s} index={i} total={SAAS_SCENES.length} language={language} onZoom={setZoom} />
          ))}
        </div>
      ) : (
        <PinnedStory language={language} copy={t} onZoom={setZoom} />
      )}

      <div id="saas-end" tabIndex={-1} />

      {/* Lightbox nativo: Esc cierra, foco atrapado por el navegador */}
      <dialog
        ref={dialogRef}
        onClose={() => setZoom(null)}
        onClick={(e) => e.target === e.currentTarget && setZoom(null)}
        className="m-auto w-[min(96vw,1600px)] max-h-[94svh] bg-transparent p-0 backdrop:bg-black/90 backdrop:backdrop-blur-sm"
        aria-label={zoom?.name}
      >
        {zoom && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setZoom(null)}
              autoFocus
              className="absolute -top-2 right-0 -translate-y-full grid place-items-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
              aria-label={language === "es" ? "Cerrar" : "Close"}
            >
              <X className="w-5 h-5" />
            </button>
            <Image
              src={zoom.image.src}
              alt={zoom.image.alt[language]}
              width={zoom.image.width}
              height={zoom.image.height}
              quality={90}
              sizes="96vw"
              className="w-full h-auto max-h-[88svh] object-contain rounded-xl"
            />
          </div>
        )}
      </dialog>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Storytelling fijo                                                   */
/* ------------------------------------------------------------------ */
interface SectionCopy {
  overline: string;
  title: string;
  subtitle: string;
}

function PinnedStory({
  language,
  copy,
  onZoom,
}: {
  language: "es" | "en";
  copy: SectionCopy;
  onZoom: (s: SaasScene) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const bgRefs = useRef<HTMLDivElement[]>([]);
  const barRefs = useRef<HTMLSpanElement[]>([]);
  const measureRef = useRef<() => void>(() => {});
  const fieldRef = useRef<FieldState>({ u: 0, mix: 1, active: 0 });
  const [active, setActive] = useState(0);
  // Lazy load: solo se descargan la escena activa y la siguiente
  const [loadedUpTo, setLoadedUpTo] = useState(1);

  useEffect(() => {
    const track = trackRef.current!;
    const stage = stageRef.current!;
    const sceneEls = Array.from(stage.querySelectorAll<HTMLElement>("[data-scene]"));
    const nodes: Nodes[] = sceneEls.map((el) => ({
      scene: el,
      intro: el.querySelector("[data-intro]")!,
      mock: el.querySelector("[data-mock]")!,
      glow: el.querySelector("[data-glow]")!,
      panel: el.querySelector("[data-panel]")!,
      reveal: Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]")),
    }));

    const proRoot = stage.querySelector<HTMLElement>("[data-prologue]");
    const pro = proRoot && {
      root: proRoot,
      head: proRoot.querySelector<HTMLElement>("[data-pro-head]")!,
      hint: proRoot.querySelector<HTMLElement>("[data-pro-hint]")!,
      chips: Array.from(proRoot.querySelectorAll<HTMLElement>("[data-pro-chip]")),
    };
    const rail = stage.querySelector<HTMLElement>("[data-rail]");
    // Revelado por palabras del título (por tiempo, al entrar en pantalla)
    const revealIO = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && proRoot) {
          proRoot.dataset.in = "true";
          revealIO.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    if (proRoot) revealIO.observe(proRoot);

    let geo: Geo[] = [];
    let vw = 0;
    let vh = 0;
    let desktop = true;
    let scrollable = 1;
    let current = -1;
    let target = 0;
    let raf = 0;
    let activeIdx = 0;

    /* ---------- MEDIR: equivalente a ScrollTrigger.refresh() ---------- */
    const measure = () => {
      vw = stage.clientWidth;
      vh = stage.clientHeight;
      desktop = vw >= DESKTOP_MIN_WIDTH;
      scrollable = Math.max(1, track.offsetHeight - vh);

      geo = nodes.map((n, i) => {
        const side = SAAS_SCENES[i].side;
        // offsetWidth/Height ignoran transforms → tamaño "base" del mockup
        const mockW = n.mock.offsetWidth;
        const mockH = n.mock.offsetHeight;
        n.panel.style.transform = "";
        const panelH = n.panel.offsetHeight;

        if (desktop) {
          const panelW = n.panel.offsetWidth;
          const gutter = Math.max(24, vw * 0.04);
          const gap = Math.max(24, vw * 0.025);
          // El mockup se reduce solo lo necesario para no chocar con el panel
          const splitScale = clamp((vw - gutter * 2 - panelW - gap) / mockW, 0.7, 1);
          const half = (mockW * splitScale) / 2;
          const shiftX = side === "left" ? gutter + half - vw / 2 : vw / 2 - gutter - half;
          // Panel: centrado vertical y escalado si la pantalla es muy baja
          // (zona útil: debajo del navbar fijo y encima de la barra de progreso)
          const fit = Math.min(1, (vh - 88 - 72 - 16) / panelH);
          n.panel.style.transformOrigin = side === "left" ? "right center" : "left center";
          n.panel.style.transform = `translateY(calc(-50% + 8px)) scale(${fit})`;
          return { shiftX, shiftY: 0, splitScale };
        }

        // Móvil / tablet: mockup arriba, panel abajo
        const top = 106; // debajo del navbar fijo + barra de progreso
        const bottom = 16;
        const maxPanel = vh * 0.64;
        const fit = Math.min(1, maxPanel / panelH);
        n.panel.style.transformOrigin = "center bottom";
        n.panel.style.transform = fit < 1 ? `scale(${fit})` : "";
        const avail = vh - top - bottom - panelH * fit - 12;
        const splitScale = clamp(avail / mockH, 0.45, 1);
        const baseCenter = (top + vh - bottom) / 2;
        const shiftY = top + (mockH * splitScale) / 2 - baseCenter;
        return { shiftX: 0, shiftY, splitScale };
      });
      render(current < 0 ? target : current, true);
    };
    measureRef.current = measure;

    /* ---------- RENDER: solo transform + opacity ---------- */
    const render = (pos: number, force = false) => {
      const u = (pos / scrollable) * TOTAL; // progreso global en "escenas"
      const last = nodes.length - 1;

      // Fondo: cada capa i hace crossfade sobre la anterior alrededor de su inicio
      bgRefs.current.forEach((bg, i) => {
        const prevSpan = i === 0 ? PRO * (1 - PRO_TL.out[0]) : LENGTHS[i - 1] * (1 - TL.exit[0]);
        const a = ramp(u, [STARTS[i] - prevSpan, STARTS[i] + LENGTHS[i] * TL.enter[1]]);
        bg.style.opacity = String(a);
        // leve parallax del fondo
        bg.style.transform = `translate3d(0, ${(1 - a) * 4}vh, 0)`;
      });

      // PRESENTACIÓN: píldoras en stagger → título hace zoom y se desvanece
      if (pro) {
        const tp = u / PRO;
        const outP = easeInOut(ramp(tp, PRO_TL.out));
        pro.head.style.opacity = String(1 - outP);
        pro.head.style.transform = `translate3d(0, ${-outP * 40}px, 0) scale(${1 + outP * 0.12})`;
        pro.chips.forEach((el, k) => {
          const a = PRO_TL.chips.start + k * PRO_TL.chips.stagger;
          const p = easeOut(ramp(tp, [a, a + PRO_TL.chips.duration]));
          el.style.opacity = String(p * (1 - outP));
          el.style.transform = `translate3d(0, ${(1 - p) * 28 + outP * 30}px, 0) scale(${(0.94 + p * 0.06) * (1 - outP * 0.06)})`;
        });
        pro.hint.style.opacity = String(1 - ramp(tp, [0, 0.12]));
        pro.root.style.visibility = outP >= 1 ? "hidden" : "";
        pro.root.inert = outP > 0.6;
        if (rail) rail.style.opacity = String(ramp(u, [PRO * 0.75, PRO + 0.2]));
      }

      let nextActive = 0;
      for (let i = 0; i < STARTS.length; i++) if (u >= STARTS[i] - LENGTHS[Math.max(0, i - 1)] * (1 - TL.exit[0])) nextActive = i;
      // Partículas: multicolor en la presentación → color del SaaS activo
      fieldRef.current.u = u;
      fieldRef.current.mix = 1 - ramp(u, [PRO * 0.55, PRO + 0.15]);
      fieldRef.current.active = nextActive;
      nextActive = 0;
      nodes.forEach((n, i) => {
        const t = (u - STARTS[i]) / LENGTHS[i]; // progreso local de la escena
        barRefs.current[i]?.style.setProperty("transform", `scaleX(${clamp(t)})`);
        if (u >= STARTS[i]) nextActive = i;

        const enterA = ramp(t, TL.enter);
        const exitP = i === last ? 0 : easeInOut(ramp(t, TL.exit));
        const alpha = enterA * (1 - exitP);
        const visible = alpha > 0.001 && t >= 0 && (t <= 1 || i === last);
        n.scene.style.visibility = visible ? "visible" : "hidden";
        if (!visible && !force) return;

        // 4 · SALIDA: la escena se desvanece y sube ligeramente
        n.scene.style.opacity = String(alpha);
        n.scene.style.transform = exitP ? `translate3d(0, ${-exitP * 6}vh, 0) scale(${1 - exitP * 0.04})` : "";

        // 1 · INTRO → sale con fade + desplazamiento hacia arriba
        const introP = easeOut(ramp(t, TL.introOut));
        const enterY = (1 - easeOut(enterA)) * 30;
        n.intro.style.opacity = String(1 - introP);
        n.intro.style.transform = `translate3d(0, ${enterY - introP * 70}px, 0)`;
        // "" = hereda del padre (un hijo con visibility:visible se vería aunque la escena esté oculta)
        n.intro.style.visibility = introP >= 1 ? "hidden" : "";

        // 2 · MOCKUP → sube desde abajo, scale 0.9 → 1
        const inP = easeOut(ramp(t, TL.mockIn));
        // 3 · SPLIT → se desplaza a su lado (desktop) o hacia arriba (móvil)
        const splitP = easeInOut(ramp(t, TL.split));
        const g = geo[i];
        const x = splitP * g.shiftX;
        const y = (1 - inP) * vh * 0.6 + splitP * g.shiftY;
        const s = (0.9 + 0.1 * inP) * (1 - splitP * (1 - g.splitScale));
        n.mock.style.opacity = String(ramp(t, [TL.mockIn[0], TL.mockIn[0] + 0.1]));
        n.mock.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${s})`;
        n.glow.style.opacity = String(inP * 0.9);
        n.glow.style.transform = `translate3d(${x * 1.05}px, ${y * 0.9}px, 0) scale(${0.8 + inP * 0.2})`;

        // 3 · SPECS → stagger desde el lado opuesto
        const dir = desktop ? (SAAS_SCENES[i].side === "left" ? 1 : -1) : 0;
        let anyVisible = false;
        n.reveal.forEach((el, k) => {
          const start = TL.specs.start + k * TL.specs.stagger;
          const p = easeOut(ramp(t, [start, start + TL.specs.duration]));
          if (p > 0) anyVisible = true;
          el.style.opacity = String(p);
          el.style.transform = desktop
            ? `translate3d(${(1 - p) * 56 * dir}px, 0, 0)`
            : `translate3d(0, ${(1 - p) * 28}px, 0)`;
        });
        n.panel.style.visibility = anyVisible ? "" : "hidden";
      });

      if (nextActive !== activeIdx) {
        activeIdx = nextActive;
        setActive(nextActive);
        setLoadedUpTo((n) => Math.max(n, nextActive + 1));
      }
    };

    /* ---------- SCRUB con inercia (rAF solo mientras hay movimiento) ---------- */
    const tick = () => {
      current = current < 0 ? target : current + (target - current) * SCRUB_SMOOTHING;
      if (Math.abs(target - current) < 0.5) current = target;
      render(current);
      raf = current !== target ? requestAnimationFrame(tick) : 0;
    };
    const onScroll = () => {
      target = clamp(-track.getBoundingClientRect().top, 0, scrollable);
      if (!raf) raf = requestAnimationFrame(tick);
    };

    // will-change solo mientras la sección está cerca del viewport
    const io = new IntersectionObserver(
      ([e]) => {
        const wc = e.isIntersecting ? "transform, opacity" : "auto";
        nodes.forEach((n) => {
          n.mock.style.willChange = wc;
          n.intro.style.willChange = wc;
        });
      },
      { rootMargin: "50% 0px" }
    );
    io.observe(track);

    const ro = new ResizeObserver(() => {
      measure();
      onScroll();
    });
    ro.observe(stage);
    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Limpieza (equivalente a context.revert())
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      revealIO.disconnect();
      nodes.forEach((n) => {
        [n.scene, n.intro, n.mock, n.glow, n.panel, ...n.reveal].forEach((el) => el.removeAttribute("style"));
      });
    };
  }, []);

  // Al cambiar idioma cambia la altura del panel → re-medir
  useEffect(() => {
    measureRef.current();
  }, [language]);

  const onImageLoad = useCallback(() => measureRef.current(), []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;
    const scrollable = track.offsetHeight - stage.clientHeight;
    const top = track.getBoundingClientRect().top + window.scrollY;
    const u = STARTS[i] + LENGTHS[i] * TL.enter[1];
    window.scrollTo({ top: top + (u / TOTAL) * scrollable + 1 });
  };

  return (
    <div ref={trackRef} className="relative" style={{ height: `calc(${TOTAL * 100}svh + 100svh)` }}>
      <div ref={stageRef} className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* Fondos con degradado: crossfade entre escenas */}
        {SAAS_SCENES.map((s, i) => (
          <div
            key={s.id}
            ref={(el) => {
              if (el) bgRefs.current[i] = el;
            }}
            aria-hidden
            className="saas-bg absolute -inset-[5vh] will-change-[opacity]"
            style={{ ...sceneBgVars(s), opacity: 0 }}
          />
        ))}
        <div aria-hidden className="saas-grid absolute inset-0 pointer-events-none" />
        <ParticleField state={fieldRef} colors={ACCENTS} />

        {/* PRESENTACIÓN DE LA SECCIÓN */}
        <div data-prologue className="saas-prologue absolute inset-0 flex items-center justify-center px-5 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] rounded-full blur-[110px] opacity-60"
            style={{
              background: "radial-gradient(closest-side, rgba(47,107,234,0.35), rgba(22,198,204,0.12) 60%, transparent)",
            }}
          />
          <div className="relative max-w-5xl">
            <div data-pro-head>
              <p className="pro-word mb-6 text-[15px] sm:text-[17px] text-zinc-400" style={{ ["--i" as string]: 0 }}>
                {copy.overline}
              </p>
              <h2 id="saas-heading" className="text-[clamp(2.6rem,7vw,7rem)] font-semibold tracking-[-0.045em] text-white leading-[0.95] text-balance">
                {copy.title.split(" ").map((w, k) => (
                  <Fragment key={k}>
                    <span className="pro-word" style={{ ["--i" as string]: k + 1 }}>
                      {w}
                    </span>{" "}
                  </Fragment>
                ))}
              </h2>
              <p
                className="pro-word mt-7 mx-auto max-w-[52ch] text-[16px] sm:text-[19px] text-zinc-400 leading-[1.55]"
                style={{ ["--i" as string]: copy.title.split(" ").length + 2 }}
              >
                {copy.subtitle}
              </p>
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
              {SAAS_SCENES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.id} data-pro-chip style={{ opacity: 0 }}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      className="group inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] pl-1.5 pr-4 py-1.5 text-[13px] sm:text-sm text-zinc-200 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-colors focus-visible:outline-2 focus-visible:outline-white"
                    >
                      <span className="grid place-items-center w-7 h-7 rounded-full" style={{ background: `${s.accent}22`, color: s.accent }}>
                        <Icon className="w-3.5 h-3.5" aria-hidden />
                      </span>
                      <span className="font-mono text-[11px] text-zinc-500">{String(i + 1).padStart(2, "0")}</span>
                      {s.name}
                      <ArrowRight className="w-3.5 h-3.5 -ml-0.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div data-pro-hint aria-hidden className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[13px] text-zinc-500">
            {language === "es" ? "Desliza para explorar" : "Scroll to explore"}
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

        {SAAS_SCENES.map((s, i) => (
          <PinnedScene
            key={s.id}
            scene={s}
            index={i}
            total={SAAS_SCENES.length}
            language={language}
            active={i === active}
            load={i <= loadedUpTo}
            onZoom={onZoom}
            onImageLoad={onImageLoad}
          />
        ))}

        {/* Progreso / navegación entre escenas */}
        <nav
          data-rail
          style={{ opacity: 0 }}
          aria-label={language === "es" ? "Sistemas" : "Systems"}
          className="absolute z-10 left-1/2 -translate-x-1/2 top-[92px] lg:top-auto lg:bottom-6 w-[calc(100%-32px)] lg:w-auto"
        >
          <ol className="flex gap-1.5 lg:gap-2 lg:rounded-full lg:border lg:border-white/10 lg:bg-black/40 lg:backdrop-blur-md lg:p-1.5">
            {SAAS_SCENES.map((s, i) => (
              <li key={s.id} className="flex-1 lg:flex-none">
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={i === active ? "step" : undefined}
                  aria-label={`${String(i + 1).padStart(2, "0")} ${s.name}`}
                  className={`group relative w-full overflow-hidden rounded-full text-left transition-colors focus-visible:outline-2 focus-visible:outline-white h-1 lg:h-auto lg:px-3.5 lg:py-1.5 bg-white/15 lg:bg-transparent ${
                    i === active ? "lg:bg-white/10" : "lg:hover:bg-white/5"
                  }`}
                >
                  <span
                    ref={(el) => {
                      if (el) barRefs.current[i] = el;
                    }}
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 lg:inset-auto lg:bottom-0 lg:h-px"
                    style={{ background: s.accent }}
                  />
                  <span className="hidden lg:inline relative text-[11px] font-medium whitespace-nowrap text-zinc-300 group-aria-[current=step]:text-white">
                    <span className="font-mono text-zinc-500 mr-1.5">{String(i + 1).padStart(2, "0")}</span>
                    {s.name}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
