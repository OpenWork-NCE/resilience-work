# Copy refinements + lighter night-blue tone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Lighten light-mode night-blue tokens by ~1 step and apply five bilingual editorial corrections in the content layer, without changing components or architecture.

**Architecture:** All editorial copy lives in typed TypeScript modules under `src/content/`. Colors are CSS variables in `src/app/globals.css` consumed via `rgb(var(--token))`. Pages and components already read these sources - no component changes are required. Verification uses project norms: exact-string grep and `npm run validate:content` (no unit-test suite for content strings).

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS v4 + semantic CSS variables, next-intl, content modules in `src/content/`.

## Global Constraints

- Spec: `docs/superpowers/specs/2026-07-27-copy-and-night-blue-tone-design.md`
- Content-driven: edit `src/content/**` only for copy; do not hardcode strings in components
- Token-driven colors: edit only `:root` in `src/app/globals.css` for color; do not hardcode RGB/hex in components
- Bilingual parity: every FR change has a matching EN change
- Color scope: light mode `--surface-inverse` and `--foreground` only; do **not** change `--primary*`, `.dark`, shadows, or overlays
- Color targets: `--surface-inverse: 18 48 62`; `--foreground: 22 52 68`
- ONG change only in `src/content/audiences.ts` (id stays `"ngos"`); do **not** change `training.ts` ONG labels
- Do not rename audience id `ngos`
- Do not change generic marketing phrases like “prévenir les risques psychosociaux” outside the exact service titles listed below
- Do not change other uses of “équilibre” outside the international mobility `summary`
- Prefer small commits per task

## File map

| File | Responsibility | Action |
|------|----------------|--------|
| `src/app/globals.css` | Design tokens (`:root` light mode) | Modify `--foreground`, `--surface-inverse` |
| `src/content/pages/jocelyne-katshinda.ts` | Portfolio / QR entry page content | Modify `finalContact.title` FR+EN |
| `src/content/pages/expertise.ts` | Expertise overview items + detail pages | Modify psychosocial services, mobility summary, crisis manager service (overview + detail) |
| `src/content/audiences.ts` | Shared “Publics accompagnés” labels | Modify audience `ngos` labels FR+EN only |

No new files. No component, route, type, or message JSON changes.

---

### Task 1: Lighten night-blue tokens (light mode)

**Files:**
- Modify: `src/app/globals.css` (inside `:root` only, ~lines 54 and 61)
- Test: shell grep assertions below (no separate test file in this repo)

**Interfaces:**
- Consumes: existing CSS variable names `--foreground`, `--surface-inverse`
- Produces: updated RGB triples consumed by any `rgb(var(--foreground))` / `rgb(var(--surface-inverse))` usage

- [ ] **Step 1: Baseline - confirm current token values**

Run:

```bash
rg -n "^\s*--foreground:|^\s*--surface-inverse:" src/app/globals.css
```

Expected (must appear in `:root` block before the `.dark` block):

```
--foreground: 16 43 58;
--surface-inverse: 12 38 51;
```

Also confirm primary is still the pre-change value (must remain after edit):

```bash
rg -n "^\s*--primary:" src/app/globals.css
```

Expected first match in `:root`:

```
--primary: 18 79 120;
```

- [ ] **Step 2: Apply the token update**

In `src/app/globals.css`, inside the `:root { ... }` block only, change exactly these two lines:

**From:**

```css
  --foreground: 16 43 58;
```

**To:**

```css
  --foreground: 22 52 68;
```

**From:**

```css
  --surface-inverse: 12 38 51;
```

**To:**

```css
  --surface-inverse: 18 48 62;
```

Do **not** edit the `.dark { ... }` block. Do **not** change `--primary`, `--primary-hover`, `--primary-active`, shadows, or overlays.

- [ ] **Step 3: Verify tokens**

Run:

```bash
rg -n "^\s*--foreground:|^\s*--surface-inverse:|^\s*--primary:" src/app/globals.css
```

Expected in `:root` (before `.dark`):

```
--foreground: 22 52 68;
--surface-inverse: 18 48 62;
--primary: 18 79 120;
```

Expected in `.dark` (unchanged examples - still present):

```
--foreground: 234 244 246;
--surface-inverse: 239 248 249;
```

Confirm old light-mode values are gone from `:root`:

```bash
rg -n "16 43 58|12 38 51" src/app/globals.css
```

Expected: no matches (or only comments if any; currently none).

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "$(cat <<'EOF'
style: lighten light-mode night-blue tokens by one step

