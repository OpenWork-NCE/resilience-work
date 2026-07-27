import type { Region, Locale } from "@/types/content";
import { assets } from "../assets";

export const regions: readonly Region[] = [
  {
    id: "africa",
    title: {
      fr: "Afrique",
      en: "Africa",
      it: "Africa",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Un accompagnement adapté aux réalités des organisations et des équipes évoluant dans des contextes multiculturels et exigeants.",
      en: "Support adapted to the realities of organisations and teams operating in multicultural and demanding environments.",
      it: "Un accompagnamento adattato alle realtà di organizzazioni e team che operano in contesti multiculturali ed esigenti.",
    } satisfies Record<Locale, string>,
    image: assets.international.africa,
  },
  {
    id: "europe",
    title: {
      fr: "Europe",
      en: "Europe",
      it: "Europa",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Des interventions en présentiel ou à distance pour soutenir les organisations, les managers et les collaborateurs.",
      en: "On-site or remote interventions supporting organisations, managers and employees.",
      it: "Interventi in presenza o a distanza per sostenere organizzazioni, manager e collaboratori.",
    } satisfies Record<Locale, string>,
    image: assets.international.europe,
  },
  {
    id: "middleEast",
    title: {
      fr: "Moyen-Orient",
      en: "Middle East",
      it: "Medio Oriente",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Un accompagnement conçu pour les organisations confrontées aux enjeux de mobilité, d'adaptation et de résilience.",
      en: "Support designed for organisations facing mobility, adjustment and resilience challenges.",
      it: "Un accompagnamento pensato per le organizzazioni che affrontano sfide di mobilità, adattamento e resilienza.",
    } satisfies Record<Locale, string>,
    image: assets.international.middleEast,
  },
] as const;
