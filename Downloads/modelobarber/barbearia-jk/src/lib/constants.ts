import { Service, Testimonial, OperatingHours, ContactInfo } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "corte-classico",
    icon: "Scissors",
    name: "Corte Clássico",
    description: "Corte tradicional com tesoura e máquina, acabamento perfeito e finalização com navalha.",
    price: 55,
  },
  {
    id: "barba-completa",
    icon: "User", 
    name: "Barba Completa",
    description: "Modelagem de barba com toalha quente, navalha clássica e hidratação com produtos premium.",
    price: 45,
  },
  {
    id: "corte-barba",
    icon: "Sparkles", 
    name: "Corte + Barba",
    description: "O combo completo: corte clássico e barba modelada com o ritual completo de cuidados.",
    price: 85,
  },
  {
    id: "tratamento-premium",
    icon: "Crown",
    name: "Tratamento Premium",
    description: "Corte, barba, hidratação capilar, massagem facial e finalização com produtos importados.",
    price: 120,
  },
  {
    id: "pigmentacao",
    icon: "SprayCan",
    name: "Pigmentação",
    description: "Coloração profissional para cabelo e barba, com produtos de alta qualidade e resultado natural.",
    price: 60,
  },
  {
    id: "barboterapia",
    icon: "Zap",
    name: "Barboterapia",
    description: "Tratamento terapêutico para a pele com óleos essenciais, toalha quente e massagem relaxante.",
    price: 40,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ricardo Mendes",
    initials: "RM",
    text: "Melhor barbearia que já frequentei. O ambiente é incrível e o atendimento é impecável. Saio sempre renovado depois de cada visita.",
    rating: 5,
  },
  {
    id: "2",
    name: "Pedro Santos",
    initials: "PS",
    text: "A atenção aos detalhes é impressionante. Desde a toalha quente até o acabamento final, tudo é feito com maestria e dedicação.",
    rating: 5,
  },
  {
    id: "3",
    name: "Lucas Almeida",
    initials: "LA",
    text: "Encontrei meu lugar definitivo. A JK combina tradição e qualidade como nenhuma outra. Recomendo a todos os meus amigos.",
    rating: 5,
  },
];

export const OPERATING_HOURS: OperatingHours[] = [
  { day: "Segunda-feira", hours: "09:00 — 20:00" },
  { day: "Terça-feira", hours: "09:00 — 20:00" },
  { day: "Quarta-feira", hours: "09:00 — 20:00" },
  { day: "Quinta-feira", hours: "09:00 — 20:00" },
  { day: "Sexta-feira", hours: "09:00 — 20:00" },
  { day: "Sábado", hours: "08:00 — 18:00" },
  { day: "Domingo", hours: "Fechado" },
];

export const CONTACT_INFO: ContactInfo = {
  address: "Rua da Tradição, 123 — Centro, São Paulo, SP — CEP 01000-000",
  phone: "(11) 99999-9999 / (11) 3333-3333",
  email: "contato@barbeariajk.com.br",
  socials: {
    instagram: "https://instagram.com/barbeariajk",
    facebook: "https://facebook.com/barbeariajk",
    whatsapp: "https://wa.me/5511999999999",
  },
};
