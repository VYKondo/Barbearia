"use client";

import { Service } from "@/types";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Pega o ícone do lucide-react ou um padrão
  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[service.icon] || LucideIcons.Scissors;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-secondary border border-accent/10 p-8 text-center relative overflow-hidden transition-all duration-300 hover:border-accent/30 group"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex justify-center mb-6">
        <IconComponent className="w-10 h-10 text-accent" />
      </div>

      <h3 className="font-display text-lg tracking-[2px] text-accent mb-4 uppercase">
        {service.name}
      </h3>
      
      <p className="font-sans text-sm leading-relaxed text-cream-dark mb-6 min-h-[48px]">
        {service.description}
      </p>

      <div className="font-display text-2xl font-bold text-accent">
        R$ {service.price}
        <small className="text-[10px] font-normal text-cream-dark tracking-wider ml-2 uppercase">
          / serviço
        </small>
      </div>
    </motion.div>
  );
}
