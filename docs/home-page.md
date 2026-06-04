# Home Page

## Overview

The homepage is now implemented as a section-based landing page driven by the centralized content layer. It keeps the global shell intact and uses dedicated home components rather than a single oversized page file.

## Implemented Sections

The homepage follows this order:

1. Hero premium immersif
2. Barre de repères qualitatifs
3. Introduction éditoriale
4. Section Expertises
5. Section Impact
6. Section Méthode d’intervention
7. Section Présence internationale
8. Section Profil de Jocelyne Katshinda
9. CTA final premium

## Components

Created components:

- `src/components/home/hero-section.tsx`
- `src/components/home/highlights-strip.tsx`
- `src/components/home/introduction-section.tsx`
- `src/components/home/expertise-section.tsx`
- `src/components/home/expertise-sticky-reveal.tsx`
- `src/components/home/expertise-mobile-grid.tsx`
- `src/components/home/impact-section.tsx`
- `src/components/home/impact-bento-grid.tsx`
- `src/components/home/methodology-section.tsx`
- `src/components/home/international-section.tsx`
- `src/components/home/profile-section.tsx`
- `src/components/home/final-cta-section.tsx`

## Content Sources

The homepage consumes centralized data from:

- `src/content/pages/home.ts`
- `src/content/pages/expertise.ts`
- `src/content/pages/international.ts`
- `src/content/brand.ts`
- `src/content/navigation.ts`
- `src/content/assets.ts`

Added to the home content model:

- `homePage.expertise`
- `homePage.methodology`

Adjusted for compliance with the brief:

- removed unconfirmed “Founder / Fondatrice” mentions from homepage/profile-related content

## Hero

The hero uses:

- `/images/hero/resilience-at-work-hero.webp`
- centralized `homePage.hero`
- centralized CTA routing

Design choices:

- full-bleed image with layered overlay
- left-aligned editorial content
- restrained fade-up staging through existing motion primitives
- stacked CTAs on small screens

## Overlay Strategy

The hero overlay combines:

- a directional dark gradient for readability
- a subtle radial highlight to soften the composition

The treatment is kept strong enough for text contrast while preserving the image in both light and dark themes.

## Expertise Section

Desktop:

- editorial two-column layout
- left column with scroll-driven progression through expertise blocks
- sticky right column with the currently active image
- no scroll hijacking

Mobile and tablet:

- image-led editorial cards
- one CTA per expertise item
- dedicated section CTA to the global expertise page

## Impact Section

The impact section uses an editorial bento grid:

- varied card spans
- no fake metrics
- short benefit statements only
- subtle hover lift from the existing design language

## Methodology Section

The methodology section is built from centralized content:

- four editorial steps
- clear numbering
- card-based rhythm
- readable vertical-to-horizontal adaptation across breakpoints

## International Section

The international block combines:

- one principal image-led editorial feature
- a short regional card grid
- no flags or clichéd geographic visuals

Assets used:

- `/images/international/africa-europe-middle-east.webp`
- `/images/international/africa.webp`
- `/images/international/europe.webp`
- `/images/international/middle-east.webp`

## Profile Section

The profile section uses:

- `/images/jocelyne/jocelyne-katshinda-portrait.webp`
- `homePage.profile`
- `brand.person`

The copy remains intentionally cautious and excludes unconfirmed claims, credentials, years of experience, or founder positioning.

## Final CTA

The closing CTA uses:

- `homePage.finalCta`
- centralized contact CTA
- centralized WhatsApp CTA

The section is visually stronger than the rest of the page but remains editorial and restrained.

## Motion

The homepage only uses existing motion primitives:

- `fadeUp`
- staggered reveals via `AnimatedSection`, `StaggerContainer`, and `StaggerItem`
- restrained image transitions in the desktop expertise reveal

## Reduced Motion

Fallback behavior:

- all critical content remains immediately visible
- desktop expertise reveal still works as content even without animated transitions
- no parallax or looping animation is introduced

## Responsive Strategy

Responsive choices include:

- flexible hero width and stacked CTA layout
- mobile-first expertise card grid
- stacked bento cards on narrow screens
- timeline-style methodology collapsing naturally into a single-column reading flow
- region cards and profile layout collapsing to one column on smaller screens

## Accessibility

Implemented safeguards:

- one `h1` on the homepage
- semantic sections
- explicit links and buttons
- no critical hover-only content
- centralized alt text
- contrast-aware overlays and inverse sections
- compatibility with existing skip link and shell

## Performance

Performance choices:

- `next/image` used throughout
- hero image marked `priority`
- viewport-aware `sizes`
- no new dependencies
- client logic limited mainly to the desktop expertise reveal

Recommended follow-up:

- verify image weights and compression budgets for all homepage assets if Lighthouse optimization becomes a priority
- consider a dedicated social preview image later instead of reusing the hero image

## Metadata

The homepage now uses `getPageMetadata(locale, "home")`, preserving the centralized SEO strategy and temporary Open Graph asset.

## Remaining Arbitrations

- whether the desktop expertise reveal should become more animated or stay as the current restrained version
- whether a dedicated `/[locale]/home-preview` route is truly needed later
- whether a dedicated Open Graph asset should replace the hero image
