---
title: "Function Calling (appel de fonctions)"
description: "Le modèle peut proposer un nom de fonction et des arguments structurés ; l'application les valide et décide de l'exécution. Générer les arguments, obtenir l'autorisation et exécuter sont trois étapes distinctes."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "Les faits ci-dessous ont été vérifiés dans la source primaire ; les conseils pédagogiques relèvent du jugement de l'auteur et ne constituent pas un test du produit en conditions réelles."
  evidence:
    - label: "Annonce du lancement de l'appel de fonctions"
      href: "https://openai.com/index/function-calling-and-other-api-updates/"
locale: fr
source_locale: zh-CN
source_revision: 'c362c48'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

## Événement vérifiable et portée

**Date : 13 juin 2023 · Type : lancement de produit.** OpenAI a annoncé l'ajout de l'appel de fonctions à l'API Chat Completions de l'époque. Cette date correspond à la publication de l'API d'un fournisseur précis, pas au début de tous les appels d'outils.

Source : [annonce du lancement de l'appel de fonctions](https://openai.com/index/function-calling-and-other-api-updates/). Vérification effectuée le 18 septembre 2026 ; la date de publication de la source et celle de cette vérification ont des sens différents.

## Quel problème cela résout

Le modèle peut proposer un nom de fonction et des arguments structurés ; l'application les valide et décide de l'exécution. Générer les arguments, obtenir l'autorisation et exécuter sont trois étapes distinctes.

## Conseils d'apprentissage et limites d'application

Ce qui suit est une appréciation pédagogique de ce site, pas une mesure de l'adoption dans le secteur ni de l'efficacité :

Privilégiez des entrées vérifiables, une portée d'autorisation explicite et des réponses en cas d'échec. Un JSON valide ne garantit ni la justesse sémantique des arguments ni l'autorisation d'écrire dans un système externe. Les noms de modèles et exemples d'API figurant dans l'annonce historique ne sont pas un guide de configuration actuel.

## Exercice pratique

[Simulation de suggestions de tri des Issues](/fr/cases/use-cases/team-automation/issue-triage-suggestions/) : vérifiez que les suggestions structurées sur des Issues synthétiques correspondent aux entrées ; conservez une file de vérification humaine. L'exercice teste les limites des données sans appeler l'API historique ni publier de labels.

[Retour à la feuille de route et aux conventions de date](/fr/ai-roadmap/)
