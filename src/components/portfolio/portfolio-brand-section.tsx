import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/shared/button";
import { Section } from "@/components/shared/section";
import { HomeSectionIntro } from "@/components/home/home-section-intro";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";

interface PortfolioBrandSectionProps {
  locale: Locale;
}

export function PortfolioBrandSection({ locale }: PortfolioBrandSectionProps) {
  const section = jocelyneKatshindaPage.brandSection;

  return (
    <Section spacing="sm" tone="default" containerSize="home">
      <AnimatedSection>
        <Logo size="md" />
        <HomeSectionIntro
          className="mt-8"
          eyebrow={section.eyebrow[locale]}
          title={section.title[locale]}
        />
        <div className="mt-6 max-w-[42rem] space-y-4 text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
          {section.paragraphs[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </AnimatedSection>

      <StaggerContainer className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {section.links.map((link) => (
          <StaggerItem key={link.id}>
            <Link href={getLocalizedHref(locale, link.route)}>
              <Button
                variant={link.id === "contact" ? "primary" : "secondary"}
                size="lg"
                className="w-full min-h-12 sm:w-auto"
                rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
              >
                {link.label[locale]}
              </Button>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
