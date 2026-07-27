import type { Locale } from "@/types/content";
import { audiences } from "../audiences";
import { assets } from "../assets";
import { brand } from "../brand";
import { routes } from "../routes";
import { aboutPage } from "./about";
import { expertiseItems } from "./expertise";
import { homePage } from "./home";
import { regions } from "./international";

type ContactActionId = "whatsapp" | "phone" | "email" | "website" | "vcard";

interface ContactActionDefinition {
  id: ContactActionId;
  href: string;
  external?: boolean;
  download?: string;
  label: Record<Locale, string>;
  shortLabel: Record<Locale, string>;
  description: Record<Locale, string>;
}

const contactActions: readonly ContactActionDefinition[] = [
  {
    id: "whatsapp",
    href: "https://wa.me/32470542390",
    external: true,
    label: {
      fr: "Échanger sur WhatsApp",
      en: "Chat on WhatsApp",
    },
    shortLabel: {
      fr: "WhatsApp",
      en: "WhatsApp",
    },
    description: {
      fr: "Ouvrir une conversation directe",
      en: "Open a direct conversation",
    },
  },
  {
    id: "phone",
    href: "tel:+32470542390",
    label: {
      fr: "Appeler",
      en: "Call",
    },
    shortLabel: {
      fr: "Appeler",
      en: "Call",
    },
    description: {
      fr: "Joindre directement par téléphone",
      en: "Reach out directly by phone",
    },
  },
  {
    id: "email",
    href: "mailto:admin@resilienceatwork.eu",
    label: {
      fr: "Envoyer un email",
      en: "Send an email",
    },
    shortLabel: {
      fr: "Email",
      en: "Email",
    },
    description: {
      fr: "Envoyer un message professionnel",
      en: "Send a professional message",
    },
  },
  {
    id: "website",
    href: "https://resilienceatwork.eu",
    external: true,
    label: {
      fr: "Visiter le site",
      en: "Visit the website",
    },
    shortLabel: {
      fr: "Site",
      en: "Website",
    },
    description: {
      fr: "Consulter Resilience@Work",
      en: "Explore Resilience@Work",
    },
  },
  {
    id: "vcard",
    href: "/contact/jocelyne-katshinda.vcf",
    download: "jocelyne-katshinda.vcf",
    label: {
      fr: "Enregistrer le contact",
      en: "Save contact",
    },
    shortLabel: {
      fr: "Contact",
      en: "Contact",
    },
    description: {
      fr: "Télécharger la fiche contact",
      en: "Download the contact card",
    },
  },
] as const;

export function getJocelyneContactActions(locale: Locale) {
  return contactActions.map((action) => ({
    id: action.id,
    href: action.href,
    external: Boolean(action.external),
    download: action.download,
    label: action.label[locale],
    shortLabel: action.shortLabel[locale],
    description: action.description[locale],
  }));
}

