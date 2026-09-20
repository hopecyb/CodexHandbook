---
title: 'Exemple : un Skill d’automatisation qui ne consigne que les changements'
description: Téléchargez quiet-link-monitor et vérifiez manuellement les contrôles répétés, la reprise, les événements persistants et l’arrêt.
contentType: skill
audiences: [developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Huit tests d’état et trois exécutions CLI ont réussi. Un échec répété ne crée aucun nouvel événement et la réparation consigne la reprise. La planification réelle, le routage du modèle et la livraison des messages ne sont pas testés.
  environment: Python 3.12.11 / Darwin arm64 ; site statique fictif temporaire, bibliothèque standard, sans réseau.
  evidence:
    - label: Compte rendu des exécutions réelles
      href: /downloads/skills/quiet-link-monitor/validation/record.md
assets:
  - path: /downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip
    purpose: Skill d’automatisation, vérificateur de liens, script d’état persistant, exemple défectueux et compte rendu de validation
    license: CC0-1.0
    version: 1.0.0
locale: fr
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 6c758b9
---

Répéter un contrôle ne veut pas dire envoyer une notification à chaque fois. Ce Skill reprend l’[exercice de vérification des liens](/fr/cases/use-cases/team-automation/scheduled-link-check/) et consigne les changements, les reprises et les erreurs d’exécution. Si le résultat ne change pas, il reste silencieux.

[Télécharger quiet-link-monitor v1.0.0](/downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip) · [SKILL.md](/downloads/skills/quiet-link-monitor/SKILL.md) · [README](/downloads/skills/quiet-link-monitor/README.md)

## Installation et essai manuel

Placez le dossier complet dans `.agents/skills/quiet-link-monitor/` de votre projet d’exercice, sans écraser un Skill du même nom. Après avoir confirmé qu’il est sélectionnable avec le [guide des Skills](/fr/skills/use-a-skill/), invoquez-le :

```text
$quiet-link-monitor Répète l’échec, le contrôle identique et la reprise avec
les exemples du paquet. Travaille sur une copie temporaire, conserve un état
séparé et rapporte les changements d’événements à la fin. N’envoie aucune
notification.
```

Vous pouvez d’abord exécuter le script sans modèle ni compte. Seule la bibliothèque standard de Python 3.10+ est nécessaire :

```sh
python3 validation/test_monitor.py
```

Pour l’essai manuel, copiez `fixtures/broken` vers votre propre `work-site`. Dans le dossier du Skill, exécutez deux fois :

```sh
python3 scripts/run_once.py --site work-site --state run-state.json
python3 scripts/run_once.py --site work-site --state run-state.json
```

La première exécution quitte avec le code 1 et enregistre un événement d’échec. La deuxième quitte encore avec 1, mais `new_event` vaut null. Corrigez ce même dossier à l’aide de `fixtures/fixed`, puis réexécutez : code 0 et `recovered`. Ne remplacez pas le chemin du site par un autre pour simuler la reprise ; l’état rejettera le changement de périmètre.

[Résumé des trois exécutions CLI réelles](/downloads/skills/quiet-link-monitor/validation/manual-run.json)

## Données consignées et conditions d’arrêt

Le fichier d’état doit rester hors du dossier contrôlé. Il conserve le résultat de chaque exécution, le nombre d’erreurs d’exécution consécutives et les événements persistants. Le script écrit ce fichier et un verrou voisin : l’opération n’est donc pas strictement en lecture seule. Le contenu du site reste inchangé.

| Situation | Comportement |
|---|---|
| Premier résultat sain | Créer une référence, sans nouvel événement |
| Premier échec ou changement des problèmes détectés | Enregistrer un événement de changement |
| Même résultat à nouveau | Ne pas créer d’événement |
| Problème réparé | Enregistrer un événement de reprise |
| Trois erreurs d’exécution du contrôle consécutives | Enregistrer un événement d’arrêt et suspendre |
| État corrompu, conflit de verrou ou site différent | Arrêter immédiatement sans écraser l’état d’origine |

Un lien cassé est un résultat de contrôle valide, pas une erreur d’exécution. Après une suspension, un appel ordinaire ne lance plus le contrôle. Recherchez et corrigez la cause, puis reprenez explicitement :

```sh
python3 scripts/run_once.py --site work-site --state run-state.json --resume
```

Ne supprimez pas automatiquement le verrou ou l’état pour contourner un échec. Un processus planté peut laisser un verrou ; vérifiez d’abord qu’aucun processus n’est encore actif. Le [guide d’état et de reprise](/downloads/skills/quiet-link-monitor/references/operations.md) détaille les codes de sortie, la conservation et les limites de concurrence.

## Candidat à notification ne signifie pas message envoyé

Le script ne consigne que des événements locaux. Chaque valeur `delivery` est `not-sent` ; aucun calendrier n’est créé et aucun message n’est envoyé. Chaque événement possède un ID stable pour cet enregistrement ; un résultat identique ne recrée pas d’événement pour le même état.

Pour connecter un expéditeur autorisé, lisez les événements persistants non livrés, dédupliquez par ID et enregistrez les accusés de livraison. Lire seulement le `new_event` du terminal de cette exécution peut manquer un événement après une interruption du processus. Le paquet ne contient pas d’expéditeur et ne promet pas une livraison exactement une fois entre systèmes.

## Passer de l’essai manuel aux exécutions périodiques

Confirmez la réussite du build avant de contrôler sa dernière sortie. Si le build échoue, arrêtez-vous au lieu de vérifier un ancien dossier. À chaque exécution planifiée, utilisez les mêmes site et fichier d’état et évitez les écritures concurrentes. Déclenchez d’abord manuellement dans l’environnement cible pour vérifier les journaux et l’arrêt, puis programmez la périodicité. Canal, destinataires et périmètre des notifications réelles doivent découler d’une autorisation existante.

La planification réelle et la livraison des messages n’ont pas été testées. Les liens externes restent `unchecked` : un résultat local sain ne signifie pas que « tous les liens du site fonctionnent ».

## Périmètre et réception

Les audits répétés de liens de documentation conviennent à ce Skill. Les rapports de ventes généraux, l’écriture créative et l’installation automatique en production sortent de son périmètre. Les cas de déclenchement sont des attentes de conception, sans mesure du routage par le modèle.

Pour terminer, produisez les traces du premier échec, du contrôle répété silencieux et de la reprise, ainsi que les preuves de suspension et de reprise explicite. Les huit tests du paquet vérifient ces comportements locaux de l’état ; ils ne prouvent ni le jugement du modèle, ni l’accessibilité réseau, ni la fiabilité en production.
