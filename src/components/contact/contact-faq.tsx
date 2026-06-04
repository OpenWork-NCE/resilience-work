"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

interface ContactFaqItem {
  id: string;
  question: string;
  answer: string;
}

interface ContactFaqProps {
  items: readonly ContactFaqItem[];
}

export function ContactFaq({ items }: ContactFaqProps) {
  const [openId, setOpenId] = useState<string>(items[0]?.id ?? "");
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))]"
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-trigger-${item.id}`}
                onClick={() => setOpenId((current) => (current === item.id ? "" : item.id))}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-inset"
              >
                <span className="text-base font-medium text-[rgb(var(--foreground))]">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-[rgb(var(--muted-foreground))]",
                    shouldReduceMotion ? "" : "transition-transform duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                    isOpen ? "rotate-180" : "rotate-0"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.id}`}
              className={cn(
                "grid",
                shouldReduceMotion ? "" : "transition-[grid-template-rows] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
