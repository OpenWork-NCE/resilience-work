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
      {items.map((item, index) => {
        const isOpen = item.id === openId;

        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-[var(--radius-xl)] border bg-[rgb(var(--surface))]",
              "transition-[border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
              isOpen
                ? "border-[rgb(var(--border-strong))] shadow-[var(--shadow-soft)]"
                : "border-[rgb(var(--border-muted))]"
            )}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-trigger-${item.id}`}
                onClick={() =>
                  setOpenId((current) => (current === item.id ? "" : item.id))
                }
                className={cn(
                  "flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-inset"
                )}
              >
                <span className="flex min-w-0 items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 font-[family:var(--font-accent)] text-[0.72rem] font-semibold tracking-[0.12em] text-[rgb(var(--accent))]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium leading-snug text-[rgb(var(--foreground))]">
                    {item.question}
                  </span>
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-[rgb(var(--muted-foreground))]",
                    shouldReduceMotion
                      ? ""
                      : "transition-transform duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
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
                shouldReduceMotion
                  ? ""
                  : "transition-[grid-template-rows] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="border-t border-[rgb(var(--border-muted))] px-5 pb-5 pt-4 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:pl-14 sm:text-base">
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
