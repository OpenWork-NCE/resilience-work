import type { Metadata } from "next";
import { ExpertiseAudiencesSection } from "@/components/expertise/expertise-audiences-section";
import { ExpertiseDeliverySection } from "@/components/expertise/expertise-delivery-section";
import { ExpertiseEditorialIntro } from "@/components/expertise/expertise-editorial-intro";
import { ExpertiseFinalCta } from "@/components/expertise/expertise-final-cta";
import { ExpertiseOverviewGrid } from "@/components/expertise/expertise-overview-grid";
import { ExpertiseProcessSection } from "@/components/expertise/expertise-process-section";
import { AnimatedSection } from "@/components/motion/animated";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { ImageFrame } from "@/components/ui/image-frame";
import { audiences } from "@/content/audiences";
import { assets } from "@/content/assets";
import { expertiseItems, expertiseLandingPage, expertiseUiCopy } from "@/content/pages/expertise";
import { homePage } from "@/content/pages/home";
import { regions } from "@/content/pages/international";
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
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,31rem)] lg:gap-12">
            <div>
              <AnimatedSection delay={0.04}>
                <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                  {copy.hero.eyebrow[currentLocale]}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.08} className="mt-4">
                <h1 className="max-w-[12ch] font-display text-[clamp(2.6rem,6vw,4.7rem)] font-medium leading-[0.98] text-balance">
                  {copy.hero.title[currentLocale]}
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.12} className="mt-5 max-w-[42rem]">
                <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
                  {copy.hero.description[currentLocale]}
                </p>
                <p className="mt-4 border-l border-[rgb(var(--border-strong))] pl-4 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                  {copy.hero.supportingText[currentLocale]}
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.08}>
              <div className="grid grid-cols-2 gap-3">
                {expertiseItems.map((item) => (
                  <ImageFrame
                    key={item.id}
                    src={item.image.src}
                    alt={item.image.alt[currentLocale]}
                    width={item.image.width}
                    height={item.image.height}
                    aspectRatio="1/1"
                    objectPosition={item.image.objectPosition}
                    className="rounded-[var(--radius-xl)] shadow-[var(--shadow-soft)]"
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Section spacing="md">
        <ExpertiseEditorialIntro
          locale={currentLocale}
          eyebrow={ui.landingIntroEyebrow[currentLocale]}
          title={ui.landingIntroTitle[currentLocale]}
          paragraphs={[
            copy.hero.description[currentLocale],
            copy.hero.supportingText[currentLocale],
          ]}
        />
      </Section>

      <Section spacing="lg">
        <SectionHeader
          eyebrow={ui.landingGridEyebrow[currentLocale]}
          title={ui.landingGridTitle[currentLocale]}
          align="left"
          maxWidth="wide"
        />
        <ExpertiseOverviewGrid locale={currentLocale} items={expertiseItems} />
      </Section>

      <Section spacing="md" tone="muted">
        <ExpertiseEditorialIntro
          locale={currentLocale}
          eyebrow={copy.whyAct.eyebrow[currentLocale]}
          title={copy.whyAct.title[currentLocale]}
          paragraphs={copy.whyAct.paragraphs[currentLocale]}
        />
      </Section>

      <Section spacing="md">
        <ExpertiseProcessSection locale={currentLocale} items={homePage.methodology.steps} />
      </Section>

      <Section spacing="md" tone="muted">
        <ExpertiseAudiencesSection locale={currentLocale} audienceIds={audiences.map((item) => item.id)} />
      </Section>

      <Section spacing="md">
        <ExpertiseDeliverySection
          locale={currentLocale}
          delivery={{
            formats: {
              fr: ["Présentiel", "Distanciel"],
              en: ["On-site", "Remote"],
              it: ["In presenza", "A distanza"],
            },
            languages: {
              fr: ["Français", "Anglais", "Italien"],
              en: ["French", "English", "Italian"],
              it: ["Francese", "Inglese", "Italiano"],
            },
            regions: {
              fr: ["Afrique", "Europe", "Moyen-Orient"],
              en: ["Africa", "Europe", "Middle East"],
              it: ["Africa", "Europa", "Medio Oriente"],
            },
          }}
        />
      </Section>

      <Section spacing="md" tone="muted">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,30rem)] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={ui.landingInternationalEyebrow[currentLocale]}
              title={ui.landingInternationalTitle[currentLocale]}
              description={ui.landingInternationalDescription[currentLocale]}
              align="left"
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {regions.map((region) => (
                <div key={region.id} className="rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-4">
                  <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                    {region.title[currentLocale]}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                    {region.summary[currentLocale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <ImageFrame
            src={assets.international.overview.src}
            alt={assets.international.overview.alt[currentLocale]}
            width={assets.international.overview.width}
            height={assets.international.overview.height}
            aspectRatio="4/3"
            objectPosition={assets.international.overview.objectPosition}
            className="rounded-[var(--radius-2xl)] shadow-[var(--shadow-card)]"
          />
        </div>
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
