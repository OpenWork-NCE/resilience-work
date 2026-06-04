import type { Locale } from "@/types/content";
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
      fr: "Nous intervenons pour prévenir les risques psychosociaux, renforcer la santé mentale au travail et soutenir durablement la performance humaine des organisations.",
      en: "We help prevent psychosocial risks, strengthen workplace mental health and sustain long-term human performance within organisations.",
    } satisfies Record<Locale, string>,

    primaryCta: globalCtas.discoverExpertise,
    secondaryCta: globalCtas.scheduleConversation,
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

  international: {
    eyebrow: {
      fr: "Présence internationale",
      en: "International reach",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Une expertise pensée pour les contextes internationaux",
      en: "Expertise designed for international contexts",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Resilience@Work intervient auprès d'organisations implantées en Afrique, en Europe et au Moyen-Orient. Les prestations sont proposées en présentiel ou à distance, en français, en anglais et en italien.",
      en: "Resilience@Work supports organisations across Africa, Europe and the Middle East. Services are delivered on-site or remotely in French, English and Italian.",
    } satisfies Record<Locale, string>,

    image: assets.international.overview,
    cta: globalCtas.learnMore,
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
      fr: "Fondatrice & Administratrice générale",
      en: "Founder & Managing Director",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Jocelyne Katshinda est la fondatrice de Resilience@Work, une structure spécialisée dans le bien-être psychosocial, la prévention des risques psychosociaux et l'accompagnement des organisations évoluant dans des contextes internationaux et multiculturels.",
      en: "Jocelyne Katshinda is the founder of Resilience@Work, an organisation specialising in psychosocial well-being, psychosocial risk prevention and support for organisations operating in international and multicultural environments.",
    } satisfies Record<Locale, string>,

    image: assets.jocelyne.portrait,
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
