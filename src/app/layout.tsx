import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

// Tipografía empresarial moderna: Plus Jakarta Sans (Display/Titulares) + Inter (UI/Cuerpo) + JetBrains Mono (Telemetría/Datos)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

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
    { media: "(prefers-color-scheme: dark)", color: "#111110" },
    { media: "(prefers-color-scheme: light)", color: "#EBE9E5" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`h-full antialiased ${jakarta.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-full bg-black text-white overflow-x-hidden selection:bg-white selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
