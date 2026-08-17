import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/motion/animated";
import { BreadcrumbItem, Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Button } from "@/components/shared/button";
import { HOME_MEASURE, HomeSectionIntro } from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { assets } from "@/content/assets";
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
  const still = assets.expertise.training;

  return (
    <section
      aria-labelledby="training-hero-title"
      className="relative isolate overflow-hidden bg-[rgb(var(--hero-void))] text-white"
    >
      <div className={`${HOME_MEASURE} grid lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]`}>
        <AnimatedSection delay={0.08} className="relative min-h-[20rem] lg:order-2 lg:min-h-full">
          <HomeStill
            src={still.src}
            alt={still.alt[locale]}
            objectPosition={still.objectPosition}
            priority
            grain
            sizes="(max-width: 1024px) 94vw, 42vw"
            className="absolute inset-0 aspect-auto min-h-[20rem] lg:min-h-full"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--hero-void))] via-[rgb(var(--hero-void))]/25 to-transparent lg:bg-gradient-to-r lg:from-[rgb(var(--hero-void))] lg:via-[rgb(var(--hero-void))]/28 lg:to-transparent"
            />
            <figcaption className="pointer-events-none absolute bottom-6 left-6 font-[family:var(--font-accent)] text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/60 lg:bottom-auto lg:top-6">
              {trainingPageContent.eyebrow[locale]}
            </figcaption>
          </HomeStill>
        </AnimatedSection>

        <div className="relative z-[1] flex flex-col justify-center py-12 sm:py-14 lg:order-1 lg:py-16">
          <AnimatedSection>
            <Breadcrumbs
              items={breadcrumbs}
              ariaLabel={trainingUiCopy.breadcrumbTraining[locale]}
              invert
            />
          </AnimatedSection>
          <AnimatedSection delay={0.06} className="mt-8">
            <HomeSectionIntro invert eyebrow={trainingPageContent.eyebrow[locale]} />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-7">
            <h1
              id="training-hero-title"
              className="max-w-[16ch] font-display text-[clamp(2.2rem,5.2vw,3.8rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance"
            >
              {trainingPageContent.title[locale]}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.14} className="mt-5 max-w-[36rem]">
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              {trainingPageContent.summary[locale]}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.18} className="mt-8">
            <Link href={contactHref}>
              <Button
                variant="inverse"
                size="lg"
                className="min-h-12"
                rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
              >
                {trainingUiCopy.discussNeeds[locale]}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
