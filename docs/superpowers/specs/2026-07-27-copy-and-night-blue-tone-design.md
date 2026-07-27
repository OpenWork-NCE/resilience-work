# Design: Copy refinements + lighter night-blue tone

**Date:** 2026-07-27  
**Project:** Resilience@Work (`resilience-at-work`)  
**Status:** Approved in brainstorming; awaiting user review of this written spec before implementation plan  

## 1. Goal

Apply a small set of brand and editorial corrections requested by the client, without changing site architecture, components, or the overall design system structure.

1. Lighten the “night blue” tone by about **one step** on inverse surfaces and night text (light mode).
2. Replace five specific FR phrases (and aligned EN), using the existing content-layer patterns.

## 2. Principles (must respect existing development design)

| Principle | Application |
|-----------|-------------|
| Content-driven | Editorial strings live in `src/content/**` only |
| Token-driven colors | Color changes only in `src/app/globals.css` CSS variables |
| No hardcoding | Do not put new copy or hex values into components |
| Bilingual parity | Every FR edit has a matching EN edit |
| Minimal scope | No refactors, no new features, no dark-mode redesign |
| Validation | After implementation: content validation + visual smoke of inverse sections |

## 3. Decisions locked with the user

| Topic | Decision |
|-------|----------|
| English | FR + EN updated together |
| Color scope | Light mode `--surface-inverse` + `--foreground` only (not primary buttons) |
| Color amplitude | ~1 tone lighter |
| ONG | Only “Publics accompagnés” (`src/content/audiences.ts`), not training topic audiences |

## 4. Color design

### 4.1 What “night blue” means here

In light mode, the darkest brand surfaces and body text use:

| Token | Current RGB | Role |
|-------|-------------|------|
| `--surface-inverse` | `12 38 51` | Dark panels (footer-style / inverse bands) |
| `--foreground` | `16 43 58` | Main body text on light backgrounds |

**Out of scope for this change:**

- `--primary`, `--primary-hover`, `--primary-active` (buttons / CTAs)
- Entire `.dark` palette
- Shadows / overlays (unless a later visual QA forces a tiny shadow opacity tweak — default: no)

### 4.2 Target values (~1 tone lighter)

Keep the same blue-green family; raise lightness slightly while preserving relative hierarchy (inverse still slightly deeper than foreground).

| Token | Current | Target (approx.) | Intent |
|-------|---------|------------------|--------|
| `--surface-inverse` | `12 38 51` | `18 48 62` | Inverse panels less “black-blue”, still dark enough for white text |
| `--foreground` | `16 43 58` | `22 52 68` | Body text one step softer, contrast remains WCAG-safe on light surfaces |

Implementation note: values are RGB triples already used by `rgb(var(--token))`. Edit only the `:root { ... }` block in `src/app/globals.css`.

### 4.3 Success criteria (color)

- Inverse sections still read as professional night-blue, not mid-grey or teal drift.
- White / inverse-foreground text on `--surface-inverse` remains clearly legible.
- Primary buttons and accents look unchanged.
- Dark mode unchanged.

## 5. Copy design

All edits follow the existing bilingual shape: `{ fr: "...", en: "..." }` (or parallel FR/EN arrays / `feature()` helpers).

### 5.1 Entry / contact CTA title (portfolio final contact)

**Context:** QR / personal entry surface “Prendre contact”, not the corporate home hero.  
**File:** `src/content/pages/jocelyne-katshinda.ts` → `finalContact.title`

| Locale | From | To |
|--------|------|-----|
| FR | `Vous pouvez joindre Jocelyne Katshinda immédiatement` | `Vous pouvez joindre Jocelyne Katshinda directement` |
| EN | `You can contact Jocelyne Katshinda right away` | `You can contact Jocelyne Katshinda directly` |

Capitalization: keep sentence-case as currently stored (leading capital on FR/EN strings).

### 5.2 Psychosocial prevention — risk assessment wording

User request: “évaluation des risques psychosociaux” → “évaluation des facteurs de risques psychosociaux” (expertise services on the overview / “page 4” content model).

To keep listing and detail pages consistent, update **both** the overview service bullet and the detail-page service feature title.

**File:** `src/content/pages/expertise.ts`

| Location | FR from | FR to | EN from | EN to |
|----------|---------|-------|---------|-------|
| `expertiseItems` psychosocial `services.fr[0]` / `services.en[0]` | `Évaluation des risques psychosociaux` | `Évaluation des facteurs de risques psychosociaux` | `Psychosocial risk assessment` | `Psychosocial risk factor assessment` |
| Detail page psychosocial `services` feature `assessment` title | same FR | same FR | same EN | same EN |

