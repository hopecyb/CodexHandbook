---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page explique pourquoi les résultats ont besoin d'une vérification et d'une revue humaine. Les liens internes, l'ordre des étapes et les notions ont été revus ; le texte ne dépend pas de faits produits susceptibles de changer.
  checkedAt: '2026-07-26'
title: Vérification et revue humaine
description: Pourquoi les résultats doivent être contrôlables et comment les examiner.
locale: fr
source_locale: zh-CN
source_revision: bfe4036
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 110
---

Codex peut vous faire gagner du temps, mais il ne peut pas assumer à votre place la responsabilité de valider le résultat final.

La rapidité **ne dispense pas des contrôles d'acceptation**. Au minimum :

1. Lisez le [diff](/fr/guide/quality/review-diffs/) : quels fichiers ont changé et le travail est-il sorti du périmètre prévu ?
2. Comparez le résultat à votre définition de terminé.
3. Exécutez des tests si possible : [Exécuter les tests](/fr/guide/quality/run-tests/).
4. Vérifiez les sources des faits externes : [Vérifier les sources](/fr/guide/quality/validate-sources/).

## Que cherche réellement une revue humaine ?

La revue humaine ne consiste pas à refaire tout le travail. En tant que personne responsable de la livraison, vérifiez :

- Codex a-t-il modifié le bon élément ?
- A-t-il modifié plus que nécessaire ?
- A-t-il oublié une condition essentielle ?
- Seriez-vous prêt à remettre réellement ce résultat ?

## Idées reçues

### 1. Si le résultat paraît correct, peut-on s'arrêter ?

« Cela paraît correct » peut masquer des problèmes :

- Le texte est fluide, mais les faits peuvent être faux.
- La page semble normale, mais un parcours essentiel n'a pas été essayé.
- Le code fonctionne, mais les cas limites n'ont pas été testés.

### 2. La revue humaine signifie-t-elle que l'IA est inutile ?

L'IA accélère le travail. Vous fixez les critères et prenez la décision finale.

### 3. La revue ne concerne-t-elle que le code ?

Il faut aussi examiner :

- Les conclusions de recherche
- La documentation
- Les tableurs et les synthèses
- Les supports de présentation
- La configuration et les scripts

## Un ordre pour la revue

Si vous manquez de temps, procédez ainsi :

1. Vérifiez que le travail n'est pas sorti du périmètre prévu.
2. Vérifiez que le résultat répond à votre demande initiale.
3. Utilisez les contrôles automatiques disponibles.
4. Examinez le point essentiel restant avec votre propre jugement.

La revue humaine laisse la décision finale à la personne responsable du résultat.
