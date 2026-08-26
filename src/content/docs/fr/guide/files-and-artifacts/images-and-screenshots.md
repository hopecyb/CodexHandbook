---
title: Images et captures d'écran
description: Fournir des captures et entrées design à Codex ; gérer les fichiers image dans les Tâches.
locale: fr
source_locale: zh-CN
source_revision: b5ab733
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

Les images permettent à l'Agent de **voir** les problèmes UI, l'intention design ou les croquis de tableau blanc. Cette page couvre l'entrée (images que vous fournissez) et les fichiers image dans le repo ; pour générer de nouvelles images voir [Génération d'images](/fr/guide/tools/image-generation/).

Lors des Tâches avec captures, indiquez quoi regarder et pourquoi c'est important.

## Ce que cette page couvre

- Comment attacher des captures efficacement
- Utiliser les exports design / Figma
- Taille d'image dans le repo et le Contexte

## Scénarios d'image d'entrée

| Scénario | Approche |
|---|---|
| Bug UI | Capture + texte marquant la zone problème |
| Implémentation design | PNG exporté + breakpoints et bibliothèque de composants |
| Tableau blanc architecture | Photo claire ou export + légende |
| Dialogue d'erreur | Texte d'erreur complet visible — pas un coin coupé |

Exploration profonde : [Prompt avec images](/fr/prompts/prompting-with-images/)

## Ce que les images ajoutent réellement

Idéal pour l'information difficile en mots seuls :

- Comment la mise en page est incorrecte
- Où un bouton est compressé
- Ce qu'un dialogue dit

Les images ne disent pas automatiquement à Codex :

- Ce qui compte le plus pour vous
- Le changement attendu
- Si c'est « actuel » ou « cible »

Associer les images à une phrase directe.

## Exigences de qualité

- **Résolution** : texte lisible ; éviter les miniatures floues
- **Recadrage** : supprimer bureau non pertinent, barre de notification sensible
- **Annotation** : flèches/cercles OK — répéter les points clés en texte
- **Images multiples** : associer « actuel / attendu »

## Idées reçues courantes

### 1. Capture ≠ compréhension automatique

Les captures sont des preuves — vous avez encore besoin de :

- Où est le problème
- Ce que vous voulez changer
- Quelle image est actuelle vs cible

### 2. Plus grand n'est pas toujours mieux

Les originaux énormes ajoutent du bruit et alourdissent le repo/Contexte.

### 3. Image design seule ne suffit pas

Pour « implémenter depuis le design », spécifier aussi :

- Breakpoints
- Contraintes de composants
- Ce qui est fixe vs flexible

## Images dans le repo

| Pratique | Pourquoi |
|---|---|
| `assets/` ou `docs/images/` unifié | Maintenance plus facile |
| WebP/compression | Contrôler la taille de clone |
| Noms de fichiers significatifs | `login-form-mobile.png` pas `image1.png` |
| Texte alt (dans docs) | Accessibilité |

## Modèle de Prompt copier-coller

```text
La première image est la page actuelle, la seconde le résultat souhaité.
Focus sur la zone titre hero et l'espacement des boutons.
Ne pas inférer la logique métier depuis les captures — mise en page et visuels uniquement.
```

## Confidentialité et sécurité

- Les captures peuvent contenir données client, URLs internes, tokens — nettoyer d'abord
- Ne pas envoyer des écrans de config avec secrets à des Tâches non fiables
- [Contexte sensible](/fr/guide/context/sensitive-context/)

## Sources de référence
- OpenAI Help Center : FAQ ChatGPT Image Inputs
- OpenAI Academy : Working with files in ChatGPT
- OpenAI API Developer Quickstart : Analyze images and files
## Vérification

Pour les Tâches « implémenter depuis image » :

1. Comparer côte à côte l'implémentation et la référence (ou [Outil navigateur](/fr/guide/tools/browser/))
2. Vérifier responsive et mode sombre si requis
3. [Vérifier les artefacts](/fr/guide/quality/verify-artifacts/)

## Erreurs courantes

- Design seulement, pas de notes d'interaction
- Committer des originaux 4K
- Supposer que le modèle lit les liens Figma sans export

Les bonnes captures sont image claire, focus clair, attente claire — pas seulement « il y a une image ».

---

**Statut :** vérifié  
**Produits concernés :** App / Cloud  
**Base de vérification :** Vérifié croisé avec les matériaux officiels OpenAI entrée image et upload fichier pour upload capture, annotation, taille fichier et confidentialité ; aucune étape UI version-spécifique retenue dans le corps.  
**Dernière vérification :** 2026-07-26
