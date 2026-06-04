import type { Locale } from "@/types/content";
import { assets } from "../assets";
import { globalCtas } from "../navigation";

export const aboutPage = {
  hero: {
    eyebrow: {
      fr: "À propos de Resilience@Work",
      en: "About Resilience@Work",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Renforcer les organisations en plaçant l'humain au cœur de leur résilience.",
      en: "Strengthening organisations by placing people at the heart of resilience.",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Resilience@Work accompagne les organisations exposées à des situations professionnelles complexes, multiculturelles ou géographiquement dispersées.",
      en: "Resilience@Work supports organisations navigating complex, multicultural or geographically distributed professional environments.",
    } satisfies Record<Locale, string>,
  },

  mission: {
    eyebrow: {
      fr: "Notre mission",
      en: "Our mission",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Aider les organisations et leurs collaborateurs à rester solides, efficaces et alignés.",
      en: "Helping organisations and their people remain strong, effective and aligned.",
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
    } satisfies Record<Locale, readonly string[]>,
  },

  values: [
    {
      id: "human",
      title: {
        fr: "Une approche humaine",
        en: "A people-centred approach",
      } satisfies Record<Locale, string>,
      description: {
        fr: "Placer l'écoute, l'équilibre et les réalités humaines au cœur de chaque intervention.",
        en: "Place listening, well-being and human realities at the centre of every intervention.",
      } satisfies Record<Locale, string>,
    },
    {
      id: "confidential",
      title: {
        fr: "La confidentialité",
        en: "Confidentiality",
      } satisfies Record<Locale, string>,
      description: {
        fr: "Créer les conditions nécessaires à un accompagnement professionnel respectueux et sécurisant.",
        en: "Create the conditions required for respectful and reassuring professional support.",
      } satisfies Record<Locale, string>,
    },
    {
      id: "pragmatic",
      title: {
        fr: "Des outils pragmatiques",
        en: "Practical tools",
      } satisfies Record<Locale, string>,
      description: {
        fr: "Proposer des repères concrets et mobilisables dans les environnements professionnels.",
        en: "Provide concrete reference points that can be applied in professional environments.",
      } satisfies Record<Locale, string>,
    },
    {
      id: "international",
      title: {
        fr: "Une expertise internationale",
        en: "International expertise",
      } satisfies Record<Locale, string>,
      description: {
        fr: "Adapter les interventions aux contextes multiculturels et aux enjeux de mobilité.",
        en: "Adapt interventions to multicultural contexts and mobility-related challenges.",
      } satisfies Record<Locale, string>,
    },
  ] as const,

  visionQuote: {
    fr: "Ne jamais cesser d'apprendre, car la vie ne cesse jamais d'enseigner.",
    en: "Never stop learning because life never stops teaching.",
  } satisfies Record<Locale, string>,

  profile: {
    name: "Jocelyne Katshinda",
    role: {
      fr: "Fondatrice et Administratrice générale",
      en: "Founder and Managing Director",
    } satisfies Record<Locale, string>,
    image: assets.jocelyne.portrait,
  },

  cta: globalCtas.contactUs,
} as const;
