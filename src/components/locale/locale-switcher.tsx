"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import type { Locale } from "@/types/content";
import { cn } from "@/lib/utils";
import { localizePathname } from "@/lib/navigation/get-localized-href";

const locales: readonly Locale[] = ["fr", "en"];

export function LocaleSwitcher() {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("locale");

  const search = searchParams.toString();
  const basePath = localizePathname(currentLocale, pathname);

  return (
    <div aria-label={t("switchLanguage")} className="inline-flex items-center gap-1 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-1">
      <span className="sr-only">{t("currentLanguage")}</span>
      {locales.map((locale) => {
        const href = `${localizePathname(locale, basePath)}${search ? `?${search}` : ""}`;
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={href}
            hrefLang={locale}
            lang={locale}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "inline-flex min-w-11 items-center justify-center rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))]",
              isActive
                ? "bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))]"
                : "text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))]"
            )}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
