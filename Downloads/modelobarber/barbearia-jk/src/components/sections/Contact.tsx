"use client";

import SectionTitle from "../ui/SectionTitle";
import ContactForm from "../ui/ContactForm";
import { CONTACT_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface ContactProps {
  id: string;
}

export default function Contact({ id }: ContactProps) {
  const contactDetails = [
    { icon: MapPin, title: "Endereço", content: CONTACT_INFO.address },
    { icon: Phone, title: "Telefone / WhatsApp", content: CONTACT_INFO.phone },
    { icon: Mail, title: "E-mail", content: CONTACT_INFO.email },
    { icon: Share2, title: "Redes Sociais", content: "@barbeariajk" },
  ];

  return (
    <section id={id} className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Contato & Agendamento"
            subtitle="Fale Conosco"
            light
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 border border-accent-dark flex items-center justify-center text-accent bg-secondary">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-display text-xs tracking-[2px] text-accent uppercase">
                    {item.title}
                  </h4>
                  <p className="font-sans text-sm md:text-base text-cream-dark leading-relaxed max-w-sm whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-secondary border border-accent/10 p-10 md:p-12 shadow-2xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
