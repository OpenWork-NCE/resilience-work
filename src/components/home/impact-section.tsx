import { homePage } from "@/content/pages/home";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { ImpactBentoGrid } from "@/components/home/impact-bento-grid";
import { Locale } from "@/types/content";

interface ImpactSectionProps {
  locale: Locale;
}

export function ImpactSection({ locale }: ImpactSectionProps) {
  return (
    <Section spacing="lg" tone="default" containerSize="wide">
      <SectionHeader
        eyebrow={homePage.impact.eyebrow[locale]}
        title={homePage.impact.title[locale]}
        description={homePage.impact.description[locale]}
        align="left"
        maxWidth="wide"
      />
      <ImpactBentoGrid locale={locale} />
    </Section>
  );
}
