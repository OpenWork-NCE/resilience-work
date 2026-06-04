# Legal Pages

## Routes

- `/fr/legal-notice`
- `/en/legal-notice`
- `/fr/privacy`
- `/en/privacy`
- `/fr/cookies`
- `/en/cookies`
- `/fr/accessibility`
- `/en/accessibility`

## Content Model

Legal content is centralized in `src/content/legal/`:

- `legal-notice.ts`
- `privacy-policy.ts`
- `cookie-policy.ts`
- `accessibility.ts`
- `cookie-registry.ts`
- `pending-legal-information.ts`

Shared legal document typing lives in `src/types/legal.ts`.

## Public Information

Currently published because confirmed:

- Resilience@Work
- Jocelyne Katshinda
- Founder / Managing Director wording already confirmed in brand content
- `admin@resilienceatwork.eu`
- `+32 470 542 390`
- `https://resilienceatwork.eu`

## Information Intentionally Not Published Yet

The public pages do not expose:

- legal form
- company registration number
- VAT number
- registered office
- hosting provider identity
- hosting country
- final competent supervisory authority
- DPO identity

These items remain tracked in `pending-legal-information.ts`.

## Rendering Rules

- Confirmed data is rendered normally.
- Unconfirmed sensitive/legal data is not displayed as fake values.
- A public explanatory notice is shown where relevant instead of raw placeholders.
- No `TODO`, `PLACEHOLDER` or similar markers are exposed publicly.

## Metadata

The legal pages use localized metadata through the existing route metadata helper.

## Sitemap And Robots

- Legal pages are included in `src/app/sitemap.ts`.
- Internal preview routes are excluded in `src/app/robots.ts`.

## Translation

All legal pages are bilingual and content-driven.

## Update Process

1. Confirm the missing legal information with a human reviewer.
2. Update the content files in `src/content/legal/`.
3. Update `pending-legal-information.ts`.
4. Re-run:
   - `npm run lint`
   - `npx tsc --noEmit`
   - `npm run validate:content`
   - `npm run build`

## Important

These pages improve technical readiness but do not replace human legal validation before publication.
