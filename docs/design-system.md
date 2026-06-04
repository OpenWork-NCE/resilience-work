# Resilience@Work Design System

**Version:** 1.0.0  
**Framework:** Next.js 16.2.7  
**Styling:** Tailwind CSS v4  
**Date:** 2024

---

## 📐 Design Philosophy: Quiet Confidence

Le design system Resilience@Work incarne le principe de **quiet confidence** — une confiance tranquille qui inspire la sérénité et la fiabilité sans chercher à impressionner artificiellement.

### Positionnement Perceptuel

L'interface doit évoquer :
- **Confiance** institutionnelle
- **Sérénité** professionnelle  
- **Confidentialité** respectée
- **Expertise** reconnue
- **Solidité** durable
- **Écoute** bienveillante
- **Résilience** pratique
- **Ouverture** internationale

### Ce que nous NE sommes PAS

- ❌ Une plateforme SaaS générique
- ❌ Une application technologique futuriste
- ❌ Un site médical anxiogène
- ❌ Une interface infantilisante
- ❌ Une marque excessivement émotionnelle

---

## 🎨 Système de Couleurs

### Palette Light Mode

Harmonisée à partir de l'identité bleue du logo existant, créant une atmosphère professionnelle et apaisante.

```css
/* Backgrounds & Surfaces */
--background: 248 251 252;      /* #F8FBFC - Fond principal cassé */
--foreground: 16 43 58;         /* #102B3A - Texte principal */

--surface: 255 255 255;         /* #FFFFFF - Cartes et surfaces */
--surface-muted: 238 246 248;   /* #EEF6F8 - Surface secondaire */
--surface-subtle: 244 249 250;  /* #F4F9FA - Surface très discrète */
--surface-elevated: 255 255 255;
--surface-inverse: 12 38 51;    /* #0C2633 - Surface sombre */

/* Borders */
--border: 215 230 234;          /* #D7E6EA - Bordure standard */
--border-muted: 230 240 242;    /* #E6F0F2 - Bordure très discrète */
--border-strong: 184 208 216;   /* #B8D0D8 - Bordure accentuée */

/* Primary Brand Colors */
--primary: 18 79 120;           /* #124F78 - Bleu profond institutionnel */
--primary-hover: 13 65 102;     /* #0D4166 */
--primary-active: 9 54 80;      /* #093650 */
--primary-foreground: 255 255 255;

/* Secondary Colors */
--secondary: 221 239 244;       /* #DDEFF4 - Bleu très clair */
--secondary-hover: 205 229 236; /* #CDE5EC */
--secondary-foreground: 18 59 85;

/* Accent Colors */
--accent: 74 145 168;           /* #4A91A8 - Bleu-gris apaisant */
--accent-hover: 57 127 149;     /* #397F95 */
--accent-soft: 221 241 244;     /* #DDF1F4 - Fond accentué doux */
--accent-foreground: 10 61 76;

/* Semantic Colors */
--success: 47 118 104;          /* #2F7668 - Vert professionnel */
--success-soft: 221 239 234;
--warning: 155 104 27;          /* #9B681B - Ocre sobre */
--warning-soft: 248 238 216;
--danger: 164 71 71;            /* #A44747 - Rouge mesuré */
--danger-soft: 248 227 227;

/* Overlays */
--overlay-soft: rgba(8, 42, 57, 0.08);
--overlay-strong: rgba(7, 29, 40, 0.72);
```

### Palette Dark Mode

Le dark mode évoque une atmosphère feutrée et rassurante, sans tomber dans le dramatique.

```css
--background: 7 25 32;          /* #071920 - Fond sombre profond */
--foreground: 234 244 246;      /* #EAF4F6 */

--surface: 12 37 46;            /* #0C252E */
--surface-muted: 16 45 55;
--surface-subtle: 10 34 43;
--surface-elevated: 20 52 62;
--surface-inverse: 239 248 249;

--border: 36 70 80;
--border-muted: 25 57 67;
--border-strong: 59 102 113;

--primary: 131 196 212;         /* #83C4D4 - Bleu clair en dark */
--primary-hover: 155 210 222;
--primary-active: 181 222 231;
--primary-foreground: 8 35 44;

--accent: 109 175 192;          /* #6DAFC0 */
--accent-hover: 136 195 208;
--accent-soft: 23 59 69;
--accent-foreground: 217 240 243;
```

