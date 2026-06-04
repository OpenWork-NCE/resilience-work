import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/shared/card";
import { SectionHeader } from "@/components/shared/section-header";
import { expertiseItems } from "@/content/pages/expertise";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import type { ExpertiseId, Locale } from "@/types/content";

interface ExpertiseRelatedServicesProps {
  locale: Locale;
  ids: readonly ExpertiseId[];
}

export function ExpertiseRelatedServices({ locale, ids }: ExpertiseRelatedServicesProps) {
  const items = expertiseItems.filter((item) => ids.includes(item.id)).slice(0, 3);

  return (
    <>
      <SectionHeader
        eyebrow={locale === "fr" ? "Expertises connexes" : "Related expertise"}
        title={locale === "fr" ? "Explorer d’autres formes d’accompagnement" : "Explore other support areas"}
        align="left"
        maxWidth="wide"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.id}
            href={getLocalizedHref(locale, item.route)}
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2"
          >
            <Card hover className="h-full">
              <CardTitle className="font-display text-2xl font-medium">{item.shortTitle[locale]}</CardTitle>
              <CardDescription className="mt-3">{item.summary[locale]}</CardDescription>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--primary))]">
                <span>{locale === "fr" ? "En savoir plus" : "Learn more"}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
