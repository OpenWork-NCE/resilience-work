import type { Locale } from "@/types/content";

export const pendingConfirmations = [
  {
    id: "legal-information",
    priority: "high" as const,
    label: {
      fr: "Obtenir les informations légales complètes : forme juridique, numéro d'entreprise, adresse du siège, pays d'immatriculation, numéro TVA.",
      en: "Collect complete legal information: legal form, company number, registered address, country of registration, VAT number.",
      it: "Ottenere le informazioni legali complete: forma giuridica, numero di impresa, sede legale, paese di registrazione, partita IVA.",
    } satisfies Record<Locale, string>,
  },
  {
    id: "facebook-url",
    priority: "low" as const,
    label: {
      fr: "Obtenir l'URL Facebook officielle (optionnel).",
      en: "Collect the official Facebook URL (optional).",
      it: "Ottenere l'URL Facebook ufficiale (opzionale).",
    } satisfies Record<Locale, string>,
  },
  {
    id: "testimonials",
    priority: "medium" as const,
    label: {
      fr: "Collecter des témoignages clients publiables.",
      en: "Collect publishable client testimonials.",
      it: "Raccogliere testimonianze clienti pubblicabili.",
    } satisfies Record<Locale, string>,
  },
  {
    id: "case-studies",
    priority: "low" as const,
    label: {
      fr: "Collecter des études de cas publiables ou anonymisées.",
      en: "Collect publishable or anonymised case studies.",
      it: "Raccogliere casi di studio pubblicabili o anonimizzati.",
    } satisfies Record<Locale, string>,
  },
  {
    id: "training-details",
    priority: "high" as const,
    label: {
      fr: "Préciser si besoin, pour chaque webinaire ou workshop : durée, format, public et langue.",
      en: "If needed, define for each webinar or workshop: duration, format, audience and language.",
      it: "Se necessario, precisare per ogni webinar o workshop: durata, formato, pubblico e lingua.",
    } satisfies Record<Locale, string>,
  },
] as const;
