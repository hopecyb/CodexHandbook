---
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: 'Cette page a été recoupée avec les chapitres déjà vérifiés sur l''examen des diffs, la définition de terminé et l''annulation. Elle se concentre sur l''ordre stable : contrôler le périmètre, le résultat et les effets secondaires avant d''accepter.'
  checkedAt: '2026-07-26'
title: Examiner le résultat
description: Lire les modifications, vérifier le livrable et décider de l'accepter ou de le corriger.
locale: fr
source_locale: zh-CN
source_revision: 'a215910'
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 90
reviewed_at: '2026-10-26'
---

Après une tâche, beaucoup de débutants sautent cette étape.

Pour utiliser Codex de façon fiable, il faut savoir **examiner le résultat**.

Ne vous contentez pas de lire qu'il a « terminé ». Vérifiez ce qu'il a réellement modifié et si le résultat correspond à vos attentes.

## Liste de vérification

1. **Lire le diff** : seuls les fichiers autorisés ont-ils été modifiés ?
2. **Ouvrir le livrable** : le contenu répond-il aux critères d'acceptation ?
3. **Demander une correction** : si le résultat est proche, donnez un retour précis.
4. **Décider** : accepter, modifier manuellement ou [annuler](/fr/guide/getting-started/undo-and-recover/).

Pour aller plus loin, voir [Examiner les diffs](/fr/guide/quality/review-diffs/).

## Oublis fréquents

### 1. Lire le résumé sans regarder les modifications réelles

Codex peut produire un résumé convaincant, mais l'essentiel est de vérifier :

- S'il a modifié les mauvais fichiers
- S'il a touché à des éléments non autorisés
- Si le résultat satisfait réellement aux critères d'acceptation

### 2. Accepter un résultat « à peu près bon »

Un résultat « à peu près bon » peut laisser de petits problèmes pour plus tard. S'il manque peu de chose, donnez une correction précise plutôt que de vous en accommoder.

### 3. Voir un problème sans savoir le formuler

Vous pouvez poursuivre avec une phrase comme :

```text
Le résultat est proche, mais il reste deux problèmes : 1) … 2) … Corrige uniquement ces deux points et ne touche à rien d'autre.
```

## Ordre de vérification

Pour votre premier exercice, procédez ainsi :

1. **Périmètre** : quels fichiers ont changé ?
2. **Résultat** : le résultat de la page, du document ou du code correspond-il aux attentes ?
3. **Effets secondaires** : y a-t-il des modifications inutiles ou de nouvelles erreurs ?

Valider, c'est décider si vous pouvez conserver ce résultat en confiance.
