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
      fr: "Nos expertises",
      en: "Our expertise",
      it: "Le nostre competenze",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Prévenir, accompagner et renforcer la résilience des organisations.",
      en: "Preventing, supporting and strengthening organisational resilience.",
      it: "Prevenire, accompagnare e rafforzare la resilienza delle organizzazioni.",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Resilience@Work intervient auprès des organisations, des managers et des équipes confrontés à des environnements professionnels exigeants, multiculturels ou internationaux.",
      en: "Resilience@Work supports organisations, managers and teams navigating demanding, multicultural or international professional environments.",
      it: "Resilience@Work interviene presso organizzazioni, manager e team che operano in ambienti professionali esigenti, multiculturali o internazionali.",
    } satisfies Record<Locale, string>,
    supportingText: {
      fr: "Nos interventions visent à prévenir les risques psychosociaux, soutenir les collaborateurs, accompagner les périodes de transition et renforcer durablement les capacités d’adaptation.",
      en: "Our interventions aim to prevent psychosocial risks, support employees, guide transition periods and sustainably strengthen adaptability.",
      it: "I nostri interventi mirano a prevenire i rischi psicosociali, sostenere i collaboratori, accompagnare i periodi di transizione e rafforzare in modo duraturo le capacità di adattamento.",
    } satisfies Record<Locale, string>,
  },
  whyAct: {
    eyebrow: {
      fr: "Pourquoi agir",
      en: "Why take action",
      it: "Perché agire",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Préserver les équipes dans les environnements les plus exigeants",
      en: "Supporting teams in the most demanding environments",
      it: "Tutelare i team negli ambienti più esigenti",
    } satisfies Record<Locale, string>,
    paragraphs: {
      fr: [
        "Les organisations peuvent être confrontées à des contextes de forte pression, à des situations critiques, à des dynamiques interculturelles complexes ou aux défis liés à la mobilité internationale.",
        "Une approche structurée permet de prévenir les risques, de soutenir les collaborateurs et de renforcer la capacité collective à traverser les périodes exigeantes.",
      ],
      en: [
        "Organisations may face high-pressure contexts, critical situations, complex cross-cultural dynamics or challenges related to international mobility.",
        "A structured approach helps prevent risks, support employees and strengthen the collective ability to navigate demanding periods.",
      ],
      it: [
        "Le organizzazioni possono trovarsi ad affrontare contesti di forte pressione, situazioni critiche, dinamiche interculturali complesse o le sfide legate alla mobilità internazionale.",
        "Un approccio strutturato consente di prevenire i rischi, sostenere i collaboratori e rafforzare la capacità collettiva di attraversare i periodi più esigenti.",
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
      fr: "Des interventions adaptées aux réalités du terrain",
      en: "Interventions adapted to real-world conditions",
      it: "Interventi adattati alle realtà del terreno",
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
      fr: "Échangeons sur les besoins de votre organisation",
      en: "Let’s discuss your organisation’s needs",
      it: "Parliamo delle esigenze della vostra organizzazione",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Vous souhaitez prévenir les risques psychosociaux, soutenir une équipe internationale, accompagner une situation sensible ou construire une formation adaptée à votre contexte ?",
      en: "Would you like to prevent psychosocial risks, support an international team, guide a sensitive situation or design training adapted to your context?",
      it: "Desiderate prevenire i rischi psicosociali, sostenere un team internazionale, accompagnare una situazione delicata o costruire una formazione adatta al vostro contesto?",
    } satisfies Record<Locale, string>,
    note: {
      fr: "Échangeons afin d’identifier la forme d’accompagnement la plus pertinente.",
      en: "Let’s discuss the most appropriate form of support.",
      it: "Confrontiamoci per individuare la forma di accompagnamento più pertinente.",
    } satisfies Record<Locale, string>,
    primaryCta: globalCtas.contactUs,
    secondaryCta: globalCtas.whatsapp,
  },
} as const;

