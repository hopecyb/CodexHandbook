---
title: "Parcours d'équipe : pilote de deux semaines, échantillonnage et décision de déploiement"
description: "Commencez par une tâche à faible risque et utilisez dix jours ouvrés pour réunir des preuves sur les rôles, les exécutions, la revue, le retour arrière et un déploiement limité."
contentType: path
audiences: [team]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Le parcours de deux semaines, les six modèles et trois scénarios d'incident ont fait l'objet d'un exercice sur table par l'auteur. Aucun véritable pilote d'équipe, examen indépendant ou gain de productivité n'a été mesuré."
assets:
  - path: /downloads/two-week-pilot/two-week-pilot-1.0.0.zip
    purpose: "Charte du pilote, liste des tâches, fiche de revue, gestion des incidents et retour arrière, décision et programme sur dix jours"
    license: CC0-1.0
    version: 1.0.0
sidebar:
  order: 30
locale: fr
source_locale: zh-CN
source_revision: "3b46738"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Commencez par une tâche limitée dont le résultat peut être vérifié. Pendant deux semaines, recueillez des éléments pour décider s'il vaut la peine d'étendre l'usage. Ici, deux semaines représentent dix jours ouvrés. Si le nombre de tâches est insuffisant, prolongez le pilote ; ne déclarez pas sa réussite simplement parce que le calendrier est terminé.

