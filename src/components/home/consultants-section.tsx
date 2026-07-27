"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { consultants, consultantsSection } from "@/content/consultants";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";
import type { Consultant } from "@/content/consultants";

interface ConsultantsSectionProps {
  locale: Locale;
}

function ConsultantCard({
  consultant,
  locale,
  open,
  onToggle,
}: {
  consultant: Consultant;
  locale: Locale;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[rgb(var(--surface-subtle))]">
        <Image
          src={consultant.image.src}
          alt={consultant.image.alt[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 28vw"
          className="object-cover"
          style={{ objectPosition: consultant.image.objectPosition ?? "center" }}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
          {consultant.role[locale]}
        </p>
        <h3 className="mt-3 font-display text-[clamp(1.55rem,2.8vw,1.9rem)] font-medium leading-[1.08] text-balance text-[rgb(var(--foreground))]">
          {consultant.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
          {consultant.lead[locale]}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {consultant.focus[locale].slice(0, 5).map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-muted))] px-3 py-1 text-xs font-medium text-[rgb(var(--foreground))]"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <button
            type="button"
            id={buttonId}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={onToggle}
            className={cn(
              "inline-flex w-full items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[rgb(var(--border))] bg-[rgb(var(--surface-muted))] px-4 py-3 text-left text-sm font-semibold text-[rgb(var(--foreground))] transition-colors",
              "hover:bg-[rgb(var(--secondary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2"
            )}
          >
            <span>
              {open
                ? locale === "fr"
                  ? "Réduire le parcours"
                  : "Show less"
                : locale === "fr"
                  ? "Voir le parcours complet"
                  : "View full background"}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 transition-transform duration-[var(--duration-normal)]",
                open && "rotate-180"
              )}
              aria-hidden="true"
            />
          </button>

          <div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            hidden={!open}
            className={cn("mt-4 space-y-4", !open && "hidden")}
          >
            {consultant.bio[locale].map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-[0.95rem]"
              >
                {paragraph}
              </p>
            ))}

            <div>
              <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--accent))]">
                {locale === "fr" ? "Approches & certifications" : "Approaches & certifications"}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {consultant.methods[locale].map((method) => (
                  <li
                    key={method}
                    className="rounded-full border border-[rgb(var(--border-strong))] px-3 py-1 text-xs font-medium text-[rgb(var(--foreground))]"
                  >
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ConsultantsSection({ locale }: ConsultantsSectionProps) {
  const copy = consultantsSection;
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section spacing="lg" tone="muted" containerSize="wide">
      <SectionHeader
        eyebrow={copy.eyebrow[locale]}
        title={copy.title[locale]}
        description={copy.description[locale]}
        align="left"
        maxWidth="wide"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
        {consultants.map((consultant) => (
          <ConsultantCard
            key={consultant.id}
            consultant={consultant}
            locale={locale}
            open={openId === consultant.id}
            onToggle={() =>
              setOpenId((current) => (current === consultant.id ? null : consultant.id))
            }
          />
        ))}
      </div>
    </Section>
  );
}