### Contrastes WCAG AA

Tous les contrastes respectent les normes d'accessibilité :
- Texte courant : **≥ 4.5:1**
- Texte large : **≥ 3:1**
- Éléments interactifs : **≥ 3:1**

---

## ✍️ Typographie

### Familles de Polices

```typescript
--font-display: "Lora", Georgia, serif;  // Titres éditoriaux
--font-sans: "Inter", Arial, sans-serif; // Interface & corps
```

#### Lora (Display)
Utilisée pour :
- Grands titres institutionnels
- Citations
- Titres de sections majeures
- Accroches éditoriales

#### Inter (Interface)
Utilisée pour :
- Texte courant
- Navigation
- Boutons et formulaires
- Métadonnées

### Échelle Typographique

```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: clamp(2.75rem, 5vw, 4.75rem);  /* 44-76px */
--text-6xl: clamp(3.25rem, 7vw, 6.25rem);  /* 52-100px */
```

### Hiérarchie Recommandée

```typescript
// Display Hero
font-family: Lora
font-size: var(--text-6xl)
font-weight: 500
line-height: 1.05
letter-spacing: -0.02em

// Page Title
font-family: Lora
font-size: var(--text-5xl)
font-weight: 500
line-height: 1.1

// Section Title
font-family: Lora
font-size: 2.25rem (36px)
font-weight: 500

// Card Title
font-family: Inter
font-size: 1.125-1.375rem (18-22px)
font-weight: 600

// Eyebrow
font-family: Inter
font-size: 0.75rem (12px)
font-weight: 700
text-transform: uppercase
letter-spacing: 0.14em

// Body
font-family: Inter
font-size: 1rem (16px)
line-height: 1.65-1.8
max-width: 72ch
```

---

## 📏 Spacing & Layout

### Container Sizes

```css
--container-narrow: 46rem;   /* ~736px - Contenu éditorial */
--container-content: 72rem;  /* ~1152px - Standard */
--container-wide: 82rem;     /* ~1312px - Layouts larges */
--container-full: 100%;
```

### Gutters Responsive

```css
--gutter-mobile: 1.25rem;    /* 20px */
--gutter-tablet: 2rem;       /* 32px */
--gutter-desktop: 3rem;      /* 48px */
```

### Section Spacing

```css
--section-space-sm: 4rem;    /* 64px - Mobile/compact */
--section-space-md: 5.5rem;  /* 88px - Tablet */
--section-space-lg: 7rem;    /* 112px - Desktop */
--section-space-xl: 9rem;    /* 144px - Hero/majeur */
```

### Échelle d'Espacement

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-24: 6rem;    /* 96px */
--space-32: 8rem;    /* 128px */
```

---

## 🔘 Border Radius

Contemporain sans être excessif.

```css
--radius-xs: 0.375rem;  /* 6px - Checkbox, petits éléments */
--radius-sm: 0.5rem;    /* 8px - Badges */
--radius-md: 0.875rem;  /* 14px - Boutons, champs */
--radius-lg: 1.25rem;   /* 20px - Cards standards */
--radius-xl: 1.75rem;   /* 28px - Cards éditoriales */
--radius-2xl: 2.25rem;  /* 36px - Surfaces exceptionnelles */
```

### Règles d'Application

- Boutons : `radius-md`
- Champs de formulaire : `radius-md`
- Cards standards : `radius-lg`
- Cards éditoriales : `radius-xl`
- Badges : `border-radius: 9999px` (pill)

---

## 🌓 Shadows

Ombres douces et naturelles.

```css
/* Light Mode */
--shadow-soft: 0 8px 28px rgba(11, 55, 72, 0.06);
--shadow-card: 0 14px 36px rgba(11, 55, 72, 0.08);
--shadow-elevated: 0 22px 56px rgba(8, 42, 57, 0.12);
--shadow-floating: 0 28px 72px rgba(8, 42, 57, 0.16);

