# Design: Full site i18n (EN / FR / IT)

**Date:** 2026-07-27  
**Status:** Approved for implementation  
**Product:** Resilience@Work marketing site

---

## 1. Goal

Ship the entire public site in **French**, **English**, and **Italian** with **zero user-facing hardcoded copy** in components or pages. Every title, subtitle, description, CTA, form label, breadcrumb, cookie text, legal body, aria-label, and email template label must resolve from the i18n content system for the active locale.

### Success criteria

- Routes work under `/fr/*`, `/en/*`, `/it/*`
- Default locale is **French** (`defaultLocale: "fr"`)
- Locale switcher offers FR | EN | IT and preserves path + query
- No `locale === "fr" ? "…" : "…"` (or similar) for user-visible strings
- `Locale = "fr" | "en" | "it"` is enforced in types and validation
- `npm run validate:content` fails if any localized field is missing/empty for fr, en, or it
- `npm run build` succeeds
- Italian copy is a **professional draft** derived from existing FR/EN (human-reviewable, not placeholder English)

### Out of scope

- Translating developer-only errors (`throw new Error("useConsent must be…")`)
- Changing visual design, layout, or brand assets
- Professional legal certification of Italian legal pages (drafts are shipped; legal review is a future business step)
- CMS or external translation platform integration

---

## 2. Current state

### Dual i18n system (keep)

| Layer | Path | Role |
|-------|------|------|
| Content layer | `src/content/**` | Editorial + most page copy as `Record<Locale, T>` |
| Messages | `messages/{locale}.json` | UI chrome, a11y microcopy, theme/locale chrome |

### Gaps

1. `Locale` is only `"fr" | "en"`; middleware matcher is `/(fr|en)/`
2. ~5 000 lines of content need an `it` key on every localized field
3. Dozens of components/pages use ternary hardcoding for labels (expertise templates, portfolio, legal TOC, training, contact breadcrumbs, email labels, etc.)
4. `messages/*.json` are incomplete relative to shell needs; no `it.json`
5. Sitemap, SEO OG locale maps, `brand.websiteLocales`, layout casts assume two locales only
6. Contact form already allows preferred language `it` as a **service** language, but the **site** is not available in Italian

---

## 3. Architecture decision

**Keep the dual system** (approved):

- **Content layer** for all page/section editorial: heroes, body copy, section headers, expertise detail pages, legal documents, consultants, partners, navigation labels, CTAs.
- **Messages (next-intl)** for shared UI chrome and pure interface strings: open/close menu, skip link, theme toggle, locale switcher, generic “Home”/breadcrumb labels when not coming from nav content, cookie banner chrome if not already fully in content.

**Do not** migrate the entire editorial corpus into JSON (rejected).  
**Do not** remove next-intl messages entirely (rejected).

### Resolution rules

```
User-visible string?
  ├─ Page/section specific editorial → src/content/** as LocalizedText | LocalizedParagraphs | etc.
  ├─ Shared UI / a11y / shell → messages/{locale}.json via useTranslations / getTranslations
  └─ Never → inline ternary or bare string literal in component JSX
```

Helper already present:

```ts
getLocalizedValue(value: Record<Locale, T>, locale: Locale): T
```

Components receive `locale` (server) or use `useLocale()` (client) and resolve via content or `t()`.

---

## 4. Core type and routing changes

### Types (`src/types/content.ts`)

```ts
export type Locale = "fr" | "en" | "it";
export type LocalizedText = Record<Locale, string>;
// all Localized* types inherit Locale automatically
```

### Routing (`src/i18n/routing.ts`)

```ts
locales: ["fr", "en", "it"],
defaultLocale: "fr",
```

### Middleware (`src/middleware.ts`)

```ts
matcher: ["/", "/(fr|en|it)/:path*"]
```

### Request config (`src/i18n/request.ts`)

Validate against the three locales; load `messages/${locale}.json`.

### Locale switcher

`const locales: readonly Locale[] = ["fr", "en", "it"]`

### Brand / sitemap / SEO

- `brand.websiteLocales: ["fr", "en", "it"]`
- `sitemap.ts` iterates three locales
- OG: `fr_FR` | `en_US` | `it_IT`
- `isSupportedLocale` accepts `it`
- Layout / ConsentProvider locale casts use `Locale`

