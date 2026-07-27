import type { Locale } from "@/types/content";

export const audiences = [
  {
    id: "hr-directors",
    label: {
      fr: "Directions et responsables des ressources humaines",
      en: "HR directors and leaders",
    } satisfies Record<Locale, string>,
  },
  {
    id: "international-managers",
    label: {
      fr: "Managers d'équipes internationales",
      en: "International team managers",
    } satisfies Record<Locale, string>,
  },
  {
    id: "private-employers",
    label: {
      fr: "Employeurs du secteur privé",
      en: "Private-sector employers",
    } satisfies Record<Locale, string>,
  },
  {
    id: "ngos",
    label: {
      fr: "Institutions internationales",
      en: "International institutions",
    } satisfies Record<Locale, string>,
  },
  {
    id: "expatriates",
    label: {
      fr: "Expatriés et collaborateurs en mission à l'étranger",
      en: "Expatriates and employees on international assignments",
    } satisfies Record<Locale, string>,
  },
  {
    id: "international-organisations",
    label: {
      fr: "Organisations implantées en Afrique, en Europe et au Moyen-Orient",
      en: "Organisations operating across Africa, Europe and the Middle East",
    } satisfies Record<Locale, string>,
  },
] as const;
