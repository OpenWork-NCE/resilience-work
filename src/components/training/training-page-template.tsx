import Script from "next/script";
import { Section } from "@/components/shared/section";
import { ExpertiseFinalCta } from "@/components/expertise/expertise-final-cta";
import { assets } from "@/content/assets";
import { TrainingPageHero } from "./training-page-hero";
import { TrainingTopicsGrid } from "./training-topics-grid";
import { trainingPageContent } from "@/content/pages/expertise";
import { trainingTopics, trainingUiCopy } from "@/content/pages/training";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import type { Locale } from "@/types/content";

interface TrainingPageTemplateProps {
  locale: Locale;
}

export function TrainingPageTemplate({ locale }: TrainingPageTemplateProps) {
  const ui = trainingUiCopy;
  const breadcrumbs = [
    { label: ui.breadcrumbHome[locale], href: getLocalizedHref(locale, "home") },
    { label: ui.breadcrumbExpertise[locale], href: getLocalizedHref(locale, "expertise") },
    { label: ui.breadcrumbTraining[locale] },
  ];
  const still = assets.expertise.training;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: trainingPageContent.title[locale],
    description: trainingPageContent.summary[locale],
    provider: {
      "@type": "Organization",
      name: "Resilience@Work",
      url: "https://resilienceatwork.eu",
    },
    areaServed: ["Africa", "Europe", "Middle East"],
    availableLanguage: ["French", "English", "Italian"],
  };

  return (
    <>
      <Script
        id="service-jsonld-training"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrainingPageHero
        locale={locale}
        breadcrumbs={breadcrumbs}
        contactHref={getLocalizedHref(locale, "contact")}
      />
      <Section spacing="sm" containerSize="home">
        <TrainingTopicsGrid
          locale={locale}
          topics={trainingTopics}
          contactHref={getLocalizedHref(locale, "contact")}
        />
      </Section>
      <Section spacing="sm" containerSize="home">
        <ExpertiseFinalCta
          locale={locale}
          title={trainingPageContent.finalCta.title[locale]}
          primaryCta={trainingPageContent.finalCta.primaryCta}
          secondaryCta={trainingPageContent.finalCta.secondaryCta}
          still={{
            src: still.src,
            alt: still.alt[locale],
            objectPosition: still.objectPosition,
          }}
          caption={trainingPageContent.eyebrow[locale]}
        />
      </Section>
    </>
  );
}
