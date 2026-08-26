---
title: "Plateforme développeur"
description: Intégrez Codex dans votre stack d'ingénierie avec SDK, CLI non interactif et CI/CD — pour les développeurs d'intégration.
sidebar:
  order: 50
locale: fr
source_locale: zh-CN
source_revision: 2e1e79b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

La **Plateforme développeur** est pour ceux qui veulent **industrialiser** Codex dans les pipelines : apps personnalisées, revue par lot, portes de release, portails développeur internes. Pour l'usage quotidien « écrire un prompt pour corriger un bug », commencez par [Premiers pas](/fr/guide/getting-started/).

Ce chapitre ne traite pas l'usage quotidien de Codex — il traite le câblage de Codex dans vos propres systèmes.

Il vise des scénarios comme :

- Exécuter des tâches automatiquement en CI
- Intégrer Codex dans votre backend ou outils internes
- Faire Codex partie des flux de travail d'équipe

## Ce que ce chapitre couvre

- La frontière entre la plateforme développeur et la doc produit utilisateur final
- Architecture d'intégration typique
- Navigation du chapitre et roadmap

## Relation avec la doc produit

| Question du lecteur | Où aller |
|---|---|
| Comment exécuter `codex` dans le terminal | [Guide produit CLI](/fr/guide/cli/) |
| Comment exécuter une revue en CI | [Mode non interactif](/fr/guide/cli/non-interactive-mode/) + CI dans ce chapitre |
| Comment intégrer un Agent dans votre app | [Vue d'ensemble SDK](/fr/guide/developer-platform/sdk-overview/) |
| Modèle de permissions et sécurité | [Modèles d'approbation humaine](/fr/cases/workflows/human-approval-patterns/) |

## Architecture typique (conceptuelle)

```text
Votre système (CI / plateforme interne / SaaS)
        ↓ API ou CLI
Codex (modèle + outils + politique)
        ↓
Fournisseur Git / tickets / stockage d'artefacts
```

## Principes de design

1. **Idempotent et réessayable** : une revue répétée du même PR devrait donner des résultats comparable
2. **Privilège minimum** : tokens CI en lecture seule ou limités à des dépôts spécifiques
3. **Observable** : retenir version du prompt, modèle, artefacts diff
4. **Human-in-the-loop** : commentaires auto ≠ merge auto

## Navigation du chapitre

| Sujet | Pages |
|---|---|
| SDK | [Vue d'ensemble SDK](/fr/guide/developer-platform/sdk-overview/) |
| Non interactif | [codex exec](/fr/guide/developer-platform/non-interactive/codex-exec/) · [Scripts et pipelines](/fr/guide/developer-platform/non-interactive/scripts-and-pipelines/) · [Sortie structurée](/fr/guide/developer-platform/non-interactive/structured-output/) · [Codes de sortie et retries](/fr/guide/developer-platform/non-interactive/exit-codes-and-retries/) |
| Webhooks | [Vue d'ensemble](/fr/guide/developer-platform/webhooks/overview/) |
| CI/CD | [Automatisation de revue de code](/fr/guide/developer-platform/ci-cd/code-review-automation/) |

Pour plus sur `codex-sdk/`, `app-server/` et `architecture-patterns/`, voir le [plan du chapitre](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md).

## Idées reçues courantes

### 1. Dois-je apprendre ce chapitre pour vraiment utiliser Codex ?

Si vous voulez principalement commencer avec Codex d'abord, vous pouvez lire ce chapitre plus tard.

### 2. Comment cela se relie à CLI / App / IDE ?

Imaginez :

- **App / CLI / IDE** : points d'entrée où vous ou votre équipe utilisez Codex directement
- **Plateforme développeur** : intégrer Codex dans d'autres systèmes et flux de travail

### 3. Qu'est-ce qui est le plus utile à lire en premier dans ce chapitre ?

Si vous voulez seulement une vue conceptuelle, commencez par [Vue d'ensemble SDK](/fr/guide/developer-platform/sdk-overview/) et sa relation avec le [mode non interactif](/fr/guide/cli/non-interactive-mode/).

Le chapitre plateforme développeur traite le câblage de Codex dans les systèmes. Pour votre première utilisation pratique de Codex, lisez d'abord le contenu premiers pas.

## Sources de référence
- Documentation officielle API / SDK OpenAI Codex
---

**Statut :** vérifié  
**Produits concernés :** API / CLI / Cloud  
**Base de vérification :** Recoupement avec la structure actuelle du chapitre plateforme développeur, les entrées de navigation et les pages CLI/CI/SDK liées dans ce dépôt ; cette page ne décrit que la division stable que la plateforme développeur vise l'intégration d'ingénierie, sans prétendre à des paramètres ou comportement d'exécution spécifiques.  
**Dernière vérification :** 2026-07-26
