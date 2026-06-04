import type { Region, Locale } from "@/types/content";
import { assets } from "../assets";

export const regions: readonly Region[] = [
  {
    id: "africa",
    title: {
      fr: "Afrique",
      en: "Africa",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Un accompagnement adapté aux réalités des organisations et des équipes évoluant dans des contextes multiculturels et exigeants.",
      en: "Support adapted to the realities of organisations and teams operating in multicultural and demanding environments.",
    } satisfies Record<Locale, string>,
    image: assets.international.africa,
  },
  {
    id: "europe",
    title: {
      fr: "Europe",
      en: "Europe",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Des interventions en présentiel ou à distance pour soutenir les organisations, les managers et les collaborateurs.",
      en: "On-site or remote interventions supporting organisations, managers and employees.",
    } satisfies Record<Locale, string>,
    image: assets.international.europe,
  },
  {
    id: "middleEast",
    title: {
      fr: "Moyen-Orient",
      en: "Middle East",
    } satisfies Record<Locale, string>,
    summary: {
      fr: "Un accompagnement conçu pour les organisations confrontées aux enjeux de mobilité, d'adaptation et de résilience.",
      en: "Support designed for organisations facing mobility, adjustment and resilience challenges.",
    } satisfies Record<Locale, string>,
    image: assets.international.middleEast,
  },
] as const;
