# Modèle de Contenu — Resilience@Work

Ce document décrit l'architecture et l'utilisation du système de contenu centralisé bilingue FR/EN.

---

## Architecture

### Structure des fichiers

```
src/
├── content/
│   ├── assets.ts                  # Registre centralisé des images
│   ├── routes.ts                  # Routes avec identifiants stables
│   ├── brand.ts                   # Identité de marque et coordonnées
│   ├── navigation.ts              # Navigation et CTA globaux
│   ├── audiences.ts               # Publics cibles
│   ├── pending-confirmations.ts   # Contenus à confirmer
│   ├── pages/
│   │   ├── home.ts               # Contenu page d'accueil
│   │   ├── about.ts              # Contenu page À propos
│   │   ├── expertise.ts          # Expertises détaillées
│   │   ├── training.ts           # Catalogue formations
│   │   ├── international.ts      # Régions d'intervention
│   │   └── contact.ts            # Formulaire de contact
│   └── index.ts                  # Exports centralisés
├── lib/
│   ├── content/
│   │   ├── get-content.ts        # Utilitaires de récupération
│   │   └── validate-content.ts   # Script de validation
│   └── seo/
│       └── metadata.ts           # Métadonnées SEO par page
└── types/
    └── content.ts                # Types TypeScript stricts
```

---

## Stratégie i18n

Le projet utilise **next-intl** pour l'internationalisation :

- **Locales supportées** : `fr` (défaut pour next-intl: `en`) et `en`
- **Langues de prestation** : Français, Anglais, Italien
- **Routing** : `/[locale]/` avec next-intl
- **Messages techniques** : `/messages/{locale}.json` (microcopies UI)
- **Contenu métier** : `/src/content/` (contenu éditorial bilingue)

### Séparation des préoccupations

- **Messages i18n** (`/messages/`) : Labels UI, textes d'interface, erreurs
- **Content layer** (`/src/content/`) : Contenu éditorial, pages, expertises, formations

---

## Types principaux

### Locale

```ts
type Locale = "fr" | "en";
```

### LocalizedText

```ts
type LocalizedText = Record<Locale, string>;
```

### RouteKey

```ts
type RouteKey =
  | "home"
  | "about"
  | "expertise"
  | "psychosocialPrevention"
  | "internationalMobility"
  | "crisisManagement"
  | "training"
  | "international"
  | "contact";
```

### ImageAsset

```ts
interface ImageAsset {
  src: string;                    // Chemin depuis /public
  alt: LocalizedText;             // Texte alternatif FR/EN
  width?: number;
  height?: number;
  aspectRatio?: string;
  objectPosition?: string;
  priority?: boolean;
}
```

### ExpertiseItem

```ts
interface ExpertiseItem {
  id: ExpertiseId;
  icon: string;
  route: RouteKey;
  title: LocalizedText;
  shortTitle: LocalizedText;
  summary: LocalizedText;
  description: LocalizedParagraphs;
  services: LocalizedStringArray;
  outcomes: LocalizedStringArray;
  image: ImageAsset;
}
```

---

## Utilisation

### Importer du contenu

```ts
import { homePage, expertiseItems, brand } from "@/content";
import { getLocalizedValue } from "@/lib/content/get-content";

// Récupérer une valeur localisée
const title = getLocalizedValue(homePage.hero.title, locale);

// Accéder aux assets
import { assets } from "@/content/assets";
const heroImage = assets.hero.main;

// Accéder aux routes
import { routes } from "@/content/routes";
const contactPath = routes.contact;
```

### Utiliser les métadonnées SEO

```ts
import { getPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata({ params }: Props): Metadata {
  return getPageMetadata(params.locale as Locale, "home");
}
```

### Accéder à une expertise

```ts
import { expertiseItems } from "@/content";

const psychosocialExpertise = expertiseItems.find(
  (e) => e.id === "psychosocialPrevention"
);
```

---

## Règles éditoriales

### Nom de marque

**Graphie exacte** : `Resilience@Work`

❌ Incorrect :
- Resilience Work
- Resilience at Work
- Resilience@work
- Resilienc@Work