export const expertiseItems: readonly ExpertiseItem[] = [
  {
    id: "psychosocialPrevention",
    slug: "psychosocial-prevention",
    icon: "HeartPulse",
    route: "psychosocialPrevention",
    shortTitle: {
      fr: "Prévention psychosociale",
      en: "Psychosocial prevention",
      it: "Prevenzione psicosociale",
    },
    title: {
      fr: "Prévention psychosociale et bien-être au travail",
      en: "Psychosocial prevention and workplace well-being",
      it: "Prevenzione psicosociale e benessere al lavoro",
    },
    summary: {
      fr: "Identifier les facteurs de risque, prévenir l’épuisement et soutenir durablement la santé mentale au travail.",
      en: "Identify risk factors, prevent exhaustion and sustainably support workplace mental health.",
      it: "Identificare i fattori di rischio, prevenire l’esaurimento e sostenere in modo duraturo la salute mentale al lavoro.",
    },
    description: {
      fr: [
        "Resilience@Work aide les organisations à identifier, prévenir et mieux gérer les risques psychosociaux.",
        "Les interventions sont adaptées aux réalités humaines, organisationnelles et interculturelles propres à chaque environnement professionnel.",
      ],
      en: [
        "Resilience@Work helps organisations identify, prevent and better manage psychosocial risks.",
        "Interventions are tailored to the human, organisational and cross-cultural realities of each professional environment.",
      ],
      it: [
        "Resilience@Work aiuta le organizzazioni a identificare, prevenire e gestire meglio i rischi psicosociali.",
        "Gli interventi sono adattati alle realtà umane, organizzative e interculturali proprie di ciascun ambiente professionale.",
      ],
    },
    services: {
      fr: [
        "Évaluation des facteurs de risques psychosociaux",
        "Programmes de prévention et d’intervention",
        "Accompagnement des équipes multiculturelles",
        "Soutien individuel et collectif",
        "Prévention du stress et du burnout",
        "Équilibre entre vie professionnelle et vie personnelle",
      ],
      en: [
        "Psychosocial risk factor assessment",
        "Prevention and intervention programmes",
        "Support for multicultural teams",
        "Individual and collective support",
        "Stress and burnout prevention",
        "Work-life balance",
      ],
      it: [
        "Valutazione dei fattori di rischio psicosociale",
        "Programmi di prevenzione e intervento",
        "Accompagnamento dei team multiculturali",
        "Sostegno individuale e collettivo",
        "Prevenzione dello stress e del burnout",
        "Equilibrio tra vita professionale e vita personale",
      ],
    },
    outcomes: {
      fr: [
        "Préserver la santé mentale au travail",
        "Réduire le stress et l’épuisement",
        "Renforcer la résilience",
        "Fournir des outils concrets",
      ],
      en: [
        "Protect workplace mental health",
        "Reduce stress and exhaustion",
        "Strengthen resilience",
        "Provide practical tools",
      ],
      it: [
        "Tutelare la salute mentale al lavoro",
        "Ridurre lo stress e l’esaurimento",
        "Rafforzare la resilienza",
        "Fornire strumenti concreti",
      ],
    },
    image: assets.expertise.psychosocialPrevention,
  },
  {
    id: "internationalMobility",
    slug: "international-mobility",
    icon: "Globe2",
    route: "internationalMobility",
    shortTitle: {
      fr: "Mobilité internationale",
      en: "International mobility",
      it: "Mobilità internazionale",
    },
    title: {
      fr: "Accompagnement en mobilité internationale",
      en: "International mobility support",
      it: "Accompagnamento in mobilità internazionale",
    },
    summary: {
      fr: "Accompagner les collaborateurs expatriés dans leur adaptation culturelle et leur résilience.",
      en: "Support expatriate employees in their cultural adjustment and resilience.",
      it: "Accompagnare i collaboratori espatriati nel loro adattamento culturale e nella loro resilienza.",
    },
    description: {
      fr: [
        "Les missions internationales peuvent confronter les collaborateurs à l’isolement, à une forte charge émotionnelle et à des défis d’adaptation culturelle.",
        "Resilience@Work propose un accompagnement confidentiel avant, pendant et après l’expatriation.",
      ],
      en: [
        "International assignments can expose employees to isolation, emotional pressure and cultural adjustment challenges.",
        "Resilience@Work provides confidential support before, during and after expatriation.",
      ],
      it: [
        "Le missioni internazionali possono esporre i collaboratori all’isolamento, a un forte carico emotivo e a sfide di adattamento culturale.",
        "Resilience@Work propone un accompagnamento confidenziale prima, durante e dopo l’espatrio.",
      ],
    },
    services: {
      fr: [
        "Gestion du stress et de l’isolement",
        "Adaptation culturelle",
        "Développement de la résilience",
        "Soutien psychologique confidentiel",
        "Préparation au départ",
        "Accompagnement au retour d’expatriation",
      ],
      en: [
        "Stress and isolation management",
        "Cultural adjustment",
        "Resilience development",
        "Confidential psychological support",
        "Pre-departure preparation",
        "Support upon returning from expatriation",
      ],
      it: [
        "Gestione dello stress e dell’isolamento",
        "Adattamento culturale",
        "Sviluppo della resilienza",
        "Sostegno psicologico confidenziale",
        "Preparazione alla partenza",
        "Accompagnamento al rientro dall’espatrio",
      ],
    },
    outcomes: {
      fr: [
        "Faciliter l’adaptation culturelle",
        "Réduire l’isolement",
        "Soutenir l’équilibre émotionnel",
        "Sécuriser les périodes de transition",
      ],
      en: [
        "Facilitate cultural adjustment",
        "Reduce isolation",
        "Support emotional well-being",
        "Navigate transition periods more effectively",
      ],
      it: [
        "Facilitare l’adattamento culturale",
        "Ridurre l’isolamento",
        "Sostenere l’equilibrio emotivo",
        "Mettere in sicurezza i periodi di transizione",
      ],
    },
    image: assets.expertise.internationalMobility,
  },
  {
    id: "crisisManagement",
    slug: "crisis-management",
    icon: "ShieldAlert",
    route: "crisisManagement",
    shortTitle: {
      fr: "Gestion de crise",
      en: "Crisis management",
      it: "Gestione delle crisi",
    },
    title: {
      fr: "Management des situations de crise",
      en: "Crisis situation management",
      it: "Gestione delle situazioni di crisi",
    },
    summary: {
      fr: "Soutenir les équipes et les managers lorsqu’ils sont confrontés à des événements critiques ou à des situations de tension.",
      en: "Support teams and managers facing critical events or high-pressure situations.",
      it: "Sostenere i team e i manager quando affrontano eventi critici o situazioni di tensione.",
    },
    description: {
      fr: [
        "Lorsqu’une organisation traverse une situation critique, les équipes ont besoin de repères clairs, d’un espace de soutien et d’outils adaptés.",
        "Resilience@Work intervient pour accompagner les collaborateurs et les managers avant, pendant ou après les périodes de tension.",
      ],
      en: [
        "When an organisation faces a critical situation, teams need clear guidance, a supportive environment and practical tools.",
        "Resilience@Work supports employees and managers before, during or after periods of heightened pressure.",
      ],
      it: [
        "Quando un’organizzazione affronta una situazione critica, i team hanno bisogno di punti di riferimento chiari, di uno spazio di sostegno e di strumenti adeguati.",
        "Resilience@Work interviene per accompagnare collaboratori e manager prima, durante o dopo i periodi di tensione.",
      ],
    },
    services: {
      fr: [
        "Soutien aux équipes confrontées à des événements critiques",
        "Débriefings psychologiques post-incident",
        "Accompagnement des managers dans un environnement sous pression",
        "Protocoles de gestion émotionnelle en situation d’urgence",
      ],
      en: [
        "Support for teams facing critical events",
        "Post-incident psychological debriefings",
        "Support for managers in a high-pressure environment",
        "Emotional management protocols for emergency situations",
      ],
      it: [
        "Sostegno ai team che affrontano eventi critici",
        "Debriefing psicologici post-incidente",
        "Accompagnamento dei manager in un ambiente sotto pressione",
        "Protocolli di gestione emotiva in situazioni di emergenza",
      ],
    },
    outcomes: {
      fr: [
        "Structurer la réponse humaine à une crise",
        "Soutenir les équipes après un incident",
        "Accompagner les managers",
        "Favoriser une reprise plus sereine",
      ],
      en: [
        "Structure the human response to a crisis",
        "Support teams after an incident",
        "Guide managers",
        "Enable a more stable recovery",
      ],
      it: [
        "Strutturare la risposta umana a una crisi",
        "Sostenere i team dopo un incidente",
        "Accompagnare i manager",
        "Favorire una ripresa più serena",
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
      fr: "Formations",
      en: "Training",
      it: "Formazioni",
    },
    title: {
      fr: "Formations et webinaires professionnels",
      en: "Professional training and webinars",
      it: "Formazioni e webinar professionali",
    },
    summary: {
      fr: "Transmettre des outils concrets pour prévenir les risques, soutenir les équipes et renforcer la résilience.",
      en: "Provide practical tools to prevent risks, support teams and strengthen resilience.",
      it: "Trasmettere strumenti concreti per prevenire i rischi, sostenere i team e rafforzare la resilienza.",
    },
    description: {
      fr: [
        "Resilience@Work propose des formations et des webinaires adaptés aux besoins des organisations, des managers et des équipes internationales.",
        "Les contenus privilégient des outils pratiques, directement mobilisables dans les environnements professionnels.",
      ],
      en: [
        "Resilience@Work provides training sessions and webinars tailored to the needs of organisations, managers and international teams.",
        "The content focuses on practical tools that can be directly applied in professional environments.",
      ],
      it: [
        "Resilience@Work propone formazioni e webinar adattati alle esigenze di organizzazioni, manager e team internazionali.",
        "I contenuti privilegiano strumenti pratici, direttamente utilizzabili negli ambienti professionali.",
      ],
    },
    services: {
      fr: [
        "Leadership en contexte international",
        "Prévention du burnout",
        "Prévention de la fatigue compassionnelle",
        "Communication en situation de tension",
        "Gestion du stress",
        "Management multiculturel",
        "Soutien en mobilité internationale",
        "Mental Health First Aid",
        "Équilibre entre vie professionnelle et vie personnelle",
      ],
      en: [
        "Leadership in international contexts",
        "Burnout prevention",
        "Compassion fatigue prevention",
        "Communication under pressure",
        "Stress management",
        "Cross-cultural management",
        "International mobility support",
        "Mental Health First Aid",
        "Work-life balance",
      ],
      it: [
        "Leadership in contesti internazionali",
        "Prevenzione del burnout",
        "Prevenzione della fatica da compassione",
        "Comunicazione in situazioni di tensione",
        "Gestione dello stress",
        "Management multiculturale",
        "Sostegno in mobilità internazionale",
        "Mental Health First Aid",
        "Equilibrio tra vita professionale e vita personale",
      ],
    },
    outcomes: {
      fr: [
        "Développer des compétences pratiques",
        "Renforcer la prévention",
        "Améliorer la communication",
        "Soutenir les managers et les équipes",
      ],
      en: [
        "Develop practical skills",
        "Strengthen prevention",
        "Improve communication",
        "Support managers and teams",
      ],
      it: [
        "Sviluppare competenze pratiche",
        "Rafforzare la prevenzione",
        "Migliorare la comunicazione",
        "Sostenere i manager e i team",
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
    slug: "psychosocial-prevention",
    route: "psychosocialPrevention",
    icon: "HeartPulse",
    eyebrow: {
      fr: "Prévention psychosociale",
      en: "Psychosocial prevention",
      it: "Prevenzione psicosociale",
    },
    title: {
      fr: "Préserver la santé mentale et renforcer durablement le bien-être au travail.",
      en: "Protecting mental health and sustainably strengthening workplace well-being.",
      it: "Tutelare la salute mentale e rafforzare in modo duraturo il benessere al lavoro.",
    },
    summary: {
      fr: "Resilience@Work accompagne les organisations dans l’identification, la prévention et la gestion des risques psychosociaux, avec une approche humaine, confidentielle et adaptée aux réalités du terrain.",
      en: "Resilience@Work supports organisations in identifying, preventing and managing psychosocial risks through a human, confidential approach tailored to real-world conditions.",
      it: "Resilience@Work accompagna le organizzazioni nell’identificazione, nella prevenzione e nella gestione dei rischi psicosociali, con un approccio umano, confidenziale e adattato alle realtà del terreno.",
    },
    introduction: {
      fr: [
        "Les environnements professionnels exigeants peuvent exposer les collaborateurs à une charge émotionnelle importante, au stress ou à l’épuisement.",
        "Une démarche de prévention structurée permet d’identifier les facteurs de risque, d’accompagner les équipes et de mettre en place des outils concrets adaptés au contexte de l’organisation.",
      ],
      en: [
        "Demanding professional environments can expose employees to significant emotional pressure, stress or exhaustion.",
        "A structured prevention approach helps identify risk factors, support teams and implement practical tools adapted to the organisation’s context.",
      ],
      it: [
        "Gli ambienti professionali esigenti possono esporre i collaboratori a un carico emotivo importante, allo stress o all’esaurimento.",
        "Un percorso di prevenzione strutturato consente di identificare i fattori di rischio, accompagnare i team e mettere in atto strumenti concreti adattati al contesto dell’organizzazione.",
      ],
    },
    challengesTitle: {
      fr: "Enjeux traités",
      en: "Challenges addressed",
      it: "Sfide affrontate",
    },
    challenges: [
      feature(
        "risk-factors",
        "HeartPulse",
        "Identifier les facteurs de risque",
        "Identify risk factors",
        "Identificare i fattori di rischio",
        "Repérer les dynamiques susceptibles d’affecter l’équilibre et la santé mentale au travail.",
        "Recognise dynamics that may affect workplace well-being and mental health.",
        "Individuare le dinamiche che possono incidere sull’equilibrio e sulla salute mentale al lavoro."
      ),
      feature(
        "prevent-burnout",
        "ShieldCheck",
        "Prévenir le stress et l’épuisement",
        "Prevent stress and exhaustion",
        "Prevenire lo stress e l’esaurimento",
        "Mettre en place des repères et des actions adaptées aux réalités de l’organisation.",
        "Implement reference points and actions adapted to the organisation’s realities.",
        "Mettere in atto punti di riferimento e azioni adattati alle realtà dell’organizzazione."
      ),
      feature(
        "support-teams",
        "Users",
        "Soutenir les équipes",
        "Support teams",
        "Sostenere i team",
        "Créer des espaces d’accompagnement individuel ou collectif lorsque le contexte l’exige.",
        "Create individual or collective support spaces when required by the context.",
        "Creare spazi di accompagnamento individuale o collettivo quando il contesto lo richiede."
      ),
      feature(
        "manager-practices",
        "Activity",
        "Renforcer les pratiques managériales",
        "Strengthen managerial practices",
        "Rafforzare le pratiche manageriali",
        "Aider les managers à mieux comprendre et prévenir les situations sensibles.",
        "Help managers better understand and prevent sensitive situations.",
        "Aiutare i manager a comprendere meglio e prevenire le situazioni delicate."
      ),
    ],
    servicesTitle: {
      fr: "Services proposés",
      en: "Services offered",
      it: "Servizi proposti",
    },
    services: [
      feature(
        "assessment",
        "HeartPulse",
        "Évaluation des facteurs de risques psychosociaux",
        "Psychosocial risk factor assessment",
        "Valutazione dei fattori di rischio psicosociale",
        "Identifier les signaux de vigilance et les facteurs de risque propres au contexte.",
        "Identify warning signs and risk factors specific to the context.",
        "Identificare i segnali di attenzione e i fattori di rischio propri del contesto."
      ),
      feature(
        "programmes",
        "ShieldCheck",
        "Programmes de prévention et d’intervention",
        "Prevention and intervention programmes",
        "Programmi di prevenzione e intervento",
        "Structurer des actions adaptées aux besoins des équipes et de l’organisation.",
        "Structure interventions adapted to team and organisational needs.",
        "Strutturare azioni adattate alle esigenze dei team e dell’organizzazione."
      ),
      feature(
        "multicultural-support",
        "Users",
        "Accompagnement des équipes multiculturelles",
        "Support for multicultural teams",
        "Accompagnamento dei team multiculturali",
        "Ajuster la prévention aux réalités interculturelles et relationnelles.",
        "Adapt prevention to cross-cultural and relational realities.",
        "Adattare la prevenzione alle realtà interculturali e relazionali."
      ),
      feature(
        "support",
        "Scale",
        "Soutien individuel et collectif",
        "Individual and collective support",
        "Sostegno individuale e collettivo",
        "Créer un espace d’accompagnement lorsque la situation l’exige.",
        "Create a support space when the situation requires it.",
        "Creare uno spazio di accompagnamento quando la situazione lo richiede."
      ),
      feature(
        "stress-burnout",
        "Activity",
        "Prévention du stress et du burnout",
        "Stress and burnout prevention",
        "Prevenzione dello stress e del burnout",
        "Renforcer les repères utiles pour prévenir l’épuisement professionnel.",
        "Strengthen useful reference points to help prevent professional exhaustion.",
        "Rafforzare i punti di riferimento utili per prevenire l’esaurimento professionale."
      ),
      feature(
        "balance",
        "HeartHandshake",
        "Équilibre entre vie professionnelle et vie personnelle",
        "Work-life balance",
        "Equilibrio tra vita professionale e vita personale",
        "Favoriser des pratiques de travail plus durables.",
        "Support more sustainable working practices.",
        "Favorire pratiche di lavoro più sostenibili."
      ),
    ],
    outcomesTitle: {
      fr: "Résultats recherchés",
      en: "Expected outcomes",
      it: "Risultati attesi",
    },
    outcomes: [
      feature(
        "mental-health",
        "HeartPulse",
        "Préserver la santé mentale au travail",
        "Contribute to protecting workplace mental health",
        "Tutelare la salute mentale al lavoro",
        "Soutenir des environnements de travail plus stables et plus attentifs aux signaux de fragilité.",
        "Support work environments that are steadier and more attentive to signs of vulnerability.",
        "Sostenere ambienti di lavoro più stabili e più attenti ai segnali di fragilità."
      ),
      feature(
        "stress-reduction",
        "ShieldCheck",
        "Réduire le stress et l’épuisement",
        "Help reduce stress and exhaustion",
        "Ridurre lo stress e l’esaurimento",
        "Mettre en place des repères favorisant une meilleure prévention.",
        "Establish reference points that support better prevention.",
        "Mettere in atto punti di riferimento che favoriscono una migliore prevenzione."
      ),
      feature(
        "resilience",
        "Activity",
        "Renforcer la résilience",
        "Strengthen resilience",
        "Rafforzare la resilienza",
        "Développer des capacités d’adaptation individuelles et collectives.",
        "Develop individual and collective adaptability.",
        "Sviluppare capacità di adattamento individuali e collettive."
      ),
      feature(
        "tools",
        "Scale",
        "Fournir des outils concrets",
        "Provide practical tools",
        "Fornire strumenti concreti",
        "Transmettre des pratiques mobilisables dans le quotidien professionnel.",
        "Share practices that can be applied in day-to-day professional life.",
        "Trasmettere pratiche utilizzabili nella quotidianità professionale."
      ),
      feature(
        "cohesion",
        "Users",
        "Améliorer la cohésion d’équipe",
        "Support team cohesion",
        "Migliorare la coesione del team",
        "Favoriser des dynamiques collectives plus solides dans les périodes exigeantes.",
        "Support stronger collective dynamics during demanding periods.",
        "Favorire dinamiche collettive più solide nei periodi esigenti."
      ),
    ],
    process: sharedProcess,
    audiences: [audienceIdMap.hrDirectors, audienceIdMap.internationalManagers, audienceIdMap.privateEmployers, audienceIdMap.ngos],
    delivery: sharedDelivery,
    image: assets.expertise.psychosocialPrevention,
    relatedExpertiseIds: ["internationalMobility", "crisisManagement", "training"],
    finalCta: {
      title: expertiseLandingPage.finalCta.title,
      description: expertiseLandingPage.finalCta.description,
      primaryCta: globalCtas.contactUs,
      secondaryCta: globalCtas.whatsapp,
    },
    seo: {
      title: {
        fr: "Prévention psychosociale et bien-être au travail | Resilience@Work",
        en: "Psychosocial prevention and workplace well-being | Resilience@Work",
        it: "Prevenzione psicosociale e benessere al lavoro | Resilience@Work",
      },
      description: {
        fr: "Resilience@Work accompagne les organisations dans la prévention des risques psychosociaux, du stress et de l’épuisement professionnel.",
        en: "Resilience@Work supports organisations in preventing psychosocial risks, stress and professional exhaustion.",
        it: "Resilience@Work accompagna le organizzazioni nella prevenzione dei rischi psicosociali, dello stress e dell’esaurimento professionale.",
      },
      canonicalRoute: "psychosocialPrevention",
      ogImage: assets.expertise.psychosocialPrevention.src,
    },
  },
  {
    id: "internationalMobility",
    slug: "international-mobility",
    route: "internationalMobility",
    icon: "Globe2",
    eyebrow: {
      fr: "Mobilité internationale",
      en: "International mobility",
      it: "Mobilità internazionale",
    },
    title: {
      fr: "Accompagner les collaborateurs avant, pendant et après leur expérience internationale.",
      en: "Supporting employees before, during and after their international experience.",
      it: "Accompagnare i collaboratori prima, durante e dopo la loro esperienza internazionale.",
    },
    summary: {
      fr: "Resilience@Work soutient les collaborateurs expatriés et les organisations confrontés aux enjeux d’adaptation culturelle, d’isolement, de stress et de transition.",
      en: "Resilience@Work supports expatriate employees and organisations navigating cultural adjustment, isolation, stress and transition challenges.",
      it: "Resilience@Work sostiene i collaboratori espatriati e le organizzazioni che affrontano le sfide di adattamento culturale, isolamento, stress e transizione.",
    },
    introduction: {
      fr: [
        "Une mobilité internationale ne se limite pas à un changement de lieu de travail. Elle implique une adaptation professionnelle, culturelle et personnelle.",
        "La préparation au départ, le soutien pendant la mission et l’accompagnement au retour permettent de mieux prévenir les difficultés et de renforcer la résilience des collaborateurs.",
      ],
      en: [
        "International mobility is not limited to a change of workplace. It involves professional, cultural and personal adjustment.",
        "Pre-departure preparation, support during the assignment and guidance upon return help prevent difficulties and strengthen employee resilience.",
      ],
      it: [
        "Una mobilità internazionale non si limita a un cambio di luogo di lavoro. Implica un adattamento professionale, culturale e personale.",
        "La preparazione alla partenza, il sostegno durante la missione e l’accompagnamento al rientro consentono di prevenire meglio le difficoltà e di rafforzare la resilienza dei collaboratori.",
      ],
    },
    challengesTitle: {
      fr: "Enjeux traités",
      en: "Challenges addressed",
      it: "Sfide affrontate",
    },
    challenges: [
      feature(
        "departure",
        "Plane",
        "Préparer le départ",
        "Prepare for departure",
        "Preparare la partenza",
        "Anticiper les défis liés à la transition et à l’adaptation culturelle.",
        "Anticipate challenges related to transition and cultural adjustment.",
        "Anticipare le sfide legate alla transizione e all’adattamento culturale."
      ),
      feature(
        "isolation",
        "MapPin",
        "Prévenir l’isolement",
        "Prevent isolation",
        "Prevenire l’isolamento",
        "Soutenir les collaborateurs éloignés de leurs repères habituels.",
        "Support employees who are away from their usual reference points.",
        "Sostenere i collaboratori lontani dai loro punti di riferimento abituali."
      ),
      feature(
        "stress",
        "Compass",
        "Gérer le stress",
        "Manage stress",
        "Gestire lo stress",
        "Créer un espace confidentiel pour mieux traverser les périodes exigeantes.",
        "Create a confidential space to better navigate demanding periods.",
        "Creare uno spazio confidenziale per attraversare meglio i periodi esigenti."
      ),
      feature(
        "return",
        "RefreshCcw",
        "Accompagner le retour",
        "Support the return",
        "Accompagnare il rientro",
        "Soutenir la transition liée à la fin de mission et à la réintégration.",
        "Guide the transition associated with the end of an assignment and reintegration.",
        "Sostenere la transizione legata alla fine della missione e al reinserimento."
      ),
    ],
    servicesTitle: {
      fr: "Services proposés",
      en: "Services offered",
      it: "Servizi proposti",
    },
    services: [
      feature(
        "stress-isolation",
        "Globe2",
        "Gestion du stress et de l’isolement",
        "Stress and isolation management",
        "Gestione dello stress e dell’isolamento",
        "Soutenir les collaborateurs confrontés à l’éloignement et à la charge émotionnelle.",
        "Support employees facing distance and emotional pressure.",
        "Sostenere i collaboratori che affrontano la distanza e il carico emotivo."
      ),
      feature(
        "cultural-adjustment",
        "Compass",
        "Adaptation culturelle",
        "Cultural adjustment",
        "Adattamento culturale",
        "Faciliter l’intégration dans de nouveaux contextes professionnels et relationnels.",
        "Facilitate integration into new professional and relational contexts.",
        "Facilitare l’integrazione in nuovi contesti professionali e relazionali."
      ),
      feature(
        "resilience-dev",
        "MapPin",
        "Développement de la résilience",
        "Resilience development",
        "Sviluppo della resilienza",
        "Renforcer les capacités d’adaptation dans les périodes de transition.",
        "Strengthen adaptability during transition periods.",
        "Rafforzare le capacità di adattamento nei periodi di transizione."
      ),
      feature(
        "confidential-support",
        "Route",
        "Soutien psychologique confidentiel",
        "Confidential psychological support",
        "Sostegno psicologico confidenziale",
        "Créer un espace d’échange discret et adapté au contexte.",
        "Create a discreet support space adapted to the context.",
        "Creare uno spazio di scambio discreto e adattato al contesto."
      ),
      feature(
        "pre-departure",
        "Plane",
        "Préparation au départ",
        "Pre-departure preparation",
        "Preparazione alla partenza",
        "Aider à anticiper les défis personnels et professionnels à venir.",
        "Help anticipate the professional and personal challenges ahead.",
        "Aiutare ad anticipare le sfide personali e professionali che verranno."
      ),
      feature(
        "return-support",
        "RefreshCcw",
        "Accompagnement au retour d’expatriation",
        "Support upon returning from expatriation",
        "Accompagnamento al rientro dall’espatrio",
        "Accompagner la réintégration et la reprise des repères.",
        "Support reintegration and the restoration of reference points.",
        "Accompagnare il reinserimento e il recupero dei punti di riferimento."
      ),
    ],
    outcomesTitle: {
      fr: "Résultats recherchés",
      en: "Expected outcomes",
      it: "Risultati attesi",
    },
    outcomes: [
      feature(
        "cultural",
        "Globe2",
        "Faciliter l’adaptation culturelle",
        "Facilitate cultural adjustment",
        "Facilitare l’adattamento culturale",
        "Aider les collaborateurs à mieux naviguer dans un environnement nouveau.",
        "Help employees better navigate a new environment.",
        "Aiutare i collaboratori a orientarsi meglio in un ambiente nuovo."
      ),
      feature(
        "reduce-isolation",
        "MapPin",
        "Réduire l’isolement",
        "Help reduce isolation",
        "Ridurre l’isolamento",
        "Maintenir un sentiment d’appui et de continuité durant la mission.",
        "Maintain a sense of support and continuity throughout the assignment.",
        "Mantenere un senso di sostegno e di continuità durante la missione."
      ),
      feature(
        "emotional-balance",
        "Compass",
        "Soutenir l’équilibre émotionnel",
        "Support emotional balance",
        "Sostenere l’equilibrio emotivo",
        "Créer des repères utiles pour les périodes sensibles.",
        "Create useful anchors for sensitive periods.",
        "Creare punti di riferimento utili per i periodi delicati."
      ),
      feature(
        "transitions",
        "RefreshCcw",
        "Sécuriser les périodes de transition",
        "Support transition periods",
        "Mettere in sicurezza i periodi di transizione",
        "Favoriser des passages plus lisibles avant, pendant et après la mission.",
        "Support clearer transitions before, during and after the assignment.",
        "Favorire passaggi più leggibili prima, durante e dopo la missione."
      ),
      feature(
        "resilience",
        "Plane",
        "Renforcer la résilience",
        "Strengthen resilience",
        "Rafforzare la resilienza",
        "Développer des capacités d’adaptation durables.",
        "Develop long-term adaptability.",
        "Sviluppare capacità di adattamento durature."
      ),
    ],
    process: sharedProcess,
    audiences: [audienceIdMap.expatriates, audienceIdMap.internationalManagers, audienceIdMap.hrDirectors, audienceIdMap.internationalOrganisations],
    delivery: sharedDelivery,
    image: assets.expertise.internationalMobility,
    relatedExpertiseIds: ["psychosocialPrevention", "crisisManagement", "training"],
    finalCta: {
      title: expertiseLandingPage.finalCta.title,
      description: expertiseLandingPage.finalCta.description,
      primaryCta: globalCtas.contactUs,
      secondaryCta: globalCtas.whatsapp,
    },
    seo: {
      title: {
        fr: "Accompagnement en mobilité internationale | Resilience@Work",
        en: "International mobility support | Resilience@Work",
        it: "Accompagnamento in mobilità internazionale | Resilience@Work",
      },
      description: {
        fr: "Resilience@Work accompagne les expatriés et les organisations dans les enjeux d’adaptation culturelle, de stress, d’isolement et de transition.",
        en: "Resilience@Work supports expatriates and organisations navigating cultural adjustment, stress, isolation and transition challenges.",
        it: "Resilience@Work accompagna gli espatriati e le organizzazioni nelle sfide di adattamento culturale, stress, isolamento e transizione.",
      },
      canonicalRoute: "internationalMobility",
      ogImage: assets.expertise.internationalMobility.src,
    },
  },
  {
    id: "crisisManagement",
    slug: "crisis-management",
    route: "crisisManagement",
    icon: "ShieldAlert",
    eyebrow: {
      fr: "Gestion de crise",
      en: "Crisis management",
      it: "Gestione delle crisi",
    },
    title: {
      fr: "Soutenir les équipes et les managers dans les situations les plus sensibles.",
      en: "Supporting teams and managers in the most sensitive situations.",
      it: "Sostenere i team e i manager nelle situazioni più delicate.",
    },
    summary: {
      fr: "Resilience@Work accompagne les organisations confrontées à des événements critiques ou à des périodes de tension, afin de préserver les équipes et de structurer la réponse humaine.",
      en: "Resilience@Work supports organisations facing critical events or periods of heightened pressure to protect teams and structure the human response.",
      it: "Resilience@Work accompagna le organizzazioni che affrontano eventi critici o periodi di tensione, per tutelare i team e strutturare la risposta umana.",
    },
    introduction: {
      fr: [
        "Lorsqu’une organisation traverse une situation critique, les collaborateurs et les managers ont besoin de repères clairs, d’un espace de soutien et d’outils adaptés.",
        "Une intervention structurée permet d’accompagner les équipes, de faciliter la gestion émotionnelle et de favoriser une reprise plus sereine.",
      ],
      en: [
        "When an organisation faces a critical situation, employees and managers need clear guidance, a supportive space and appropriate tools.",
        "A structured intervention helps support teams, facilitate emotional management and enable a more stable recovery.",
      ],
      it: [
        "Quando un’organizzazione affronta una situazione critica, collaboratori e manager hanno bisogno di punti di riferimento chiari, di uno spazio di sostegno e di strumenti adeguati.",
        "Un intervento strutturato consente di accompagnare i team, facilitare la gestione emotiva e favorire una ripresa più serena.",
      ],
    },
    challengesTitle: {
      fr: "Enjeux traités",
      en: "Challenges addressed",
      it: "Sfide affrontate",
    },
    challenges: [
      feature(
        "support-teams",
        "LifeBuoy",
        "Soutenir les équipes",
        "Support teams",
        "Sostenere i team",
        "Créer un cadre d’accompagnement adapté aux événements critiques.",
        "Create a support framework adapted to critical events.",
        "Creare un quadro di accompagnamento adattato agli eventi critici."
      ),
      feature(
        "guide-managers",
        "ShieldAlert",
        "Accompagner les managers",
        "Guide managers",
        "Accompagnare i manager",
        "Aider les responsables à mieux gérer les périodes de tension.",
        "Help leaders better navigate periods of heightened pressure.",
        "Aiutare i responsabili a gestire meglio i periodi di tensione."
      ),
      feature(
        "debriefings",
        "MessagesSquare",
        "Structurer les débriefings",
        "Structure debriefings",
        "Strutturare i debriefing",
        "Permettre un retour encadré sur les situations difficiles.",
        "Provide a guided review of difficult situations.",
        "Consentire una rielaborazione guidata delle situazioni difficili."
      ),
      feature(
        "recovery",
        "HeartHandshake",
        "Favoriser la reprise",
        "Enable recovery",
        "Favorire la ripresa",
        "Contribuer à rétablir des repères et à renforcer la résilience collective.",
        "Help restore reference points and strengthen collective resilience.",
        "Contribuire a ristabilire punti di riferimento e a rafforzare la resilienza collettiva."
      ),
    ],
    servicesTitle: {
      fr: "Services proposés",
      en: "Services offered",
      it: "Servizi proposti",
    },
    services: [
      feature(
        "team-support",
        "LifeBuoy",
        "Soutien aux équipes confrontées à des événements critiques",
        "Support for teams facing critical events",
        "Sostegno ai team che affrontano eventi critici",
        "Créer un cadre d’écoute et d’accompagnement adapté au contexte.",
        "Create a support framework adapted to the context.",
        "Creare un quadro di ascolto e di accompagnamento adattato al contesto."
      ),
      feature(
        "debrief",
        "MessagesSquare",
        "Débriefings psychologiques post-incident",
        "Post-incident psychological debriefings",
        "Debriefing psicologici post-incidente",
        "Permettre un retour encadré sur les événements difficiles.",
        "Provide a guided review of difficult events.",
        "Consentire una rielaborazione guidata degli eventi difficili."
      ),
      feature(
        "manager-support",
        "ShieldAlert",
        "Accompagnement des managers dans un environnement sous pression",
        "Support for managers in a high-pressure environment",
        "Accompagnamento dei manager in un ambiente sotto pressione",
        "Soutenir les responsables dans la conduite humaine des périodes sensibles.",
        "Support leaders in the human management of sensitive periods.",
        "Sostenere i responsabili nella gestione umana dei periodi delicati."
      ),
      feature(
        "emergency-protocols",
        "Route",
        "Protocoles de gestion émotionnelle en situation d’urgence",
        "Emotional management protocols for emergency situations",
        "Protocolli di gestione emotiva in situazioni di emergenza",
        "Structurer des repères utiles lorsque le contexte se tend.",
        "Structure useful reference points when the situation becomes more demanding.",
        "Strutturare punti di riferimento utili quando il contesto si fa più teso."
      ),
    ],
    outcomesTitle: {
      fr: "Résultats recherchés",
      en: "Expected outcomes",
      it: "Risultati attesi",
    },
    outcomes: [
      feature(
        "human-response",
        "ShieldAlert",
        "Structurer la réponse humaine à une crise",
        "Structure the human response to a crisis",
        "Strutturare la risposta umana a una crisi",
        "Aider l’organisation à maintenir un cadre plus lisible pour les équipes.",
        "Help the organisation maintain a clearer framework for teams.",
        "Aiutare l’organizzazione a mantenere un quadro più leggibile per i team."
      ),
      feature(
        "incident-support",
        "LifeBuoy",
        "Soutenir les équipes après un incident",
        "Support teams after an incident",
        "Sostenere i team dopo un incidente",
        "Favoriser un accompagnement adapté dans les suites d’un événement critique.",
        "Support appropriate follow-up after a critical event.",
        "Favorire un accompagnamento adeguato nelle fasi successive a un evento critico."
      ),
      feature(
        "manager-support",
        "MessagesSquare",
        "Accompagner les managers",
        "Guide managers",
        "Accompagnare i manager",
        "Aider les responsables à traverser les périodes de tension avec davantage de repères.",
        "Help leaders navigate demanding periods with more reference points.",
        "Aiutare i responsabili ad attraversare i periodi di tensione con più punti di riferimento."
      ),
      feature(
        "recovery",
        "HeartHandshake",
        "Favoriser une reprise plus sereine",
        "Enable a more stable recovery",
        "Favorire una ripresa più serena",
        "Contribuer à réinstaller des repères collectifs après la tension.",
        "Help re-establish collective reference points after a period of pressure.",
        "Contribuire a ristabilire punti di riferimento collettivi dopo la tensione."
      ),
      feature(
        "collective-resilience",
        "Route",
        "Renforcer la résilience collective",
        "Strengthen collective resilience",
        "Rafforzare la resilienza collettiva",
        "Soutenir la capacité de l’équipe à faire face aux suites de l’événement.",
        "Support the team’s ability to navigate the aftermath of the event.",
        "Sostenere la capacità del team di affrontare le conseguenze dell’evento."
      ),
    ],
    process: sharedProcess,
    audiences: [audienceIdMap.hrDirectors, audienceIdMap.internationalManagers, audienceIdMap.ngos, audienceIdMap.internationalOrganisations],
    delivery: sharedDelivery,
    image: assets.expertise.crisisManagement,
    relatedExpertiseIds: ["psychosocialPrevention", "internationalMobility", "training"],
    finalCta: {
      title: expertiseLandingPage.finalCta.title,
      description: expertiseLandingPage.finalCta.description,
      primaryCta: globalCtas.contactUs,
      secondaryCta: globalCtas.whatsapp,
    },
    seo: {
      title: {
        fr: "Management des situations de crise | Resilience@Work",
        en: "Crisis situation management | Resilience@Work",
        it: "Gestione delle situazioni di crisi | Resilience@Work",
      },
      description: {
        fr: "Resilience@Work soutient les organisations, les équipes et les managers confrontés à des événements critiques ou à des situations de tension.",
        en: "Resilience@Work supports organisations, teams and managers facing critical events or high-pressure situations.",
        it: "Resilience@Work sostiene organizzazioni, team e manager che affrontano eventi critici o situazioni di tensione.",
      },
      canonicalRoute: "crisisManagement",
      ogImage: assets.expertise.crisisManagement.src,
    },
  },
] as const;

export const trainingPageContent = {
  eyebrow: {
    fr: "Formations et webinaires",
    en: "Training and webinars",
    it: "Formazioni e webinar",
  } satisfies Record<Locale, string>,
  title: {
    fr: "Développer des compétences concrètes pour renforcer la résilience au travail.",
    en: "Developing practical skills to strengthen workplace resilience.",
    it: "Sviluppare competenze concrete per rafforzare la resilienza al lavoro.",
  } satisfies Record<Locale, string>,
  summary: {
    fr: "Resilience@Work propose des formations et des webinaires professionnels conçus pour prévenir les risques, soutenir les équipes et transmettre des outils directement mobilisables.",
    en: "Resilience@Work provides professional training sessions and webinars designed to prevent risks, support teams and share directly applicable tools.",
    it: "Resilience@Work propone formazioni e webinar professionali concepiti per prevenire i rischi, sostenere i team e trasmettere strumenti direttamente utilizzabili.",
  } satisfies Record<Locale, string>,
  introduction: {
    fr: [
      "La prévention et la résilience reposent aussi sur la capacité des organisations, des managers et des équipes à disposer de repères clairs et de pratiques adaptées.",
      "Les formations et webinaires de Resilience@Work privilégient des outils concrets, applicables dans les environnements professionnels et ajustés aux besoins de chaque organisation.",
    ],
    en: [
      "Prevention and resilience also depend on the ability of organisations, managers and teams to use clear reference points and appropriate practices.",
      "Resilience@Work training sessions and webinars focus on practical tools that can be applied in professional environments and adapted to each organisation’s needs.",
    ],
    it: [
      "La prevenzione e la resilienza si basano anche sulla capacità di organizzazioni, manager e team di disporre di punti di riferimento chiari e di pratiche adeguate.",
      "Le formazioni e i webinar di Resilience@Work privilegiano strumenti concreti, applicabili negli ambienti professionali e adattati alle esigenze di ciascuna organizzazione.",
    ],
  } satisfies Record<Locale, readonly string[]>,
  deliveryBlocks: [
    {
      id: "formats",
      title: {
        fr: "Des formats adaptés",
        en: "Formats adapted to your context",
        it: "Formati adattati al contesto",
      },
      description: {
        fr: "Présentiel · Distanciel · Webinaire",
        en: "On-site · Remote · Webinar",
        it: "In presenza · A distanza · Webinar",
      },
    },
    {
      id: "audiences",
      title: {
        fr: "Des contenus ajustés aux besoins",
        en: "Content tailored to your needs",
        it: "Contenuti adattati alle esigenze",
      },
      description: {
        fr: "Managers · Responsables RH · Équipes · Organisations internationales",
        en: "Managers · HR leaders · Teams · International organisations",
        it: "Manager · Responsabili HR · Team · Organizzazioni internazionali",
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
      fr: "Formations et webinaires professionnels | Resilience@Work",
      en: "Professional training and webinars | Resilience@Work",
      it: "Formazioni e webinar professionali | Resilience@Work",
    },
    description: {
      fr: "Découvrez les formations et webinaires proposés par Resilience@Work pour prévenir les risques psychosociaux et renforcer la résilience au travail.",
      en: "Explore Resilience@Work training sessions and webinars designed to prevent psychosocial risks and strengthen workplace resilience.",
      it: "Scoprite le formazioni e i webinar proposti da Resilience@Work per prevenire i rischi psicosociali e rafforzare la resilienza al lavoro.",
    },
    canonicalRoute: "training",
    ogImage: assets.expertise.training.src,
  },
} as const;

export const expertiseUiCopy = {
  introductionEyebrow: { fr: "Introduction", en: "Introduction", it: "Introduzione" },
  challengesEyebrow: { fr: "Enjeux", en: "Challenges", it: "Sfide" },
  servicesEyebrow: { fr: "Services", en: "Services", it: "Servizi" },
  outcomesEyebrow: { fr: "Résultats recherchés", en: "Expected outcomes", it: "Risultati attesi" },
  processEyebrow: { fr: "Notre démarche", en: "Our approach", it: "Il nostro approccio" },
  processTitle: {
    fr: "Un parcours d'accompagnement structuré",
    en: "A structured support pathway",
    it: "Un percorso di accompagnamento strutturato",
  },
  audiencesEyebrow: { fr: "Publics concernés", en: "Who this is for", it: "A chi si rivolge" },
  audiencesTitle: {
    fr: "Des accompagnements pensés pour plusieurs réalités professionnelles",
    en: "Support designed for different professional realities",
    it: "Accompagnamenti pensati per diverse realtà professionali",
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
  relatedEyebrow: { fr: "Expertises connexes", en: "Related expertise", it: "Competenze correlate" },
  relatedTitle: {
    fr: "Explorer d'autres formes d'accompagnement",
    en: "Explore other support areas",
    it: "Esplora altre forme di accompagnamento",
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
  breadcrumbExpertise: { fr: "Expertises", en: "Expertise", it: "Competenze" },
  breadcrumbAria: { fr: "Fil d'Ariane", en: "Breadcrumb", it: "Percorso di navigazione" },
  landingIntroEyebrow: { fr: "Introduction", en: "Introduction", it: "Introduzione" },
  landingIntroTitle: {
    fr: "Quatre domaines pour prévenir, accompagner et renforcer",
    en: "Four areas to prevent, support and strengthen",
    it: "Quattro ambiti per prevenire, accompagnare e rafforzare",
  },
  landingGridEyebrow: { fr: "Nos expertises", en: "Our expertise", it: "Le nostre competenze" },
  landingGridTitle: {
    fr: "Des accompagnements structurés pour des contextes exigeants",
    en: "Structured support for demanding contexts",
    it: "Accompagnamenti strutturati per contesti esigenti",
  },
  landingInternationalEyebrow: {
    fr: "Présence internationale",
    en: "International reach",
    it: "Presenza internazionale",
  },
  landingInternationalTitle: {
    fr: "Une expertise pensée pour des contextes multiculturels",
    en: "Expertise designed for multicultural contexts",
    it: "Una competenza pensata per contesti multiculturali",
  },
  landingInternationalDescription: {
    fr: "Resilience@Work intervient auprès d'organisations implantées en Afrique, en Europe et au Moyen-Orient.",
    en: "Resilience@Work supports organisations across Africa, Europe and the Middle East.",
    it: "Resilience@Work interviene presso organizzazioni presenti in Africa, Europa e Medio Oriente.",
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
