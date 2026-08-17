import type { Locale } from "@/types/content";
import { audiences } from "../audiences";
import { assets } from "../assets";
import { brand } from "../brand";
import { routes } from "../routes";
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
      it: "Scrivici su WhatsApp",
    },
    shortLabel: {
      fr: "WhatsApp",
      en: "WhatsApp",
      it: "WhatsApp",
    },
    description: {
      fr: "Ouvrir une conversation directe",
      en: "Open a direct conversation",
      it: "Aprire una conversazione diretta",
    },
  },
  {
    id: "phone",
    href: "tel:+32470542390",
    label: {
      fr: "Appeler",
      en: "Call",
      it: "Chiama",
    },
    shortLabel: {
      fr: "Appeler",
      en: "Call",
      it: "Chiama",
    },
    description: {
      fr: "Joindre directement par téléphone",
      en: "Reach out directly by phone",
      it: "Contattare direttamente per telefono",
    },
  },
  {
    id: "email",
    href: "mailto:admin@resilienceatwork.eu",
    label: {
      fr: "Envoyer un email",
      en: "Send an email",
      it: "Invia un’email",
    },
    shortLabel: {
      fr: "Email",
      en: "Email",
      it: "Email",
    },
    description: {
      fr: "Envoyer un message professionnel",
      en: "Send a professional message",
      it: "Inviare un messaggio professionale",
    },
  },
  {
    id: "website",
    href: "https://resilienceatwork.eu",
    external: true,
    label: {
      fr: "Visiter le site",
      en: "Visit the website",
      it: "Visita il sito",
    },
    shortLabel: {
      fr: "Site",
      en: "Website",
      it: "Sito",
    },
    description: {
      fr: "Consulter Resilience@Work",
      en: "Explore Resilience@Work",
      it: "Scopri Resilience@Work",
    },
  },
  {
    id: "vcard",
    href: "/contact/jocelyne-katshinda.vcf",
    download: "jocelyne-katshinda.vcf",
    label: {
      fr: "Enregistrer le contact",
      en: "Save contact",
      it: "Salva il contatto",
    },
    shortLabel: {
      fr: "Contact",
      en: "Contact",
      it: "Contatto",
    },
    description: {
      fr: "Télécharger la fiche contact",
      en: "Download the contact card",
      it: "Scarica la scheda contatto",
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

/** UI chrome strings used by portfolio components (hardcoded fallbacks removed from components). */
export const portfolioUiCopy = {
  expertise: {
    eyebrow: {
      fr: "Domaines d’intervention",
      en: "Areas of expertise",
      it: "Aree di competenza",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Trois activités, présentées simplement",
      en: "Three activities, presented simply",
      it: "Tre attività, presentate in modo semplice",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Support psychologique post-incident, crise en mobilité internationale, webinaires et workshops.",
      en: "Post-incident psychological support, crisis in international mobility, webinars and workshops.",
      it: "Supporto psicologico post-incidente, crisi in mobilità internazionale, webinar e workshop.",
    } satisfies Record<Locale, string>,
    learnMore: {
      fr: "En savoir plus",
      en: "Learn more",
      it: "Scopri di più",
    } satisfies Record<Locale, string>,
  },
  international: {
    deliveryApproachTitle: {
      fr: "Modalités d’intervention",
      en: "Delivery approach",
      it: "Modalità di intervento",
    } satisfies Record<Locale, string>,
    deliveryApproachDescription: {
      fr: "Des interventions en présentiel ou à distance, adaptées aux rythmes des organisations, à la complexité des contextes et aux réalités multiculturelles des équipes.",
      en: "On-site or remote interventions adapted to organisational rhythms, contextual complexity and the multicultural realities faced by teams.",
      it: "Interventi in presenza o a distanza, adattati ai ritmi delle organizzazioni, alla complessità dei contesti e alle realtà multiculturali dei team.",
    } satisfies Record<Locale, string>,
  },
  serviceDetails: {
    workingFrameworkTitle: {
      fr: "Cadre d’intervention",
      en: "Working framework",
      it: "Quadro di intervento",
    } satisfies Record<Locale, string>,
    workingFrameworkDescription: {
      fr: "Les échanges privilégient la clarté, la confidentialité et l’adaptation aux contraintes concrètes des équipes et des organisations.",
      en: "Interactions prioritise clarity, confidentiality and adaptation to the concrete constraints faced by teams and organisations.",
      it: "Gli scambi privilegiano chiarezza, riservatezza e adattamento ai vincoli concreti di team e organizzazioni.",
    } satisfies Record<Locale, string>,
  },
} as const;

export const jocelyneKatshindaPage = {
  hero: {
    eyebrow: {
      fr: "Direction · Soutien psychologique · Crise internationale",
      en: "Leadership · Psychological support · International crisis",
      it: "Direzione · Sostegno psicologico · Crisi internazionale",
    } satisfies Record<Locale, string>,
    name: "Jocelyne Katshinda",
    role: {
      fr: "Fondatrice et Administratrice générale de Resilience@Work",
      en: "Founder and Managing Director of Resilience@Work",
      it: "Fondatrice e Amministratrice generale di Resilience@Work",
    } satisfies Record<Locale, string>,
    intro: {
      fr: "J’interviens auprès des organisations confrontées à un incident critique, à une crise en mobilité internationale, ou à un besoin de sensibilisation sur le bien-être et la santé mentale.",
      en: "I work with organisations facing a critical incident, a crisis in international mobility, or a need to raise awareness of well-being and mental health.",
      it: "Intervengo presso organizzazioni confrontate con un incidente critico, una crisi in mobilità internazionale, o un bisogno di sensibilizzazione su benessere e salute mentale.",
    } satisfies Record<Locale, string>,
    goal: {
      fr: "Mon objectif : contribuer à créer des environnements de travail plus humains, plus solides et plus résilients.",
      en: "My goal is to help build more human, stronger and more resilient work environments.",
      it: "Il mio obiettivo: contribuire a creare ambienti di lavoro più umani, più solidi e più resilienti.",
    } satisfies Record<Locale, string>,
    portrait: assets.jocelyne.portrait,
    regions: {
      fr: "Afrique · Europe · Moyen-Orient",
      en: "Africa · Europe · Middle East",
      it: "Africa · Europa · Medio Oriente",
    } satisfies Record<Locale, string>,
    languages: {
      fr: "Français · Anglais · Italien",
      en: "French · English · Italian",
      it: "Francese · Inglese · Italiano",
    } satisfies Record<Locale, string>,
  },

  quickActions: {
    eyebrow: {
      fr: "Contact direct",
      en: "Direct contact",
      it: "Contatto diretto",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Des actions immédiates, pensées pour le mobile",
      en: "Immediate actions, designed for mobile",
      it: "Azioni immediate, pensate per il mobile",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Depuis cette page, vous pouvez contacter Jocelyne Katshinda, enregistrer sa fiche ou poursuivre vers le site officiel de Resilience@Work.",
      en: "From this page, you can contact Jocelyne Katshinda, save her contact card or continue to the official Resilience@Work website.",
      it: "Da questa pagina potete contattare Jocelyne Katshinda, salvare la sua scheda contatto o proseguire verso il sito ufficiale di Resilience@Work.",
    } satisfies Record<Locale, string>,
  },

  introduction: {
    eyebrow: {
      fr: "À propos",
      en: "About",
      it: "Chi siamo",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Une approche humaine au service des organisations",
      en: "A people-centred approach supporting organisations",
      it: "Un approccio umano al servizio delle organizzazioni",
    } satisfies Record<Locale, string>,
    paragraphs: {
      fr: [
        "Jocelyne Katshinda est la fondatrice et Administratrice générale de Resilience@Work.",
        "La structure propose un soutien psychologique après un incident critique, un appui en situation de crise liée à la mobilité internationale, ainsi que des webinaires et workshops sur le bien-être et la santé mentale.",
        "Son approche privilégie l’écoute, la confidentialité et le pragmatisme.",
      ],
      en: [
        "Jocelyne Katshinda is the Founder and Managing Director of Resilience@Work.",
        "The organisation provides psychological support after a critical incident, crisis support in international mobility, and webinars and workshops on well-being and mental health.",
        "Her approach focuses on listening, confidentiality and pragmatism.",
      ],
      it: [
        "Jocelyne Katshinda è la fondatrice e Amministratrice generale di Resilience@Work.",
        "La struttura offre un sostegno psicologico dopo un incidente critico, un appoggio in situazioni di crisi legate alla mobilità internazionale, nonché webinar e workshop su benessere e salute mentale.",
        "Il suo approccio privilegia l’ascolto, la riservatezza e il pragmatismo.",
      ],
    } satisfies Record<Locale, readonly string[]>,
    highlight: {
      fr: "Ne jamais cesser d'apprendre, car la vie ne cesse jamais d'enseigner.",
      en: "Never stop learning because life never stops teaching.",
      it: "Non smettere mai di imparare, perché la vita non smette mai di insegnare.",
    } satisfies Record<Locale, string>,
  },

  mission: {
    eyebrow: {
      fr: "Mission",
      en: "Mission",
      it: "Missione",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Aider les organisations et leurs collaborateurs à rester solides, efficaces et alignés, même dans les environnements les plus exigeants.",
      en: "Helping organisations and their people remain strong, effective and aligned, even in the most demanding environments.",
      it: "Aiutare le organizzazioni e i loro collaboratori a restare solidi, efficaci e allineati, anche negli ambienti più esigenti.",
    } satisfies Record<Locale, string>,
    statement: {
      fr: "Une équipe résiliente est une équipe capable de traverser les crises, de s’adapter et de maintenir durablement sa performance.",
      en: "A resilient team is able to navigate crises, adapt and sustain long-term performance.",
      it: "Un team resiliente è in grado di affrontare le crisi, adattarsi e mantenere nel tempo la propria performance.",
    } satisfies Record<Locale, string>,
  },

  audiences: {
    eyebrow: {
      fr: "Publics accompagnés",
      en: "Who this supports",
      it: "Pubblici accompagnati",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Des accompagnements pensés pour des environnements humains et professionnels variés",
      en: "Support designed for varied organisational and human environments",
      it: "Accompagnamenti pensati per ambienti umani e professionali diversi",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Les interventions de Resilience@Work s’adressent à des structures, des managers et des équipes confrontés à des réalités internationales, multiculturelles ou sensibles.",
      en: "Resilience@Work supports organisations, managers and teams facing international, multicultural or sensitive realities.",
      it: "Gli interventi di Resilience@Work si rivolgono a strutture, manager e team confrontati con realtà internazionali, multiculturali o sensibili.",
    } satisfies Record<Locale, string>,
    items: audiences,
  },

  impact: {
    eyebrow: {
      fr: "Impact recherché",
      en: "Intended impact",
      it: "Impatto ricercato",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Créer des environnements de travail plus stables, plus humains et plus résilients",
      en: "Build work environments that are steadier, more human and more resilient",
      it: "Creare ambienti di lavoro più stabili, più umani e più resilienti",
    } satisfies Record<Locale, string>,
    description: {
      fr: "L’accompagnement vise des bénéfices concrets pour les équipes, les managers et les organisations, sans promesses artificielles ni chiffres décoratifs.",
      en: "The support focuses on concrete outcomes for teams, managers and organisations, without artificial promises or decorative metrics.",
      it: "L’accompagnamento mira a benefici concreti per team, manager e organizzazioni, senza promesse artificiali né metriche decorative.",
    } satisfies Record<Locale, string>,
    items: homePage.impact.items,
  },

  international: {
    eyebrow: {
      fr: "Présence internationale",
      en: "International reach",
      it: "Presenza internazionale",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Une expertise pensée pour les contextes internationaux",
      en: "Expertise designed for international contexts",
      it: "Una competenza pensata per i contesti internazionali",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Resilience@Work intervient auprès d’organisations implantées en Afrique, en Europe et au Moyen-Orient.",
      en: "Resilience@Work supports organisations across Africa, Europe and the Middle East.",
      it: "Resilience@Work interviene presso organizzazioni presenti in Africa, Europa e Medio Oriente.",
    } satisfies Record<Locale, string>,
    supportingText: {
      fr: "Les prestations sont proposées en présentiel ou à distance, afin de répondre aux réalités des organisations, des managers et des équipes.",
      en: "Services are delivered on-site or remotely to address the realities faced by organisations, managers and teams.",
      it: "Le prestazioni sono proposte in presenza o a distanza, per rispondere alle realtà di organizzazioni, manager e team.",
    } satisfies Record<Locale, string>,
    image: assets.international.overview,
    regions,
  },

  serviceDetails: {
    eyebrow: {
      fr: "Langues et modalités",
      en: "Languages and delivery",
      it: "Lingue e modalità",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Une présence professionnelle adaptée aux rythmes, aux langues et aux contextes des organisations",
      en: "A professional presence adapted to organisational rhythms, languages and contexts",
      it: "Una presenza professionale adattata ai ritmi, alle lingue e ai contesti delle organizzazioni",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Les accompagnements sont structurés pour rester accessibles, lisibles et confidentiels, sur site ou à distance.",
      en: "Support is structured to remain accessible, clear and confidential, whether on-site or remote.",
      it: "Gli accompagnamenti sono strutturati per restare accessibili, chiari e confidenziali, in sede o a distanza.",
    } satisfies Record<Locale, string>,
    modalitiesTitle: {
      fr: "Modalités d’intervention",
      en: "Delivery formats",
      it: "Modalità di intervento",
    } satisfies Record<Locale, string>,
    modalities: {
      fr: ["Présentiel", "Distanciel", "Accompagnement individuel ou collectif", "Cadre confidentiel"],
      en: ["On-site", "Remote", "Individual or collective support", "Confidential setting"],
      it: ["In presenza", "A distanza", "Accompagnamento individuale o collettivo", "Quadro confidenziale"],
    } satisfies Record<Locale, readonly string[]>,
    languagesTitle: {
      fr: "Langues de prestation",
      en: "Service languages",
      it: "Lingue di prestazione",
    } satisfies Record<Locale, string>,
    languages: brand.serviceLanguages,
    websiteTitle: {
      fr: "Site officiel",
      en: "Official website",
      it: "Sito ufficiale",
    } satisfies Record<Locale, string>,
    websiteText: {
      fr: "resilienceatwork.eu",
      en: "resilienceatwork.eu",
      it: "resilienceatwork.eu",
    } satisfies Record<Locale, string>,
  },

  brandSection: {
    eyebrow: {
      fr: "Resilience@Work",
      en: "Resilience@Work",
      it: "Resilience@Work",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Une structure dédiée au soutien post-incident, à la crise internationale et à la santé mentale",
      en: "An organisation dedicated to post-incident support, international crisis and mental health",
      it: "Una struttura dedicata al sostegno post-incidente, alla crisi internazionale e alla salute mentale",
    } satisfies Record<Locale, string>,
    paragraphs: {
      fr: [
        "Resilience@Work intervient après un incident critique, dans les situations de crise liées à la mobilité internationale, et à travers des webinaires et workshops.",
        "Les trois activités restent distinctes, afin que chaque organisation identifie clairement ce dont elle a besoin.",
      ],
      en: [
        "Resilience@Work intervenes after a critical incident, in crisis situations linked to international mobility, and through webinars and workshops.",
        "The three activities remain distinct, so each organisation can clearly identify what it needs.",
      ],
      it: [
        "Resilience@Work interviene dopo un incidente critico, nelle situazioni di crisi legate alla mobilità internazionale, e attraverso webinar e workshop.",
        "Le tre attività restano distinte, affinché ogni organizzazione identifichi con chiarezza di cosa ha bisogno.",
      ],
    } satisfies Record<Locale, readonly string[]>,
    links: [
      {
        id: "home",
        route: "home",
        label: {
          fr: "Découvrir Resilience@Work",
          en: "Discover Resilience@Work",
          it: "Scopri Resilience@Work",
        } satisfies Record<Locale, string>,
      },
      {
        id: "expertise",
        route: "expertise",
        label: {
          fr: "Voir les expertises",
          en: "View expertise areas",
          it: "Vedi le competenze",
        } satisfies Record<Locale, string>,
      },
      {
        id: "contact",
        route: "contact",
        label: {
          fr: "Planifier un échange",
          en: "Schedule a conversation",
          it: "Pianificare un colloquio",
        } satisfies Record<Locale, string>,
      },
    ] as const,
  },

  finalContact: {
    eyebrow: {
      fr: "Prendre contact",
      en: "Get in touch",
      it: "Prendere contatto",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Vous pouvez joindre Jocelyne Katshinda directement",
      en: "You can contact Jocelyne Katshinda directly",
      it: "Potete contattare Jocelyne Katshinda direttamente",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Cette page a été pensée pour un usage direct depuis un QR code. Les principales actions restent accessibles en quelques secondes.",
      en: "This page is designed for direct QR-code access. The main actions remain available within seconds.",
      it: "Questa pagina è pensata per un accesso diretto da QR code. Le azioni principali restano accessibili in pochi secondi.",
    } satisfies Record<Locale, string>,
    note: {
      fr: "Téléphone, email, WhatsApp, site officiel et vCard sont centralisés ici.",
      en: "Phone, email, WhatsApp, official website and vCard are centralised here.",
      it: "Telefono, email, WhatsApp, sito ufficiale e vCard sono centralizzati qui.",
    } satisfies Record<Locale, string>,
  },

  compactFooter: {
    title: {
      fr: "Profil personnel de Jocelyne Katshinda",
      en: "Jocelyne Katshinda personal profile",
      it: "Profilo personale di Jocelyne Katshinda",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Une page directe, partageable et pensée pour les supports professionnels.",
      en: "A direct, shareable page designed for professional materials.",
      it: "Una pagina diretta, condividibile e pensata per i supporti professionali.",
    } satisfies Record<Locale, string>,
    links: [
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
        id: "expertise",
        route: "expertise",
        label: {
          fr: "Activités",
          en: "Activities",
          it: "Attività",
        } satisfies Record<Locale, string>,
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
    ] as const,
  },

  route: routes.jocelyneKatshinda,
  qrCodePrimaryUrl: "https://resilienceatwork.eu/fr/jocelyne-katshinda",
  qrCodeEnglishUrl: "https://resilienceatwork.eu/en/jocelyne-katshinda",
} as const;

export const jocelynePortfolioExpertiseItems = expertiseItems;
