import type { Locale } from "@/types/content";

export const pendingConfirmations = [
  {
    id: "legal-information",
    priority: "high" as const,
    label: {
      fr: "Obtenir les informations légales complètes : forme juridique, numéro d'entreprise, adresse du siège, pays d'immatriculation, numéro TVA.",
      en: "Collect complete legal information: legal form, company number, registered address, country of registration, VAT number.",
    } satisfies Record<Locale, string>,
  },
  {
    id: "facebook-url",
    priority: "low" as const,
    label: {
      fr: "Obtenir l'URL Facebook officielle (optionnel).",
      en: "Collect the official Facebook URL (optional).",
    } satisfies Record<Locale, string>,
  },
  {
    id: "testimonials",
    priority: "medium" as const,
    label: {
      fr: "Collecter des témoignages clients publiables.",
      en: "Collect publishable client testimonials.",
    } satisfies Record<Locale, string>,
  },
  {
    id: "case-studies",
    priority: "low" as const,
    label: {
      fr: "Collecter des études de cas publiables ou anonymisées.",
      en: "Collect publishable or anonymised case studies.",
    } satisfies Record<Locale, string>,
  },
  {
    id: "training-details",
    priority: "high" as const,
    label: {
      fr: "Définir pour chaque formation : durée, format, public cible, langue, nombre de participants et tarif.",
      en: "Define for each training: duration, format, target audience, language, number of participants and pricing.",
    } satisfies Record<Locale, string>,
  },
] as const;
