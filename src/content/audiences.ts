import type { Locale } from "@/types/content";

export const audiences = [
  {
    id: "hr-directors",
    label: {
      fr: "Directions et responsables des ressources humaines",
      en: "HR directors and leaders",
      it: "Direzioni e responsabili delle risorse umane",
    } satisfies Record<Locale, string>,
  },
  {
    id: "international-managers",
    label: {
      fr: "Managers d'équipes internationales",
      en: "International team managers",
      it: "Manager di team internazionali",
    } satisfies Record<Locale, string>,
  },
  {
    id: "private-employers",
    label: {
      fr: "Employeurs du secteur privé",
      en: "Private-sector employers",
      it: "Datori di lavoro del settore privato",
    } satisfies Record<Locale, string>,
  },
  {
    id: "ngos",
    label: {
      fr: "Institutions internationales",
      en: "International institutions",
      it: "Istituzioni internazionali",
    } satisfies Record<Locale, string>,
  },
  {
    id: "expatriates",
    label: {
      fr: "Expatriés et collaborateurs en mission à l'étranger",
      en: "Expatriates and employees on international assignments",
      it: "Espatriati e collaboratori in missione all'estero",
    } satisfies Record<Locale, string>,
  },
  {
    id: "international-organisations",
    label: {
      fr: "Organisations implantées en Afrique, en Europe et au Moyen-Orient",
      en: "Organisations operating across Africa, Europe and the Middle East",
      it: "Organizzazioni presenti in Africa, Europa e Medio Oriente",
    } satisfies Record<Locale, string>,
  },
] as const;
