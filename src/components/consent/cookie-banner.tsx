"use client";

import { Button } from "@/components/shared/button";
import { consentContent } from "@/content/legal/cookie-policy";
import type { Locale } from "@/types/content";

interface CookieBannerProps {
  locale: Locale;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onCustomise: () => void;
}

export function CookieBanner({
  locale,
  onAcceptAll,
  onRejectAll,
  onCustomise,
}: CookieBannerProps) {
  const copy = consentContent.banner;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4">
      <div className="mx-auto max-w-4xl rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[color-mix(in_srgb,rgb(var(--surface-elevated))_94%,transparent)] p-5 shadow-[var(--shadow-floating)] supports-[backdrop-filter]:backdrop-blur-xl sm:p-6">
        <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
          {copy.title[locale]}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--foreground))] sm:text-base">
          {copy.description[locale]}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
          {copy.secondaryDescription[locale]}
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button className="sm:min-w-[11rem]" onClick={onAcceptAll}>
            {copy.accept[locale]}
          </Button>
          <Button variant="secondary" className="sm:min-w-[11rem]" onClick={onRejectAll}>
            {copy.reject[locale]}
          </Button>
          <Button variant="outline" className="sm:min-w-[11rem]" onClick={onCustomise}>
            {copy.customise[locale]}
          </Button>
        </div>
      </div>
    </div>
  );
}
