"use client";

import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavigationTriggerProps {
  isOpen: boolean;
  controls: string;
  label: string;
  onClick: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileNavigationTrigger({
  isOpen,
  controls,
  label,
  onClick,
  triggerRef,
}: MobileNavigationTriggerProps) {
  return (
    <button
      ref={triggerRef}
      type="button"
      aria-expanded={isOpen}
      aria-controls={controls}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[rgb(var(--border))]",
        "bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] transition-colors hover:bg-[rgb(var(--surface-muted))]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))]"
      )}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}
