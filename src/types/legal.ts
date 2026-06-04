import type { LocalizedParagraphs, LocalizedStringArray, LocalizedText, PageSeo } from "@/types/content";

export type LegalDocumentId =
  | "legalNotice"
  | "privacyPolicy"
  | "cookiePolicy"
  | "accessibility";

export interface LegalDefinitionItem {
  id: string;
  label: LocalizedText;
  value: LocalizedText | null;
}

export interface LegalTableRow {
  id: string;
  cells: LocalizedStringArray;
}

export interface LegalSection {
  id: string;
  title: LocalizedText;
  paragraphs?: LocalizedParagraphs;
  items?: LocalizedStringArray;
  definitions?: readonly LegalDefinitionItem[];
  table?: {
    headers: LocalizedStringArray;
    rows: readonly LegalTableRow[];
  };
  callout?: {
    tone?: "default" | "warning" | "accent";
    title?: LocalizedText;
    description: LocalizedText;
  };
  isPendingSensitive?: boolean;
}

export interface LegalDocument {
  id: LegalDocumentId;
  title: LocalizedText;
  description: LocalizedText;
  eyebrow: LocalizedText;
  lastUpdated: string;
  sections: readonly LegalSection[];
  seo: PageSeo;
}

export type PendingLegalRequirement = {
  id: string;
  requiredFor: readonly LegalDocumentId[];
  label: LocalizedText;
  status: "pending";
};
