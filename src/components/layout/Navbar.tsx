"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { NAV_LINKS } from "../../data/translations";
import { Globe, Menu, X } from "lucide-react";

export default function Navbar() {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <>
      {/* Top subtle blur gradient mask */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-full h-24 z-30 select-none bg-gradient-to-b from-black/90 via-black/40 to-transparent backdrop-blur-[6px]"
        aria-hidden="true"
      />

      {/* Floating Dark Precision Island Header */}
      <header className="fixed top-3 sm:top-4 left-0 right-0 z-40 flex items-center justify-center px-4 w-full pointer-events-none">
        <div className="flex items-center justify-between sm:justify-center w-full max-w-[940px] pointer-events-auto animate-slide-down">
          {/* Main Floating Capsule */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)] w-full sm:w-auto justify-between sm:justify-start">
            {/* Brand Logo Button */}
            <a
              href="#"
              className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-900/90 border border-white/10 shadow-inner transition-transform duration-200 hover:scale-105 shrink-0"
              aria-label="LEXUR Home"
            >
              <div className="relative w-[70%] h-[70%]">
                <Image
                  src="/assets/logo.webp"
                  alt="LEXUR"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-1 px-1"
              aria-label="Navegación Principal"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeTab === link.key;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => setActiveTab(link.key)}
                    className={`relative whitespace-nowrap px-3 py-1.5 text-[13px] font-medium tracking-tight rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] font-semibold"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label[language]}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Language Switcher */}
            <div className="hidden sm:flex items-center pl-1 border-l border-white/10 ml-1">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-300 hover:text-white px-2.5 py-1 rounded-full text-xs font-mono transition-all duration-200 shrink-0"
                title={language === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
                aria-label="Cambiar idioma"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span
                  className={`px-1 py-0.5 rounded text-[10px] font-bold ${
                    language === "es" ? "bg-blue-600 text-white" : "text-zinc-400"
                  }`}
                >
                  ES
                </span>
                <span className="text-zinc-600">/</span>
                <span
                  className={`px-1 py-0.5 rounded text-[10px] font-bold ${
                    language === "en" ? "bg-blue-600 text-white" : "text-zinc-400"
                  }`}
                >
                  EN
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex md:hidden items-center justify-center w-9 h-9 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white transition-colors"
              aria-expanded={isMobileOpen}
              aria-label="Menú de navegación"
            >
              {isMobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md md:hidden animate-fade-in"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="fixed top-18 left-4 right-4 max-w-sm mx-auto bg-zinc-950/95 border border-white/10 rounded-3xl p-6 shadow-2xl z-50 text-white flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-sm font-semibold tracking-wide text-zinc-300">
                LEXUR CORP
              </span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.key);
                    setIsMobileOpen(false);
                  }}
                  className={`py-2.5 px-3.5 text-sm font-medium rounded-xl transition-colors ${
                    activeTab === link.key
                      ? "bg-white/10 text-white font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label[language]}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-400">
                {language === "es" ? "Idioma de la web" : "Language"}:
              </span>
              <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
                <button
                  onClick={() => setLanguage("es")}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                    language === "es"
                      ? "bg-blue-600 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                    language === "en"
                      ? "bg-blue-600 text-white"
                      : "text-zinc-400 hover:text-white"
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
