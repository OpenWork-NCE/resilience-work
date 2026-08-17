# Navigation et shell

Le layout localisé enveloppe chaque page :

- `SkipLink`
- `SiteHeader` (fixe ; overlay uniquement sur l’accueil tant que le scroll n’a pas commencé)
- `main#main-content`
- `SiteFooter` (fond `--hero-void`)
- Float thème + retour en haut (`scroll-to-top.tsx`)

## Fichiers

- `src/components/layout/site-shell.tsx`
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/components/layout/scroll-to-top.tsx`
- `src/components/navigation/*`
- `src/components/theme/theme-toggle.tsx`
- `src/components/locale/locale-switcher.tsx`
- `src/lib/navigation/get-navigation.ts`
- `src/lib/navigation/get-localized-href.ts`

## Données

Navigation et CTA : `src/content/navigation.ts`.  
Libellés chrome : `messages/{locale}.json`.

## Largeur

Header et footer utilisent `Container size="home"` (même gabarit que les pages).
