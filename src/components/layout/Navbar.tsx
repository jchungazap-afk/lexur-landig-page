"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { NAV_LINKS } from "../../data/translations";
import { Globe, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top blur gradient backdrop */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-full h-24 z-40 select-none bg-gradient-to-b from-black/80 via-black/30 to-transparent backdrop-blur-[6px]"
        aria-hidden="true"
      />

      {/* Floating Executive Navbar */}
      <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex items-center justify-center px-4 sm:px-6 w-full pointer-events-none">
        <div
          className={`flex items-center justify-between w-full max-w-6xl pointer-events-auto transition-all duration-300 py-2 px-3 sm:px-4 rounded-full border ${
            scrolled
              ? "bg-[#06080e]/90 border-white/15 shadow-[0_16px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl"
              : "bg-[#080b12]/80 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-lg"
          }`}
        >
          {/* Brand Left: Logo + Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="LEXUR Home"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/assets/logo.webp"
                alt="LEXUR"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
                LEXUR
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold px-1.5 py-0.2 rounded bg-white/5 border border-white/10">
                CORP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-2 py-1 rounded-full shadow-inner"
            aria-label="Navegación Principal"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.key;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setActiveTab(link.key)}
                  className={`relative whitespace-nowrap px-3.5 py-1.5 text-xs font-medium tracking-tight rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-black bg-white font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label[language]}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 shrink-0"
              title={language === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
              aria-label="Cambiar idioma"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span
                className={`px-1 rounded text-[10px] font-bold ${
                  language === "es" ? "bg-blue-600 text-white" : "text-zinc-400"
                }`}
              >
                ES
              </span>
              <span className="text-zinc-600">/</span>
              <span
                className={`px-1 rounded text-[10px] font-bold ${
                  language === "en" ? "bg-blue-600 text-white" : "text-zinc-400"
                }`}
              >
                EN
              </span>
            </button>

            {/* Quick Consultation CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-200 shadow-md group shrink-0"
            >
              <span>{language === "es" ? "Cotizar Software" : "Get Proposal"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white transition-colors"
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md md:hidden animate-fade-in"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="fixed top-20 left-4 right-4 max-w-sm mx-auto bg-[#0a0d14] border border-white/15 rounded-3xl p-6 shadow-2xl z-50 text-white flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">LEXUR CORP</span>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  CONSULTORÍA & SAAS
                </span>
              </div>
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
                      ? "bg-white text-black font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label[language]}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-400">
                {language === "es" ? "Idioma" : "Language"}:
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

            <a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="mt-2 w-full py-3 rounded-full bg-white text-black text-center text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <span>{language === "es" ? "Cotizar Proyecto" : "Get Proposal"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
