import type { Locale, MethodologyStep } from "@/types/content";
import { assets } from "../assets";
import { globalCtas } from "../navigation";

export const homePage = {
  hero: {
    eyebrow: {
      fr: "Soutien psychologique · Crise internationale · Santé mentale",
      en: "Psychological support · International crisis · Mental health",
      it: "Sostegno psicologico · Crisi internazionale · Salute mentale",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Un soutien humain après l’incident, et dans les crises internationales.",
      en: "Human support after the incident, and in international crises.",
      it: "Un sostegno umano dopo l’incidente, e nelle crisi internazionali.",
    } satisfies Record<Locale, string>,

    titleLines: {
      fr: ["Après l’incident.", "Un soutien humain."],
      en: ["After the incident.", "Human support."],
      it: ["Dopo l’incidente.", "Un sostegno umano."],
    } satisfies Record<Locale, readonly [string, string]>,

    description: {
      fr: "Resilience@Work intervient auprès des organisations confrontées à un incident critique, à une situation de crise en mobilité internationale, ou à un besoin de sensibilisation sur le bien-être et la santé mentale.",
      en: "Resilience@Work works with organisations facing a critical incident, a crisis in international mobility, or a need to raise awareness of well-being and mental health.",
      it: "Resilience@Work interviene presso organizzazioni confrontate con un incidente critico, una situazione di crisi in mobilità internazionale, o un bisogno di sensibilizzazione su benessere e salute mentale.",
    } satisfies Record<Locale, string>,

    supportingText: {
      fr: "Entretiens individuels, débriefing collectif, appui en crise internationale, formations et workshops.",
      en: "Individual interviews, collective debriefing, international crisis support, training and workshops.",
      it: "Colloqui individuali, debriefing collettivo, sostegno in crisi internazionale, formazioni e workshop.",
    } satisfies Record<Locale, string>,

    scrollHint: {
      fr: "Découvrir",
      en: "Explore",
      it: "Scopri",
    } satisfies Record<Locale, string>,

    primaryCta: globalCtas.scheduleConversation,
    secondaryCta: globalCtas.discoverExpertise,
    image: assets.hero.main,
  },

  intro: {
    eyebrow: {
      fr: "Notre approche",
      en: "Our approach",
      it: "Il nostro approccio",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Trois activités, un cadre confidentiel",
      en: "Three activities, one confidential framework",
      it: "Tre attività, un quadro confidenziale",
    } satisfies Record<Locale, string>,

    paragraphs: {
      fr: [
        "Resilience@Work intervient de façon ciblée : après un événement critique, dans une crise liée à la mobilité internationale, ou pour sensibiliser au bien-être et à la santé mentale.",
        "L’approche reste humaine, confidentielle et pragmatique. Le détail se précise avec vous.",
      ],
      en: [
        "Resilience@Work intervenes in a focused way: after a critical event, in a crisis linked to international mobility, or to raise awareness of well-being and mental health.",
        "The approach remains human, confidential and pragmatic. The details can be clarified with you.",
      ],
      it: [
        "Resilience@Work interviene in modo mirato: dopo un evento critico, in una crisi legata alla mobilità internazionale, o per sensibilizzare su benessere e salute mentale.",
        "L’approccio resta umano, confidenziale e pragmatico. I dettagli si precisano insieme a voi.",
      ],
    } satisfies Record<Locale, readonly string[]>,
  },

  expertise: {
    eyebrow: {
      fr: "Activités",
      en: "Activities",
      it: "Attività",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Trois activités, clairement identifiables",
      en: "Three activities, clearly defined",
      it: "Tre attività, chiaramente identificabili",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Support psychologique post-incident, management de crise en mobilité internationale, formations et workshops sur le bien-être et la santé mentale.",
      en: "Post-incident psychological support, crisis management in international mobility, training and workshops on well-being and mental health.",
      it: "Supporto psicologico post-incidente, gestione delle crisi nella mobilità internazionale, formazioni e workshop su benessere e salute mentale.",
    } satisfies Record<Locale, string>,

    cta: {
      label: {
        fr: "Voir nos activités",
        en: "See our activities",
        it: "Vedi le nostre attività",
      } satisfies Record<Locale, string>,
      route: "expertise",
      variant: "secondary",
    },

    itemCta: {
      label: {
        fr: "En savoir plus",
        en: "Learn more",
        it: "Scopri di più",
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
        it: "Africa · Europa · Medio Oriente",
      } satisfies Record<Locale, string>,
      label: {
        fr: "Présence internationale",
        en: "International reach",
        it: "Presenza internazionale",
      } satisfies Record<Locale, string>,
    },
    {
      id: "formats",
      value: {
        fr: "Présentiel et distanciel",
        en: "On-site and remote",
        it: "In presenza e a distanza",
      } satisfies Record<Locale, string>,
      label: {
        fr: "Formats d'intervention",
        en: "Delivery formats",
        it: "Modalità di intervento",
      } satisfies Record<Locale, string>,
    },
    {
      id: "languages",
      value: {
        fr: "Français · Anglais · Italien",
        en: "French · English · Italian",
        it: "Francese · Inglese · Italiano",
      } satisfies Record<Locale, string>,
      label: {
        fr: "Langues de prestation",
        en: "Service languages",
        it: "Lingue di erogazione",
      } satisfies Record<Locale, string>,
    },
    {
      id: "approach",
      value: {
        fr: "Humaine · Confidentielle · Pragmatique",
        en: "Human · Confidential · Pragmatic",
        it: "Umana · Confidenziale · Pragmatica",
      } satisfies Record<Locale, string>,
      label: {
        fr: "Approche",
        en: "Approach",
        it: "Approccio",
      } satisfies Record<Locale, string>,
    },
  ] as const,

  confidence: {
    eyebrow: {
      fr: "Confiance",
      en: "Trust",
      it: "Fiducia",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Un cadre clair, confidentiel et opérationnel",
      en: "A clear, confidential and operational framework",
      it: "Un quadro chiaro, confidenziale e operativo",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Des repères concrets pour les organisations qui cherchent un accompagnement sérieux, discret et adapté aux contextes internationaux.",
      en: "Clear reference points for organisations seeking serious, discreet support adapted to international contexts.",
      it: "Riferimenti concreti per le organizzazioni che cercano un accompagnamento serio, discreto e adatto ai contesti internazionali.",
    } satisfies Record<Locale, string>,
    items: [
      {
        id: "regions",
        icon: "globe",
        label: {
          fr: "Zones d’intervention",
          en: "Areas of intervention",
          it: "Aree di intervento",
        } satisfies Record<Locale, string>,
        value: {
          fr: "Afrique, Europe et Moyen-Orient",
          en: "Africa, Europe and the Middle East",
          it: "Africa, Europa e Medio Oriente",
        } satisfies Record<Locale, string>,
        detail: {
          fr: "Présence terrain et accompagnement à distance, selon le contexte de chaque organisation.",
          en: "On-site presence and remote support, tailored to each organisation’s context.",
          it: "Presenza sul campo e accompagnamento a distanza, in base al contesto di ciascuna organizzazione.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "languages",
        icon: "languages",
        label: {
          fr: "Langues de prestation",
          en: "Service languages",
          it: "Lingue di erogazione",
        } satisfies Record<Locale, string>,
        value: {
          fr: "Français, anglais et italien",
          en: "French, English and Italian",
          it: "Francese, inglese e italiano",
        } satisfies Record<Locale, string>,
        detail: {
          fr: "Des interventions dans la langue de travail des équipes, pour plus de clarté et d’adhésion.",
          en: "Support delivered in teams’ working language for greater clarity and buy-in.",
          it: "Interventi nella lingua di lavoro dei team, per maggiore chiarezza e adesione.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "confidentiality",
        icon: "shield",
        label: {
          fr: "Cadre d’intervention",
          en: "Working framework",
          it: "Quadro di intervento",
        } satisfies Record<Locale, string>,
        value: {
          fr: "Humaine, confidentielle et pragmatique",
          en: "Human, confidential and pragmatic",
          it: "Umano, confidenziale e pragmatico",
        } satisfies Record<Locale, string>,
        detail: {
          fr: "Un cadre discret, structuré et orienté résultats, adapté aux situations sensibles.",
          en: "A discreet, structured and results-oriented framework suited to sensitive situations.",
          it: "Un quadro discreto, strutturato e orientato ai risultati, adatto alle situazioni sensibili.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "domains",
        icon: "layers",
        label: {
          fr: "Domaines d’expertise",
          en: "Areas of expertise",
          it: "Ambiti di competenza",
        } satisfies Record<Locale, string>,
        value: {
          fr: "Trois activités complémentaires",
          en: "Three complementary activities",
          it: "Tre attività complementari",
        } satisfies Record<Locale, string>,
        detail: {
          fr: "Support post-incident, crise en mobilité internationale, formations et workshops.",
          en: "Post-incident support, crisis in international mobility, training and workshops.",
          it: "Supporto post-incidente, crisi in mobilità internazionale, formazioni e workshop.",
        } satisfies Record<Locale, string>,
      },
    ] as const,
  },

  impact: {
    eyebrow: {
      fr: "Notre impact",
      en: "Our impact",
      it: "Il nostro impatto",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Des interventions conçues pour produire un impact durable",
      en: "Support designed to deliver lasting impact",
      it: "Interventi progettati per produrre un impatto duraturo",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Nous aidons les organisations à préserver l'équilibre de leurs équipes, renforcer leur capacité d'adaptation et traverser les périodes exigeantes avec davantage de structure.",
      en: "We help organisations protect team well-being, strengthen adaptability and navigate demanding periods with greater structure.",
      it: "Aiutiamo le organizzazioni a preservare l'equilibrio dei propri team, rafforzare la capacità di adattamento e attraversare i periodi impegnativi con maggiore struttura.",
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
      it: [
        "Preservare la salute mentale sul lavoro",
        "Ridurre lo stress e l'esaurimento professionale",
        "Rafforzare la resilienza individuale e collettiva",
        "Migliorare la coesione del team",
        "Fornire strumenti concreti",
      ],
    } satisfies Record<Locale, readonly string[]>,

    /** Supporting lines shown on compact bento cards (indices 3 and 4). */
    compactDetails: {
      fr: [
        "Soutien à la coordination humaine dans les périodes exigeantes.",
        "Des repères concrets pour inscrire l’accompagnement dans la durée.",
      ],
      en: [
        "Support for human coordination during demanding periods.",
        "Practical reference points that help support last over time.",
      ],
      it: [
        "Sostegno alla coordinazione umana nei periodi impegnativi.",
        "Riferimenti concreti per iscrivere l’accompagnamento nel tempo.",
      ],
    } satisfies Record<Locale, readonly string[]>,
  },

  methodology: {
    eyebrow: {
      fr: "Notre démarche",
      en: "Our approach",
      it: "Il nostro metodo",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Un accompagnement structuré, adapté à chaque contexte",
      en: "Structured support tailored to each context",
      it: "Un accompagnamento strutturato, adattato a ogni contesto",
    } satisfies Record<Locale, string>,

    steps: [
      {
        id: "understand",
        number: "01",
        title: {
          fr: "Comprendre",
          en: "Understand",
          it: "Comprendere",
        } satisfies Record<Locale, string>,
        description: {
          fr: "Analyser les enjeux humains, organisationnels et interculturels propres à la situation.",
          en: "Analyse the human, organisational and cross-cultural challenges specific to the situation.",
          it: "Analizzare le sfide umane, organizzative e interculturali proprie della situazione.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "prevent",
        number: "02",
        title: {
          fr: "Intervenir",
          en: "Intervene",
          it: "Intervenire",
        } satisfies Record<Locale, string>,
        description: {
          fr: "Proposer le format adapté : entretien individuel, débriefing collectif, appui en crise ou session de sensibilisation.",
          en: "Propose the right format: individual interview, collective debriefing, crisis support or awareness session.",
          it: "Proporre il formato adatto: colloquio individuale, debriefing collettivo, sostegno in crisi o sessione di sensibilizzazione.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "support",
        number: "03",
        title: {
          fr: "Accompagner",
          en: "Support",
          it: "Accompagnare",
        } satisfies Record<Locale, string>,
        description: {
          fr: "Proposer un soutien individuel, collectif ou managérial, en présentiel ou à distance.",
          en: "Provide individual, collective or managerial support, on-site or remotely.",
          it: "Offrire un sostegno individuale, collettivo o manageriale, in presenza o a distanza.",
        } satisfies Record<Locale, string>,
      },
      {
        id: "strengthen",
        number: "04",
        title: {
          fr: "Renforcer",
          en: "Strengthen",
          it: "Rafforzare",
        } satisfies Record<Locale, string>,
        description: {
          fr: "Transmettre des outils pratiques pour inscrire la résilience dans la durée.",
          en: "Share practical tools to support long-term resilience.",
          it: "Trasmettere strumenti pratici per consolidare la resilienza nel tempo.",
        } satisfies Record<Locale, string>,
      },
    ] as const satisfies readonly MethodologyStep[],
  },

  profile: {
    eyebrow: {
      fr: "Direction",
      en: "Leadership",
      it: "Direzione",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Une approche humaine au service des organisations",
      en: "A people-centred approach supporting organisations",
      it: "Un approccio umano al servizio delle organizzazioni",
    } satisfies Record<Locale, string>,

    name: "Jocelyne Katshinda",

    role: {
      fr: "Fondatrice et Administratrice générale",
      en: "Founder and Managing Director",
      it: "Fondatrice e Amministratrice generale",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Jocelyne Katshinda dirige Resilience@Work. La structure propose un soutien psychologique après un incident critique, un appui en situation de crise liée à la mobilité internationale, ainsi que des formations et workshops sur le bien-être et la santé mentale.",
      en: "Jocelyne Katshinda leads Resilience@Work. The organisation provides psychological support after a critical incident, crisis support in international mobility, and training and workshops on well-being and mental health.",
      it: "Jocelyne Katshinda dirige Resilience@Work. La struttura offre un sostegno psicologico dopo un incidente critico, un appoggio in situazioni di crisi legate alla mobilità internazionale, nonché formazioni e workshop su benessere e salute mentale.",
    } satisfies Record<Locale, string>,

    highlights: [
      {
        id: "regions",
        label: {
          fr: "Afrique · Europe · Moyen-Orient",
          en: "Africa · Europe · Middle East",
          it: "Africa · Europa · Medio Oriente",
        } satisfies Record<Locale, string>,
      },
      {
        id: "focus",
        label: {
          fr: "Bien-être et santé mentale",
          en: "Well-being and mental health",
          it: "Benessere e salute mentale",
        } satisfies Record<Locale, string>,
      },
      {
        id: "framework",
        label: {
          fr: "Cadre confidentiel et opérationnel",
          en: "Confidential and operational framework",
          it: "Quadro confidenziale e operativo",
        } satisfies Record<Locale, string>,
      },
    ] as const,

    image: assets.jocelyne.portrait,
    portfolioCta: {
      label: {
        fr: "Voir le parcours",
        en: "View background",
        it: "Scopri il percorso",
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
      it: "Parliamone",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Construisons des environnements de travail plus résilients.",
      en: "Let's build more resilient work environments.",
      it: "Costruiamo ambienti di lavoro più resilienti.",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Un incident critique, une crise en mobilité internationale, une formation ou un workshop : décrivez-nous simplement le contexte.",
      en: "A critical incident, a crisis in international mobility, training or a workshop: simply describe the context.",
      it: "Un incidente critico, una crisi in mobilità internazionale, una formazione o un workshop: descriveteci semplicemente il contesto.",
    } satisfies Record<Locale, string>,

    primaryCta: globalCtas.contactUs,
    secondaryCta: globalCtas.whatsapp,
  },
} as const;
