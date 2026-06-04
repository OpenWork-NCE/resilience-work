import type { PendingLegalRequirement } from "@/types/legal";

export const pendingLegalInformation = [
  {
    id: "legal-entity-name",
    requiredFor: ["legalNotice", "privacyPolicy"],
    label: {
      fr: "Dénomination sociale exacte",
      en: "Exact legal entity name",
    },
    status: "pending",
  },
  {
    id: "legal-form",
    requiredFor: ["legalNotice"],
    label: {
      fr: "Forme juridique",
      en: "Legal form",
    },
    status: "pending",
  },
  {
    id: "registered-office",
    requiredFor: ["legalNotice", "privacyPolicy"],
    label: {
      fr: "Adresse complète du siège social",
      en: "Full registered office address",
    },
    status: "pending",
  },
  {
    id: "company-registration-number",
    requiredFor: ["legalNotice"],
    label: {
      fr: "Numéro d’entreprise ou numéro d’enregistrement",
      en: "Company registration number",
    },
    status: "pending",
  },
  {
    id: "vat-number",
    requiredFor: ["legalNotice"],
    label: {
      fr: "Numéro de TVA, si applicable",
      en: "VAT number, where applicable",
    },
    status: "pending",
  },
  {
    id: "publication-director",
    requiredFor: ["legalNotice"],
    label: {
      fr: "Responsable ou directeur de publication",
      en: "Publication manager",
    },
    status: "pending",
  },
  {
    id: "hosting-provider",
    requiredFor: ["legalNotice", "privacyPolicy"],
    label: {
      fr: "Nom, adresse et site web de l’hébergeur",
      en: "Hosting provider name, address and website",
    },
    status: "pending",
  },
  {
    id: "privacy-contact",
    requiredFor: ["privacyPolicy"],
    label: {
      fr: "Email de contact relatif à la confidentialité",
      en: "Privacy contact email",
    },
    status: "pending",
  },
  {
    id: "dpo-status",
    requiredFor: ["privacyPolicy"],
    label: {
      fr: "Confirmer si un DPO est désigné ou non",
      en: "Confirm whether a DPO has been appointed",
    },
    status: "pending",
  },
  {
    id: "email-provider",
    requiredFor: ["privacyPolicy"],
    label: {
      fr: "Fournisseur transactionnel utilisé pour les emails",
      en: "Transactional email provider",
    },
    status: "pending",
  },
  {
    id: "hosting-country",
    requiredFor: ["privacyPolicy"],
    label: {
      fr: "Pays d’hébergement et éventuels transferts hors Espace économique européen",
      en: "Hosting country and potential transfers outside the European Economic Area",
    },
    status: "pending",
  },
  {
    id: "retention-period",
    requiredFor: ["privacyPolicy"],
    label: {
      fr: "Durée de conservation retenue pour les demandes de contact",
      en: "Retention period selected for contact enquiries",
    },
    status: "pending",
  },
] as const satisfies readonly PendingLegalRequirement[];
