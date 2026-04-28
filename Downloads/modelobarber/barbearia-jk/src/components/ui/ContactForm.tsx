"use client";

import { useState } from "react";
import { ContactFormData } from "@/types";
import { SERVICES } from "@/lib/constants";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário de Agendamento:", formData);
    alert("Solicitação enviada! (Verifique o console)");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-display text-[10px] tracking-[2px] text-accent uppercase">
            Nome
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            className="bg-primary border border-accent/20 text-cream font-sans text-sm p-4 outline-none focus:border-accent transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-display text-[10px] tracking-[2px] text-accent uppercase">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            className="bg-primary border border-accent/20 text-cream font-sans text-sm p-4 outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-display text-[10px] tracking-[2px] text-accent uppercase">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="bg-primary border border-accent/20 text-cream font-sans text-sm p-4 outline-none focus:border-accent transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="font-display text-[10px] tracking-[2px] text-accent uppercase">
          Serviço Desejado
        </label>
        <select
          id="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="bg-primary border border-accent/20 text-cream font-sans text-sm p-4 outline-none focus:border-accent transition-colors appearance-none"
        >
          <option value="">Selecione um serviço</option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.id} className="bg-primary">
              {service.name} — R$ {service.price}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-display text-[10px] tracking-[2px] text-accent uppercase">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Data e horário de preferência, observações..."
          className="bg-primary border border-accent/20 text-cream font-sans text-sm p-4 outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-accent text-primary font-display text-sm font-bold tracking-[3px] uppercase py-5 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 cursor-pointer"
      >
        Enviar Agendamento
      </button>
    </form>
  );
}
