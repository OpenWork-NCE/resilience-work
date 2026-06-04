# Architecture Resilience@Work - Fondations

## ✅ Infrastructure mise en place

### 1. Structure des dossiers

```
src/
├── app/
│   ├── [locale]/                        # Routes localisées (fr/en)
│   │   ├── layout.tsx                   # Layout racine avec i18n et thème
│   │   ├── page.tsx                     # Page d'accueil
│   │   ├── about/page.tsx               # À propos
│   │   ├── expertise/
│   │   │   ├── page.tsx                 # Liste des expertises
│   │   │   ├── psychosocial-prevention/page.tsx
│   │   │   ├── international-mobility/page.tsx
│   │   │   ├── crisis-management/page.tsx
│   │   │   └── training/page.tsx
│   │   ├── international/page.tsx       # Zones d'intervention
│   │   └── contact/page.tsx             # Contact
│   ├── globals.css                      # Design system CSS
│   └── favicon.ico
│
├── components/
│   ├── layout/
│   │   ├── site-header.tsx              # Header avec navigation
│   │   └── site-footer.tsx              # Footer avec liens
│   ├── motion/
│   │   └── animated.tsx                 # Composants Framer Motion
│   ├── shared/
│   │   ├── button.tsx                   # Button & IconButton
│   │   ├── badge.tsx                    # Badge
│   │   ├── card.tsx                     # Card
│   │   ├── container.tsx                # Container responsive
│   │   ├── section.tsx                  # Section wrapper
│   │   └── section-header.tsx           # Eyebrow & SectionHeader
│   ├── ui/
│   │   └── aurora-background.tsx        # Composant Aceternity (existant)
│   ├── language-switcher.tsx            # Sélecteur de langue
│   ├── theme-provider.tsx               # Provider next-themes
│   └── theme-toggle.tsx                 # Toggle light/dark
│
├── content/
│   ├── expertise.ts                     # Données des expertises
│   └── navigation.ts                    # Navigation du site
│
├── i18n/
│   ├── routing.ts                       # Configuration next-intl
│   └── request.ts                       # Gestion des requêtes i18n
│
├── lib/
│   ├── animations.ts                    # Variantes Framer Motion
│   ├── constants.ts                     # Constantes (contact, zones)
│   ├── seo.ts                           # Helpers SEO
│   └── utils.ts                         # Utilitaires (cn)
│
├── types/
│   └── content.ts                       # Types TypeScript
│
└── middleware.ts                        # Middleware i18n

messages/
├── en.json                              # Traductions anglaises
└── fr.json                              # Traductions françaises

public/
└── images/
    ├── brand/
    ├── jocelyne/
    ├── hero/
    ├── expertise/
    ├── international/
    └── PLACEHOLDER_ASSETS.md            # Liste des assets requis
```

### 2. Design System CSS

Variables sémantiques créées :

**Couleurs principales**
- `--background` / `--foreground`
- `--surface` / `--surface-muted` / `--surface-elevated`
- `--border` / `--border-strong`
- `--primary` / `--primary-hover` / `--primary-foreground`
- `--secondary` / `--secondary-foreground`
- `--accent` / `--accent-soft`
- `--muted` / `--muted-foreground`
- `--success` / `--warning` / `--danger`

**Autres variables**
- `--shadow-soft` / `--shadow-elevated`
- `--radius-sm` / `--radius-md` / `--radius-lg` / `--radius-xl`

**Palette actuelle** : Bleus profonds et bleus doux (harmonieux, professionnel)

### 3. Composants de base créés

#### Layout
- `Container` : wrapper responsive avec tailles configurables
- `Section` : section avec padding vertical standard
- `SectionHeader` : en-tête avec eyebrow optionnel
- `Eyebrow` : texte stylisé accent supérieur

#### UI
- `Button` : 4 variantes (primary, secondary, outline, ghost), 3 tailles
- `IconButton` : bouton avec icône uniquement
- `Badge` : badge avec variantes de couleur
- `Card` : card avec hover effect optionnel

#### Motion
- `AnimatedSection` : section avec animation fade-up
- `StaggerContainer` / `StaggerItem` : animations échelonnées
- `AnimatedText` : texte avec animation de révélation

#### Layout global
- `SiteHeader` : header sticky avec navigation + i18n + theme
- `SiteFooter` : footer avec liens, contact, réseaux sociaux

### 4. Système d'internationalisation

- **Langues** : Français (par défaut) et Anglais
- **Middleware** : next-intl configuré
- **Routes** : Toutes préfixées par `/[locale]`
- **Navigation** : mainNavigation typée et centralisée
- **Traductions** : Structurées par domaine (nav, home, expertise, footer)

### 5. Animations

Toutes les animations sont configurées avec :
- Support `prefers-reduced-motion`
- Transitions fluides et sobres (0.6s ease-out)
- Variantes centralisées dans `lib/animations.ts`

### 6. TypeScript

- **Mode strict** activé
- **Types créés** : NavigationItem, ExpertiseArea, Training, ContactInfo, ZoneInfo
- **Pas d'erreurs** : Build réussie sans erreurs TypeScript ni ESLint

### 7. SEO

- Helpers SEO créés (`lib/seo.ts`)
- Métadonnées par défaut en FR et EN
- OpenGraph et Twitter Cards prêts

## 📋 Prochaines étapes

### Étape 2 : Design détaillé
1. Finaliser la palette de couleurs exacte
2. Choisir et importer les polices
3. Créer les sections de la page d'accueil
4. Concevoir les pages d'expertise détaillées

### Étape 3 : Contenu
1. Ajouter les images réelles (voir `PLACEHOLDER_ASSETS.md`)
2. Rédiger les textes définitifs
3. Créer les formulaires de contact
4. Ajouter les témoignages si disponibles

### Étape 4 : Fonctionnalités avancées
1. Système de formulaire de contact
2. Animations page transitions
3. Analytics
4. Optimisation performances

## 🎨 Direction artistique appliquée

- ✅ Palette harmonieuse (bleus profonds et doux)
- ✅ Pas de gradients flashy
- ✅ Animations sobres et lentes
- ✅ Radius modérés (pas de cards trop arrondies)
- ✅ Dark mode élégant (pas de noir pur)
- ✅ Contrastes lisibles
- ✅ Focus states visibles
- ✅ Navigation clavier fonctionnelle

## ⚠️ Points d'attention

1. **Assets manquants** : Tous les assets images sont documentés dans `public/images/PLACEHOLDER_ASSETS.md`
2. **Contenu placeholder** : Pages About, Contact, International et détails Expertise contiennent du contenu temporaire
3. **Formulaire contact** : Non implémenté, à créer dans l'étape suivante
4. **Optimisation images** : Utiliser next/image partout lors de l'ajout des vraies images

## 🔧 Commandes disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Démarrer en production
npm run lint     # Vérifier le code
```

## 📦 Dépendances utilisées

- **Next.js 16** : Framework React
- **TypeScript** : Typage strict
- **Tailwind CSS v4** : Styling
- **next-intl** : Internationalisation
- **next-themes** : Gestion thème clair/sombre
- **framer-motion** : Animations
- **lucide-react** : Icônes
- **clsx + tailwind-merge** : Utilitaires CSS

## ✨ Qualité du code

- ✅ TypeScript strict sans erreurs
- ✅ ESLint sans warnings
- ✅ Build réussie
- ✅ Aucune dépendance manquante
- ✅ Architecture modulaire et extensible
- ✅ Composants réutilisables
- ✅ Pas de duplication de code
