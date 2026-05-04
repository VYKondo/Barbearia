"use client";

import { motion } from "framer-motion";

interface HeroProps {
  id: string;
}

export default function Hero({ id }: HeroProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Background matching provided CSS */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/30 via-primary/70 to-primary/95" />
        <div className="absolute inset-0 bg-linear-to-br from-dark-brown via-[#1a1209] to-secondary" />
        
        {/* Subtle grid line from jk.html */}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,var(--color-accent)_40px,var(--color-accent)_41px)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-accent px-8 py-3 font-sans italic text-accent text-sm tracking-[4px] mb-12">
            Desde 2015 — Tradição & Excelência
          </div>
          
          <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] font-black text-accent tracking-[10px] sm:tracking-[15px] leading-none mb-4 uppercase drop-shadow-[0_2px_20px_rgba(201,168,76,0.3)]">
            JK
          </h1>
          
          <h2 className="font-serif text-xl md:text-3xl font-normal italic text-cream tracking-[8px] mb-12 uppercase">
            Barbearia Clássica
          </h2>
          
          <p className="font-sans text-base md:text-lg text-cream-dark max-w-lg mx-auto mb-12 leading-relaxed italic">
            Onde a tradição encontra o estilo moderno. Uma experiência de barbearia
            que resgata a elegância dos clássicos com técnicas contemporâneas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contato"
              className="bg-accent text-primary font-display text-sm font-bold tracking-[3px] uppercase px-12 py-5 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300"
            >
              Agendar Horário
            </a>
            <a
              href="#servicos"
              className="bg-transparent text-cream font-display text-sm font-bold tracking-[3px] uppercase px-12 py-5 border border-cream-dark hover:border-accent hover:text-accent transition-all duration-300"
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Corners from jk.html style */}
      <div className="absolute top-12 left-12 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-12 h-[1px] bg-accent/40" />
        <div className="absolute top-0 left-0 w-[1px] h-12 bg-accent/40" />
      </div>
      <div className="absolute top-12 right-12 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 right-0 w-12 h-[1px] bg-accent/40" />
        <div className="absolute top-0 right-0 w-[1px] h-12 bg-accent/40" />
      </div>
      <div className="absolute bottom-12 left-12 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-12 h-[1px] bg-accent/40" />
        <div className="absolute bottom-0 left-0 w-[1px] h-12 bg-accent/40" />
      </div>
      <div className="absolute bottom-12 right-12 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-12 h-[1px] bg-accent/40" />
        <div className="absolute bottom-0 right-0 w-[1px] h-12 bg-accent/40" />
      </div>
    </section>
  );
}
