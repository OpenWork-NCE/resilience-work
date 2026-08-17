import type { Locale } from "@/types/content";

export const brand = {
  name: "Resilience@Work",

  summary: {
    fr: "Resilience@Work propose un soutien psychologique après un incident critique, un appui en situation de crise liée à la mobilité internationale, ainsi que des formations et workshops sur le bien-être et la santé mentale.",
    en: "Resilience@Work provides psychological support after a critical incident, crisis support in international mobility, and training and workshops on well-being and mental health.",
    it: "Resilience@Work offre un sostegno psicologico dopo un incidente critico, un appoggio in situazioni di crisi legate alla mobilità internazionale, nonché formazioni e workshop su benessere e salute mentale.",
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
