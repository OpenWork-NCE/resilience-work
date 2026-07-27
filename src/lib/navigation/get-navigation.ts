import { brand } from "@/content/brand";
import { expertiseItems } from "@/content/pages/expertise";
import { globalCtas, navigation } from "@/content/navigation";
import type { Cta, ExpertiseId, Locale, NavigationItem, RouteKey } from "@/types/content";
import { getLocalizedHref, localizePathname } from "@/lib/navigation/get-localized-href";

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

/** Dropdown row: expertise (rich) or about/team (simple). */
export interface ResolvedDropdownItem {
  id: string;
  label: string;
  href: string;
  summary?: string;
}

export interface ResolvedCta {
  label: string;
  href: string;
  external: boolean;
  variant: NonNullable<Cta["variant"]>;
}

function resolveNavigationHref(locale: Locale, item: NavigationItem): string {
  if (item.route) {
    return getLocalizedHref(locale, item.route);
  }
  if (item.href) {
    return localizePathname(locale, item.href);
  }
  return "#";
}

function resolveNavigationItem(locale: Locale, item: NavigationItem): ResolvedNavigationItem {
  return {
    id: item.id ?? item.route ?? item.href ?? item.label?.[locale] ?? "navigation-item",
    label: item.label?.[locale] ?? "",
    href: resolveNavigationHref(locale, item),
    route: item.route,
    children: item.children?.map((child) => resolveNavigationItem(locale, child)),
  };
}

export function getLocalizedNavigation(locale: Locale): ResolvedNavigationItem[] {
  return navigation.map((item) => resolveNavigationItem(locale, item));
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
