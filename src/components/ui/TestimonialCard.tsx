import { Testimonial } from "@/types";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-primary border border-accent/10 p-10 relative flex flex-col h-full shadow-2xl">
      <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/10 rotate-180" />
      
      <p className="font-sans italic text-sm md:text-base leading-relaxed text-cream-dark mb-10 relative z-10 flex-grow">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-accent-dark flex items-center justify-center font-display text-sm font-bold text-accent bg-secondary shrink-0">
          {testimonial.initials}
        </div>
        <div className="flex flex-col">
          <span className="font-display text-xs tracking-[2px] text-cream uppercase">
            {testimonial.name}
          </span>
          <div className="flex gap-1 mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-accent text-[10px]">★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
