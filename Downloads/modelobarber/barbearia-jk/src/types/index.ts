export interface Service {
  id: string;
  icon: string; // Lucide icon name
  name: string;
  description: string;
  price: number;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  text: string;
  rating: 5;
}

export interface OperatingHours {
  day: string;
  hours: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  socials: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
}
