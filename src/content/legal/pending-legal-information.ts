import type { PendingLegalRequirement } from "@/types/legal";

export const pendingLegalInformation = [
  {
    id: "legal-entity-name",
    requiredFor: ["legalNotice", "privacyPolicy"],
    label: {
      fr: "Dénomination sociale exacte",
      en: "Exact legal entity name",
      it: "Denominazione sociale esatta",
    },
    status: "pending",
  },
  {
    id: "legal-form",
    requiredFor: ["legalNotice"],
    label: {
      fr: "Forme juridique",
      en: "Legal form",
      it: "Forma giuridica",
    },
    status: "pending",
  },
  {
    id: "registered-office",
    requiredFor: ["legalNotice", "privacyPolicy"],
    label: {
      fr: "Adresse complète du siège social",
      en: "Full registered office address",
      it: "Indirizzo completo della sede legale",
    },
    status: "pending",
  },
  {
    id: "company-registration-number",
    requiredFor: ["legalNotice"],
    label: {
      fr: "Numéro d’entreprise ou numéro d’enregistrement",
      en: "Company registration number",
      it: "Numero di impresa o di registrazione",
    },
    status: "pending",
  },
  {
    id: "vat-number",
    requiredFor: ["legalNotice"],
    label: {
      fr: "Numéro de TVA, si applicable",
      en: "VAT number, where applicable",
      it: "Partita IVA, se applicabile",
    },
    status: "pending",
  },
  {
    id: "publication-director",
    requiredFor: ["legalNotice"],
    label: {
      fr: "Responsable ou directeur de publication",
      en: "Publication manager",
      it: "Responsabile o direttore della pubblicazione",
    },
    status: "pending",
  },
  {
    id: "hosting-provider",
    requiredFor: ["legalNotice", "privacyPolicy"],
    label: {
      fr: "Nom, adresse et site web de l’hébergeur",
      en: "Hosting provider name, address and website",
      it: "Nome, indirizzo e sito web del provider di hosting",
    },
    status: "pending",
  },
  {
    id: "privacy-contact",
    requiredFor: ["privacyPolicy"],
    label: {
      fr: "Email de contact relatif à la confidentialité",
      en: "Privacy contact email",
      it: "Email di contatto per la privacy",
    },
    status: "pending",
  },
  {
    id: "dpo-status",
    requiredFor: ["privacyPolicy"],
    label: {
      fr: "Confirmer si un DPO est désigné ou non",
      en: "Confirm whether a DPO has been appointed",
      it: "Confermare se è stato nominato un DPO",
    },
    status: "pending",
  },
  {
    id: "email-provider",
    requiredFor: ["privacyPolicy"],
    label: {
      fr: "Fournisseur transactionnel utilisé pour les emails",
      en: "Transactional email provider",
      it: "Fornitore di email transazionali utilizzato",
    },
    status: "pending",
  },
  {
    id: "hosting-country",
    requiredFor: ["privacyPolicy"],
    label: {
      fr: "Pays d’hébergement et éventuels transferts hors Espace économique européen",
      en: "Hosting country and potential transfers outside the European Economic Area",
      it: "Paese di hosting ed eventuali trasferimenti al di fuori dello Spazio economico europeo",
    },
    status: "pending",
  },
  {
    id: "retention-period",
    requiredFor: ["privacyPolicy"],
    label: {
      fr: "Durée de conservation retenue pour les demandes de contact",
      en: "Retention period selected for contact enquiries",
      it: "Periodo di conservazione adottato per le richieste di contatto",
    },
    status: "pending",
  },
] as const satisfies readonly PendingLegalRequirement[];
