import type { LocalizedText } from "@/types/content";

export const legalUiCopy = {
  breadcrumbHome: {
    fr: "Accueil",
    en: "Home",
    it: "Home",
  },
  breadcrumbAria: {
    fr: "Fil d'Ariane",
    en: "Breadcrumb",
    it: "Percorso di navigazione",
  },
  tableOfContentsAria: {
    fr: "Table des matières",
    en: "Table of contents",
    it: "Indice",
  },
  tableOfContentsTitle: {
    fr: "Sommaire",
    en: "Contents",
    it: "Sommario",
  },
  lastUpdated: {
    fr: "Dernière mise à jour",
    en: "Last updated",
    it: "Ultimo aggiornamento",
  },
  pendingNoticeTitle: {
    fr: "Informations administratives complémentaires en cours de validation",
    en: "Additional administrative information is being validated",
    it: "Informazioni amministrative aggiuntive in corso di validazione",
  },
  pendingNoticeDescription: {
    fr: "Certaines informations juridiques ou techniques ne sont pas encore publiées tant qu’elles ne sont pas confirmées. Cette approche vise à éviter toute mention inexacte sur le site public.",
    en: "Some legal or technical information is not yet published until it has been confirmed. This approach is intended to avoid inaccurate statements on the public website.",
    it: "Alcune informazioni giuridiche o tecniche non sono ancora pubblicate finché non vengono confermate. Questo approccio mira a evitare qualsiasi indicazione inesatta sul sito pubblico.",
  },
} as const satisfies Record<string, LocalizedText>;