export const jocelyneKatshindaPage = {
  hero: {
    eyebrow: {
      fr: "Direction · Résilience organisationnelle · Bien-être psychosocial",
      en: "Leadership · Organisational resilience · Psychosocial well-being",
    } satisfies Record<Locale, string>,
    name: "Jocelyne Katshinda",
    role: {
      fr: "Fondatrice et Administratrice générale de Resilience@Work",
      en: "Founder and Managing Director of Resilience@Work",
    } satisfies Record<Locale, string>,
    intro: {
      fr: "J’accompagne les organisations, les managers et les équipes confrontés à des environnements professionnels exigeants, multiculturels ou internationaux.",
      en: "I support organisations, managers and teams navigating demanding, multicultural or international professional environments.",
    } satisfies Record<Locale, string>,
    goal: {
      fr: "Mon objectif : contribuer à créer des environnements de travail plus humains, plus solides et plus résilients.",
      en: "My goal is to help build more human, stronger and more resilient work environments.",
    } satisfies Record<Locale, string>,
    portrait: assets.jocelyne.portrait,
    regions: {
      fr: "Afrique · Europe · Moyen-Orient",
      en: "Africa · Europe · Middle East",
    } satisfies Record<Locale, string>,
    languages: {
      fr: "Français · Anglais · Italien",
      en: "French · English · Italian",
    } satisfies Record<Locale, string>,
  },

  quickActions: {
    eyebrow: {
      fr: "Contact direct",
      en: "Direct contact",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Des actions immédiates, pensées pour le mobile",
      en: "Immediate actions, designed for mobile",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Depuis cette page, vous pouvez contacter Jocelyne Katshinda, enregistrer sa fiche ou poursuivre vers le site officiel de Resilience@Work.",
      en: "From this page, you can contact Jocelyne Katshinda, save her contact card or continue to the official Resilience@Work website.",
    } satisfies Record<Locale, string>,
  },

  introduction: {
    eyebrow: {
      fr: "À propos",
      en: "About",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Une approche humaine au service des organisations",
      en: "A people-centred approach supporting organisations",
    } satisfies Record<Locale, string>,
    paragraphs: {
      fr: [
        "Jocelyne Katshinda est la fondatrice et Administratrice générale de Resilience@Work, une structure spécialisée dans le bien-être psychosocial et la résilience organisationnelle.",
        "À travers Resilience@Work, elle accompagne les organisations, les managers et les collaborateurs exposés à des situations professionnelles complexes, multiculturelles ou géographiquement dispersées.",
        "Son approche privilégie l’écoute, la confidentialité, le pragmatisme et l’adaptation aux réalités du terrain.",
      ],
      en: [
        "Jocelyne Katshinda is the Founder and Managing Director of Resilience@Work, an organisation specialising in psychosocial well-being and organisational resilience.",
        "Through Resilience@Work, she supports organisations, managers and employees navigating complex, multicultural or geographically distributed professional environments.",
        "Her approach focuses on listening, confidentiality, pragmatism and adaptation to real-world conditions.",
      ],
    } satisfies Record<Locale, readonly string[]>,
    highlight: aboutPage.visionQuote,
  },

  mission: {
    eyebrow: {
      fr: "Mission",
      en: "Mission",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Aider les organisations et leurs collaborateurs à rester solides, efficaces et alignés, même dans les environnements les plus exigeants.",
      en: "Helping organisations and their people remain strong, effective and aligned, even in the most demanding environments.",
    } satisfies Record<Locale, string>,
    statement: {
      fr: "Une équipe résiliente est une équipe capable de traverser les crises, de s’adapter et de maintenir durablement sa performance.",
      en: "A resilient team is able to navigate crises, adapt and sustain long-term performance.",
    } satisfies Record<Locale, string>,
  },

  audiences: {
    eyebrow: {
      fr: "Publics accompagnés",
      en: "Who this supports",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Des accompagnements pensés pour des environnements humains et professionnels variés",
      en: "Support designed for varied organisational and human environments",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Les interventions de Resilience@Work s’adressent à des structures, des managers et des équipes confrontés à des réalités internationales, multiculturelles ou sensibles.",
      en: "Resilience@Work supports organisations, managers and teams facing international, multicultural or sensitive realities.",
    } satisfies Record<Locale, string>,
    items: audiences,
  },

  impact: {
    eyebrow: {
      fr: "Impact recherché",
      en: "Intended impact",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Créer des environnements de travail plus stables, plus humains et plus résilients",
      en: "Build work environments that are steadier, more human and more resilient",
    } satisfies Record<Locale, string>,
    description: {
      fr: "L’accompagnement vise des bénéfices concrets pour les équipes, les managers et les organisations, sans promesses artificielles ni chiffres décoratifs.",
      en: "The support focuses on concrete outcomes for teams, managers and organisations, without artificial promises or decorative metrics.",
    } satisfies Record<Locale, string>,
    items: homePage.impact.items,
  },

  international: {
    eyebrow: {
      fr: "Présence internationale",
      en: "International reach",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Une expertise pensée pour les contextes internationaux",
      en: "Expertise designed for international contexts",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Resilience@Work intervient auprès d’organisations implantées en Afrique, en Europe et au Moyen-Orient.",
      en: "Resilience@Work supports organisations across Africa, Europe and the Middle East.",
    } satisfies Record<Locale, string>,
    supportingText: {
      fr: "Les prestations sont proposées en présentiel ou à distance, afin de répondre aux réalités des organisations, des managers et des équipes.",
      en: "Services are delivered on-site or remotely to address the realities faced by organisations, managers and teams.",
    } satisfies Record<Locale, string>,
    image: assets.international.overview,
    regions,
  },

  serviceDetails: {
    eyebrow: {
      fr: "Langues et modalités",
      en: "Languages and delivery",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Une présence professionnelle adaptée aux rythmes, aux langues et aux contextes des organisations",
      en: "A professional presence adapted to organisational rhythms, languages and contexts",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Les accompagnements sont structurés pour rester accessibles, lisibles et confidentiels, sur site ou à distance.",
      en: "Support is structured to remain accessible, clear and confidential, whether on-site or remote.",
    } satisfies Record<Locale, string>,
    modalitiesTitle: {
      fr: "Modalités d’intervention",
      en: "Delivery formats",
    } satisfies Record<Locale, string>,
    modalities: {
      fr: ["Présentiel", "Distanciel", "Accompagnement individuel ou collectif", "Cadre confidentiel"],
      en: ["On-site", "Remote", "Individual or collective support", "Confidential setting"],
    } satisfies Record<Locale, readonly string[]>,
    languagesTitle: {
      fr: "Langues de prestation",
      en: "Service languages",
    } satisfies Record<Locale, string>,
    languages: brand.serviceLanguages,
    websiteTitle: {
      fr: "Site officiel",
      en: "Official website",
    } satisfies Record<Locale, string>,
    websiteText: {
      fr: "resilienceatwork.eu",
      en: "resilienceatwork.eu",
    } satisfies Record<Locale, string>,
  },

  brandSection: {
    eyebrow: {
      fr: "Resilience@Work",
      en: "Resilience@Work",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Une structure dédiée au bien-être psychosocial et à la résilience organisationnelle",
      en: "An organisation dedicated to psychosocial well-being and organisational resilience",
    } satisfies Record<Locale, string>,
    paragraphs: {
      fr: [
        "Resilience@Work accompagne les organisations, les managers et les équipes confrontés à des situations professionnelles complexes, multiculturelles ou géographiquement dispersées.",
        "La structure intervient notamment en prévention psychosociale, en mobilité internationale, en gestion de crise et à travers des formations professionnelles.",
      ],
      en: [
        "Resilience@Work supports organisations, managers and teams navigating complex, multicultural or geographically distributed professional environments.",
        "The organisation works across psychosocial prevention, international mobility, crisis management and professional training.",
      ],
    } satisfies Record<Locale, readonly string[]>,
    links: [
      {
        id: "home",
        route: "home",
        label: {
          fr: "Découvrir Resilience@Work",
          en: "Discover Resilience@Work",
        } satisfies Record<Locale, string>,
      },
      {
        id: "expertise",
        route: "expertise",
        label: {
          fr: "Voir les expertises",
          en: "View expertise areas",
        } satisfies Record<Locale, string>,
      },
      {
        id: "contact",
        route: "contact",
        label: {
          fr: "Planifier un échange",
          en: "Schedule a conversation",
        } satisfies Record<Locale, string>,
      },
    ] as const,
  },

  finalContact: {
    eyebrow: {
      fr: "Prendre contact",
      en: "Get in touch",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Vous pouvez joindre Jocelyne Katshinda directement",
      en: "You can contact Jocelyne Katshinda directly",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Cette page a été pensée pour un usage direct depuis un QR code. Les principales actions restent accessibles en quelques secondes.",
      en: "This page is designed for direct QR-code access. The main actions remain available within seconds.",
    } satisfies Record<Locale, string>,
    note: {
      fr: "Téléphone, email, WhatsApp, site officiel et vCard sont centralisés ici.",
      en: "Phone, email, WhatsApp, official website and vCard are centralised here.",
    } satisfies Record<Locale, string>,
  },

  compactFooter: {
    title: {
      fr: "Profil personnel de Jocelyne Katshinda",
      en: "Jocelyne Katshinda personal profile",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Une page directe, partageable et pensée pour les supports professionnels.",
      en: "A direct, shareable page designed for professional materials.",
    } satisfies Record<Locale, string>,
    links: [
      {
        id: "home",
        route: "home",
        label: {
          fr: "Accueil",
          en: "Home",
        } satisfies Record<Locale, string>,
      },
      {
        id: "expertise",
        route: "expertise",
        label: {
          fr: "Expertises",
          en: "Expertise",
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
    ] as const,
  },

  route: routes.jocelyneKatshinda,
  qrCodePrimaryUrl: "https://resilienceatwork.eu/fr/jocelyne-katshinda",
  qrCodeEnglishUrl: "https://resilienceatwork.eu/en/jocelyne-katshinda",
} as const;

export const jocelynePortfolioExpertiseItems = expertiseItems;
