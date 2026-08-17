import Link from "next/link";
import { cn } from "@/lib/utils";

type NavigationLinkVariant = "desktop" | "dropdown" | "mobile" | "footer";

interface NavigationLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  variant?: NavigationLinkVariant;
  inverse?: boolean;
  highContrast?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<NavigationLinkVariant, string> = {
  desktop:
    "group relative inline-flex h-11 items-center whitespace-nowrap text-sm font-medium text-[rgb(var(--foreground))] transition-colors hover:text-[rgb(var(--primary))]",
  dropdown:
    "group block rounded-[var(--radius-md)] px-4 py-3 transition-colors hover:bg-[rgb(var(--surface-muted))]",
  mobile:
    "block rounded-[var(--radius-md)] px-4 py-3 text-base font-medium text-[rgb(var(--foreground))] transition-colors hover:bg-[rgb(var(--surface-muted))]",
  footer:
    "text-sm text-[rgb(var(--muted-foreground))] transition-colors hover:text-[rgb(var(--foreground))]",
};

export function NavigationLink({
  href,
  label,
  isActive = false,
  variant = "desktop",
  inverse = false,
  highContrast = false,
  className,
  onClick,
}: NavigationLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        variantStyles[variant],
        // Solid dark theme chrome: full foreground brightness
        highContrast &&
          variant === "desktop" &&
          !inverse &&
          "text-[rgb(var(--foreground))] hover:text-[rgb(var(--accent))]",
        // Media / inverse chrome: bright on-night text
        inverse &&
          variant === "desktop" &&
          "text-white hover:text-white focus-visible:ring-offset-transparent opacity-90 hover:opacity-100",
        isActive && variant === "desktop" && !inverse && "text-[rgb(var(--primary))]",
        isActive && variant === "desktop" && inverse && "text-[rgb(var(--inverse-foreground))] opacity-100",
        isActive && highContrast && variant === "desktop" && !inverse && "text-[rgb(var(--accent))]",
        isActive && variant === "dropdown" && "bg-[rgb(var(--surface-muted))]",
        isActive && variant === "mobile" && "bg-[rgb(var(--surface-muted))] text-[rgb(var(--primary))]",
        isActive && variant === "footer" && "text-[rgb(var(--foreground))]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))]",
        className
      )}
    >
      <span>{label}</span>
      {variant === "desktop" ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-0 bottom-2 h-px origin-left scale-x-0 bg-current transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)]",
            "group-hover:scale-x-100",
            isActive && "scale-x-100"
          )}
        />
      ) : null}
    </Link>
  );
}
