import type { TrainingTopic, Locale } from "@/types/content";

export const trainingTopics: readonly TrainingTopic[] = [
  {
    id: "burnout-prevention",
    title: {
      fr: "Burnout",
      en: "Burnout",
      it: "Burnout",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Reconnaître les signes d’épuisement et ouvrir un échange utile au sein des équipes.",
      en: "Recognise signs of exhaustion and open a useful conversation within teams.",
      it: "Riconoscere i segnali di esaurimento e aprire un confronto utile nei team.",
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
      fr: "Fatigue compassionnelle",
      en: "Compassion fatigue",
      it: "Fatica compassionevole",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Soutenir les professionnels exposés à une charge émotionnelle importante.",
      en: "Support professionals exposed to significant emotional pressure.",
      it: "Sostenere i professionisti esposti a un carico emotivo importante.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["ONG", "Équipes d'aide", "Professionnels exposés"],
      en: ["NGOs", "Support teams", "Exposed professionals"],
      it: ["ONG", "Team di aiuto", "Professionisti esposti"],
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
      fr: "Préserver la qualité du dialogue lorsque le contexte se tend.",
      en: "Protect the quality of dialogue when the situation becomes tense.",
      it: "Preservare la qualità del dialogo quando il contesto si fa teso.",
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
      fr: "Stress au travail",
      en: "Workplace stress",
      it: "Stress al lavoro",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Comprendre le stress professionnel et disposer de repères concrets.",
      en: "Understand workplace stress and have practical reference points.",
      it: "Comprendere lo stress professionale e disporre di riferimenti concreti.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Collaborateurs", "Managers", "Équipes"],
      en: ["Employees", "Managers", "Teams"],
      it: ["Collaboratori", "Manager", "Team"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "mental-health-first-aid",
    title: {
      fr: "Santé mentale au travail",
      en: "Workplace mental health",
      it: "Salute mentale al lavoro",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Des repères simples pour mieux comprendre et soutenir la santé mentale au travail.",
      en: "Simple reference points to better understand and support workplace mental health.",
      it: "Riferimenti semplici per comprendere e sostenere meglio la salute mentale al lavoro.",
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
      fr: "Équilibre de vie professionnelle",
      en: "Work-life balance",
      it: "Equilibrio vita-lavoro",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Ouvrir un échange sur des pratiques de travail plus durables.",
      en: "Open a conversation about more sustainable working practices.",
      it: "Aprire un confronto su pratiche di lavoro più sostenibili.",
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
    fr: "Activités",
    en: "Activities",
    it: "Attività",
  } satisfies Record<Locale, string>,
  breadcrumbTraining: {
    fr: "Formations et workshops",
    en: "Training and workshops",
    it: "Formazioni e workshop",
  } satisfies Record<Locale, string>,
  introduction: {
    fr: "En pratique",
    en: "In practice",
    it: "In pratica",
  } satisfies Record<Locale, string>,
  catalogue: {
    fr: "Thèmes",
    en: "Themes",
    it: "Temi",
  } satisfies Record<Locale, string>,
  catalogueTitle: {
    fr: "Des thèmes liés au bien-être et à la santé mentale",
    en: "Themes related to well-being and mental health",
    it: "Temi legati al benessere e alla salute mentale",
  } satisfies Record<Locale, string>,
  deliveryEyebrow: {
    fr: "Formats",
    en: "Formats",
    it: "Formati",
  } satisfies Record<Locale, string>,
  deliveryTitle: {
    fr: "Formation ou workshop, en présentiel ou à distance",
    en: "Training or workshop, on-site or remote",
    it: "Formazione o workshop, in presenza o a distanza",
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
    fr: "Le format précis se discute selon votre contexte.",
    en: "The exact format can be discussed according to your context.",
    it: "Il formato preciso si discute in base al vostro contesto.",
  } satisfies Record<Locale, string>,
} as const;
