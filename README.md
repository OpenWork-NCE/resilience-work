# Resilience@Work

Site public de Resilience@Work : soutien psychologique après un incident critique, appui en crise de mobilité internationale, formations et workshops sur le bien-être et la santé mentale.

Locales : **fr** (défaut), **en**, **it**.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript strict
- Tailwind CSS v4
- next-intl
- next-themes (clair / sombre)
- Framer Motion

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000). La locale par défaut est `/fr`.

## Scripts

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Servir le build |
| `npm run lint` | ESLint |
| `npm run validate:content` | Vérifie le contenu FR / EN / IT |

## Contenu

Le site est **piloté par le contenu**, pas par du texte en dur dans l’UI.

- Éditorial : `src/content/**` (`Record<Locale, T>`)
- Chrome UI (header, footer, erreurs) : `messages/{fr,en,it}.json`

Trois activités, slugs stables :

- `/expertise/critical-incident-support`
- `/expertise/crisis-management`
- `/training`

Anciennes URLs redirigées :

- `/expertise/psychosocial-prevention` → support post-incident
- `/expertise/international-mobility` → crise et mobilité

## Pages principales

| Route | Page |
|---|---|
| `/[locale]` | Accueil |
| `/[locale]/expertise` | Liste des activités |
| `/[locale]/expertise/[slug]` | Fiche activité |
| `/[locale]/training` | Formations et workshops |
| `/[locale]/jocelyne-katshinda` | Portfolio Jocelyne |
| `/[locale]/consultants/[slug]` | Consultantes affiliées |
| `/[locale]/contact` | Contact |
| `/[locale]/legal-notice` | Mentions légales |
| `/[locale]/privacy` | Confidentialité |
| `/[locale]/cookies` | Cookies |
| `/[locale]/accessibility` | Accessibilité |

`/about` redirige vers le portfolio de Jocelyne.

## Architecture visuelle

- Une seule bande `--hero-void` (`#071018`) par page interne : la hero. Elle ne change pas avec le thème.
- L’accueil a le void plein écran en hero. Le header s’y superpose, puis devient solide au scroll.
- Header, footer et sections partagent le gabarit `HOME_MEASURE` (`containerSize="home"`).
- Les images Next.js sont servies **sans optimisation** (`images.unoptimized: true`).

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md)
- [docs/content-model.md](./docs/content-model.md)
- [docs/design-system.md](./docs/design-system.md)
- [docs/home-page.md](./docs/home-page.md)
- [docs/navigation-and-shell.md](./docs/navigation-and-shell.md)
- [docs/cookie-consent.md](./docs/cookie-consent.md)
- [docs/legal-pages.md](./docs/legal-pages.md)
- [docs/production-readiness.md](./docs/production-readiness.md)
