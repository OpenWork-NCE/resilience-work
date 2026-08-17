import type { Metadata } from "next";
import type { Locale, RouteKey, PageSeo } from "@/types/content";
import { routes } from "@/content/routes";

export const pageSeo: Record<RouteKey, PageSeo> = {
  home: {
    title: {
      fr: "Resilience@Work | Soutien post-incident, crise internationale, santé mentale",
      en: "Resilience@Work | Post-incident support, international crisis, mental health",
      it: "Resilience@Work | Sostegno post-incidente, crisi internazionale, salute mentale",
    },
    description: {
      fr: "Soutien psychologique après un incident critique, management de crise en mobilité internationale, webinaires et workshops sur le bien-être et la santé mentale.",
      en: "Psychological support after a critical incident, crisis management in international mobility, webinars and workshops on well-being and mental health.",
      it: "Sostegno psicologico dopo un incidente critico, gestione delle crisi nella mobilità internazionale, webinar e workshop su benessere e salute mentale.",
    },
    keywords: {
      fr: [
        "soutien psychologique",
        "incident critique",
        "débriefing collectif",
        "événement traumatisant",
        "crise internationale",
        "mobilité internationale",
        "santé mentale au travail",
        "webinaires",
        "workshops",
      ],
      en: [
        "psychological support",
        "critical incident",
        "collective debriefing",
        "traumatic event",
        "international crisis",
        "international mobility",
        "workplace mental health",
        "webinars",
        "workshops",
      ],
      it: [
        "sostegno psicologico",
        "incidente critico",
        "debriefing collettivo",
        "evento traumatico",
        "crisi internazionale",
        "mobilità internazionale",
        "salute mentale al lavoro",
        "webinar",
        "workshop",
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
      fr: "Activités | Resilience@Work",
      en: "Activities | Resilience@Work",
      it: "Attività | Resilience@Work",
    },
    description: {
      fr: "Support psychologique post-incident, crise en mobilité internationale, webinaires et workshops sur le bien-être et la santé mentale.",
      en: "Post-incident psychological support, crisis in international mobility, webinars and workshops on well-being and mental health.",
      it: "Supporto psicologico post-incidente, crisi in mobilità internazionale, webinar e workshop su benessere e salute mentale.",
    },
    canonicalRoute: "expertise",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },

  psychosocialPrevention: {
    title: {
      fr: "Support psychologique post-incident | Resilience@Work",
      en: "Post-incident psychological support | Resilience@Work",
      it: "Supporto psicologico post-incidente | Resilience@Work",
    },
    description: {
      fr: "Entretiens individuels et débriefing collectif après un incident critique ou un événement traumatisant.",
      en: "Individual interviews and collective debriefing after a critical incident or traumatic event.",
      it: "Colloqui individuali e debriefing collettivo dopo un incidente critico o un evento traumatico.",
    },
    canonicalRoute: "psychosocialPrevention",
    ogImage: "/images/expertise/psychosocial-prevention.webp",
  },

  internationalMobility: {
    title: {
      fr: "Crise et mobilité internationale | Resilience@Work",
      en: "Crisis and international mobility | Resilience@Work",
      it: "Crisi e mobilità internazionale | Resilience@Work",
    },
    description: {
      fr: "Management de situation de crise dans le contexte de la mobilité internationale et des environnements multiculturels.",
      en: "Crisis situation management in the context of international mobility and multicultural environments.",
      it: "Gestione di situazioni di crisi nel contesto della mobilità internazionale e degli ambienti multiculturali.",
    },
    canonicalRoute: "internationalMobility",
    ogImage: "/images/expertise/international-mobility.webp",
    noIndex: true,
  },

  crisisManagement: {
    title: {
      fr: "Crise et mobilité internationale | Resilience@Work",
      en: "Crisis and international mobility | Resilience@Work",
      it: "Crisi e mobilità internazionale | Resilience@Work",
    },
    description: {
      fr: "Management de situation de crise dans le contexte de la mobilité internationale et des environnements multiculturels.",
      en: "Crisis situation management in the context of international mobility and multicultural environments.",
      it: "Gestione di situazioni di crisi nel contesto della mobilità internazionale e degli ambienti multiculturali.",
    },
    canonicalRoute: "crisisManagement",
    ogImage: "/images/expertise/crisis-management.webp",
  },

  training: {
    title: {
      fr: "Webinaires et workshops | Resilience@Work",
      en: "Webinars and workshops | Resilience@Work",
      it: "Webinar e workshop | Resilience@Work",
    },
    description: {
      fr: "Webinaires et workshops Resilience@Work sur le bien-être et la santé mentale au travail.",
      en: "Resilience@Work webinars and workshops on workplace well-being and mental health.",
      it: "Webinar e workshop Resilience@Work su benessere e salute mentale al lavoro.",
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
