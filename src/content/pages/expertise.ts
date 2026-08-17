import type {
  ExpertiseDetailPage,
  ExpertiseId,
  ExpertiseItem,
  Locale,
  LocalizedFeature,
} from "@/types/content";
import { audiences } from "../audiences";
import { assets } from "../assets";
import { globalCtas } from "../navigation";
import { homePage } from "./home";

const sharedDelivery = {
  formats: {
    fr: ["Présentiel", "Distanciel"],
    en: ["On-site", "Remote"],
    it: ["In presenza", "A distanza"],
  },
  languages: {
    fr: ["Français", "Anglais", "Italien"],
    en: ["French", "English", "Italian"],
    it: ["Francese", "Inglese", "Italiano"],
  },
  regions: {
    fr: ["Afrique", "Europe", "Moyen-Orient"],
    en: ["Africa", "Europe", "Middle East"],
    it: ["Africa", "Europa", "Medio Oriente"],
  },
} as const;

function feature(
  id: string,
  icon: string,
  frTitle: string,
  enTitle: string,
  itTitle: string,
  frDescription: string,
  enDescription: string,
  itDescription: string
) {
  return {
    id,
    icon,
    title: {
      fr: frTitle,
      en: enTitle,
      it: itTitle,
    },
    description: {
      fr: frDescription,
      en: enDescription,
      it: itDescription,
    },
  } as const satisfies LocalizedFeature;
}

export const expertiseLandingPage = {
  hero: {
    eyebrow: {
      fr: "Nos activités",
      en: "What we do",
      it: "Le nostre attività",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Trois interventions, clairement identifiables.",
      en: "Three interventions, clearly defined.",
      it: "Tre interventi, chiaramente identificabili.",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Resilience@Work intervient après un incident critique ou un événement traumatisant, dans les situations de crise liées à la mobilité internationale, et à travers des formations et workshops sur le bien-être et la santé mentale.",
      en: "Resilience@Work intervenes after a critical incident or traumatic event, in crisis situations linked to international mobility, and through training and workshops on well-being and mental health.",
      it: "Resilience@Work interviene dopo un incidente critico o un evento traumatico, nelle situazioni di crisi legate alla mobilità internazionale, e attraverso formazioni e workshop sul benessere e la salute mentale.",
    } satisfies Record<Locale, string>,
    supportingText: {
      fr: "Si une question plus précise se pose, nous l’abordons ensemble.",
      en: "If a more specific question arises, we can discuss it together.",
      it: "Se sorge una domanda più precisa, la affrontiamo insieme.",
    } satisfies Record<Locale, string>,
  },
  whyAct: {
    eyebrow: {
      fr: "Quand intervenir",
      en: "When to intervene",
      it: "Quando intervenire",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Un appui ciblé, au moment où il est nécessaire",
      en: "Targeted support, when it is needed",
      it: "Un sostegno mirato, nel momento in cui è necessario",
    } satisfies Record<Locale, string>,
    paragraphs: {
      fr: [
        "Un événement critique, une crise en contexte international ou un besoin de sensibilisation sur la santé mentale demandent une réponse claire, humaine et confidentielle.",
      ],
      en: [
        "A critical event, a crisis in an international context or a need to raise awareness of mental health calls for a clear, human and confidential response.",
      ],
      it: [
        "Un evento critico, una crisi in un contesto internazionale o un bisogno di sensibilizzazione sulla salute mentale richiedono una risposta chiara, umana e confidenziale.",
      ],
    } satisfies Record<Locale, readonly string[]>,
  },
  formats: {
    eyebrow: {
      fr: "Formats et langues",
      en: "Formats and languages",
      it: "Formati e lingue",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Présentiel ou à distance, en français, anglais ou italien",
      en: "On-site or remote, in French, English or Italian",
      it: "In presenza o a distanza, in francese, inglese o italiano",
    } satisfies Record<Locale, string>,
    deliveryLabel: {
      fr: "Formats",
      en: "Delivery formats",
      it: "Formati",
    } satisfies Record<Locale, string>,
    deliveryValue: {
      fr: "Présentiel et distanciel",
      en: "On-site and remote",
      it: "In presenza e a distanza",
    } satisfies Record<Locale, string>,
    languagesLabel: {
      fr: "Langues de prestation",
      en: "Service languages",
      it: "Lingue di erogazione",
    } satisfies Record<Locale, string>,
    languagesValue: {
      fr: "Français · Anglais · Italien",
      en: "French · English · Italian",
      it: "Francese · Inglese · Italiano",
    } satisfies Record<Locale, string>,
    regionsLabel: {
      fr: "Zones d’intervention",
      en: "Regions",
      it: "Aree di intervento",
    } satisfies Record<Locale, string>,
    regionsValue: {
      fr: "Afrique · Europe · Moyen-Orient",
      en: "Africa · Europe · Middle East",
      it: "Africa · Europa · Medio Oriente",
    } satisfies Record<Locale, string>,
  },
  finalCta: {
    title: {
      fr: "Échangeons sur votre besoin",
      en: "Let’s discuss your need",
      it: "Parliamo della vostra esigenza",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Incident critique, crise en mobilité internationale, formation ou workshop : décrivez-nous simplement le contexte.",
      en: "Critical incident, crisis in international mobility, training or workshop: simply describe the context.",
      it: "Incidente critico, crisi in mobilità internazionale, formazione o workshop: descriveteci semplicemente il contesto.",
    } satisfies Record<Locale, string>,
    note: {
      fr: "Nous précisons ensemble la forme d’intervention la plus adaptée.",
      en: "Together we will identify the most suitable form of intervention.",
      it: "Insieme precisiamo la forma di intervento più adatta.",
    } satisfies Record<Locale, string>,
    primaryCta: globalCtas.contactUs,
    secondaryCta: globalCtas.whatsapp,
  },
} as const;

