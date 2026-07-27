import type { ImageAsset } from "@/types/content";

export const assets = {
  hero: {
    main: {
      src: "/images/hero/resilience-at-work-hero.webp",
      alt: {
        fr: "Équipe internationale échangeant dans un environnement professionnel contemporain et apaisant.",
        en: "International team having a discussion in a calm and contemporary professional environment.",
        it: "Team internazionale in discussione in un ambiente professionale contemporaneo e sereno.",
      },
      width: 1672,
      height: 941,
      aspectRatio: "16/9",
      objectPosition: "center",
      priority: true,
    } satisfies ImageAsset,
  },

  jocelyne: {
    portrait: {
      src: "/images/jocelyne/jocelyne-katshinda-portrait.webp",
      alt: {
        fr: "Portrait professionnel de Jocelyne Katshinda, fondatrice et Administratrice generale de Resilience@Work.",
        en: "Professional portrait of Jocelyne Katshinda, Founder and Managing Director of Resilience@Work.",
        it: "Ritratto professionale di Jocelyne Katshinda, fondatrice e Amministratrice generale di Resilience@Work.",
      },
      width: 1254,
      height: 1254,
      aspectRatio: "1/1",
      objectPosition: "center",
    } satisfies ImageAsset,
  },

  expertise: {
    psychosocialPrevention: {
      src: "/images/expertise/psychosocial-prevention.webp",
      alt: {
        fr: "Professionnels échangeant autour de la prévention psychosociale et du bien-être au travail.",
        en: "Professionals discussing psychosocial prevention and workplace well-being.",
        it: "Professionisti in discussione sulla prevenzione psicosociale e il benessere al lavoro.",
      },
      width: 1672,
      height: 941,
      aspectRatio: "16/9",
      objectPosition: "center",
    } satisfies ImageAsset,

    internationalMobility: {
      src: "/images/expertise/international-mobility.webp",
      alt: {
        fr: "Professionnels évoluant dans un contexte de mobilité internationale et de collaboration interculturelle.",
        en: "Professionals working in an international mobility and cross-cultural collaboration context.",
        it: "Professionisti in un contesto di mobilità internazionale e collaborazione interculturale.",
      },
      width: 1672,
      height: 941,
      aspectRatio: "16/9",
      objectPosition: "center",
    } satisfies ImageAsset,

    crisisManagement: {
      src: "/images/expertise/crisis-management.webp",
      alt: {
        fr: "Équipe accompagnée dans la gestion d'une situation professionnelle exigeante.",
        en: "Team receiving support while navigating a demanding professional situation.",
        it: "Team accompagnato nella gestione di una situazione professionale impegnativa.",
      },
      width: 1672,
      height: 941,
      aspectRatio: "16/9",
      objectPosition: "center",
    } satisfies ImageAsset,

    training: {
      src: "/images/expertise/training.webp",
      alt: {
        fr: "Session de formation professionnelle consacrée à la résilience et à la santé mentale au travail.",
        en: "Professional training session focused on resilience and workplace mental health.",
        it: "Sessione di formazione professionale dedicata alla resilienza e alla salute mentale al lavoro.",
      },
      width: 1672,
      height: 941,
      aspectRatio: "16/9",
      objectPosition: "center",
    } satisfies ImageAsset,
  },

  international: {
    overview: {
      src: "/images/international/africa-europe-middle-east.webp",
      alt: {
        fr: "Collaboration professionnelle internationale entre l'Afrique, l'Europe et le Moyen-Orient.",
        en: "International professional collaboration across Africa, Europe and the Middle East.",
        it: "Collaborazione professionale internazionale tra Africa, Europa e Medio Oriente.",
      },
      width: 1672,
      height: 941,
      aspectRatio: "16/9",
      objectPosition: "center",
    } satisfies ImageAsset,

    africa: {
      src: "/images/international/africa.webp",
      alt: {
        fr: "Environnement professionnel contemporain illustrant les interventions de Resilience@Work en Afrique.",
        en: "Contemporary professional environment illustrating Resilience@Work interventions in Africa.",
        it: "Ambiente professionale contemporaneo che illustra gli interventi di Resilience@Work in Africa.",
      },
      width: 1672,
      height: 941,
      aspectRatio: "16/9",
      objectPosition: "center",
    } satisfies ImageAsset,

    europe: {
      src: "/images/international/europe.webp",
      alt: {
        fr: "Environnement professionnel contemporain illustrant les interventions de Resilience@Work en Europe.",
        en: "Contemporary professional environment illustrating Resilience@Work interventions in Europe.",
        it: "Ambiente professionale contemporaneo che illustra gli interventi di Resilience@Work in Europa.",
      },
      width: 1672,
      height: 941,
      aspectRatio: "16/9",
      objectPosition: "center",
    } satisfies ImageAsset,

    middleEast: {
      src: "/images/international/middle-east.webp",
      alt: {
        fr: "Environnement professionnel contemporain illustrant les interventions de Resilience@Work au Moyen-Orient.",
        en: "Contemporary professional environment illustrating Resilience@Work interventions in the Middle East.",
        it: "Ambiente professionale contemporaneo che illustra gli interventi di Resilience@Work in Medio Oriente.",
      },
      width: 1672,
      height: 941,
      aspectRatio: "16/9",
      objectPosition: "center",
    } satisfies ImageAsset,
  },
} as const;
