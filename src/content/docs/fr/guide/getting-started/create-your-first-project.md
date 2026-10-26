---
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: Cette page a été recoupée avec les chapitres déjà vérifiés de ce manuel sur la sécurité des débutants, l'examen du résultat et l'annulation. Elle se limite à une méthode d'apprentissage stable dans un dossier d'entraînement jetable.
  checkedAt: '2026-07-26'
title: Créer votre premier projet d'entraînement
description: Préparer un dossier d'entraînement sûr et jetable.
locale: fr
source_locale: zh-CN
source_revision: "43dcbdb"
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 70
reviewed_at: '2026-10-26'
---
Pour un premier projet d'entraînement, on peut être tenté d'utiliser un véritable projet déjà disponible. Cela semble plus simple, mais augmente aussi les risques.

## Méthode recommandée

1. Créez un nouveau dossier, par exemple `codex-practice/`.
2. Ajoutez un ou deux fichiers texte sans données sensibles, par exemple `hello.md`.
3. Ouvrez ou ajoutez ce dossier comme projet dans Codex.
4. **N'utilisez pas** un dépôt contenant des secrets de production, des données clients ou un historique que vous ne pouvez pas jeter.

## Pourquoi commencer par un projet d'entraînement ?

La première tâche sert à apprendre le déroulement, pas à livrer un travail métier. En l'isolant, vous réduisez fortement le coût d'une erreur.

Lors de ce premier exercice, apprenez surtout :

- Comment Codex interprète la tâche
- Quand il demande une autorisation
- Comment vous vérifiez le résultat
- Comment revenir en arrière en cas d'erreur

Si vous commencez dans un projet réel, ces étapes d'apprentissage censées être peu risquées peuvent avoir de vraies conséquences.

## Idées reçues

### 1. Le projet d'entraînement doit ressembler au maximum à la production

Pour un premier essai, la sécurité, la possibilité de jeter le projet et la facilité de contrôle comptent davantage qu'un réalisme parfait.

### 2. Un vrai dépôt convient si je fais attention

Les problèmes les plus courants lors d'un premier essai sont plutôt :

- Un périmètre de tâche mal défini
- Un détail manqué dans le diff
- Une opération approuvée sans l'avoir comprise

### 3. Un projet trop simple ne m'apprendra rien

Plus la première tâche est petite, plus vous pouvez vous concentrer sur le déroulement plutôt que sur la complexité du métier.

## Comment choisir un projet d'entraînement

Si vous en créez un maintenant, vérifiez au moins ces quatre points :

1. Vous pouvez le jeter.
2. Il ne contient aucune donnée sensible.
3. Il comporte peu de fichiers et une structure simple.
4. Chaque modification se comprend d'un coup d'œil.

Votre premier projet d'entraînement n'a pas besoin de ressembler à la production. Il doit être sûr, simple et facile à remettre en état après une erreur.