export const expertiseItems: readonly ExpertiseItem[] = [
  {
    id: "psychosocialPrevention",
    slug: "critical-incident-support",
    icon: "HeartPulse",
    route: "psychosocialPrevention",
    shortTitle: {
      fr: "Support post-incident",
      en: "Post-incident support",
      it: "Supporto post-incidente",
    },
    title: {
      fr: "Support psychologique lors d’incidents critiques",
      en: "Psychological support after critical incidents",
      it: "Supporto psicologico in caso di incidenti critici",
    },
    summary: {
      fr: "Entretiens individuels et débriefing collectif après un incident critique ou un événement traumatisant.",
      en: "Individual interviews and collective debriefing after a critical incident or traumatic event.",
      it: "Colloqui individuali e debriefing collettivo dopo un incidente critico o un evento traumatico.",
    },
    description: {
      fr: [
        "Lorsqu’un événement critique ou traumatisant survient, les personnes concernées ont besoin d’un espace d’écoute structuré.",
        "Resilience@Work propose un soutien psychologique par entretiens individuels et par débriefing collectif.",
      ],
      en: [
        "When a critical or traumatic event occurs, those affected need a structured space to be heard.",
        "Resilience@Work provides psychological support through individual interviews and collective debriefing.",
      ],
      it: [
        "Quando si verifica un evento critico o traumatico, le persone coinvolte hanno bisogno di uno spazio di ascolto strutturato.",
        "Resilience@Work offre un sostegno psicologico attraverso colloqui individuali e debriefing collettivo.",
      ],
    },
    services: {
      fr: [
        "Entretiens individuels",
        "Débriefing collectif",
        "Accompagnement après un événement traumatisant",
      ],
      en: [
        "Individual interviews",
        "Collective debriefing",
        "Support after a traumatic event",
      ],
      it: [
        "Colloqui individuali",
        "Debriefing collettivo",
        "Accompagnamento dopo un evento traumatico",
      ],
    },
    outcomes: {
      fr: [
        "Offrir un espace d’écoute après l’événement",
        "Soutenir les personnes et le collectif",
        "Faciliter une reprise plus sereine",
      ],
      en: [
        "Provide a space to be heard after the event",
        "Support individuals and the group",
        "Help enable a calmer recovery",
      ],
      it: [
        "Offrire uno spazio di ascolto dopo l’evento",
        "Sostenere le persone e il collettivo",
        "Favorire una ripresa più serena",
      ],
    },
    image: assets.expertise.psychosocialPrevention,
  },
  {
    id: "crisisManagement",
    slug: "crisis-management",
    icon: "ShieldAlert",
    route: "crisisManagement",
    shortTitle: {
      fr: "Crise et mobilité",
      en: "Crisis and mobility",
      it: "Crisi e mobilità",
    },
    title: {
      fr: "Management de crise en mobilité internationale",
      en: "Crisis management in international mobility",
      it: "Gestione delle crisi nella mobilità internazionale",
    },
    summary: {
      fr: "Appuyer les organisations et les équipes confrontées à une crise dans un contexte de mobilité internationale et d’environnement multiculturel.",
      en: "Support organisations and teams facing a crisis in an international mobility and multicultural environment.",
      it: "Sostenere organizzazioni e team confrontati con una crisi in un contesto di mobilità internazionale e di ambiente multiculturale.",
    },
    description: {
      fr: [
        "Une crise en contexte d’expatriation, de mission ou d’équipe internationale demande une lecture attentive des enjeux humains et culturels.",
        "Resilience@Work accompagne les organisations pour structurer la réponse et soutenir les personnes concernées.",
      ],
      en: [
        "A crisis in an expatriation, assignment or international team context requires a careful reading of human and cultural issues.",
        "Resilience@Work supports organisations in structuring the response and supporting the people involved.",
      ],
      it: [
        "Una crisi in un contesto di espatrio, missione o team internazionale richiede una lettura attenta delle questioni umane e culturali.",
        "Resilience@Work accompagna le organizzazioni per strutturare la risposta e sostenere le persone coinvolte.",
      ],
    },
    services: {
      fr: [
        "Appui en situation de crise internationale",
        "Soutien dans les environnements multiculturels",
        "Accompagnement des managers et des équipes déployées",
      ],
      en: [
        "Support in international crisis situations",
        "Support in multicultural environments",
        "Guidance for managers and deployed teams",
      ],
      it: [
        "Sostegno in situazioni di crisi internazionale",
        "Supporto negli ambienti multiculturali",
        "Accompagnamento di manager e team dispiegati",
      ],
    },
    outcomes: {
      fr: [
        "Clarifier la réponse humaine à la crise",
        "Soutenir les équipes en contexte international",
        "Tenir compte des réalités multiculturelles",
      ],
      en: [
        "Clarify the human response to the crisis",
        "Support teams in an international context",
        "Take multicultural realities into account",
      ],
      it: [
        "Chiarire la risposta umana alla crisi",
        "Sostenere i team in un contesto internazionale",
        "Tenere conto delle realtà multiculturali",
      ],
    },
    image: assets.expertise.crisisManagement,
  },
  {
    id: "training",
    slug: "training",
    icon: "Presentation",
    route: "training",
    shortTitle: {
      fr: "Formations et workshops",
      en: "Training and workshops",
      it: "Formazioni e workshop",
    },
    title: {
      fr: "Formations et workshops sur le bien-être et la santé mentale",
      en: "Training and workshops on well-being and mental health",
      it: "Formazioni e workshop su benessere e salute mentale",
    },
    summary: {
      fr: "Des sessions courtes et concrètes pour sensibiliser aux enjeux de bien-être et de santé mentale au travail.",
      en: "Short, practical sessions to raise awareness of workplace well-being and mental health.",
      it: "Sessioni brevi e concrete per sensibilizzare sui temi del benessere e della salute mentale al lavoro.",
    },
    description: {
      fr: [
        "Resilience@Work propose des formations et des workshops sur les questions de bien-être et de santé mentale.",
        "Les contenus restent pratiques, ajustés au public et au contexte de l’organisation.",
      ],
      en: [
        "Resilience@Work offers training and workshops on well-being and mental health.",
        "The content stays practical and is adapted to the audience and the organisation’s context.",
      ],
      it: [
        "Resilience@Work propone formazioni e workshop su benessere e salute mentale.",
        "I contenuti restano pratici, adattati al pubblico e al contesto dell’organizzazione.",
      ],
    },
    services: {
      fr: [
        "Burnout et fatigue compassionnelle",
        "Stress et communication sous tension",
        "Santé mentale au travail",
        "Équilibre de vie professionnelle",
      ],
      en: [
        "Burnout and compassion fatigue",
        "Stress and communication under pressure",
        "Workplace mental health",
        "Work-life balance",
      ],
      it: [
        "Burnout e fatica compassionevole",
        "Stress e comunicazione sotto pressione",
        "Salute mentale al lavoro",
        "Equilibrio vita-lavoro",
      ],
    },
    outcomes: {
      fr: [
        "Sensibiliser les équipes",
        "Transmettre des repères concrets",
        "Ouvrir un échange utile au sein des équipes",
      ],
      en: [
        "Raise awareness among teams",
        "Share practical reference points",
        "Open a useful conversation within teams",
      ],
      it: [
        "Sensibilizzare i team",
        "Trasmettere riferimenti concreti",
        "Aprire un confronto utile nei team",
      ],
    },
    image: assets.expertise.training,
  },
] as const;