### Validation (`src/lib/content/validate-content.ts`)

For any object that looks localized (`fr` in obj), require **non-empty `fr`, `en`, and `it`** (string or array).  
Fail the script on missing Italian the same way as missing French/English.

Optional follow-up (nice-to-have in same effort): key parity check between `messages/fr.json`, `en.json`, `it.json`.

---

## 5. Content layer: add Italian everywhere

Every file under `src/content` that contains `{ fr: …, en: … }` gains `it: …`.

| File | Responsibility |
|------|----------------|
| `pages/home.ts` | Full home: hero, intro, confidence, expertise, impact, methodology, profile, consultants, final CTA |
| `pages/expertise.ts` | Landing + four detail pages + shared section copy used by templates |
| `pages/training.ts` | Training catalogue + delivery copy |
| `pages/contact.ts` | Contact page + form + FAQ + validation messages |
| `pages/about.ts` | About (if still used) |
| `pages/jocelyne-katshinda.ts` | Portfolio page |
| `pages/international.ts` | Regions |
| `consultants.ts` | Consultant bios + `consultantPageCopy` (all section labels) |
| `navigation.ts` | Nav labels + `globalCtas` |
| `audiences.ts` | Audience labels |
| `partners.ts` | Partners section chrome |
| `brand.ts` | Localized role/taglines if any; `websiteLocales` |
| `assets.ts` | Image `alt` for all three locales |
| `legal/*` | Full legal documents + registry descriptions |
| `pending-confirmations.ts` | Pending notices |

### Shared UI copy currently hardcoded in components

Move into content modules (preferred when page-bound) or messages (when global):

Examples of strings to extract (non-exhaustive; implementation must grep and clear all):

- Expertise: “Introduction”, “Enjeux”/“Challenges”, “Services”, “Résultats…”, “Notre démarche”, “Publics concernés”, “Formats d’intervention”, “Expertises connexes”, “En savoir plus”, hero CTAs
- Training: breadcrumbs, catalogue headers, “Discuss your needs”
- Portfolio: expertise grid headers, framework notes, WhatsApp descriptions
- Legal: “Table des matières”, “Sommaire”, “Dernière mise à jour”, “Accueil”
- Contact: breadcrumb “Accueil”
- Email: field labels in `send-contact-email.ts`
- Consultant portfolio ternaries

### Pattern for shared section chrome

Prefer a single nested object per domain, e.g. in `pages/expertise.ts`:

```ts
export const expertiseUiCopy = {
  introductionEyebrow: { fr: "Introduction", en: "Introduction", it: "Introduzione" },
  challengesEyebrow: { fr: "Enjeux", en: "Challenges", it: "Sfide" },
  learnMore: { fr: "En savoir plus", en: "Learn more", it: "Scopri di più" },
  // …
} as const satisfies Record<string, LocalizedText>;
```

Templates import this instead of branching on locale.

For truly global crumbs/labels (`home`, `breadcrumb`, `tableOfContents`), use `messages`:

```json
{
  "common": {
    "home": "Accueil",
    "breadcrumb": "Fil d'Ariane",
    "lastUpdated": "Dernière mise à jour",
    "learnMore": "En savoir plus"
  }
}
```

Implementation may choose content vs messages per string as long as:

1. No hardcoded user-facing text remains
2. All three languages are complete
3. Choice is consistent within a domain

---

## 6. Messages layer

| File | Action |
|------|--------|
| `messages/fr.json` | Expand to cover all shell/UI keys needed after migration |
| `messages/en.json` | Same keys as FR |
| `messages/it.json` | Create; same keys; professional draft Italian |

Namespaces expected (extend as needed during migration):

- `nav` / keep labels primarily in content navigation if already there
- `navigation` (menu open/close, aria)
- `theme`
- `locale`
- `accessibility` (skip, external, backToTop, breadcrumb)
- `footer` (column titles, rights, manage cookies)
- `common` (home, learnMore, lastUpdated, tableOfContents, …)
- `cookies` / consent UI if not fully in legal content
- `contact` validation/API client messages if used via `t()`

Legacy incomplete keys under `home` / `expertise` in messages may be removed if unused after audit, or kept in sync—prefer deleting dead keys to avoid dual sources of truth.

