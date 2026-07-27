import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePage } from "@/content/pages/home";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/shared/button";
import { ExpertiseMobileGrid } from "@/components/home/expertise-mobile-grid";
import { ExpertiseStickyReveal } from "@/components/home/expertise-sticky-reveal";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { Locale } from "@/types/content";

interface ExpertiseSectionProps {
  locale: Locale;
}

export function ExpertiseSection({ locale }: ExpertiseSectionProps) {
  return (
    <Section spacing="lg" tone="muted" containerSize="wide" className="border-y border-[rgb(var(--border-muted))]">
      <SectionHeader
        eyebrow={homePage.expertise.eyebrow[locale]}
        title={homePage.expertise.title[locale]}
        description={homePage.expertise.description[locale]}
        align="left"
        maxWidth="wide"
      />

      <ExpertiseStickyReveal locale={locale} />
      <ExpertiseMobileGrid locale={locale} />

      <div className="mt-10 flex justify-start">
        <Link href={getLocalizedHref(locale, "expertise")}>
          <Button variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
            {homePage.expertise.cta.label[locale]}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
