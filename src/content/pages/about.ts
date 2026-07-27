import type { Locale } from "@/types/content";
import { assets } from "../assets";
import { globalCtas } from "../navigation";

export const aboutPage = {
  hero: {
    eyebrow: {
      fr: "À propos de Resilience@Work",
      en: "About Resilience@Work",
      it: "A proposito di Resilience@Work",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Renforcer les organisations en plaçant l'humain au cœur de leur résilience.",
      en: "Strengthening organisations by placing people at the heart of resilience.",
      it: "Rafforzare le organizzazioni mettendo le persone al centro della loro resilienza.",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Resilience@Work accompagne les organisations exposées à des situations professionnelles complexes, multiculturelles ou géographiquement dispersées.",
      en: "Resilience@Work supports organisations navigating complex, multicultural or geographically distributed professional environments.",
      it: "Resilience@Work accompagna le organizzazioni esposte a situazioni professionali complesse, multiculturali o geograficamente distribuite.",
    } satisfies Record<Locale, string>,
  },

  mission: {
    eyebrow: {
      fr: "Notre mission",
      en: "Our mission",
      it: "La nostra missione",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Aider les organisations et leurs collaborateurs à rester solides, efficaces et alignés.",
      en: "Helping organisations and their people remain strong, effective and aligned.",
      it: "Aiutare le organizzazioni e i loro collaboratori a rimanere solidi, efficaci e allineati.",
    } satisfies Record<Locale, string>,
    paragraphs: {
      fr: [
        "Nous croyons qu'une équipe résiliente est une équipe capable de traverser les crises, de s'adapter et de maintenir durablement sa performance.",
        "Nos interventions privilégient une approche humaine, confidentielle et pragmatique, adaptée aux réalités du terrain.",
      ],
      en: [
        "We believe that a resilient team is able to navigate crises, adapt and sustain long-term performance.",
        "Our interventions follow a human, confidential and pragmatic approach tailored to real-world conditions.",
      ],
      it: [
        "Crediamo che un team resiliente sia in grado di attraversare le crisi, di adattarsi e di mantenere durevolmente le proprie performance.",
        "I nostri interventi privilegiano un approccio umano, confidenziale e pragmatico, adattato alle realtà del campo.",
      ],
    } satisfies Record<Locale, readonly string[]>,
  },

  values: [
    {
      id: "human",
      title: {
        fr: "Une approche humaine",
        en: "A people-centred approach",
        it: "Un approccio umano",
      } satisfies Record<Locale, string>,
      description: {
        fr: "Placer l'écoute, l'équilibre et les réalités humaines au cœur de chaque intervention.",
        en: "Place listening, well-being and human realities at the centre of every intervention.",
        it: "Porre l'ascolto, l'equilibrio e le realtà umane al centro di ogni intervento.",
      } satisfies Record<Locale, string>,
    },
    {
      id: "confidential",
      title: {
        fr: "La confidentialité",
        en: "Confidentiality",
        it: "La riservatezza",
      } satisfies Record<Locale, string>,
      description: {
        fr: "Créer les conditions nécessaires à un accompagnement professionnel respectueux et sécurisant.",
        en: "Create the conditions required for respectful and reassuring professional support.",
        it: "Creare le condizioni necessarie per un accompagnamento professionale rispettoso e rassicurante.",
      } satisfies Record<Locale, string>,
    },
    {
      id: "pragmatic",
      title: {
        fr: "Des outils pragmatiques",
        en: "Practical tools",
        it: "Strumenti pragmatici",
      } satisfies Record<Locale, string>,
      description: {
        fr: "Proposer des repères concrets et mobilisables dans les environnements professionnels.",
        en: "Provide concrete reference points that can be applied in professional environments.",
        it: "Proporre riferimenti concreti e applicabili negli ambienti professionali.",
      } satisfies Record<Locale, string>,
    },
    {
      id: "international",
      title: {
        fr: "Une expertise internationale",
        en: "International expertise",
        it: "Un'expertise internazionale",
      } satisfies Record<Locale, string>,
      description: {
        fr: "Adapter les interventions aux contextes multiculturels et aux enjeux de mobilité.",
        en: "Adapt interventions to multicultural contexts and mobility-related challenges.",
        it: "Adattare gli interventi ai contesti multiculturali e alle sfide della mobilità.",
      } satisfies Record<Locale, string>,
    },
  ] as const,

  visionQuote: {
    fr: "Ne jamais cesser d'apprendre, car la vie ne cesse jamais d'enseigner.",
    en: "Never stop learning because life never stops teaching.",
    it: "Non smettere mai di imparare, perché la vita non smette mai di insegnare.",
  } satisfies Record<Locale, string>,

  profile: {
    name: "Jocelyne Katshinda",
    role: {
      fr: "Fondatrice et Administratrice générale",
      en: "Founder and Managing Director",
      it: "Fondatrice e Amministratrice generale",
    } satisfies Record<Locale, string>,
    image: assets.jocelyne.portrait,
  },

  cta: globalCtas.contactUs,
} as const;
