import { routes } from "@/content/routes";
import type { Locale, RouteKey } from "@/types/content";

const LOCALE_PREFIX = /^\/(en|fr|it)(?=\/|$)/;

function ensureLeadingSlash(value: string) {
  return value.startsWith("/") ? value : `/${value}`;
}

export function stripLocalePrefix(pathname: string) {
  const normalized = ensureLeadingSlash(pathname).split(/[?#]/, 1)[0] || "/";
  const withoutLocale = normalized.replace(LOCALE_PREFIX, "") || "/";

  if (withoutLocale !== "/" && withoutLocale.endsWith("/")) {
    return withoutLocale.slice(0, -1);
  }

  return withoutLocale;
}

export function localizePathname(locale: Locale, pathname: string) {
  const normalized = stripLocalePrefix(pathname);
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function getLocalizedHref(locale: Locale, route: RouteKey) {
  return localizePathname(locale, routes[route]);
}
