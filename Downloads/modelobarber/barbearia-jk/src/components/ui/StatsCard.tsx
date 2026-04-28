interface StatsCardProps {
  value: string;
  label: string;
}

export default function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="text-center group">
      <div className="font-display text-3xl md:text-4xl font-black text-accent leading-none mb-3 transition-transform duration-500 group-hover:scale-110">
        {value}
      </div>
      <div className="font-sans text-[9px] md:text-xs tracking-[2px] uppercase text-cream-dark">
        {label}
      </div>
    </div>
  );
}
