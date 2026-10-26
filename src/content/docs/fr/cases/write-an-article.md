---
caseCategory: creation
directoryOrder: 20
title: Rédiger un article sourcé à partir de trois documents
description: Utilisez une fiche produit, un entretien synthétique et des notes de version pour cartographier les faits, traiter les conflits et réviser un article avec un dossier complet téléchargeable.
contentType: case
audiences: [creator, beginner]
task: source-backed-writing
level: beginner
estimatedMinutes: 50
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Les trois documents synthétiques créés pour l’exercice et sept faits essentiels ont été vérifiés point par point ; la validation structurelle passe. Il s’agit d’une vérification de l’auteur, sans expérience comparative avec un modèle réel ni deuxième relecture humaine.
  evidence:
    - label: Fiche produit synthétique
      href: /downloads/source-backed-article/sources/01-product.md
    - label: Entretien synthétique
      href: /downloads/source-backed-article/sources/02-interview.md
    - label: Notes de version avec conflit non résolu
      href: /downloads/source-backed-article/sources/03-changelog.md
    - label: Compte rendu de vérification de l’auteur et limites
      href: /downloads/source-backed-article/validation/record.md
assets:
  - path: /downloads/source-backed-article/source-backed-article-1.0.0.zip
    purpose: Trois documents, prompts, brouillons initial et final, tableau de faits, diff des révisions et outil de validation
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /fr/cases/
  label: Choisir un exercice pratique
next:
  link: /fr/cases/create-a-slide-deck/
  label: Transformer l’article en présentation
locale: fr
source_locale: zh-CN
source_revision: "e2bb5ea"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: 2026-10-26
---

L’objectif est un court article en chinois dont chaque fait important remonte à un document. Vous traiterez des descriptions contradictoires, distinguerez éléments étayés, déductions de l’auteur et questions ouvertes, puis réviserez un premier brouillon volontairement erroné.

Niveau débutant. Prévoir 45 à 60 minutes : c’est une estimation éditoriale, non un temps mesuré auprès de lecteurs. Il faut pouvoir fournir des fichiers locaux à Codex et lire du Markdown. La vérification structurelle facultative nécessite Python 3.10+.

[Télécharger le dossier complet v1.0.0 (ZIP)](/downloads/source-backed-article/source-backed-article-1.0.0.zip)

Tous les documents sont des créations de ce site. Le produit « Shiye » et la personne interrogée « Xiaolin » sont fictifs : ils ne décrivent ni produit réel ni témoignage authentique.

## Résultat attendu

L’article final de référence suit l’idée « vérifier d’abord un résumé, puis décider d’élargir l’usage » ; il traite les limites des entrées, un essai restreint, la vérification du résumé et les points ouverts.

| Livrable | Utilité |
|---|---|
| `outline.md` | Décrire la question du lecteur et l’ordre de l’article |
| `article.md` | Article en chinois avec identifiants de faits |
| `claim-map.csv` | Sept faits/conseils essentiels, IDs de sources, sections et types de preuve |
| `unresolved.md` | Conserver les questions que les documents ne tranchent pas |
| `revision.diff` | Diff réel entre le brouillon conçu et l’article final |

[Voir l’article de référence](/downloads/source-backed-article/solution/article.md) · [Voir le tableau des faits](/downloads/source-backed-article/solution/claim-map.csv)

## Télécharger et préparer

Décompressez et ouvrez `source-backed-article`. Lisez `brief.md` et `sources/index.csv`. La licence CC0 1.0 autorise modification et redistribution. Vous pouvez éviter solution au début pour produire d’abord votre propre version.

Les sources sont P, fiche produit ; I, entretien synthétique ; C, notes de version. Leurs sections portent des identifiants stables comme P1, I2, C3. Une citation doit désigner la section précise, et pas seulement « les documents ».

## 1. Organiser d’abord les faits et les conflits

```text
Lis brief.md, sources/index.csv et les trois documents qui y sont listés.
Énumère d’abord les faits directement étayés, les informations manquantes et les affirmations contradictoires ; joins à chacune un ID de source et une section.
Ne cherche pas en ligne des informations sur ce produit fictif et ne transforme pas l’entretien synthétique en témoignage réel.
Ne résous pas automatiquement une contradiction par la date du document. Livre le tableau de faits avant d’écrire l’article.
```

