# Page d’accueil

Ordre actuel :

1. Hero void plein écran, header en overlay
2. Bande partenaires
3. Trois activités (sélecteur + still unique)
4. Direction (Jocelyne)
5. Consultantes affiliées
6. Card CTA finale (overlay photo, boutons du thème)

## Composants actifs

- `src/components/home/hero-section.tsx`
- `src/components/home/hero-depth-background.tsx`
- `src/components/home/partners-marquee.tsx`
- `src/components/home/expertise-section.tsx`
- `src/components/home/profile-section.tsx`
- `src/components/home/consultants-section.tsx`
- `src/components/home/final-cta-section.tsx`
- `src/components/home/home-section-intro.tsx`
- `src/components/home/home-still.tsx`
- `src/components/home/home-text-link.tsx`

## Contenu

`src/content/pages/home.ts`, plus `expertiseItems`, `consultants`, `partners`, `brand`.

## Hero

- Fond `--hero-void` (`#071018`), inchangé en clair / sombre
- Still cinématographique (fade unique, grain statique)
- Titre en deux lignes
- Index des trois activités sur la plaque (desktop)

Les composants `introduction-section`, `impact-section`, `methodology-section` existent encore mais ne sont plus montés sur l’accueil.
