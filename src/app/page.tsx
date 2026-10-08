import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import SaaSShowcase from "../components/sections/SaaSShowcase";
import ConsultingServices from "../components/sections/ConsultingServices";
import PartnersCarousel from "../components/partners/PartnersCarousel";
import MethodologySection from "../components/sections/MethodologySection";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import CtaBanner from "../components/sections/CtaBanner";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <SaaSShowcase />
      <ConsultingServices />
      <PartnersCarousel />
      <MethodologySection />
      <CaseStudiesSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