Un conflit est intentionnel : P3 indique que l’envoi des données de diagnostic est désactivé par défaut ; C2 indique qu’il est activé par défaut pour les nouvelles installations ; C3 précise qu’aucun correctif du mainteneur n’a été fourni. La bonne réponse est « non confirmé », pas la sélection de la source la plus récente.

## 2. Rédiger d’une traite dans le périmètre établi

`prompts/02-outline-and-write.md` précise déjà le public et quatre sections : possibilités, essai, vérifications indispensables et questions ouvertes. Une fois ce plan confirmé, vous pouvez rédiger sans pause entre chaque partie.

Écrivez tout dans `my-output/` en conservant les documents d’entrée. Marquez les faits importants `[F1]`, etc. Le tableau de correspondance comporte :

```text
claim_id,article_section,claim,source_id,locator,evidence_type,confidence_note
```

Les types de preuve sont « appuyé par le texte », « déduction de l’auteur » et « non confirmé ». Conseiller d’essayer sur quelques copies est un jugement de l’auteur : ne le présentez pas comme une promesse du produit ou une obligation.

## 3. Corriger les faits avant le ton

`solution/draft.md` est un contre-exemple créé par l’auteur, pas une véritable réponse d’un modèle. Il affirme volontairement des capacités PDF et image, un fonctionnement entièrement hors ligne, une garantie d’efficacité et un témoignage réel que les documents ne justifient pas.

| Problème du brouillon | Correction | Pourquoi |
|---|---|---|
| « PDF et toutes sortes d’images » | Limiter à Markdown et texte brut | P1 définit les entrées |
| « Entièrement hors ligne, diagnostic désactivé par défaut » | Conserver les versions contradictoires et la question ouverte | P3 et C2 s’opposent, et les champs transmis ne sont pas précisés |
| « Xiaolin prouve la précision et le gain de temps » | Garder l’identité synthétique sans chiffre d’effet | I3 ne contient ni chronométrage ni échantillon d’évaluation fixe |
| « Outil universel qui augmente facilement la productivité » | Décrire entrées, actions et contrôles précis | Réduire l’exagération sans inventer de faits |

Voir le [diff de révision](/downloads/source-backed-article/solution/revision.diff) et les [notes de révision](/downloads/source-backed-article/solution/revision-notes.md). Polir le style en conservant des capacités erronées ne suffit pas.

## 4. Vérifier la structure, puis relire chaque source

Avec Python 3.10+, dans le dossier d’exercice :

```sh
python3 validation/check.py --output my-output
```

Le script vérifie les hachages des trois sources, les IDs du texte, les sections citées et le fichier des questions ouvertes. L’article de référence passe ; une copie temporaire contenant un identifiant F99 inexistant est rejetée.

**La validation structurelle ne prouve pas l’exactitude des faits.** Ouvrez chaque source pour chaque affirmation et vérifiez si elle soutient la phrase et si les conditions comme « uniquement » ou « non confirmé » subsistent. Un extrait synthétique présenté comme témoignage réel reste faux même avec un ID de citation.

Sans script, ouvrez manuellement les trois fichiers d’origine en suivant le tableau et contrôlez IDs et formulations. Ne prétendez pas avoir exécuté une vérification que vous n’avez pas faite.

## Récupérer en cas d’échec

- Fichier absent : vérifiez le dossier extrait et l’index, sans inventer le contenu.
- ID de citation inexistant : corrigez la correspondance ou supprimez le fait sans source, mais gardez l’incertitude justifiée.
- Sources contradictoires : exposez les deux versions et la preuve manquante ; ne tranchez ni par date, ni par majorité, ni par ton.
- Article trop promotionnel : retirez d’abord les promesses sans fondement, puis décrivez des actions et limites concrètes.

## Critères de réussite

Les faits essentiels sont localisables, les conseils de l’auteur identifiés, les conflits et lacunes visibles et le caractère synthétique conservé. La livraison reste locale, sans publication automatique.

Utilisez ensuite l’article pour [créer huit diapositives modifiables](/fr/cases/create-a-slide-deck/). Le dossier de présentation contient aussi une entrée indépendante, un PPTX, un PDF, huit aperçus et un compte rendu de validation ; en parcours continu, préférez votre propre article vérifié.