const audienceIdMap = {
  hrDirectors: audiences[0].id,
  internationalManagers: audiences[1].id,
  privateEmployers: audiences[2].id,
  ngos: audiences[3].id,
  expatriates: audiences[4].id,
  internationalOrganisations: audiences[5].id,
} as const;

const sharedProcess = homePage.methodology.steps;

export const expertiseDetailPages: readonly ExpertiseDetailPage[] = [
  {
    id: "psychosocialPrevention",
    slug: "critical-incident-support",
    route: "psychosocialPrevention",
    icon: "HeartPulse",
    eyebrow: {
      fr: "Support psychologique",
      en: "Psychological support",
      it: "Supporto psicologico",
    },
    title: {
      fr: "Soutenir les personnes après un incident critique ou un événement traumatisant.",
      en: "Supporting people after a critical incident or traumatic event.",
      it: "Sostenere le persone dopo un incidente critico o un evento traumatico.",
    },
    summary: {
      fr: "Resilience@Work propose un soutien psychologique par entretiens individuels et débriefing collectif.",
      en: "Resilience@Work provides psychological support through individual interviews and collective debriefing.",
      it: "Resilience@Work offre un sostegno psicologico attraverso colloqui individuali e debriefing collettivo.",
    },
    introduction: {
      fr: [
        "Après un incident critique ou un événement traumatisant, un espace d’écoute confidentiel aide les personnes et les équipes à mettre des mots sur ce qu’elles ont vécu.",
        "L’intervention se limite à ce qui est utile : des entretiens individuels et, lorsque le contexte s’y prête, un débriefing collectif.",
      ],
      en: [
        "After a critical incident or traumatic event, a confidential space to be heard helps people and teams put words to what they have experienced.",
        "The intervention stays focused on what is useful: individual interviews and, when the context allows, a collective debriefing.",
      ],
      it: [
        "Dopo un incidente critico o un evento traumatico, uno spazio di ascolto confidenziale aiuta persone e team a mettere in parole ciò che hanno vissuto.",
        "L’intervento si limita a ciò che è utile: colloqui individuali e, quando il contesto lo consente, un debriefing collettivo.",
      ],
    },
    challengesTitle: {
      fr: "Dans quelles situations",
      en: "In which situations",
      it: "In quali situazioni",
    },
    challenges: [
      feature(
        "critical-event",
        "LifeBuoy",
        "Après un incident critique",
        "After a critical incident",
        "Dopo un incidente critico",
        "Intervenir lorsque l’événement a fortement marqué une personne ou une équipe.",
        "Intervene when the event has strongly affected a person or a team.",
        "Intervenire quando l’evento ha fortemente segnato una persona o un team."
      ),
      feature(
        "traumatic-event",
        "HeartPulse",
        "Après un événement traumatisant",
        "After a traumatic event",
        "Dopo un evento traumatico",
        "Proposer un cadre d’écoute lorsque le vécu dépasse les ressources habituelles.",
        "Offer a space to be heard when the experience exceeds usual resources.",
        "Offrire un quadro di ascolto quando l’esperienza supera le risorse abituali."
      ),
    ],
    servicesTitle: {
      fr: "Comment nous intervenons",
      en: "How we intervene",
      it: "Come interveniamo",
    },
    services: [
      feature(
        "individual",
        "HeartHandshake",
        "Entretiens individuels",
        "Individual interviews",
        "Colloqui individuali",
        "Un espace confidentiel pour la personne directement concernée.",
        "A confidential space for the person directly affected.",
        "Uno spazio confidenziale per la persona direttamente coinvolta."
      ),
      feature(
        "collective",
        "Users",
        "Débriefing collectif",
        "Collective debriefing",
        "Debriefing collettivo",
        "Un temps d’échange encadré pour le groupe exposé à l’événement.",
        "A facilitated exchange for the group exposed to the event.",
        "Un momento di confronto guidato per il gruppo esposto all’evento."
      ),
    ],
    outcomesTitle: {
      fr: "Ce que cela permet",
      en: "What this makes possible",
      it: "Cosa rende possibile",
    },
    outcomes: [
      feature(
        "listen",
        "HeartPulse",
        "Être entendu",
        "Be heard",
        "Essere ascoltati",
        "Mettre des mots sur l’événement dans un cadre professionnel.",
        "Put words to the event in a professional setting.",
        "Mettere in parole l’evento in un quadro professionale."
      ),
      feature(
        "recover",
        "ShieldCheck",
        "Retrouver des repères",
        "Regain reference points",
        "Ritrovare punti di riferimento",
        "Soutenir une reprise plus lisible pour la personne et pour l’équipe.",
        "Support a clearer recovery for the person and the team.",
        "Sostenere una ripresa più leggibile per la persona e per il team."
      ),
    ],
    process: sharedProcess,
    audiences: [
      audienceIdMap.hrDirectors,
      audienceIdMap.internationalManagers,
      audienceIdMap.ngos,
      audienceIdMap.internationalOrganisations,
    ],
    delivery: sharedDelivery,
    image: assets.expertise.psychosocialPrevention,
    relatedExpertiseIds: ["crisisManagement", "training"],
    finalCta: {
      title: expertiseLandingPage.finalCta.title,
      description: expertiseLandingPage.finalCta.description,
      primaryCta: globalCtas.contactUs,
      secondaryCta: globalCtas.whatsapp,
    },
    seo: {
      title: {
        fr: "Support psychologique post-incident | Resilience@Work",
        en: "Post-incident psychological support | Resilience@Work",
        it: "Supporto psicologico post-incidente | Resilience@Work",
      },
      description: {
        fr: "Entretiens individuels et débriefing collectif après un incident critique ou un événement traumatisant.",
        en: "Individual interviews and collective debriefing after a critical incident or traumatic event.",
        it: "Colloqui individuali e debriefing collettivo dopo un incidente critico o un evento traumatico.",
      },
      canonicalRoute: "psychosocialPrevention",
      ogImage: assets.expertise.psychosocialPrevention.src,
    },
  },
  {
    id: "crisisManagement",
    slug: "crisis-management",
    route: "crisisManagement",
    icon: "ShieldAlert",
    eyebrow: {
      fr: "Crise et mobilité internationale",
      en: "Crisis and international mobility",
      it: "Crisi e mobilità internazionale",
    },
    title: {
      fr: "Gérer une situation de crise dans un contexte de mobilité internationale.",
      en: "Managing a crisis situation in an international mobility context.",
      it: "Gestire una situazione di crisi in un contesto di mobilità internazionale.",
    },
    summary: {
      fr: "Resilience@Work appuie les organisations confrontées à une crise en environnement international et multiculturel.",
      en: "Resilience@Work supports organisations facing a crisis in an international and multicultural environment.",
      it: "Resilience@Work sostiene le organizzazioni confrontate con una crisi in un ambiente internazionale e multiculturale.",
    },
    introduction: {
      fr: [
        "En mobilité internationale, une crise se joue souvent loin des repères habituels, dans un environnement multiculturel et sous une forte pression.",
        "L’accompagnement vise à aider l’organisation à structurer sa réponse et à soutenir les personnes concernées.",
      ],
      en: [
        "In international mobility, a crisis often unfolds far from usual reference points, in a multicultural environment and under significant pressure.",
        "The support aims to help the organisation structure its response and support the people involved.",
      ],
      it: [
        "Nella mobilità internazionale, una crisi si svolge spesso lontano dai punti di riferimento abituali, in un ambiente multiculturale e sotto forte pressione.",
        "L’accompagnamento mira ad aiutare l’organizzazione a strutturare la risposta e a sostenere le persone coinvolte.",
      ],
    },
    challengesTitle: {
      fr: "Dans quelles situations",
      en: "In which situations",
      it: "In quali situazioni",
    },
    challenges: [
      feature(
        "international-crisis",
        "Globe2",
        "Crise en contexte international",
        "Crisis in an international context",
        "Crisi in un contesto internazionale",
        "Intervenir lorsque la situation survient en mission, en expatriation ou à distance.",
        "Intervene when the situation arises on assignment, during expatriation or remotely.",
        "Intervenire quando la situazione sorge in missione, in espatrio o a distanza."
      ),
      feature(
        "multicultural",
        "Users",
        "Environnement multiculturel",
        "Multicultural environment",
        "Ambiente multiculturale",
        "Tenir compte des langues, des codes et des dynamiques d’équipes internationales.",
        "Take into account languages, codes and the dynamics of international teams.",
        "Tenere conto delle lingue, dei codici e delle dinamiche dei team internazionali."
      ),
    ],
    servicesTitle: {
      fr: "Comment nous intervenons",
      en: "How we intervene",
      it: "Come interveniamo",
    },
    services: [
      feature(
        "crisis-support",
        "ShieldAlert",
        "Appui à la gestion de crise",
        "Crisis management support",
        "Sostegno alla gestione della crisi",
        "Aider à clarifier la réponse humaine et organisationnelle.",
        "Help clarify the human and organisational response.",
        "Aiutare a chiarire la risposta umana e organizzativa."
      ),
      feature(
        "deployed-teams",
        "Globe2",
        "Soutien aux équipes déployées",
        "Support for deployed teams",
        "Sostegno ai team dispiegati",
        "Accompagner les managers et les collaborateurs concernés sur le terrain ou à distance.",
        "Support the managers and employees involved, on site or remotely.",
        "Accompagnare manager e collaboratori coinvolti sul campo o a distanza."
      ),
    ],
    outcomesTitle: {
      fr: "Ce que cela permet",
      en: "What this makes possible",
      it: "Cosa rende possibile",
    },
    outcomes: [
      feature(
        "structure",
        "ShieldAlert",
        "Structurer la réponse",
        "Structure the response",
        "Strutturare la risposta",
        "Rendre la conduite de la crise plus lisible pour l’organisation.",
        "Make the handling of the crisis clearer for the organisation.",
        "Rendere la gestione della crisi più leggibile per l’organizzazione."
      ),
      feature(
        "support-people",
        "LifeBuoy",
        "Soutenir les personnes",
        "Support the people involved",
        "Sostenere le persone",
        "Ne pas laisser les équipes seules face à la situation.",
        "Do not leave teams alone in facing the situation.",
        "Non lasciare i team soli di fronte alla situazione."
      ),
    ],
    process: sharedProcess,
    audiences: [
      audienceIdMap.hrDirectors,
      audienceIdMap.internationalManagers,
      audienceIdMap.expatriates,
      audienceIdMap.internationalOrganisations,
    ],
    delivery: sharedDelivery,
    image: assets.expertise.crisisManagement,
    relatedExpertiseIds: ["psychosocialPrevention", "training"],
    finalCta: {
      title: expertiseLandingPage.finalCta.title,
      description: expertiseLandingPage.finalCta.description,
      primaryCta: globalCtas.contactUs,
      secondaryCta: globalCtas.whatsapp,
    },
    seo: {
      title: {
        fr: "Crise et mobilité internationale | Resilience@Work",
        en: "Crisis and international mobility | Resilience@Work",
        it: "Crisi e mobilità internazionale | Resilience@Work",
      },
      description: {
        fr: "Management de situation de crise dans le contexte de la mobilité internationale et des environnements multiculturels.",
        en: "Crisis situation management in the context of international mobility and multicultural environments.",
        it: "Gestione di situazioni di crisi nel contesto della mobilità internazionale e degli ambienti multiculturali.",
      },
      canonicalRoute: "crisisManagement",
      ogImage: assets.expertise.crisisManagement.src,
    },
  },
] as const;

