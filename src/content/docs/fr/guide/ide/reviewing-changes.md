---
title: Réviser les modifications dans l'IDE
description: Examiner les différences à côté du code source et utiliser le relecteur en lecture seule pour contrôler le worktree.
locale: fr
source_locale: zh-CN
source_revision: 1ca9ffe
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 70
---

L'IDE facilite la lecture des résumés à côté du code source et l'examen ciblé d'un diff. Une modification visible dans l'éditeur n'est pas pour autant acceptée. Examinez le diff, exécutez les tests, puis décidez de ce que vous conservez.

## Effectuer une révision locale complète

1. Lisez le résumé du résultat, sans le substituer au diff.
2. Développez les lignes modifiées et examinez chaque fichier affecté.
3. Conservez les modifications nécessaires et demandez des corrections pour tout ce qui dépasse le périmètre.
4. Exécutez `/review` dans la zone de saisie.
5. Comparez avec une branche de base ou révisez les modifications non validées.
6. Exécutez les tests du projet et les contrôles statiques dans le terminal de l'IDE.
7. Confirmez l'état Git final avec les outils Git.

`/review` n'apparaît que si le projet ouvert est un dépôt Git. Il présente les constats par priorité et ne modifie pas le worktree. Dans l'IDE, vous pouvez choisir :

- **Review against a base branch :** comparer la branche actuelle à la base sélectionnée.
- **Review uncommitted changes :** examiner les modifications actuelles du worktree.

Par défaut, les résultats s'affichent dans la conversation actuelle. Définissez `chatgpt.reviewDelivery` sur `detached` pour ouvrir une conversation de révision distincte.

## Prompt avec des critères de révision explicites

```text
Révise les modifications actuellement non validées. Donne la priorité aux défauts
susceptibles d'entraîner un comportement incorrect, une perte de données ou un
problème de sécurité. Ignore les préférences purement stylistiques. Chaque constat
doit indiquer un emplacement de fichier, une condition de déclenchement et un impact
vérifiable. S'il n'y a aucun constat, indique les lacunes restantes dans les tests.
```

## Liste de contrôle d'acceptation

- [ ] Les fichiers modifiés correspondent au périmètre autorisé de la tâche.
- [ ] Aucune suppression accidentelle, aucun reformatage de fichier entier et aucun fichier sensible.
- [ ] Les chemins d'échec et les cas limites sont couverts.
- [ ] Les tests, le lint et les vérifications de types requis réussissent.
- [ ] Les constats prioritaires du relecteur sont corrigés ou explicitement acceptés.
- [ ] `git diff --check` et `git status --short` présentent l'état attendu.

Pour les commentaires ligne par ligne, le staging ou l'annulation par hunk, utilisez [Diffs, commentaires et révision](/fr/guide/desktop-app/diffs-comments-and-review/). Pour la méthode générale, consultez [Réviser les diffs](/fr/guide/quality/review-diffs/).

## Sources officielles

- [Code review](https://learn.chatgpt.com/docs/code-review)
- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)

---

**Statut :** vérifié

**Produits concernés :** IDE

**Dernière vérification :** 2026-08-26
