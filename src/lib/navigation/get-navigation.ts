import { brand } from "@/content/brand";
import { expertiseItems } from "@/content/pages/expertise";
import { globalCtas, navigation } from "@/content/navigation";
import type { Cta, ExpertiseId, Locale, RouteKey } from "@/types/content";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";

export interface ResolvedNavigationItem {
  id: string;
  label: string;
  href: string;
  route?: RouteKey;
  children?: ResolvedNavigationItem[];
}

export interface ResolvedExpertiseItem {
  id: ExpertiseId;
  label: string;
  summary: string;
  href: string;
}

export interface ResolvedCta {
  label: string;
  href: string;
  external: boolean;
  variant: NonNullable<Cta["variant"]>;
}

export function getLocalizedNavigation(locale: Locale): ResolvedNavigationItem[] {
  return navigation.map((item) => ({
    id: item.id ?? item.route ?? item.href ?? item.label?.[locale] ?? "navigation-item",
    label: item.label?.[locale] ?? "",
    href: item.route ? getLocalizedHref(locale, item.route) : item.href ?? "#",
    route: item.route,
    children: item.children?.map((child) => ({
      id: child.id ?? child.route ?? child.href ?? child.label?.[locale] ?? "navigation-child",
      label: child.label?.[locale] ?? "",
      href: child.route ? getLocalizedHref(locale, child.route) : child.href ?? "#",
      route: child.route,
    })),
  }));
}

export function getLocalizedExpertiseItems(locale: Locale): ResolvedExpertiseItem[] {
  return expertiseItems.map((item) => ({
    id: item.id,
    label: item.shortTitle[locale],
    summary: item.summary[locale],
    href: getLocalizedHref(locale, item.route),
  }));
}

export function getLocalizedCta(locale: Locale, key: keyof typeof globalCtas): ResolvedCta {
  const cta = globalCtas[key];
  const href =
    "route" in cta && cta.route
      ? getLocalizedHref(locale, cta.route)
      : "href" in cta
        ? cta.href ?? "#"
        : "#";

  return {
    label: cta.label[locale],
    href,
    external: "external" in cta ? Boolean(cta.external) : false,
    variant: cta.variant ?? "primary",
  };
}

export function getLocalizedServiceLanguages(locale: Locale) {
  return brand.serviceLanguages.map((language) => language.label[locale]);
}
