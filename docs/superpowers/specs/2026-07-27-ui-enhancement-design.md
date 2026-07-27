# Design: UI/UX enhancement - visual coherence, ergonomics, conversion

**Date:** 2026-07-27  
**Project:** Resilience@Work (`resilience-at-work`)  
**Status:** Approved and implemented (2026-07-27)  
**Related:** Deep audit conversation (2026-07-27); design system tokens in `src/app/globals.css`

---

## 1. Goal

Raise the site from **“solid professional brochure” (~7.2/10)** to **“calm institutional premium”** without a brand redesign:

1. **Unify** section rhythm, eyebrows, type hierarchy, and button usage.
2. **Fix** first-impression and touch ergonomics (header on hero, CTA sizes, scroll offset).
3. **Simplify** high-friction pages (Contact, long Expertise detail).
4. **Strengthen trust** with a lightweight “confidence / proof” pattern (no fake testimonials).

**Out of scope for this design:** new product features, CMS, analytics product work, full dark-mode redesign, replacing Inter/Space Grotesk, spa/cyan palette shifts.

---

## 2. Product & design positioning

| Dimension | Decision |
|-----------|----------|
| Product type | B2B professional services - psychosocial prevention, mobility, crisis, training |
| Style target | **Trust & Authority** + restrained **Hero-centric** (ui-ux-pro-max) |
| Mood | Calm, confidential, institutional, human - not spa, not startup neon |
| Palette | Keep navy / teal token system; no cyan-wellness rebrand |
| Typography | Keep **Inter** (body) + **Space Grotesk** (display/accent) |
| Motion | Subtle entrance; respect `prefers-reduced-motion`; prefer ≤360ms for section reveals |

**Anti-patterns to avoid:** random glassmorphism, purple AI gradients, emoji icons, multiple competing primary CTAs per viewport, inventing client logos/testimonials.

---

## 3. Principles (must match current development design)

| Principle | Application |
|-----------|-------------|
| Content-driven | Copy stays in `src/content/**`; UI structure in components |
| Token-driven | Colors, spacing, radius, shadows via CSS variables / shared components |
| No hardcoding | Avoid raw `rgba(7,29,40,…)` overlays; use tokens + `color-mix` |
| Bilingual parity | Any new UI chrome strings: FR + EN (`messages` or content as appropriate) |
| Primitive-first | Prefer `Section`, `SectionHeader`, `Button`, single `Eyebrow` over one-off layouts |
| Minimal scope per phase | Ship Phase A before B; do not mix P3 polish into A |
| Accessibility floor | WCAG AA contrast, ≥44×44px touch targets, visible focus, skip link kept |

---

## 4. Visual system rules (source of truth)

### 4.1 Surface climates (max 3)

| Climate | Token / tone | Allowed use |
|---------|----------------|-------------|
| **A - Default** | `--background` / `Section tone="default"` | Editorial body, most content |
| **B - Muted** | `--surface-muted` or `--surface-subtle` / `tone="muted"` | Alternating sections, methodology, FAQ |
| **C - Inverse** | `--surface-inverse` / `tone="inverse"` | Hero full-bleed, footer, **one** strong final CTA band |

**Rule:** Home and marketing pages cycle **A → B → A → B → C(final)**.  
Do not introduce a fourth climate (e.g. multi-stop marketing gradients) unless it is a variant of C using tokens only.

**Home today (to normalize):**

| Section | Today | Target |
|---------|--------|--------|
| Hero | Inverse full-bleed | **C** (keep) |
| Highlights strip | Floating elevated card | **A** surface elevated (bridge - allowed exception as child of A, not a climate) |
| Introduction | Default | **A** |
| Expertise | Custom subtle + border | **B** via `Section` |
| Impact | Custom gradient | **B** or **A** - drop unique gradient |
| Methodology | Muted | **B** |
| Profile | Default + media | **A** |
| Final CTA | Inverse gradient card | **C** panel (token gradient optional, no freehand hex) |

### 4.2 Section primitive

- All major page sections use `<Section spacing="…" tone="…">` (or an agreed thin wrapper that still sets the same tokens).
- Default `spacing`: marketing = `lg`; dense legal = `md`; compact strips = `sm`.
- **Forbidden for new work:** ad-hoc `<section className="py-[var(--section-space-lg)] bg-…">` that bypasses tone tokens.

