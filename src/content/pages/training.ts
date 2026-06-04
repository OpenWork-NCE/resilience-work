import type { TrainingTopic, Locale } from "@/types/content";

export const trainingTopics: readonly TrainingTopic[] = [
  {
    id: "burnout-prevention",
    title: {
      fr: "Prévenir le burnout",
      en: "Preventing burnout",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Identifier les facteurs de risque, repérer les signaux d'alerte et mobiliser des outils de prévention adaptés.",
      en: "Identify risk factors, recognise warning signs and use appropriate prevention tools.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Managers", "Responsables RH", "Équipes"],
      en: ["Managers", "HR leaders", "Teams"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "compassion-fatigue",
    title: {
      fr: "Prévenir la fatigue compassionnelle",
      en: "Preventing compassion fatigue",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Préserver l'équilibre des professionnels exposés à une charge émotionnelle importante.",
      en: "Protect the well-being of professionals exposed to significant emotional pressure.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["ONG", "Équipes d'aide", "Professionnels exposés"],
      en: ["NGOs", "Support teams", "Exposed professionals"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "international-leadership",
    title: {
      fr: "Leadership en contexte international",
      en: "Leadership in international contexts",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Développer un leadership adapté aux environnements multiculturels et géographiquement dispersés.",
      en: "Develop leadership practices adapted to multicultural and geographically distributed environments.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Managers", "Directions", "Responsables d'équipes internationales"],
      en: ["Managers", "Executives", "International team leaders"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "communication-under-pressure",
    title: {
      fr: "Communiquer en situation de tension",
      en: "Communicating under pressure",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Renforcer la qualité du dialogue et la capacité de décision dans les contextes exigeants.",
      en: "Strengthen communication and decision-making in demanding situations.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Managers", "Équipes", "Responsables RH"],
      en: ["Managers", "Teams", "HR leaders"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "stress-management",
    title: {
      fr: "Gestion du stress",
      en: "Stress management",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Comprendre les mécanismes du stress et mobiliser des stratégies adaptées au contexte professionnel.",
      en: "Understand stress mechanisms and apply strategies suited to professional environments.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Collaborateurs", "Managers", "Expatriés"],
      en: ["Employees", "Managers", "Expatriates"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "cross-cultural-management",
    title: {
      fr: "Management multiculturel",
      en: "Cross-cultural management",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Mieux comprendre les dynamiques interculturelles pour favoriser la coopération et la cohésion.",
      en: "Better understand cross-cultural dynamics to strengthen cooperation and cohesion.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Managers", "Équipes internationales", "Responsables RH"],
      en: ["Managers", "International teams", "HR leaders"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "mental-health-first-aid",
    title: {
      fr: "Mental Health First Aid",
      en: "Mental Health First Aid",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Développer des repères utiles pour mieux comprendre et soutenir la santé mentale au travail.",
      en: "Develop useful reference points to better understand and support workplace mental health.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Équipes", "Managers", "Responsables RH"],
      en: ["Teams", "Managers", "HR leaders"],
    } satisfies Record<Locale, readonly string[]>,
  },
  {
    id: "work-life-balance",
    title: {
      fr: "Équilibre entre vie professionnelle et vie personnelle",
      en: "Work-life balance",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Favoriser des pratiques de travail plus durables et préserver l'équilibre des collaborateurs.",
      en: "Promote more sustainable working practices and protect employee well-being.",
    } satisfies Record<Locale, string>,
    audiences: {
      fr: ["Collaborateurs", "Managers", "Équipes"],
      en: ["Employees", "Managers", "Teams"],
    } satisfies Record<Locale, readonly string[]>,
  },
] as const;
