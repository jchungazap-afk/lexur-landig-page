"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="w-full bg-[#030407] border-t border-white/10 py-12 px-6 text-[#8e8e8e] text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full bg-white grid place-items-center p-1">
            <Image
              src="/assets/logo.webp"
              alt="LEXUR"
              width={22}
              height={22}
              className="object-contain"
            />
          </div>
          <span className="text-white font-semibold tracking-wider text-sm">
            LEXUR CORP
          </span>
        </div>

        {/* Operational Status indicator */}
        <div className="flex items-center gap-2 bg-[#0d1117] border border-white/10 px-3 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] text-[#a1a1aa] font-medium">
            {language === "es"
              ? "Sistemas en Operación • 99.99% Uptime"
              : "All Systems Operational • 99.99% Uptime"}
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center sm:text-right text-[#71717a]">
          © 2026 LEXUR Software Solutions Corp.{" "}
          {language === "es"
            ? "Todos los derechos reservados."
            : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
