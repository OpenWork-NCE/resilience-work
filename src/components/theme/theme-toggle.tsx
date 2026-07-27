"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface ThemeToggleProps {
  inverse?: boolean;
}

export function ThemeToggle({ inverse = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("theme");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? t("switchToLight") : t("switchToDark");

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        if (!mounted) return;
        setTheme(isDark ? "light" : "dark");
      }}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2",
        inverse
          ? "border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_22%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent)] text-[rgb(var(--inverse-foreground))] hover:bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_16%,transparent)] focus-visible:ring-offset-transparent"
          : "border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--surface-muted))] focus-visible:ring-offset-[rgb(var(--background))]"
      )}
    >
      {mounted ? (
        isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
      ) : (
        <span className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
