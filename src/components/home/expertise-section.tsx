import { homePage } from "@/content/pages/home";
import { expertiseItems } from "@/content/pages/expertise";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedSection } from "@/components/motion/animated";
import { ActivityCards } from "@/components/expertise/activity-cards";
import type { Locale } from "@/types/content";

interface ExpertiseSectionProps {
  locale: Locale;
}

export function ExpertiseSection({ locale }: ExpertiseSectionProps) {
  return (
    <Section spacing="lg" tone="default" containerSize="wide">
      <AnimatedSection>
        <SectionHeader
          eyebrow={homePage.expertise.eyebrow[locale]}
          title={homePage.expertise.title[locale]}
          description={homePage.expertise.description[locale]}
          align="left"
          maxWidth="wide"
          className="mb-10 lg:mb-12"
        />
      </AnimatedSection>

      <ActivityCards
        locale={locale}
        items={expertiseItems}
        ctaLabel={homePage.expertise.itemCta.label[locale]}
      />
    </Section>
  );
}
