# Modèle de contenu

## Deux couches

| Couche | Fichiers | Usage |
|---|---|---|
| Éditorial | `src/content/**` | Pages, activités, legal, brand |
| Chrome | `messages/{fr,en,it}.json` | Header, footer, thème, a11y |

Locales : `fr` (défaut), `en`, `it`. Slugs identiques.

## Fichiers éditoriaux

```
src/content/
  assets.ts
  brand.ts
  routes.ts
  navigation.ts
  audiences.ts
  consultants.ts
  partners.ts
  pending-confirmations.ts
  pages/
    home.ts
    expertise.ts
    training.ts
    contact.ts
    jocelyne-katshinda.ts
    about.ts
    international.ts
  legal/
    legal-notice.ts
    privacy-policy.ts
    cookie-policy.ts
    cookie-registry.ts
    accessibility.ts
    legal-ui.ts
```

## Activités

| Clé interne | URL | Libellé |
|---|---|---|
| `psychosocialPrevention` | `/expertise/critical-incident-support` | Support post-incident |
| `crisisManagement` | `/expertise/crisis-management` | Crise et mobilité |
| `training` | `/training` | Formations et workshops |

## Validation

```bash
npm run validate:content
```

Le script `src/lib/content/validate-content.ts` exige les trois locales sur le contenu éditorial.
