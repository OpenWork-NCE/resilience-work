import { brand } from "@/content/brand";
import { contactEmailLabels, contactPage } from "@/content/pages/contact";
import type { ContactFormSubmission } from "@/types/contact";
import type { Locale } from "@/types/content";

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
  return value && value.trim() ? value.trim() : "-";
}

function getLabel<T extends { value: string; label: Record<Locale, string> }>(
  options: readonly T[],
  value: string | undefined,
  locale: Locale
) {
  return options.find((option) => option.value === value)?.label[locale] ?? "-";
}

function getConditionalLines(data: ContactFormSubmission, locale: Locale) {
  const labels = contactEmailLabels;
  const lines = [
    data.crisisContext
      ? `${labels.crisisContext[locale]}: ${data.crisisContext}`
      : null,
    data.urgencyLevel
      ? `${labels.urgencyLevel[locale]}: ${getLabel(
          contactPage.form.fields.urgencyLevel.options,
          data.urgencyLevel,
          locale
        )}`
      : null,
    data.trainingAudience
      ? `${labels.trainingAudience[locale]}: ${data.trainingAudience}`
      : null,
    data.estimatedParticipants
      ? `${labels.estimatedParticipants[locale]}: ${data.estimatedParticipants}`
      : null,
    data.trainingFormat
      ? `${labels.trainingFormat[locale]}: ${getLabel(
          contactPage.form.fields.trainingFormat.options,
          data.trainingFormat,
          locale
        )}`
      : null,
    data.mobilityRegion
      ? `${labels.mobilityRegion[locale]}: ${data.mobilityRegion}`
      : null,
    data.mobilityStage
      ? `${labels.mobilityStage[locale]}: ${getLabel(
          contactPage.form.fields.mobilityStage.options,
          data.mobilityStage,
          locale
        )}`
      : null,
  ].filter(Boolean);

  return lines.length > 0 ? lines.join("\n") : "-";
}

function buildContactEmailPayload(data: ContactFormSubmission) {
  const locale = data.locale;
  const labels = contactEmailLabels;
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

  const internalSubject = `${labels.subjectPrefix[locale]}${subjectLabel}`;

  const text = [
    labels.newRequest[locale],
    "",
    `${labels.fullName[locale]} : ${formatValue(data.fullName)}`,
    `${labels.organisation[locale]} : ${formatValue(data.organisation)}`,
    `${labels.email[locale]} : ${formatValue(data.email)}`,
    `${labels.phone[locale]} : ${formatValue(data.phone)}`,
    `${labels.country[locale]} : ${formatValue(data.country)}`,
    `${labels.subject[locale]} : ${subjectLabel}`,
    `${labels.preferredLanguage[locale]} : ${preferredLanguageLabel}`,
    `${labels.preferredContactMethod[locale]} : ${preferredContactMethodLabel}`,
    `${labels.additionalInfo[locale]} : ${conditionalFields}`,
    "",
    `${labels.message[locale]} :`,
    data.message,
    "",
    `${labels.consent[locale]} : ${labels.consentYes[locale]}`,
    `${labels.date[locale]} : ${submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #102b3a; line-height: 1.6;">
      <p><strong>${escapeHtml(labels.newRequest[locale])}</strong></p>
      <p><strong>${escapeHtml(labels.fullName[locale])} :</strong> ${escapeHtml(formatValue(data.fullName))}<br />
      <strong>${escapeHtml(labels.organisation[locale])} :</strong> ${escapeHtml(formatValue(data.organisation))}<br />
      <strong>${escapeHtml(labels.email[locale])} :</strong> ${escapeHtml(formatValue(data.email))}<br />
      <strong>${escapeHtml(labels.phone[locale])} :</strong> ${escapeHtml(formatValue(data.phone))}<br />
      <strong>${escapeHtml(labels.country[locale])} :</strong> ${escapeHtml(formatValue(data.country))}<br />
      <strong>${escapeHtml(labels.subject[locale])} :</strong> ${escapeHtml(subjectLabel)}<br />
      <strong>${escapeHtml(labels.preferredLanguage[locale])} :</strong> ${escapeHtml(preferredLanguageLabel)}<br />
      <strong>${escapeHtml(labels.preferredContactMethod[locale])} :</strong> ${escapeHtml(preferredContactMethodLabel)}<br />
      <strong>${escapeHtml(labels.additionalInfo[locale])} :</strong><br />${escapeHtml(conditionalFields).replaceAll("\n", "<br />")}</p>
      <p><strong>${escapeHtml(labels.message[locale])} :</strong><br />${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
      <p><strong>${escapeHtml(labels.consent[locale])} :</strong> ${escapeHtml(labels.consentYes[locale])}<br />
      <strong>${escapeHtml(labels.date[locale])} :</strong> ${escapeHtml(submittedAt)}</p>
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
