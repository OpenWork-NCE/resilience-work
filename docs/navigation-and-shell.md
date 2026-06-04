# Navigation And Shell

## Overview

The public application shell now lives in the localized layout and wraps every localized route with:

- `SkipLink`
- `SiteHeader`
- `main#main-content`
- `SiteFooter`

This keeps the App Router layout server-first while limiting client code to the interactive parts of navigation, theme switching, locale switching, dropdown behavior, and mobile menu behavior.

## Architecture

Created or finalized files:

- `src/components/layout/site-shell.tsx`
- `src/components/layout/skip-link.tsx`
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/components/navigation/desktop-navigation.tsx`
- `src/components/navigation/mobile-navigation.tsx`
- `src/components/navigation/mobile-navigation-trigger.tsx`
- `src/components/navigation/navigation-link.tsx`
- `src/components/navigation/navigation-dropdown.tsx`
- `src/components/navigation/breadcrumbs.tsx`
- `src/components/theme/theme-toggle.tsx`
- `src/components/locale/locale-switcher.tsx`
- `src/lib/navigation/get-navigation.ts`
- `src/lib/navigation/get-localized-href.ts`
- `src/lib/navigation/is-active-route.ts`
- `src/app/[locale]/navigation-preview/page.tsx`

Compatibility re-exports were kept in:

- `src/components/theme-toggle.tsx`
- `src/components/language-switcher.tsx`

## Data Sources

The shell consumes centralized registries instead of duplicating labels or hrefs:

- `src/content/navigation.ts`
- `src/content/routes.ts`
- `src/content/brand.ts`
- `src/content/pages/expertise.ts`

`getLocalizedNavigation`, `getLocalizedExpertiseItems`, and `getLocalizedCta` resolve bilingual labels and locale-aware hrefs from those registries.

## Header

`SiteHeader` is a client component because it manages:

- sticky scroll state
- desktop dropdown state
- mobile menu state

Visual behavior:

- home page at top: lighter surface with subtle transparency
- internal pages and scrolled state: more opaque surface, soft border, soft shadow
- no height collapse that would create layout shift

The desktop header layout is:

- logo
- main navigation
- locale switcher
- theme toggle
- primary CTA

## Desktop Navigation

`DesktopNavigation` renders top-level links from the centralized navigation registry.

`NavigationDropdown` handles the `Expertise` group:

- opens on hover, focus, or click
- closes on outside click, blur-out, or `Escape`
- supports keyboard tab flow
- highlights the parent section when an expertise detail route is active

`isActiveRoute` normalizes locale-prefixed pathnames and supports parent-route activation for nested pages.

## Mobile Navigation

`MobileNavigation` renders a right-side drawer:

- overlay click closes it
- `Escape` closes it
- body scroll is locked while open
- focus is moved into the panel when opened
- tab focus is trapped inside the panel
- focus can be restored to the trigger when the panel closes from overlay, close button, or `Escape`

On mobile, `Expertise` becomes an accordion instead of a dropdown.

## Locale Switcher

`LocaleSwitcher` derives the current pathname from navigation state, strips and reapplies the locale prefix, and preserves the current search params.

Because route slugs are currently shared between locales, switching `/fr/expertise/international-mobility` correctly targets `/en/expertise/international-mobility`.

## Theme Toggle

`ThemeToggle` uses the existing `next-themes` setup:

- default theme: system
- persistent user choice after interaction
- dynamic label from i18n
- mounted guard to avoid hydration mismatch

## Footer

`SiteFooter` is data-driven and uses:

- brand summary
- public navigation
- expertise links
- localized service languages
- contact registry

Social links are filtered by the central brand registry. LinkedIn remains hidden until official confirmation, and Facebook stays hidden because it is disabled.

## Breadcrumbs

`Breadcrumbs` is a reusable component that accepts explicit items. `buildBreadcrumbsFromPath` provides a route-registry-based helper for future internal pages and preview scenarios.

## Accessibility

Implemented accessibility patterns include:

- skip link targeting `#main-content`
- semantic `nav`, `header`, `main`, and `footer`
- clear active states with `aria-current`
- focus-visible rings on interactive controls
- keyboard-closable dropdown and mobile drawer
- no language flags
- theme and locale controls with accessible labels

## Motion And Performance

Motion stays deliberately restrained:

- subtle dropdown reveal
- subtle mobile panel reveal
- no permanent ambient animation in navigation

Performance decisions:

- localized layout stays server-side
- only navigation/theme/locale interaction lives on the client
- scroll listener updates state only when crossing the sticky threshold
- no extra dependencies were added

## Remaining Confirmations

- official LinkedIn visibility should remain disabled until confirmed
- legal/privacy routes are still intentionally omitted to avoid dead links
- page-level business copy for final internal pages and landing content still remains to be implemented later
