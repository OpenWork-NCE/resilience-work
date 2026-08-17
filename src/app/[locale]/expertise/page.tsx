import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ActivityCards } from "@/components/expertise/activity-cards";
import { ExpertiseFinalCta } from "@/components/expertise/expertise-final-cta";
import { AnimatedSection } from "@/components/motion/animated";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Button } from "@/components/shared/button";
import { Section } from "@/components/shared/section";
import { HOME_MEASURE, HomeSectionIntro } from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { expertiseItems, expertiseLandingPage, expertiseUiCopy } from "@/content/pages/expertise";
import { getPageMetadata } from "@/lib/seo/metadata";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { activityIdentity } from "@/lib/activity-identity";
import type { Locale } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale as Locale, "expertise");
}

export default async function ExpertiseLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const copy = expertiseLandingPage;
  const ui = expertiseUiCopy;
  const still = expertiseItems[0];

  return (
    <>
      <section
        aria-labelledby="expertise-landing-title"
        className="relative isolate overflow-hidden bg-[rgb(var(--hero-void))] text-white"
      >
        <div className={`${HOME_MEASURE} grid lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]`}>
          <div className="relative min-h-[20rem] lg:order-2 lg:min-h-full">
            <HomeStill
              src={still.image.src}
              alt={still.image.alt[currentLocale]}
              objectPosition={activityIdentity[still.id].objectPosition}
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
                {copy.hero.eyebrow[currentLocale]}
              </figcaption>
            </HomeStill>
          </div>

          <div className="relative z-[1] flex flex-col justify-center py-12 sm:py-14 lg:order-1 lg:py-16">
            <AnimatedSection>
              <Breadcrumbs
                ariaLabel={ui.breadcrumbAria[currentLocale]}
                invert
                items={[
                  {
                    label: ui.breadcrumbHome[currentLocale],
                    href: getLocalizedHref(currentLocale, "home"),
                  },
                  { label: ui.breadcrumbExpertise[currentLocale] },
                ]}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.06} className="mt-8">
              <HomeSectionIntro invert eyebrow={copy.hero.eyebrow[currentLocale]} />
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="mt-7">
              <h1
                id="expertise-landing-title"
                className="max-w-[16ch] font-display text-[clamp(2.2rem,5.2vw,3.8rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance"
              >
                {copy.hero.title[currentLocale]}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.14} className="mt-5 max-w-[36rem]">
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                {copy.hero.description[currentLocale]}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.18} className="mt-8">
              <Link href={getLocalizedHref(currentLocale, "contact")}>
                <Button
                  variant="inverse"
                  size="lg"
                  className="min-h-12"
                  rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  {ui.discussNeeds[currentLocale]}
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Section spacing="sm" tone="default" containerSize="home">
        <ActivityCards locale={currentLocale} items={expertiseItems} />
      </Section>

      <Section spacing="sm" tone="default" containerSize="home">
        <ExpertiseFinalCta
          locale={currentLocale}
          title={copy.finalCta.title[currentLocale]}
          primaryCta={copy.finalCta.primaryCta}
          secondaryCta={copy.finalCta.secondaryCta}
          still={{
            src: still.image.src,
            alt: still.image.alt[currentLocale],
            objectPosition: activityIdentity[still.id].objectPosition,
          }}
          caption={copy.hero.eyebrow[currentLocale]}
        />
      </Section>
    </>
  );
}
