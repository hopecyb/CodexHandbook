---
title: Utilisation, durée et choix du modèle
description: Consignez séparément quota d'abonnement, coût API, attente et travail de reprise. Comparez les modèles sur les mêmes tâches sans confondre consommation et qualité.
contentType: guide
audiences:
  - beginner
  - creator
  - developer
  - team
level: intermediate
outputs:
  - csv
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Les explications officielles sur l'utilisation, les tarifs API et la facturation du raisonnement ont été vérifiées. Les modèles de registre et le calcul sont pédagogiques ; aucune mesure de vitesse, de coût ou de temps économisé n'est fournie.
  evidence:
    - label: Utilisation et tarifs officiels de Codex
      href: https://learn.chatgpt.com/docs/pricing
    - label: Tarifs officiels de l'API
      href: https://developers.openai.com/api/docs/pricing
    - label: Guide des modèles de raisonnement
      href: https://developers.openai.com/api/docs/guides/reasoning
assets:
  - path: /downloads/usage-log/usage-log-1.0.0.zip
    purpose: Modèles pour consigner coût et durée des exécutions, instantanés du quota et sources
    license: CC0-1.0
    version: 1.0.0
locale: fr
source_locale: zh-CN
source_revision: "8b68d92"
translation_status: reviewed
reviewed_at: '2026-10-26'
translated_at: 2026-10-25
---
Commencez par définir ce que vous mesurez : le quota restant sur un compte, le coût d'un appel API, le temps d'attente ou le temps humain consacré à la relecture et aux reprises. Ces éléments n'ont pas la même unité et ne sont pas interchangeables.

[Télécharger les modèles de registre](/downloads/usage-log/usage-log-1.0.0.zip) · [Instructions](/downloads/usage-log/README.md)

## Tenir quatre comptes distincts

| Mesure | Base du relevé | Erreur fréquente |
|---|---|---|
| Quota d'abonnement | Fenêtre, pourcentage restant et heure de réinitialisation affichés dans l'interface actuelle | Convertir directement le pourcentage restant en dollars ou en nombre fixe de tâches |
| Coût API | Utilisation réelle de l'appel, modèle et tarif applicable ; vérifier la facture | Remplacer le tarif API par celui de l'abonnement, ou prendre une estimation pour un prélèvement réel |
| Temps d'attente | Début, fin, file d'attente et tentatives répétées pour la même tâche | Ne noter que la dernière tentative réussie et omettre le temps des échecs |
| Travail humain | Chronométrer séparément relecture et reprises | Compter toute l'attente du modèle comme du travail humain économisé |

Selon les [explications officielles](https://learn.chatgpt.com/docs/pricing), l'utilisation d'une tâche dépend du modèle, du contexte, du raisonnement, des outils et du cache. Les estimations en nombre de messages ne sont pas des limites fixes. Consultez le tableau d'utilisation pour connaître votre quota actuel ; dans une session CLI, utilisez `/status`. L'utilisation d'une clé API est facturée aux tarifs API.

Un instantané du quota peut aussi refléter d'autres tâches ou une réinitialisation de fenêtre. Une baisse de 5 % entre deux relevés ne prouve pas que cette tâche consomme toujours 5 % et ne permet pas de promettre un nombre de tâches restantes.

## Vérifier les règles de facturation avant d'estimer le coût API

Recherchez le prix applicable selon le modèle, la catégorie des tokens (entrée, cache ou sortie) et les conditions de service. Calculez ensuite avec l'utilisation réelle, en ajoutant séparément les autres postes facturés. Ce manuel ne tient pas de deuxième liste fixe de prix. Voir les [tarifs API](https://developers.openai.com/api/docs/pricing).

Les tokens de raisonnement sont facturés comme des tokens de sortie. Vérifiez si le champ d'utilisation comprend déjà cette part pour éviter de la compter deux fois. Vérifiez aussi les niveaux de raisonnement pris en charge par le modèle dans le [guide des modèles de raisonnement](https://developers.openai.com/api/docs/guides/reasoning).

Exemple pédagogique : supposons 10 000 tokens d'entrée et 2 000 tokens de sortie, sans cache ni autres frais. Avec des tarifs **fictifs** de 2 dollars par million de tokens d'entrée et de 10 dollars par million de tokens de sortie, l'estimation est de 0,04 dollar. Le calcul illustre seulement une conversion d'unités ; ce n'est ni un prix de modèle ni une facture réelle.

## Comparer les réglages sur les mêmes tâches

Choisissez des tâches aux critères d'acceptation précis et établissez une référence avec les réglages disponibles. Gardez identiques les entrées, les permissions des outils, les instructions du projet et la méthode d'évaluation. Ne changez qu'un facteur majeur à la fois : le modèle ou le niveau de raisonnement.

Comparez point par point l'exactitude, le respect des limites, les preuves et les reprises, pas seulement la vitesse de réponse. Si un réglage plus léger ne satisfait pas les critères de manière stable, déterminez si l'échec vient de documents manquants, d'un périmètre flou ou d'un raisonnement insuffisant avant d'augmenter le niveau. Un réglage plus élevé ne remplace pas la vérification des sources ni les tests.

Il s'agit d'une méthode d'évaluation proposée par ce manuel, pas d'un résultat mesuré selon lequel un modèle gagnerait toujours. Les [trois comparaisons de prompts](/fr/prompts/comparison-lab/) et les [échantillons d'évaluation de workflows](/fr/guide/quality/workflow-evaluation/) peuvent servir à consigner vos observations.

## Noter les conditions de l'échantillon

Le [registre des exécutions](/downloads/usage-log/runs.csv) contient le hash de l'entrée, le nom réel du modèle, le client, le réglage de raisonnement, la voie de facturation, les durées, les tentatives, le résultat et la preuve du coût. Le [registre des instantanés de quota](/downloads/usage-log/allowance-snapshots.csv) note séparément la fenêtre et l'heure de réinitialisation.

Conservez les échecs et les interruptions. Mesurez séparément la relecture humaine et les reprises. Laissez les champs inconnus vides en expliquant pourquoi ; inscrire zéro ferait croire qu'il n'y a pas eu de consommation. Utilisez des alias de compte et ne publiez ni clés, ni identifiants de compte, ni journaux privés.

Les feuilles téléchargeables actuelles ne contiennent aucune exécution mesurée. Sans référence humaine comparable, ne calculez pas de pourcentage de temps gagné. Sans répétitions, n'affirmez pas qu'un réglage est durablement plus rapide. Même si l'attente du modèle diminue, des reprises plus nombreuses peuvent annuler l'intérêt du choix.

## Que faire en approchant d'une limite

Sauvegardez le travail accompli, les points ouverts et la manière de reprendre. Vérifiez que la tâche n'est pas prise dans des tentatives répétées ou la lecture de documents sans rapport. Réduisez le périmètre non essentiel selon l'objectif, tout en conservant les critères de qualité et de sécurité. Ne sautez pas les vérifications indispensables pour finir avant l'épuisement du quota.

Si vous devez poursuivre, vérifiez votre quota actuel et votre mode de facturation avant de choisir. Cet article ne bascule pas automatiquement vers l'API, n'achète pas de crédits et ne modifie pas les paramètres du compte. Une équipe peut utiliser le [parcours pilote de deux semaines](/fr/guide/learning-paths/team/) pour noter les raisons du choix et les conditions de retour en arrière.

Consultez les modèles actuels, les différences entre produits et les recommandations par tâche : [Choisir un modèle selon la tâche](/fr/guide/reference/model-selection/).