**Explicitly not changed in this spec** (unless a later request says so):

- General marketing phrases like “prévenir les risques psychosociaux” (brand, home, SEO, other body copy)
- Feature already titled “Identifier les facteurs de risque” (unchanged)

### 5.3 International mobility — remove “équilibre” under title

**File:** `src/content/pages/expertise.ts` → `expertiseItems` item `internationalMobility` → `summary`

| Locale | From | To |
|--------|------|-----|
| FR | `Accompagner les collaborateurs expatriés dans leur adaptation culturelle, leur équilibre et leur résilience.` | `Accompagner les collaborateurs expatriés dans leur adaptation culturelle et leur résilience.` |
| EN | `Support expatriate employees in their cultural adjustment, well-being and resilience.` | `Support expatriate employees in their cultural adjustment and resilience.` |

**Not in scope:** other uses of “équilibre” (outcomes, training, home, about).

### 5.4 Crisis management — manager accompaniment wording

Avoid repetition of “contexte de tension”. Update list bullet **and** matching detail service title.

**File:** `src/content/pages/expertise.ts`

| Location | FR from | FR to | EN from | EN to |
|----------|---------|-------|---------|-------|
| `expertiseItems` crisis `services` line | `Accompagnement des managers en contexte de tension` | `Accompagnement des managers dans un environnement sous pression` | `Support for managers in high-pressure situations` | `Support for managers in a high-pressure environment` |
| Detail page crisis feature `manager-support` title | same FR | same FR | `Support for managers in high-pressure contexts` | `Support for managers in a high-pressure environment` |

EN is normalized to the same target phrase on overview + detail for consistency.

### 5.5 Audiences — ONG → institutions internationales

**File:** `src/content/audiences.ts` → audience `id: "ngos"`

| Field | From | To |
|-------|------|-----|
| `label.fr` | `ONG` | `Institutions internationales` |
| `label.en` | `NGOs` | `International institutions` |

**Keep** `id: "ngos"` as-is (stable identifier; no route or component depends on the label string). Renaming the id is out of scope.

**Out of scope:** `src/content/pages/training.ts` audience arrays that still say `ONG` / NGOs for specific topics.

### 5.6 Messages JSON

No change required. These strings live in the content layer, not `messages/*.json`.

## 6. Architecture / data flow

```
globals.css (:root tokens)
  → all components using rgb(var(--surface-inverse)) / rgb(var(--foreground))

content/pages/jocelyne-katshinda.ts
  → PortfolioContactCard / final contact section

content/pages/expertise.ts
  → home/expertise grids, expertise landing, ExpertisePageTemplate detail pages

content/audiences.ts
  → portfolio “Publics accompagnés” and any shared audience chips using this list
```

No new modules, types, routes, or API changes.

## 7. Implementation units (for the plan)

1. **Color tokens** — edit `:root` in `src/app/globals.css` only.  
2. **Portfolio contact title** — `jocelyne-katshinda.ts`.  
3. **Expertise copy** — three service areas in `expertise.ts` (overview + detail where mirrored).  
4. **Audiences label** — `audiences.ts`.  
5. **Verify** — grep for old strings; `npm run validate:content`; visual check light mode inverse + expertise/portfolio pages FR/EN.

## 8. Testing / verification

| Check | Method |
|-------|--------|
| Old FR/EN strings gone for in-scope phrases | `rg` / grep on `src/` |
| Content integrity | `npm run validate:content` |
| Typecheck / lint (optional but preferred) | `npx tsc --noEmit`, `npm run lint` |
| Visual | Light mode: body text + inverse footer/panels slightly softer; primary buttons unchanged |
| Locale | Spot-check `/fr/...` and `/en/...` for portfolio final contact, expertise overview/detail, publics |

No automated unit tests exist for content strings; grep + content validator is the project norm.

## 9. Non-goals

- Changing brand summary, SEO metadata, or generic “risques psychosociaux” marketing lines  
- Dark mode palette  
- Primary / accent button colors  
- Training-topic ONG labels  
- Renaming audience id `ngos`  
- Component or layout redesign  

## 10. Risks & mitigations

| Risk | Mitigation |
|------|------------|
| Contrast slightly reduced after lightening inverse | Keep ~1 tone only; smoke-check white text on inverse |
| Missed duplicate string on detail page | Explicit dual locations listed in §5.2 and §5.4 |
| Partial EN update | Spec requires FR+EN pairs for every edit |

## 11. Approval trail

- Bilingual FR+EN: approved  
- Color scope inverse + foreground light mode: approved  
- Amplitude ~1 tone: approved  
- ONG only in publics list: approved  
- Design sections 1–3: approved in brainstorming session  
- This written spec: pending user review before `writing-plans`
