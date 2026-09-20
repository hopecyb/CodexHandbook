---
caseCategory: creation
directoryOrder: 30
title: Créer huit diapositives modifiables à partir d’un article
description: Téléchargez l’article, le plan de huit diapositives, le PPTX à textes natifs et les aperçus pour exercer la synthèse narrative, la conservation des sources et la vérification de la typographie chinoise.
contentType: case
audiences: [creator, beginner]
task: editable-presentation
level: beginner
estimatedMinutes: 75
outputs: [pptx, pdf, png, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Le PPTX de référence a été importé dans un logiciel, ses huit diapositives rendues et un texte natif modifié ; uniquement dans l’environnement consigné, par l’auteur.
  environment: Artifact Tool JS / Node.js 24.19.0 ; LibreOfficeDev 26.8.0.0.alpha0 / Darwin arm64 ; Arial Unicode MS avec répertoire des polices système configuré explicitement.
  evidence:
    - label: Processus de validation, correction de police et portée des contrôles
      href: /downloads/article-to-slides/validation/record.md
assets:
  - path: /downloads/article-to-slides/article-to-slides-1.0.0.zip
    purpose: Entrées, prompts, PPTX, PDF, huit aperçus et compte rendu de validation pour un exercice autonome
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /fr/cases/write-an-article/
  label: Terminer d’abord l’article sourcé
next:
  link: /fr/guide/learning-paths/creator/#4-conserver-des-consignes-réutilisables
  label: Conserver les consignes réutilisables
locale: fr
source_locale: zh-CN
source_revision: '7189374'
translation_status: draft
translated_at: '2026-09-20'
---

Résumez un article en huit diapositives et livrez un PPTX dont les textes restent modifiables, des aperçus et des notes orales. Conservez limites et contradictions des sources, sans inventer chiffres ou graphiques pour remplir les pages.

Niveau débutant. Prévoir 60 à 90 minutes : estimation éditoriale non chronométrée auprès de lecteurs. Il faut pouvoir lire des fichiers locaux et disposer d’un outil produisant des PPTX ou d’un logiciel de présentation. Le dossier comprend un article d’entrée : vous pouvez faire l’exercice seul ou après le [cas de l’article](/fr/cases/write-an-article/).

[Télécharger le dossier complet v1.0.0 (ZIP)](/downloads/article-to-slides/article-to-slides-1.0.0.zip) · [Voir le PPTX modifiable](/downloads/article-to-slides/solution/source-backed-writing.pptx) · [Voir le PDF](/downloads/article-to-slides/solution/source-backed-writing.pdf)

## Résultat final

![Première diapositive de référence : vérifier un résumé avant d’élargir l’usage ; produit fictif et sources synthétiques clairement indiqués](/downloads/article-to-slides/previews/slide-01.png)

La référence utilise des zones de texte natives : les textes importants sont modifiables. Documents, produit « Shiye » et personne « Xiaolin » sont fictifs et distribués sous CC0 1.0 ; les fichiers de police ne sont pas inclus.

| Diapositive | Une seule idée | Aperçu réel |
|---|---|---|
| 1 | Vérifier avant d’élargir l’usage | [Titre](/downloads/article-to-slides/previews/slide-01.png) |
| 2 | Formats et preuves ont des limites | [Question du public](/downloads/article-to-slides/previews/slide-02.png) |
| 3 | Les trois sources jouent des rôles distincts | [Preuves](/downloads/article-to-slides/previews/slide-03.png) |
| 4 | Essai restreint en quatre étapes | [Méthode](/downloads/article-to-slides/previews/slide-04.png) |
| 5 | Retirer les capacités annoncées sans preuve | [Révision](/downloads/article-to-slides/previews/slide-05.png) |
| 6 | Le réglage de diagnostic reste contradictoire | [Limites](/downloads/article-to-slides/previews/slide-06.png) |
| 7 | Garder une trace et compléter les inconnues | [Suite](/downloads/article-to-slides/previews/slide-07.png) |
| 8 | Sources et caractère synthétique vérifiables | [Sources](/downloads/article-to-slides/previews/slide-08.png) |

## 1. Lire les entrées et choisir le fil conducteur

Décompressez `article-to-slides/` et lisez `brief.md`, `input/article.md`, `input/claim-map.csv` et `input/unresolved.md`. Ne recopiez pas d’emblée la référence.

```text
Lis brief.md, puis l’article, la table de faits et les questions ouvertes dans input/.
Conçois huit diapositives pour un auteur individuel qui essaie pour la première fois un outil d’organisation de notes, pour une présentation d’environ cinq minutes.
Pour chaque page, rédige une conclusion, les points essentiels et les IDs des sources dans my-output/outline.md.
Conserve le statut fictif, la limite des formats et le conflit sur les réglages de diagnostic.
N’invente pas de chiffres de précision, de prix ou de gain de temps ; distingue les conseils de l’auteur des faits du produit.
```

Pour terminer, les huit rôles doivent être présents, avec une idée par page et chaque fait lié à une section source. Cinq minutes est un objectif, pas la preuve qu’une répétition a eu lieu. Le prompt complet se trouve dans `prompts/01-outline.md`.

## 2. Vérifier la mise en page sur deux échantillons

Créez d’abord la page de titre et la sixième diapositive sur les limites : l’une révèle les grands titres, l’autre le texte le plus dense. Le style de référence emploie bleu foncé, blanc chaud et texte natif, sans imposer de décoration.

```text
À partir du plan de huit pages validé, crée d’abord des échantillons des pages 1 et 6.
Utilise le format 16:9 et des zones de texte natives pour le corps ; choisis une police chinoise disponible dans l’environnement.
Sur la page 6, garde P3 « désactivé par défaut » et C2 « activé par défaut pour les nouvelles installations » et marque le résultat non confirmé.
Rends les pages et vérifie chinois, retours à la ligne, marges et lisibilité des sources. Une fois la mise en page validée, termine les six autres pages.
Écris PPTX, huit aperçus, notes par page et compte rendu de validation dans my-output/.
```

La référence utilise Arial Unicode MS. Si cette police manque, choisissez une police chinoise légalement disponible et vérifiez de nouveau le rendu. Sans outil PPTX, vous pouvez livrer le plan et noter la capacité manquante, mais le plan seul ne termine pas l’exercice.

## 3. Vérifier édition, huit pages et sources

Ouvrez votre PPTX dans un logiciel de présentation, sauvegardez une copie de test, sélectionnez et modifiez un texte important, enregistrez puis rouvrez. Exportez ensuite l’aperçu de chaque page et vérifiez chinois, coupures, chevauchements, nombre de pages et notes. Huit images pleine page ne remplacent pas un fichier modifiable.

La référence a été importée et exportée avec LibreOffice headless. Dans une copie temporaire du PPTX, le titre natif « une copie » a été remplacé par « deux copies » ; le texte modifié a été relu après export. Cela ne constitue ni un test de clic dans l’interface ni une garantie pour tous les logiciels.

![Sixième diapositive de référence : deux sources donnent des réglages par défaut opposés et la conclusion reste non confirmée](/downloads/article-to-slides/previews/slide-06.png)

La sixième page est cruciale : ne supprimez pas une des deux versions contradictoires et ne résumez pas en « désactivé par défaut ». La colonne de gauche de la cinquième page est le contre-exemple conçu par l’auteur ; distinguez-la de la formulation correcte à droite. Les sources détaillées figurent dans les notes PPTX et `solution/slide-notes.md`.

## 4. Vérifier la référence et consigner sa propre validation

Dans le dossier complet, exécutez la commande suivante pour contrôler les fichiers de référence téléchargés (Python 3.10+, bibliothèque standard seulement) :

```sh
python3 validation/check.py
```

Elle vérifie hachages, huit pages, textes natifs, notes et aperçus de la référence. Elle ne valide pas votre nouveau document dans `my-output/`. Vérifiez celui-ci dans le logiciel comme indiqué plus haut, en consignant version, police, résultats et limites restantes.

Sans script, vous pouvez toujours ouvrir PPTX et PDF page par page, mais ne prétendez pas avoir effectué des contrôles de hachage ou de structure. Le [compte rendu de validation](/downloads/article-to-slides/validation/record.md) indique la portée réelle de la référence.

## Récupérer en cas d’échec

| Symptôme | Action | Preuve de récupération |
|---|---|---|
| Chinois affiché en carrés | Vérifier l’accès du moteur de rendu à une police chinoise ; remplacer la police sur une copie au besoin | Huit pages rendues de nouveau, texte lisible |
| Débordement après changement de police | Réduire le texte, ajuster zones et marges tout en gardant les limites essentielles | Aucun texte coupé ou superposé dans les aperçus |
| Texte impossible à sélectionner séparément | Recréer avec des objets textuels natifs au lieu de PNG pleine page | Texte sélectionné, modifié, enregistré et rouvert dans le logiciel |
| Contradiction « lissée » | Revoir P3, C2, C3 et restaurer les deux versions et « non confirmé » | Page 6 conforme à la table de faits |
| Fichier illisible ou nombre de pages faux | Réexporter et réimporter, conserver le fichier défectueux pour diagnostic | Huit pages présentes et ouverture correcte |

Le premier problème s’est réellement produit : LibreOffice ne lisait pas d’abord les polices chinoises du système. Après configuration explicite du répertoire des polices, le chinois est revenu et les huit pages ont été recontrôlées. Les pages aux caractères manquants n’ont pas été retenues comme aperçus finaux.

## Critères de réussite et suite

- Le PPTX de huit pages s’ouvre dans le logiciel consigné et les textes essentiels sont modifiables.
- Les huit aperçus sont présents ; chinois, retours à la ligne et limites ont été vérifiés page par page.
- Sources, identité synthétique, conseils de l’auteur et contradictions ouvertes restent visibles.
- Le compte rendu précise contrôles effectués et non effectués ; les résultats restent locaux.

Poursuivez avec le [parcours créateur : conserver les consignes réutilisables](/fr/guide/learning-paths/creator/#4-conserver-des-consignes-réutilisables). Les étapes stabilisées peuvent devenir un modèle personnel, puis vous pourrez [transformer un processus en Skill](/fr/cases/workflows/turn-a-workflow-into-a-skill/).
