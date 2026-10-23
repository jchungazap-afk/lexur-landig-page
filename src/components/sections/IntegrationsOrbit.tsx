"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import {
  GoogleCloudIcon,
  AzureIcon,
  AwsIcon,
  StripeIcon,
  PostgresIcon,
  DockerIcon,




} from "../common/BrandIcons";

export default function IntegrationsOrbit() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full min-h-[90vh] bg-black py-20 md:py-28 overflow-hidden z-20 flex items-center justify-center border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Descriptive Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              {language === "es" ? "ECOSISTEMA & INFRAESTRUCTURA" : "ECOSYSTEM & INFRASTRUCTURE"}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.12]">
              {language === "es" ? "Integraciones sin límites." : "Seamless integrations."}
            </h2>

            <p className="max-w-xl text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-8">
              {language === "es"
                ? "Conectamos de forma nativa con los proveedores cloud, motores de datos y plataformas de pago más confiables del mundo. Orquestamos tu infraestructura existente con cero fricción y máxima seguridad."
                : "Connect seamlessly with world-class cloud providers, database engines, and payment gateways. We orchestrate everything cleanly with zero friction and bank-grade security."}
            </p>

            {/* Pill Tags */}
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              <span className="px-3.5 py-1.5 bg-zinc-900 border border-white/10 rounded-full text-xs font-medium text-zinc-300">
                {language === "es" ? "Arquitectura Modular" : "Modular Architecture"}
              </span>
              <span className="px-3.5 py-1.5 bg-zinc-900 border border-white/10 rounded-full text-xs font-medium text-zinc-300">
                {language === "es" ? "Cero Vendor Lock-in" : "Zero Vendor Lock-in"}
              </span>
              <span className="px-3.5 py-1.5 bg-zinc-900 border border-white/10 rounded-full text-xs font-medium text-zinc-300">
                {language === "es" ? "APIs de Alta Concurrencia" : "Extensible Microservices"}
              </span>
            </div>
          </div>

          {/* Right Column: Concentric Rotating Orbits */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[360px] sm:min-h-[440px]">
            <div className="aspect-square relative mx-auto flex w-full max-w-[22rem] sm:max-w-[26rem] items-center justify-center overflow-visible p-6">
              {/* Outer Orbit Circle */}
              <div
                className="absolute inset-4 sm:inset-6 flex aspect-square items-center justify-center rounded-full border border-white/15 bg-gradient-to-b from-white/5 to-transparent"
                style={{
                  boxShadow: "0 0 60px rgba(59,130,246,0.06)",
                }}
              >
                {/* Outer Orbiting Icons */}
                {/* 1. AWS */}
                <div
                  className="absolute top-0 left-1/2 h-1/2 -ml-6 origin-bottom flex flex-col justify-start items-center pointer-events-none"
                  style={{
                    "--start-angle": "-60deg",
                    animation: "orbit-cw 28s linear infinite",
                  } as React.CSSProperties}
                >
                  <div
                    className="-mt-6 pointer-events-auto"
                    style={{
                      "--start-angle": "-60deg",
                      animation: "counter-cw 28s linear infinite",
                    } as React.CSSProperties}
                  >
                    <div className="flex size-12 rounded-full border border-white/20 bg-zinc-900 shadow-md hover:scale-110 transition-transform items-center justify-center">
                      <AwsIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* 2. Google Cloud */}
                <div
                  className="absolute top-0 left-1/2 h-1/2 -ml-6 origin-bottom flex flex-col justify-start items-center pointer-events-none"
                  style={{
                    "--start-angle": "60deg",
                    animation: "orbit-cw 28s linear infinite",
                  } as React.CSSProperties}
                >
                  <div
                    className="-mt-6 pointer-events-auto"
                    style={{
                      "--start-angle": "60deg",
                      animation: "counter-cw 28s linear infinite",
                    } as React.CSSProperties}
                  >
                    <div className="flex size-12 rounded-full border border-white/20 bg-zinc-900 shadow-md hover:scale-110 transition-transform items-center justify-center">
                      <GoogleCloudIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* 3. Azure */}
                <div
                  className="absolute top-0 left-1/2 h-1/2 -ml-6 origin-bottom flex flex-col justify-start items-center pointer-events-none"
                  style={{
                    "--start-angle": "180deg",
                    animation: "orbit-cw 28s linear infinite",
                  } as React.CSSProperties}
                >
                  <div
                    className="-mt-6 pointer-events-auto"
                    style={{
                      "--start-angle": "180deg",
                      animation: "counter-cw 28s linear infinite",
                    } as React.CSSProperties}
                  >
                    <div className="flex size-12 rounded-full border border-white/20 bg-zinc-900 shadow-md hover:scale-110 transition-transform items-center justify-center">
                      <AzureIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Inner Orbit Circle */}
              <div className="absolute inset-16 sm:inset-20 flex aspect-square items-center justify-center rounded-full border border-white/20 bg-gradient-to-b from-white/10 to-transparent">
                {/* Inner Orbiting Icons */}
                {/* 4. Stripe */}
                <div
                  className="absolute top-0 left-1/2 h-1/2 -ml-5 origin-bottom flex flex-col justify-start items-center pointer-events-none"
                  style={{
                    "--start-angle": "-45deg",
                    animation: "orbit-ccw 22s linear infinite",
                  } as React.CSSProperties}
                >
                  <div
                    className="-mt-5 pointer-events-auto"
                    style={{
                      "--start-angle": "-45deg",
                      animation: "counter-ccw 22s linear infinite",
                    } as React.CSSProperties}
                  >
                    <div className="flex size-10 rounded-full border border-white/20 bg-zinc-900 shadow-md hover:scale-110 transition-transform items-center justify-center">
                      <StripeIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* 5. PostgreSQL */}
                <div
                  className="absolute top-0 left-1/2 h-1/2 -ml-5 origin-bottom flex flex-col justify-start items-center pointer-events-none"
                  style={{
                    "--start-angle": "75deg",
                    animation: "orbit-ccw 22s linear infinite",
                  } as React.CSSProperties}
                >
                  <div
                    className="-mt-5 pointer-events-auto"
                    style={{
                      "--start-angle": "75deg",
                      animation: "counter-ccw 22s linear infinite",
                    } as React.CSSProperties}
                  >
                    <div className="flex size-10 rounded-full border border-white/20 bg-zinc-900 shadow-md hover:scale-110 transition-transform items-center justify-center">
                      <PostgresIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* 6. Docker */}
                <div
                  className="absolute top-0 left-1/2 h-1/2 -ml-5 origin-bottom flex flex-col justify-start items-center pointer-events-none"
                  style={{
                    "--start-angle": "195deg",
                    animation: "orbit-ccw 22s linear infinite",
                  } as React.CSSProperties}
                >
                  <div
                    className="-mt-5 pointer-events-auto"
                    style={{
                      "--start-angle": "195deg",
                      animation: "counter-ccw 22s linear infinite",
                    } as React.CSSProperties}
                  >
                    <div className="flex size-10 rounded-full border border-white/20 bg-zinc-900 shadow-md hover:scale-110 transition-transform items-center justify-center">
                      <DockerIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Orbit Hub: Glowing LEXUR Mark */}
              <div className="relative z-30 flex size-16 sm:size-20 items-center justify-center rounded-full bg-black border border-white/25 shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                  <Image
                    src="/brand/lexur-simbolo.svg"
                    alt="LEXUR Core"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
