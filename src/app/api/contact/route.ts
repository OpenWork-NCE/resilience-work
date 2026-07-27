import { NextResponse } from "next/server";
import {
  hasContactValidationErrors,
  validateContactFormSubmission,
} from "@/lib/contact/contact-form";
import { checkContactRateLimit } from "@/lib/contact/rate-limit";
import {
  isContactEmailConfigurationError,
  sendContactEmail,
} from "@/lib/email/send-contact-email";
import { isSupportedLocale } from "@/lib/content/get-content";
import type { Locale } from "@/types/content";

function getLocaleFromPayload(payload: Record<string, unknown>): Locale {
  const locale = typeof payload.locale === "string" ? payload.locale : "";
  return isSupportedLocale(locale) ? locale : "fr";
}

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  return forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!payload || typeof payload !== "object") {
    return NextResponse.json(
      {
        success: false,
        code: "VALIDATION_ERROR",
      },
      { status: 400 }
    );
  }

  if (typeof payload.companyWebsite === "string" && payload.companyWebsite.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const locale = getLocaleFromPayload(payload);
  const validation = validateContactFormSubmission(payload, locale);

  if (hasContactValidationErrors(validation.errors)) {
    return NextResponse.json(
      {
        success: false,
        code: "VALIDATION_ERROR",
        fieldErrors: validation.errors,
      },
      { status: 400 }
    );
  }

  const rateLimit = checkContactRateLimit(getClientIdentifier(request));
  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        code: "RATE_LIMITED",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      }
    );
  }

  try {
    await sendContactEmail(validation.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (isContactEmailConfigurationError(error)) {
      console.error("[contact] Email provider is not configured for contact submissions.");
    } else {
      console.error("[contact] Contact submission failed unexpectedly.");
    }

    return NextResponse.json(
      {
        success: false,
        code: "INTERNAL_ERROR",
      },
      { status: 500 }
    );
  }
}
