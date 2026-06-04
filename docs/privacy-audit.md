# Privacy Audit

Date: 2026-06-04
Project: Resilience@Work
Scope: public website, contact form, legal readiness, consent readiness

## Audit Summary

This audit reflects the codebase state observed before the legal and consent integration work of step 9.

- Public routes currently present:
  - `/{locale}`
  - `/{locale}/about`
  - `/{locale}/contact`
  - `/{locale}/expertise`
  - `/{locale}/expertise/[slug]`
  - `/{locale}/expertise/training`
  - `/{locale}/training`
  - `/{locale}/jocelyne-katshinda`
  - internal preview routes: `/{locale}/design-system`, `/{locale}/navigation-preview`
  - API route: `/api/contact`
  - download route: `/contact/jocelyne-katshinda.vcf`
- Current public shell:
  - localized App Router layout in `src/app/[locale]/layout.tsx`
  - shared `SiteHeader`, `SiteFooter`, `SiteShell`
  - `next-intl` locale handling
  - `next-themes` theme handling
- Contact processing present:
  - client-side form validation
  - server-side validation
  - honeypot field
  - in-memory rate limiting
  - email delivery abstraction with environment-driven provider selection
- Third-party analytics/pixels:
  - no active analytics provider detected
  - no active marketing pixel detected
  - no external video, map, iframe or social widget detected
- Structured data/scripts:
  - `next/script` is used only for JSON-LD blocks on content pages
  - no third-party script loader detected
- Storage/cookies:
  - theme persistence is handled by `next-themes`
  - no custom consent storage yet
  - no explicit cookie registry yet
- Legal pages:
  - no dedicated public legal pages detected yet
- Metadata routes:
  - no `app/sitemap.ts`
  - no `app/robots.ts`

## Detected Technologies And Behaviors

| Element | Data potentially involved | Purpose | Current status | Likely basis | Consent required | Recipient | Retention to confirm | Action |
| ------- | ------------------------- | ------- | -------------- | ------------ | ---------------- | --------- | ------------------- | ------ |
| Contact form | Name, organisation, email, phone, country/region, subject, message, preferred language, preferred contact method, optional contextual fields, consent | Receive and qualify enquiries | Active | To validate per scenario | No for core reply flow, but legal basis must be validated | Resilience@Work | Yes | Keep and document in privacy policy |
| Contact API | Same as form payload, plus transient technical request metadata | Server-side validation and routing | Active | To validate per scenario | No for core reply flow | Resilience@Work | Yes | Keep and document |
| Transactional email sending | Form data sent to recipient email, reply-to user email | Deliver enquiry internally | Prepared but non-configured by default | Legitimate interest / pre-contractual steps to validate | No for core reply flow | Email provider to confirm | Yes | Keep abstraction, confirm provider |
| Optional user auto-reply | User name and email | Acknowledge receipt | Prepared conceptually, not active | Consent or legitimate interest depending implementation | No additional marketing consent, but behavior must stay prudent | Email provider to confirm | Yes | Document and keep disabled unless configured |
| Honeypot | Bot-submitted fake field | Spam mitigation | Active | Legitimate interest / security | No | Resilience@Work | Not persisted in code path | Keep |
| Rate limiting | Transient IP-derived identifier in memory | Abuse prevention | Active | Legitimate interest / security | No | Resilience@Work runtime | Yes | Document limitations |
| Strictly necessary functionality | Theme state, locale-aware routing, shell interaction | Core website operation | Active | Legitimate interest / necessity | No | Browser and site runtime | Yes | Document |
| Theme preference | Theme preference value | Preserve selected theme | Active | User preference / likely consent-exempt preference storage depending legal review | Possibly exempt, but document carefully | Browser local storage | Yes | Add to registry |
| Language preference | None explicitly stored by custom code detected | Localized route handling | Active | Necessary routing logic | No | N/A | N/A | Document as route-based, not stored by custom code |
| Analytics | Potential usage metrics | Audience measurement | Inactive | Consent if enabled later | Yes | None configured | N/A | Keep architecture only |
| Marketing pixels | Potential tracking identifiers | Advertising / remarketing | Inactive | Consent if enabled later | Yes | None configured | N/A | Keep disabled |
| Embedded video | Potential third-party identifiers | Media display | Inactive | Consent may be required depending provider | To assess if added later | None detected | N/A | None |
| External maps | Potential third-party identifiers | Location display | Inactive | Consent may be required depending provider | To assess if added later | None detected | N/A | None |
| External fonts | IP and request metadata to font provider | Typography delivery | Active through `next/font/google` integration | To confirm | Usually no banner-level consent in itself, but disclose provider use if requests are external at runtime | Google infrastructure to confirm | To confirm | Document accurately |
| Social widgets | Third-party tracking / embeds | Social display | Inactive | Consent if embedded | Yes if added | None detected | N/A | None |
| External social links | User click-out data at destination | Navigation to third-party profiles | Active | User action | No for on-site storage, but external destination should be disclosed generally | WhatsApp, LinkedIn if enabled | N/A | Keep |
| WhatsApp link | User leaves site to WhatsApp | Direct contact option | Active | User request / click | No on-site consent for simple link | WhatsApp once clicked | External platform policy applies | Document as external link |
| vCard download | Contact card file request | Save contact details | Active | User request | No | User browser | N/A | Document |
| Server logs | Minimal server/runtime events | Debugging and incident handling | To confirm | Legitimate interest / security | No | Hosting/runtime provider to confirm | To confirm | Confirm actual hosting/log policy |
| Hosting | Request metadata, page delivery | Site hosting | To confirm | Necessary service delivery | No | Hosting provider to confirm | To confirm | Confirm provider and country |
| CDN | Request metadata, asset delivery | Content delivery | To confirm | Necessary service delivery | No | CDN provider to confirm | To confirm | Confirm if applicable |

