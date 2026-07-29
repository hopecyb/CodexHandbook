---
title: Créer une Pull Request
description: Des Tâches Cloud aux PR révisables — descriptions, périmètre et barrières de fusion humaine.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Lors de votre premier workflow Cloud, la Tâche peut être « terminée » alors que les changements ne sont pas encore dans un état facile à inspecter et discuter. En équipe, ce transfert passe généralement par une **Pull Request**.

Une PR est une proposition de changement révisable.

Elle centralise ce qui a changé, pourquoi et comment cela a été testé — où les livrables Cloud arrivent pour l'équipe.

## Ce qui est couvert

- Attentes de bout en bout de la Tâche Cloud à la PR
- Ce que les descriptions de PR doivent inclure pour les humains et CI
- Quand ne pas ouvrir une PR automatiquement

## Quand ouvrir une PR

Si d'autres doivent voir le changement, CI doit s'exécuter, ou le travail doit fusionner dans la branche principale, ne pas s'arrêter à « branche mise à jour » — passer à une **PR révisable**.

## Workflow recommandé

```text
Connecter GitHub → clarifier issue/objectif → Tâche Cloud (confirmer le plan) → pousser branche → ouvrir PR → revue humaine + CI → fusion
```

Prérequis : [Connecter GitHub](/guide/web-and-cloud/connect-github/)

## Pourquoi l'auto-fusion n'est pas la valeur par défaut

Les PR existent pour donner aux personnes et à l'automatisation un point de contrôle — pas seulement pour uploader du code.

Pattern courant :

- Codex peut aider à ouvrir la PR
- Un humain décide s'il fusionne

Cela préserve une barrière de sécurité même si la Tâche a dérivé.

## Essentiels du Prompt de Tâche

```text
Objectif : Corriger le timeout de connexion décrit dans #42
Branche : fix/42-login-timeout
Périmètre : packages/auth et tests associés uniquement
Terminé : Ouvrir PR vers main ; ne pas fusionner
La description PR doit inclure : raison, résumé des changements, commandes et résultats de test, risques et rollback
```

Aligné avec [définir terminé](/prompts/define-done/) et [anatomie de Tâche](/prompts/task-anatomy/).

## Une bonne PR répond à quatre questions

1. Pourquoi avez-vous fait ce changement ?
2. Qu'est-ce qui a exactement changé ?
3. Comment avez-vous vérifié ?
4. Quels risques, limites ou lacunes restent ?

Sans cela, les reviewers doivent reconstruire le Contexte eux-mêmes.

## Checklist qualité PR

- [ ] Le titre indique **quoi** a changé, pas « mise à jour du code »
- [ ] Lie le numéro d'issue
- [ ] CI passe ou explique les échecs connus
- [ ] Taille du diff acceptable ; diviser les PR trop grandes
- [ ] Pas de secrets, pas de tempêtes de formatage non liées
- [ ] Captures ou logs pour changements UI/comportement

## Barrière humaine

Même si Codex ouvre la PR, la **fusion** doit par défaut être humaine (ou un bot contrôlé sous protection de branche) :

Voir [patterns d'Approbation humaine](/cases/workflows/human-approval-patterns/)

## Idées reçues courantes

### 1. Entasser des changements non liés dans une PR

Difficile à revoir et difficile à annuler.

### 2. Dire « corrigé » sans comment vous avez vérifié

Les reviewers ne peuvent distinguer « testé » de « probablement bon ».

### 3. Laisser Codex toucher main directement

Peut fonctionner pour des expériences solo ; trop risqué pour des repos partagés.

## Automatisation de revue

- Utiliser un Skill ou `codex exec` dans CI pour des **commentaires de revue complémentaires**
- L'auto-fusion nécessite une gouvernance séparée — pas le chemin par défaut pour débutants

## Erreurs courantes

- Une PR avec plusieurs fonctionnalités non liées
- Description dit « changements générés par IA » sans notes de test
- Fusion vers main sans revue

## Lectures complémentaires

- [Intégration GitHub](/guide/integrations/github/)
- [Revoir les diffs](/guide/quality/review-diffs/)
- [App de bureau : diffs et commentaires](/guide/desktop-app/diffs-comments-and-review/)

---

**Statut :** obsolète  
**Produits concernés :** Cloud / Web  
**Note de revue :** « La sortie Cloud va dans une PR pour revue humaine » reste valable, mais cette page décrit concrètement les points d'entrée PR, le comportement d'automatisation et le rythme de livraison Cloud ; sans vérification ligne par ligne de l'intégration PR et GitHub Cloud officielle actuelle, elle ne doit pas être marquée `verified`.  
**Dernière vérification :** 2026-07-26
