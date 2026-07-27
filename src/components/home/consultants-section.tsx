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
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { localizePathname } from "@/lib/navigation/get-localized-href";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

interface ConsultantsSectionProps {
  locale: Locale;
}

export function ConsultantsSection({ locale }: ConsultantsSectionProps) {
  const copy = consultantsSection;

  return (
    <Section
      id="consultants"
      spacing="lg"
      tone="muted"
      containerSize="wide"
      className="relative"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-16 top-20 h-72 w-72 rounded-full bg-[rgb(var(--accent))] opacity-[0.06] blur-3xl" />
        <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-[rgb(var(--primary))] opacity-[0.04] blur-3xl" />
      </div>

      <AnimatedSection>
        <SectionHeader
          eyebrow={copy.eyebrow[locale]}
          title={copy.title[locale]}
          description={copy.description[locale]}
          align="left"
          maxWidth="wide"
          className="mb-10 lg:mb-12"
        />
      </AnimatedSection>

      <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
        {consultants.map((consultant, index) => {
          const href = localizePathname(locale, getConsultantPath(consultant.slug));

          return (
            <StaggerItem key={consultant.id} className="h-full">
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)]",
                  "border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] shadow-[var(--shadow-soft)]",
                  "transition-[transform,box-shadow,border-color] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                  "hover:-translate-y-1 hover:border-[rgb(var(--border-strong))] hover:shadow-[var(--shadow-elevated)]"
                )}
              >
                <Link
                  href={href}
                  className="relative aspect-[4/5] overflow-hidden bg-[rgb(var(--surface-subtle))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-inset"
                >
                  <Image
                    src={consultant.image.src}
                    alt={consultant.image.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 28vw"
                    className="object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-emphasized)] group-hover:scale-[1.04]"
                    style={{
                      objectPosition: consultant.image.objectPosition ?? "center",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 transition-opacity duration-[var(--duration-normal)] group-hover:opacity-100"
                  />

                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white/90 backdrop-blur-md">
                      {copy.affiliatedBadge[locale]}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="font-[family:var(--font-accent)] text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/75">
                      {consultant.role[locale]}
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.45rem,2.4vw,1.75rem)] font-medium leading-[1.08] text-white text-balance">
                      {consultant.name}
                    </h3>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                    {consultant.lead[locale]}
                  </p>

                  <blockquote className="mt-5 border-l-2 border-[rgb(var(--accent))] pl-4 text-sm font-medium leading-relaxed text-[rgb(var(--foreground))]">
                    {consultant.highlight[locale]}
                  </blockquote>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {consultant.focus[locale].slice(0, 4).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-muted))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--foreground))]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Link
                      href={href}
                      className={cn(
                        "inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--primary))]",
                        "transition-colors hover:text-[rgb(var(--accent))]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2"
                      )}
                    >
                      {copy.cta[locale]}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
