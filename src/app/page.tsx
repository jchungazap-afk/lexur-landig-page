import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import SaaSShowcase from "../components/saas/SaasShowcase";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/layout/Footer";
import LiquidGlassFx from "../components/common/LiquidGlassFx";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <SaaSShowcase />
      <ContactSection />
      <Footer />
      <LiquidGlassFx />
    </main>
  );
}
