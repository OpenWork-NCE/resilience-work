import { brand } from "@/content/brand";
import { contactPage } from "@/content/pages/contact";
import type { ContactFormSubmission } from "@/types/contact";

class ContactEmailConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContactEmailConfigurationError";
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatValue(value?: string) {
  return value && value.trim() ? value.trim() : "—";
}

function getLabel<T extends { value: string; label: Record<"fr" | "en", string> }>(
  options: readonly T[],
  value?: string,
  locale: "fr" | "en" = "fr"
) {
  return options.find((option) => option.value === value)?.label[locale] ?? "—";
}

function getConditionalLines(data: ContactFormSubmission, locale: "fr" | "en") {
  const lines = [
    data.crisisContext
      ? `${locale === "fr" ? "Contexte général" : "General context"}: ${data.crisisContext}`
      : null,
    data.urgencyLevel
      ? `${locale === "fr" ? "Niveau de priorité" : "Priority level"}: ${getLabel(
          contactPage.form.fields.urgencyLevel.options,
          data.urgencyLevel,
          locale
        )}`
      : null,
    data.trainingAudience
      ? `${locale === "fr" ? "Public concerné" : "Audience"}: ${data.trainingAudience}`
      : null,
    data.estimatedParticipants
      ? `${locale === "fr" ? "Participants approximatifs" : "Estimated participants"}: ${data.estimatedParticipants}`
      : null,
    data.trainingFormat
      ? `${locale === "fr" ? "Format envisagé" : "Preferred format"}: ${getLabel(
          contactPage.form.fields.trainingFormat.options,
          data.trainingFormat,
          locale
        )}`
      : null,
    data.mobilityRegion
      ? `${locale === "fr" ? "Pays ou région concernée" : "Country or region involved"}: ${data.mobilityRegion}`
      : null,
    data.mobilityStage
      ? `${locale === "fr" ? "Étape de la mobilité" : "Mobility stage"}: ${getLabel(
          contactPage.form.fields.mobilityStage.options,
          data.mobilityStage,
          locale
        )}`
      : null,
  ].filter(Boolean);

  return lines.length > 0 ? lines.join("\n") : "—";
}

function buildContactEmailPayload(data: ContactFormSubmission) {
  const locale = data.locale;
  const submittedAt = new Date().toISOString();
  const subjectLabel = getLabel(contactPage.form.fields.subject.options, data.subject, locale);
  const preferredLanguageLabel = getLabel(
    contactPage.form.fields.preferredLanguage.options,
    data.preferredLanguage,
    locale
  );
  const preferredContactMethodLabel = getLabel(
    contactPage.form.fields.preferredContactMethod.options,
    data.preferredContactMethod,
    locale
  );
  const conditionalFields = getConditionalLines(data, locale);

  const internalSubject = `[Resilience@Work] Nouvelle demande — ${subjectLabel}`;

  const text = [
    "Nouvelle demande depuis resilienceatwork.eu",
    "",
    `Nom : ${formatValue(data.fullName)}`,
    `Organisation : ${formatValue(data.organisation)}`,
    `Email : ${formatValue(data.email)}`,
    `Téléphone : ${formatValue(data.phone)}`,
    `Pays ou région : ${formatValue(data.country)}`,
    `Objet : ${subjectLabel}`,
    `Langue souhaitée : ${preferredLanguageLabel}`,
    `Mode de contact souhaité : ${preferredContactMethodLabel}`,
    `Informations complémentaires : ${conditionalFields}`,
    "",
    "Message :",
    data.message,
    "",
    "Consentement : Oui",
    `Date : ${submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #102b3a; line-height: 1.6;">
      <p><strong>Nouvelle demande depuis resilienceatwork.eu</strong></p>
      <p><strong>Nom :</strong> ${escapeHtml(formatValue(data.fullName))}<br />
      <strong>Organisation :</strong> ${escapeHtml(formatValue(data.organisation))}<br />
      <strong>Email :</strong> ${escapeHtml(formatValue(data.email))}<br />
      <strong>Téléphone :</strong> ${escapeHtml(formatValue(data.phone))}<br />
      <strong>Pays ou région :</strong> ${escapeHtml(formatValue(data.country))}<br />
      <strong>Objet :</strong> ${escapeHtml(subjectLabel)}<br />
      <strong>Langue souhaitée :</strong> ${escapeHtml(preferredLanguageLabel)}<br />
      <strong>Mode de contact souhaité :</strong> ${escapeHtml(preferredContactMethodLabel)}<br />
      <strong>Informations complémentaires :</strong><br />${escapeHtml(conditionalFields).replaceAll("\n", "<br />")}</p>
      <p><strong>Message :</strong><br />${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
      <p><strong>Consentement :</strong> Oui<br />
      <strong>Date :</strong> ${escapeHtml(submittedAt)}</p>
    </div>
  `.trim();

  return {
    to: process.env.CONTACT_RECIPIENT_EMAIL ?? brand.contact.email,
    from: process.env.CONTACT_FROM_EMAIL ?? "",
    replyTo: data.email,
    subject: internalSubject,
    text,
    html,
  };
}

export async function sendContactEmail(data: ContactFormSubmission): Promise<void> {
  const provider = process.env.CONTACT_EMAIL_PROVIDER?.trim().toLowerCase();
  const payload = buildContactEmailPayload(data);

  if (!provider) {
    throw new ContactEmailConfigurationError("Missing CONTACT_EMAIL_PROVIDER");
  }

  if (!payload.from) {
    throw new ContactEmailConfigurationError("Missing CONTACT_FROM_EMAIL");
  }

  if (provider === "console") {
    console.info("[contact] Console email provider active; no external delivery performed.", {
      subject: payload.subject,
      recipient: payload.to,
      replyTo: payload.replyTo,
    });
    return;
  }

  throw new ContactEmailConfigurationError(`Unsupported CONTACT_EMAIL_PROVIDER: ${provider}`);
}

export function isContactEmailConfigurationError(error: unknown) {
  return error instanceof ContactEmailConfigurationError;
}
