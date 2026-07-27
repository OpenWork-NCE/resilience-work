import type { Metadata } from "next";
import type { Locale, RouteKey, PageSeo } from "@/types/content";
import { routes } from "@/content/routes";

export const pageSeo: Record<RouteKey, PageSeo> = {
  home: {
    title: {
      fr: "Resilience@Work | Résilience organisationnelle et bien-être psychosocial",
      en: "Resilience@Work | Organisational resilience and psychosocial well-being",
      it: "Resilience@Work | Resilienza organizzativa e benessere psicosociale",
    },
    description: {
      fr: "Resilience@Work accompagne les organisations, les managers et les équipes dans la prévention des risques psychosociaux, la mobilité internationale et la gestion des situations de crise.",
      en: "Resilience@Work supports organisations, managers and teams through psychosocial risk prevention, international mobility and crisis management.",
      it: "Resilience@Work accompagna organizzazioni, manager e team nella prevenzione dei rischi psicosociali, nella mobilità internazionale e nella gestione delle situazioni di crisi.",
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
      it: [
        "resilienza organizzativa",
        "benessere psicosociale",
        "prevenzione rischi psicosociali",
        "salute mentale al lavoro",
        "mobilità internazionale",
        "gestione delle crisi",
        "formazione professionale",
        "burnout",
        "multiculturale",
      ],
    },
    canonicalRoute: "home",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },

  about: {
    title: {
      fr: "À propos | Resilience@Work",
      en: "About | Resilience@Work",
      it: "Chi siamo | Resilience@Work",
    },
    description: {
      fr: "Découvrez l'approche humaine, confidentielle et pragmatique de Resilience@Work pour renforcer la résilience des organisations.",
      en: "Discover Resilience@Work's human, confidential and pragmatic approach to strengthening organisational resilience.",
      it: "Scopri l'approccio umano, confidenziale e pragmatico di Resilience@Work per rafforzare la resilienza delle organizzazioni.",
    },
    canonicalRoute: "about",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },

  jocelyneKatshinda: {
    title: {
      fr: "Jocelyne Katshinda | Resilience@Work",
      en: "Jocelyne Katshinda | Resilience@Work",
      it: "Jocelyne Katshinda | Resilience@Work",
    },
    description: {
      fr: "Découvrez la page personnelle de Jocelyne Katshinda, Fondatrice et Administratrice générale de Resilience@Work.",
      en: "Discover the personal page of Jocelyne Katshinda, Founder and Managing Director of Resilience@Work.",
      it: "Scopri la pagina personale di Jocelyne Katshinda, Fondatrice e Amministratrice generale di Resilience@Work.",
    },
    canonicalRoute: "jocelyneKatshinda",
    ogImage: "/images/jocelyne/jocelyne-katshinda-portrait.webp",
  },

  expertise: {
    title: {
      fr: "Expertises | Resilience@Work",
      en: "Expertise | Resilience@Work",
      it: "Competenze | Resilience@Work",
    },
    description: {
      fr: "Prévention psychosociale, mobilité internationale, gestion de crise, formations et webinaires professionnels.",
      en: "Explore Resilience@Work expertise in psychosocial prevention, international mobility, crisis management, professional training and webinars.",
      it: "Prevenzione psicosociale, mobilità internazionale, gestione delle crisi, formazione e webinar professionali.",
    },
    canonicalRoute: "expertise",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },

  psychosocialPrevention: {
    title: {
      fr: "Prévention psychosociale | Resilience@Work",
      en: "Psychosocial prevention and workplace well-being | Resilience@Work",
      it: "Prevenzione psicosociale e benessere al lavoro | Resilience@Work",
    },
    description: {
      fr: "Resilience@Work accompagne les organisations dans la prévention des risques psychosociaux, du stress et de l’épuisement professionnel.",
      en: "Resilience@Work supports organisations in preventing psychosocial risks, stress and professional exhaustion.",
      it: "Resilience@Work accompagna le organizzazioni nella prevenzione dei rischi psicosociali, dello stress e dell'esaurimento professionale.",
    },
    canonicalRoute: "psychosocialPrevention",
    ogImage: "/images/expertise/psychosocial-prevention.webp",
  },

  internationalMobility: {
    title: {
      fr: "Mobilité internationale | Resilience@Work",
      en: "International mobility support | Resilience@Work",
      it: "Sostegno alla mobilità internazionale | Resilience@Work",
    },
    description: {
      fr: "Resilience@Work accompagne les expatriés et les organisations dans les enjeux d’adaptation culturelle, de stress, d’isolement et de transition.",
      en: "Resilience@Work supports expatriates and organisations navigating cultural adjustment, stress, isolation and transition challenges.",
      it: "Resilience@Work accompagna espatriati e organizzazioni nelle sfide di adattamento culturale, stress, isolamento e transizione.",
    },
    canonicalRoute: "internationalMobility",
    ogImage: "/images/expertise/international-mobility.webp",
  },

  crisisManagement: {
    title: {
      fr: "Gestion de crise | Resilience@Work",
      en: "Crisis situation management | Resilience@Work",
      it: "Gestione delle situazioni di crisi | Resilience@Work",
    },
    description: {
      fr: "Resilience@Work soutient les organisations, les équipes et les managers confrontés à des événements critiques ou à des situations de tension.",
      en: "Resilience@Work supports organisations, teams and managers facing critical events or high-pressure situations.",
      it: "Resilience@Work sostiene organizzazioni, team e manager confrontati con eventi critici o situazioni di tensione.",
    },
    canonicalRoute: "crisisManagement",
    ogImage: "/images/expertise/crisis-management.webp",
  },

  training: {
    title: {
      fr: "Formations et webinaires | Resilience@Work",
      en: "Professional training and webinars | Resilience@Work",
      it: "Formazione e webinar professionali | Resilience@Work",
    },
    description: {
      fr: "Découvrez les formations et webinaires proposés par Resilience@Work pour prévenir les risques psychosociaux et renforcer la résilience au travail.",
      en: "Explore Resilience@Work training sessions and webinars designed to prevent psychosocial risks and strengthen workplace resilience.",
      it: "Scopri la formazione e i webinar proposti da Resilience@Work per prevenire i rischi psicosociali e rafforzare la resilienza al lavoro.",
    },
    canonicalRoute: "training",
    ogImage: "/images/expertise/training.webp",
  },

  legalNotice: {
    title: {
      fr: "Mentions légales | Resilience@Work",
      en: "Legal notice | Resilience@Work",
      it: "Note legali | Resilience@Work",
    },
    description: {
      fr: "Consultez les informations légales relatives au site Resilience@Work.",
      en: "Read the legal information relating to the Resilience@Work website.",
      it: "Consulta le informazioni legali relative al sito Resilience@Work.",
    },
    canonicalRoute: "legalNotice",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },

  privacy: {
    title: {
      fr: "Politique de confidentialité | Resilience@Work",
      en: "Privacy policy | Resilience@Work",
      it: "Informativa sulla privacy | Resilience@Work",
    },
    description: {
      fr: "Découvrez comment Resilience@Work utilise et protège les informations transmises à travers son site.",
      en: "Learn how Resilience@Work uses and protects information submitted through its website.",
      it: "Scopri come Resilience@Work utilizza e protegge le informazioni trasmesse tramite il suo sito.",
    },
    canonicalRoute: "privacy",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },

  cookies: {
    title: {
      fr: "Politique relative aux cookies | Resilience@Work",
      en: "Cookie policy | Resilience@Work",
      it: "Informativa sui cookie | Resilience@Work",
    },
    description: {
      fr: "Consultez les informations relatives aux cookies et technologies similaires utilisés sur le site Resilience@Work.",
      en: "Read information about cookies and similar technologies used on the Resilience@Work website.",
      it: "Consulta le informazioni relative ai cookie e alle tecnologie simili utilizzate sul sito Resilience@Work.",
    },
    canonicalRoute: "cookies",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },

  accessibility: {
    title: {
      fr: "Accessibilité | Resilience@Work",
      en: "Accessibility | Resilience@Work",
      it: "Accessibilità | Resilience@Work",
    },
    description: {
      fr: "Découvrez l’engagement de Resilience@Work en faveur d’une expérience plus accessible.",
      en: "Read about Resilience@Work’s commitment to a more accessible experience.",
      it: "Scopri l'impegno di Resilience@Work per un'esperienza più accessibile.",
    },
    canonicalRoute: "accessibility",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },

  contact: {
    title: {
      fr: "Contact | Resilience@Work",
      en: "Contact | Resilience@Work",
      it: "Contatto | Resilience@Work",
    },
    description: {
      fr: "Contactez Resilience@Work pour échanger sur les besoins de votre organisation.",
      en: "Contact Resilience@Work to discuss your organisation's needs.",
      it: "Contatta Resilience@Work per discutere le esigenze della tua organizzazione.",
    },
    canonicalRoute: "contact",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },
};

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
  it: "it_IT",
};

export function getPageMetadata(
  locale: Locale,
  route: RouteKey,
  baseUrl?: string
): Metadata {
  const seo = pageSeo[route];
  const routePath = routes[route];
  const localizedPath = routePath === "/" ? `/${locale}` : `/${locale}${routePath}`;

  return {
    title: seo.title[locale],
    description: seo.description[locale],
    keywords: seo.keywords?.[locale]?.join(", "),
    alternates: {
      canonical: baseUrl ? `${baseUrl}${localizedPath}` : undefined,
      languages: {
        fr: baseUrl ? `${baseUrl}${routes[route] === "/" ? "/fr" : `/fr${routes[route]}`}` : undefined,
        en: baseUrl ? `${baseUrl}${routes[route] === "/" ? "/en" : `/en${routes[route]}`}` : undefined,
        it: baseUrl ? `${baseUrl}${routes[route] === "/" ? "/it" : `/it${routes[route]}`}` : undefined,
      },
    },
    openGraph: {
      title: seo.title[locale],
      description: seo.description[locale],
      locale: OG_LOCALE[locale],
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