✅ Correct : `Resilience@Work`

### Personne mise en avant

```ts
{
  name: "Jocelyne Katshinda",
  role: {
    fr: "Administratrice générale",
    en: "Managing Director"
  }
}
```

⚠️ **Ne pas présenter comme** :
- Psychologue clinicienne (non confirmé)
- Fondatrice (non confirmé)
- Avec un nombre précis d'années d'expérience

### Contact

```
Téléphone : +32 470 542 390
Email : admin@resilienceatwork.eu
WhatsApp : activé
LinkedIn : non confirmé
Facebook : non confirmé
```

### Langues

- **Site web** : FR, EN
- **Prestations** : FR, EN, IT

---

## Assets

### Chemins

Tous les chemins d'assets commencent par `/images/` (et non `public/images/`).

### Registre

```ts
assets.hero.main
assets.jocelyne.portrait
assets.expertise.psychosocialPrevention
assets.expertise.internationalMobility
assets.expertise.crisisManagement
assets.expertise.training
assets.international.overview
assets.international.africa
assets.international.europe
assets.international.middleEast
```

### Dimensions

Toutes les images WebP : `1672x941px` (sauf portrait : `1254x1254px`)

---

## Validation

### Exécuter la validation

```bash
npx tsx src/lib/content/validate-content.ts
```

### Contrôles effectués

- ✅ Présence des traductions FR et EN
- ✅ Existence physique des assets
- ✅ Chemins d'images corrects (pas de `public/`)
- ✅ Validité des routes
- ✅ Cohérence du nom de marque
- ✅ Format des emails
- ✅ Liens sociaux non confirmés marqués comme désactivés

---

## Contenus à confirmer

Liste dans `/src/content/pending-confirmations.ts` :

1. Titre professionnel de Jocelyne Katshinda
2. Statut de fondatrice
3. Informations légales de la structure
4. URL LinkedIn officielle
5. URL Facebook officielle
6. Domaine officiel du site
7. Témoignages clients
8. Études de cas
9. Détails des formations (durées, formats, tarifs)

---

## SEO

### Métadonnées par page

Toutes les pages disposent de métadonnées bilingues :

```ts
{
  title: LocalizedText,
  description: LocalizedText,
  keywords?: LocalizedStringArray,
  canonicalRoute: RouteKey,
  ogImage?: string,
  noIndex?: boolean
}
```

### Image Open Graph provisoire

Par défaut : `/images/hero/resilience-at-work-hero.webp`

⚠️ Une image OG dédiée devra être créée (1200x630px).

---

## Ajouter du contenu

### Ajouter une expertise

1. Ajouter l'ID dans `ExpertiseId` (`types/content.ts`)
2. Ajouter la route dans `routes.ts`
3. Ajouter l'asset dans `assets.ts`
4. Ajouter l'expertise complète dans `pages/expertise.ts`
5. Ajouter les métadonnées SEO dans `lib/seo/metadata.ts`
6. Exécuter la validation

### Ajouter une formation

1. Créer l'objet dans `pages/training.ts`
2. Respecter la structure `TrainingTopic`
3. Ajouter les traductions FR/EN

### Remplacer une image

1. Placer le fichier dans `/public/images/`
2. Mettre à jour le registre dans `assets.ts`
3. Mettre à jour les textes alternatifs
4. Exécuter la validation

### Activer un lien social

1. Obtenir l'URL officielle
2. Mettre à jour `brand.ts`
3. Passer `enabled: true`

---

## Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "eslint",
    "validate:content": "tsx src/lib/content/validate-content.ts"
  }
}
```

Si `tsx` n'est pas disponible :

```bash
npx tsx src/lib/content/validate-content.ts
```

---

## Prochaines étapes

1. Confirmer les contenus en attente
2. Créer une image Open Graph dédiée (1200x630px)
3. Collecter des témoignages clients
4. Confirmer les détails des formations
5. Obtenir les URLs LinkedIn et Facebook
6. Confirmer le domaine officiel
7. Construire les pages définitives avec ce contenu

---

**Dernière mise à jour** : Juin 2024  
**Responsable** : Resilience@Work Team
