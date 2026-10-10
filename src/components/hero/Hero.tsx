"use client";

import React from "react";
import TrustRow from "./TrustRow";
import Headline from "./Headline";
import Subhead from "./Subhead";
import CtaButton from "./CtaButton";
import StatsFooter from "../stats/StatsFooter";
import HeroPartnersTicker from "../partners/HeroPartnersTicker";

export default function Hero() {
  return (
    <section data-hero className="text-white bg-black relative w-full min-h-[100dvh] flex flex-col items-center justify-between pt-20 pb-5 px-4 sm:px-8 overflow-hidden z-10">
      {/* Fondo de marca: navy, trama de cuchillas a 48° y un horizonte (eclipse) con Lexur Flow */}
      <div aria-hidden className="hero-bg absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="hero-beam" />
        <div className="hero-hatch" />
        <div className="hero-horizon">
          <div className="hero-planet" />
        </div>
        <div className="hero-grain" />
      </div>

      {/* Hero Center Body */}
      <div className="flex flex-col items-center text-center max-w-[1050px] w-full my-auto z-10 py-2 sm:py-3 px-2">
        <TrustRow />
        <Headline />
        <Subhead />
        <CtaButton />
      </div>

      {/* Bottom Area: Stats + Partners Marquee Ticker */}
      <div className="w-full flex flex-col items-center gap-2.5 sm:gap-4 z-10 pb-1">
        <StatsFooter />
        <HeroPartnersTicker />
      </div>
    </section>
  );
}
