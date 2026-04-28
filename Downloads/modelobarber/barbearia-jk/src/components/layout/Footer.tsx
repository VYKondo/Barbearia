import Link from "next/link";
import { Instagram, Facebook, MessageCircle, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t-2 border-accent-dark pt-20 pb-10 px-6 font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-accent/10">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="font-display text-4xl font-black text-accent tracking-[6px] uppercase">JK</div>
            <p className="font-sans italic text-cream-dark text-sm leading-relaxed max-w-[280px]">
              Mais do que uma barbearia, um espaço onde tradição, estilo e
              excelência se encontram para oferecer a melhor experiência masculina.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-8">
            <h4 className="font-display text-[10px] tracking-[3px] text-accent uppercase">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {["Início", "Sobre", "Serviços", "Horários", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace("í", "i")}`}
                    className="font-sans text-[13px] text-cream-dark hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="flex flex-col gap-8">
            <h4 className="font-display text-[10px] tracking-[3px] text-accent uppercase">Serviços</h4>
            <ul className="flex flex-col gap-3">
              {["Corte Clássico", "Barba Completa", "Tratamento Premium", "Pigmentação", "Barboterapia"].map((item) => (
                <li key={item}>
                  <Link
                    href="#servicos"
                    className="font-sans text-[13px] text-cream-dark hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-8">
            <h4 className="font-display text-[10px] tracking-[3px] text-accent uppercase">Siga-nos</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: MessageCircle, href: "#", label: "WhatsApp" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  title={social.label}
                  className="w-10 h-10 border border-accent/30 flex items-center justify-center text-cream-dark hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="font-sans text-[10px] text-cream-dark/50 tracking-[2px] uppercase">
            © 2026 Barbearia JK — Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="font-sans text-[10px] text-cream-dark/50 hover:text-accent tracking-[2px] uppercase transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="font-sans text-[10px] text-cream-dark/50 hover:text-accent tracking-[2px] uppercase transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
