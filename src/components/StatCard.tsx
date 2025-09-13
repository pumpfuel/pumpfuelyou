import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className }: StatCardProps) => {
  return (
    <div className={cn(
      "bg-card p-8 rounded-2xl border border-brand-secondary/20 transition-all duration-300 hover:-translate-y-1",
      "shadow-[0_8px_32px_rgba(34,197,94,0.08)] hover:shadow-[0_12px_48px_rgba(34,197,94,0.15)]",
      className
    )}>
      <div className="text-3xl font-bold text-brand-primary mb-2">{value}</div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};
