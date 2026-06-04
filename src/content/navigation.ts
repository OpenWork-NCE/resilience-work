import type { NavigationItem, Cta, Locale } from "@/types/content";

export const navigation: readonly NavigationItem[] = [
  {
    id: "home",
    route: "home",
    label: {
      fr: "Accueil",
      en: "Home",
    } satisfies Record<Locale, string>,
  },
  {
    id: "about",
    route: "about",
    label: {
      fr: "À propos",
      en: "About",
    } satisfies Record<Locale, string>,
  },
  {
    id: "expertise",
    route: "expertise",
    label: {
      fr: "Expertises",
      en: "Expertise",
    } satisfies Record<Locale, string>,
    children: [
      {
        id: "psychosocialPrevention",
        route: "psychosocialPrevention",
        label: {
          fr: "Prévention psychosociale",
          en: "Psychosocial prevention",
        } satisfies Record<Locale, string>,
      },
      {
        id: "internationalMobility",
        route: "internationalMobility",
        label: {
          fr: "Mobilité internationale",
          en: "International mobility",
        } satisfies Record<Locale, string>,
      },
      {
        id: "crisisManagement",
        route: "crisisManagement",
        label: {
          fr: "Gestion de crise",
          en: "Crisis management",
        } satisfies Record<Locale, string>,
      },
      {
        id: "training",
        route: "training",
        label: {
          fr: "Formations",
          en: "Training",
        } satisfies Record<Locale, string>,
      },
    ],
  },
  {
    id: "international",
    route: "international",
    label: {
      fr: "International",
      en: "International",
    } satisfies Record<Locale, string>,
  },
  {
    id: "contact",
    route: "contact",
    label: {
      fr: "Contact",
      en: "Contact",
    } satisfies Record<Locale, string>,
  },
] as const;

export const globalCtas = {
  discoverExpertise: {
    label: {
      fr: "Découvrir nos expertises",
      en: "Explore our expertise",
    } satisfies Record<Locale, string>,
    route: "expertise",
    variant: "primary",
  } satisfies Cta,

  scheduleConversation: {
    label: {
      fr: "Planifier un échange",
      en: "Schedule a conversation",
    } satisfies Record<Locale, string>,
    route: "contact",
    variant: "secondary",
  } satisfies Cta,

  contactUs: {
    label: {
      fr: "Nous contacter",
      en: "Contact us",
    } satisfies Record<Locale, string>,
    route: "contact",
    variant: "primary",
  } satisfies Cta,

  learnMore: {
    label: {
      fr: "En savoir plus",
      en: "Learn more",
    } satisfies Record<Locale, string>,
    variant: "link",
  } satisfies Cta,

  whatsapp: {
    label: {
      fr: "Échanger sur WhatsApp",
      en: "Chat on WhatsApp",
    } satisfies Record<Locale, string>,
    href: "https://wa.me/32470542390",
    external: true,
    variant: "outline",
  } satisfies Cta,
} as const;
