---
title: Diffs, commentaires et révision
description: Vérifiez les modifications réelles et laissez des commentaires ligne par ligne dans le volet de révision avant tout commit ou push.
locale: fr
source_locale: zh-CN
source_revision: 3efee20
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 50
---

Le résumé d'une conversation est l'explication du travail donnée par Codex. Le diff Git montre ce qui a réellement changé dans les fichiers. Le volet de révision de l'App de bureau affiche les diffs, permet d'ajouter des commentaires ligne par ligne et de choisir les modifications à indexer, annuler, commiter ou pousser.

Le projet doit se trouver dans un dépôt Git pour utiliser le volet de révision complet et `/review`.

## Deux niveaux de révision

Examinez d'abord vous-même le périmètre, puis demandez à un réviseur indépendant de rechercher des défauts d'implémentation :

1. Ouvrez le volet de révision et contrôlez le nombre et les chemins des fichiers modifiés.
2. Sélectionnez **Last turn** pour voir précisément les modifications du dernier tour.
3. Passez de **Unstaged** à **Staged**, **Commit** et **Branch** pour confirmer le périmètre de la révision.
4. Exécutez `/review` dans la zone de saisie.
5. Choisissez de comparer à une branche de base, de réviser les modifications non commitées, d'examiner un commit précis ou d'appliquer vos propres critères.
6. Lisez les constats par ordre de priorité, puis décidez des corrections.

Le réviseur `/review` est en lecture seule par défaut et ne modifie pas le worktree. Si vous demandez ensuite à Codex de corriger un constat, les règles initiales du bac à sable et des approbations restent applicables.

## Critères de révision réutilisables

```text
Révise les modifications actuelles non commitées. Concentre-toi sur :
- les modifications hors du périmètre de la tâche ;
- les régressions de comportement, les cas limites et les problèmes de sécurité ;
- la couverture des chemins d'échec par les tests ;
- la cohérence entre la documentation et l'implémentation.

Commence par les constats, triés par gravité. Pour chacun, indique le fichier,
l'emplacement, les preuves et la correction minimale raisonnable.
Si tu ne trouves aucun problème, dis-le clairement et indique les tests manquants.
```

## Réduire l'ambiguïté avec les commentaires de ligne

Survolez une ligne suspecte, sélectionnez le **+** qui apparaît, puis formulez un commentaire précis. Une fois tous les commentaires ajoutés, envoyez une instruction explicite :

```text
Traite les commentaires de ligne que j'ai laissés. Limite les modifications,
relance les tests concernés et affiche le nouveau diff une fois terminé.
```

Un commentaire utile identifie un risque ou une condition d'acceptation, par exemple : « Que renvoie cette fonction pour un tableau vide ? » Un simple « C'est faux » fournit généralement trop peu d'informations.

## Indexer et annuler

Le volet de révision peut indexer, désindexer ou annuler un diff entier, un fichier ou un hunk. Une annulation supprime les modifications. Avant de l'utiliser, vérifiez que celles-ci n'étaient pas déjà présentes au début de la tâche.

Suivez un ordre d'acceptation constant : périmètre → comportement → tests → sécurité → maintenabilité. Consultez [Réviser les diffs](/fr/guide/quality/review-diffs/) pour approfondir.

## Source officielle

- [Révision de code](https://learn.chatgpt.com/docs/code-review)

---

**Statut :** verified

**Produits concernés :** App, CLI, IDE

**Dernière vérification :** 2026-08-26