---

## 7. Component and page migration rules

1. **Server components:** `const label = getLocalizedValue(copy.field, locale)`
2. **Client components:** `useTranslations("namespace")` or pass already-localized strings from parent
3. **Forbidden:**  
   `locale === "fr" ? "Accueil" : "Home"`  
   `locale === "fr" ? … : locale === "en" ? … : …`
4. **Allowed non-copy branches:** CSS class names, animation modes, theme values, structural conditionals
5. **Email templates:** resolve labels via `getLocalizedValue` / shared contact label maps with `it`
6. **ConsentProvider:** accept `Locale` including `it`

### Pages to walk (implementation checklist)

- [ ] Layout shell (header, footer, skip, scroll-top, theme, locale)
- [ ] Cookie banner + preferences dialog
- [ ] Home (all sections)
- [ ] Expertise landing
- [ ] Expertise detail template + four slugs
- [ ] Training
- [ ] Jocelyne portfolio
- [ ] Consultant portfolio
- [ ] Contact + form + API email copy
- [ ] Legal notice, privacy, cookies, accessibility
- [ ] Design-system / navigation-preview (if public or dev-only: still no hardcode or gate behind noIndex)
- [ ] Sitemap + metadata helpers

---

## 8. Italian translation policy

- Source of truth for meaning: French (primary) cross-checked with English
- Tone: professional, calm, corporate psychosocial consulting (same as FR/EN)
- Proper nouns / brand: `Resilience@Work`, person names, partner names unchanged
- Service languages list may already include Italian; ensure wording is consistent
- Legal IT: full draft translation; no empty sections. Optional short note that translations are provided for convenience can live in legal content if product wants it later—not required for v1 unless already present for other locales

---

## 9. Implementation order

1. **Foundation** — types, routing, middleware, request, switcher, brand, sitemap, SEO locale maps, validate-content for three locales  
2. **Messages** — complete fr/en + create it for shell  
3. **Shell components** — header/footer/cookies/a11y  
4. **Content IT pass** — all `src/content/**` files (can be batched by file)  
5. **Hardcode purge by domain** — expertise → training → portfolio → home leftovers → contact/email → legal  
6. **Final audit** — grep for ternary copy patterns; validate:content; build  

Commits should be frequent and domain-scoped (foundation, messages, content-home, content-expertise, purge-expertise-ui, etc.).

---

## 10. Testing and verification

| Check | How |
|-------|-----|
| Type completeness | `tsc` / `next build` |
| Content completeness | `npm run validate:content` |
| No hardcoded copy | `rg 'locale === "fr" \\?' src` and manual review of hits |
| Runtime | Manual smoke: switch FR→EN→IT on home, one expertise, contact, one legal page |
| SEO | sitemap includes `/it` URLs; metadata lang correct |

No new e2e framework required for this project phase.

---

## 11. Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Missed ternary in a component | Systematic grep + page walk checklist |
| Dual source of truth (messages vs content) | Prefer content for editorial; delete unused message keys |
| Huge PR | Domain-scoped commits; single feature branch ok |
| Italian legal accuracy | Ship as draft; business can re-review later |
| Partial migration breaks build | Foundation first (types + `it` stubs required by TS), then fill quality |

**TypeScript note:** Adding `it` to `Locale` will make every `satisfies Record<Locale, string>` fail until Italian keys exist. Implementation must add `it` keys in the same change set as the type update (or temporarily use a staged approach with a codemod). Preferred: type change + content updates in coordinated tasks so `validate:content` and build stay green at task boundaries where possible.

---

## 12. Explicit non-goals

- Auto-detect browser language beyond next-intl defaults (default FR is fixed; next-intl may still negotiate among supported locales per library defaults—configuration should not force EN)
- Per-slug translated URL paths (`/expertises` vs `/expertise`) — keep same path segments, only locale prefix changes
- RTL or additional locales beyond it

---

## 13. Decisions log

| Decision | Choice |
|----------|--------|
| Locales | fr, en, it |
| Default | fr |
| IT quality | Professional draft from FR/EN |
| Architecture | Dual: content layer + messages |
| Hardcoded copy | Forbidden for all user-facing text including titles/subtitles/descriptions |
| Legal IT | Full draft, no empty sections |
