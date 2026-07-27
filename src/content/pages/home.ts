import type { Locale, MethodologyStep } from "@/types/content";
import { assets } from "../assets";
import { globalCtas } from "../navigation";

export const homePage = {
  hero: {
    eyebrow: {
      fr: "Bien-être psychosocial · Résilience organisationnelle",
      en: "Psychosocial well-being · Organisational resilience",
      it: "Benessere psicosociale · Resilienza organizzativa",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Des équipes plus résilientes dans les environnements les plus exigeants.",
      en: "More resilient teams in the most demanding environments.",
      it: "Team più resilienti negli ambienti più esigenti.",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Resilience@Work accompagne les organisations, les managers et les collaborateurs exposés à des situations professionnelles complexes, multiculturelles ou internationales.",
      en: "Resilience@Work supports organisations, managers and employees navigating complex, multicultural or international professional environments.",
      it: "Resilience@Work accompagna organizzazioni, manager e collaboratori esposti a situazioni professionali complesse, multiculturali o internazionali.",
    } satisfies Record<Locale, string>,

    supportingText: {
      fr: "Prévention des risques psychosociaux, santé mentale au travail et performance humaine durable.",
      en: "Psychosocial risk prevention, workplace mental health and sustainable human performance.",
      it: "Prevenzione dei rischi psicosociali, salute mentale sul lavoro e performance umana sostenibile.",
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
      fr: "L'humain au cœur de la résilience organisationnelle",
      en: "People at the heart of organisational resilience",
      it: "Le persone al centro della resilienza organizzativa",
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
      it: [
        "Resilience@Work accompagna le imprese nella creazione di ambienti di lavoro sani, performanti e orientati alle persone.",
        "Il nostro approccio multidisciplinare risponde alle realtà dei team multiculturali, dei collaboratori espatriati e delle organizzazioni che operano in contesti sensibili.",
      ],
    } satisfies Record<Locale, readonly string[]>,
  },

  expertise: {
    eyebrow: {
      fr: "Expertises",
      en: "Expertise",
      it: "Competenze",
    } satisfies Record<Locale, string>,

    title: {
      fr: "Quatre domaines d'intervention pour renforcer durablement les équipes",
      en: "Four areas of expertise designed to strengthen teams over time",
      it: "Quattro ambiti di intervento per rafforzare i team in modo duraturo",
    } satisfies Record<Locale, string>,

    description: {
      fr: "Des accompagnements conçus pour prévenir les risques psychosociaux, soutenir les équipes internationales et structurer des réponses adaptées aux contextes sensibles.",
      en: "Support designed to prevent psychosocial risks, guide international teams and structure responses suited to demanding contexts.",
      it: "Percorsi di accompagnamento progettati per prevenire i rischi psicosociali, sostenere i team internazionali e strutturare risposte adeguate ai contesti sensibili.",
    } satisfies Record<Locale, string>,

    cta: {
      label: {
        fr: "Découvrir toutes nos expertises",
        en: "Explore all expertise areas",
        it: "Scopri tutte le nostre competenze",
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
          fr: "Quatre expertises complémentaires",
          en: "Four complementary expertise areas",
          it: "Quattro competenze complementari",
        } satisfies Record<Locale, string>,
        detail: {
          fr: "Prévention, mobilité, crise et formations, mobilisées selon le besoin réel.",
          en: "Prevention, mobility, crisis and training, engaged according to real need.",
          it: "Prevenzione, mobilità, crisi e formazione, mobilitate in base al bisogno reale.",
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
          fr: "Prévenir",
          en: "Prevent",
          it: "Prevenire",
        } satisfies Record<Locale, string>,
        description: {
          fr: "Identifier les facteurs de risque et mettre en place des mesures adaptées au contexte.",
          en: "Identify risk factors and implement measures suited to the context.",
          it: "Identificare i fattori di rischio e mettere in atto misure adeguate al contesto.",
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
      fr: "Jocelyne Katshinda dirige Resilience@Work, une structure spécialisée dans le bien-être psychosocial, la prévention des risques psychosociaux et l'accompagnement des organisations évoluant dans des contextes internationaux et multiculturels.",
      en: "Jocelyne Katshinda leads Resilience@Work, an organisation specialising in psychosocial well-being, psychosocial risk prevention and support for organisations operating in international and multicultural environments.",
      it: "Jocelyne Katshinda dirige Resilience@Work, una struttura specializzata nel benessere psicosociale, nella prevenzione dei rischi psicosociali e nell'accompagnamento di organizzazioni che operano in contesti internazionali e multiculturali.",
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
          fr: "Bien-être psychosocial",
          en: "Psychosocial well-being",
          it: "Benessere psicosociale",
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
      fr: "Vous souhaitez prévenir les risques psychosociaux, accompagner une équipe internationale ou structurer un dispositif de soutien adapté à votre organisation ? Échangeons sur vos besoins.",
      en: "Would you like to prevent psychosocial risks, support an international team or structure a support programme tailored to your organisation? Let's discuss your needs.",
      it: "Desiderate prevenire i rischi psicosociali, accompagnare un team internazionale o strutturare un dispositivo di supporto adatto alla vostra organizzazione? Parliamone insieme.",
    } satisfies Record<Locale, string>,

    primaryCta: globalCtas.contactUs,
    secondaryCta: globalCtas.whatsapp,
  },
} as const;
