import { AnimatedSection } from "@/components/motion/animated";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";

interface PortfolioIntroductionProps {
  locale: Locale;
}

export function PortfolioIntroduction({ locale }: PortfolioIntroductionProps) {
  const section = jocelyneKatshindaPage.introduction;

  return (
    <Section spacing="md">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <AnimatedSection>
          <SectionHeader
            eyebrow={section.eyebrow[locale]}
            title={section.title[locale]}
            align="left"
            className="mb-8"
          />
          <div className="max-w-[44rem] space-y-5 text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-[1.05rem]">
            {section.paragraphs[locale].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="self-start rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-subtle))] p-6">
          <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
            Resilience@Work
          </p>
          <p className="mt-5 font-display text-2xl font-medium leading-tight text-[rgb(var(--foreground))]">
            {section.highlight[locale]}
          </p>
        </AnimatedSection>
      </div>
    </Section>
  );
}
