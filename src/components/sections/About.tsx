"use client";

import SectionTitle from "../ui/SectionTitle";
import StatsCard from "../ui/StatsCard";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutProps {
  id: string;
}

export default function About({ id }: AboutProps) {
  return (
    <section id={id} className="py-24 bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Sobre a Barbearia JK"
            subtitle="Nossa História"
            light
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-4/5 border border-accent-dark overflow-hidden group shadow-2xl"
          >
            <Image
              src="/painelsobre.png"
              alt="Ambiente da Barbearia JK"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute inset-4 border border-accent-dark/30 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-accent italic">
              Mais do que um corte — uma experiência
            </h3>
            
            <p className="font-sans text-cream-dark leading-relaxed">
              Fundada em 2015, a Barbearia JK nasceu da paixão pela arte clássica
              de barbear. Em um ambiente que remete às tradicionais barbearias
              europeias, oferecemos serviços de excelência com atenção a cada detalhe.
            </p>
            
            <p className="font-sans text-cream-dark leading-relaxed">
              Nossos barbeiros são mestres em técnicas tradicionais e modernas,
              garantindo que cada cliente saia não apenas com um excelente corte,
              mas com uma experiência inesquecível. Aqui, cada visita é um ritual
              de cuidado e sofisticação.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-accent/20">
              <StatsCard value="10+" label="Anos de experiência" />
              <StatsCard value="15k+" label="Clientes atendidos" />
              <StatsCard value="4" label="Especialistas" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
