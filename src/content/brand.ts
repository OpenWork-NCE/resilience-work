import type { Locale } from "@/types/content";

export const brand = {
  name: "Resilience@Work",

  summary: {
    fr: "Resilience@Work accompagne les organisations, les managers et les équipes dans la prévention des risques psychosociaux, la mobilité internationale et la gestion des situations de crise.",
    en: "Resilience@Work supports organisations, managers and teams through psychosocial risk prevention, international mobility and crisis management.",
    it: "Resilience@Work accompagna organizzazioni, manager e team nella prevenzione dei rischi psicosociali, nella mobilità internazionale e nella gestione delle situazioni di crisi.",
  } satisfies Record<Locale, string>,
  
  person: {
    name: "Jocelyne Katshinda",
    role: {
      fr: "Fondatrice et Administratrice générale",
      en: "Founder and Managing Director",
      it: "Fondatrice e Amministratrice generale",
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
      label: { fr: "Français", en: "French", it: "Francese" } satisfies Record<Locale, string>,
    },
    {
      code: "en",
      label: { fr: "Anglais", en: "English", it: "Inglese" } satisfies Record<Locale, string>,
    },
    {
      code: "it",
      label: { fr: "Italien", en: "Italian", it: "Italiano" } satisfies Record<Locale, string>,
    },
  ] as const,

  websiteLocales: ["fr", "en", "it"] as const,

  socials: {
    whatsapp: {
      href: "https://wa.me/32470542390",
      enabled: true,
    },
    linkedin: {
      href: "https://www.linkedin.com/in/jocelyne-katshinda-878bb95b/",
      enabled: false,
      note: "URL officielle à confirmer",
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
