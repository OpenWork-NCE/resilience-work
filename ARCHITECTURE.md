# Architecture

## Principes

- App Router, pages serveur en priorité.
- Contenu éditorial centralisé, locales `fr | en | it`.
- Slugs d’URL identiques d’une langue à l’autre.
- Client seulement pour le thème, le consentement, le mouvement et les formulaires.

## Arborescence utile

```
src/
  app/[locale]/          # Pages localisées
  app/api/contact/       # Formulaire (honeypot + rate limit)
  app/contact/...vcf/    # vCard Jocelyne
  components/
    home/                # Accueil
    expertise/           # Activités
    training/            # Formations et workshops
    portfolio/           # Page Jocelyne
    consultants/         # Fiches consultantes
    contact/             # Contact
    consent/             # Cookies
    layout/              # Header, footer, float
    legal/               # Pages légales
    shared/              # Button, Section, Container
  content/               # Éditorial Record<Locale, T>
  lib/                   # Navigation, SEO, consent, email
  i18n/                  # next-intl
  middleware.ts
messages/{fr,en,it}.json
```

## i18n

Deux couches :

| Couche | Rôle |
|---|---|
| `src/content/**` | Pages, activités, legal, brand |
| `messages/*.json` | Navigation, footer, thème, accessibilité |

`src/i18n/routing.ts` : locales `fr`, `en`, `it`, défaut `fr`.

## Mesure horizontale

`HOME_MEASURE` dans `src/components/shared/container.tsx` :

`w-[min(94vw,88rem)]` puis `lg:w-[min(94vw,92rem)]`, paddings `px-5 / sm:px-8 / lg:px-10`.

Utiliser `Container size="home"` ou `Section containerSize="home"` pour header, footer, pages et sections.

## Images

`next.config.ts` : `images.unoptimized: true`.

Assets dans `public/images/` (brand, hero, expertise, jocelyne, consultants, partners). Le registre est `src/content/assets.ts`.

## Contact

`POST /api/contact` : validation, honeypot, rate limit, envoi via `src/lib/email/send-contact-email.ts`.

## Consentement

`ConsentProvider` : bandeau + dialogue de préférences. Stockage local `resilienceatwork_consent`. Analytics et marketing sont préparés, aucun fournisseur n’est branché.
