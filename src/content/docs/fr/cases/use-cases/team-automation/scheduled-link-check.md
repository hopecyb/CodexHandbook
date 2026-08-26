---
title: "Cas : vérification planifiée des liens de documentation"
description: Utiliser Codex non interactif ou CI pour scanner les liens morts du site — cas d'introduction à l'automatisation d'équipe.
locale: fr
source_locale: zh-CN
source_revision: e8fa8bd
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Mainteneurs d'équipe, rédacteurs techniques |
| Client | CLI + GitHub Actions |
| Durée estimée | 45–90 minutes (y compris première configuration CI) |
| Date de vérification | 2026-07-25 |

## 1. Objectif et contexte

**Objectif :** Vérifier automatiquement chaque semaine les liens internes du site de documentation et les liens externes clés ; signaler les liens morts via PR ou issue.

**Critères de succès :**

- CI ou workflow planifié exécutable de façon répétée
- Liste structurée des liens morts (fichier, numéro de ligne, URL)
- Aucune modification de fichier non pertinent, pas de push

**Hors périmètre :** Crawl complet du site, pages après connexion, tests de performance.

## 2. Préparation

- Code source du site de documentation dans un dépôt Git (ex. `src/content/docs/` de ce manuel)
- `npm run build` ou script de vérification de liens existant (optionnel)
- `GITHUB_TOKEN` en lecture seule et `OPENAI_API_KEY` dans les secrets d'organisation

## 3. Flux de travail

### Explorer

```text
Lisez @src/content/docs/ et les scripts package.json existants.
Listez s'il existe déjà une vérification de liens ; sinon, proposez une solution minimale : liens internes markdown + échantillon de liens externes officiels.
Ne modifiez pas les fichiers.
```

### Planifier

```text
Proposez un plan : chemin du fichier prompt, nom du workflow CI, champs de sortie JSON structurée.
Attendez ma confirmation avant de créer les fichiers.
```

### Exécuter

- Ajouter `prompts/ci/link-check.md`
- Ajouter `.github/workflows/docs-link-check.yml` (indicatif, voir [Scripts et pipelines](/fr/guide/developer-platform/non-interactive/scripts-and-pipelines/))
- Utiliser [codex exec](/fr/guide/developer-platform/non-interactive/codex-exec/) ou script pur + reclassement Codex

### Vérifier

- `codex exec` en local une fois
- `workflow_dispatch` manuel en CI
- Insérer volontairement un lien mort, confirmer `pass: false`

## 4. Échec et reprise

| Problème | Traitement |
|---|---|
| Site externe temporairement en 503 | Distinguer lien mort dur et échec temporaire, définir dans le prompt |
| Échec d'analyse JSON | Renforcer les contraintes de [sortie structurée](/fr/guide/developer-platform/non-interactive/structured-output/) |
| Quota épuisé | Passer à une planification hebdomadaire + vérification incrémentale |

## 5. Capitalisation

- Après la troisième exécution réussie, capitaliser en Skill : `docs-link-audit`
- [Règles de commande](/fr/guide/customization/rules/team-rules/) d'équipe autorisant `npm run build` et git en lecture seule

## 6. Chapitres connexes

- [Gestion des tâches longues](/fr/cases/workflows/long-running-task-management/)
- [Tâches planifiées Automations](/fr/skills/automations/scheduled-tasks/)
- [Parcours équipe](/fr/guide/learning-paths/team/)

---

**Statut :** verified  
**Produits concernés :** CLI  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les chapitres vérifiés sur le mode non interactif, les scripts et pipelines, la sortie structurée, les règles d'équipe et l'automatisation ; ce contenu se limite au cas stable « vérification planifiée des liens, rapport structuré et arrêt en cas d'échec ».
