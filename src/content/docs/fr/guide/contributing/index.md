---
title: Contribuer
description: Comment contribuer guides, cas, exemples de Prompt et traductions — processus et normes de qualité.
sidebar:
  order: 80
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Codex Handbook** est un site de documentation maintenu par la communauté. Nous accueillons les corrections, nouvelles pages, cas reproductibles et exemples de Prompt dans [examples/](/examples/README.md).

## Ce que cette page couvre

- Types de contribution et points d'entrée
- Normes d'écriture et de Vérification
- Attentes PR et release

## Ce qui aide le plus

Si vous remarquez :

- Des sections que vous ne pouvez pas suivre en tant que nouveau
- Des entrées de nav avec contenu mince
- Des commandes, captures ou explications obsolètes

—c'est déjà un signal de contribution à haute valeur.

Vous n'avez pas besoin d'être l'expert du domaine en premier. Beaucoup d'améliorations viennent de premiers lecteurs qui disent « cela suppose que je connais déjà X ».

## Types de contribution

| Type | Description | Guide |
|---|---|---|
| Correction / petite édition | Typos, liens, une phrase obsolète | PR directe |
| Nouvelle page guide | Corps de chapitre sous `src/content/docs/` | [Écrire un guide](/guide/contributing/write-a-guide/) |
| Étude de cas | `src/content/docs/cases/` | [Modèle de cas](/cases/use-cases/case-study-template/) |
| Exemple de Prompt | `examples/prompts/` | [Ajouter un exemple de Prompt](/guide/contributing/add-a-prompt-example/) |
| Vérification technique | Marquer `verified`, mettre à jour les dates | [Vérifier le contenu technique](/guide/contributing/verify-technical-content/) |
| Traduction | `en/`, `zh-tw/`, etc. | Roadmap M6 ; stabiliser la source d'abord |

## Idées reçues courantes

### Contribuer ≠ écrire un chapitre entier

Les contributions utiles incluent :

- Un paragraphe qui aide les débutants
- Corriger une formulation trompeuse
- Une entrée de nav manquante
- Rétrograder ou dater des commandes obsolètes

### « Pas expert » ≠ retour inutile

Si votre audience inclut des débutants, où vous bloquez est un signal — si vous le rendez spécifique et améliorez le texte, pas seulement « confus ».

## Principes fondamentaux

1. **Le chinois simplifié `root` est la source** (sauf indication contraire)
2. **Ne pas copier** les tutoriels externes mot pour mot ; voir [Plan d'intégration sources externes](/docs/planning/external-source-integration.md)
3. **Les faits volatils** nécessitent des dates `Dernière vérification`
4. **Chaque slug sidebar** nécessite un fichier markdown ou `npm run build` échoue
5. Les nouvelles pages doivent mettre à jour la sidebar `astro.config.mjs`

## Chemin de première contribution

1. Choisir quelque chose où vous avez vraiment bloqué
2. Décider : correction de copie, nouvelle page, exemple ou vérifier info obsolète
3. Changer une tranche ciblée — mais expliquer le Contexte lecteur
4. Exécuter le build pour que la structure du site reste valide

Les PR plus petites et cadrées passent la revue plus vite que les réécritures de chapitre entier.

## Développement local

```bash
source ~/.nvm/nvm.sh && nvm use 22
pnpm install
pnpm dev
```

Avant fusion :

```bash
npm run build
```

## Code de conduite

- Respecter le travail des autres ; discuter des idées pas des personnes
- Pas de vraies clés ou données client
- Gros refactors : issue ou RFC d'abord

Une première contribution n'a pas besoin d'être immense — clarifier un vrai point de friction débutant et passer le build.

## Liens associés

- Dépôt : <https://github.com/hopecyb/CodexHandbook>
- [Plan de chapitres](/docs/planning/chapter-outline.md) (planification)

---

**Statut :** vérifié  
**Base de vérification :** Vérifié croisé structure de dépôt, maintenance sidebar, système de statut de page et flux de contribution ; règles de maintenance du handbook — pas le comportement UI Codex volatil.  
**Dernière vérification :** 2026-07-26
