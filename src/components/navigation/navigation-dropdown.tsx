"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe2, GraduationCap, HeartPulse, ShieldAlert } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navigationReveal } from "@/lib/animations";
import { isActiveRoute } from "@/lib/navigation/is-active-route";
import type { ResolvedExpertiseItem } from "@/lib/navigation/get-navigation";

interface NavigationDropdownProps {
  label: string;
  items: ResolvedExpertiseItem[];
  currentPathname: string;
  buttonLabel: string;
  inverse?: boolean;
}

const iconMap = {
  psychosocialPrevention: HeartPulse,
  internationalMobility: Globe2,
  crisisManagement: ShieldAlert,
  training: GraduationCap,
} as const;

export function NavigationDropdown({
  label,
  items,
  currentPathname,
  buttonLabel,
  inverse = false,
}: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  const isSectionActive = items.some((item) => isActiveRoute(currentPathname, item.href));

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 120);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        setIsOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlurCapture={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node | null)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => setIsOpen((value) => !value)}
        onFocus={() => setIsOpen(true)}
        className={cn(
          "inline-flex h-11 items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2",
          inverse
            ? "text-white/88 hover:text-white focus-visible:ring-offset-transparent"
            : "focus-visible:ring-offset-[rgb(var(--background))]",
          !inverse &&
            (isSectionActive
              ? "text-[rgb(var(--primary))]"
              : "text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary))]"),
          inverse && isSectionActive && "text-white"
        )}
      >
        <span>{label}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-4 w-4 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)]",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id={panelId}
            aria-label={buttonLabel}
            variants={navigationReveal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={cn(
              "absolute left-1/2 top-full z-50 mt-3 w-[30rem] -translate-x-1/2 rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))]",
              "bg-[rgb(var(--surface-elevated))] p-3 shadow-[var(--shadow-elevated)]"
            )}
          >
            <div className="grid gap-2">
              {items.map((item) => {
                const Icon = iconMap[item.id];
                const isActive = isActiveRoute(currentPathname, item.href);

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group rounded-[var(--radius-lg)] border border-transparent px-4 py-3 transition-colors",
                      "hover:border-[rgb(var(--border-muted))] hover:bg-[rgb(var(--surface-muted))]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2",
                      "focus-visible:ring-offset-[rgb(var(--surface-elevated))]",
                      isActive && "border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-muted))]"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-[var(--radius-sm)] bg-[rgb(var(--accent-soft))] p-2 text-[rgb(var(--accent-foreground))]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[rgb(var(--foreground))]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
