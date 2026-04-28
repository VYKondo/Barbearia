"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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

  return (
    <header className={cn(
      "sticky top-0 left-0 right-0 z-50 border-b-2 border-accent-dark transition-all duration-300",
      isScrolled ? "bg-secondary/95 backdrop-blur-sm" : "bg-secondary"
    )}>
      {/* Main Nav */}
      <nav className="px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
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
            className="md:hidden text-accent p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[84px] bg-secondary z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8 border-t border-accent-dark/20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="font-display text-2xl tracking-[4px] text-cream hover:text-accent uppercase"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
