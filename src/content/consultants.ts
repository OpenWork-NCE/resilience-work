import type { Locale, LocalizedParagraphs, LocalizedStringArray, LocalizedText } from "@/types/content";

export type Consultant = {
  id: string;
  slug: string;
  name: string;
  role: LocalizedText;
  /** Short hook under the name */
  lead: LocalizedText;
  /** Highlight quote for the intro rail */
  highlight: LocalizedText;
  /** Domain chips */
  focus: LocalizedStringArray;
  /** Full bio paragraphs */
  bio: LocalizedParagraphs;
  /** Methods / certifications */
  methods: LocalizedStringArray;
  image: {
    src: string;
    alt: LocalizedText;
    width: number;
    height: number;
    objectPosition?: string;
  };
  seo: {
    title: LocalizedText;
    description: LocalizedText;
  };
};

export const consultantsSection = {
  eyebrow: {
    fr: "Équipe",
    en: "Team",
    it: "Team",
  } satisfies Record<Locale, string>,
  title: {
    fr: "Consultantes affiliées",
    en: "Affiliated consultants",
    it: "Consulenti affiliate",
  } satisfies Record<Locale, string>,
  description: {
    fr: "Un réseau de consultantes expérimentées, mobilisées selon les besoins de chaque mission : soutien post-incident, crise internationale, webinaires et workshops.",
    en: "A network of experienced consultants, engaged according to each assignment: post-incident support, international crisis, webinars and workshops.",
    it: "Una rete di consulenti esperte, mobilitate in base alle esigenze di ogni incarico: sostegno post-incidente, crisi internazionale, webinar e workshop.",
  } satisfies Record<Locale, string>,
  cta: {
    fr: "Voir le parcours complet",
    en: "View full background",
    it: "Vedi il percorso completo",
  } satisfies Record<Locale, string>,
  affiliatedBadge: {
    fr: "Consultante affiliée",
    en: "Affiliated consultant",
    it: "Consulente affiliata",
  } satisfies Record<Locale, string>,
} as const;

export const consultantPageCopy = {
  eyebrow: {
    fr: "Consultante affiliée · Resilience@Work",
    en: "Affiliated consultant · Resilience@Work",
    it: "Consulente affiliata · Resilience@Work",
  } satisfies Record<Locale, string>,
  focusEyebrow: {
    fr: "Expertises",
    en: "Expertise",
    it: "Competenze",
  } satisfies Record<Locale, string>,
  focusTitle: {
    fr: "Domaines d’intervention",
    en: "Areas of intervention",
    it: "Aree di intervento",
  } satisfies Record<Locale, string>,
  methodsTitle: {
    fr: "Approches & certifications",
    en: "Approaches & certifications",
    it: "Approcci e certificazioni",
  } satisfies Record<Locale, string>,
  methodsEyebrow: {
    fr: "Boîte à outils",
    en: "Toolkit",
    it: "Strumenti",
  } satisfies Record<Locale, string>,
  bioEyebrow: {
    fr: "Parcours",
    en: "Background",
    it: "Percorso",
  } satisfies Record<Locale, string>,
  bioTitle: {
    fr: "Une expertise au service des organisations",
    en: "Expertise in service of organisations",
    it: "Una competenza al servizio delle organizzazioni",
  } satisfies Record<Locale, string>,
  relatedEyebrow: {
    fr: "Équipe",
    en: "Team",
    it: "Team",
  } satisfies Record<Locale, string>,
  relatedTitle: {
    fr: "Autres consultantes affiliées",
    en: "Other affiliated consultants",
    it: "Altre consulenti affiliate",
  } satisfies Record<Locale, string>,
  contactEyebrow: {
    fr: "Prendre contact",
    en: "Get in touch",
    it: "Prendere contatto",
  } satisfies Record<Locale, string>,
  contactTitle: {
    fr: "Vous souhaitez mobiliser cette expertise ?",
    en: "Would you like to engage this expertise?",
    it: "Desiderate mobilitare questa competenza?",
  } satisfies Record<Locale, string>,
  contactDescription: {
    fr: "Les missions sont coordonnées par Resilience@Work. Contactez-nous pour préciser votre besoin et identifier l’accompagnement le plus adapté.",
    en: "Assignments are coordinated by Resilience@Work. Contact us to clarify your needs and identify the most suitable support.",
    it: "Gli incarichi sono coordinati da Resilience@Work. Contattateci per precisare la vostra esigenza e individuare l’accompagnamento più adatto.",
  } satisfies Record<Locale, string>,
  contactCta: {
    fr: "Planifier un échange",
    en: "Schedule a conversation",
    it: "Pianificare un colloquio",
  } satisfies Record<Locale, string>,
  contactFormDescription: {
    fr: "Formulaire ou échange direct avec Resilience@Work",
    en: "Form or direct conversation with Resilience@Work",
    it: "Modulo o colloquio diretto con Resilience@Work",
  } satisfies Record<Locale, string>,
  whatsappLabel: {
    fr: "WhatsApp",
    en: "WhatsApp",
    it: "WhatsApp",
  } satisfies Record<Locale, string>,
  whatsappDescription: {
    fr: "Échanger rapidement avec l’équipe",
    en: "Chat quickly with the team",
    it: "Scambiare rapidamente con il team",
  } satisfies Record<Locale, string>,
  backToTeam: {
    fr: "Retour à l’équipe",
    en: "Back to the team",
    it: "Torna al team",
  } satisfies Record<Locale, string>,
  homeCta: {
    fr: "Site Resilience@Work",
    en: "Resilience@Work website",
    it: "Sito Resilience@Work",
  } satisfies Record<Locale, string>,
} as const;

