import type { LegalDocument } from "@/types/legal";

const lastUpdated = "2026-06-04";

export const accessibilityDocument: LegalDocument = {
  id: "accessibility",
  eyebrow: {
    fr: "Accessibilité",
    en: "Accessibility",
  },
  title: {
    fr: "Accessibilité",
    en: "Accessibility",
  },
  description: {
    fr: "Resilience@Work s’engage à améliorer progressivement l’accessibilité de son site.",
    en: "Resilience@Work is committed to progressively improving website accessibility.",
  },
  lastUpdated,
  seo: {
    title: {
      fr: "Accessibilité | Resilience@Work",
      en: "Accessibility | Resilience@Work",
    },
    description: {
      fr: "Découvrez l’engagement de Resilience@Work en faveur d’une expérience plus accessible.",
      en: "Read about Resilience@Work’s commitment to a more accessible experience.",
    },
    canonicalRoute: "accessibility",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },
  sections: [
    {
      id: "commitment",
      title: {
        fr: "Engagement",
        en: "Commitment",
      },
      paragraphs: {
        fr: [
          "Resilience@Work s’engage à améliorer progressivement l’accessibilité de son site afin de proposer une expérience claire, lisible et utilisable par le plus grand nombre.",
        ],
        en: [
          "Resilience@Work is committed to progressively improving website accessibility in order to provide a clear, readable and usable experience for as many people as possible.",
        ],
      },
    },
    {
      id: "contact",
      title: {
        fr: "Nous signaler une difficulté",
        en: "Reporting a difficulty",
      },
      paragraphs: {
        fr: [
          "Si vous rencontrez une difficulté d’accès à un contenu ou à une fonctionnalité, vous pouvez nous contacter à l’adresse indiquée sur la page Contact.",
        ],
        en: [
          "If you encounter difficulty accessing content or a feature, please contact us using the details available on the Contact page.",
        ],
      },
    },
  ],
};
