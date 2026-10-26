---
title: Terminer votre premier petit projet
description: Livrez l’annonce, le compte rendu de vérification et celui de restauration, et pas seulement vos impressions d’apprentissage.
contentType: path
audiences:
- beginner
level: beginner
editorialStatus: review
sidebar:
  order: 50
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: Les documents fixes et la référence de l’auteur sont complets ; le script d’opérations sur fichiers dans un répertoire temporaire a été exécuté, mais aucun test autonome avec un modèle ou des lecteurs n’a encore été effectué.
  evidence:
  - label: Compte rendu des opérations sur fichiers de l’auteur
    href: /downloads/first-project/validation/record.json
prev:
  link: /fr/guide/learning-paths/beginner/04-review-results/
  label: Examiner les résultats
next:
  link: /fr/cases/analyze-a-spreadsheet/
  label: Continuer avec un rapport de ventes hebdomadaire
locale: fr
source_locale: zh-CN
source_revision: "cc1139b"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: 2026-10-26
---

## Conditions préalables

L’annonce a été vérifiée point par point, facts.md et private-note.md sont inchangés, et records contient votre propre compte rendu de vérification.

## S’exercer une fois à la restauration

1. Copiez tout le dossier `work` dans un nouveau dossier `backup-final` et vérifiez que les trois fichiers sont présents.
2. Faites-en une autre copie dans un nouveau dossier `recovery-drill`. Seulement dans cette copie d’exercice, remplacez notice.md par une « version erronée pour l’exercice de restauration ». Le véritable dossier work doit rester intact.
3. Ouvrez le fichier d’exercice pour confirmer qu’il a bien changé, puis remplacez-le par le notice.md correct provenant de backup-final.
4. Comparez un par un les trois fichiers de recovery-drill à ceux de la sauvegarde pour confirmer que leur contenu est identique. Vérifiez aussi que work n’a pas changé.

Un gestionnaire de fichiers et un éditeur suffisent. Vérifiez d’abord que le chemin cible correspond bien à la copie d’exercice. Si un dossier du même nom existe déjà, choisissez un autre nom pour éviter d’écraser du contenu. Si vous ne pouvez pas confirmer le résultat de la restauration, notez « non confirmé » dans le compte rendu.

## Conserver des livrables transmissibles

Copiez `templates/handoff.md` dans records. Renseignez selon les faits la version du client, les fichiers finaux, les sources, les preuves de vérification, le mode d’inscription encore inconnu et le résultat de la restauration. Gardez les consignes utilisées cette fois pour pouvoir remplacer les documents la prochaine fois.

La livraison comprend le notice.md final, le facts.md original, vos propres review.md et handoff.md, ainsi que des consignes réutilisables. Ce sont des fichiers pédagogiques ; ils n’autorisent aucune publication réelle.

## Critères de réussite

L’annonce repose sur des faits sans inventer les inconnues ; le périmètre des changements est correct ; les erreurs de l’exemple fautif ont été repérées ; l’exercice de restauration a réellement été effectué et consigné ; la transmission permet à une autre personne de retrouver les sources et les questions ouvertes. Écrire seulement « trois tâches réussies » ne prouve pas que l’exercice est terminé.

Le [compte rendu de validation des opérations sur fichiers](/downloads/first-project/validation/record.json) et le [script de reproduction](/downloads/first-project/validation/reproduce.py) de l’auteur prouvent uniquement le processus de copie et de restauration de référence dans un répertoire temporaire. L’exercice principal ne nécessite pas Python et ces documents ne remplacent pas vos propres actions.

Continuez avec le [rapport de ventes hebdomadaire](/fr/cases/analyze-a-spreadsheet/) ou le [parcours créateur](/fr/guide/learning-paths/creator/).

[Dossier d’exercice et consignes de préparation](/fr/guide/learning-paths/beginner/).