### 4.3 Eyebrow (single component)

**Keep one implementation only** - canonical: `src/components/ui/content.tsx` `Eyebrow` (font-accent, 0.72rem, semibold, tracking 0.16em, accent color).

| Action | Detail |
|--------|--------|
| Delete / re-export | `Eyebrow` in `shared/section-header.tsx` must re-export or use the canonical one |
| Signature | `0.72rem · semibold · tracking-[0.16em] · uppercase · text-accent · font-accent` |
| Usage | Always above H1/H2 section titles; not used as body labels |

### 4.4 Type hierarchy

| Role | Implementation | Notes |
|------|----------------|-------|
| Display H1 | `font-display` + existing clamps on heroes | One H1 per page |
| Section H2 | `SectionHeader` title styles only | Prefer not reinventing clamps per page |
| Card / step H3 | Shared class or small `Heading` primitive | e.g. `text-xl sm:text-2xl font-semibold leading-snug` - **same everywhere** |
| Body | `text-base sm:text-lg leading-relaxed` + muted for secondary | |
| Meta / labels | Eyebrow or `text-sm` muted | |

### 4.5 Radius map

| Element | Token |
|---------|--------|
| Inputs, small chips | `--radius-md` |
| Buttons | `--radius-md` |
| Cards, feature tiles | `--radius-lg` → `--radius-xl` |
| Large panels, highlight strip, final CTA shell | `--radius-2xl` |
| Pills / badges / fully rounded icon wells | `rounded-full` |

### 4.6 Elevation map

| Level | Token | Use |
|-------|--------|-----|
| 0 | none / border only | Static cards at rest |
| 1 | `--shadow-soft` | Default cards |
| 2 | `--shadow-card` | Floating strips (highlights) |
| 3 | `--shadow-elevated` | Hover / important panels |
| 4 | `--shadow-floating` | Mobile action bar, sticky chrome |

Hover: one step up max; prefer border + shadow, not large layout shift.

### 4.7 Buttons & CTAs

| Rule | Detail |
|------|--------|
| Touch | **Minimum height 44px** for all interactive CTAs in chrome and primary actions (`md` = `h-11`; deprecate `sm` for header CTA or bump `sm` to `h-11`) |
| Primary count | **≤1 primary button** visible per viewport |
| Header CTA | Always primary brand (or inverse-outline when on inverse header) |
| Inverse surfaces | Use `variant="inverse"` / outline-on-inverse recipes **defined once** in `Button` - no multi-line `className` overrides in Final CTA |
| Labels | Prefer one site-wide primary phrase (e.g. contact / schedule conversation) - align FR/EN in content/nav CTAs over time |

### 4.8 Motion

| Kind | Duration | Notes |
|------|----------|--------|
| Micro (hover, focus) | 150–240ms | Existing `--duration-*` |
| Section reveal | ≤360ms preferred (current reveal 520ms → tune down in Phase B) | Keep reduced-motion = instant/opacity-only |
| Sticky expertise | Keep but do not invent more scroll-jacking patterns | |

### 4.9 Hero overlays

Replace hard-coded `rgba(7,29,40,…)` gradients with mixes from `--surface-inverse` / `--overlay-strong` so future night-blue token tweaks stay consistent.

---

## 5. Phase A - Foundation fixes (implement first)

**Objective:** Coherence + first-screen ergonomics without page restructure.

### A1. Unify Eyebrow

- Single source in `ui/content.tsx`.
- `SectionHeader` consumes it.
- Grep: no second Eyebrow style.

### A2. Header on inverse hero (home)

When `isHome && !isScrolled`:

| Element | Behavior |
|---------|----------|
| Header surface | Transparent / dark glass over hero (not light glass) |
| Logo | `variant` suitable for dark background (light wordmark) |
| Nav links | Light text / muted light hover |
| Theme toggle / mobile trigger | Inverse-friendly borders |
| CTA | Outline light or solid light-on-dark |

When scrolled **or** non-home: keep current light solid/blur header.

**Do not break:** sticky, mobile drawer, focus rings, locale switcher.

### A3. Touch targets

- Header primary CTA ≥44px height.
- Audit icon buttons already at `h-11`; leave them.
- Document: no new `h-9` primary actions in chrome.

