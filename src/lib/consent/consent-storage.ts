"use client";

import type { ConsentPreferences } from "@/lib/consent/consent-types";

export const CONSENT_STORAGE_KEY = "resilienceatwork_consent";

export function getConsentVersion() {
  return process.env.NEXT_PUBLIC_CONSENT_VERSION?.trim() || "1";
}

export function readConsentPreferences(): ConsentPreferences | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as ConsentPreferences;
    if (parsed.version !== getConsentVersion()) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function writeConsentPreferences(value: ConsentPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
}

export function clearConsentPreferences() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
}