Raise --foreground and --surface-inverse slightly while leaving
primary buttons and dark mode unchanged.
EOF
)"
```

---

### Task 2: Portfolio final-contact title (immédiatement → directement)

**Files:**
- Modify: `src/content/pages/jocelyne-katshinda.ts` (`finalContact.title`, ~lines 347-348)
- Test: grep assertions below

**Interfaces:**
- Consumes: existing `jocelyneKatshindaPage.finalContact.title` shape `Record<"fr" | "en", string>`
- Produces: updated FR/EN title strings for portfolio final contact UI

- [ ] **Step 1: Baseline - old strings present**

Run:

```bash
rg -n "immédiatement|right away" src/content/pages/jocelyne-katshinda.ts
```

Expected:

```
fr: "Vous pouvez joindre Jocelyne Katshinda immédiatement",
en: "You can contact Jocelyne Katshinda right away",
```

- [ ] **Step 2: Apply the copy update**

In `src/content/pages/jocelyne-katshinda.ts`, inside `finalContact.title`, replace:

```ts
    title: {
      fr: "Vous pouvez joindre Jocelyne Katshinda immédiatement",
      en: "You can contact Jocelyne Katshinda right away",
    } satisfies Record<Locale, string>,
```

with:

```ts
    title: {
      fr: "Vous pouvez joindre Jocelyne Katshinda directement",
      en: "You can contact Jocelyne Katshinda directly",
    } satisfies Record<Locale, string>,
```

- [ ] **Step 3: Verify**

Run:

```bash
rg -n "immédiatement|right away" src/content/pages/jocelyne-katshinda.ts
```

Expected: no matches.

Run:

```bash
rg -n "joindre Jocelyne Katshinda directement|contact Jocelyne Katshinda directly" src/content/pages/jocelyne-katshinda.ts
```

Expected: one FR line and one EN line.

- [ ] **Step 4: Commit**

```bash
git add src/content/pages/jocelyne-katshinda.ts
git commit -m "$(cat <<'EOF'
content: say contact Jocelyne directly, not immediately

Align FR/EN portfolio final-contact titles with the approved wording.
EOF
)"
```

---

### Task 3: Expertise editorial corrections (psychosocial, mobility, crisis)

**Files:**
- Modify: `src/content/pages/expertise.ts` (multiple exact locations below)
- Test: grep assertions below

**Interfaces:**
- Consumes: existing `expertiseItems` service arrays/summaries and `feature(...)` titles on detail pages
- Produces: updated overview + detail bilingual strings for three expertise areas

Work through the three sub-edits in one task (same file, same commit). Do not change unrelated “risques psychosociaux”, “équilibre”, or “high-pressure” phrases outside the exact strings listed.

- [ ] **Step 1: Baseline - confirm all in-scope old strings**

Run:

```bash
rg -n "Évaluation des risques psychosociaux|Psychosocial risk assessment|leur équilibre et leur résilience|well-being and resilience|contexte de tension|high-pressure situations|high-pressure contexts" src/content/pages/expertise.ts
```

Expected matches that **will** be changed:

| Approx. location | String |
|------------------|--------|
| psychosocial overview `services.fr` | `Évaluation des risques psychosociaux` |
| psychosocial overview `services.en` | `Psychosocial risk assessment` |
| mobility overview `summary.fr` | `...leur adaptation culturelle, leur équilibre et leur résilience.` |
| mobility overview `summary.en` | `...cultural adjustment, well-being and resilience.` |
| crisis overview `services.fr` | `Accompagnement des managers en contexte de tension` |
| crisis overview `services.en` | `Support for managers in high-pressure situations` |
| detail psychosocial `feature("assessment", ...)` | FR + EN titles as above |
| detail crisis `feature("manager-support", ...)` | FR title + EN `Support for managers in high-pressure contexts` |

Note: other lines may match `high-pressure situations` in SEO/description copy - **leave those unchanged**.

- [ ] **Step 2: Psychosocial - overview services bullet**

In the `expertiseItems` entry `id: "psychosocialPrevention"`, `services` arrays, change the first FR and EN service strings:

**FR from:**

```ts
        "Évaluation des risques psychosociaux",
```

**FR to:**

```ts
        "Évaluation des facteurs de risques psychosociaux",
```

**EN from:**

```ts
        "Psychosocial risk assessment",
```

**EN to:**

```ts
        "Psychosocial risk factor assessment",
```

- [ ] **Step 3: Psychosocial - detail page feature title**

Find the `feature("assessment", ...)` call (psychosocial detail services). Change title arguments only:

**From:**

```ts
      feature("assessment", "HeartPulse", "Évaluation des risques psychosociaux", "Psychosocial risk assessment", "Identifier les signaux de vigilance et les facteurs de risque propres au contexte.", "Identify warning signs and risk factors specific to the context."),
```

**To:**

```ts
      feature("assessment", "HeartPulse", "Évaluation des facteurs de risques psychosociaux", "Psychosocial risk factor assessment", "Identifier les signaux de vigilance et les facteurs de risque propres au contexte.", "Identify warning signs and risk factors specific to the context."),
