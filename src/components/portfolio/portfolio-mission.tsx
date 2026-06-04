import { AnimatedSection } from "@/components/motion/animated";
import { Section } from "@/components/shared/section";
import { jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";

interface PortfolioMissionProps {
  locale: Locale;
}

export function PortfolioMission({ locale }: PortfolioMissionProps) {
  const section = jocelyneKatshindaPage.mission;

  return (
    <Section spacing="md" tone="muted">
      <AnimatedSection className="rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 lg:px-12 lg:py-12">
        <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
          {section.eyebrow[locale]}
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] lg:items-end">
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.7rem)] font-medium leading-[1.02] text-balance">
            {section.title[locale]}
          </h2>
          <p className="border-l border-[rgb(var(--border-strong))] pl-5 text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
            {section.statement[locale]}
          </p>
        </div>
      </AnimatedSection>
    </Section>
  );
}
