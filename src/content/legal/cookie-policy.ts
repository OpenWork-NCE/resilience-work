import { cookieRegistry } from "@/content/legal/cookie-registry";
import type { LegalDocument } from "@/types/legal";

const lastUpdated = "2026-06-04";

export const cookiePolicyDocument: LegalDocument = {
  id: "cookiePolicy",
  eyebrow: {
    fr: "Cookies",
    en: "Cookies",
    it: "Cookie",
  },
  title: {
    fr: "Politique relative aux cookies",
    en: "Cookie policy",
    it: "Informativa sui cookie",
  },
  description: {
    fr: "Consultez les informations relatives aux cookies et technologies similaires utilisés sur le site Resilience@Work.",
    en: "Read information about cookies and similar technologies used on the Resilience@Work website.",
    it: "Consultate le informazioni relative ai cookie e alle tecnologie simili utilizzate sul sito Resilience@Work.",
  },
  lastUpdated,
  seo: {
    title: {
      fr: "Politique relative aux cookies | Resilience@Work",
      en: "Cookie policy | Resilience@Work",
      it: "Informativa sui cookie | Resilience@Work",
    },
    description: {
      fr: "Consultez les informations relatives aux cookies et technologies similaires utilisés sur le site Resilience@Work.",
      en: "Read information about cookies and similar technologies used on the Resilience@Work website.",
      it: "Consultate le informazioni relative ai cookie e alle tecnologie simili utilizzate sul sito Resilience@Work.",
    },
    canonicalRoute: "cookies",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },
  sections: [
    {
      id: "overview",
      title: {
        fr: "Objet de la politique",
        en: "Purpose of this policy",
        it: "Oggetto dell’informativa",
      },
      paragraphs: {
        fr: [
          "Cette page présente les technologies de stockage et préférences actuellement détectées ou préparées sur le site Resilience@Work.",
        ],
        en: [
          "This page describes the storage technologies and preferences currently detected or prepared on the Resilience@Work website.",
        ],
        it: [
          "Questa pagina presenta le tecnologie di memorizzazione e le preferenze attualmente rilevate o predisposte sul sito Resilience@Work.",
        ],
      },
    },
    {
      id: "categories",
      title: { fr: "Catégories", en: "Categories", it: "Categorie" },
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
        it: [
          "Necessari: indispensabili al funzionamento del sito.",
          "Preferenze: conservano alcune scelte di visualizzazione, come il tema.",
          "Misurazione dell’audience: inattiva finché non viene configurato uno strumento.",
          "Marketing: inattivo per impostazione predefinita.",
        ],
      },
    },
    {
      id: "registry",
      title: { fr: "Registre actuel", en: "Current registry", it: "Registro attuale" },
      table: {
        headers: {
          fr: ["Nom", "Fournisseur", "Catégorie", "Finalité", "Durée", "Stockage"],
          en: ["Name", "Provider", "Category", "Purpose", "Duration", "Storage"],
          it: ["Nome", "Fornitore", "Categoria", "Finalità", "Durata", "Memorizzazione"],
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
            it: [
              item.name,
              item.provider,
              item.category,
              item.purpose.it,
              item.duration.it,
              item.storageType,
            ],
          },
        })),
      },
    },
    {
      id: "consent",
      title: {
        fr: "Gestion du consentement",
        en: "Consent management",
        it: "Gestione del consenso",
      },
      paragraphs: {
        fr: [
          "Les technologies facultatives restent désactivées par défaut. Vous pouvez accepter, refuser ou personnaliser vos choix, puis les modifier ultérieurement depuis le pied de page.",
        ],
        en: [
          "Optional technologies remain disabled by default. You can accept, reject or customise your choices, then change them later from the footer.",
        ],
        it: [
          "Le tecnologie facoltative restano disattivate per impostazione predefinita. Potete accettare, rifiutare o personalizzare le vostre scelte e modificarle successivamente dal piè di pagina.",
        ],
      },
    },
    {
      id: "inactive-services",
      title: {
        fr: "Services actuellement inactifs",
        en: "Currently inactive services",
        it: "Servizi attualmente inattivi",
      },
      paragraphs: {
        fr: [
          "Aucun outil de mesure d’audience, pixel marketing, carte externe ou lecteur vidéo tiers n’est configuré par défaut dans l’état actuel du projet.",
        ],
        en: [
          "No analytics tool, marketing pixel, external map or third-party video player is configured by default in the current state of the project.",
        ],
        it: [
          "Nello stato attuale del progetto non è configurato per impostazione predefinita alcuno strumento di misurazione dell’audience, pixel di marketing, mappa esterna o lettore video di terze parti.",
        ],
      },
    },
    {
      id: "updates",
      title: { fr: "Mises à jour", en: "Updates", it: "Aggiornamenti" },
      paragraphs: {
        fr: [
          "Cette politique sera mise à jour en cas d’ajout, de retrait ou de modification significative des technologies utilisées sur le site.",
        ],
        en: [
          "This policy will be updated if technologies used on the website are added, removed or materially changed.",
        ],
        it: [
          "La presente informativa sarà aggiornata in caso di aggiunta, rimozione o modifica sostanziale delle tecnologie utilizzate sul sito.",
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
      it: "Rispetto della vostra privacy",
    },
    description: {
      fr: "Nous utilisons des technologies strictement nécessaires au bon fonctionnement du site. Avec votre accord, des technologies facultatives peuvent également être activées afin d’améliorer l’expérience ou de mesurer l’audience.",
      en: "We use technologies that are strictly necessary for the website to function properly. With your agreement, optional technologies may also be enabled to improve the experience or measure audience usage.",
      it: "Utilizziamo tecnologie strettamente necessarie al corretto funzionamento del sito. Con il vostro consenso, possono essere attivate anche tecnologie facoltative per migliorare l’esperienza o misurare l’audience.",
    },
    secondaryDescription: {
      fr: "Vous pouvez accepter, refuser ou personnaliser vos choix.",
      en: "You can accept, refuse or customise your choices.",
      it: "Potete accettare, rifiutare o personalizzare le vostre scelte.",
    },
    accept: { fr: "Tout accepter", en: "Accept all", it: "Accetta tutto" },
    reject: { fr: "Tout refuser", en: "Reject all", it: "Rifiuta tutto" },
    customise: { fr: "Personnaliser", en: "Customise", it: "Personalizza" },
  },
  dialog: {
    title: {
      fr: "Préférences de cookies",
      en: "Cookie preferences",
      it: "Preferenze sui cookie",
    },
    description: {
      fr: "Choisissez les catégories facultatives que vous souhaitez autoriser. Les cookies nécessaires restent toujours actifs.",
      en: "Choose which optional categories you want to allow. Necessary cookies always remain active.",
      it: "Scegliete le categorie facoltative che desiderate autorizzare. I cookie necessari restano sempre attivi.",
    },
    save: { fr: "Enregistrer mes choix", en: "Save my choices", it: "Salva le mie scelte" },
    reject: { fr: "Tout refuser", en: "Reject all", it: "Rifiuta tutto" },
    accept: { fr: "Tout accepter", en: "Accept all", it: "Accetta tutto" },
    close: { fr: "Fermer", en: "Close", it: "Chiudi" },
    manage: {
      fr: "Gérer mes préférences de cookies",
      en: "Manage cookie preferences",
      it: "Gestisci le preferenze sui cookie",
    },
    categories: {
      necessary: {
        title: { fr: "Nécessaires", en: "Necessary", it: "Necessari" },
        description: {
          fr: "Indispensables au fonctionnement du site.",
          en: "Required for the website to function.",
          it: "Indispensabili al funzionamento del sito.",
        },
      },
      preferences: {
        title: { fr: "Préférences", en: "Preferences", it: "Preferenze" },
        description: {
          fr: "Permettent de conserver certains choix d’affichage, comme la langue ou le thème.",
          en: "Store certain display choices, such as language or theme.",
          it: "Consentono di conservare alcune scelte di visualizzazione, come la lingua o il tema.",
        },
      },
      analytics: {
        title: { fr: "Mesure d’audience", en: "Analytics", it: "Misurazione dell’audience" },
        description: {
          fr: "Permet de comprendre l’utilisation du site lorsque cette fonctionnalité est activée.",
          en: "Helps understand how the website is used when this feature is enabled.",
          it: "Consentono di comprendere l’utilizzo del sito quando questa funzionalità è attiva.",
        },
      },
      marketing: {
        title: { fr: "Marketing", en: "Marketing", it: "Marketing" },
        description: {
          fr: "Permet l’utilisation de technologies publicitaires ou de suivi lorsque cette fonctionnalité est activée.",
          en: "Enables advertising or tracking technologies when this feature is active.",
          it: "Consentono l’uso di tecnologie pubblicitarie o di tracciamento quando questa funzionalità è attiva.",
        },
      },
    },
  },
} as const;
