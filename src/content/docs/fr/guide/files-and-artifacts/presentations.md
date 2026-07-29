---
title: Présentations
description: Générer et réviser slides et decks — structure, masters et notes du présentateur.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

Les présentations (PPT, Keynote, Google Slides, Marp/Reveal, etc.) mettent l'accent sur la **structure narrative** et la **cohérence visuelle**. Les Agents excellent aux plans et premières versions ; les masters et règles de marque nécessitent encore une revue humaine.

Avec Codex, la plus grande valeur est la structure initiale, l'ordre des slides et le récit — le polish final reste à vous.

## Ce que cette page couvre

- Workflow recommandé pour les slides avec Codex
- Arbitrages : `.pptx` vs slides Markdown
- Éviter « chaque slide a l'air différent »

## Choisir le format de livraison d'abord

| Format | Convient |
|---|---|
| Marp / Slidev / reveal.md | Développeurs, contrôle de version |
| `.pptx` | Revues métier, partage avec clients |
| Google Slides | Collaboration en direct (souvent via export ou MCP) |
| Export PDF | Distribution lecture seule |

Indiquer le format dès le début pour que l'Agent ne mélange pas les chaînes d'outils.

Choisir par audience :

- Client, exec, collègues qui éditent dans Office : généralement `.pptx`
- Version avec le code : généralement slides Markdown
- Handout lecture seule : généralement export PDF

## Workflow recommandé

```text
1. Plan : audience, durée, 3–5 messages clés
2. Par slide : titre + 3 puces, puces de notes du présentateur
3. Choisir l'outil, générer la première version
4. Passage humain : master, graphiques, sources de données
5. Exporter PDF, répéter le timing
```

Aligné avec [Explorer–planifier–exécuter–vérifier](/cases/workflows/explore-plan-execute-verify/) : approuver le plan avant le détail.

## Pourquoi la structure vient en premier

Sans structure, Codex peut produire beaucoup de slides avec :

- Mauvais ordre
- Nombre de pages incontrôlé
- Chaque slide comme une affiche, pas un deck

Travailler généralement en trois couches :

1. Que doit clarifier ce deck ?
2. Quel est le rôle unique de chaque slide ?
3. Ensuite remplir le texte, notes de graphiques, notes du présentateur

## Idées reçues courantes

### 1. Slides flashy ≠ message plus clair

Ce qui compte :

- Titres qui expriment le point
- Progression slide à slide
- Données sourcées

### 2. Première version complète ≠ pas de revue humaine

Encore vérifier par un humain :

- Marque et master
- Conclusions clés
- Nombres et graphiques
- Versions externes

### 3. Plus sur une slide ≠ plus de clarté

Trop de puces, graphiques et conclusions par slide cache le point.

## Ordre pratique pour Codex

1. Audience
2. Durée
3. Trois enseignements que vous voulez
4. Demander le plan d'abord
5. Après approbation du plan, développer chaque slide
6. Ensuite notes du présentateur, exigences visuelles, format d'export

Structure → texte → style est généralement plus facile à contrôler.

## Essentiels du Prompt

- **Audience** : ingénieurs vs exécutifs → profondeur terminologique
- **Limite de pages** : empêche le bruit de 80 slides
- **Marque** : couleur primaire, chemin logo, pas de clipart si la politique dit non
- **Graphiques** : citer les fichiers source ; données mises à jour pas fausses captures

Exemple de ton :

> « Plan jusqu'à 10 slides pour exécutifs non techniques ; une conclusion centrale par slide ; ajouter les notes du présentateur en dernier. »

Mieux que « faire un super PPT ».

Images : [Images et captures d'écran](/guide/files-and-artifacts/images-and-screenshots/) ; génération pure : [Génération d'images](/guide/tools/image-generation/).

## Vérification

- Taille de police lisible à la résolution de projection
- Animation sobre (difficile à maintenir si excessive)
- Nombres correspondent à [Valider les sources](/guide/quality/validate-sources/)
- Notes du présentateur suffisantes si nécessaire

## Ce qu'il faut déléguer vs garder

| Mieux pour Codex | Mieux pour les humains |
|---|---|
| Plan et décomposition des slides | Formulation finale des conclusions |
| Titres de première version | Cohérence de marque |
| Notes du présentateur de première version | Données sensibles |
| Drafts de légendes de graphiques | Versions de publication externe |

## Erreurs courantes

- Pas de plan — « faire un deck de rapport trimestriel »
- Éditer `.pptx` à répétition sans source Markdown
- Données de graphique incohérentes avec le CSV du repo
- Un Prompt décide structure, design, conclusions et définitions de données

## Checklist d'acceptation

- [ ] Plan approuvé avant génération complète
- [ ] S'ouvre dans l'environnement cible sans rupture de police
- [ ] Données clés traçables vers les fichiers source

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Vérifié croisé avec les pages vérifiées artefacts-first, validate-sources, images-and-screenshots, verify-artifacts ; méthode stable : structure → texte → style et export.  
**Dernière vérification :** 2026-07-26
