"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import type { Locale } from "@/types/content";
import { cn } from "@/lib/utils";
import { localizePathname } from "@/lib/navigation/get-localized-href";

const locales: readonly Locale[] = ["fr", "en"];

interface LocaleSwitcherProps {
  inverse?: boolean;
}

export function LocaleSwitcher({ inverse = false }: LocaleSwitcherProps) {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("locale");

  const search = searchParams.toString();
  const basePath = localizePathname(currentLocale, pathname);

  return (
    <div
      aria-label={t("switchLanguage")}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border p-1",
        inverse
          ? "border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_22%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent)]"
          : "border-[rgb(var(--border))] bg-[rgb(var(--surface))]"
      )}
    >
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
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2",
              inverse
                ? "focus-visible:ring-offset-transparent"
                : "focus-visible:ring-offset-[rgb(var(--background))]",
              isActive
                ? inverse
                  ? "bg-[rgb(var(--inverse-foreground))] text-[rgb(var(--surface-inverse))]"
                  : "bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))]"
                : inverse
                  ? "text-[rgb(var(--inverse-muted-foreground))] hover:text-[rgb(var(--inverse-foreground))]"
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
