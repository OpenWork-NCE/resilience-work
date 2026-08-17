import type { Metadata } from "next";
import { ActivityCards } from "@/components/expertise/activity-cards";
import { ExpertiseFinalCta } from "@/components/expertise/expertise-final-cta";
import { AnimatedSection } from "@/components/motion/animated";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Section } from "@/components/shared/section";
import { expertiseItems, expertiseLandingPage, expertiseUiCopy } from "@/content/pages/expertise";
import { getPageMetadata } from "@/lib/seo/metadata";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
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

  return (
    <>
      <section className="bg-[rgb(var(--surface-subtle))] py-[var(--section-space-md)]">
        <div className="mx-auto w-[min(90vw,var(--container-wide))] px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] lg:px-[var(--gutter-desktop)]">
          <AnimatedSection>
            <Breadcrumbs
              ariaLabel={ui.breadcrumbAria[currentLocale]}
              items={[
                {
                  label: ui.breadcrumbHome[currentLocale],
                  href: getLocalizedHref(currentLocale, "home"),
                },
                { label: ui.breadcrumbExpertise[currentLocale] },
              ]}
            />
          </AnimatedSection>
          <div className="mt-8 max-w-[46rem]">
            <AnimatedSection delay={0.04}>
              <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                {copy.hero.eyebrow[currentLocale]}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.08} className="mt-4">
              <h1 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.02] text-balance">
                {copy.hero.title[currentLocale]}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.12} className="mt-5">
              <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
                {copy.hero.description[currentLocale]}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                {copy.hero.supportingText[currentLocale]}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Section spacing="lg">
        <ActivityCards locale={currentLocale} items={expertiseItems} />
      </Section>

      <Section spacing="md">
        <ExpertiseFinalCta
          locale={currentLocale}
          title={copy.finalCta.title[currentLocale]}
          description={copy.finalCta.description[currentLocale]}
          note={copy.finalCta.note[currentLocale]}
          primaryCta={copy.finalCta.primaryCta}
          secondaryCta={copy.finalCta.secondaryCta}
        />
      </Section>
    </>
  );
}
