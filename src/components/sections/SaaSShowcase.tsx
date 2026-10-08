"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";
import { SAAS_PRODUCTS } from "../../data/products";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SaaSShowcase() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].saas;
  const [selectedId, setSelectedId] = useState<string>(SAAS_PRODUCTS[0].id);

  const activeProduct =
    SAAS_PRODUCTS.find((p) => p.id === selectedId) || SAAS_PRODUCTS[0];

  return (
    <section
      id="saas"
      className="relative w-full py-24 sm:py-32 bg-[#000000] border-t border-white/10 z-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#3B82F6] mb-3 bg-[#0c1322] px-3.5 py-1 rounded-full border border-blue-500/20">
            {t.overline}
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            {t.title}
          </h2>
          <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Product Selector Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {SAAS_PRODUCTS.map((prod) => {
            const isActive = prod.id === selectedId;
            return (
              <button
                key={prod.id}
                onClick={() => setSelectedId(prod.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "bg-[#0c0f17] text-[#8e8e8e] border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                <span>{prod.name}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? "bg-black/10 text-black font-bold" : "bg-white/5 text-[#71717a]"
                  }`}
                >
                  {prod.badge.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Product Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#07090e] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 items-center">
          {/* Left Column: Product Information & Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-md mb-4 border border-blue-500/20">
                {activeProduct.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug mb-3">
                {activeProduct.tagline[language]}
              </h3>
              <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed font-normal">
                {activeProduct.description[language]}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] font-mono tracking-wider text-[#71717a] uppercase block mb-3">
                {t.metricsLabel}
              </span>
              <div className="grid grid-cols-3 gap-3">
                {activeProduct.metrics.map((m, idx) => (
                  <div key={idx} className="bg-[#0f131d] p-3 rounded-xl border border-white/5">
                    <span className="text-base sm:text-lg font-bold text-white font-mono block">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-[#8e8e8e] leading-tight block mt-0.5">
                      {m.label[language]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[11px] font-mono tracking-wider text-[#71717a] uppercase block mb-2">
                {t.featureLabel}
              </span>
              {activeProduct.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d4d4d8]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat[language]}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#eaeaea] text-black text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md group"
              >
                <span>{t.demoCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: System Screenshot Preview */}
          <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[450px] lg:h-[540px] rounded-2xl overflow-hidden border border-white/10 bg-[#020305] shadow-2xl group">
            <Image
              src={activeProduct.image}
              alt={activeProduct.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Minimalist Top Control Bar simulating browser window */}
            <div className="absolute top-0 left-0 right-0 h-9 bg-black/70 backdrop-blur-md border-b border-white/10 px-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-[11px] font-mono text-gray-400 truncate max-w-[220px]">
                {activeProduct.name.toLowerCase().replace(/\s+/g, "-")}.lexur.cloud
              </span>
              <div className="w-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
