import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

interface TestimonialsProps {
  id: string;
}

export default function Testimonials({ id }: TestimonialsProps) {
  return (
    <section id={id} className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="O Que Dizem Nossos Clientes"
          subtitle="Depoimentos"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
