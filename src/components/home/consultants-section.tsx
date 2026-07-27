import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  consultants,
  consultantsSection,
  getConsultantPath,
} from "@/content/consultants";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/shared/button";
import { localizePathname } from "@/lib/navigation/get-localized-href";
import type { Locale } from "@/types/content";

interface ConsultantsSectionProps {
  locale: Locale;
}

export function ConsultantsSection({ locale }: ConsultantsSectionProps) {
  const copy = consultantsSection;

  return (
    <Section id="consultants" spacing="lg" tone="muted" containerSize="wide">
      <SectionHeader
        eyebrow={copy.eyebrow[locale]}
        title={copy.title[locale]}
        description={copy.description[locale]}
        align="left"
        maxWidth="wide"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
        {consultants.map((consultant) => {
          const href = localizePathname(locale, getConsultantPath(consultant.slug));

          return (
            <article
              key={consultant.id}
              className="flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] shadow-[var(--shadow-card)]"
            >
              <Link href={href} className="relative aspect-[4/5] overflow-hidden bg-[rgb(var(--surface-subtle))]">
                <Image
                  src={consultant.image.src}
                  alt={consultant.image.alt[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 28vw"
                  className="object-cover transition-transform duration-[var(--duration-slow)] hover:scale-[1.03]"
                  style={{ objectPosition: consultant.image.objectPosition ?? "center" }}
                />
              </Link>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                  {consultant.role[locale]}
                </p>
                <h3 className="mt-3 font-display text-[clamp(1.55rem,2.8vw,1.9rem)] font-medium leading-[1.08] text-balance text-[rgb(var(--foreground))]">
                  <Link href={href} className="transition-colors hover:text-[rgb(var(--primary))]">
                    {consultant.name}
                  </Link>
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
                  <Link href={href} className="block">
                    <Button
                      variant="secondary"
                      className="w-full"
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                    >
                      {copy.cta[locale]}
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
