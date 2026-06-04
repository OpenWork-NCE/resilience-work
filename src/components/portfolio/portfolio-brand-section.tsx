import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Logo } from "@/components/brand/logo";
import { Section } from "@/components/shared/section";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";

interface PortfolioBrandSectionProps {
  locale: Locale;
}

export function PortfolioBrandSection({ locale }: PortfolioBrandSectionProps) {
  const section = jocelyneKatshindaPage.brandSection;

  return (
    <Section spacing="md">
      <div className="rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 lg:px-12 lg:py-10">
        <AnimatedSection>
          <Logo size="md" />
          <p className="mt-8 font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
            {section.eyebrow[locale]}
          </p>
          <h2 className="mt-5 max-w-[18ch] font-display text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.02] text-balance">
            {section.title[locale]}
          </h2>
          <div className="mt-6 max-w-[42rem] space-y-4 text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
            {section.paragraphs[locale].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </AnimatedSection>

        <StaggerContainer className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {section.links.map((link) => (
            <StaggerItem key={link.id}>
              <Link
                href={getLocalizedHref(locale, link.route)}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface-subtle))] px-5 py-3 text-sm font-semibold text-[rgb(var(--foreground))] transition-colors hover:border-[rgb(var(--border-strong))] hover:bg-[rgb(var(--surface-muted))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2"
              >
                <span>{link.label[locale]}</span>
                <ArrowRight className="h-4 w-4 text-[rgb(var(--accent))]" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