[Télécharger les modèles du pilote de deux semaines](/downloads/two-week-pilot/two-week-pilot-1.0.0.zip) · [Mode d'emploi](/downloads/two-week-pilot/README.md) · [Programme sur dix jours](/downloads/two-week-pilot/templates/06-schedule.md)

## Avant de commencer : choisir la tâche et les responsables

Envisagez les [suggestions de tri des Issues](/fr/cases/use-cases/team-automation/issue-triage-suggestions/) ou une [vérification locale des liens](/fr/cases/use-cases/team-automation/scheduled-link-check/). Faites d'abord un essai manuel avec des données synthétiques, une revue humaine et une sortie locale.

Désignez un responsable, un exécutant, un relecteur, un administrateur système et un contact sécurité, avec leurs remplaçants. Une personne peut cumuler des rôles, mais les décisions concernant les écritures externes ou les incidents de sécurité doivent être revues indépendamment. Sans relecteur, limitez le pilote aux entrées synthétiques et aux brouillons locaux, et consignez qu'il s'agit d'une auto-vérification de l'auteur.

Prérequis : savoir conserver les journaux, évaluer les résultats et arrêter l'exécution ; pouvoir préciser les données et les actions autorisées. Si les permissions sont incertaines, terminez d'abord la préparation locale, sans étendre de votre propre initiative le pilote aux systèmes de production.

## D1–D2 : établir la charte et effectuer un essai manuel

Renseignez la [charte du pilote](/downloads/two-week-pilot/templates/01-charter.md) et la [liste des tâches](/downloads/two-week-pilot/templates/02-tasks.csv) : problème métier, référence manuelle, périmètre des entrées, actions permises, exclusions, méthode de revue, critères d'arrêt et conservation des traces.

Fixez des conditions de justesse concrètes avant l'exécution. N'adoptez pas un seuil général du type « 80 % de réussite suffisent pour lancer ». Vérifiez individuellement les résultats à haut risque ; documentez dans la charte la méthode d'échantillonnage et sa justification pour les autres tâches.

Condition de fin : un essai manuel comporte une entrée, une sortie, une vérification réelle et un responsable. L'équipe sait distinguer réussite, échec et mise en pause. Passez seulement ensuite à un échantillon limité.

## D3–D5 : consigner les exécutions et faire une première rétrospective

Utilisez la [fiche de revue](/downloads/two-week-pilot/templates/03-review.csv) pour conserver chaque exécution, échec, interruption, version des entrées, configuration, preuve et raison d'accepter, modifier ou rejeter le résultat.

Selon la [méthode d'évaluation des workflows](/fr/guide/quality/workflow-evaluation/), examinez séparément le déclenchement, les limites, le format et la qualité. Consignez séparément le temps d'attente du modèle et les reprises manuelles. Pour comparer à la référence manuelle, vérifiez que la difficulté et les entrées sont comparables ; laissez les éléments incomparables comme inconnus.

À D5, examinez les modes d'échec et la couverture de l'échantillon. Mettez en pause en cas de problème grave de limites, ajoutez un cas de reproduction et de régression, et conservez les échecs enregistrés. Ne masquez pas le problème en abaissant les critères.

Condition de fin : les premiers résultats disposent de revues consultables, et chaque problème a un responsable et un état. Si un problème grave reste ouvert, restez à cette étape.

## D6–D8 : extension limitée et exercice de retour arrière

Ajoutez des échantillons ou des types de tâches dans le périmètre approuvé. Ne changez qu'un facteur important à la fois ; n'élargissez pas les permissions tout en changeant de modèle et de tâche. Notez les versions de configuration pour pouvoir attribuer les changements.

Avec le [modèle d'incident et de retour arrière](/downloads/two-week-pilot/templates/04-incident.md), entraînez-vous à mettre les tâches en pause, vérifier les processus et files actifs, préserver les preuves, rétablir une version connue comme saine et revérifier. Empêcher de nouvelles exécutions n'annule pas les effets externes déjà produits.

Vous pouvez d'abord utiliser le [laboratoire de récupération après échec](/fr/guide/reference/troubleshooting/failure-recovery-lab/) dans un dossier isolé. Si la planification réelle, la révocation des permissions ou la livraison de messages n'ont pas été testées, consignez cette lacune. Un exercice local ne prouve pas qu'un retour arrière fonctionne en production.

Condition de fin : l'équipe sait expliquer qui met en pause, comment confirmer l'arrêt, comment préserver l'état de déduplication et quand la reprise est permise. Passez ensuite à une revue indépendante et à la décision.

## D9–D10 : décider de déployer, poursuivre ou arrêter

Demandez au relecteur de vérifier les résultats critiques, les biais de l'échantillon et les problèmes non résolus. Renseignez la [décision sur le pilote](/downloads/two-week-pilot/templates/05-decision.md).

| Décision | Points à préciser |
|---|---|
| Déploiement limité | Tâches, personnes et permissions étayées par les preuves ; échantillonnage continu et responsable du retour arrière |
| Poursuivre le pilote | Échantillons ou preuves de reprise manquants, responsable et date de la prochaine revue |
| Arrêter | Désactivation de la planification, traitement des permissions, conservation des traces et gestion des événements inachevés |

Expliquez chaque critère défini à D1 ; ne compensez pas une erreur grave par une moyenne globale favorable. En l'absence de revue indépendante, avec trop peu d'exemples ou une référence non comparable, indiquez ces limites et ne publiez aucune affirmation de gain de productivité de l'équipe.

Condition de fin : une décision consigne le responsable, les preuves, le périmètre et la prochaine étape. Même un déploiement ne s'applique qu'aux tâches et conditions vérifiées ; il n'autorise pas chaque membre à automatiser tout travail.

## Comment les modèles ont été vérifiés

L'auteur a réalisé [trois exercices sur table](/downloads/two-week-pilot/references/tabletop-review.md) : un résultat correct mais hors autorisation, un échantillon insuffisant et des événements encore en attente après désactivation de la planification. Ils vérifient si les modèles couvrent les points de décision ; ce ne sont ni des cas réels d'équipe ni des résultats obtenus après deux semaines.

Pour modifier ensuite les règles du projet, consultez la [configuration du projet](/fr/guide/customization/) et la [définition de terminé](/fr/guide/quality/definition-of-done/), puis intégrez les exigences concrètes tirées du pilote au processus partagé.
