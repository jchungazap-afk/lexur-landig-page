import Navbar from "../components/layout/Navbar";
import CinematicScrollHero from "../components/hero/CinematicScrollHero";
import IntegrationsOrbit from "../components/sections/IntegrationsOrbit";
import SaaSShowcase from "../components/sections/SaaSShowcase";
import ConsultingServices from "../components/sections/ConsultingServices";
import MethodologySection from "../components/sections/MethodologySection";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import CtaBanner from "../components/sections/CtaBanner";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col selection:bg-blue-500 selection:text-white">
      <Navbar />
      <CinematicScrollHero />
      <IntegrationsOrbit />
      <SaaSShowcase />
      <ConsultingServices />
      <MethodologySection />
      <CaseStudiesSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
