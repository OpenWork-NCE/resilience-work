import { homePage } from "@/content/pages/home";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import type { Locale } from "@/types/content";

interface MethodologySectionProps {
  locale: Locale;
}

export function MethodologySection({ locale }: MethodologySectionProps) {
  const methodology = homePage.methodology;

  return (
    <Section spacing="lg" tone="muted" containerSize="wide">
      <AnimatedSection>
        <SectionHeader
          eyebrow={methodology.eyebrow[locale]}
          title={methodology.title[locale]}
          align="left"
          maxWidth="wide"
        />
      </AnimatedSection>

      <StaggerContainer className="relative mt-10 grid gap-5 sm:gap-6 lg:grid-cols-4 lg:gap-6">
        <div
          className="absolute left-5 top-0 hidden h-full w-px bg-[rgb(var(--border-strong))] lg:left-0 lg:top-9 lg:block lg:h-px lg:w-full"
          aria-hidden="true"
        />
        {methodology.steps.map((step) => (
          <StaggerItem key={step.id} className="h-full">
            <article className="relative flex h-full flex-col rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-[var(--duration-normal)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-[rgb(var(--border-strong))] hover:shadow-[var(--shadow-card)]">
              <div className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[rgb(var(--surface-inverse))] px-3 text-sm font-semibold text-[rgb(var(--inverse-foreground))]">
                {step.number}
              </div>
              <h3 className="heading-card mt-5">{step.title[locale]}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                {step.description[locale]}
              </p>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
