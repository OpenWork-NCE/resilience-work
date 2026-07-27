import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioActionLinkProps {
  href: string;
  label: string;
  description?: string;
  icon: LucideIcon;
  external?: boolean;
  download?: string;
  variant?: "card" | "pill" | "bar" | "compact";
  tone?: "default" | "inverse";
  className?: string;
}

const variantStyles = {
  card: {
    root:
      "group flex h-full flex-col rounded-[var(--radius-lg)] border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 transition-all duration-[var(--duration-normal)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-[rgb(var(--border-strong))] hover:shadow-[var(--shadow-card)]",
    icon: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]",
    title: "text-base font-semibold text-[rgb(var(--foreground))]",
    description: "mt-2 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]",
  },
  /** Dense horizontal row for sidebars / contact rails */
  compact: {
    root:
      "group inline-flex min-h-11 w-full items-center gap-2.5 rounded-[var(--radius-md)] border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 py-2 text-left transition-colors hover:border-[rgb(var(--border-strong))] hover:bg-[rgb(var(--surface-muted))]",
    icon: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]",
    title: "text-sm font-semibold leading-tight text-[rgb(var(--foreground))]",
    description: "mt-0.5 text-[0.7rem] leading-snug text-[rgb(var(--muted-foreground))] line-clamp-1",
  },
  pill: {
    root:
      "group inline-flex min-h-12 items-center gap-3 rounded-full border border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_16%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent)] px-4 py-3 text-left text-[rgb(var(--inverse-foreground))] transition-colors hover:bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_16%,transparent)]",
    icon: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)] text-[rgb(var(--inverse-foreground))]",
    title: "text-sm font-semibold text-[rgb(var(--inverse-foreground))]",
    description: "mt-0.5 text-xs text-[rgb(var(--inverse-muted-foreground))]",
  },
  bar: {
    root:
      "group inline-flex min-h-11 min-w-0 w-full items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 py-3 text-center shadow-[var(--shadow-soft)] transition-colors hover:border-[rgb(var(--border-strong))] hover:bg-[rgb(var(--surface-muted))]",
    icon: "inline-flex text-[rgb(var(--accent))]",
    title: "sr-only",
    description: "hidden",
  },
} as const;

const toneStyles = {
  default: {
    root: "",
    icon: "",
    title: "",
    description: "",
    externalIcon: "text-[rgb(var(--muted-foreground))]",
    ringOffset: "focus-visible:ring-offset-[rgb(var(--background))]",
  },
  inverse: {
    root:
      "border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_8%,transparent)] hover:border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_18%,transparent)] hover:bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)]",
    icon: "bg-[rgb(var(--inverse-foreground))] text-[rgb(var(--surface-inverse))]",
    title: "text-[rgb(var(--inverse-foreground))]",
    description: "text-[rgb(var(--inverse-muted-foreground))]",
    externalIcon: "text-[rgb(var(--inverse-muted-foreground))]",
    ringOffset: "focus-visible:ring-offset-[rgb(var(--surface-inverse))]",
  },
} as const;

export function PortfolioActionLink({
  href,
  label,
  description,
  icon: Icon,
  external = false,
  download,
  variant = "card",
  tone = "default",
  className,
}: PortfolioActionLinkProps) {
  const styles = variantStyles[variant];
  const toneStyle = toneStyles[tone];

  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        styles.root,
        toneStyle.root,
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2",
        toneStyle.ringOffset,
        className
      )}
    >
      <span className={cn(styles.icon, toneStyle.icon)}>
        <Icon className={variant === "compact" ? "h-4 w-4" : "h-5 w-5"} aria-hidden="true" />
      </span>
      <span className={cn("min-w-0 flex-1", variant === "bar" ? "hidden" : "block")}>
        <span className={cn("block", styles.title, toneStyle.title)}>{label}</span>
        {description ? (
          <span className={cn("block", styles.description, toneStyle.description)}>{description}</span>
        ) : null}
      </span>
      {external && variant !== "bar" ? (
        <ArrowUpRight
          className={cn(
            "h-3.5 w-3.5 shrink-0 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            variant === "card" && "mt-1 h-4 w-4",
            toneStyle.externalIcon
          )}
        />
      ) : null}
    </a>
  );
}
