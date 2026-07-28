---
title: Bibliothèque de scénarios et de cas
description: Tâches réelles de bout en bout — préparation, exécution, vérification, reprise après échec et rétrospective.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La bibliothèque de cas répond à : « **Dans ce type d'objectif réel, à quoi ressemble un parcours complet avec Codex ?** » Elle complète les pages produit isolées.

## Cas vs tutoriel

| | Tutoriel d'introduction | Bibliothèque de cas |
|---|---|---|
| Objectif | Apprendre un bouton/un concept | Livrer un type de résultat réel |
| Structure | Par fonction produit | Par type de tâche |
| Gestion des échecs | Souvent omise | Obligatoire |

## Comment utiliser

1. Choisir le cas le plus proche de votre objectif (ou seulement sa « liste de préparation »)
2. Se référer à [Explorer—Planifier—Exécuter—Vérifier](/cases/workflows/explore-plan-execute-verify/)
3. Après achèvement, rétrospective avec le [modèle de cas](/cases/use-cases/case-study-template/) et décider de capitaliser en Skill

## Cas de démarrage existants

| Domaine | Cas | Description |
|---|---|---|
| Développement logiciel | [Correction de bug avec vérification](/cases/use-cases/software-development/fix-a-bug-with-verification/) | Boucle la plus courante pour les développeurs |
| Création de contenu | [Refactorisation de site de docs avec revue](/cases/use-cases/content-creation/refactor-docs-with-review/) | Documentation multi-fichiers et validation de build |
| Recherche et apprentissage | [Matrice comparative de fonctionnalités](/cases/use-cases/research-and-learning/competitive-feature-matrix/) | Livrable de recherche sourcé |
| Automatisation d'équipe | [Vérification planifiée des liens](/cases/use-cases/team-automation/scheduled-link-check/) · [Suggestions de triage d'issues](/cases/use-cases/team-automation/issue-triage-suggestions/) | Automatisation légère CI et tickets |

Les prompts copiables sont dans [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts). D'autres cas par domaine seront ajoutés à cette bibliothèque.

## Axes de contribution

- Étapes reproductibles (dépôt, branche, commandes)
- Indiquer le client applicable et la date de vérification
- Ne pas écrire de récits « succès du premier coup » non vérifiables

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec la structure actuelle de la bibliothèque de cas du dépôt, les pages d'entrée par domaine, le modèle de cas et l'entrée examples/prompts ; cette page assure uniquement la navigation « organisation des cas par type de tâche réelle ».
