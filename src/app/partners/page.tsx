import PartnersCarousel from "../../components/partners/PartnersCarousel";
import Navbar from "../../components/layout/Navbar";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Navbar />
      <PartnersCarousel />
    </main>
  );
}
