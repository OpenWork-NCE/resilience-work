import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/motion/animated";
import { BreadcrumbItem, Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { trainingPageContent } from "@/content/pages/expertise";
import { trainingUiCopy } from "@/content/pages/training";
import type { Locale } from "@/types/content";

interface TrainingPageHeroProps {
  locale: Locale;
  breadcrumbs: BreadcrumbItem[];
  contactHref: string;
}

export function TrainingPageHero({
  locale,
  breadcrumbs,
  contactHref,
}: TrainingPageHeroProps) {
  return (
    <section className="bg-[rgb(var(--surface-subtle))] py-[var(--section-space-md)]">
      <Container size="page">
        <AnimatedSection>
          <Breadcrumbs
            items={breadcrumbs}
            ariaLabel={trainingUiCopy.breadcrumbTraining[locale]}
          />
        </AnimatedSection>
        <div className="mt-8 max-w-[44rem]">
          <AnimatedSection delay={0.04}>
            <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
              {trainingPageContent.eyebrow[locale]}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.08} className="mt-4">
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.04] text-balance">
              {trainingPageContent.title[locale]}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.12} className="mt-5">
            <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
              {trainingPageContent.summary[locale]}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.16} className="mt-8">
            <Link href={contactHref}>
              <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
                {trainingUiCopy.discussNeeds[locale]}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
