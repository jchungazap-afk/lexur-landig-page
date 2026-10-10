import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata: Metadata = {
  title: "LEXUR — Consultoría de Software & Soluciones Cloud",
  description:
    "Consultoría de software e ingeniería cloud de alta precisión. Suites SaaS empresariales y arquitecturas digitales de misión crítica.",
  icons: {
    icon: "/assets/logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full bg-black text-white antialiased">
      <head>
        {/* 1. Google Fonts: Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* 2. BubbledotICG-FinePos via OnlineWebFonts CDN */}
        <link
          href="https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos"
          rel="stylesheet"
        />

        {/* 4. Font Awesome 6.5.2 from cdnjs */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-full bg-black text-white overflow-x-hidden selection:bg-white selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