### A4. Scroll padding

- `html { scroll-padding-top: … }` matching sticky header (~5rem / `min-h-20` + buffer).

### A5. Overlay tokens

- Hero (home + portfolio if applicable): gradient via CSS variables / `color-mix`.

### A6. Final CTA button cleanup

- Refactor `final-cta-section` to use official button variants only.
- Optional: add `variant="outlineInverse"` if needed once in `button.tsx`.

### A7. Contrast check

- Verify `muted-foreground` on `surface-muted` and dark mode secondary text ≥4.5:1 (body) / ≥3:1 (large).
- If fail: darken muted token one step in light mode only (document values in implementation PR).

### A8. Acceptance (Phase A)

- [ ] Visual: home top of page - logo/nav readable on hero
- [ ] Visual: scrolled header still light and solid
- [ ] Eyebrow identical on Introduction vs Expertise vs Contact
- [ ] No `h-9` primary CTA in header
- [ ] Keyboard focus visible on header controls over hero
- [ ] Light + dark smoke (header + hero)
- [ ] `npm run validate:content` / lint / tsc clean if code touched

---

## 6. Phase B - Rhythm & page structure

**Objective:** Same “language” on every marketing page; reduce cognitive load.

### B1. Home through `<Section>`

Migrate home sections to `Section` + tones per §4.1 table.  
Highlights strip may stay as overlapping card (exception) but parent background is A.

### B2. Impact section

Remove unique vertical gradient; use tone B or A + existing bento.

### B3. H3 primitive

Shared heading class for methodology steps, training cards, expertise feature titles.

### B4. Expertise detail length

Target structure (6 blocks max):

1. Hero + breadcrumbs  
2. Introduction  
3. Challenges **or** Services (prefer merge: “Enjeux & services”)  
4. Outcomes + process (timeline compact)  
5. Audiences + delivery (compact meta)  
6. Related + final CTA  

Optional desktop: sticky mini-TOC (anchors) for long pages - not required if merged well.

### B5. Contact page layout

**Target information architecture:**

```
[ Hero short ]
[ Main: Form (2/3) | Direct contact rail (1/3) ]
[ FAQ accordion - muted ]
[ Optional single WhatsApp/inverse CTA - or fold WhatsApp into rail ]
```

Remove or demote redundant mid-page marketing blocks (duplicate quick actions / delivery if already in rail).

### B6. Mobile header conversion

Add icon or compact contact control next to burger (MessageCircle → contact route), aria-labelled.

### B7. Acceptance (Phase B)

- [ ] Home section backgrounds only A/B/C
- [ ] Contact primary path = form + direct contacts without 6 full-width bands
- [ ] Expertise detail shorter or TOC present
- [ ] Mobile can reach contact in ≤1 tap from header

---

## 7. Phase C - Trust & conversion

**Objective:** Trust & Authority pattern without inventing social proof.

### C1. Confidence strip (Home)

New section **after highlights or after introduction** (prefer after highlights):

| Content (from confirmed brand data only) | Example |
|------------------------------------------|---------|
| Regions | Africa / Europe / Middle East |
| Service languages | FR / EN / IT |
| Confidentiality / human approach | Short claim already used in copy |
| Expertise count or formats | 4 domaines / présentiel + distanciel |

**UI:** 4-up strip reusing Highlights visual language (not a new climate).  
**Content:** `src/content/pages/home.ts` (+ EN). No fake metrics.

### C2. CTA label alignment

Inventory nav + hero + final + expertise CTAs; converge FR/EN primary labels to 1–2 phrases.

### C3. Final CTA hierarchy

Primary button + secondary as outline or text link (WhatsApp), not two equal solid weights.

### C4. Optional testimonials

Only when client-approved content exists; use existing `Quote` in `ui/content.tsx`.

### C5. Acceptance (Phase C)

- [ ] Confidence strip visible above fold-ish on desktop (within first 1.5 screens)
- [ ] No fabricated logos or quotes
- [ ] Primary CTA wording consistent across home hero and final band

---

## 8. Phase D - Polish (backlog)

