"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Instagram, Facebook, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Horários", href: "#horarios" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll quando o menu estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll"; // Keep scrollbar space
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [mobileMenuOpen]);

  return (
    <header className={cn(
      "sticky top-0 left-0 right-0 z-50 border-b-2 border-accent-dark transition-all duration-300",
      isScrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-secondary"
    )}>
      {/* Main Nav */}
      <nav className="px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group relative z-70">
            <div className="w-12 h-12 border-2 border-accent rounded-full flex items-center justify-center font-display font-black text-accent text-xl transition-transform group-hover:scale-110">
              JK
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-black text-accent tracking-[4px] uppercase">JK</span>
              <span className="font-sans text-[9px] italic text-accent-light tracking-[3px] uppercase mt-1">Barbearia Clássica</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-[11px] tracking-[2px] text-cream hover:text-accent uppercase transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-accent p-2 relative z-70 hover:bg-accent/10 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-secondary z-60 md:hidden flex flex-col h-[100dvh] backdrop-blur-none"
          >
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,var(--color-accent)_20px,var(--color-accent)_21px)]" />
            
            <div className="flex flex-col h-full pt-32 pb-12 px-10 relative z-10 overflow-y-auto overflow-x-hidden">
              <div className="flex flex-col gap-1 items-center mb-12">
                <span className="font-display text-accent text-[10px] tracking-[5px] uppercase">Menu</span>
                <div className="w-12 h-[1px] bg-accent/30 mt-2" />
              </div>

              <nav className="flex flex-col items-center gap-8 flex-grow">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex flex-col items-center"
                    >
                      <span className="font-display text-3xl tracking-[6px] text-cream hover:text-accent uppercase transition-colors">
                        {link.label}
                      </span>
                      <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full mt-1" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Menu Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center gap-8 pt-8 border-t border-accent/10"
              >
                <div className="flex gap-6">
                  <Link href="#" className="text-cream-dark hover:text-accent transition-colors">
                    <Instagram size={20} />
                  </Link>
                  <Link href="#" className="text-cream-dark hover:text-accent transition-colors">
                    <Facebook size={20} />
                  </Link>
                  <Link href="#" className="text-cream-dark hover:text-accent transition-colors">
                    <MessageCircle size={20} />
                  </Link>
                </div>
                
                <p className="font-sans text-[10px] text-accent/50 tracking-[2px] uppercase text-center">
                  Tradição & Estilo desde 2015
                </p>
              </motion.div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none border-b-4 border-r-4 border-accent m-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