/* Dark Mode - Plus profondes */
--shadow-soft: 0 8px 28px rgba(0, 0, 0, 0.24);
--shadow-card: 0 14px 36px rgba(0, 0, 0, 0.32);
--shadow-elevated: 0 22px 56px rgba(0, 0, 0, 0.42);
--shadow-floating: 0 28px 72px rgba(0, 0, 0, 0.52);
```

---

## 🎬 Motion System

### Tokens Temporels

```css
--duration-fast: 160ms;     /* Interactions légères */
--duration-normal: 240ms;   /* Standard */
--duration-slow: 360ms;     /* Transitions complexes */
--duration-reveal: 520ms;   /* Révélations éditoriales */
```

### Easing Functions

```css
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);     /* Universel */
--ease-emphasized: cubic-bezier(0.22, 1, 0.36, 1);   /* Éditorial */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);           /* Sorties */
```

### Variants Disponibles

```typescript
fadeIn          // Apparition simple
fadeUp          // Montée douce (16px)
fadeDown        // Descente douce (16px)
fadeLeft        // Glissement droite→gauche
fadeRight       // Glissement gauche→droite
subtleScale     // Échelle discrète (0.98→1)
staggerContainer // Conteneur d'animation séquentielle
staggerItem     // Enfant séquencé
hoverLift       // Élévation au survol (-4px)
imageReveal     // Révélation photographique
navigationReveal // Navigation header
mobileMenuReveal // Menu mobile
```

### Contraintes de Motion

- Amplitude verticale : **8-20px**
- Amplitude horizontale : **8-16px**
- Pas d'effet rebond
- Pas de mouvement permanent
- Respect de `prefers-reduced-motion`

---

## 🧩 Composants

### Button

```typescript
<Button 
  variant="primary|secondary|outline|ghost|link|inverse"
  size="sm|md|lg|icon"
  leftIcon={<Icon />}
  rightIcon={<Icon />}
  isLoading={boolean}
  disabled={boolean}
>
  Label
</Button>
```

### Card

```typescript
<Card 
  variant="default|muted|elevated|outline|interactive|editorial|inverse"
  hover={boolean}
>
  <CardHeader icon={<Icon />}>
    <CardTitle>Titre</CardTitle>
  </CardHeader>
  <CardDescription>Description</CardDescription>
</Card>
```

### Form Components

```typescript
<FormField 
  label="Label" 
  required 
  hint="Texte d'aide"
  error="Message d'erreur"
>
  <Input 
    error={boolean}
    success={boolean}
    placeholder="..."
  />
</FormField>

<Textarea />
<Select />
<Checkbox label="..." />
```

### Layout Components

```typescript
<Container size="narrow|content|wide|full">
  <Section 
    spacing="sm|md|lg|xl"
    tone="default|muted|accent|inverse"
    containerSize="narrow|content|wide|full"
  >
    <SectionHeader
      eyebrow="Catégorie"
      title="Titre principal"
      description="Description"
      align="left|center"
    />
  </Section>
</Container>
```

### Content Components

```typescript
<Eyebrow>Texte court</Eyebrow>

<Quote author="Nom" role="Fonction">
  Citation
</Quote>

<KeyValue 
  label="Clé" 
  value="Valeur"
  orientation="vertical|horizontal"
/>

<ImageFrame
  src="..."
  alt="..."
  aspectRatio="1/1|3/2|4/3|16/9|21/9"
  overlay={boolean}
  priority={boolean}
