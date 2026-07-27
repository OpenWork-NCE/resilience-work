import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePage } from "@/content/pages/home";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/shared/button";
import { AnimatedSection } from "@/components/motion/animated";
import { ExpertiseMobileGrid } from "@/components/home/expertise-mobile-grid";
import { ExpertiseStickyReveal } from "@/components/home/expertise-sticky-reveal";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import type { Locale } from "@/types/content";

interface ExpertiseSectionProps {
  locale: Locale;
}

export function ExpertiseSection({ locale }: ExpertiseSectionProps) {
  return (
    <Section
      spacing="lg"
      tone="muted"
      containerSize="wide"
      className="relative border-y border-[rgb(var(--border-muted))]"
    >
      {/* Decorative blobs clipped without breaking sticky descendants */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-[rgb(var(--accent))] opacity-[0.06] blur-3xl" />
        <div className="absolute -left-16 bottom-10 h-80 w-80 rounded-full bg-[rgb(var(--primary))] opacity-[0.05] blur-3xl" />
      </div>

      <AnimatedSection>
        <SectionHeader
          eyebrow={homePage.expertise.eyebrow[locale]}
          title={homePage.expertise.title[locale]}
          description={homePage.expertise.description[locale]}
          align="left"
          maxWidth="wide"
          className="mb-10 lg:mb-14"
        />
      </AnimatedSection>

      <ExpertiseStickyReveal locale={locale} />
      <ExpertiseMobileGrid locale={locale} />

      <AnimatedSection delay={0.08} className="mt-10 flex justify-start lg:mt-14">
        <Link href={getLocalizedHref(locale, "expertise")}>
          <Button variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
            {homePage.expertise.cta.label[locale]}
          </Button>
        </Link>
      </AnimatedSection>
    </Section>
  );
}
