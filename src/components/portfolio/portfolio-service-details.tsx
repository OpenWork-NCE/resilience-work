import { Globe2, Languages, MonitorSmartphone, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/motion/animated";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";

interface PortfolioServiceDetailsProps {
  locale: Locale;
}

export function PortfolioServiceDetails({ locale }: PortfolioServiceDetailsProps) {
  const section = jocelyneKatshindaPage.serviceDetails;

  return (
    <Section spacing="md" tone="muted">
      <AnimatedSection>
        <SectionHeader
          eyebrow={section.eyebrow[locale]}
          title={section.title[locale]}
          description={section.description[locale]}
          align="left"
          maxWidth="wide"
        />
      </AnimatedSection>

      <div className="grid gap-5 lg:grid-cols-3">
        <AnimatedSection className="rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
            <MonitorSmartphone className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-medium">
            {section.modalitiesTitle[locale]}
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
            {section.modalities[locale].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.06} className="rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
            <Languages className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-medium">
            {section.languagesTitle[locale]}
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {section.languages.map((language) => (
              <Badge key={language.code} className="px-4 py-2 text-sm">
                {language.label[locale]}
              </Badge>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
            <Shield className="h-5 w-5" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-medium">
            {locale === "fr" ? "Cadre d’intervention" : "Working framework"}
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
            {locale === "fr"
              ? "Les échanges privilégient la clarté, la confidentialité et l’adaptation aux contraintes concrètes des équipes et des organisations."
              : "Interactions prioritise clarity, confidentiality and adaptation to the concrete constraints faced by teams and organisations."}
          </p>
          <div className="mt-6 flex items-center gap-3 rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-subtle))] px-4 py-3">
            <Globe2 className="h-4 w-4 text-[rgb(var(--accent))]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(var(--accent))]">
                {section.websiteTitle[locale]}
              </p>
              <p className="mt-1 text-sm text-[rgb(var(--foreground))]">{section.websiteText[locale]}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
