import { cn } from "@/lib/utils";

interface LegalCalloutProps {
  title?: string;
  description: string;
  tone?: "default" | "warning" | "accent";
}

const toneStyles = {
  default: "border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-muted))]",
  warning: "border-[rgb(var(--warning))] bg-[rgb(var(--warning-soft))]/60",
  accent: "border-[rgb(var(--accent))] bg-[rgb(var(--accent-soft))]",
} as const;

export function LegalCallout({ title, description, tone = "default" }: LegalCalloutProps) {
  return (
    <div className={cn("rounded-[var(--radius-lg)] border p-5", toneStyles[tone])}>
      {title ? <p className="font-semibold text-[rgb(var(--foreground))]">{title}</p> : null}
      <p className={cn("text-sm leading-relaxed text-[rgb(var(--muted-foreground))]", title ? "mt-2" : "")}>
        {description}
      </p>
    </div>
  );
}
