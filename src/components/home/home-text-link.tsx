import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HomeTextLinkProps {
  href: string;
  children: React.ReactNode;
  invert?: boolean;
  external?: boolean;
  className?: string;
}

export function HomeTextLink({
  href,
  children,
  invert = false,
  external = false,
  className,
}: HomeTextLinkProps) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-3 font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.18em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]",
        invert ? "text-white" : "text-[rgb(var(--foreground))]",
        className
      )}
    >
      <span
        className={cn(
          "border-b pb-1 transition-colors",
          invert
            ? "border-white/35 group-hover:border-white"
            : "border-[rgb(var(--border-strong))] group-hover:border-[rgb(var(--primary))]"
        )}
      >
        {children}
      </span>
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1" />
    </Link>
  );
}
