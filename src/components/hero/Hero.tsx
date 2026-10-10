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
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-between pt-24 pb-6 sm:pb-8 px-4 sm:px-8 overflow-hidden z-10">
      {/* Background Video */}
      <div className="absolute inset-0 bg-black overflow-hidden pointer-events-none -z-10">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
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
      </div>

      {/* Hero Center Body */}
      <div className="flex flex-col items-center text-center max-w-[900px] w-full my-auto z-10 py-6 sm:py-8">
        <TrustRow />
        <Headline />
        <Subhead />
        <CtaButton />
      </div>

      {/* Bottom Area: Stats + Partners Marquee Ticker */}
      <div className="w-full flex flex-col items-center gap-4 sm:gap-6 z-10">
        <StatsFooter />
        <HeroPartnersTicker />
      </div>
    </section>
  );
}
