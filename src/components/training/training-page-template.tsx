import Script from "next/script";
import { Section } from "@/components/shared/section";
import { ExpertiseFinalCta } from "@/components/expertise/expertise-final-cta";
import { ExpertisePageHero } from "@/components/expertise/expertise-page-hero";
import { ExpertiseEditorialIntro } from "@/components/expertise/expertise-editorial-intro";
import { TrainingDeliverySection } from "./training-delivery-section";
import { TrainingTopicsGrid } from "./training-topics-grid";
import { trainingPageContent } from "@/content/pages/expertise";
import { trainingTopics } from "@/content/pages/training";
import { assets } from "@/content/assets";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import type { Locale } from "@/types/content";

interface TrainingPageTemplateProps {
  locale: Locale;
}

export function TrainingPageTemplate({ locale }: TrainingPageTemplateProps) {
  const breadcrumbs = [
    { label: locale === "fr" ? "Accueil" : "Home", href: getLocalizedHref(locale, "home") },
    { label: locale === "fr" ? "Expertises" : "Expertise", href: getLocalizedHref(locale, "expertise") },
    { label: locale === "fr" ? "Formations" : "Training" },
  ];

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
      <ExpertisePageHero
        locale={locale}
        page={{
          id: "training",
          slug: "training",
          route: "training",
          icon: "Presentation",
          eyebrow: trainingPageContent.eyebrow,
          title: trainingPageContent.title,
          summary: trainingPageContent.summary,
          introduction: trainingPageContent.introduction,
          challengesTitle: trainingPageContent.eyebrow,
          challenges: [],
          servicesTitle: trainingPageContent.eyebrow,
          services: [],
          outcomesTitle: trainingPageContent.eyebrow,
          outcomes: [],
          process: [],
          audiences: [],
          delivery: {
            formats: { fr: [], en: [] },
            languages: { fr: [], en: [] },
            regions: { fr: [], en: [] },
          },
          image: assets.expertise.training,
          relatedExpertiseIds: [],
          finalCta: trainingPageContent.finalCta,
          seo: trainingPageContent.seo,
        }}
        breadcrumbs={breadcrumbs}
        contactHref={getLocalizedHref(locale, "contact")}
      />
      <Section spacing="md">
        <ExpertiseEditorialIntro
          locale={locale}
          eyebrow={locale === "fr" ? "Introduction" : "Introduction"}
          title={trainingPageContent.title[locale]}
          paragraphs={trainingPageContent.introduction[locale]}
        />
      </Section>
      <Section spacing="md">
        <TrainingTopicsGrid
          locale={locale}
          topics={trainingTopics}
          contactHref={getLocalizedHref(locale, "contact")}
        />
      </Section>
      <Section spacing="md" tone="muted">
        <TrainingDeliverySection locale={locale} blocks={trainingPageContent.deliveryBlocks} />
      </Section>
      <Section spacing="md">
        <ExpertiseFinalCta
          locale={locale}
          title={trainingPageContent.finalCta.title[locale]}
          description={trainingPageContent.finalCta.description[locale]}
          note={locale === "fr" ? "Échangeons afin d’identifier la forme d’accompagnement la plus pertinente." : "Let’s discuss the most appropriate form of support."}
          primaryCta={trainingPageContent.finalCta.primaryCta}
          secondaryCta={trainingPageContent.finalCta.secondaryCta}
        />
      </Section>
    </>
  );
}
