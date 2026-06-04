import type { ExpertiseItem, Locale } from "@/types/content";
import { assets } from "../assets";

export const expertiseItems: readonly ExpertiseItem[] = [
  {
    id: "psychosocialPrevention",
    icon: "HeartPulse",
    route: "psychosocialPrevention",

    shortTitle: {
      fr: "Prévention psychosociale",
      en: "Psychosocial prevention",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Prévention psychosociale et bien-être au travail",
      en: "Psychosocial prevention and workplace well-being",
    } satisfies Record<Locale, string>,

    summary: {
      fr: "Identifier les facteurs de risque, prévenir l'épuisement et soutenir durablement la santé mentale au travail.",
      en: "Identify risk factors, prevent exhaustion and sustainably support workplace mental health.",
    } satisfies Record<Locale, string>,

    description: {
      fr: [
        "Resilience@Work aide les organisations à identifier, prévenir et mieux gérer les risques psychosociaux.",
        "Les interventions sont adaptées aux réalités humaines, organisationnelles et interculturelles propres à chaque environnement professionnel.",
      ],
      en: [
        "Resilience@Work helps organisations identify, prevent and better manage psychosocial risks.",
        "Interventions are tailored to the human, organisational and cross-cultural realities of each professional environment.",
      ],
    } satisfies Record<Locale, readonly string[]>,

    services: {
      fr: [
        "Évaluation des risques psychosociaux",
        "Programmes de prévention et d'intervention",
        "Accompagnement des équipes multiculturelles",
        "Soutien individuel et collectif",
        "Prévention du stress et du burnout",
        "Équilibre entre vie professionnelle et vie personnelle",
      ],
      en: [
        "Psychosocial risk assessment",
        "Prevention and intervention programmes",
        "Support for multicultural teams",
        "Individual and collective support",
        "Stress and burnout prevention",
        "Work-life balance",
      ],
    } satisfies Record<Locale, readonly string[]>,

    outcomes: {
      fr: [
        "Préserver la santé mentale au travail",
        "Réduire le stress et l'épuisement",
        "Renforcer la résilience",
        "Fournir des outils concrets",
      ],
      en: [
        "Protect workplace mental health",
        "Reduce stress and exhaustion",
        "Strengthen resilience",
        "Provide practical tools",
      ],
    } satisfies Record<Locale, readonly string[]>,

    image: assets.expertise.psychosocialPrevention,
  },
  {
    id: "internationalMobility",
    icon: "Globe2",
    route: "internationalMobility",

    shortTitle: {
      fr: "Mobilité internationale",
      en: "International mobility",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Accompagnement en mobilité internationale",
      en: "International mobility support",
    } satisfies Record<Locale, string>,

    summary: {
      fr: "Accompagner les collaborateurs expatriés dans leur adaptation culturelle, leur équilibre et leur résilience.",
      en: "Support expatriate employees in their cultural adjustment, well-being and resilience.",
    } satisfies Record<Locale, string>,

    description: {
      fr: [
        "Les missions internationales peuvent confronter les collaborateurs à l'isolement, à une forte charge émotionnelle et à des défis d'adaptation culturelle.",
        "Resilience@Work propose un accompagnement confidentiel avant, pendant et après l'expatriation.",
      ],
      en: [
        "International assignments can expose employees to isolation, emotional pressure and cultural adjustment challenges.",
        "Resilience@Work provides confidential support before, during and after expatriation.",
      ],
    } satisfies Record<Locale, readonly string[]>,

    services: {
      fr: [
        "Gestion du stress et de l'isolement",
        "Adaptation culturelle",
        "Développement de la résilience",
        "Soutien psychologique confidentiel",
        "Préparation au départ",
        "Accompagnement au retour d'expatriation",
      ],
      en: [
        "Stress and isolation management",
        "Cultural adjustment",
        "Resilience development",
        "Confidential psychological support",
        "Pre-departure preparation",
        "Support upon returning from expatriation",
      ],
    } satisfies Record<Locale, readonly string[]>,

    outcomes: {
      fr: [
        "Faciliter l'adaptation culturelle",
        "Réduire l'isolement",
        "Soutenir l'équilibre émotionnel",
        "Sécuriser les périodes de transition",
      ],
      en: [
        "Facilitate cultural adjustment",
        "Reduce isolation",
        "Support emotional well-being",
        "Navigate transition periods more effectively",
      ],
    } satisfies Record<Locale, readonly string[]>,

    image: assets.expertise.internationalMobility,
  },
  {
    id: "crisisManagement",
    icon: "ShieldAlert",
    route: "crisisManagement",

    shortTitle: {
      fr: "Gestion de crise",
      en: "Crisis management",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Management des situations de crise",
      en: "Crisis situation management",
    } satisfies Record<Locale, string>,

    summary: {
      fr: "Soutenir les équipes et les managers lorsqu'ils sont confrontés à des événements critiques ou à des situations de tension.",
      en: "Support teams and managers facing critical events or high-pressure situations.",
    } satisfies Record<Locale, string>,

    description: {
      fr: [
        "Lorsqu'une organisation traverse une situation critique, les équipes ont besoin de repères clairs, d'un espace de soutien et d'outils adaptés.",
        "Resilience@Work intervient pour accompagner les collaborateurs et les managers avant, pendant ou après les périodes de tension.",
      ],
      en: [
        "When an organisation faces a critical situation, teams need clear guidance, a supportive environment and practical tools.",
        "Resilience@Work supports employees and managers before, during or after periods of heightened pressure.",
      ],
    } satisfies Record<Locale, readonly string[]>,

    services: {
      fr: [
        "Soutien aux équipes confrontées à des événements critiques",
        "Débriefings psychologiques post-incident",
        "Accompagnement des managers en contexte de tension",
        "Protocoles de gestion émotionnelle en situation d'urgence",
      ],
      en: [
        "Support for teams facing critical events",
        "Post-incident psychological debriefings",
        "Support for managers in high-pressure situations",
        "Emotional management protocols for emergency situations",
      ],
    } satisfies Record<Locale, readonly string[]>,

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
    } satisfies Record<Locale, readonly string[]>,

    image: assets.expertise.crisisManagement,
  },
  {
    id: "training",
    icon: "Presentation",
    route: "training",

    shortTitle: {
      fr: "Formations",
      en: "Training",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Formations et webinaires professionnels",
      en: "Professional training and webinars",
    } satisfies Record<Locale, string>,

    summary: {
      fr: "Transmettre des outils concrets pour prévenir les risques, soutenir les équipes et renforcer la résilience.",
      en: "Provide practical tools to prevent risks, support teams and strengthen resilience.",
    } satisfies Record<Locale, string>,

    description: {
      fr: [
        "Resilience@Work propose des formations et des webinaires adaptés aux besoins des organisations, des managers et des équipes internationales.",
        "Les contenus privilégient des outils pratiques, directement mobilisables dans les environnements professionnels.",
      ],
      en: [
        "Resilience@Work provides training sessions and webinars tailored to the needs of organisations, managers and international teams.",
        "The content focuses on practical tools that can be directly applied in professional environments.",
      ],
    } satisfies Record<Locale, readonly string[]>,

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
    } satisfies Record<Locale, readonly string[]>,

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
    } satisfies Record<Locale, readonly string[]>,

    image: assets.expertise.training,
  },
] as const;
