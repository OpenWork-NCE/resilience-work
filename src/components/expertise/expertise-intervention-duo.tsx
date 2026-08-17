import { AnimatedSection } from "@/components/motion/animated";
import { SectionHeader } from "@/components/shared/section-header";
import { expertiseIconMap } from "@/components/expertise/expertise-icon-map";
import { expertiseUiCopy } from "@/content/pages/expertise";
import type { Locale, LocalizedFeature } from "@/types/content";

interface ExpertiseInterventionDuoProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  servicesTitle: string;
  services: readonly LocalizedFeature[];
}

export function ExpertiseInterventionDuo({
  locale,
  eyebrow,
  title,
  paragraphs,
  servicesTitle,
  services,
}: ExpertiseInterventionDuoProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
      <AnimatedSection>
        <SectionHeader eyebrow={eyebrow} title={title} align="left" className="mb-0" />
        <div className="mt-6 max-w-[40rem] space-y-5">
          {paragraphs.map((paragraph) => (
            <p
              key={`${locale}-${paragraph}`}
              className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.06} className="space-y-5">
        <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
          {servicesTitle || expertiseUiCopy.servicesEyebrow[locale]}
        </p>
        {services.slice(0, 2).map((item) => {
          const Icon =
            expertiseIconMap[item.icon as keyof typeof expertiseIconMap] ??
            expertiseIconMap.Activity;

          return (
            <div
              key={item.id}
              className="rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] px-5 py-6 sm:px-6"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-medium leading-snug">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                    {item.description[locale]}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </AnimatedSection>
    </div>
  );
}
