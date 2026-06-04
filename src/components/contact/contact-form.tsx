"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/shared/button";
import { Checkbox, FormError, FormField, Input, Select, Textarea } from "@/components/ui/form";
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

export function ContactForm({ locale }: ContactFormProps) {
  const copy = contactPage.form;
  const [formData, setFormData] = useState<ContactFormSubmission>({
    ...initialValues,
    locale,
  });
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  const selectedSubject = formData.subject;
  const showCrisisFields = selectedSubject === "crisis-management";
  const showTrainingFields = selectedSubject === "training";
  const showMobilityFields = selectedSubject === "international-mobility";

  const statusContent =
    status === "success"
      ? copy.status.success
      : status === "error"
        ? copy.status.error
        : status === "rate-limited"
          ? copy.status.rateLimited
          : null;

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
      setStatus("idle");
      return;
    }

    setErrors({});
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
        return;
      }

      if (payload?.code === "VALIDATION_ERROR" && payload.fieldErrors) {
        setErrors(payload.fieldErrors);
        setStatus("idle");
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

  return (
    <div className="rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6 shadow-[var(--shadow-soft)] sm:p-8">
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
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

          <FormField
            label={copy.fields.subject.label[locale]}
            htmlFor="subject"
            required
            error={errors.subject}
          >
            <Select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={(event) => updateField("subject", event.target.value as ContactSubject)}
              error={Boolean(errors.subject)}
              aria-invalid={Boolean(errors.subject)}
            >
              <option value="">{copy.fields.subject.placeholder[locale]}</option>
              {copy.fields.subject.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label[locale]}
                </option>
              ))}
            </Select>
          </FormField>
        </div>

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
            rows={7}
            value={formData.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder={copy.fields.message.placeholder[locale]}
            error={Boolean(errors.message)}
            aria-invalid={Boolean(errors.message)}
          />
        </FormField>

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

        <div
          className={cn(
            "space-y-5 rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-subtle))] p-5",
            showCrisisFields || showTrainingFields || showMobilityFields ? "block" : "hidden"
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
                  onChange={(event) => updateField("estimatedParticipants", event.target.value)}
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

        <div className="space-y-3">
          <Checkbox
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            label={copy.fields.consent.label[locale]}
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
            aria-live="polite"
          >
            {(() => {
              const Icon = getStatusStyles(status).icon;
              return (
                <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", getStatusStyles(status).iconClassName)} />
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

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
            {copy.submitNote[locale]}
          </p>
          <Button type="submit" isLoading={submitting} className="sm:min-w-[14rem]">
            {submitting ? copy.submitLabel.loading[locale] : copy.submitLabel.default[locale]}
          </Button>
        </div>
      </form>
    </div>
  );
}
