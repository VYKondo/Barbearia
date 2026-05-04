import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Lora, Cinzel } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/layout/BackgroundEffects";
import "./globals.css";

import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Barbearia JK — Tradição & Estilo em São Paulo",
    template: "%s | Barbearia JK"
  },
  description: "A melhor barbearia clássica de São Paulo. Cortes de cabelo, barba com toalha quente e serviços premium. Tradição e estilo desde 2015.",
  keywords: ["barbearia", "barbeiro", "corte de cabelo masculino", "barba", "são paulo", "centro", "JK", "estilo masculino", "barba clássica"],
  authors: [{ name: "Barbearia JK" }],
  creator: "Barbearia JK",
  publisher: "Barbearia JK",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Barbearia JK — Tradição & Estilo",
    description: "Cortes clássicos, barba com toalha quente e o melhor do estilo masculino em São Paulo.",
    url: "https://barbeariaclassica-olive.vercel.app",
    siteName: "Barbearia JK",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbearia JK — Tradição & Estilo",
    description: "Cortes clássicos e o melhor do estilo masculino em São Paulo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} ${lora.variable} ${cinzel.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-primary text-cream antialiased">
        {/* Top Bar */}
        <div className="bg-accent-dark text-primary text-center py-2 px-4 text-[10px] sm:text-[13px] tracking-[1px] sm:tracking-[2px] font-sans font-bold z-50 relative">
          <span className="hidden xs:inline">Agendamento pelo WhatsApp: (11) 99999-9999 &nbsp;•&nbsp;</span>
          <span> Seg–Sáb: 9h às 20h</span>
        </div>
        <BackgroundEffects />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
