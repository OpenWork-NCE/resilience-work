import type { Locale } from "@/types/content";

export const brand = {
  name: "Resilience@Work",
  
  person: {
    name: "Jocelyne Katshinda",
    role: {
      fr: "Fondatrice & Administratrice générale",
      en: "Founder & Managing Director",
    } satisfies Record<Locale, string>,
  },

  contact: {
    phoneDisplay: "+32 470 542 390",
    phoneHref: "tel:+32470542390",
    email: "admin@resilienceatwork.eu",
    emailHref: "mailto:admin@resilienceatwork.eu",
    whatsappHref: "https://wa.me/32470542390",
  },

  serviceLanguages: [
    {
      code: "fr",
      label: { fr: "Français", en: "French" } satisfies Record<Locale, string>,
    },
    {
      code: "en",
      label: { fr: "Anglais", en: "English" } satisfies Record<Locale, string>,
    },
    {
      code: "it",
      label: { fr: "Italien", en: "Italian" } satisfies Record<Locale, string>,
    },
  ] as const,

  websiteLocales: ["fr", "en"] as const,

  socials: {
    whatsapp: {
      href: "https://wa.me/32470542390",
      enabled: true,
    },
    linkedin: {
      href: "https://www.linkedin.com/in/jocelyne-katshinda-878bb95b/",
      enabled: true,
    },
    facebook: {
      href: null,
      enabled: false,
      note: "URL à fournir",
    },
  },

  domain: "resilienceatwork.eu",
  
  legalInfo: {
    confirmed: false,
    required: [
      "Forme juridique",
      "Numéro d'entreprise",
      "Adresse du siège",
      "Pays d'immatriculation",
      "Numéro TVA (si applicable)",
    ],
  },
} as const;
