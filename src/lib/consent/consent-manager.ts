import type { ConsentPreferences } from "@/lib/consent/consent-types";
import { getConsentVersion } from "@/lib/consent/consent-storage";

export function createConsentPreferences(
  values: Pick<ConsentPreferences, "preferences" | "analytics" | "marketing">
): ConsentPreferences {
  return {
    necessary: true,
    preferences: values.preferences,
    analytics: values.analytics,
    marketing: values.marketing,
    updatedAt: new Date().toISOString(),
    version: getConsentVersion(),
  };
}

export function createAcceptedConsentPreferences() {
  return createConsentPreferences({
    preferences: true,
    analytics: true,
    marketing: true,
  });
}

export function createRejectedConsentPreferences() {
  return createConsentPreferences({
    preferences: false,
    analytics: false,
    marketing: false,
  });
}
