import type { LocalizedText } from "@/types/content";
import type { ConsentCategory } from "@/lib/consent/consent-types";

export type CookieRegistryItem = {
  id: string;
  name: string;
  provider: string;
  category: ConsentCategory;
  purpose: LocalizedText;
  duration: LocalizedText;
  storageType: "cookie" | "localStorage" | "sessionStorage";
  required: boolean;
  enabled: boolean;
};

export const cookieRegistry = [
  {
    id: "consent-preferences",
    name: "resilienceatwork_consent",
    provider: "Resilience@Work",
    category: "necessary",
    purpose: {
      fr: "Enregistre les choix relatifs aux cookies et traceurs.",
      en: "Stores cookie and tracker choices.",
    },
    duration: {
      fr: "Jusqu’à suppression dans le navigateur ou changement de version du consentement",
      en: "Until removed from browser storage or consent version changes",
    },
    storageType: "localStorage",
    required: true,
    enabled: true,
  },
  {
    id: "theme-preference",
    name: "theme",
    provider: "Resilience@Work",
    category: "preferences",
    purpose: {
      fr: "Conserve le thème clair ou sombre sélectionné.",
      en: "Stores the selected light or dark theme.",
    },
    duration: {
      fr: "Jusqu’à modification de la préférence ou suppression dans le navigateur",
      en: "Until the preference changes or browser storage is cleared",
    },
    storageType: "localStorage",
    required: false,
    enabled: true,
  },
  {
    id: "analytics-placeholder",
    name: "Aucun traceur actif",
    provider: "Resilience@Work",
    category: "analytics",
    purpose: {
      fr: "Architecture prête mais aucune mesure d’audience n’est configurée actuellement.",
      en: "Architecture is prepared but no audience measurement tool is currently configured.",
    },
    duration: {
      fr: "Non applicable",
      en: "Not applicable",
    },
    storageType: "localStorage",
    required: false,
    enabled: false,
  },
  {
    id: "marketing-placeholder",
    name: "Aucun traceur actif",
    provider: "Resilience@Work",
    category: "marketing",
    purpose: {
      fr: "Aucune technologie marketing ou publicitaire n’est configurée actuellement.",
      en: "No marketing or advertising technology is currently configured.",
    },
    duration: {
      fr: "Non applicable",
      en: "Not applicable",
    },
    storageType: "localStorage",
    required: false,
    enabled: false,
  },
] as const satisfies readonly CookieRegistryItem[];
