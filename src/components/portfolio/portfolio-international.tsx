import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { ImageFrame } from "@/components/ui/image-frame";
import { jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";

interface PortfolioInternationalProps {
  locale: Locale;
}

export function PortfolioInternational({ locale }: PortfolioInternationalProps) {
  const section = jocelyneKatshindaPage.international;

  return (
    <Section spacing="lg">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] lg:items-start lg:gap-12">
        <AnimatedSection className="order-2 lg:order-1">
          <SectionHeader
            eyebrow={section.eyebrow[locale]}
            title={section.title[locale]}
            description={section.description[locale]}
            align="left"
            className="mb-6"
          />
          <div className="max-w-[42rem] space-y-6">
            <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
              {section.supportingText[locale]}
            </p>

            <div className="rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-subtle))] p-5 sm:p-6">
              <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                {locale === "fr" ? "Modalités d’intervention" : "Delivery approach"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                {locale === "fr"
                  ? "Des interventions en présentiel ou à distance, adaptées aux rythmes des organisations, à la complexité des contextes et aux réalités multiculturelles des équipes."
                  : "On-site or remote interventions adapted to organisational rhythms, contextual complexity and the multicultural realities faced by teams."}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="order-1 space-y-4 lg:order-2">
          <AnimatedSection delay={0.06}>
            <ImageFrame
              src={section.image.src}
              alt={section.image.alt[locale]}
              width={section.image.width}
              height={section.image.height}
              aspectRatio="4/3"
              objectPosition={section.image.objectPosition}
              className="rounded-[var(--radius-2xl)] shadow-[var(--shadow-card)]"
            />
          </AnimatedSection>

          <StaggerContainer className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {section.regions.map((region) => (
              <StaggerItem
                key={region.id}
                className="rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-4"
              >
                <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                  {region.title[locale]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                  {region.summary[locale]}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </Section>
  );
}
