import SectionTitle from "../ui/SectionTitle";
import { Scissors, Sparkles, Gem, Award, User, SprayCan, Hash, Star } from "lucide-react";

interface GalleryProps {
  id: string;
}

const ICONS = [Scissors, Sparkles, Gem, Award, User, SprayCan, Hash, Star];

export default function Gallery({ id }: GalleryProps) {
  return (
    <section id={id} className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Galeria"
          subtitle="Nosso Trabalho"
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {ICONS.map((Icon, idx) => (
            <div
              key={idx}
              className="aspect-square bg-linear-to-br from-dark-brown to-[#1a1209] border border-accent/10 flex items-center justify-center group cursor-pointer overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon className="w-12 h-12 text-accent/20 group-hover:text-accent/40 group-hover:scale-110 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
