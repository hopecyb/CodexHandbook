---
title: Déléguer et poursuivre
description: Lancez une tâche Cloud exécutable de manière autonome, puis utilisez la même conversation pour corriger sa direction et accepter le résultat.
locale: fr
source_locale: zh-CN
source_revision: 681ea7d
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

Déléguer ne consiste pas à se débarrasser d'un problème. Il s'agit de donner à une conversation Cloud indépendante l'objectif, les contraintes, l'environnement et les critères de fin. La tâche peut s'exécuter en arrière-plan pendant que vous consultez les journaux, ajoutez du contexte, demandez des corrections et révisez finalement le diff.

## Quand déléguer

- Les builds ou les tests sont longs.
- Les entrées se trouvent déjà dans un dépôt distant.
- Des scripts permettent de recréer l'environnement.
- Le travail peut progresser indépendamment de votre tâche actuelle.
- Vous prévoyez de réviser le résultat plutôt que de le fusionner directement.

Conservez la tâche en local si elle dépend d'un état local non commité, d'un service local ou d'une interaction humaine continue.

## Prompt de délégation complet

```text
Objectif : corriger l'issue #42, où une requête de connexion conserve encore
une connexion après 30 secondes.
Point de départ : branche fix/42-timeout dans acme/api.
Périmètre : packages/auth/** et les tests correspondants.
Interdictions : ne pas mettre à niveau les dépendances, modifier l'API publique
ou pousser sur main.
Vérification : pnpm test --filter auth ; pnpm typecheck.
Fin : afficher la cause racine, le diff, les commandes et leurs codes de sortie.
Ne pas fusionner.
```

Après le lancement, confirmez l'environnement et la branche. N'intervenez que s'il manque une prémisse ou si l'exécution s'écarte de l'objectif :

```text
Contrainte supplémentaire : ne modifie pas le client HTTP global. Conserve la
correction dans l'adaptateur auth. Avant de poursuivre, explique comment cette
contrainte modifie l'approche actuelle.
```

Utilisez la même conversation pour corriger le même objectif, car elle conserve le contexte. Ouvrez une nouvelle conversation pour un objectif indépendant. Des tâches parallèles ne doivent pas écrire sur la même branche ni dans les mêmes fichiers.

## Une fois le résultat disponible

1. Lisez le résumé et le diff complet.
2. Comparez les chemins modifiés avec le périmètre autorisé.
3. Examinez la sortie réelle de chaque commande de vérification.
4. Demandez une explication pour tout échec ou contrôle ignoré.
5. Si nécessaire, donnez une instruction de suivi précise dans la même conversation.
6. Lorsque les critères sont satisfaits, créez une PR et confiez la suite à la CI et à la révision humaine.

Un travail Cloud peut être lancé depuis Web, IDE, GitHub, GitLab (Beta), Linear ou Slack. La page Cloud officielle décrit aussi le lancement et la révision depuis Codex CLI. Les limites liées au dépôt, à l'environnement, au réseau et à la révision restent identiques quel que soit le point d'entrée.

## Poursuivre après un échec

Ne dites pas simplement « réessaie ». Ajoutez les preuves et la prochaine décision :

```text
Le test échoue à retry.test.ts:48. Explique si cette modification en est la cause.
Si oui, corrige uniquement cette régression et relance les tests auth. Sinon,
conserve l'échec et consigne-le explicitement.
```

## Sources officielles

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Travaux de longue durée](https://learn.chatgpt.com/docs/long-running-work)

---

**Statut :** verified

**Produits concernés :** Cloud, App, IDE, CLI

**Dernière vérification :** 2026-08-26