## Public Routes And Internal Routes

### Public

- `/{locale}`
- `/{locale}/about`
- `/{locale}/contact`
- `/{locale}/expertise`
- `/{locale}/expertise/[slug]`
- `/{locale}/expertise/training`
- `/{locale}/training`
- `/{locale}/jocelyne-katshinda`
- `/contact/jocelyne-katshinda.vcf`

### Internal / preview

- `/{locale}/design-system`
- `/{locale}/navigation-preview`

These internal routes should remain excluded from crawl-oriented production metadata.

## Scripts Detected

Detected script usage in source:

- `next/script` in:
  - `src/components/contact/contact-page-template.tsx`
  - `src/components/expertise/expertise-page-template.tsx`
  - `src/components/training/training-page-template.tsx`
- Purpose:
  - JSON-LD structured data only
- Not detected:
  - Google Analytics
  - Google Tag Manager
  - Meta Pixel
  - LinkedIn Insight Tag
  - YouTube/Vimeo embeds
  - Cloudflare Turnstile
  - reCAPTCHA
  - Hotjar / Clarity / Mixpanel / Plausible / Umami / Matomo / PostHog

## Cookies And Storages Detected

### Confirmed in code

- Theme persistence via `next-themes`
  - implementation present in `src/components/theme-provider.tsx`
  - storage mechanism likely `localStorage` under the default `theme` key used by `next-themes`
  - exact runtime key should be treated as implementation-derived and documented in the registry
- No custom consent storage yet
- No custom session storage usage detected
- No direct `document.cookie` usage detected in application code
- No custom `localStorage` usage detected besides theme management through `next-themes`

### To confirm in runtime / hosting

- Hosting-level cookies
- Platform cookies set by deployment provider
- Any cookie emitted by infrastructure, CDN, preview platform, or WAF

## Contact Form Audit

### Client

- The form is client-side interactive
- Validation is performed before submission
- No form state persistence in browser storage detected
- No marketing opt-in is mixed into the operational consent checkbox

### Server

- API route: `src/app/api/contact/route.ts`
- Protections:
  - honeypot
  - validation
  - in-memory rate limit
- Logging:
  - no full message body logged
  - only generic server-side error messages logged
- Email delivery:
  - abstracted in `src/lib/email/send-contact-email.ts`
  - environment variables expected
  - provider not configured by default

## Third-Party And External Destinations

- Google Fonts via `next/font/google`
- WhatsApp via `wa.me`
- LinkedIn profile URL present in content but currently disabled in footer rendering
- Mailto links
- Tel links

No embedded third-party widget, player, map or social feed was detected.

## Environment Variables Detected Before Step 9

From `.env.example`:

- `CONTACT_RECIPIENT_EMAIL`
- `CONTACT_FROM_EMAIL`
- `CONTACT_EMAIL_PROVIDER`

No analytics, consent-version, site URL or Turnstile variables were present yet.

## Current Compliance Gaps Identified

- No public legal notice page
- No public privacy policy page
- No public cookie policy page
- No consent banner or consent preference management yet
- No cookie registry yet
- No legal pending-information registry dedicated to publication readiness
- No sitemap metadata route
- No robots metadata route
- No documented legal production checklist yet
- No hosting/provider country confirmation in source
- No retention period confirmation in source
- No privacy-specific contact confirmation in source
- No DPO assessment record in source

## Notes For Implementation

- Keep legal/public content content-driven and bilingual
- Publish only verified facts
- Mask or omit unconfirmed legal information from public pages
- Separate:
  - contact-form operational consent
  - cookie consent
  - any future marketing consent
- Keep analytics and marketing disabled by default
- Avoid introducing third-party scripts unless configuration is explicitly present
