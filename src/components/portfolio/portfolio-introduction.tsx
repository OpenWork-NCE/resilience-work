import { AnimatedSection } from "@/components/motion/animated";
import { Section } from "@/components/shared/section";
import { HomeSectionIntro } from "@/components/home/home-section-intro";
import { jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";

interface PortfolioIntroductionProps {
  locale: Locale;
}

export function PortfolioIntroduction({ locale }: PortfolioIntroductionProps) {
  const section = jocelyneKatshindaPage.introduction;

  return (
    <Section spacing="sm" tone="default" containerSize="home">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] lg:gap-16">
        <AnimatedSection>
          <HomeSectionIntro
            eyebrow={section.eyebrow[locale]}
            title={section.title[locale]}
            className="mb-8"
          />
          <div className="max-w-[44rem] space-y-5 text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-[1.05rem]">
            {section.paragraphs[locale].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.08}
          className="self-start border-t border-[rgb(var(--border-muted))] pt-6"
        >
          <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[rgb(var(--accent))]">
            Resilience@Work
          </p>
          <span aria-hidden="true" className="mt-4 block h-px w-14 bg-[rgb(var(--accent))]" />
          <p className="mt-5 font-display text-[clamp(1.45rem,2.2vw,1.9rem)] font-medium leading-[1.15] tracking-[-0.03em] text-balance text-[rgb(var(--foreground))]">
            {section.highlight[locale]}
          </p>
        </AnimatedSection>
      </div>
    </Section>
  );
}
