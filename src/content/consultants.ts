import type { Locale, LocalizedParagraphs, LocalizedStringArray, LocalizedText } from "@/types/content";

export type Consultant = {
  id: string;
  name: string;
  role: LocalizedText;
  /** Short hook under the name */
  lead: LocalizedText;
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
};

export const consultantsSection = {
  eyebrow: {
    fr: "Équipe",
    en: "Team",
  } satisfies Record<Locale, string>,
  title: {
    fr: "Consultantes affiliées",
    en: "Affiliated consultants",
  } satisfies Record<Locale, string>,
  description: {
    fr: "Un réseau de consultantes expérimentées, mobilisées selon les besoins de chaque mission — formation, coaching, prévention et situations de crise.",
    en: "A network of experienced consultants, engaged according to each assignment — training, coaching, prevention and crisis situations.",
  } satisfies Record<Locale, string>,
} as const;

export const consultants: readonly Consultant[] = [
  {
    id: "murielle-de-potesta",
    name: "Murielle de Potesta",
    role: {
      fr: "Formatrice & coach professionnelle",
      en: "Corporate trainer & professional coach",
    },
    lead: {
      fr: "23 ans de formation comportementale en Europe et aux États-Unis, au service du leadership et de la posture managériale.",
      en: "23 years of behavioural training across Europe and the United States, supporting leadership and managerial posture.",
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
    },
    image: {
      src: "/images/consultants/murielle-de-potesta.webp",
      alt: {
        fr: "Portrait de Murielle de Potesta, formatrice et coach professionnelle affiliée à Resilience@Work.",
        en: "Portrait of Murielle de Potesta, corporate trainer and professional coach affiliated with Resilience@Work.",
      },
      width: 604,
      height: 900,
      objectPosition: "center 18%",
    },
  },
  {
    id: "vanessa-wright",
    name: "Vanessa Wright",
    role: {
      fr: "Formatrice, animatrice & coach",
      en: "Trainer, facilitator & coach",
    },
    lead: {
      fr: "Plus de 20 ans d’expérience en formation, animation d’équipe et coaching d’adultes en entreprise et en institutions.",
      en: "More than 20 years of experience in training, team facilitation and adult coaching in companies and institutions.",
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
    },
    bio: {
      fr: [
        "Avec plus de 20 ans d’expérience dans la formation, l’animation d’équipe et le coaching d’adultes en entreprise, Vanessa explore l’univers de la communication et du développement personnel dans divers secteurs, au sein d’institutions, d’entreprises et lors de sessions individuelles de coaching.",
        "Elle anime des ateliers sur le développement des compétences en communication, risques psychosociaux, intelligence émotionnelle, programmation neuro-linguistique, gestion du changement, prise de parole en public et animation de formations.",
        "Certifiée maître praticienne en PNL (NLPNL) et coach de vie, elle est aussi formée à l’hypnose ericksonienne, à la thérapie brève, à l’entretien motivationnel et à la sophrologie.",
      ],
      en: [
        "With more than 20 years of experience in training, team facilitation and adult coaching in business settings, Vanessa works on communication and personal development across sectors — within institutions, companies and individual coaching sessions.",
        "She facilitates workshops on communication skills, psychosocial risks, emotional intelligence, NLP, change management, public speaking and train-the-trainer practices.",
        "A certified NLP Master Practitioner (NLPNL) and life coach, she is also trained in Ericksonian hypnosis, brief therapy, motivational interviewing and sophrology.",
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
    },
    image: {
      src: "/images/consultants/vanessa-wright.webp",
      alt: {
        fr: "Portrait de Vanessa Wright, formatrice et coach affiliée à Resilience@Work.",
        en: "Portrait of Vanessa Wright, trainer and coach affiliated with Resilience@Work.",
      },
      width: 720,
      height: 900,
      objectPosition: "center 20%",
    },
  },
  {
    id: "rym-mimouna-herdies",
    name: "Rym Mimouna-Herdies",
    role: {
      fr: "Psychologue — RPS & situations de crise",
      en: "Psychologist — psychosocial risks & crisis situations",
    },
    lead: {
      fr: "Près de 20 ans en psychologie clinique et risques psychosociaux au travail, y compris l’intervention d’urgence en crise.",
      en: "Nearly 20 years in clinical psychology and workplace psychosocial risks, including emergency crisis intervention.",
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
    },
    image: {
      src: "/images/consultants/rym-mimouna-herdies.webp",
      alt: {
        fr: "Portrait de Rym Mimouna-Herdies, psychologue affiliée à Resilience@Work.",
        en: "Portrait of Rym Mimouna-Herdies, psychologist affiliated with Resilience@Work.",
      },
      width: 600,
      height: 900,
      objectPosition: "center 15%",
    },
  },
] as const;
