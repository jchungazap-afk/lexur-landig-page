"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import { Language } from "../types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANG_EVENT = "lexur-lang-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANG_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANG_EVENT, callback);
  };
}

function getSnapshot(): Language {
  try {
    const saved = localStorage.getItem("lexur_lang");
    return saved === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function getServerSnapshot(): Language {
  return "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleSetLanguage = (lang: Language) => {
    try {
      localStorage.setItem("lexur_lang", lang);
      window.dispatchEvent(new Event(LANG_EVENT));
    } catch {
      /* storage unavailable */
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "es" ? "en" : "es";
    handleSetLanguage(nextLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