```

- [ ] **Step 4: International mobility - summary under title**

In the `expertiseItems` entry `id: "internationalMobility"`, `summary` object:

**From:**

```ts
    summary: {
      fr: "Accompagner les collaborateurs expatriés dans leur adaptation culturelle, leur équilibre et leur résilience.",
      en: "Support expatriate employees in their cultural adjustment, well-being and resilience.",
    },
```

**To:**

```ts
    summary: {
      fr: "Accompagner les collaborateurs expatriés dans leur adaptation culturelle et leur résilience.",
      en: "Support expatriate employees in their cultural adjustment and resilience.",
    },
```

Do **not** change mobility `outcomes` lines such as `Soutenir l’équilibre émotionnel`.

- [ ] **Step 5: Crisis management - overview services bullet**

In the `expertiseItems` entry `id: "crisisManagement"`, `services` arrays:

**FR from:**

```ts
        "Accompagnement des managers en contexte de tension",
```

**FR to:**

```ts
        "Accompagnement des managers dans un environnement sous pression",
```

**EN from:**

```ts
        "Support for managers in high-pressure situations",
```

**EN to:**

```ts
        "Support for managers in a high-pressure environment",
```

Only change the manager accompaniment service line - not other “high-pressure situations” strings in summaries/SEO.

- [ ] **Step 6: Crisis management - detail page feature title**

Find `feature("manager-support", "ShieldAlert", ...)` in the crisis detail services list:

**From:**

```ts
      feature("manager-support", "ShieldAlert", "Accompagnement des managers en contexte de tension", "Support for managers in high-pressure contexts", "Soutenir les responsables dans la conduite humaine des périodes sensibles.", "Support leaders in the human management of sensitive periods."),
```

**To:**

```ts
      feature("manager-support", "ShieldAlert", "Accompagnement des managers dans un environnement sous pression", "Support for managers in a high-pressure environment", "Soutenir les responsables dans la conduite humaine des périodes sensibles.", "Support leaders in the human management of sensitive periods."),
```

- [ ] **Step 7: Verify in-scope strings**

Run (must find new strings):

```bash
rg -n "facteurs de risques psychosociaux|Psychosocial risk factor assessment|adaptation culturelle et leur résilience|cultural adjustment and resilience|environnement sous pression|high-pressure environment" src/content/pages/expertise.ts
```

Expected: FR/EN pairs for psychosocial (2× each title source), mobility summary (1 FR + 1 EN), crisis manager line (2× FR + 2× EN after overview + detail).

Run (must find **zero** matches for these exact retired phrases):

```bash
rg -n "Évaluation des risques psychosociaux|leur équilibre et leur résilience|contexte de tension" src/content/pages/expertise.ts
```

Expected: no matches.

Run (must find **zero** for the exact old EN titles that were replaced):

```bash
rg -n "Psychosocial risk assessment\"|well-being and resilience|managers in high-pressure contexts|managers in high-pressure situations\"" src/content/pages/expertise.ts
```

Expected: no matches for the manager-service EN titles / mobility well-being summary.  
Note: other copy may still contain the words `high-pressure situations` in body/SEO - that is allowed. If the last command is awkward, use:

```bash
rg -n "Support for managers in high-pressure (contexts|situations)" src/content/pages/expertise.ts
```

Expected: no matches.

- [ ] **Step 8: Commit**

```bash
git add src/content/pages/expertise.ts
git commit -m "$(cat <<'EOF'
content: refine expertise FR/EN service wording

