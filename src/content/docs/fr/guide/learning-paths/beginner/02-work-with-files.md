---
title: "Travailler avec les fichiers"
description: "Ajoutez une seule ligne au fichier indiqué et observez la modification réelle."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 20
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "Les supports fixes et le résultat de référence de l'auteur sont prêts. Le script de manipulation des fichiers dans un répertoire temporaire a été exécuté, mais aucun test indépendant avec un modèle ou des lecteurs n'a encore été réalisé."
prev:
  link: "/fr/guide/learning-paths/beginner/01-talk-to-codex/"
  label: "Parler avec Codex"
next:
  link: "/fr/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "Donner des consignes claires"
locale: fr
source_locale: zh-CN
source_revision: 'a379994'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

## Prérequis

Vous avez terminé la première étape et `work` contient encore les trois fichiers d'origine. Conservez `starter` en dehors du répertoire de travail comme référence.

## Effectuer une modification vérifiable

```text
Ajoute le commentaire de statut suivant uniquement sur la première ligne de notice.md :
<!-- 状态：练习草稿，未发布 -->
Conserve le texte d'origine caractère par caractère. Ne modifie aucun autre fichier et n'en crée pas.
Une fois terminé, indique l'emplacement de la modification. Ne publie rien et n'envoie aucune notification.
```

Le commentaire chinois signifie « État : brouillon d’exercice, non publié ». Conservez sa forme exacte pour pouvoir comparer le fichier aux supports fournis.

Comparez le fichier ligne par ligne avec l'original dans la vue des différences de votre client ou dans un éditeur. Cette étape demande une seule petite modification ; il n'est pas nécessaire d'ajouter une procédure « planifier d'abord, puis confirmer chaque étape ».

## Critères de réussite

Seul notice.md a changé et l'ajout correspond exactement à une ligne de commentaire ; les deux autres fichiers restent inchangés. Comparez avec le [résultat de la deuxième étape](/downloads/first-project/references/step-2-notice.md). Le commentaire peut être masqué dans le rendu Markdown : examinez donc le fichier brut.

Si le modèle modifie le texte, restaurez notice.md à partir de l'original dans `starter`, puis recommencez cette étape. Ne restaurez que ce fichier d'exercice, sans réinitialiser tout le projet. Voir [Annuler et restaurer](/fr/guide/getting-started/undo-and-recover/).

[Pack d'exercices et préparation](/fr/guide/learning-paths/beginner/)
