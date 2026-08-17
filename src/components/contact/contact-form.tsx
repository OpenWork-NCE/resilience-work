"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { AlertCircle, CheckCircle2, Mail, MessageCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/shared/button";
import { Checkbox, FormError, FormField, Input, Select, Textarea } from "@/components/ui/form";
import { brand } from "@/content/brand";
import { contactPage } from "@/content/pages/contact";
import {
  hasContactValidationErrors,
  validateContactFormSubmission,
} from "@/lib/contact/contact-form";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";
import type {
  ContactFieldErrors,
  ContactFormStatus,
  ContactFormSubmission,
  ContactSubject,
} from "@/types/contact";

interface ContactFormProps {
  locale: Locale;
}

const initialValues: ContactFormSubmission = {
  locale: "fr",
  fullName: "",
  organisation: "",
  email: "",
  phone: "",
  country: "",
  subject: "" as ContactSubject,
  message: "",
  preferredLanguage: "" as ContactFormSubmission["preferredLanguage"],
  preferredContactMethod: "" as ContactFormSubmission["preferredContactMethod"],
  consent: false,
  companyWebsite: "",
  crisisContext: "",
  urgencyLevel: "" as ContactFormSubmission["urgencyLevel"],
  trainingAudience: "",
  estimatedParticipants: "",
  trainingFormat: "" as ContactFormSubmission["trainingFormat"],
  mobilityRegion: "",
  mobilityStage: "" as ContactFormSubmission["mobilityStage"],
};

const fieldOrder: (keyof ContactFieldErrors)[] = [
  "fullName",
  "organisation",
  "email",
  "phone",
  "country",
  "subject",
  "message",
  "preferredLanguage",
  "preferredContactMethod",
  "consent",
  "crisisContext",
  "urgencyLevel",
  "trainingAudience",
  "estimatedParticipants",
  "trainingFormat",
  "mobilityRegion",
  "mobilityStage",
];

function getStatusStyles(status: ContactFormStatus) {
  if (status === "success") {
    return {
      wrapper: "border-[rgb(var(--success))] bg-[rgb(var(--success-soft))]/65 text-[rgb(var(--foreground))]",
      icon: CheckCircle2,
      iconClassName: "text-[rgb(var(--success))]",
    };
  }

  return {
    wrapper: "border-[rgb(var(--danger))] bg-[rgb(var(--danger-soft))]/65 text-[rgb(var(--foreground))]",
    icon: AlertCircle,
    iconClassName: "text-[rgb(var(--danger))]",
  };
}

function FormGroup({
  step,
  title,
  description,
  children,
}: {
  step: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="space-y-5 border-0 p-0">
      <legend className="w-full">
        <div className="mb-5 flex items-start gap-3 border-b border-[rgb(var(--border-muted))] pb-4">
          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] px-2 font-[family:var(--font-accent)] text-[0.72rem] font-semibold text-[rgb(var(--accent-foreground))]">
            {step}
          </span>
          <span className="min-w-0">
            <span className="block text-base font-semibold text-[rgb(var(--foreground))]">
              {title}
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
              {description}
            </span>
          </span>
        </div>
      </legend>
      {children}
    </fieldset>
  );
}