/>
```

---

## ♿ Accessibilité

### Contrôles Obligatoires

- [x] Contraste texte ≥ 4.5:1
- [x] Contraste large ≥ 3:1
- [x] Focus visible sur tous les éléments interactifs
- [x] Ordre de tabulation logique
- [x] Labels accessibles (aria-label)
- [x] Textes alternatifs (alt)
- [x] Support `prefers-reduced-motion`
- [x] Zone interactive ≥ 44x44px (tactile)
- [x] Navigation clavier complète

### Focus Ring

```css
:focus-visible {
  outline: 3px solid rgb(var(--accent));
  outline-offset: 3px;
}
```

---

## 📱 Responsive Design

### Breakpoints (Tailwind Defaults)

```typescript
sm: 640px   // Tablette portrait
md: 768px   // Tablette paysage
lg: 1024px  // Petit desktop
xl: 1280px  // Desktop standard
2xl: 1536px // Grand écran
```

### Principes

- **Mobile-first** obligatoire
- Pas de hover critique sur mobile
- Interactions tactiles confortables
- Gutters adaptatifs
- Grilles progressives
- Images responsive avec `next/image`

---

## 🎨 Aceternity UI — Usage Sélectif

### Composants Autorisés (avec retenue)

#### Spotlight New
- Usage : Hero, footer, sections inverses
- Contraintes : Opacité faible, désactivable avec reduced-motion

#### Sticky Scroll Reveal
- Usage : Présentation éditoriale expertise (desktop uniquement)
- Contraintes : Fallback simple mobile, contenu accessible sans JS

#### Bento Grid
- Usage : Impact, zones d'intervention, valeurs
- Contraintes : Composition éditoriale maîtrisée, pas d'effet dashboard

### Composants Interdits

- ❌ Meteors
- ❌ Beams animés
- ❌ Effets de collision
- ❌ Text generation character-by-character
- ❌ Grilles futuristes
- ❌ Animations permanentes de fond

---

## 🚫 Éléments Visuels Interdits

- Noir pur (#000000)
- Blanc agressif sans nuance
- Gradients arc-en-ciel
- Couleurs néon
- Halos lumineux excessifs
- Glassmorphism omniprésent
- Ombres dures
- Cards excessivement arrondies (>2rem sans justification)
- Boutons pill partout
- Animations longues (>600ms sans justification)
- Parallaxe lourd
- Scroll hijacking
- Curseur personnalisé
- Visuels médicaux anxiogènes
- Clichés de banques d'images
- Illustrations infantiles

---

## 📦 Assets de Marque

### Logo

```
/public/images/brand/
  ├── resilience-at-work-logo.png          (Light mode)
  ├── resilience-at-work-logo-dark.png     (Dark mode)
  └── resilience-at-work-favicon.png       (Favicon)
```

**Graphie exacte :** `Resilience@Work`
- Avec `e` final à Resilience
- Caractère `@` sans espaces
- `W` majuscule à Work

### Images

```
/public/images/
  ├── hero/
  │   └── resilience-at-work-hero.webp
  ├── jocelyne/
  │   └── jocelyne-katshinda-portrait.webp
  ├── expertise/
  │   ├── psychosocial-prevention.webp
  │   ├── international-mobility.webp
  │   ├── crisis-management.webp
  │   └── training.webp
  └── international/
      ├── africa.webp
      ├── europe.webp
      └── middle-east.webp
```

---

## 🔧 Stack Technique

- **Framework:** Next.js 16.2.7
- **Styling:** Tailwind CSS v4 (avec @theme inline)
- **Fonts:** next/font (Inter, Lora)
- **Icons:** lucide-react
- **Animations:** framer-motion
- **Theme:** next-themes
- **i18n:** next-intl

---

## 📋 Checklist Qualité

### Light Mode
- [ ] Couleurs harmonieuses
- [ ] Texte lisible (contraste ≥4.5:1)
- [ ] Focus visible
- [ ] Boutons interactifs
- [ ] Forms utilisables

### Dark Mode
- [ ] Absence de noir pur
- [ ] Surfaces hiérarchisées
- [ ] Texte lisible
- [ ] Focus visible
- [ ] Photos lisibles (overlay adapté)

### Responsive
- [ ] Mobile étroit (320px)
- [ ] Tablette (768px)
- [ ] Desktop (1280px)
- [ ] Aucun débordement horizontal
- [ ] Touch targets ≥44px

### Accessibilité
- [ ] Navigation clavier complète
- [ ] Focus order logique
- [ ] Labels présents
- [ ] Alt text pertinents
- [ ] Reduced motion respecté
- [ ] Contrastes validés

---

## 📚 Ressources

- **Page de démo:** `/[locale]/design-system`
- **Composants:** `/src/components/`
- **Tokens:** `/src/app/globals.css`
- **Animations:** `/src/lib/animations.ts`
- **Hooks:** `/src/lib/hooks/`

---

**Dernière mise à jour :** 2024  
**Responsable Design System :** Resilience@Work Team
