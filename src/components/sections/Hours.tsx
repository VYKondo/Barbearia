import SectionTitle from "../ui/SectionTitle";
import { OPERATING_HOURS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface HoursProps {
  id: string;
}

export default function Hours({ id }: HoursProps) {
  return (
    <section id={id} className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Horários"
          subtitle="Funcionamento"
          light
        />

        <div className="max-w-2xl mx-auto mt-12 bg-secondary border border-accent/20 p-10 md:p-14 relative overflow-hidden shadow-2xl">
          {/* Decorative Diamond symbols */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent text-sm">✦</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-accent text-sm">✦</div>
          
          <div className="space-y-4">
            {OPERATING_HOURS.map((row) => (
              <div
                key={row.day}
                className="flex justify-between items-center py-5 border-b border-accent/10 last:border-0"
              >
                <span className="font-sans text-sm md:text-base text-cream tracking-wide uppercase">
                  {row.day}
                </span>
                <span
                  className={cn(
                    "font-display text-sm md:text-base tracking-widest",
                    row.hours.toLowerCase().includes("fechado")
                      ? "text-barber-red font-bold"
                      : "text-accent"
                  )}
                >
                  {row.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
