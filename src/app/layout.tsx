import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Lora, Cinzel } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/layout/BackgroundEffects";
import "./globals.css";

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
  title: "Barbearia JK — Tradição & Estilo",
  description: "Mais do que uma barbearia, um espaço onde tradição, estilo e excelência se encontram para oferecer a melhor experiência masculina.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} ${lora.variable} ${cinzel.variable}`}>
      <body className="bg-primary text-cream antialiased">
        {/* Top Bar */}
        <div className="bg-accent-dark text-primary text-center py-2 px-4 text-[13px] tracking-[2px] font-sans font-bold z-50 relative">
          Agendamento pelo WhatsApp: (11) 99999-9999 &nbsp;•&nbsp; Seg–Sáb: 9h às 20h
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
