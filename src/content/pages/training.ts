import type { TrainingTopic, Locale } from "@/types/content";

export const trainingTopics: readonly TrainingTopic[] = [
  {
    id: "burnout-prevention",
    title: {
      fr: "Prévenir le burnout",
      en: "Preventing burnout",
      it: "Prevenire il burnout",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Identifier les facteurs de risque, repérer les signaux d'alerte et mobiliser des outils de prévention adaptés.",
      en: "Identify risk factors, recognise warning signs and use appropriate prevention tools.",
      it: "Identificare i fattori di rischio, cogliere i segnali di allerta e mobilizzare strumenti di prevenzione adeguati.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Managers", "Responsables RH", "Équipes"],
      en: ["Managers", "HR leaders", "Teams"],
      it: ["Manager", "Responsabili HR", "Team"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "compassion-fatigue",
    title: {
      fr: "Prévenir la fatigue compassionnelle",
      en: "Preventing compassion fatigue",
      it: "Prevenire la fatica compassionevole",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Préserver l'équilibre des professionnels exposés à une charge émotionnelle importante.",
      en: "Protect the well-being of professionals exposed to significant emotional pressure.",
      it: "Preservare l'equilibrio dei professionisti esposti a un carico emotivo importante.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["ONG", "Équipes d'aide", "Professionnels exposés"],
      en: ["NGOs", "Support teams", "Exposed professionals"],
      it: ["ONG", "Team di aiuto", "Professionisti esposti"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "international-leadership",
    title: {
      fr: "Leadership en contexte international",
      en: "Leadership in international contexts",
      it: "Leadership in contesti internazionali",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Développer un leadership adapté aux environnements multiculturels et géographiquement dispersés.",
      en: "Develop leadership practices adapted to multicultural and geographically distributed environments.",
      it: "Sviluppare una leadership adatta ad ambienti multiculturali e geograficamente distribuiti.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Managers", "Directions", "Responsables d'équipes internationales"],
      en: ["Managers", "Executives", "International team leaders"],
      it: ["Manager", "Direzioni", "Responsabili di team internazionali"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "communication-under-pressure",
    title: {
      fr: "Communiquer en situation de tension",
      en: "Communicating under pressure",
      it: "Comunicare in situazioni di tensione",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Renforcer la qualité du dialogue et la capacité de décision dans les contextes exigeants.",
      en: "Strengthen communication and decision-making in demanding situations.",
      it: "Rafforzare la qualità del dialogo e la capacità decisionale nei contesti impegnativi.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Managers", "Équipes", "Responsables RH"],
      en: ["Managers", "Teams", "HR leaders"],
      it: ["Manager", "Team", "Responsabili HR"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "stress-management",
    title: {
      fr: "Gestion du stress",
      en: "Stress management",
      it: "Gestione dello stress",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Comprendre les mécanismes du stress et mobiliser des stratégies adaptées au contexte professionnel.",
      en: "Understand stress mechanisms and apply strategies suited to professional environments.",
      it: "Comprendere i meccanismi dello stress e mobilizzare strategie adatte al contesto professionale.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Collaborateurs", "Managers", "Expatriés"],
      en: ["Employees", "Managers", "Expatriates"],
      it: ["Collaboratori", "Manager", "Espatriati"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "cross-cultural-management",
    title: {
      fr: "Management multiculturel",
      en: "Cross-cultural management",
      it: "Management multiculturale",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Mieux comprendre les dynamiques interculturelles pour favoriser la coopération et la cohésion.",
      en: "Better understand cross-cultural dynamics to strengthen cooperation and cohesion.",
      it: "Comprendere meglio le dinamiche interculturali per favorire la cooperazione e la coesione.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Managers", "Équipes internationales", "Responsables RH"],
      en: ["Managers", "International teams", "HR leaders"],
      it: ["Manager", "Team internazionali", "Responsabili HR"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "mental-health-first-aid",
    title: {
      fr: "Mental Health First Aid",
      en: "Mental Health First Aid",
      it: "Mental Health First Aid",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Développer des repères utiles pour mieux comprendre et soutenir la santé mentale au travail.",
      en: "Develop useful reference points to better understand and support workplace mental health.",
      it: "Sviluppare riferimenti utili per comprendere e sostenere meglio la salute mentale sul lavoro.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Équipes", "Managers", "Responsables RH"],
      en: ["Teams", "Managers", "HR leaders"],
      it: ["Team", "Manager", "Responsabili HR"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "work-life-balance",
    title: {
      fr: "Équilibre entre vie professionnelle et vie personnelle",
      en: "Work-life balance",
      it: "Equilibrio tra vita professionale e vita personale",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Favoriser des pratiques de travail plus durables et préserver l'équilibre des collaborateurs.",
      en: "Promote more sustainable working practices and protect employee well-being.",
      it: "Favorire pratiche di lavoro più sostenibili e preservare l'equilibrio dei collaboratori.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Collaborateurs", "Managers", "Équipes"],
      en: ["Employees", "Managers", "Teams"],
      it: ["Collaboratori", "Manager", "Team"],
    } satisfies Record<Locale, readonly string[]>,
  },
] as const;

/** Localized UI copy for hardcoded strings in training page components. */
export const trainingUiCopy = {
  breadcrumbHome: {
    fr: "Accueil",
    en: "Home",
    it: "Home",
  } satisfies Record<Locale, string>,
  breadcrumbExpertise: {
    fr: "Expertises",
    en: "Expertise",
    it: "Competenze",
  } satisfies Record<Locale, string>,
  breadcrumbTraining: {
    fr: "Formations",
    en: "Training",
    it: "Formazione",
  } satisfies Record<Locale, string>,
  introduction: {
    fr: "Introduction",
    en: "Introduction",
    it: "Introduzione",
  } satisfies Record<Locale, string>,
  catalogue: {
    fr: "Catalogue",
    en: "Catalogue",
    it: "Catalogo",
  } satisfies Record<Locale, string>,
  catalogueTitle: {
    fr: "Des contenus conçus pour transmettre des repères concrets",
    en: "Content designed to share practical reference points",
    it: "Contenuti progettati per trasmettere riferimenti concreti",
  } satisfies Record<Locale, string>,
  deliveryEyebrow: {
    fr: "Formats d’intervention",
    en: "Delivery formats",
    it: "Formati di intervento",
  } satisfies Record<Locale, string>,
  deliveryTitle: {
    fr: "Des formats ajustés aux besoins des organisations",
    en: "Formats tailored to organisational needs",
    it: "Formati adattati alle esigenze delle organizzazioni",
  } satisfies Record<Locale, string>,
  relevantAudiences: {
    fr: "Publics concernés",
    en: "Relevant audiences",
    it: "Pubblici interessati",
  } satisfies Record<Locale, string>,
  discussNeeds: {
    fr: "Échanger sur vos besoins",
    en: "Discuss your needs",
    it: "Parliamo delle vostre esigenze",
  } satisfies Record<Locale, string>,
  finalNote: {
    fr: "Échangeons afin d’identifier la forme d’accompagnement la plus pertinente.",
    en: "Let’s discuss the most appropriate form of support.",
    it: "Confrontiamoci per identificare la forma di accompagnamento più pertinente.",
  } satisfies Record<Locale, string>,
} as const;
