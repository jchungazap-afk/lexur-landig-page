/**
 * Línea de tiempo de cada escena, expresada en progreso local t ∈ [0, 1].
 * Ajusta estos rangos para cambiar el "ritmo" de todas las escenas a la vez.
 * (La duración total de cada escena en scroll se define con `scrollLength` en la data.)
 */
export const TIMELINE = {
  /** Fade-in de la escena entrante (no aplica a la primera) */
  enter: [0, 0.07],
  /** 1 · Intro sale: fade + sube */
  introOut: [0.1, 0.26],
  /** 2 · Mockup sube desde abajo y queda centrado */
  mockIn: [0.12, 0.34],
  /** 3 · Mockup se desplaza a su lado */
  split: [0.4, 0.6],
  /** 3 · Panel de specs: inicio del stagger, separación entre ítems y duración de cada ítem */
  specs: { start: 0.45, stagger: 0.035, duration: 0.14 },
  /** 4 · Salida de la escena (no aplica a la última) */
  exit: [0.9, 1],
} as const;

/** Presentación de la sección (antes de la primera escena) */
export const PROLOGUE = {
  /** Duración en alturas de pantalla */
  length: 1.6,
  /** Entrada escalonada de las píldoras de productos */
  chips: { start: 0.04, stagger: 0.06, duration: 0.24 },
  /** Salida: el título se acerca (zoom) y se desvanece */
  out: [0.5, 0.92],
} as const;

export const DEFAULT_SCROLL_LENGTH = 3.2; // en alturas de pantalla
export const DESKTOP_MIN_WIDTH = 1024;
/** Suavizado del scrub (0–1). Más bajo = más inercia. 1 = sin suavizado. */
export const SCRUB_SMOOTHING = 0.16;

export const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
export const ramp = (t: number, [a, b]: readonly [number, number] | readonly number[]) =>
  clamp((t - a) / (b - a));
export const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);
export const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