| Item | Notes |
|------|--------|
| Reduce section reveal to ≤360ms | `lib/animations.ts` |
| Expertise sticky UX | Progress indicator; ensure reduced-motion path |
| Portfolio mid-page accordion | Service details collapse on mobile |
| Shared element card → detail | Optional, low priority |
| Dark-mode full QA pass | Header inverse, overlays, secondary CTA |
| About IA | Optional dedicated org page vs personal portfolio - product decision |

---

## 9. Architecture / files (implementation map)

| Area | Likely files |
|------|----------------|
| Tokens / scroll-padding / overlays | `src/app/globals.css`, hero sections |
| Eyebrow unify | `src/components/ui/content.tsx`, `src/components/shared/section-header.tsx`, consumers |
| Header inverse | `src/components/layout/site-header.tsx`, `src/components/brand/logo.tsx`, nav children if needed |
| Buttons | `src/components/shared/button.tsx`, `final-cta-section.tsx`, hero CTAs |
| Home rhythm | `src/components/home/*` |
| Expertise | `src/components/expertise/*`, content only if merging copy blocks |
| Contact | `src/components/contact/*` |
| Confidence strip | new home component + `src/content/pages/home.ts` |
| i18n chrome | `messages/fr.json`, `messages/en.json` if new aria labels |

No new routes required for Phases A–C.

---

## 10. Testing & verification

| Layer | Method |
|-------|--------|
| Visual | Light + dark; 375 / 768 / 1024 / 1440; home, portfolio, expertise detail, contact |
| A11y | Keyboard tab through header (on hero + scrolled); skip link; focus rings |
| Touch | Header CTA and mobile contact control ≥44px |
| Content | `npm run validate:content` after content edits |
| Types / lint | `npx tsc --noEmit`, `npm run lint` |
| Regression | No hydration mismatch on theme/consent (prior fix must remain) |

---

## 11. Success metrics (qualitative)

| Metric | Before (audit) | Target |
|--------|----------------|--------|
| Section climate count (home) | ~5–6 visual modes | ≤3 |
| Eyebrow variants | 2 | 1 |
| Header readability on hero | Risk | Pass visual QA |
| Contact page “bands” | ~6 | ≤3–4 |
| Trust signals above mid-page | Weak | Explicit confidence strip |
| Design system violations (long Button className) | High on inverse CTA | Near zero |

---

## 12. Risks & mitigations

| Risk | Mitigation |
|------|------------|
| Inverse header breaks logo/nav assets | Explicit logo dark/light variants; visual QA home only first |
| Contact restructure drops useful FAQ | Keep FAQ; move below fold |
| Expertise merge loses SEO content | Keep full copy in content model; collapse presentation only |
| Scope creep into rebrand | This doc forbids palette/font replacement |
| Sticky expertise conflict with Section migration | Treat sticky block as inner content of tone B section |

---

## 13. Open decisions (need product owner if blocking)

1. **Primary CTA label** site-wide: keep “Planifier un échange” vs “Nous contacter” vs split by context?  
2. **About nav item:** keep redirect to portfolio, or future org page?  
3. **Confidence strip copy:** approve exact FR/EN claims before Phase C.  
4. **Expertise merge preference:** challenges+services vs outcomes+process first?

Until decided: Phase A proceeds without these; Phase B/C use defaults stated in this doc (portfolio redirect stays; strip uses existing brand facts; expertise prefer challenges+services merge).

---

## 14. Implementation order (for writing-plans / execution)

1. Phase A (A1–A8) - foundation  
2. Phase B (B1–B7) - rhythm & IA  
3. Phase C (C1–C5) - trust  
4. Phase D - backlog only when A–C signed off  

Each phase = its own implementation plan + PR if desired.

---

## 15. Approval trail

| Item | Status |
|------|--------|
| Deep audit delivered | Done (conversation) |
| User chose deliverable **A** (design spec) | Done |
| This written spec | **Pending user review** |
| Implementation plan | After approval of this spec (or of Phase A alone) |

---

## 16. Review checklist for the reader

- [ ] Agree with 3-climate surface system  
- [ ] Agree Phase A is first ship  
- [ ] Agree not to change fonts/palette fundamentally  
- [ ] Resolve or defer open decisions §13  
- [ ] Authorize writing-plans for Phase A (or full A→C)

**Path:** `docs/superpowers/specs/2026-07-27-ui-enhancement-design.md`
