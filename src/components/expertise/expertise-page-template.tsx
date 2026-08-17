import Script from "next/script";
import { Section } from "@/components/shared/section";
import { buildBreadcrumbsFromPath } from "@/components/navigation/breadcrumbs";
import { ExpertiseFinalCta } from "./expertise-final-cta";
import { ExpertiseInterventionDuo } from "./expertise-intervention-duo";
import { ExpertisePageHero } from "./expertise-page-hero";
import { ExpertiseRelatedServices } from "./expertise-related-services";
import { navigation } from "@/content/navigation";
import { expertiseUiCopy } from "@/content/pages/expertise";
import { trainingUiCopy } from "@/content/pages/training";
import { routes } from "@/content/routes";
import type { ExpertiseDetailPage, Locale, RouteKey } from "@/types/content";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";

interface ExpertisePageTemplateProps {
  locale: Locale;
  page: ExpertiseDetailPage;
}

function buildBreadcrumbLabels(locale: Locale): Record<RouteKey, string> {
  const labels = Object.fromEntries(
    Object.keys(routes).map((key) => [key, key])
  ) as Record<RouteKey, string>;

  labels.home = expertiseUiCopy.breadcrumbHome[locale];
  labels.expertise = expertiseUiCopy.breadcrumbExpertise[locale];

  const expertiseNav = navigation.find((item) => item.id === "expertise");
  for (const child of expertiseNav?.children ?? []) {
    if (child.route) {
      labels[child.route] = child.label?.[locale] ?? labels[child.route];
    }
  }

  return labels;
}

export function ExpertisePageTemplate({ locale, page }: ExpertisePageTemplateProps) {
  const labels = buildBreadcrumbLabels(locale);
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
        <ExpertiseInterventionDuo
          locale={locale}
          eyebrow={expertiseUiCopy.introductionEyebrow[locale]}
          title={page.servicesTitle[locale]}
          paragraphs={page.introduction[locale]}
          servicesTitle={expertiseUiCopy.servicesEyebrow[locale]}
          services={page.services}
        />
      </Section>

      <Section spacing="md" tone="default">
        <div className="space-y-14">
          <ExpertiseRelatedServices locale={locale} ids={page.relatedExpertiseIds} />
          <ExpertiseFinalCta
            locale={locale}
            title={page.finalCta.title[locale]}
            description={page.finalCta.description[locale]}
            note={trainingUiCopy.finalNote[locale]}
            primaryCta={page.finalCta.primaryCta}
            secondaryCta={page.finalCta.secondaryCta}
          />
        </div>
      </Section>
    </>
  );
}
