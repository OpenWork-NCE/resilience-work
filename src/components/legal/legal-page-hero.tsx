import { AnimatedSection } from "@/components/motion/animated";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/navigation/breadcrumbs";
import { Container } from "@/components/shared/container";
import { legalUiCopy } from "@/content/legal/legal-ui";
import type { Locale } from "@/types/content";

interface LegalPageHeroProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  lastUpdated: string;
}

export function LegalPageHero({
  locale,
  eyebrow,
  title,
  description,
  breadcrumbs,
  lastUpdated,
}: LegalPageHeroProps) {
  return (
    <section className="bg-[rgb(var(--surface-subtle))] py-[var(--section-space-md)]">
      <Container size="content">
        <AnimatedSection>
          <Breadcrumbs
            items={breadcrumbs}
            ariaLabel={legalUiCopy.breadcrumbAria[locale]}
          />
        </AnimatedSection>
        <AnimatedSection delay={0.04} className="mt-6">
          <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
            {eyebrow}
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.08} className="mt-4">
          <h1 className="max-w-[14ch] font-display text-[clamp(2.35rem,7vw,4.1rem)] font-medium leading-[1.02] text-balance">
            {title}
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.12} className="mt-5 max-w-[44rem]">
          <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
            {description}
          </p>
          <p className="mt-4 text-sm text-[rgb(var(--muted-foreground))]">
            {legalUiCopy.lastUpdated[locale]}: {lastUpdated}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
