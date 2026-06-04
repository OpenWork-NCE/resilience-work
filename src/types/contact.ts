import type { Locale } from "@/types/content";

export type ContactSubject =
  | "psychosocial-prevention"
  | "international-mobility"
  | "crisis-management"
  | "training"
  | "institutional"
  | "other";

export type PreferredLanguage = "fr" | "en" | "it";

export type PreferredContactMethod = "email" | "phone" | "whatsapp";

export type CrisisUrgencyLevel =
  | "information-request"
  | "discuss-soon"
  | "prompt-contact";

export type TrainingFormat = "on-site" | "remote" | "webinar" | "to-be-defined";

export type MobilityStage =
  | "pre-departure"
  | "in-progress"
  | "return"
  | "to-be-defined";

export type ContactFormStatus =
  | "idle"
  | "validating"
  | "submitting"
  | "success"
  | "error"
  | "rate-limited";

export type ContactActionId = "whatsapp" | "phone" | "email" | "website" | "vcard";

export interface ContactFormData {
  fullName: string;
  organisation?: string;
  email: string;
  phone?: string;
  country?: string;
  subject: ContactSubject;
  message: string;
  preferredLanguage: PreferredLanguage;
  preferredContactMethod?: PreferredContactMethod;
  consent: boolean;
  companyWebsite?: string;
  crisisContext?: string;
  urgencyLevel?: CrisisUrgencyLevel;
  trainingAudience?: string;
  estimatedParticipants?: string;
  trainingFormat?: TrainingFormat;
  mobilityRegion?: string;
  mobilityStage?: MobilityStage;
}

export interface ContactFormSubmission extends ContactFormData {
  locale: Locale;
}

export type ContactFieldName =
  | keyof ContactFormData
  | "locale";

export type ContactFieldErrors = Partial<Record<keyof ContactFormData, string>>;
