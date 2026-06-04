import { homePage } from "@/content/pages/home";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { ImpactBentoGrid } from "@/components/home/impact-bento-grid";
import { Locale } from "@/types/content";

interface ImpactSectionProps {
  locale: Locale;
}

export function ImpactSection({ locale }: ImpactSectionProps) {
  return (
    <section className="bg-[rgb(var(--background))] py-[var(--section-space-lg)]">
      <Container size="wide">
        <SectionHeader
          eyebrow={homePage.impact.eyebrow[locale]}
          title={homePage.impact.title[locale]}
          description={homePage.impact.description[locale]}
          align="left"
          maxWidth="wide"
        />
        <ImpactBentoGrid locale={locale} />
      </Container>
    </section>
  );
}
