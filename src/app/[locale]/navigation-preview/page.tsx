import { useLocale, useTranslations } from "next-intl";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardDescription, CardTitle } from "@/components/shared/card";
import { Breadcrumbs, buildBreadcrumbsFromPath } from "@/components/navigation/breadcrumbs";
import { getLocalizedExpertiseItems, getLocalizedNavigation } from "@/lib/navigation/get-navigation";
import { routes } from "@/content/routes";
import type { Locale, RouteKey } from "@/types/content";

const previewCopy = {
  fr: {
    title: "Prévisualisation navigation",
    description:
      "Cette route interne permet de vérifier la shell publique, le header sticky, les liens actifs, le footer et les composants de navigation réutilisables.",
    stickyTitle: "Header sticky",
    stickyDescription:
      "Faites défiler la page pour vérifier la transition du header, le contraste et le comportement sticky sur une page interne.",
    breadcrumbsLabel: "Fil d'Ariane de démonstration",
    examplesTitle: "États à vérifier",
    examples: [
      "Navigation desktop et dropdown Expertises",
      "Menu mobile, accordéon et restauration du focus",
      "Switch de thème et de langue sur la route courante",
      "Footer institutionnel, liens actifs et contact",
    ],
  },
  en: {
    title: "Navigation preview",
    description:
      "This internal route helps validate the public shell, sticky header, active links, footer, and the reusable navigation components.",
    stickyTitle: "Sticky header",
    stickyDescription:
      "Scroll this page to validate the header transition, contrast, and sticky behavior on an internal page.",
    breadcrumbsLabel: "Breadcrumb demonstration",
    examplesTitle: "States to verify",
    examples: [
      "Desktop navigation and the Expertise dropdown",
      "Mobile drawer, accordion behavior, and focus restoration",
      "Theme and locale switching on the current route",
      "Institutional footer, active links, and contact actions",
    ],
  },
} as const;

export default function NavigationPreviewPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations();
  const navigationItems = getLocalizedNavigation(locale);
  const expertiseItems = getLocalizedExpertiseItems(locale);
  const copy = previewCopy[locale];

  const labels = Object.fromEntries(
    Object.entries(routes).map(([key]) => [key, t(`nav.${key}`)])
  ) as Record<RouteKey, string>;

  const breadcrumbs = buildBreadcrumbsFromPath(
    locale,
    "/expertise/international-mobility",
    labels
  );

  return (
    <>
      <Section spacing="md">
        <SectionHeader
          eyebrow="Shell"
          title={copy.title}
          description={copy.description}
          align="left"
        />
        <Breadcrumbs items={breadcrumbs} ariaLabel={copy.breadcrumbsLabel} />
      </Section>

      <Section spacing="md" tone="muted">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card variant="elevated">
            <CardTitle>{copy.stickyTitle}</CardTitle>
            <CardDescription className="mt-3">
              {copy.stickyDescription}
            </CardDescription>
            <div className="mt-8 h-[32rem] rounded-[var(--radius-lg)] border border-dashed border-[rgb(var(--border-strong))] bg-[rgb(var(--surface-muted))]" />
          </Card>

          <Card variant="default">
            <CardTitle>{copy.examplesTitle}</CardTitle>
            <div className="mt-5 space-y-3">
              {copy.examples.map((example) => (
                <div
                  key={example}
                  className="rounded-[var(--radius-md)] bg-[rgb(var(--surface-muted))] px-4 py-3 text-sm text-[rgb(var(--foreground))]"
                >
                  {example}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section spacing="md">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="default">
            <CardTitle>{navigationItems.find((item) => item.id === "expertise")?.label}</CardTitle>
            <div className="mt-5 space-y-3">
              {expertiseItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[var(--radius-md)] border border-[rgb(var(--border))] px-4 py-3"
                >
                  <p className="font-medium">{item.label}</p>
                  <p className="mt-1 text-sm text-[rgb(var(--muted-foreground))]">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="default">
            <CardTitle>{t("footer.navigation")}</CardTitle>
            <div className="mt-5 space-y-3">
              {navigationItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[var(--radius-md)] border border-[rgb(var(--border))] px-4 py-3 text-sm"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
