import type { Locale } from "@/types/content";

export type PartnerLogo = {
  src: string;
  width: number;
  height: number;
  /** Visual scale inside the fixed logo well (1 = default) */
  scale?: number;
};

export type Partner = {
  id: string;
  name: string;
  /** Accessible label FR/EN/IT */
  label: Record<Locale, string>;
  logos: readonly PartnerLogo[];
};

/**
 * Client organisations that trust Resilience@Work.
 * Logos live in /public/images/partners (optimised webp, transparent bg).
 *
 * Aspect notes (optimised):
 * - Wide wordmarks (Abilways ~5:1, Cresept ~3:1): scale slightly down in height well
 * - Square/portrait marks (CBC, KBC, EP, EC): fit by height
 * - CBC & KBC shown as a paired mark under one client name
 */
export const partners: readonly Partner[] = [
  {
    id: "european-commission",
    name: "Commission européenne",
    label: {
      fr: "Commission européenne",
      en: "European Commission",
      it: "Commissione europea",
    },
    logos: [
      {
        src: "/images/partners/european-commission.webp",
        width: 404,
        height: 280,
        scale: 1,
      },
    ],
  },
  {
    id: "cbc-kbc",
    name: "CBC & KBC Assurances",
    label: {
      fr: "CBC & KBC Assurances",
      en: "CBC & KBC Insurance",
      it: "CBC & KBC Assicurazioni",
    },
    logos: [
      {
        src: "/images/partners/cbc.webp",
        width: 285,
        height: 222,
        scale: 0.92,
      },
      {
        src: "/images/partners/kbc.webp",
        width: 353,
        height: 280,
        scale: 0.92,
      },
    ],
  },
  {
    id: "la-fleur-du-pain",
    name: "La Fleur du Pain",
    label: {
      fr: "La Fleur du Pain",
      en: "La Fleur du Pain",
      it: "La Fleur du Pain",
    },
    logos: [
      {
        src: "/images/partners/la-fleur-du-pain.webp",
        width: 420,
        height: 280,
        scale: 1,
      },
    ],
  },
  {
    id: "abilways-skolae",
    name: "Abilways / Skolae",
    label: {
      fr: "Abilways / Skolae",
      en: "Abilways / Skolae",
      it: "Abilways / Skolae",
    },
    logos: [
      {
        src: "/images/partners/abilways-skolae.webp",
        width: 720,
        height: 138,
        scale: 1.05,
      },
    ],
  },
  {
    id: "cresept",
    name: "Cresept asbl",
    label: {
      fr: "Cresept asbl",
      en: "Cresept asbl",
      it: "Cresept asbl",
    },
    logos: [
      {
        src: "/images/partners/cresept.webp",
        width: 422,
        height: 133,
        scale: 1.05,
      },
    ],
  },
  {
    id: "vidyas",
    name: "Vidyas",
    label: {
      fr: "Vidyas",
      en: "Vidyas",
      it: "Vidyas",
    },
    logos: [
      {
        src: "/images/partners/vidyas.webp",
        width: 221,
        height: 136,
        scale: 1,
      },
    ],
  },
  {
    id: "european-parliament",
    name: "Parlement européen",
    label: {
      fr: "Parlement européen",
      en: "European Parliament",
      it: "Parlamento europeo",
    },
    logos: [
      {
        src: "/images/partners/european-parliament.webp",
        width: 355,
        height: 280,
        scale: 1,
      },
    ],
  },
] as const;

export const partnersSection = {
  eyebrow: {
    fr: "Ils nous font confiance",
    en: "They trust us",
    it: "Si fidano di noi",
  } satisfies Record<Locale, string>,
  title: {
    fr: "Des organisations qui placent l’humain au centre",
    en: "Organisations that put people first",
    it: "Organizzazioni che mettono le persone al centro",
  } satisfies Record<Locale, string>,
  description: {
    fr: "Institutions européennes, entreprises et acteurs engagés accompagnés par Resilience@Work.",
    en: "European institutions, companies and committed organisations supported by Resilience@Work.",
    it: "Istituzioni europee, imprese e attori impegnati accompagnati da Resilience@Work.",
  } satisfies Record<Locale, string>,
} as const;
