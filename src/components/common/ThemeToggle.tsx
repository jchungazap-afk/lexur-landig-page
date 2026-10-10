"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "./Icons";

type Theme = "dark" | "light";

const subscribe = (cb: () => void) => {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
};
const getTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

export function useTheme() {
  return useSyncExternalStore(subscribe, getTheme, () => "dark" as Theme);
}

export default function ThemeToggle({ language }: { language: "es" | "en" }) {
  const theme = useTheme();
  const next: Theme = theme === "dark" ? "light" : "dark";
  const label =
    language === "es"
      ? next === "light" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
      : next === "light" ? "Switch to light theme" : "Switch to dark theme";

  const toggle = () => {
    document.documentElement.dataset.theme = next;
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("lexur_theme", next);
    } catch {
      /* almacenamiento bloqueado: el tema dura solo esta visita */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="relative grid place-items-center w-8 h-8 rounded-full border border-white/10 bg-white/[0.05] text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-colors shrink-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-white"
    >
      <Sun
        aria-hidden
        className={`w-4 h-4 absolute transition-all duration-500 ${theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`}
      />
      <Moon
        aria-hidden
        className={`w-4 h-4 absolute transition-all duration-500 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"}`}
      />
    </button>
  );
}