Use psychosocial risk factors, drop mobility “équilibre”, and rephrase
crisis manager support to avoid repetitive tension wording.
EOF
)"
```

---

### Task 4: Publics accompagnés - ONG → Institutions internationales

**Files:**
- Modify: `src/content/audiences.ts` (audience `id: "ngos"`, ~lines 26-30)
- Test: grep assertions below

**Interfaces:**
- Consumes: existing audience object shape `{ id, label: { fr, en } }`
- Produces: updated display labels; **id remains `"ngos"`**

- [ ] **Step 1: Baseline**

Run:

```bash
rg -n -A3 'id: "ngos"' src/content/audiences.ts
```

Expected:

```ts
  {
    id: "ngos",
    label: {
      fr: "ONG",
      en: "NGOs",
```

- [ ] **Step 2: Apply the label update**

Replace only the labels for `id: "ngos"`:

```ts
  {
    id: "ngos",
    label: {
      fr: "Institutions internationales",
      en: "International institutions",
    } satisfies Record<Locale, string>,
  },
```

Keep `id: "ngos"`. Do **not** edit `src/content/pages/training.ts`.

- [ ] **Step 3: Verify**

Run:

```bash
rg -n -A4 'id: "ngos"' src/content/audiences.ts
```

Expected: labels are `Institutions internationales` / `International institutions`; id still `ngos`.

Confirm training ONG left alone (still present by design):

```bash
rg -n '"ONG"' src/content/pages/training.ts
```

Expected: still matches (out of scope for this plan).

Confirm no leftover exact audience label pair:

```bash
rg -n 'fr: "ONG"|en: "NGOs"' src/content/audiences.ts
```

Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add src/content/audiences.ts
git commit -m "$(cat <<'EOF'
content: rename audience ONG to international institutions

Update Publics accompagnés labels only; keep audience id stable.
EOF
)"
```

---

### Task 5: Full verification and content validation

**Files:**
- None (read-only verification)
- Test: project validator + regression greps

**Interfaces:**
- Consumes: all Task 1-4 outputs
- Produces: confidence that the branch matches the spec

- [ ] **Step 1: Regression grep - old in-scope FR/EN phrases must be gone from intended files**

Run:

```bash
rg -n "immédiatement|right away" src/content/pages/jocelyne-katshinda.ts
rg -n "Évaluation des risques psychosociaux|leur équilibre et leur résilience|contexte de tension" src/content/pages/expertise.ts
rg -n 'fr: "ONG"|en: "NGOs"' src/content/audiences.ts
rg -n "Support for managers in high-pressure (contexts|situations)|Psychosocial risk assessment\"|well-being and resilience" src/content/pages/expertise.ts
```

Expected: all commands exit with no matches (rg exit code 1 is OK when no matches).

- [ ] **Step 2: Positive grep - new phrases present**

Run:

```bash
rg -n "joindre Jocelyne Katshinda directement|contact Jocelyne Katshinda directly" src/content/pages/jocelyne-katshinda.ts
rg -n "facteurs de risques psychosociaux|Psychosocial risk factor assessment" src/content/pages/expertise.ts
rg -n "adaptation culturelle et leur résilience|cultural adjustment and resilience" src/content/pages/expertise.ts
rg -n "environnement sous pression|high-pressure environment" src/content/pages/expertise.ts
rg -n "Institutions internationales|International institutions" src/content/audiences.ts
rg -n "--foreground: 22 52 68|--surface-inverse: 18 48 62" src/app/globals.css
```

Expected: each command shows matches.

- [ ] **Step 3: Run content validator**

Run:

```bash
npm run validate:content
```

Expected: exits 0; no new missing-asset or missing-translation errors introduced by these string edits.

- [ ] **Step 4: Typecheck (preferred)**

Run:

```bash
npx tsc --noEmit
```

Expected: exit 0.

- [ ] **Step 5: Visual smoke (manual)**

With `npm run dev` if needed, in **light** mode:

1. Any page body text - slightly softer navy, still readable  
2. Inverse/footer-style dark band - less black, still night-blue; white text legible  
3. Primary button - same blue as before (`18 79 120`)  
4. `/fr/jocelyne-katshinda` final contact title uses **directement**  
5. `/en/jocelyne-katshinda` final contact title uses **directly**  
6. Expertise overview / psychosocial & crisis service lists show new FR wording  
7. Portfolio “Publics accompagnés” shows **Institutions internationales** (not ONG)  
8. Toggle dark mode briefly - still works; no intentional dark token changes

- [ ] **Step 6: Final commit only if Task 5 fixed anything**

If verification required small fixes, commit those fixes with a clear message. If everything already passed after Tasks 1-4, **no empty commit**.

Optional docs status update (only if you want the branch self-describing):

```bash
# Optional - not required for product correctness
# Update spec status line to "Implemented" in
# docs/superpowers/specs/2026-07-27-copy-and-night-blue-tone-design.md
```

---

## Spec coverage checklist (self-review)

| Spec requirement | Task |
|------------------|------|
| `--surface-inverse` → `18 48 62` | Task 1 |
| `--foreground` → `22 52 68` | Task 1 |
| Leave primary / dark mode alone | Task 1 verification |
| Portfolio title immédiatement → directement (+ EN) | Task 2 |
| Évaluation des facteurs de risques psychosociaux (+ EN), overview + detail | Task 3 steps 2-3 |
| Mobility summary drop équilibre (+ EN) | Task 3 step 4 |
| Crisis manager wording (+ EN), overview + detail | Task 3 steps 5-6 |
| Audiences ONG → Institutions internationales (+ EN), id stable | Task 4 |
| training.ts ONG out of scope | Task 4 step 3 |
| validate:content + greps | Task 5 |

## Placeholder scan

No TBD/TODO steps. Every replacement shows exact before/after strings and commands.

## Type consistency

No new types or functions. Content objects keep existing shapes (`Record<Locale, string>`, `feature(...)` argument order, audience `id` + `label`).
