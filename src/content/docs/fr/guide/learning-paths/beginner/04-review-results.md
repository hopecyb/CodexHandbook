---
title: "Examiner les résultats"
description: "Entraînez-vous à repérer les erreurs d'un exemple fixe, puis vérifiez votre propre annonce."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 40
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "Les supports fixes et le résultat de référence de l'auteur sont prêts. Le script de manipulation des fichiers dans un répertoire temporaire a été exécuté, mais aucun test indépendant avec un modèle ou des lecteurs n'a encore été réalisé."
  evidence:
    - label: "Journal des opérations sur les fichiers de l'auteur"
      href: "/downloads/first-project/validation/record.json"
prev:
  link: "/fr/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "Donner des consignes claires"
next:
  link: "/fr/guide/learning-paths/beginner/05-complete-first-project/"
  label: "Terminer votre premier petit projet"
locale: fr
source_locale: zh-CN
source_revision: "e426ec4"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

## Commencer par un exemple dont les erreurs sont connues

Ouvrez l'[annonce volontairement erronée préparée par l'auteur](/downloads/first-project/references/flawed-notice.md), comparez-la avec `facts.md`, puis notez chaque phrase erronée, le numéro du fait correspondant et la façon de la corriger. Cet exemple n'est pas une sortie de modèle et ne prouve pas qu'un prompt donné échoue nécessairement.

N'assouplissez pas volontairement les permissions de votre véritable répertoire de travail pour provoquer un changement hors périmètre. L'exemple erroné fixe suffit pour apprendre à repérer les erreurs et comparer les résultats de façon répétable.

## Vérifier ensuite votre propre production

Copiez `templates/review.md` du paquet dans un nouveau dossier `records` situé en dehors du répertoire de travail, puis renseignez chaque point :

- L'heure, le lieu, le nombre de places, le coût et les préparatifs sont-ils corrects ?
- Le mode d'inscription reste-t-il inconnu et les numéros de faits justifient-ils le texte ?
- Seul notice.md a-t-il changé ? Les faits et la note d'origine sont-ils intacts ?
- Des fichiers ont-ils été créés ou supprimés en plus, ou des données envoyées à l'extérieur ?

Indiquez « non vérifié » pour les points inconnus ; ne les marquez pas comme réussis au seul motif que le modèle dit « terminé ».

## Critères de réussite

Repérez de manière autonome les quatre erreurs factuelles de l'exemple, puis consultez la [clé de vérification](/downloads/first-project/references/review-key.md) : l'heure de fin, le nombre de participants, un mode d'inscription inventé et le fait de présenter l'apport volontaire d'un livre comme obligatoire. Si votre propre annonce comporte des problèmes, corrigez-les puis vérifiez à nouveau.

Conservez le compte rendu de vérification que vous avez réellement rempli ; ne copiez pas la référence de l'auteur comme preuve d'avoir terminé. À lire aussi : [Examiner les différences](/fr/guide/quality/review-diffs/).

[Pack d'exercices et préparation](/fr/guide/learning-paths/beginner/)