export const trainingPageContent = {
  eyebrow: {
    fr: "Formations et workshops",
    en: "Training and workshops",
    it: "Formazioni e workshop",
  } satisfies Record<Locale, string>,
  title: {
    fr: "Former au bien-être et à la santé mentale au travail.",
    en: "Training on workplace well-being and mental health.",
    it: "Formare su benessere e salute mentale al lavoro.",
  } satisfies Record<Locale, string>,
  summary: {
    fr: "Des formations et workshops sur les questions de bien-être et de santé mentale au travail.",
    en: "Training and workshops on workplace well-being and mental health.",
    it: "Formazioni e workshop su benessere e salute mentale al lavoro.",
  } satisfies Record<Locale, string>,
  introduction: {
    fr: [
      "Les formations et workshops sont concrets, adaptés au public : managers, équipes ou responsables RH.",
      "Les thèmes portent sur le bien-être et la santé mentale. Le format précis se discute selon votre contexte.",
    ],
    en: [
      "Training and workshops are practical and adapted to the audience: managers, teams or HR leaders.",
      "Themes cover well-being and mental health. The exact format can be discussed according to your context.",
    ],
    it: [
      "Le formazioni e i workshop sono concreti, adattati al pubblico: manager, team o responsabili HR.",
      "I temi riguardano il benessere e la salute mentale. Il formato preciso si discute in base al vostro contesto.",
    ],
  } satisfies Record<Locale, readonly string[]>,
  deliveryBlocks: [
    {
      id: "formats",
      title: {
        fr: "Formats",
        en: "Formats",
        it: "Formati",
      },
      description: {
        fr: "Formation · Workshop · Présentiel ou distanciel",
        en: "Training · Workshop · On-site or remote",
        it: "Formazione · Workshop · In presenza o a distanza",
      },
    },
    {
      id: "audiences",
      title: {
        fr: "Publics",
        en: "Audiences",
        it: "Pubblici",
      },
      description: {
        fr: "Managers · Responsables RH · Équipes",
        en: "Managers · HR leaders · Teams",
        it: "Manager · Responsabili HR · Team",
      },
    },
  ] as const,
  finalCta: {
    title: expertiseLandingPage.finalCta.title,
    description: expertiseLandingPage.finalCta.description,
    primaryCta: globalCtas.contactUs,
    secondaryCta: globalCtas.whatsapp,
  },
  seo: {
    title: {
      fr: "Formations et workshops | Resilience@Work",
      en: "Training and workshops | Resilience@Work",
      it: "Formazioni e workshop | Resilience@Work",
    },
    description: {
      fr: "Formations et workshops Resilience@Work sur le bien-être et la santé mentale au travail.",
      en: "Resilience@Work training and workshops on workplace well-being and mental health.",
      it: "Formazioni e workshop Resilience@Work su benessere e salute mentale al lavoro.",
    },
    canonicalRoute: "training",
    ogImage: assets.expertise.training.src,
  },
} as const;

