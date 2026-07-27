import type { Locale, MethodologyStep } from "@/types/content";
import { assets } from "../assets";
import { globalCtas } from "../navigation";

export const homePage = {
  hero: {
    eyebrow: {
      fr: "Bien-être psychosocial · Résilience organisationnelle",
      en: "Psychosocial well-being · Organisational resilience",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Des équipes plus résilientes dans les environnements les plus exigeants.",
      en: "More resilient teams in the most demanding environments.",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Resilience@Work accompagne les organisations, les managers et les collaborateurs exposés à des situations professionnelles complexes, multiculturelles ou internationales.",
      en: "Resilience@Work supports organisations, managers and employees navigating complex, multicultural or international professional environments.",
    } satisfies Record<Locale, string>,

    supportingText: {
      fr: "Prévention des risques psychosociaux, santé mentale au travail et performance humaine durable.",
      en: "Psychosocial risk prevention, workplace mental health and sustainable human performance.",
    } satisfies Record<Locale, string>,

    scrollHint: {
      fr: "Découvrir",
      en: "Explore",
    } satisfies Record<Locale, string>,

    primaryCta: globalCtas.scheduleConversation,
    secondaryCta: globalCtas.discoverExpertise,
    image: assets.hero.main,
  },

  intro: {
    eyebrow: {
      fr: "Notre approche",
      en: "Our approach",
    } satisfies Record<Locale, string>,

    title: {
      fr: "L'humain au cœur de la résilience organisationnelle",
      en: "People at the heart of organisational resilience",
    } satisfies Record<Locale, string>,

    paragraphs: {
      fr: [
        "Resilience@Work accompagne les entreprises dans la création d'environnements de travail sains, performants et humains.",
        "Notre approche multidisciplinaire répond aux réalités des équipes multiculturelles, des collaborateurs expatriés et des organisations confrontées à des contextes sensibles.",
      ],
      en: [
        "Resilience@Work helps organisations create healthy, high-performing and people-centred work environments.",
        "Our multidisciplinary approach addresses the realities of multicultural teams, expatriate employees and organisations operating in demanding contexts.",
      ],
    } satisfies Record<Locale, readonly string[]>,
  },

  expertise: {
    eyebrow: {
      fr: "Expertises",
      en: "Expertise",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Quatre domaines d'intervention pour renforcer durablement les équipes",
      en: "Four areas of expertise designed to strengthen teams over time",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Des accompagnements conçus pour prévenir les risques psychosociaux, soutenir les équipes internationales et structurer des réponses adaptées aux contextes sensibles.",
      en: "Support designed to prevent psychosocial risks, guide international teams and structure responses suited to demanding contexts.",
    } satisfies Record<Locale, string>,

    cta: {
      label: {
        fr: "Découvrir toutes nos expertises",
        en: "Explore all expertise areas",
      } satisfies Record<Locale, string>,
      route: "expertise",
      variant: "secondary",
    },

    itemCta: {
      label: {
        fr: "En savoir plus",
        en: "Learn more",
      } satisfies Record<Locale, string>,
      variant: "link",
    },
  },

  highlights: [
    {
      id: "regions",
      value: {
        fr: "Afrique · Europe · Moyen-Orient",
        en: "Africa · Europe · Middle East",
      } satisfies Record<Locale, string>,
      label: {
        fr: "Présence internationale",
        en: "International reach",
      } satisfies Record<Locale, string>,
    },
    {
      id: "formats",
      value: {
        fr: "Présentiel et distanciel",
        en: "On-site and remote",
      } satisfies Record<Locale, string>,
      label: {
        fr: "Formats d'intervention",
        en: "Delivery formats",
      } satisfies Record<Locale, string>,
    },
    {
      id: "languages",
      value: {
        fr: "Français · Anglais · Italien",
        en: "French · English · Italian",
      } satisfies Record<Locale, string>,
      label: {
        fr: "Langues de prestation",
        en: "Service languages",
      } satisfies Record<Locale, string>,
    },
    {
      id: "approach",
      value: {
        fr: "Humaine · Confidentielle · Pragmatique",
        en: "Human · Confidential · Pragmatic",
      } satisfies Record<Locale, string>,
      label: {
        fr: "Approche",
        en: "Approach",
      } satisfies Record<Locale, string>,
    },
  ] as const,

  confidence: {
    eyebrow: {
      fr: "Confiance",
      en: "Trust",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Un cadre clair, confidentiel et opérationnel",
      en: "A clear, confidential and operational framework",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Des repères concrets pour les organisations qui cherchent un accompagnement sérieux, discret et adapté aux contextes internationaux.",
      en: "Clear reference points for organisations seeking serious, discreet support adapted to international contexts.",
    } satisfies Record<Locale, string>,
    items: [
      {
        id: "regions",
        icon: "globe",
        label: {
          fr: "Zones d’intervention",
          en: "Areas of intervention",
        } satisfies Record<Locale, string>,
        value: {
          fr: "Afrique, Europe et Moyen-Orient",
          en: "Africa, Europe and the Middle East",
        } satisfies Record<Locale, string>,
        detail: {
          fr: "Présence terrain et accompagnement à distance, selon le contexte de chaque organisation.",
          en: "On-site presence and remote support, tailored to each organisation’s context.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "languages",
        icon: "languages",
        label: {
          fr: "Langues de prestation",
          en: "Service languages",
        } satisfies Record<Locale, string>,
        value: {
          fr: "Français, anglais et italien",
          en: "French, English and Italian",
        } satisfies Record<Locale, string>,
        detail: {
          fr: "Des interventions dans la langue de travail des équipes, pour plus de clarté et d’adhésion.",
          en: "Support delivered in teams’ working language for greater clarity and buy-in.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "confidentiality",
        icon: "shield",
        label: {
          fr: "Cadre d’intervention",
          en: "Working framework",
        } satisfies Record<Locale, string>,
        value: {
          fr: "Humaine, confidentielle et pragmatique",
          en: "Human, confidential and pragmatic",
        } satisfies Record<Locale, string>,
        detail: {
          fr: "Un cadre discret, structuré et orienté résultats, adapté aux situations sensibles.",
          en: "A discreet, structured and results-oriented framework suited to sensitive situations.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "domains",
        icon: "layers",
        label: {
          fr: "Domaines d’expertise",
          en: "Areas of expertise",
        } satisfies Record<Locale, string>,
        value: {
          fr: "Quatre expertises complémentaires",
          en: "Four complementary expertise areas",
        } satisfies Record<Locale, string>,
        detail: {
          fr: "Prévention, mobilité, crise et formations, mobilisées selon le besoin réel.",
          en: "Prevention, mobility, crisis and training, engaged according to real need.",
        } satisfies Record<Locale, string>,
      },
    ] as const,
  },

  impact: {
    eyebrow: {
      fr: "Notre impact",
      en: "Our impact",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Des interventions conçues pour produire un impact durable",
      en: "Support designed to deliver lasting impact",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Nous aidons les organisations à préserver l'équilibre de leurs équipes, renforcer leur capacité d'adaptation et traverser les périodes exigeantes avec davantage de structure.",
      en: "We help organisations protect team well-being, strengthen adaptability and navigate demanding periods with greater structure.",
    } satisfies Record<Locale, string>,

    items: {
      fr: [
        "Préserver la santé mentale au travail",
        "Réduire le stress et l'épuisement professionnel",
        "Renforcer la résilience individuelle et collective",
        "Améliorer la cohésion d'équipe",
        "Fournir des outils concrets",
      ],
      en: [
        "Protect workplace mental health",
        "Reduce stress and professional exhaustion",
        "Strengthen individual and collective resilience",
        "Improve team cohesion",
        "Provide practical tools",
      ],
    } satisfies Record<Locale, readonly string[]>,
  },

  methodology: {
    eyebrow: {
      fr: "Notre démarche",
      en: "Our approach",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Un accompagnement structuré, adapté à chaque contexte",
      en: "Structured support tailored to each context",
    } satisfies Record<Locale, string>,

    steps: [
      {
        id: "understand",
        number: "01",
        title: {
          fr: "Comprendre",
          en: "Understand",
        } satisfies Record<Locale, string>,
        description: {
          fr: "Analyser les enjeux humains, organisationnels et interculturels propres à la situation.",
          en: "Analyse the human, organisational and cross-cultural challenges specific to the situation.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "prevent",
        number: "02",
        title: {
          fr: "Prévenir",
          en: "Prevent",
        } satisfies Record<Locale, string>,
        description: {
          fr: "Identifier les facteurs de risque et mettre en place des mesures adaptées au contexte.",
          en: "Identify risk factors and implement measures suited to the context.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "support",
        number: "03",
        title: {
          fr: "Accompagner",
          en: "Support",
        } satisfies Record<Locale, string>,
        description: {
          fr: "Proposer un soutien individuel, collectif ou managérial, en présentiel ou à distance.",
          en: "Provide individual, collective or managerial support, on-site or remotely.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "strengthen",
        number: "04",
        title: {
          fr: "Renforcer",
          en: "Strengthen",
        } satisfies Record<Locale, string>,
        description: {
          fr: "Transmettre des outils pratiques pour inscrire la résilience dans la durée.",
          en: "Share practical tools to support long-term resilience.",
        } satisfies Record<Locale, string>,
      },
    ] as const satisfies readonly MethodologyStep[],
  },

  profile: {
    eyebrow: {
      fr: "Direction",
      en: "Leadership",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Une approche humaine au service des organisations",
      en: "A people-centred approach supporting organisations",
    } satisfies Record<Locale, string>,

    name: "Jocelyne Katshinda",

    role: {
      fr: "Fondatrice et Administratrice générale",
      en: "Founder and Managing Director",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Jocelyne Katshinda dirige Resilience@Work, une structure spécialisée dans le bien-être psychosocial, la prévention des risques psychosociaux et l'accompagnement des organisations évoluant dans des contextes internationaux et multiculturels.",
      en: "Jocelyne Katshinda leads Resilience@Work, an organisation specialising in psychosocial well-being, psychosocial risk prevention and support for organisations operating in international and multicultural environments.",
    } satisfies Record<Locale, string>,

    highlights: [
      {
        id: "regions",
        label: {
          fr: "Afrique · Europe · Moyen-Orient",
          en: "Africa · Europe · Middle East",
        } satisfies Record<Locale, string>,
      },
      {
        id: "focus",
        label: {
          fr: "Bien-être psychosocial",
          en: "Psychosocial well-being",
        } satisfies Record<Locale, string>,
      },
      {
        id: "framework",
        label: {
          fr: "Cadre confidentiel et opérationnel",
          en: "Confidential and operational framework",
        } satisfies Record<Locale, string>,
      },
    ] as const,

    image: assets.jocelyne.portrait,
    portfolioCta: {
      label: {
        fr: "Voir le parcours",
        en: "View background",
      } satisfies Record<Locale, string>,
      route: "jocelyneKatshinda" as const,
      variant: "primary" as const,
    },
    cta: globalCtas.contactUs,
  },

  finalCta: {
    eyebrow: {
      fr: "Échangeons",
      en: "Let's connect",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Construisons des environnements de travail plus résilients.",
      en: "Let's build more resilient work environments.",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Vous souhaitez prévenir les risques psychosociaux, accompagner une équipe internationale ou structurer un dispositif de soutien adapté à votre organisation ? Échangeons sur vos besoins.",
      en: "Would you like to prevent psychosocial risks, support an international team or structure a support programme tailored to your organisation? Let's discuss your needs.",
    } satisfies Record<Locale, string>,

    primaryCta: globalCtas.contactUs,
    secondaryCta: globalCtas.whatsapp,
  },
} as const;
