import { cookieRegistry } from "@/content/legal/cookie-registry";
import type { LegalDocument } from "@/types/legal";

const lastUpdated = "2026-06-04";

export const cookiePolicyDocument: LegalDocument = {
  id: "cookiePolicy",
  eyebrow: {
    fr: "Cookies",
    en: "Cookies",
  },
  title: {
    fr: "Politique relative aux cookies",
    en: "Cookie policy",
  },
  description: {
    fr: "Consultez les informations relatives aux cookies et technologies similaires utilisés sur le site Resilience@Work.",
    en: "Read information about cookies and similar technologies used on the Resilience@Work website.",
  },
  lastUpdated,
  seo: {
    title: {
      fr: "Politique relative aux cookies | Resilience@Work",
      en: "Cookie policy | Resilience@Work",
    },
    description: {
      fr: "Consultez les informations relatives aux cookies et technologies similaires utilisés sur le site Resilience@Work.",
      en: "Read information about cookies and similar technologies used on the Resilience@Work website.",
    },
    canonicalRoute: "cookies",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },
  sections: [
    {
      id: "overview",
      title: { fr: "Objet de la politique", en: "Purpose of this policy" },
      paragraphs: {
        fr: [
          "Cette page présente les technologies de stockage et préférences actuellement détectées ou préparées sur le site Resilience@Work.",
        ],
        en: [
          "This page describes the storage technologies and preferences currently detected or prepared on the Resilience@Work website.",
        ],
      },
    },
    {
      id: "categories",
      title: { fr: "Catégories", en: "Categories" },
      items: {
        fr: [
          "Nécessaires: indispensables au fonctionnement du site.",
          "Préférences: conservent certains choix d’affichage, comme le thème.",
          "Mesure d’audience: inactive tant qu’aucun outil n’est configuré.",
          "Marketing: inactif par défaut.",
        ],
        en: [
          "Necessary: required for the website to function.",
          "Preferences: store certain display choices, such as theme.",
          "Analytics: inactive until a tool is actually configured.",
          "Marketing: inactive by default.",
        ],
      },
    },
    {
      id: "registry",
      title: { fr: "Registre actuel", en: "Current registry" },
      table: {
        headers: {
          fr: ["Nom", "Fournisseur", "Catégorie", "Finalité", "Durée", "Stockage"],
          en: ["Name", "Provider", "Category", "Purpose", "Duration", "Storage"],
        },
        rows: cookieRegistry.map((item) => ({
          id: item.id,
          cells: {
            fr: [
              item.name,
              item.provider,
              item.category,
              item.purpose.fr,
              item.duration.fr,
              item.storageType,
            ],
            en: [
              item.name,
              item.provider,
              item.category,
              item.purpose.en,
              item.duration.en,
              item.storageType,
            ],
          },
        })),
      },
    },
    {
      id: "consent",
      title: { fr: "Gestion du consentement", en: "Consent management" },
      paragraphs: {
        fr: [
          "Les technologies facultatives restent désactivées par défaut. Vous pouvez accepter, refuser ou personnaliser vos choix, puis les modifier ultérieurement depuis le pied de page.",
        ],
        en: [
          "Optional technologies remain disabled by default. You can accept, reject or customise your choices, then change them later from the footer.",
        ],
      },
    },
    {
      id: "inactive-services",
      title: { fr: "Services actuellement inactifs", en: "Currently inactive services" },
      paragraphs: {
        fr: [
          "Aucun outil de mesure d’audience, pixel marketing, carte externe ou lecteur vidéo tiers n’est configuré par défaut dans l’état actuel du projet.",
        ],
        en: [
          "No analytics tool, marketing pixel, external map or third-party video player is configured by default in the current state of the project.",
        ],
      },
    },
    {
      id: "updates",
      title: { fr: "Mises à jour", en: "Updates" },
      paragraphs: {
        fr: [
          "Cette politique sera mise à jour en cas d’ajout, de retrait ou de modification significative des technologies utilisées sur le site.",
        ],
        en: [
          "This policy will be updated if technologies used on the website are added, removed or materially changed.",
        ],
      },
    },
  ],
};

export const consentContent = {
  banner: {
    title: {
      fr: "Respect de votre vie privée",
      en: "Respecting your privacy",
    },
    description: {
      fr: "Nous utilisons des technologies strictement nécessaires au bon fonctionnement du site. Avec votre accord, des technologies facultatives peuvent également être activées afin d’améliorer l’expérience ou de mesurer l’audience.",
      en: "We use technologies that are strictly necessary for the website to function properly. With your agreement, optional technologies may also be enabled to improve the experience or measure audience usage.",
    },
    secondaryDescription: {
      fr: "Vous pouvez accepter, refuser ou personnaliser vos choix.",
      en: "You can accept, refuse or customise your choices.",
    },
    accept: { fr: "Tout accepter", en: "Accept all" },
    reject: { fr: "Tout refuser", en: "Reject all" },
    customise: { fr: "Personnaliser", en: "Customise" },
  },
  dialog: {
    title: { fr: "Préférences de cookies", en: "Cookie preferences" },
    description: {
      fr: "Choisissez les catégories facultatives que vous souhaitez autoriser. Les cookies nécessaires restent toujours actifs.",
      en: "Choose which optional categories you want to allow. Necessary cookies always remain active.",
    },
    save: { fr: "Enregistrer mes choix", en: "Save my choices" },
    reject: { fr: "Tout refuser", en: "Reject all" },
    accept: { fr: "Tout accepter", en: "Accept all" },
    close: { fr: "Fermer", en: "Close" },
    manage: {
      fr: "Gérer mes préférences de cookies",
      en: "Manage cookie preferences",
    },
    categories: {
      necessary: {
        title: { fr: "Nécessaires", en: "Necessary" },
        description: {
          fr: "Indispensables au fonctionnement du site.",
          en: "Required for the website to function.",
        },
      },
      preferences: {
        title: { fr: "Préférences", en: "Preferences" },
        description: {
          fr: "Permettent de conserver certains choix d’affichage, comme la langue ou le thème.",
          en: "Store certain display choices, such as language or theme.",
        },
      },
      analytics: {
        title: { fr: "Mesure d’audience", en: "Analytics" },
        description: {
          fr: "Permet de comprendre l’utilisation du site lorsque cette fonctionnalité est activée.",
          en: "Helps understand how the website is used when this feature is enabled.",
        },
      },
      marketing: {
        title: { fr: "Marketing", en: "Marketing" },
        description: {
          fr: "Permet l’utilisation de technologies publicitaires ou de suivi lorsque cette fonctionnalité est activée.",
          en: "Enables advertising or tracking technologies when this feature is active.",
        },
      },
    },
  },
} as const;
