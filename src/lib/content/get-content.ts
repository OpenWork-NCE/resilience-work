import type { Locale } from "@/types/content";

export function getLocalizedValue<T>(
  value: Record<Locale, T>,
  locale: Locale
): T {
  return value[locale];
}

export function isSupportedLocale(value: string): value is Locale {
  return value === "fr" || value === "en" || value === "it";
}
