---
title: 'Parcours créateur : sources, article, présentation et réutilisation'
description: Utilisez les mêmes sources pour produire un tableau de faits, un article, une présentation modifiable de huit diapositives et des consignes réutilisables, avec documents et critères de réussite à chaque étape.
contentType: path
audiences: [creator, beginner]
level: beginner
outputs: [markdown, csv, pptx, png]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: Quatre jalons ont été organisés à partir des véritables documents de l’article et de la présentation, et la continuité entre entrées et sorties a été vérifiée. Les validations individuelles figurent dans les cas ; le parcours entier n’a pas encore fait l’objet d’un chronométrage ni d’un test d’achèvement autonome par des lecteurs.
  evidence:
    - label: Documents de l’article et compte rendu de vérification de l’auteur
      href: /downloads/source-backed-article/validation/record.md
    - label: Compte rendu de l’environnement et du rendu des diapositives
      href: /downloads/article-to-slides/validation/record.md
sidebar:
  order: 10
prev:
  link: /fr/guide/learning-paths/
  label: Choisir un parcours d’apprentissage
next:
  link: /fr/cases/write-an-article/#1-organiser-dabord-les-faits-et-les-conflits
  label: Commencer à organiser trois sources
locale: fr
source_locale: zh-CN
source_revision: "d1b46b1"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: 2026-10-26
---

À partir d’un ensemble de sources, rédigez un article, transformez-le en présentation modifiable, puis conservez des consignes réutilisables. Chaque étape laisse des fichiers qui permettent de vérifier votre progression.

Vous devez pouvoir ouvrir un dossier local dans Codex. La création de la présentation nécessite aussi un outil capable de produire un PPTX et un logiciel pour l’ouvrir ; l’environnement précis figure dans le cas. Il n’est pas supposé que tous les clients disposent des mêmes outils. Si vous ne maîtrisez pas encore les fichiers, terminez d’abord [Travailler avec les fichiers](/fr/guide/learning-paths/beginner/02-work-with-files/).

## Parcours et documents

| Étape | Entrée nécessaire | Résultat | Étape suivante |
|---|---|---|---|
| 1. Organiser les preuves | Trois sources synthétiques et un index | Tableau de faits, liste des conflits et lacunes | Rédiger l’article |
| 2. Rédiger et réviser | Tableau de faits, public, plan | Article, tableau de correspondance des affirmations, notes de révision | Créer la présentation |
| 3. Créer la présentation | Article, correspondance des affirmations, objectif de présentation | PPTX de huit diapositives, huit aperçus, notes et compte rendu de vérification | Conserver les consignes réutilisables |
| 4. Conserver les consignes | Résultats et expérience des trois premières étapes | Modèle de tâche, liste de validation, trace d’une adaptation | Réessayer avec de nouvelles sources |

[Télécharger le dossier d’exercice de l’article](/downloads/source-backed-article/source-backed-article-1.0.0.zip) · [Télécharger le dossier d’exercice des diapositives](/downloads/article-to-slides/article-to-slides-1.0.0.zip)

Les deux dossiers sont utilisables séparément. Si vous suivez tout le parcours, utilisez de préférence votre propre article terminé à l’étape 3. Le dossier `input/` du paquet de diapositives fournit des entrées de référence si vous n’avez pas encore terminé l’article ou souhaitez comparer. Tous les produits, personnes et entretiens sont fictifs et destinés à l’enseignement.

## 1. Organiser les preuves et conserver les contradictions

