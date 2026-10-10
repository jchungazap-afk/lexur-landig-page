import type { Metadata, Viewport } from "next";
import { Lexend, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

// Tipografías del manual de marca LEXUR v2
const lexend = Lexend({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-lexend", display: "swap" });
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains", display: "swap" });

// Se ejecuta antes de pintar: evita el parpadeo al cargar el tema guardado o vía URL (?theme=light/dark)
const THEME_SCRIPT = `(function(){try{var t=new URLSearchParams(window.location.search).get("theme")||localStorage.getItem("lexur_theme")||"dark";if(t!=="light"&&t!=="dark"){t="dark"}document.documentElement.dataset.theme=t;document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://lexur.pe"),
  title: {
    default: "LEXUR · Tecnología que trabaja contigo",
    template: "%s · LEXUR",
  },
  description:
    "Sistemas empresariales y software a medida para empresas en Perú: punto de venta e inventario, historia clínica, ópticas e infraestructura cloud.",
  applicationName: "LEXUR",
  icons: { icon: "/brand/lexur-simbolo.svg" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "LEXUR",
    title: "LEXUR · Tecnología que trabaja contigo",
    description:
      "Sistemas empresariales y software a medida para empresas en Perú.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050d20" },
    { media: "(prefers-color-scheme: light)", color: "#eef2f8" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`h-full antialiased ${lexend.variable} ${plex.variable} ${jetbrains.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />

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
