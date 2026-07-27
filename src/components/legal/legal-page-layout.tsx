import { LegalPageHero } from "@/components/legal/legal-page-hero";
import { LegalPendingNotice } from "@/components/legal/legal-pending-notice";
import { LegalSection } from "@/components/legal/legal-section";
import { LegalToc } from "@/components/legal/legal-toc";
import { Section } from "@/components/shared/section";
import { legalUiCopy } from "@/content/legal/legal-ui";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import type { Locale } from "@/types/content";
import type { LegalDocument } from "@/types/legal";

interface LegalPageLayoutProps {
  locale: Locale;
  document: LegalDocument;
}

export function LegalPageLayout({ locale, document }: LegalPageLayoutProps) {
  const breadcrumbs = [
    { label: legalUiCopy.breadcrumbHome[locale], href: getLocalizedHref(locale, "home") },
    { label: document.title[locale] },
  ];

  const tocItems = document.sections.map((section) => ({
    id: section.id,
    label: section.title[locale],
  }));

  const hasPendingSection = document.sections.some((section) => section.isPendingSensitive);

  return (
    <>
      <LegalPageHero
        locale={locale}
        eyebrow={document.eyebrow[locale]}
        title={document.title[locale]}
        description={document.description[locale]}
        breadcrumbs={breadcrumbs}
        lastUpdated={document.lastUpdated}
      />

      <Section spacing="md">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <LegalToc locale={locale} items={tocItems} />
          </div>

          <div className="space-y-10">
            {hasPendingSection ? <LegalPendingNotice locale={locale} /> : null}
            {document.sections.map((section) => (
              <LegalSection key={section.id} locale={locale} section={section} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