Décompressez le paquet de l’article, puis lisez `brief.md`, `sources/index.csv` et les trois sources listées. Suivez la [première partie du cas consacré à l’article](/fr/cases/write-an-article/#1-organiser-dabord-les-faits-et-les-conflits) pour les organiser, sans vous précipiter dans la rédaction.

Placez les résultats dans `my-output/` du paquet et gardez les sources d’origine. Dans le tableau de faits, notez l’identifiant de la source, la section, l’affirmation étayée et le type de preuve. Créez également `unresolved.md` pour les questions que les sources ne tranchent pas.

Cette étape est terminée lorsque vous trouvez la contradiction entre P3 et C2 sur le réglage de diagnostic par défaut sans choisir arbitrairement une réponse finale. L’entretien synthétique doit rester identifié comme tel ; n’inventez aucun chiffre de précision ou de gain de temps absent des sources.

Si une source ne s’ouvre pas ou si un identifiant ne correspond pas, restaurez d’abord les fichiers et l’index ; ne déduisez pas le contenu d’un nom de fichier. Passez ensuite à la suite.

## 2. Rédiger l’article, puis le réviser à partir des sources

Partez du tableau de faits et des questions ouvertes. Poursuivez avec le [cas de l’article](/fr/cases/write-an-article/) : définissez le public, établissez un plan, rédigez d’une traite dans le périmètre fixé, puis vérifiez les faits et améliorez la formulation.

Livrez `article.md`, `claim-map.csv`, `unresolved.md` et une note de révision. Indiquez au moins une correction factuelle et une correction de formulation. Le dossier de référence contient un premier brouillon conçu à cette fin et un véritable diff textuel ; ne présentez pas ce contre-exemple conçu comme un échec réel du modèle.

L’étape est terminée quand les faits essentiels sont localisables, que les recommandations de l’auteur sont séparées des faits appuyés par les sources et que la contradiction sur le diagnostic reste visible. Si Python est disponible, exécutez la validation structurelle du cas ; même si elle réussit, vérifiez phrase par phrase que les sources appuient les conclusions.

Gardez ces fichiers pour l’étape suivante. Votre article peut différer de la référence, mais il doit conserver les limites essentielles.

## 3. Transformer l’article en huit diapositives

Partez de l’article achevé et du tableau de faits. Suivez le [cas de la présentation](/fr/cases/create-a-slide-deck/) pour définir le public, un objectif d’environ cinq minutes et une trame de huit diapositives. Vérifiez d’abord la mise en page avec la page de titre et celle des limites, puis terminez les autres.

Copiez l’article et le tableau de faits dans le dossier d’entrée de la tâche de présentation et précisez qu’il s’agit de vos versions. Ne citez pas votre propre article tout en reprenant sans examen toutes les conclusions du brouillon de référence.

Livrez un PPTX de huit diapositives, huit aperçus, des notes par diapositive et un compte rendu de validation. Pour terminer, il doit s’ouvrir dans le logiciel de présentation consigné, les textes essentiels doivent rester modifiables et chaque diapositive doit être vérifiée pour le texte chinois et les limites. Les contradictions entre sources doivent rester claires malgré la condensation.

Si vous ne disposez pas d’outil PPTX, sauvegardez le plan et notez la capacité manquante. Cette étape reste inachevée jusqu’à la reprise dans un environnement équipé. Passez ensuite à la réutilisation.

## 4. Conserver des consignes réutilisables

Partez de l’article et des diapositives achevés et vérifiés. Créez `workflow.md` en suivant ce modèle pour documenter la méthode réellement employée ; ne gardez pas seulement une dernière instruction « continue ».

```md
# Des sources à la présentation

## Cette tâche
- Public et objectif :
- Dossier d’entrée, index des sources et fichiers originaux à ne pas modifier :
- Dossier de sortie et formats requis :

## Séquence
1. Lister faits, déductions, contradictions et lacunes avant de rédiger.
2. Définir public et structure, rédiger d’une traite, puis réviser d’après les sources.
3. Condenser l’article en huit diapositives ; vérifier d’abord le titre et les limites.
4. Vérifier les textes natifs, les polices chinoises, tous les aperçus et les notes.

## Validation
- Les faits essentiels remontent aux sources ; les questions ouvertes restent visibles.
- Les conseils de l’auteur sont séparés des faits du produit ; les contenus synthétiques ne passent pas pour des témoignages réels.
- Le PPTX s’ouvre et se modifie ; consigner logiciel et polices en vérifiant chaque diapositive.
- Indiquer les contrôles effectués et non effectués ; conserver la livraison en local.

## Retour d’expérience
- Problèmes rencontrés, changements et manière dont la restauration a été confirmée :
- Étapes à conserver la prochaine fois :
- Faits et environnement à reconfirmer la prochaine fois :
```

Faites une petite adaptation : remplacez le public « auteurs individuels qui essaient pour la première fois » par « collègues préparant l’examen des documents ». Gardez les mêmes sources et régénérez seulement le plan. Dans `reuse-check.md`, notez les changements de titre, de priorité et d’ordre ainsi que les limites factuelles inchangées. Cet exercice vérifie l’adaptation du modèle à une nouvelle tâche ; il ne prétend pas effectuer une nouvelle recherche factuelle.

Vous avez terminé si une autre personne peut retrouver entrées et sorties dans `workflow.md` et savoir quand le travail est achevé. La trace d’adaptation doit donner des différences concrètes et ne pas poursuivre la rédaction pour l’ancien public. Si la séquence est stable, lisez [Transformer un processus en Skill](/fr/cases/workflows/turn-a-workflow-into-a-skill/). L’[exemple de Skill d’écriture](/fr/skills/examples/writing-skill/) propose un dossier complet de styles, tableaux de faits et traitement des contradictions ; un contrôle structurel ne remplace pas l’examen factuel humain.

## Facultatif : commencer par une tâche chiffrée

Si vous préférez l’analyse bureautique, commencez par le [rapport de ventes hebdomadaire](/fr/cases/analyze-a-spreadsheet/). Il contient des CSV, des remboursements et doublons, un récapitulatif de référence et un script de contrôle indépendant. Ajoutez ensuite « recalculer indépendamment les chiffres clés et expliciter les critères d’anomalie » à votre liste de validation, sans forcer cette tâche dans l’article sur un produit fictif.

À la fin du parcours, vous devriez conserver les sources, l’article et le tableau de faits, la présentation modifiable, les validations et les consignes de réutilisation. Lire les liens ou télécharger les réponses de référence ne suffit pas.
