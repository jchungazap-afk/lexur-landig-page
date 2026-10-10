"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { NAV_LINKS } from "../../data/translations";

export default function Navbar() {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center p-4 sm:p-6 w-full pointer-events-none">
        <div className="flex items-center justify-between sm:justify-center w-full max-w-[760px] gap-3 sm:gap-6 pointer-events-auto animate-slide-down">
          {/* Logo Button */}
          <a
            href="#"
            className="grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition-transform duration-200 hover:scale-105 shrink-0"
            aria-label="LEXUR Home"
          >
            <div className="relative w-[72%] h-[72%]">
              <Image
                src="/assets/logo.webp"
                alt="LEXUR"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav Pill (White) */}
          <nav
            className="hidden md:flex items-center justify-around bg-white h-11 sm:h-12 max-w-[440px] flex-1 px-2 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.16)]"
            aria-label="Navegación Principal"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.key;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setActiveTab(link.key)}
                  className={`relative px-3 py-1.5 text-[14px] font-medium tracking-[-0.01em] text-[#2e2e2e] transition-opacity duration-200 ${
                    isActive ? "opacity-100 nav-link-active" : "opacity-50 hover:opacity-75"
                  }`}
                >
                  {link.label[language]}
                </a>
              );
            })}
          </nav>

          {/* Language Switcher Pill (Bilingual ES / EN, replacing Sign-in) */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="hidden sm:inline-flex items-center justify-center bg-[#28282a] hover:bg-[#323234] text-[#c8c8c8] hover:text-white h-11 sm:h-12 px-4 rounded-full text-[13px] font-medium tracking-[-0.01em] shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition-all duration-200 shrink-0 gap-1.5"
              title={language === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
              aria-label="Cambiar idioma"
            >
              <span className="text-[11px] tracking-wider font-semibold opacity-70">
                IDIOMA:
              </span>
              <span
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                  language === "es" ? "bg-white text-black" : "text-[#999]"
                }`}
              >
                ES
              </span>
              <span className="text-[#666]">/</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                  language === "en" ? "bg-white text-black" : "text-[#999]"
                }`}
              >
                EN
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex md:hidden flex-col items-center justify-center gap-1 w-11 h-11 rounded-full bg-[#28282a] text-white shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition-colors focus:outline-none"
              aria-expanded={isMobileOpen}
              aria-label="Abrir menú de navegación"
            >
              <span
                className={`block w-4 h-[1.5px] bg-white rounded-full transition-transform duration-200 ${
                  isMobileOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-4 h-[1.5px] bg-white rounded-full transition-opacity duration-200 ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-4 h-[1.5px] bg-white rounded-full transition-transform duration-200 ${
                  isMobileOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="fixed top-20 left-4 right-4 max-w-sm mx-auto bg-white rounded-3xl p-6 shadow-2xl z-50 text-black flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.key);
                    setIsMobileOpen(false);
                  }}
                  className={`py-3 px-4 text-center text-base font-medium rounded-xl transition-colors ${
                    activeTab === link.key
                      ? "bg-[#f4f4f4] text-black font-semibold"
                      : "text-[#555] hover:bg-[#f9f9f9]"
                  }`}
                >
                  {link.label[language]}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">
                {language === "es" ? "Idioma de la web" : "Site language"}:
              </span>
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setLanguage("es")}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                    language === "es"
                      ? "bg-black text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                    language === "en"
                      ? "bg-black text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
