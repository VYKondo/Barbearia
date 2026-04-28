import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({ title, subtitle, light, className }: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col items-center text-center mb-12", className)}>
      {subtitle && (
        <p className="font-sans italic text-accent text-base tracking-[3px] mb-2">
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-5xl font-bold tracking-[4px] uppercase mb-6",
          light ? "text-cream" : "text-primary"
        )}
      >
        {title}
      </h2>
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="h-[1px] w-20 bg-linear-to-r from-transparent via-accent/50 to-transparent" />
        <div className="w-2 h-2 bg-accent rotate-45 shrink-0" />
        <div className="h-[1px] w-20 bg-linear-to-r from-transparent via-accent/50 to-transparent" />
      </div>
    </div>
  );
}
