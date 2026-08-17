import { AnimatedSection } from "@/components/motion/animated";
import { Card } from "@/components/shared/card";
import { HomeSectionIntro } from "@/components/home/home-section-intro";
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
        <HomeSectionIntro eyebrow={eyebrow} title={title} />
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

      <AnimatedSection delay={0.06}>
        <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--accent))]">
          {servicesTitle || expertiseUiCopy.servicesEyebrow[locale]}
        </p>
        <span aria-hidden="true" className="mt-4 block h-px w-14 bg-[rgb(var(--accent))]" />
        <div className="mt-6 grid gap-4">
          {services.map((item, index) => (
            <Card key={item.id} variant="elevated" className="p-5">
              <p className="font-[family:var(--font-accent)] text-[0.62rem] font-semibold tabular-nums tracking-[0.2em] text-[rgb(var(--accent))]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-[clamp(1.2rem,2vw,1.45rem)] font-medium leading-snug tracking-[-0.02em]">
                {item.title[locale]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                {item.description[locale]}
              </p>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