export const consultants: readonly Consultant[] = [
  {
    id: "murielle-de-potesta",
    slug: "murielle-de-potesta",
    name: "Murielle de Potesta",
    role: {
      fr: "Formatrice & coach professionnelle",
      en: "Corporate trainer & professional coach",
      it: "Formatrice e coach professionale",
    },
    lead: {
      fr: "23 ans de formation comportementale en Europe et aux États-Unis, au service du leadership et de la posture managériale.",
      en: "23 years of behavioural training across Europe and the United States, supporting leadership and managerial posture.",
      it: "23 anni di formazione comportamentale in Europa e negli Stati Uniti, al servizio della leadership e della postura manageriale.",
    },
    highlight: {
      fr: "Des outils concrets pour managers et équipes, ancrés dans l’expérience terrain et les approches comportementales.",
      en: "Practical tools for managers and teams, grounded in field experience and behavioural approaches.",
      it: "Strumenti concreti per manager e team, radicati nell’esperienza sul campo e negli approcci comportamentali.",
    },
    seo: {
      title: {
        fr: "Murielle de Potesta | Consultante affiliée | Resilience@Work",
        en: "Murielle de Potesta | Affiliated consultant | Resilience@Work",
        it: "Murielle de Potesta | Consulente affiliata | Resilience@Work",
      },
      description: {
        fr: "Formatrice et coach professionnelle - communication, leadership, burnout et posture du manager coach.",
        en: "Corporate trainer and professional coach - communication, leadership, burnout and coach-manager posture.",
        it: "Formatrice e coach professionale - comunicazione, leadership, burnout e postura del manager coach.",
      },
    },
    focus: {
      fr: [
        "Communication",
        "Leadership",
        "Gestion d’équipe",
        "Burnout",
        "Stress & confiance",
      ],
      en: [
        "Communication",
        "Leadership",
        "Team management",
        "Burnout",
        "Stress & confidence",
      ],
      it: [
        "Comunicazione",
        "Leadership",
        "Gestione del team",
        "Burnout",
        "Stress e fiducia",
      ],
    },
    bio: {
      fr: [
        "Formatrice en entreprise depuis 23 ans dans les matières comportementales (communication, leadership, gestion d’équipe…), Murielle intervient dans toute l’Europe ainsi qu’aux États-Unis.",
        "Certifiée en coaching professionnel, elle anime des formations en communication et sur la posture du manager coach.",
        "Formée à la prévention et à l’accompagnement du burnout professionnel et parental, elle prend en charge des situations d’épuisement, de retour au travail, de gestion du stress et de confiance en soi.",
        "Son expérience du monde de l’entreprise, des multinationales et des institutions européennes lui permet de proposer des outils issus des neurosciences, de la PNL, de la systémique des organisations, de la communication non violente et de l’hypnose ericksonienne.",
      ],
      en: [
        "A corporate trainer for 23 years in behavioural subjects (communication, leadership, team management and more), Murielle works across Europe and the United States.",
        "A certified professional coach, she facilitates training on communication and the coach-manager posture.",
        "Trained in the prevention of and support for professional and parental burnout, she works with exhaustion, return-to-work, stress management and self-confidence situations.",
        "Her experience with business, multinationals and European institutions enables her to draw on tools from neuroscience, NLP, organisational systems thinking, non-violent communication and Ericksonian hypnosis.",
      ],
      it: [
        "Formatrice in azienda da 23 anni nelle materie comportamentali (comunicazione, leadership, gestione del team…), Murielle interviene in tutta Europa e negli Stati Uniti.",
        "Certificata in coaching professionale, anima formazioni sulla comunicazione e sulla postura del manager coach.",
        "Formata nella prevenzione e nell’accompagnamento del burnout professionale e genitoriale, si occupa di situazioni di esaurimento, rientro al lavoro, gestione dello stress e fiducia in sé.",
        "La sua esperienza nel mondo dell’impresa, delle multinazionali e delle istituzioni europee le consente di proporre strumenti provenienti dalle neuroscienze, dalla PNL, dalla sistemica delle organizzazioni, dalla comunicazione non violenta e dall’ipnosi ericksoniana.",
      ],
    },
    methods: {
      fr: [
        "Neurosciences",
        "PNL",
        "Systémique des organisations",
        "Communication non violente",
        "Hypnose ericksonienne",
      ],
      en: [
        "Neuroscience",
        "NLP",
        "Organisational systems thinking",
        "Non-violent communication",
        "Ericksonian hypnosis",
      ],
      it: [
        "Neuroscienze",
        "PNL",
        "Sistemica delle organizzazioni",
        "Comunicazione non violenta",
        "Ipnosi ericksoniana",
      ],
    },
    image: {
      src: "/images/consultants/murielle-de-potesta.webp",
      alt: {
        fr: "Portrait de Murielle de Potesta, formatrice et coach professionnelle affiliée à Resilience@Work.",
        en: "Portrait of Murielle de Potesta, corporate trainer and professional coach affiliated with Resilience@Work.",
        it: "Ritratto di Murielle de Potesta, formatrice e coach professionale affiliata a Resilience@Work.",
      },
      width: 604,
      height: 900,
      objectPosition: "center 18%",
    },
  },
  {
    id: "vanessa-wright",
    slug: "vanessa-wright",
    name: "Vanessa Wright",
    role: {
      fr: "Formatrice, animatrice & coach",
      en: "Trainer, facilitator & coach",
      it: "Formatrice, facilitatrice e coach",
    },
    lead: {
      fr: "Plus de 20 ans d’expérience en formation, animation d’équipe et coaching d’adultes en entreprise et en institutions.",
      en: "More than 20 years of experience in training, team facilitation and adult coaching in companies and institutions.",
      it: "Oltre 20 anni di esperienza in formazione, facilitazione di team e coaching per adulti in azienda e nelle istituzioni.",
    },
    highlight: {
      fr: "Une animation exigeante et humaine pour développer communication, intelligence émotionnelle et posture professionnelle.",
      en: "Rigorous and human facilitation to develop communication, emotional intelligence and professional posture.",
      it: "Una facilitazione rigorosa e umana per sviluppare comunicazione, intelligenza emotiva e postura professionale.",
    },
    seo: {
      title: {
        fr: "Vanessa Wright | Consultante affiliée | Resilience@Work",
        en: "Vanessa Wright | Affiliated consultant | Resilience@Work",
        it: "Vanessa Wright | Consulente affiliata | Resilience@Work",
      },
      description: {
        fr: "Formatrice et coach - communication, risques psychosociaux, PNL et développement des compétences en entreprise.",
        en: "Trainer and coach - communication, psychosocial risks, NLP and skills development in organisations.",
        it: "Formatrice e coach - comunicazione, rischi psicosociali, PNL e sviluppo delle competenze in azienda.",
      },
    },
    focus: {
      fr: [
        "Communication",
        "Risques psychosociaux",
        "Intelligence émotionnelle",
        "PNL",
        "Prise de parole",
      ],
      en: [
        "Communication",
        "Psychosocial risks",
        "Emotional intelligence",
        "NLP",
        "Public speaking",
      ],
      it: [
        "Comunicazione",
        "Rischi psicosociali",
        "Intelligenza emotiva",
        "PNL",
        "Parlare in pubblico",
      ],
    },
    bio: {
      fr: [
        "Avec plus de 20 ans d’expérience dans la formation, l’animation d’équipe et le coaching d’adultes en entreprise, Vanessa explore l’univers de la communication et du développement personnel dans divers secteurs, au sein d’institutions, d’entreprises et lors de sessions individuelles de coaching.",
        "Elle anime des ateliers sur le développement des compétences en communication, risques psychosociaux, intelligence émotionnelle, programmation neuro-linguistique, gestion du changement, prise de parole en public et animation de formations.",
        "Certifiée maître praticienne en PNL (NLPNL) et coach de vie, elle est aussi formée à l’hypnose ericksonienne, à la thérapie brève, à l’entretien motivationnel et à la sophrologie.",
      ],
      en: [
        "With more than 20 years of experience in training, team facilitation and adult coaching in business settings, Vanessa works on communication and personal development across sectors - within institutions, companies and individual coaching sessions.",
        "She facilitates workshops on communication skills, psychosocial risks, emotional intelligence, NLP, change management, public speaking and train-the-trainer practices.",
        "A certified NLP Master Practitioner (NLPNL) and life coach, she is also trained in Ericksonian hypnosis, brief therapy, motivational interviewing and sophrology.",
      ],
      it: [
        "Con oltre 20 anni di esperienza nella formazione, nella facilitazione di team e nel coaching per adulti in azienda, Vanessa lavora sulla comunicazione e lo sviluppo personale in diversi settori, presso istituzioni, imprese e in sessioni individuali di coaching.",
        "Anima workshop sullo sviluppo delle competenze in comunicazione, rischi psicosociali, intelligenza emotiva, programmazione neuro-linguistica, gestione del cambiamento, parlare in pubblico e animazione di formazioni.",
        "Certificata master practitioner in PNL (NLPNL) e life coach, è inoltre formata in ipnosi ericksoniana, terapia breve, colloquio motivazionale e sofrologia.",
      ],
    },
    methods: {
      fr: [
        "PNL (maître praticienne)",
        "Hypnose ericksonienne",
        "Thérapie brève",
        "Entretien motivationnel",
        "Sophrologie",
      ],
      en: [
        "NLP (Master Practitioner)",
        "Ericksonian hypnosis",
        "Brief therapy",
        "Motivational interviewing",
        "Sophrology",
      ],
      it: [
        "PNL (master practitioner)",
        "Ipnosi ericksoniana",
        "Terapia breve",
        "Colloquio motivazionale",
        "Sofrologia",
      ],
    },
    image: {
      src: "/images/consultants/vanessa-wright.webp",
      alt: {
        fr: "Portrait de Vanessa Wright, formatrice et coach affiliée à Resilience@Work.",
        en: "Portrait of Vanessa Wright, trainer and coach affiliated with Resilience@Work.",
        it: "Ritratto di Vanessa Wright, formatrice e coach affiliata a Resilience@Work.",
      },
      width: 720,
      height: 900,
      objectPosition: "center 20%",
    },
  },
  {
    id: "rym-mimouna-herdies",
    slug: "rym-mimouna-herdies",
    name: "Rym Mimouna-Herdies",
    role: {
      fr: "Psychologue - RPS & situations de crise",
      en: "Psychologist - psychosocial risks & crisis situations",
      it: "Psicologa - rischi psicosociali e situazioni di crisi",
    },
    lead: {
      fr: "Près de 20 ans en psychologie clinique et risques psychosociaux au travail, y compris l’intervention d’urgence en crise.",
      en: "Nearly 20 years in clinical psychology and workplace psychosocial risks, including emergency crisis intervention.",
      it: "Quasi 20 anni in psicologia clinica e rischi psicosociali al lavoro, incluso l’intervento di urgenza in crisi.",
    },
    highlight: {
      fr: "Une intervention structurée pour prévenir les risques, soutenir les équipes et accompagner les situations critiques.",
      en: "Structured intervention to prevent risks, support teams and accompany critical situations.",
      it: "Un intervento strutturato per prevenire i rischi, sostenere i team e accompagnare le situazioni critiche.",
    },
    seo: {
      title: {
        fr: "Rym Mimouna-Herdies | Consultante affiliée | Resilience@Work",
        en: "Rym Mimouna-Herdies | Affiliated consultant | Resilience@Work",
        it: "Rym Mimouna-Herdies | Consulente affiliata | Resilience@Work",
      },
      description: {
        fr: "Psychologue - risques psychosociaux, intervention de crise, debriefings collectifs et bien-être au travail.",
        en: "Psychologist - psychosocial risks, crisis intervention, collective debriefings and workplace well-being.",
        it: "Psicologa - rischi psicosociali, intervento di crisi, debriefing collettivi e benessere al lavoro.",
      },
    },
    focus: {
      fr: [
        "Risques psychosociaux",
        "Crise & débriefing",
        "Entretiens motivationnels",
        "Bien-être au travail",
        "Formations",
      ],
      en: [
        "Psychosocial risks",
        "Crisis & debriefing",
        "Motivational interviewing",
        "Workplace well-being",
        "Training",
      ],
      it: [
        "Rischi psicosociali",
        "Crisi e debriefing",
        "Colloqui motivazionali",
        "Benessere al lavoro",
        "Formazioni",
      ],
    },
    bio: {
      fr: [
        "Disposant d’une expérience de près de 20 ans dans le domaine de la psychologie clinique et des risques psychosociaux en situation de travail, Rym évolue au sein de secteurs très variés.",
        "Aguerrie à l’intervention d’urgence en situation de crise, elle réalise des prises en charge individuelles et organise des debriefings collectifs.",
        "Dans le cadre de la prévention des risques en entreprise, elle mène des entretiens motivationnels, anime des ateliers et dispense également de multiples formations ayant trait au bien-être au travail.",
      ],
      en: [
        "With nearly 20 years of experience in clinical psychology and psychosocial risks at work, Rym operates across a wide range of sectors.",
        "Experienced in emergency crisis intervention, she provides individual support and organises collective debriefings.",
        "In workplace risk prevention, she conducts motivational interviews, facilitates workshops and delivers numerous training sessions related to well-being at work.",
      ],
      it: [
        "Con un’esperienza di quasi 20 anni nel campo della psicologia clinica e dei rischi psicosociali in ambito lavorativo, Rym opera in settori molto diversi.",
        "Esperta nell’intervento di urgenza in situazione di crisi, realizza prese in carico individuali e organizza debriefing collettivi.",
        "Nell’ambito della prevenzione dei rischi in azienda, conduce colloqui motivazionali, anima workshop e eroga numerose formazioni relative al benessere al lavoro.",
      ],
    },
    methods: {
      fr: [
        "Psychologie clinique",
        "Intervention de crise",
        "Debriefings collectifs",
        "Entretien motivationnel",
        "Prévention RPS",
      ],
      en: [
        "Clinical psychology",
        "Crisis intervention",
        "Collective debriefings",
        "Motivational interviewing",
        "Psychosocial risk prevention",
      ],
      it: [
        "Psicologia clinica",
        "Intervento di crisi",
        "Debriefing collettivi",
        "Colloquio motivazionale",
        "Prevenzione RPS",
      ],
    },
    image: {
      src: "/images/consultants/rym-mimouna-herdies.webp",
      alt: {
        fr: "Portrait de Rym Mimouna-Herdies, psychologue affiliée à Resilience@Work.",
        en: "Portrait of Rym Mimouna-Herdies, psychologist affiliated with Resilience@Work.",
        it: "Ritratto di Rym Mimouna-Herdies, psicologa affiliata a Resilience@Work.",
      },
      width: 600,
      height: 900,
      objectPosition: "center 15%",
    },
  },
] as const;

export const consultantSlugParams = consultants.map((consultant) => ({
  slug: consultant.slug,
}));

export function getConsultantBySlug(slug: string) {
  return consultants.find((consultant) => consultant.slug === slug);
}

export function getRelatedConsultants(slug: string) {
  return consultants.filter((consultant) => consultant.slug !== slug);
}

export function getConsultantPath(slug: string) {
  return `/consultants/${slug}`;
}
