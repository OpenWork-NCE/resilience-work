"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/shared/button";
import { consentContent } from "@/content/legal/cookie-policy";
import { CookieCategoryToggle } from "@/components/consent/cookie-category-toggle";
import type { ConsentPreferences } from "@/lib/consent/consent-types";
import type { Locale } from "@/types/content";

interface CookiePreferencesDialogProps {
  locale: Locale;
  open: boolean;
  draft: ConsentPreferences;
  onClose: () => void;
  onChange: (next: ConsentPreferences) => void;
  onSave: () => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
}

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function CookiePreferencesDialog({
  locale,
  open,
  draft,
  onClose,
  onChange,
  onSave,
  onAcceptAll,
  onRejectAll,
}: CookiePreferencesDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = window.requestAnimationFrame(() => {
      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
      focusableElements?.[0]?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  const copy = consentContent.dialog;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[color-mix(in_srgb,rgb(var(--surface-inverse))_56%,transparent)] px-4 pb-4 pt-10 sm:items-center sm:p-6">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        className="relative w-full max-w-3xl rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-elevated))] p-6 shadow-[var(--shadow-floating)] sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
              {copy.manage[locale]}
            </p>
            <h2 id="cookie-preferences-title" className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.04] text-balance">
              {copy.title[locale]}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[rgb(var(--muted-foreground))]">
              {copy.description[locale]}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] transition-colors hover:bg-[rgb(var(--surface-muted))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
            aria-label={copy.close[locale]}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 space-y-4">
          <CookieCategoryToggle
            checked
            disabled
            label={copy.categories.necessary.title[locale]}
            description={copy.categories.necessary.description[locale]}
          />
          <CookieCategoryToggle
            checked={draft.preferences}
            onChange={(checked) => onChange({ ...draft, preferences: checked })}
            label={copy.categories.preferences.title[locale]}
            description={copy.categories.preferences.description[locale]}
          />
          <CookieCategoryToggle
            checked={draft.analytics}
            onChange={(checked) => onChange({ ...draft, analytics: checked })}
            label={copy.categories.analytics.title[locale]}
            description={copy.categories.analytics.description[locale]}
          />
          <CookieCategoryToggle
            checked={draft.marketing}
            onChange={(checked) => onChange({ ...draft, marketing: checked })}
            label={copy.categories.marketing.title[locale]}
            description={copy.categories.marketing.description[locale]}
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="ghost" onClick={onRejectAll}>
            {copy.reject[locale]}
          </Button>
          <Button variant="secondary" onClick={onAcceptAll}>
            {copy.accept[locale]}
          </Button>
          <Button onClick={onSave}>{copy.save[locale]}</Button>
        </div>
      </div>
    </div>
  );
}
