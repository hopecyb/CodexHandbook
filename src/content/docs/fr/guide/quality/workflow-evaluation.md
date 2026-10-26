---
title: 'Évaluer les workflows : distinguer déclenchement, limites, format et qualité'
description: Évaluez quatre types de Skill à l'aide de 20 échantillons conçus et de champs distincts, sans présenter des contrôles de structure ou quelques réussites comme un taux de succès global.
contentType: guide
audiences:
  - developer
  - creator
  - team
level: intermediate
outputs:
  - json
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Sept tests du vérificateur de registre ont réussi. Les 20 échantillons restent des scénarios conçus mais non exécutés ; aucune conclusion ne porte sur les performances du modèle, le routage automatique ou la durée.
  environment: Python 3.12.11 / Darwin arm64 ; bibliothèque standard et entrées temporaires du vérificateur ; aucun appel de modèle.
  evidence:
    - label: Périmètre des tests du vérificateur
      href: /downloads/workflow-evaluation/validation/record.md
assets:
  - path: /downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip
    purpose: Vingt échantillons d'évaluation, registre vierge, méthode de notation et vérificateur de registre
    license: CC0-1.0
    version: 1.0.0
locale: fr
source_locale: zh-CN
source_revision: "9ea3ecc"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---
Un workflow peut choisir le bon Skill tout en énonçant un fait faux. Il peut aussi produire un résultat correct après une action non autorisée. Fusionner ces situations en un seul « taux de succès » risque de masquer le problème à corriger.

[Télécharger le kit d'évaluation](/downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip) · [20 échantillons](/downloads/workflow-evaluation/samples.json) · [Registre vierge](/downloads/workflow-evaluation/records-template.json)

## Consigner séparément cinq types d'observations

| Dimension | Preuve à examiner | Ce qui ne la remplace pas |
|---|---|---|
| Déclenchement | Trace réelle des appels, y compris les échantillons qui doivent ou non déclencher le Skill | Un ton similaire dans la réponse ou la réussite d'un appel explicite |
| Limites et refus | Une demande non autorisée n'a pas été exécutée, tandis que la partie légitime a été accomplie autant que possible | Refuser toutes les tâches |
| Format | Fichiers, champs et types requis | Un texte qui semble complet |
| Qualité de la tâche | Sources appuyant chaque affirmation, calculs justes, corrections efficaces et couverture | Un JSON valide ou un script qui se termine avec le code 0 |
| Durée et reprises | Temps réellement écoulé et relevé distinct des reprises humaines | Un jugement subjectif « rapide » ou zéro pour une mesure non effectuée |

Pour les quatre premières dimensions, utilisez `pass`, `partial`, `fail`, `not-applicable` ou `unobserved`. Conservez la durée séparément sous forme numérique. Gardez les inconnues et les cas non exécutés au lieu d'inventer une note. Si un échantillon a été exécuté mais qu'une dimension n'est pas observable, utilisez `unobserved` et expliquez pourquoi. Réservez `not-applicable` aux dimensions réellement sans objet ; ce code ne doit pas cacher une observation manquante.

## Ce que couvrent les échantillons

Il existe cinq échantillons pour chacun des quatre types de Skill — revue, rédaction, recherche et surveillance des liens : déclenchement positif, tâche sans rapport, limite d'autorisation, format de sortie et scénario de qualité critique. L'auteur a conçu les 20 échantillons. Tous les registres actuels portent l'état `not-run`.

Les scénarios de qualité vérifient notamment une erreur indexée masquée par une restauration de l'arbre de travail, un article qui omet un conflit entre sources, une recherche qui ignore une source inutilisable, ainsi qu'un moniteur qui envoie des notifications en double ou ne se rétablit pas. Les entrées utilisent les [quatre paquets Skill complets](/fr/skills/examples/) ; le kit d'évaluation ne les recopie pas. Lors d'un essai, notez la version et le hash du paquet utilisé.

## Réaliser une évaluation

1. Fixez le modèle, le client, le niveau de raisonnement, les permissions des outils, les instructions du projet et la version du paquet d'entrée. Notez « inconnu » pour les réglages invisibles au lieu de deviner leur valeur.
2. Lancez chaque échantillon dans une tâche isolée et conservez la demande ainsi que la trace des outils. Pour tester le déclenchement, employez une demande en langage naturel sans invoquer explicitement `$skill` au préalable. Une invocation explicite teste la capacité d'exécution.
3. Conservez réussites, échecs, interruptions et nouvelles tentatives. Marquez les interruptions `interrupted` ; ne les retirez pas du jeu d'échantillons.
4. Indiquez un chemin de preuve et une raison pour chaque jugement. Pour les scénarios de sécurité, utilisez des données synthétiques sans envoyer de données réelles. Un script de format vérifie des champs ; la qualité factuelle exige encore une comparaison avec la source.
5. Si possible, demandez à une autre personne de noter les résultats sans voir les étiquettes de configuration. Si seul l'auteur les vérifie, dites-le clairement : ne présentez pas cela comme une revue à l'aveugle ni comme un accord entre évaluateurs.

Avec les [trois comparaisons de prompts](/fr/prompts/comparison-lab/), appliquez les mêmes règles de notation à A et B. N'accordez pas d'avance une meilleure note à B sous prétexte que son prompt est plus long.

## Vérifier que les registres sont complets

Exécutez ces commandes dans le paquet avec la bibliothèque standard de Python 3.10 ou plus :

```sh
python3 scripts/check_records.py
python3 scripts/check_records.py --records my-records.json --evidence-root my-evidence
python3 validation/test_records.py
```

Le modèle vierge signale 20 échantillons non exécutés et met `performance_claim` à null. Il ne transforme pas le modèle en taux de succès.

Le vérificateur contrôle qu'aucun échantillon ne manque, que les échantillons non exécutés n'ont pas de résultats inventés, que les durées ont un type valide, que les registres terminés ont notes et fichiers de preuve, et que les chemins restent dans le périmètre autorisé. Il ne peut pas déterminer si les journaux sont authentiques, les notes équitables ou le résultat correct sur le fond. Les registres temporaires des tests sont des fixtures du vérificateur, pas des observations de modèle.

## Décider de l'adoption d'un workflow

Pour chaque workflow, type d'échantillon et environnement, présentez séparément le dénominateur, les échecs, les inconnues et les erreurs représentatives. Une note élevée ailleurs ne compense pas un échec de limite de sécurité ; un format complet ne valide pas une conclusion importante dépourvue de preuve.

Définissez les conditions d'acceptation selon le risque de la tâche avant l'exécution, sans abaisser continuellement le seuil après avoir vu les résultats. Après une révision du workflow, relancez les échantillons concernés et conservez les anciens registres afin de distinguer la correction d'une fuite des échantillons.

Ce kit ne contient encore aucun résultat d'évaluation réelle de modèles. Il fournit une méthode, des échantillons et un dispositif de consignation, mais ne conclut ni quel modèle est le meilleur ni quel taux de succès il atteint.
