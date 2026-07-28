---
title: Prompts avec images
description: Comment formuler une demande quand vous donnez à Codex des captures, maquettes ou photos de tableau blanc.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Beaucoup d'échecs « à partir d'une image » ne viennent pas d'une image invisible, mais d'une image **sans consigne sur quoi en tirer**.

Un Prompt image aide Codex à clarifier :

1. ce qu'est l'image
2. où regarder
3. à quelle tâche sert la sortie

## Quand utiliser des images

| Scénario | Rôle de l'image |
|---|---|
| bug UI | voir l'anomalie et l'état |
| fidélité design | layout, hiérarchie, espacements, ambiance |
| doc à partir d'écran | rédiger à partir de l'interface |
| tableau / schéma | structurer une description |
| actuel vs attendu | voir l'écart sans deviner le besoin |

Pour l'apparence, la position, l'état visuel, l'image bat souvent un long texte ; pour les règles métier, elle complète surtout.

## Structure en quatre blocs

Comme pour le texte, restez structuré :

### 1. Identité de l'image

Quoi, d'où.

```text
Capture de la page de connexion en production, iPhone 14 Safari.
```

### 2. Zone d'attention

Indiquez où regarder — pas seulement « trouve le problème ».

```text
Concentre-toi sur l'espace entre le bouton du bas et le champ de saisie, et le layout quand le clavier est ouvert.
```

### 3. Objectif de tâche

Analyser, reproduire, coder, documenter, tableau comparatif…

```text
Analyse d'abord les causes possibles ; ne modifie pas le code tout de suite. Propose 2–3 fichiers front les plus probables.
```

### 4. Format de sortie

```text
Sortie :
1. phénomènes observés sur l'image
2. causes possibles
3. fichiers à inspecter
4. captures supplémentaires dont tu as besoin
```

## Trois modèles

### 1. Diagnostiquer à partir d'une capture

```text
Voici une capture de la page actuelle. Zone encadrée en rouge.
Décris d'abord l'anomalie, puis 2–3 causes possibles.
Ne modifie pas le code pour l'instant.
```

### 2. Implémenter d'après une maquette

```text
Voici la maquette cible.
Résume structure de page, composants clés, points responsive et style visuel.
Si tu implémentes, garde structure et hiérarchie ; n'ajoute pas de fonctionnalités.
```

### 3. Actuel vs attendu

```text
Deux images : effet actuel, puis effet attendu.
Compare layout, hiérarchie textuelle, espacements et indices d'interaction ; propose un ordre de correction.
```

## Contexte texte utile

L'image manque souvent de contexte d'exécution :

- appareil ou navigateur
- hover / focus / erreur
- position de scroll
- « actuel » ou « cible »
- design system existant ou non

« OK sur Chrome desktop, bug seulement iOS Safari » vaut parfois plus qu'une image de plus.

## Plusieurs images

### Par paires

- actuel + attendu  
ou  
- normal + anormal

Évitez une pile d'images sans légende.

### Rôle par image

```text
Image 1 : rendu desktop actuel
Image 2 : rendu mobile actuel
Image 3 : maquette cible
```

## Erreurs fréquentes

### « Fais comme ça »

Codex déduit tout — y compris des détails que vous ne vouliez pas imposer.

### Recadrage sans contexte

On voit le point local, pas l'état de page, le responsive ou une modale.

### Maquette = spec complète

L'apparence ne dit pas toujours données, limites, logique d'interaction — complétez en texte.

### L'image remplace l'acceptation

Même « selon la maquette », validez page réelle, diff, breakpoints, usage.

## Pages liées

- [Images et captures](/guide/files-and-artifacts/images-and-screenshots/)
- [Génération d'images](/guide/tools/image-generation/)
- [Anatomie d'une tâche](/prompts/task-anatomy/)
- [Demander un plan d'abord](/prompts/ask-for-a-plan/)

## Astuce

Pour une lecture « revue design », enchaînez **observation** → **jugement** → **recommandation** :

```text
Décris d'abord uniquement ce que tu observes sur l'image, sans conclusion.
Puis hypothèse sur la cause la plus probable.
Enfin direction de modification suggérée.
```

Plus clair qu'un « corrige » seul.

## Sources

- OpenAI Help Center : ChatGPT Image Inputs FAQ
- OpenAI Academy : Working with files in ChatGPT
- OpenAI API Developer Quickstart : Analyze images and files

---

**Statut :** verified  
**Produits concernés :** App / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Structure, scénarios et précautions revus selon la doc officielle OpenAI sur entrées image et upload de fichiers ; pas de dépendance à des sources non officielles ni à des détails d'interface versionnés.
