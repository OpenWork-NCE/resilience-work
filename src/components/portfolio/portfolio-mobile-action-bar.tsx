"use client";

import { useEffect, useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import type { Locale } from "@/types/content";
import { getJocelyneContactActions } from "@/content/pages/jocelyne-katshinda";
import { PortfolioActionLink } from "./portfolio-action-link";

const actionIcons = {
  whatsapp: MessageCircle,
  phone: Phone,
  email: Mail,
} as const;

interface PortfolioMobileActionBarProps {
  locale: Locale;
}

export function PortfolioMobileActionBar({ locale }: PortfolioMobileActionBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const actions = getJocelyneContactActions(locale).filter((action) =>
    ["whatsapp", "phone", "email"].includes(action.id)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 240);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4 lg:hidden",
        shouldReduceMotion ? "" : "transition-transform duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
        isVisible ? "translate-y-0" : "translate-y-[140%]"
      )}
    >
      <div className="pointer-events-auto mx-auto grid w-full max-w-[26rem] grid-cols-3 gap-2 rounded-[calc(var(--radius-xl)+0.25rem)] border border-[rgb(var(--border-muted))] bg-[color-mix(in_srgb,rgb(var(--surface))_92%,transparent)] p-2 shadow-[var(--shadow-floating)] supports-[backdrop-filter]:backdrop-blur-xl">
        {actions.map((action) => {
          const Icon = actionIcons[action.id as keyof typeof actionIcons];

          return (
            <PortfolioActionLink
              key={action.id}
              href={action.href}
              label={action.shortLabel}
              icon={Icon}
              variant="bar"
            />
          );
        })}
      </div>
    </div>
  );
}
