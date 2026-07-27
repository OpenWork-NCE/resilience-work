import Script from "next/script";
import { Section } from "@/components/shared/section";
import { buildBreadcrumbsFromPath } from "@/components/navigation/breadcrumbs";
import { ExpertiseAudiencesSection } from "./expertise-audiences-section";
import { ExpertiseChallengesSection } from "./expertise-challenges-section";
import { ExpertiseDeliverySection } from "./expertise-delivery-section";
import { ExpertiseEditorialIntro } from "./expertise-editorial-intro";
import { ExpertiseFinalCta } from "./expertise-final-cta";
import { ExpertiseOutcomesSection } from "./expertise-outcomes-section";
import { ExpertisePageHero } from "./expertise-page-hero";
import { ExpertiseProcessSection } from "./expertise-process-section";
import { ExpertiseRelatedServices } from "./expertise-related-services";
import { ExpertiseServicesGrid } from "./expertise-services-grid";
import { routes } from "@/content/routes";
import type { ExpertiseDetailPage, Locale, RouteKey } from "@/types/content";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";

interface ExpertisePageTemplateProps {
  locale: Locale;
  page: ExpertiseDetailPage;
}

export function ExpertisePageTemplate({ locale, page }: ExpertisePageTemplateProps) {
  const labels = Object.fromEntries(
    Object.entries(routes).map(([key]) => [
      key,
      key === "home"
        ? locale === "fr"
          ? "Accueil"
          : "Home"
        : key === "expertise"
          ? locale === "fr"
            ? "Expertises"
            : "Expertise"
          : key === "psychosocialPrevention"
            ? locale === "fr"
              ? "Prévention psychosociale"
              : "Psychosocial prevention"
            : key === "internationalMobility"
              ? locale === "fr"
                ? "Mobilité internationale"
                : "International mobility"
              : key === "crisisManagement"
                ? locale === "fr"
                  ? "Gestion de crise"
                  : "Crisis management"
                : key === "training"
                  ? locale === "fr"
                    ? "Formations"
                    : "Training"
                  : key,
    ])
  ) as Record<RouteKey, string>;

  const breadcrumbs = buildBreadcrumbsFromPath(locale, routes[page.route], labels);
  const localizedTitle = page.title[locale];
  const localizedSummary = page.summary[locale];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: localizedTitle,
    description: localizedSummary,
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
        id={`service-jsonld-${page.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ExpertisePageHero
        locale={locale}
        page={page}
        breadcrumbs={breadcrumbs}
        contactHref={getLocalizedHref(locale, "contact")}
      />

      <Section spacing="md" tone="default">
        <ExpertiseEditorialIntro
          locale={locale}
          eyebrow={locale === "fr" ? "Introduction" : "Introduction"}
          title={page.title[locale]}
          paragraphs={page.introduction[locale]}
        />
      </Section>

      {/* Challenges + services - single climate band */}
      <Section spacing="md" tone="muted">
        <div className="space-y-14">
          <ExpertiseChallengesSection
            locale={locale}
            title={page.challengesTitle[locale]}
            items={page.challenges}
          />
          <ExpertiseServicesGrid
            locale={locale}
            title={page.servicesTitle[locale]}
            items={page.services}
          />
        </div>
      </Section>

      {/* Outcomes + process */}
      <Section spacing="md" tone="default">
        <div className="space-y-14">
          <ExpertiseOutcomesSection
            locale={locale}
            title={page.outcomesTitle[locale]}
            items={page.outcomes}
          />
          <div id="process">
            <ExpertiseProcessSection locale={locale} items={page.process} />
          </div>
        </div>
      </Section>

      {/* Audiences + delivery meta */}
      <Section spacing="md" tone="muted">
        <div className="space-y-14">
          <ExpertiseAudiencesSection locale={locale} audienceIds={page.audiences} />
          <ExpertiseDeliverySection locale={locale} delivery={page.delivery} />
        </div>
      </Section>

      <Section spacing="md" tone="default">
        <div className="space-y-14">
          <ExpertiseRelatedServices locale={locale} ids={page.relatedExpertiseIds} />
          <ExpertiseFinalCta
            locale={locale}
            title={page.finalCta.title[locale]}
            description={page.finalCta.description[locale]}
            note={
              locale === "fr"
                ? "Échangeons afin d’identifier la forme d’accompagnement la plus pertinente."
                : "Let’s discuss the most appropriate form of support."
            }
            primaryCta={page.finalCta.primaryCta}
            secondaryCta={page.finalCta.secondaryCta}
          />
        </div>
      </Section>
    </>
  );
}