export const expertiseUiCopy = {
  introductionEyebrow: { fr: "En pratique", en: "In practice", it: "In pratica" },
  challengesEyebrow: { fr: "Situations", en: "Situations", it: "Situazioni" },
  servicesEyebrow: { fr: "Intervention", en: "Intervention", it: "Intervento" },
  outcomesEyebrow: { fr: "À quoi cela sert", en: "What it is for", it: "A cosa serve" },
  processEyebrow: { fr: "Notre démarche", en: "Our approach", it: "Il nostro approccio" },
  processTitle: {
    fr: "Une intervention simple et adaptée",
    en: "A simple, tailored intervention",
    it: "Un intervento semplice e adattato",
  },
  audiencesEyebrow: { fr: "Publics concernés", en: "Who this is for", it: "A chi si rivolge" },
  audiencesTitle: {
    fr: "Des interventions pensées pour les organisations et leurs équipes",
    en: "Interventions designed for organisations and their teams",
    it: "Interventi pensati per le organizzazioni e i loro team",
  },
  deliveryEyebrow: { fr: "Formats d'intervention", en: "How support is delivered", it: "Modalità di intervento" },
  deliveryTitle: {
    fr: "Des modalités adaptées au contexte de chaque organisation",
    en: "Delivery formats adapted to each organisation's context",
    it: "Modalità adattate al contesto di ciascuna organizzazione",
  },
  deliveryFormatsTitle: { fr: "Formats d'intervention", en: "Delivery formats", it: "Formati di intervento" },
  deliveryLanguagesTitle: { fr: "Langues de prestation", en: "Service languages", it: "Lingue di erogazione" },
  deliveryRegionsTitle: { fr: "Zones d'intervention", en: "Regions", it: "Aree di intervento" },
  relatedEyebrow: { fr: "Autres activités", en: "Other activities", it: "Altre attività" },
  relatedTitle: {
    fr: "Voir aussi",
    en: "See also",
    it: "Vedi anche",
  },
  learnMore: { fr: "En savoir plus", en: "Learn more", it: "Scopri di più" },
  getInTouch: { fr: "Prendre contact", en: "Get in touch", it: "Contattaci" },
  discussNeeds: { fr: "Échanger sur vos besoins", en: "Discuss your needs", it: "Parliamo delle vostre esigenze" },
  exploreApproach: {
    fr: "Découvrir notre démarche",
    en: "Explore our approach",
    it: "Scopri il nostro approccio",
  },
  breadcrumbHome: { fr: "Accueil", en: "Home", it: "Home" },
  breadcrumbExpertise: { fr: "Activités", en: "Activities", it: "Attività" },
  breadcrumbAria: { fr: "Fil d'Ariane", en: "Breadcrumb", it: "Percorso di navigazione" },
  landingIntroEyebrow: { fr: "En bref", en: "In brief", it: "In breve" },
  landingIntroTitle: {
    fr: "Trois activités, sans détour",
    en: "Three activities, without detours",
    it: "Tre attività, senza giri di parole",
  },
  landingGridEyebrow: { fr: "Nos activités", en: "Our activities", it: "Le nostre attività" },
  landingGridTitle: {
    fr: "Ce que Resilience@Work propose",
    en: "What Resilience@Work offers",
    it: "Cosa propone Resilience@Work",
  },
  landingInternationalEyebrow: {
    fr: "Présence internationale",
    en: "International reach",
    it: "Presenza internazionale",
  },
  landingInternationalTitle: {
    fr: "Afrique, Europe et Moyen-Orient",
    en: "Africa, Europe and the Middle East",
    it: "Africa, Europa e Medio Oriente",
  },
  landingInternationalDescription: {
    fr: "Les interventions se font en présentiel ou à distance, selon le contexte.",
    en: "Interventions take place on-site or remotely, depending on the context.",
    it: "Gli interventi si svolgono in presenza o a distanza, a seconda del contesto.",
  },
} as const satisfies Record<string, Record<"fr" | "en" | "it", string>>;

export const expertiseSlugParams = expertiseDetailPages.map((page) => ({
  slug: page.slug,
}));

export function getExpertiseDetailPageBySlug(slug: string) {
  return expertiseDetailPages.find((page) => page.slug === slug);
}

export function getExpertiseItemById(id: ExpertiseId) {
  return expertiseItems.find((item) => item.id === id);
}
