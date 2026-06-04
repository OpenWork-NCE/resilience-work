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
  },
  languages: {
    fr: ["Français", "Anglais", "Italien"],
    en: ["French", "English", "Italian"],
  },
  regions: {
    fr: ["Afrique", "Europe", "Moyen-Orient"],
    en: ["Africa", "Europe", "Middle East"],
  },
} as const;

function feature(
  id: string,
  icon: string,
  frTitle: string,
  enTitle: string,
  frDescription: string,
  enDescription: string
) {
  return {
    id,
    icon,
    title: {
      fr: frTitle,
      en: enTitle,
    },
    description: {
      fr: frDescription,
      en: enDescription,
    },
  } as const satisfies LocalizedFeature;
}

export const expertiseLandingPage = {
  hero: {
    eyebrow: {
      fr: "Nos expertises",
      en: "Our expertise",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Prévenir, accompagner et renforcer la résilience des organisations.",
      en: "Preventing, supporting and strengthening organisational resilience.",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Resilience@Work intervient auprès des organisations, des managers et des équipes confrontés à des environnements professionnels exigeants, multiculturels ou internationaux.",
      en: "Resilience@Work supports organisations, managers and teams navigating demanding, multicultural or international professional environments.",
    } satisfies Record<Locale, string>,
    supportingText: {
      fr: "Nos interventions visent à prévenir les risques psychosociaux, soutenir les collaborateurs, accompagner les périodes de transition et renforcer durablement les capacités d’adaptation.",
      en: "Our interventions aim to prevent psychosocial risks, support employees, guide transition periods and sustainably strengthen adaptability.",
    } satisfies Record<Locale, string>,
  },
  whyAct: {
    eyebrow: {
      fr: "Pourquoi agir",
      en: "Why take action",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Préserver les équipes dans les environnements les plus exigeants",
      en: "Supporting teams in the most demanding environments",
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
    } satisfies Record<Locale, readonly string[]>,
  },
  formats: {
    eyebrow: {
      fr: "Formats et langues",
      en: "Formats and languages",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Des interventions adaptées aux réalités du terrain",
      en: "Interventions adapted to real-world conditions",
    } satisfies Record<Locale, string>,
    deliveryLabel: {
      fr: "Formats",
      en: "Delivery formats",
    } satisfies Record<Locale, string>,
    deliveryValue: {
      fr: "Présentiel et distanciel",
      en: "On-site and remote",
    } satisfies Record<Locale, string>,
    languagesLabel: {
      fr: "Langues de prestation",
      en: "Service languages",
    } satisfies Record<Locale, string>,
    languagesValue: {
      fr: "Français · Anglais · Italien",
      en: "French · English · Italian",
    } satisfies Record<Locale, string>,
    regionsLabel: {
      fr: "Zones d’intervention",
      en: "Regions",
    } satisfies Record<Locale, string>,
    regionsValue: {
      fr: "Afrique · Europe · Moyen-Orient",
      en: "Africa · Europe · Middle East",
    } satisfies Record<Locale, string>,
  },
  finalCta: {
    title: {
      fr: "Échangeons sur les besoins de votre organisation",
      en: "Let’s discuss your organisation’s needs",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Vous souhaitez prévenir les risques psychosociaux, soutenir une équipe internationale, accompagner une situation sensible ou construire une formation adaptée à votre contexte ?",
      en: "Would you like to prevent psychosocial risks, support an international team, guide a sensitive situation or design training adapted to your context?",
    } satisfies Record<Locale, string>,
    note: {
      fr: "Échangeons afin d’identifier la forme d’accompagnement la plus pertinente.",
      en: "Let’s discuss the most appropriate form of support.",
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
    },
    title: {
      fr: "Prévention psychosociale et bien-être au travail",
      en: "Psychosocial prevention and workplace well-being",
    },
    summary: {
      fr: "Identifier les facteurs de risque, prévenir l’épuisement et soutenir durablement la santé mentale au travail.",
      en: "Identify risk factors, prevent exhaustion and sustainably support workplace mental health.",
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
    },
    services: {
      fr: [
        "Évaluation des risques psychosociaux",
        "Programmes de prévention et d’intervention",
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
    },
    title: {
      fr: "Accompagnement en mobilité internationale",
      en: "International mobility support",
    },
    summary: {
      fr: "Accompagner les collaborateurs expatriés dans leur adaptation culturelle, leur équilibre et leur résilience.",
      en: "Support expatriate employees in their cultural adjustment, well-being and resilience.",
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
    },
    title: {
      fr: "Management des situations de crise",
      en: "Crisis situation management",
    },
    summary: {
      fr: "Soutenir les équipes et les managers lorsqu’ils sont confrontés à des événements critiques ou à des situations de tension.",
      en: "Support teams and managers facing critical events or high-pressure situations.",
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
    },
    services: {
      fr: [
        "Soutien aux équipes confrontées à des événements critiques",
        "Débriefings psychologiques post-incident",
        "Accompagnement des managers en contexte de tension",
        "Protocoles de gestion émotionnelle en situation d’urgence",
      ],
      en: [
        "Support for teams facing critical events",
        "Post-incident psychological debriefings",
        "Support for managers in high-pressure situations",
        "Emotional management protocols for emergency situations",
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
    },
    title: {
      fr: "Formations et webinaires professionnels",
      en: "Professional training and webinars",
    },
    summary: {
      fr: "Transmettre des outils concrets pour prévenir les risques, soutenir les équipes et renforcer la résilience.",
      en: "Provide practical tools to prevent risks, support teams and strengthen resilience.",
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
    },
    title: {
      fr: "Préserver la santé mentale et renforcer durablement le bien-être au travail.",
      en: "Protecting mental health and sustainably strengthening workplace well-being.",
    },
    summary: {
      fr: "Resilience@Work accompagne les organisations dans l’identification, la prévention et la gestion des risques psychosociaux, avec une approche humaine, confidentielle et adaptée aux réalités du terrain.",
      en: "Resilience@Work supports organisations in identifying, preventing and managing psychosocial risks through a human, confidential approach tailored to real-world conditions.",
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
    },
    challengesTitle: {
      fr: "Enjeux traités",
      en: "Challenges addressed",
    },
    challenges: [
      feature("risk-factors", "HeartPulse", "Identifier les facteurs de risque", "Identify risk factors", "Repérer les dynamiques susceptibles d’affecter l’équilibre et la santé mentale au travail.", "Recognise dynamics that may affect workplace well-being and mental health."),
      feature("prevent-burnout", "ShieldCheck", "Prévenir le stress et l’épuisement", "Prevent stress and exhaustion", "Mettre en place des repères et des actions adaptées aux réalités de l’organisation.", "Implement reference points and actions adapted to the organisation’s realities."),
      feature("support-teams", "Users", "Soutenir les équipes", "Support teams", "Créer des espaces d’accompagnement individuel ou collectif lorsque le contexte l’exige.", "Create individual or collective support spaces when required by the context."),
      feature("manager-practices", "Activity", "Renforcer les pratiques managériales", "Strengthen managerial practices", "Aider les managers à mieux comprendre et prévenir les situations sensibles.", "Help managers better understand and prevent sensitive situations."),
    ],
    servicesTitle: {
      fr: "Services proposés",
      en: "Services offered",
    },
    services: [
      feature("assessment", "HeartPulse", "Évaluation des risques psychosociaux", "Psychosocial risk assessment", "Identifier les signaux de vigilance et les facteurs de risque propres au contexte.", "Identify warning signs and risk factors specific to the context."),
      feature("programmes", "ShieldCheck", "Programmes de prévention et d’intervention", "Prevention and intervention programmes", "Structurer des actions adaptées aux besoins des équipes et de l’organisation.", "Structure interventions adapted to team and organisational needs."),
      feature("multicultural-support", "Users", "Accompagnement des équipes multiculturelles", "Support for multicultural teams", "Ajuster la prévention aux réalités interculturelles et relationnelles.", "Adapt prevention to cross-cultural and relational realities."),
      feature("support", "Scale", "Soutien individuel et collectif", "Individual and collective support", "Créer un espace d’accompagnement lorsque la situation l’exige.", "Create a support space when the situation requires it."),
      feature("stress-burnout", "Activity", "Prévention du stress et du burnout", "Stress and burnout prevention", "Renforcer les repères utiles pour prévenir l’épuisement professionnel.", "Strengthen useful reference points to help prevent professional exhaustion."),
      feature("balance", "HeartHandshake", "Équilibre entre vie professionnelle et vie personnelle", "Work-life balance", "Favoriser des pratiques de travail plus durables.", "Support more sustainable working practices."),
    ],
    outcomesTitle: {
      fr: "Résultats recherchés",
      en: "Expected outcomes",
    },
    outcomes: [
      feature("mental-health", "HeartPulse", "Préserver la santé mentale au travail", "Contribute to protecting workplace mental health", "Soutenir des environnements de travail plus stables et plus attentifs aux signaux de fragilité.", "Support work environments that are steadier and more attentive to signs of vulnerability."),
      feature("stress-reduction", "ShieldCheck", "Réduire le stress et l’épuisement", "Help reduce stress and exhaustion", "Mettre en place des repères favorisant une meilleure prévention.", "Establish reference points that support better prevention."),
      feature("resilience", "Activity", "Renforcer la résilience", "Strengthen resilience", "Développer des capacités d’adaptation individuelles et collectives.", "Develop individual and collective adaptability."),
      feature("tools", "Scale", "Fournir des outils concrets", "Provide practical tools", "Transmettre des pratiques mobilisables dans le quotidien professionnel.", "Share practices that can be applied in day-to-day professional life."),
      feature("cohesion", "Users", "Améliorer la cohésion d’équipe", "Support team cohesion", "Favoriser des dynamiques collectives plus solides dans les périodes exigeantes.", "Support stronger collective dynamics during demanding periods."),
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
      },
      description: {
        fr: "Resilience@Work accompagne les organisations dans la prévention des risques psychosociaux, du stress et de l’épuisement professionnel.",
        en: "Resilience@Work supports organisations in preventing psychosocial risks, stress and professional exhaustion.",
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
    },
    title: {
      fr: "Accompagner les collaborateurs avant, pendant et après leur expérience internationale.",
      en: "Supporting employees before, during and after their international experience.",
    },
    summary: {
      fr: "Resilience@Work soutient les collaborateurs expatriés et les organisations confrontés aux enjeux d’adaptation culturelle, d’isolement, de stress et de transition.",
      en: "Resilience@Work supports expatriate employees and organisations navigating cultural adjustment, isolation, stress and transition challenges.",
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
    },
    challengesTitle: {
      fr: "Enjeux traités",
      en: "Challenges addressed",
    },
    challenges: [
      feature("departure", "Plane", "Préparer le départ", "Prepare for departure", "Anticiper les défis liés à la transition et à l’adaptation culturelle.", "Anticipate challenges related to transition and cultural adjustment."),
      feature("isolation", "MapPin", "Prévenir l’isolement", "Prevent isolation", "Soutenir les collaborateurs éloignés de leurs repères habituels.", "Support employees who are away from their usual reference points."),
      feature("stress", "Compass", "Gérer le stress", "Manage stress", "Créer un espace confidentiel pour mieux traverser les périodes exigeantes.", "Create a confidential space to better navigate demanding periods."),
      feature("return", "RefreshCcw", "Accompagner le retour", "Support the return", "Soutenir la transition liée à la fin de mission et à la réintégration.", "Guide the transition associated with the end of an assignment and reintegration."),
    ],
    servicesTitle: {
      fr: "Services proposés",
      en: "Services offered",
    },
    services: [
      feature("stress-isolation", "Globe2", "Gestion du stress et de l’isolement", "Stress and isolation management", "Soutenir les collaborateurs confrontés à l’éloignement et à la charge émotionnelle.", "Support employees facing distance and emotional pressure."),
      feature("cultural-adjustment", "Compass", "Adaptation culturelle", "Cultural adjustment", "Faciliter l’intégration dans de nouveaux contextes professionnels et relationnels.", "Facilitate integration into new professional and relational contexts."),
      feature("resilience-dev", "MapPin", "Développement de la résilience", "Resilience development", "Renforcer les capacités d’adaptation dans les périodes de transition.", "Strengthen adaptability during transition periods."),
      feature("confidential-support", "Route", "Soutien psychologique confidentiel", "Confidential psychological support", "Créer un espace d’échange discret et adapté au contexte.", "Create a discreet support space adapted to the context."),
      feature("pre-departure", "Plane", "Préparation au départ", "Pre-departure preparation", "Aider à anticiper les défis personnels et professionnels à venir.", "Help anticipate the professional and personal challenges ahead."),
      feature("return-support", "RefreshCcw", "Accompagnement au retour d’expatriation", "Support upon returning from expatriation", "Accompagner la réintégration et la reprise des repères.", "Support reintegration and the restoration of reference points."),
    ],
    outcomesTitle: {
      fr: "Résultats recherchés",
      en: "Expected outcomes",
    },
    outcomes: [
      feature("cultural", "Globe2", "Faciliter l’adaptation culturelle", "Facilitate cultural adjustment", "Aider les collaborateurs à mieux naviguer dans un environnement nouveau.", "Help employees better navigate a new environment."),
      feature("reduce-isolation", "MapPin", "Réduire l’isolement", "Help reduce isolation", "Maintenir un sentiment d’appui et de continuité durant la mission.", "Maintain a sense of support and continuity throughout the assignment."),
      feature("emotional-balance", "Compass", "Soutenir l’équilibre émotionnel", "Support emotional balance", "Créer des repères utiles pour les périodes sensibles.", "Create useful anchors for sensitive periods."),
      feature("transitions", "RefreshCcw", "Sécuriser les périodes de transition", "Support transition periods", "Favoriser des passages plus lisibles avant, pendant et après la mission.", "Support clearer transitions before, during and after the assignment."),
      feature("resilience", "Plane", "Renforcer la résilience", "Strengthen resilience", "Développer des capacités d’adaptation durables.", "Develop long-term adaptability."),
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
      },
      description: {
        fr: "Resilience@Work accompagne les expatriés et les organisations dans les enjeux d’adaptation culturelle, de stress, d’isolement et de transition.",
        en: "Resilience@Work supports expatriates and organisations navigating cultural adjustment, stress, isolation and transition challenges.",
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
    },
    title: {
      fr: "Soutenir les équipes et les managers dans les situations les plus sensibles.",
      en: "Supporting teams and managers in the most sensitive situations.",
    },
    summary: {
      fr: "Resilience@Work accompagne les organisations confrontées à des événements critiques ou à des périodes de tension, afin de préserver les équipes et de structurer la réponse humaine.",
      en: "Resilience@Work supports organisations facing critical events or periods of heightened pressure to protect teams and structure the human response.",
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
    },
    challengesTitle: {
      fr: "Enjeux traités",
      en: "Challenges addressed",
    },
    challenges: [
      feature("support-teams", "LifeBuoy", "Soutenir les équipes", "Support teams", "Créer un cadre d’accompagnement adapté aux événements critiques.", "Create a support framework adapted to critical events."),
      feature("guide-managers", "ShieldAlert", "Accompagner les managers", "Guide managers", "Aider les responsables à mieux gérer les périodes de tension.", "Help leaders better navigate periods of heightened pressure."),
      feature("debriefings", "MessagesSquare", "Structurer les débriefings", "Structure debriefings", "Permettre un retour encadré sur les situations difficiles.", "Provide a guided review of difficult situations."),
      feature("recovery", "HeartHandshake", "Favoriser la reprise", "Enable recovery", "Contribuer à rétablir des repères et à renforcer la résilience collective.", "Help restore reference points and strengthen collective resilience."),
    ],
    servicesTitle: {
      fr: "Services proposés",
      en: "Services offered",
    },
    services: [
      feature("team-support", "LifeBuoy", "Soutien aux équipes confrontées à des événements critiques", "Support for teams facing critical events", "Créer un cadre d’écoute et d’accompagnement adapté au contexte.", "Create a support framework adapted to the context."),
      feature("debrief", "MessagesSquare", "Débriefings psychologiques post-incident", "Post-incident psychological debriefings", "Permettre un retour encadré sur les événements difficiles.", "Provide a guided review of difficult events."),
      feature("manager-support", "ShieldAlert", "Accompagnement des managers en contexte de tension", "Support for managers in high-pressure contexts", "Soutenir les responsables dans la conduite humaine des périodes sensibles.", "Support leaders in the human management of sensitive periods."),
      feature("emergency-protocols", "Route", "Protocoles de gestion émotionnelle en situation d’urgence", "Emotional management protocols for emergency situations", "Structurer des repères utiles lorsque le contexte se tend.", "Structure useful reference points when the situation becomes more demanding."),
    ],
    outcomesTitle: {
      fr: "Résultats recherchés",
      en: "Expected outcomes",
    },
    outcomes: [
      feature("human-response", "ShieldAlert", "Structurer la réponse humaine à une crise", "Structure the human response to a crisis", "Aider l’organisation à maintenir un cadre plus lisible pour les équipes.", "Help the organisation maintain a clearer framework for teams."),
      feature("incident-support", "LifeBuoy", "Soutenir les équipes après un incident", "Support teams after an incident", "Favoriser un accompagnement adapté dans les suites d’un événement critique.", "Support appropriate follow-up after a critical event."),
      feature("manager-support", "MessagesSquare", "Accompagner les managers", "Guide managers", "Aider les responsables à traverser les périodes de tension avec davantage de repères.", "Help leaders navigate demanding periods with more reference points."),
      feature("recovery", "HeartHandshake", "Favoriser une reprise plus sereine", "Enable a more stable recovery", "Contribuer à réinstaller des repères collectifs après la tension.", "Help re-establish collective reference points after a period of pressure."),
      feature("collective-resilience", "Route", "Renforcer la résilience collective", "Strengthen collective resilience", "Soutenir la capacité de l’équipe à faire face aux suites de l’événement.", "Support the team’s ability to navigate the aftermath of the event."),
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
      },
      description: {
        fr: "Resilience@Work soutient les organisations, les équipes et les managers confrontés à des événements critiques ou à des situations de tension.",
        en: "Resilience@Work supports organisations, teams and managers facing critical events or high-pressure situations.",
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
  } satisfies Record<Locale, string>,
  title: {
    fr: "Développer des compétences concrètes pour renforcer la résilience au travail.",
    en: "Developing practical skills to strengthen workplace resilience.",
  } satisfies Record<Locale, string>,
  summary: {
    fr: "Resilience@Work propose des formations et des webinaires professionnels conçus pour prévenir les risques, soutenir les équipes et transmettre des outils directement mobilisables.",
    en: "Resilience@Work provides professional training sessions and webinars designed to prevent risks, support teams and share directly applicable tools.",
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
  } satisfies Record<Locale, readonly string[]>,
  deliveryBlocks: [
    {
      id: "formats",
      title: {
        fr: "Des formats adaptés",
        en: "Formats adapted to your context",
      },
      description: {
        fr: "Présentiel · Distanciel · Webinaire",
        en: "On-site · Remote · Webinar",
      },
    },
    {
      id: "audiences",
      title: {
        fr: "Des contenus ajustés aux besoins",
        en: "Content tailored to your needs",
      },
      description: {
        fr: "Managers · Responsables RH · Équipes · Organisations internationales",
        en: "Managers · HR leaders · Teams · International organisations",
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
    },
    description: {
      fr: "Découvrez les formations et webinaires proposés par Resilience@Work pour prévenir les risques psychosociaux et renforcer la résilience au travail.",
      en: "Explore Resilience@Work training sessions and webinars designed to prevent psychosocial risks and strengthen workplace resilience.",
    },
    canonicalRoute: "training",
    ogImage: assets.expertise.training.src,
  },
} as const;

export const expertiseSlugParams = expertiseDetailPages.map((page) => ({
  slug: page.slug,
}));

export function getExpertiseDetailPageBySlug(slug: string) {
  return expertiseDetailPages.find((page) => page.slug === slug);
}

export function getExpertiseItemById(id: ExpertiseId) {
  return expertiseItems.find((item) => item.id === id);
}
