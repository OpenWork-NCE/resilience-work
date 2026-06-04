# Cookie Consent

## Categories

- `necessary`
- `preferences`
- `analytics`
- `marketing`

## Current Status

- Necessary: active
- Preferences: active capability
- Analytics: architecture prepared, no provider configured
- Marketing: architecture prepared, no provider configured

## Storage

- Consent choices are stored in local storage under `resilienceatwork_consent`
- Theme preference is handled by `next-themes`

## Components

- `src/components/consent/consent-provider.tsx`
- `src/components/consent/cookie-banner.tsx`
- `src/components/consent/cookie-preferences-dialog.tsx`
- `src/components/consent/cookie-category-toggle.tsx`
- `src/components/consent/cookie-settings-trigger.tsx`

## Behavior

- First visit without stored consent:
  - banner is displayed
- Accept all:
  - preferences, analytics, marketing set to `true`
- Reject all:
  - optional categories set to `false`
- Customise:
  - dialog opens
- Save:
  - selected values are persisted
- Reset:
  - supported through provider API

## Versioning

- Version is controlled by `NEXT_PUBLIC_CONSENT_VERSION`
- A version mismatch invalidates previous stored consent

## Script Gating

- `src/lib/consent/script-gate.tsx`
- No analytics or marketing script is loaded by default
- The gate exists to keep future integrations isolated and inactive until consent is present

## Tests To Perform

- first visit
- accept all
- reject all
- customise and save
- reopen from footer
- keyboard navigation
- escape to close dialog
- focus restoration
- version change
- no analytics requests before consent
- no marketing requests before consent