export function ContactForm({ locale }: ContactFormProps) {
  const copy = contactPage.form;
  const summaryId = useId();
  const [formData, setFormData] = useState<ContactFormSubmission>({
    ...initialValues,
    locale,
  });
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [showErrorSummary, setShowErrorSummary] = useState(false);

  const selectedSubject = formData.subject;
  const showCrisisFields = selectedSubject === "crisis-management";
  const showTrainingFields = selectedSubject === "training";
  const showMobilityFields =
    selectedSubject === "international-mobility" ||
    selectedSubject === "crisis-management";
  const hasConditional =
    showCrisisFields || showTrainingFields || showMobilityFields;

  const statusContent =
    status === "success"
      ? copy.status.success
      : status === "error"
        ? copy.status.error
        : status === "rate-limited"
          ? copy.status.rateLimited
          : null;

  const errorEntries = fieldOrder
    .filter((key) => errors[key])
    .map((key) => ({ key, message: errors[key] as string }));

  function updateField<K extends keyof ContactFormSubmission>(
    field: K,
    value: ContactFormSubmission[K]
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => {
      if (!current[field as keyof ContactFieldErrors]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[field as keyof ContactFieldErrors];
      return nextErrors;
    });

    if (status !== "idle") {
      setStatus("idle");
    }
    if (showErrorSummary) {
      setShowErrorSummary(false);
    }
  }

  function focusFirstError(nextErrors: ContactFieldErrors) {
    const firstKey = fieldOrder.find((key) => nextErrors[key]);
    if (!firstKey) return;

    window.requestAnimationFrame(() => {
      const target =
        document.getElementById(firstKey) ??
        document.getElementById(summaryId);
      target?.focus();
      target?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  function resetForm() {
    setFormData({ ...initialValues, locale });
    setErrors({});
    setStatus("idle");
    setShowErrorSummary(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    setStatus("validating");
    const validation = validateContactFormSubmission(formData, locale);

    if (hasContactValidationErrors(validation.errors)) {
      setErrors(validation.errors);
      setShowErrorSummary(true);
      setStatus("idle");
      focusFirstError(validation.errors);
      return;
    }

    setErrors({});
    setShowErrorSummary(false);
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      const payload = (await response.json().catch(() => null)) as
        | { success?: boolean; code?: string; fieldErrors?: ContactFieldErrors }
        | null;

      if (response.ok && payload?.success) {
        setStatus("success");
        window.requestAnimationFrame(() => {
          document.getElementById(summaryId)?.focus();
        });
        return;
      }

      if (payload?.code === "VALIDATION_ERROR" && payload.fieldErrors) {
        setErrors(payload.fieldErrors);
        setShowErrorSummary(true);
        setStatus("idle");
        focusFirstError(payload.fieldErrors);
        return;
      }

      if (payload?.code === "RATE_LIMITED") {
        setStatus("rate-limited");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const submitting = status === "submitting";

  if (status === "success" && statusContent) {
    return (
      <div
        id={summaryId}
        tabIndex={-1}
        className="rounded-[var(--radius-2xl)] border border-[rgb(var(--success))] bg-[rgb(var(--surface))] p-6 shadow-[var(--shadow-soft)] outline-none sm:p-8"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--success-soft))] text-[rgb(var(--success))]">
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-[rgb(var(--foreground))]">
              {statusContent.title[locale]}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
              {statusContent.description[locale]}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-muted))] p-4 sm:p-5">
          <p className="text-sm font-semibold text-[rgb(var(--foreground))]">
            {copy.successActions.title[locale]}
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={brand.contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[rgb(var(--primary))] px-4 text-sm font-medium text-[rgb(var(--primary-foreground))] transition-colors hover:bg-[rgb(var(--primary-hover))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {copy.successActions.whatsapp[locale]}
            </a>
            <a
              href={brand.contact.emailHref}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 text-sm font-medium text-[rgb(var(--foreground))] transition-colors hover:bg-[rgb(var(--surface-muted))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {copy.successActions.email[locale]}
            </a>
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] px-4 text-sm font-medium text-[rgb(var(--primary))] transition-colors hover:bg-[rgb(var(--surface-muted))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              {copy.successActions.reset[locale]}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-5 shadow-[var(--shadow-soft)] sm:p-8">
      <form className="space-y-8" onSubmit={handleSubmit} noValidate>
        {showErrorSummary && errorEntries.length > 0 ? (
          <div
            id={summaryId}
            tabIndex={-1}
            role="alert"
            aria-live="assertive"
            className="rounded-[var(--radius-lg)] border border-[rgb(var(--danger))] bg-[rgb(var(--danger-soft))]/70 px-4 py-4 outline-none"
          >
            <div className="flex items-start gap-3">
              <AlertCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--danger))]"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="font-semibold text-[rgb(var(--foreground))]">
                  {copy.errorSummary.title[locale]}
                </p>
                <p className="mt-1 text-sm text-[rgb(var(--muted-foreground))]">
                  {copy.errorSummary.description[locale]}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-[rgb(var(--foreground))]">
                  {errorEntries.map((entry) => (
                    <li key={entry.key}>
                      <a
                        href={`#${entry.key}`}
                        className="underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                        onClick={(event) => {
                          event.preventDefault();
                          document.getElementById(entry.key)?.focus();
                        }}
                      >
                        {entry.message}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}

        <FormGroup
          step="01"
          title={copy.groups.identity.title[locale]}
          description={copy.groups.identity.description[locale]}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              label={copy.fields.fullName.label[locale]}
              htmlFor="fullName"
              required
              error={errors.fullName}
            >
              <Input
                id="fullName"
                name="fullName"
                autoComplete="name"
                value={formData.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                placeholder={copy.fields.fullName.placeholder[locale]}
                error={Boolean(errors.fullName)}
                aria-invalid={Boolean(errors.fullName)}
              />
            </FormField>

            <FormField
              label={copy.fields.organisation.label[locale]}
              htmlFor="organisation"
              error={errors.organisation}
            >
              <Input
                id="organisation"
                name="organisation"
                autoComplete="organization"
                value={formData.organisation}
                onChange={(event) => updateField("organisation", event.target.value)}
                placeholder={copy.fields.organisation.placeholder[locale]}
                error={Boolean(errors.organisation)}
                aria-invalid={Boolean(errors.organisation)}
              />
            </FormField>

            <FormField
              label={copy.fields.email.label[locale]}
              htmlFor="email"
              required
              error={errors.email}
            >
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder={copy.fields.email.placeholder[locale]}
                error={Boolean(errors.email)}
                aria-invalid={Boolean(errors.email)}
              />
            </FormField>

            <FormField
              label={copy.fields.phone.label[locale]}
              htmlFor="phone"
              error={errors.phone}
            >
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={formData.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder={copy.fields.phone.placeholder[locale]}
                error={Boolean(errors.phone)}
                aria-invalid={Boolean(errors.phone)}
              />
            </FormField>

            <div className="md:col-span-2">
              <FormField
                label={copy.fields.country.label[locale]}
                htmlFor="country"
                error={errors.country}
              >
                <Input
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  value={formData.country}
                  onChange={(event) => updateField("country", event.target.value)}
                  placeholder={copy.fields.country.placeholder[locale]}
                  error={Boolean(errors.country)}
                  aria-invalid={Boolean(errors.country)}
                />
              </FormField>
            </div>
          </div>
        </FormGroup>

        <FormGroup
          step="02"
          title={copy.groups.request.title[locale]}
          description={copy.groups.request.description[locale]}
        >
          <FormField
            label={copy.fields.subject.label[locale]}
            htmlFor="subject"
            required
            error={errors.subject}
          >
            <div
              id="subject"
              role="radiogroup"
              aria-required="true"
              aria-invalid={Boolean(errors.subject)}
              tabIndex={-1}
              className="grid gap-3 sm:grid-cols-3"
            >
              {copy.fields.subject.options
                .filter((option) =>
                  ["psychosocial-prevention", "crisis-management", "training"].includes(
                    option.value
                  )
                )
                .map((option) => {
                  const selected = formData.subject === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() =>
                        updateField("subject", option.value as ContactSubject)
                      }
                      className={cn(
                        "rounded-[var(--radius-lg)] border px-4 py-4 text-left transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2",
                        selected
                          ? "border-[rgb(var(--primary))] bg-[rgb(var(--accent-soft))] text-[rgb(var(--foreground))]"
                          : "border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] hover:border-[rgb(var(--border-strong))]"
                      )}
                    >
                      <span className="block text-sm font-semibold leading-snug">
                        {option.label[locale]}
                      </span>
                    </button>
                  );
                })}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {copy.fields.subject.options
                .filter((option) =>
                  ["institutional", "other"].includes(option.value)
                )
                .map((option) => {
                  const selected = formData.subject === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        updateField("subject", option.value as ContactSubject)
                      }
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2",
                        selected
                          ? "border-[rgb(var(--primary))] bg-[rgb(var(--accent-soft))]"
                          : "border-[rgb(var(--border-muted))] text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))]"
                      )}
                    >
                      {option.label[locale]}
                    </button>
                  );
                })}
            </div>
            <input type="hidden" name="subject" value={formData.subject} />
          </FormField>

          <FormField
            label={copy.fields.message.label[locale]}
            htmlFor="message"
            required
            hint={copy.fields.message.hint[locale]}
            error={errors.message}
          >
            <div className="mb-3 rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-subtle))] px-4 py-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
              {copy.sensitiveDataNote[locale]}
            </div>
            <Textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder={copy.fields.message.placeholder[locale]}
              error={Boolean(errors.message)}
              aria-invalid={Boolean(errors.message)}
            />
          </FormField>

          <div
            className={cn(
              "space-y-5 rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-subtle))] p-4 sm:p-5",
              hasConditional ? "block" : "hidden"
            )}
            aria-live="polite"
          >
            {showCrisisFields ? (
              <>
                <p className="text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                  {copy.conditionalSections.crisis.description[locale]}
                </p>
                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    label={copy.fields.crisisContext.label[locale]}
                    htmlFor="crisisContext"
                    error={errors.crisisContext}
                  >
                    <Input
                      id="crisisContext"
                      name="crisisContext"
                      value={formData.crisisContext}
                      onChange={(event) => updateField("crisisContext", event.target.value)}
                      placeholder={copy.fields.crisisContext.placeholder[locale]}
                      error={Boolean(errors.crisisContext)}
                      aria-invalid={Boolean(errors.crisisContext)}
                    />
                  </FormField>

                  <FormField
                    label={copy.fields.urgencyLevel.label[locale]}
                    htmlFor="urgencyLevel"
                    error={errors.urgencyLevel}
                  >
                    <Select
                      id="urgencyLevel"
                      name="urgencyLevel"
                      value={formData.urgencyLevel}
                      onChange={(event) =>
                        updateField(
                          "urgencyLevel",
                          event.target.value as ContactFormSubmission["urgencyLevel"]
                        )
                      }
                      error={Boolean(errors.urgencyLevel)}
                      aria-invalid={Boolean(errors.urgencyLevel)}
                    >
                      <option value="">{copy.fields.urgencyLevel.placeholder[locale]}</option>
                      {copy.fields.urgencyLevel.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label[locale]}
                        </option>
                      ))}
                    </Select>
                  </FormField>
                </div>
                <div className="rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-4">
                  <p className="text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                    {copy.emergencyNote[locale]}
                  </p>
                </div>
              </>
            ) : null}

            {showTrainingFields ? (
              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label={copy.fields.trainingAudience.label[locale]}
                  htmlFor="trainingAudience"
                  error={errors.trainingAudience}
                >
                  <Input
                    id="trainingAudience"
                    name="trainingAudience"
                    value={formData.trainingAudience}
                    onChange={(event) => updateField("trainingAudience", event.target.value)}
                    placeholder={copy.fields.trainingAudience.placeholder[locale]}
                    error={Boolean(errors.trainingAudience)}
                    aria-invalid={Boolean(errors.trainingAudience)}
                  />
                </FormField>

                <FormField
                  label={copy.fields.estimatedParticipants.label[locale]}
                  htmlFor="estimatedParticipants"
                  error={errors.estimatedParticipants}
                >
                  <Input
                    id="estimatedParticipants"
                    name="estimatedParticipants"
                    inputMode="numeric"
                    value={formData.estimatedParticipants}
                    onChange={(event) =>
                      updateField("estimatedParticipants", event.target.value)
                    }
                    placeholder={copy.fields.estimatedParticipants.placeholder[locale]}
                    error={Boolean(errors.estimatedParticipants)}
                    aria-invalid={Boolean(errors.estimatedParticipants)}
                  />
                </FormField>

                <div className="md:col-span-2">
                  <FormField
                    label={copy.fields.trainingFormat.label[locale]}
                    htmlFor="trainingFormat"
                    error={errors.trainingFormat}
                  >
                    <Select
                      id="trainingFormat"
                      name="trainingFormat"
                      value={formData.trainingFormat}
                      onChange={(event) =>
                        updateField(
                          "trainingFormat",
                          event.target.value as ContactFormSubmission["trainingFormat"]
                        )
                      }
                      error={Boolean(errors.trainingFormat)}
                      aria-invalid={Boolean(errors.trainingFormat)}
                    >
                      <option value="">{copy.fields.trainingFormat.placeholder[locale]}</option>
                      {copy.fields.trainingFormat.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label[locale]}
                        </option>
                      ))}
                    </Select>
                  </FormField>
                </div>
              </div>
            ) : null}

            {showMobilityFields ? (
              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label={copy.fields.mobilityRegion.label[locale]}
                  htmlFor="mobilityRegion"
                  error={errors.mobilityRegion}
                >
                  <Input
                    id="mobilityRegion"
                    name="mobilityRegion"
                    value={formData.mobilityRegion}
                    onChange={(event) => updateField("mobilityRegion", event.target.value)}
                    placeholder={copy.fields.mobilityRegion.placeholder[locale]}
                    error={Boolean(errors.mobilityRegion)}
                    aria-invalid={Boolean(errors.mobilityRegion)}
                  />
                </FormField>

                <FormField
                  label={copy.fields.mobilityStage.label[locale]}
                  htmlFor="mobilityStage"
                  error={errors.mobilityStage}
                >
                  <Select
                    id="mobilityStage"
                    name="mobilityStage"
                    value={formData.mobilityStage}
                    onChange={(event) =>
                      updateField(
                        "mobilityStage",
                        event.target.value as ContactFormSubmission["mobilityStage"]
                      )
                    }
                    error={Boolean(errors.mobilityStage)}
                    aria-invalid={Boolean(errors.mobilityStage)}
                  >
                    <option value="">{copy.fields.mobilityStage.placeholder[locale]}</option>
                    {copy.fields.mobilityStage.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label[locale]}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>
            ) : null}
          </div>
        </FormGroup>

        <FormGroup
          step="03"
          title={copy.groups.preferences.title[locale]}
          description={copy.groups.preferences.description[locale]}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              label={copy.fields.preferredLanguage.label[locale]}
              htmlFor="preferredLanguage"
              required
              error={errors.preferredLanguage}
            >
              <Select
                id="preferredLanguage"
                name="preferredLanguage"
                value={formData.preferredLanguage}
                onChange={(event) =>
                  updateField(
                    "preferredLanguage",
                    event.target.value as ContactFormSubmission["preferredLanguage"]
                  )
                }
                error={Boolean(errors.preferredLanguage)}
                aria-invalid={Boolean(errors.preferredLanguage)}
              >
                <option value="">{copy.fields.preferredLanguage.placeholder[locale]}</option>
                {copy.fields.preferredLanguage.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label[locale]}
                  </option>
                ))}
              </Select>
            </FormField>

            <FormField
              label={copy.fields.preferredContactMethod.label[locale]}
              htmlFor="preferredContactMethod"
              error={errors.preferredContactMethod}
            >
              <Select
                id="preferredContactMethod"
                name="preferredContactMethod"
                value={formData.preferredContactMethod}
                onChange={(event) =>
                  updateField(
                    "preferredContactMethod",
                    event.target.value as ContactFormSubmission["preferredContactMethod"]
                  )
                }
                error={Boolean(errors.preferredContactMethod)}
                aria-invalid={Boolean(errors.preferredContactMethod)}
              >
                <option value="">{copy.fields.preferredContactMethod.placeholder[locale]}</option>
                {copy.fields.preferredContactMethod.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label[locale]}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>
        </FormGroup>

        <div
          className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="companyWebsite">{copy.fields.companyWebsite.label[locale]}</label>
          <input
            id="companyWebsite"
            name="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.companyWebsite}
            onChange={(event) => updateField("companyWebsite", event.target.value)}
          />
        </div>

        <div className="space-y-3 rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-subtle))] p-4 sm:p-5">
          <Checkbox
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            label={copy.fields.consent.label[locale]}
            className="mt-0.5"
          />
          {errors.consent ? <FormError>{errors.consent}</FormError> : null}
          <p className="text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
            {copy.privacyNotice.text[locale]}{" "}
            <Link
              href={getLocalizedHref(locale, "privacy")}
              className="font-medium text-[rgb(var(--primary))] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
            >
              {copy.privacyNotice.linkLabel[locale]}
            </Link>
            .
          </p>
        </div>

        {statusContent ? (
          <div
            className={cn(
              "flex items-start gap-3 rounded-[var(--radius-lg)] border px-4 py-4",
              getStatusStyles(status).wrapper
            )}
            role="status"
            aria-live="polite"
          >
            {(() => {
              const Icon = getStatusStyles(status).icon;
              return (
                <Icon
                  className={cn(
                    "mt-0.5 h-5 w-5 shrink-0",
                    getStatusStyles(status).iconClassName
                  )}
                />
              );
            })()}
            <div>
              <p className="font-medium">{statusContent.title[locale]}</p>
              <p className="mt-1 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                {statusContent.description[locale]}
              </p>
            </div>
          </div>
        ) : null}

        <div className="flex flex-col gap-4 border-t border-[rgb(var(--border-muted))] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
            {copy.submitNote[locale]}
          </p>
          <Button
            type="submit"
            isLoading={submitting}
            className="w-full sm:min-w-[15rem] sm:w-auto"
          >
            {submitting ? copy.submitLabel.loading[locale] : copy.submitLabel.default[locale]}
          </Button>
        </div>
      </form>
    </div>
  );
}
