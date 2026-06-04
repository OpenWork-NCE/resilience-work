import type { Metadata } from "next";
import type { Locale, RouteKey, PageSeo } from "@/types/content";

export const pageSeo: Record<RouteKey, PageSeo> = {
  home: {
    title: {
      fr: "Resilience@Work | Résilience organisationnelle et bien-être psychosocial",
      en: "Resilience@Work | Organisational resilience and psychosocial well-being",
    },
    description: {
      fr: "Resilience@Work accompagne les organisations, les managers et les équipes dans la prévention des risques psychosociaux, la mobilité internationale et la gestion des situations de crise.",
      en: "Resilience@Work supports organisations, managers and teams through psychosocial risk prevention, international mobility and crisis management.",
    },
    keywords: {
      fr: [
        "résilience organisationnelle",
        "bien-être psychosocial",
        "prévention risques psychosociaux",
        "santé mentale au travail",
        "mobilité internationale",
        "gestion de crise",
        "formations professionnelles",
        "burnout",
        "multiculturel",
      ],
      en: [
        "organisational resilience",
        "psychosocial well-being",
        "psychosocial risk prevention",
        "workplace mental health",
        "international mobility",
        "crisis management",
        "professional training",
        "burnout",
        "multicultural",
      ],
    },
    canonicalRoute: "home",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },

  about: {
    title: {
      fr: "À propos | Resilience@Work",
      en: "About | Resilience@Work",
    },
    description: {
      fr: "Découvrez l'approche humaine, confidentielle et pragmatique de Resilience@Work pour renforcer la résilience des organisations.",
      en: "Discover Resilience@Work's human, confidential and pragmatic approach to strengthening organisational resilience.",
    },
    canonicalRoute: "about",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },

  expertise: {
    title: {
      fr: "Expertises | Resilience@Work",
      en: "Expertise | Resilience@Work",
    },
    description: {
      fr: "Prévention psychosociale, mobilité internationale, gestion de crise, formations et webinaires professionnels.",
      en: "Psychosocial prevention, international mobility, crisis management, professional training and webinars.",
    },
    canonicalRoute: "expertise",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },

  psychosocialPrevention: {
    title: {
      fr: "Prévention psychosociale | Resilience@Work",
      en: "Psychosocial prevention | Resilience@Work",
    },
    description: {
      fr: "Identifier les facteurs de risque, prévenir l'épuisement et soutenir durablement la santé mentale au travail.",
      en: "Identify risk factors, prevent exhaustion and sustainably support workplace mental health.",
    },
    canonicalRoute: "psychosocialPrevention",
    ogImage: "/images/expertise/psychosocial-prevention.webp",
  },

  internationalMobility: {
    title: {
      fr: "Mobilité internationale | Resilience@Work",
      en: "International mobility | Resilience@Work",
    },
    description: {
      fr: "Accompagner les collaborateurs expatriés dans leur adaptation culturelle, leur équilibre et leur résilience.",
      en: "Support expatriate employees in their cultural adjustment, well-being and resilience.",
    },
    canonicalRoute: "internationalMobility",
    ogImage: "/images/expertise/international-mobility.webp",
  },

  crisisManagement: {
    title: {
      fr: "Gestion de crise | Resilience@Work",
      en: "Crisis management | Resilience@Work",
    },
    description: {
      fr: "Soutenir les équipes et les managers confrontés à des événements critiques ou à des situations de tension.",
      en: "Support teams and managers facing critical events or high-pressure situations.",
    },
    canonicalRoute: "crisisManagement",
    ogImage: "/images/expertise/crisis-management.webp",
  },

  training: {
    title: {
      fr: "Formations et webinaires | Resilience@Work",
      en: "Training and webinars | Resilience@Work",
    },
    description: {
      fr: "Découvrez les formations professionnelles proposées par Resilience@Work pour renforcer la prévention, le leadership et la résilience.",
      en: "Explore Resilience@Work professional training programmes designed to strengthen prevention, leadership and resilience.",
    },
    canonicalRoute: "training",
    ogImage: "/images/expertise/training.webp",
  },

  international: {
    title: {
      fr: "Interventions internationales | Resilience@Work",
      en: "International interventions | Resilience@Work",
    },
    description: {
      fr: "Resilience@Work intervient en Afrique, en Europe et au Moyen-Orient, en présentiel ou à distance.",
      en: "Resilience@Work provides on-site and remote support across Africa, Europe and the Middle East.",
    },
    canonicalRoute: "international",
    ogImage: "/images/international/africa-europe-middle-east.webp",
  },

  contact: {
    title: {
      fr: "Contact | Resilience@Work",
      en: "Contact | Resilience@Work",
    },
    description: {
      fr: "Contactez Resilience@Work pour échanger sur les besoins de votre organisation.",
      en: "Contact Resilience@Work to discuss your organisation's needs.",
    },
    canonicalRoute: "contact",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },
};

export function getPageMetadata(
  locale: Locale,
  route: RouteKey,
  baseUrl?: string
): Metadata {
  const seo = pageSeo[route];
  
  return {
    title: seo.title[locale],
    description: seo.description[locale],
    keywords: seo.keywords?.[locale]?.join(", "),
    alternates: {
      canonical: baseUrl ? `${baseUrl}/${locale}${route === "home" ? "" : `/${route}`}` : undefined,
      languages: {
        fr: baseUrl ? `${baseUrl}/fr${route === "home" ? "" : `/${route}`}` : undefined,
        en: baseUrl ? `${baseUrl}/en${route === "home" ? "" : `/${route}`}` : undefined,
      },
    },
    openGraph: {
      title: seo.title[locale],
      description: seo.description[locale],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      siteName: "Resilience@Work",
      images: seo.ogImage ? [{ url: seo.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title[locale],
      description: seo.description[locale],
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
    robots: seo.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
