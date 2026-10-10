import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import PartnersCarousel from "../components/partners/PartnersCarousel";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <Hero />
      <PartnersCarousel />
      <Footer />
    </main>
  );
}
