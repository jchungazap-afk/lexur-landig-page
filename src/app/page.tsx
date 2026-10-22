import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import FlowFeaturesBento from "@/components/sections/FlowFeaturesBento";
import SaaSShowcase from "@/components/saas/SaasShowcase";
import MethodologySection from "@/components/sections/MethodologySection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";
import LiquidGlassFx from "@/components/common/LiquidGlassFx";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col selection:bg-blue-500 selection:text-white">
      {/* Subtle architectural side-rails inspired by Shadcn Flow Landing Page */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1360px] border-x border-white/[0.06] z-30 hidden xl:block"
      />

      <Navbar />

      <main className="flex flex-1 flex-col">
        <Hero />
        <SectionDivider />
        <FlowFeaturesBento />
        <SectionDivider />
        <SaaSShowcase />
        <SectionDivider />
        <MethodologySection />
        <SectionDivider />
        <CaseStudiesSection />
        <SectionDivider />
        <FaqSection />
        <SectionDivider />
        <ContactSection />
        <SectionDivider />
      </main>

      <Footer />
      <LiquidGlassFx />
    </div>
  );
}
