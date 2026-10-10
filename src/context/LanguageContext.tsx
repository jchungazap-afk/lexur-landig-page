"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "../types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Spanish as requested for the software consulting business
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const saved = localStorage.getItem("lexur_lang") as Language | null;
    if (saved && (saved === "es" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("lexur_lang", lang);
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
