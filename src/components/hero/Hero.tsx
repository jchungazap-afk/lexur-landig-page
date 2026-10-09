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
    <section data-hero className="theme-dark text-white bg-black relative w-full min-h-[100dvh] flex flex-col items-center justify-between pt-20 pb-5 px-4 sm:px-8 overflow-hidden z-10">
      {/* Background Video with Contrast Protection Overlay */}
      <div className="absolute inset-0 bg-black overflow-hidden pointer-events-none -z-10">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark film and gradient vignetting so every letter is perfectly crisp */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black pointer-events-none" />
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
