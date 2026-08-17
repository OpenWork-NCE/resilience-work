import type { NavigationItem, Cta, Locale } from "@/types/content";
import { brand } from "@/content/brand";
import { consultants, getConsultantPath } from "@/content/consultants";

/** Portfolio first, then each affiliated consultant. Parent "À propos" also points to portfolio. */
const aboutChildren: NavigationItem[] = [
  {
    id: "jocelyneKatshinda",
    route: "jocelyneKatshinda",
    label: {
      fr: brand.person.name,
      en: brand.person.name,
      it: brand.person.name,
    } satisfies Record<Locale, string>,
  },
  ...consultants.map(
    (consultant) =>
      ({
        id: consultant.id,
        href: getConsultantPath(consultant.slug),
        label: {
          fr: consultant.name,
          en: consultant.name,
          it: consultant.name,
        } satisfies Record<Locale, string>,
      }) satisfies NavigationItem
  ),
];

export const navigation: readonly NavigationItem[] = [
  {
    id: "home",
    route: "home",
    label: {
      fr: "Accueil",
      en: "Home",
      it: "Home",
    } satisfies Record<Locale, string>,
  },
  {
    id: "about",
    // Parent click / bare "À propos" → portfolio page
    route: "jocelyneKatshinda",
    label: {
      fr: "À propos",
      en: "About",
      it: "Chi siamo",
    } satisfies Record<Locale, string>,
    children: aboutChildren,
  },
  {
    id: "expertise",
    route: "expertise",
    label: {
      fr: "Activités",
      en: "Activities",
      it: "Attività",
    } satisfies Record<Locale, string>,
    children: [
      {
        id: "psychosocialPrevention",
        route: "psychosocialPrevention",
        label: {
          fr: "Support post-incident",
          en: "Post-incident support",
          it: "Supporto post-incidente",
        } satisfies Record<Locale, string>,
      },
      {
        id: "crisisManagement",
        route: "crisisManagement",
        label: {
          fr: "Crise et mobilité",
          en: "Crisis and mobility",
          it: "Crisi e mobilità",
        } satisfies Record<Locale, string>,
      },
      {
        id: "training",
        route: "training",
        label: {
          fr: "Webinaires et workshops",
          en: "Webinars and workshops",
          it: "Webinar e workshop",
        } satisfies Record<Locale, string>,
      },
    ],
  },
  {
    id: "contact",
    route: "contact",
    label: {
      fr: "Contact",
      en: "Contact",
      it: "Contatto",
    } satisfies Record<Locale, string>,
  },
] as const;

export const globalCtas = {
  discoverExpertise: {
    label: {
      fr: "Découvrir nos activités",
      en: "Explore our activities",
      it: "Scopri le nostre attività",
    } satisfies Record<Locale, string>,
    route: "expertise",
    variant: "primary",
  } satisfies Cta,

  scheduleConversation: {
    label: {
      fr: "Planifier un échange",
      en: "Schedule a conversation",
      it: "Pianificare un colloquio",
    } satisfies Record<Locale, string>,
    route: "contact",
    variant: "primary",
  } satisfies Cta,

  contactUs: {
    label: {
      fr: "Nous contacter",
      en: "Contact us",
      it: "Contattaci",
    } satisfies Record<Locale, string>,
    route: "contact",
    variant: "primary",
  } satisfies Cta,

  learnMore: {
    label: {
      fr: "En savoir plus",
      en: "Learn more",
      it: "Scopri di più",
    } satisfies Record<Locale, string>,
    variant: "link",
  } satisfies Cta,

  whatsapp: {
    label: {
      fr: "Échanger sur WhatsApp",
      en: "Chat on WhatsApp",
      it: "Scrivici su WhatsApp",
    } satisfies Record<Locale, string>,
    href: "https://wa.me/32470542390",
    external: true,
    variant: "outline",
  } satisfies Cta,
} as const;
