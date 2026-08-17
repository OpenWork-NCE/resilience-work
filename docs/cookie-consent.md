# Consentement cookies

## Catégories

- `necessary` : toujours actifs
- `preferences` : choix d’affichage
- `analytics` : préparé, aucun fournisseur
- `marketing` : préparé, aucun fournisseur

## Stockage

Clé localStorage : `resilienceatwork_consent`.  
Le thème est géré à part par `next-themes`.

## Composants

- `src/components/consent/consent-provider.tsx`
- `src/components/consent/cookie-banner.tsx`
- `src/components/consent/cookie-preferences-dialog.tsx`
- `src/components/consent/cookie-category-toggle.tsx`
- `src/components/consent/cookie-settings-trigger.tsx`

Le déclencheur « Gérer mes cookies » est dans le footer.

## Comportement

- Première visite : bandeau
- Tout accepter / tout refuser / personnaliser
- Enregistrer les choix dans le dialogue
- `ScriptGate` n’injecte un script que si la catégorie est acceptée
