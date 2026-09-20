---
caseCategory: team
directoryOrder: 100
title: 'Cas : vérification des liens de documentation et reprise après échec'
description: Télécharger un exercice de vérification de liens HTML statiques, corriger pas à pas une page manquante et une ancre cassée, puis préparer une exécution périodique.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- html
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Sept tests du script ont réussi. Dans une copie temporaire, corriger un problème à la fois a réduit les échecs de deux à un, puis à zéro. Les liens externes n'ont pas été vérifiés en ligne ; aucun véritable CI ni ordonnanceur n'a été exécuté.
  environment: Python 3.12.11 / Darwin arm64 ; bibliothèque standard et HTML statique synthétique original, sans jeton.
  evidence:
  - label: Compte rendu réel d'exécution et de reprise
    href: /downloads/docs-link-audit/validation/record.md
assets:
- path: /downloads/docs-link-audit/docs-link-audit-1.0.0.zip
  purpose: Script de vérification, entrées défectueuses, correction de référence, tests et relevé de reprise étape par étape
  license: CC0-1.0
  version: 1.0.0
locale: fr
source_locale: zh-CN
source_revision: 0d21aa9
translation_status: draft
translated_at: '2026-09-20'
---

Avant de programmer une vérification périodique, assurez-vous que le script détecte réellement les problèmes et précise ce qu'il a vérifié. Cet exercice commence avec deux liens volontairement cassés. Modifiez une cible à la fois et observez l'évolution du résultat.

[Télécharger le dossier complet](/downloads/docs-link-audit/docs-link-audit-1.0.0.zip) · [README](/downloads/docs-link-audit/README.md) · [Relevé réel de reprise](/downloads/docs-link-audit/validation/recovery.json)

## Exécuter d'abord l'exemple défectueux

Il faut Python 3.10+ ; aucune dépendance tierce, clé API ou connexion réseau. Dans le dossier extrait, lancez :

```sh
python3 scripts/check_links.py fixtures/site
```

Attendez-vous au code de sortie 1. Le rapport indique fichier, numéro de ligne, URL et raison : `/missing/` à la ligne 4 de `index.html` n'a pas de page cible, et `#old-anchor` à la ligne 5 n'existe pas dans la page cible. Un autre lien externe figure sous `unchecked` ; il n'est pas silencieusement considéré comme valide.

## Corriger un problème à la fois

Copiez `fixtures/site` dans votre propre dossier `work/`, en gardant les entrées d'origine. Remplacez d'abord `/missing/` par `/guide/`, puis lancez :

```sh
python3 scripts/check_links.py work
```

Le code de sortie reste 1, mais seul le problème d'ancre subsiste. Remplacez `#old-anchor` par `#install` et relancez : le code de sortie devient 0. Comparez avec `solution/site` et la [référence de revue humaine](/downloads/docs-link-audit/solution/review.md) pour vérifier qu'aucun autre contenu n'a changé.

Les contrôles réels de l'auteur ont trouvé successivement 2, 1 puis 0 échecs, sans changement du hachage des exemples originaux. [JSON avant correction](/downloads/docs-link-audit/validation/stage-0.json) · [JSON après correction](/downloads/docs-link-audit/validation/stage-2.json)

## Comprendre le résultat et ses limites

| Résultat | Signification | Étape suivante |
|---|---|---|
| Sortie 0 | Les références locales sont valides | Lire `unchecked` ; cela ne prouve pas que les liens externes sont accessibles |
| Sortie 1 | Page manquante, ancre cassée ou chemin hors limites détecté | Confirmer l'intention de chaque lien avant de le corriger |
| Sortie 2 | La vérification n'a pas pu se terminer | Vérifier le dossier, le résultat de compilation, les erreurs de lecture ou une balise `base` non prise en charge |

Le script lit le HTML généré et gère les fichiers `index.html` de dossier, les chemins relatifs et absolus depuis la racine, ainsi que les ancres HTML. Il n'analyse pas les routes JavaScript dynamiques, les URL CSS, `srcset` ou les réécritures propres aux frameworks. Il s'arrête devant `base href` pour éviter une mauvaise interprétation des chemins relatifs. Les URL externes et autres protocoles sont explicitement signalés comme non vérifiés.

Exécutez les sept tests fournis :

```sh
python3 validation/test_links.py
```

Pour un vrai projet, effectuez d'abord sa compilation selon ses instructions, puis passez le dossier de sortie au script. Ce site possède déjà un vérificateur dédié aux références internes ; ce dossier pédagogique ne remplace pas tous les contrôles adaptés à votre framework.

## Ajouter ensuite un processus périodique

Confiez à votre ordonnanceur existant « compiler le projet → vérifier les liens → enregistrer le code de sortie et le JSON », avec un dossier de travail et un environnement de dépendances fixes. Si la compilation échoue, arrêtez-vous au lieu de relire une ancienne sortie. Évitez les écritures simultanées dans le même relevé.

Lancez d'abord le processus manuellement, puis déclenchez-le manuellement dans l'environnement de planification cible, avant seulement de définir une périodicité. Comparez le résultat au précédent : ne signalez rien en l'absence de changement, et préparez un résumé en cas de nouvel échec, d'erreur de vérification ou de rétablissement. L'envoi réel d'une notification reste soumis aux autorisations accordées.

Ce dossier n'a pas créé de tâche planifiée, envoyé de notification, modifié de vrai site ni exécuté de CI. Ces étapes sont un guide d'intégration, pas une preuve d'exécution par l'ordonnanceur. Voir ensuite le [guide des tâches planifiées](/fr/skills/automations/scheduled-tasks/).

## Traiter les liens externes

Définissez séparément la portée et la fréquence autorisées pour vérifier les liens externes. Un 404, une restriction d'authentification, un délai dépassé et une panne temporaire n'ont pas la même signification. Un seul échec d'accès ne suffit pas pour supprimer un lien. Ce dossier n'a pas vérifié de vrais liens externes ni présenté des réponses simulées comme de vraies pannes réseau.

En combinant cet exercice avec le [tri des issues](/fr/cases/use-cases/team-automation/issue-triage-suggestions/), produisez d'abord un rapport local et des notes de revue humaine avant de décider de créer un ticket.
