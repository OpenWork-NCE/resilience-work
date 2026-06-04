import { contactPage } from "@/content/pages/contact";
import type { Locale } from "@/types/content";
import { isSupportedLocale } from "@/lib/content/get-content";
import type {
  ContactFieldErrors,
  ContactFormSubmission,
  ContactSubject,
  CrisisUrgencyLevel,
  MobilityStage,
  PreferredContactMethod,
  PreferredLanguage,
  TrainingFormat,
} from "@/types/contact";

const SUBJECTS = new Set<ContactSubject>([
  "psychosocial-prevention",
  "international-mobility",
  "crisis-management",
  "training",
  "institutional",
  "other",
]);

const LANGUAGES = new Set<PreferredLanguage>(["fr", "en", "it"]);
const CONTACT_METHODS = new Set<PreferredContactMethod>(["email", "phone", "whatsapp"]);
const URGENCY_LEVELS = new Set<CrisisUrgencyLevel>([
  "information-request",
  "discuss-soon",
  "prompt-contact",
]);
const TRAINING_FORMATS = new Set<TrainingFormat>([
  "on-site",
  "remote",
  "webinar",
  "to-be-defined",
]);
const MOBILITY_STAGES = new Set<MobilityStage>([
  "pre-departure",
  "in-progress",
  "return",
  "to-be-defined",
]);

const MAX_NAME_LENGTH = 120;
const MAX_ORGANISATION_LENGTH = 140;
const MAX_PHONE_LENGTH = 32;
const MAX_COUNTRY_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 3000;
const MAX_SHORT_TEXT_LENGTH = 180;
const MAX_CONTEXT_LENGTH = 420;

export interface ContactValidationResult {
  data: ContactFormSubmission;
  errors: ContactFieldErrors;
}

function toTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function toBoolean(value: unknown) {
  return value === true || value === "true" || value === "on" || value === 1;
}

function normalizeEmail(value: unknown) {
  return toTrimmedString(value).toLowerCase();
}

function normalizePhone(value: unknown) {
  return toTrimmedString(value).replace(/\s+/g, " ");
}

function normalizeMessage(value: unknown) {
  return toTrimmedString(value).replace(/\s+/g, " ");
}

export function normalizeContactFormSubmission(
  value: Record<string, unknown> | ContactFormSubmission,
  fallbackLocale: Locale
): ContactFormSubmission {
  const source = value as Record<string, unknown>;
  const localeValue = toTrimmedString(source.locale);
  const locale = isSupportedLocale(localeValue) ? localeValue : fallbackLocale;

  return {
    locale,
    fullName: toTrimmedString(source.fullName),
    organisation: toTrimmedString(source.organisation),
    email: normalizeEmail(source.email),
    phone: normalizePhone(source.phone),
    country: toTrimmedString(source.country),
    subject: toTrimmedString(source.subject) as ContactSubject,
    message: normalizeMessage(source.message),
    preferredLanguage: toTrimmedString(source.preferredLanguage) as PreferredLanguage,
    preferredContactMethod: toTrimmedString(source.preferredContactMethod) as PreferredContactMethod,
    consent: toBoolean(source.consent),
    companyWebsite: toTrimmedString(source.companyWebsite),
    crisisContext: toTrimmedString(source.crisisContext),
    urgencyLevel: toTrimmedString(source.urgencyLevel) as CrisisUrgencyLevel,
    trainingAudience: toTrimmedString(source.trainingAudience),
    estimatedParticipants: toTrimmedString(source.estimatedParticipants),
    trainingFormat: toTrimmedString(source.trainingFormat) as TrainingFormat,
    mobilityRegion: toTrimmedString(source.mobilityRegion),
    mobilityStage: toTrimmedString(source.mobilityStage) as MobilityStage,
  };
}

export function validateContactFormSubmission(
  value: Record<string, unknown> | ContactFormSubmission,
  fallbackLocale: Locale
): ContactValidationResult {
  const data = normalizeContactFormSubmission(value, fallbackLocale);
  const copy = contactPage.form.validation[data.locale];
  const errors: ContactFieldErrors = {};

  if (data.fullName.length < 2 || data.fullName.length > MAX_NAME_LENGTH) {
    errors.fullName = copy.fullName;
  }

  if (!data.organisation) {
    delete data.organisation;
  } else if (data.organisation.length > MAX_ORGANISATION_LENGTH) {
    errors.organisation = copy.organisation;
  }

  if (!data.email || data.email.length > MAX_ORGANISATION_LENGTH || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = copy.email;
  }

  if (!data.phone) {
    delete data.phone;
  } else if (data.phone.length > MAX_PHONE_LENGTH || !/^[+\d()./\-\s]{6,32}$/.test(data.phone)) {
    errors.phone = copy.phone;
  }

  if (!data.country) {
    delete data.country;
  } else if (data.country.length > MAX_COUNTRY_LENGTH) {
    errors.country = copy.country;
  }

  if (!SUBJECTS.has(data.subject)) {
    errors.subject = copy.subject;
  }

  if (!data.message || data.message.length < 18 || data.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = copy.message;
  }

  if (!LANGUAGES.has(data.preferredLanguage)) {
    errors.preferredLanguage = copy.preferredLanguage;
  }

  if (!data.preferredContactMethod) {
    delete data.preferredContactMethod;
  } else if (!CONTACT_METHODS.has(data.preferredContactMethod)) {
    errors.preferredContactMethod = copy.preferredContactMethod;
  }

  if (!data.consent) {
    errors.consent = copy.consent;
  }

  if (!data.companyWebsite) {
    delete data.companyWebsite;
  }

  if (!data.crisisContext) {
    delete data.crisisContext;
  } else if (data.crisisContext.length > MAX_CONTEXT_LENGTH) {
    errors.crisisContext = copy.crisisContext;
  }

  if (!data.urgencyLevel) {
    delete data.urgencyLevel;
  } else if (!URGENCY_LEVELS.has(data.urgencyLevel)) {
    errors.urgencyLevel = copy.urgencyLevel;
  }

  if (!data.trainingAudience) {
    delete data.trainingAudience;
  } else if (data.trainingAudience.length > MAX_SHORT_TEXT_LENGTH) {
    errors.trainingAudience = copy.trainingAudience;
  }

  if (!data.estimatedParticipants) {
    delete data.estimatedParticipants;
  } else if (data.estimatedParticipants.length > 40) {
    errors.estimatedParticipants = copy.estimatedParticipants;
  }

  if (!data.trainingFormat) {
    delete data.trainingFormat;
  } else if (!TRAINING_FORMATS.has(data.trainingFormat)) {
    errors.trainingFormat = copy.trainingFormat;
  }

  if (!data.mobilityRegion) {
    delete data.mobilityRegion;
  } else if (data.mobilityRegion.length > MAX_SHORT_TEXT_LENGTH) {
    errors.mobilityRegion = copy.mobilityRegion;
  }

  if (!data.mobilityStage) {
    delete data.mobilityStage;
  } else if (!MOBILITY_STAGES.has(data.mobilityStage)) {
    errors.mobilityStage = copy.mobilityStage;
  }

  return { data, errors };
}

export function hasContactValidationErrors(errors: ContactFieldErrors) {
  return Object.keys(errors).length > 0;
}
