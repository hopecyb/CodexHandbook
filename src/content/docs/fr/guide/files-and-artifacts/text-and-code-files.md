---
title: Fichiers texte et code
description: Faire lire et écrire correctement à Codex les sources, configs et fichiers de documentation texte.
locale: fr
source_locale: zh-CN
source_revision: '1537793'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 10
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: 'Recoupement avec les pages vérifiées contexte fichier/dossier, anatomie de tâche, review-diffs et run-tests ; principe stable : cadrer les chemins, correspondre au style, indiquer la vérification.'
  checkedAt: '2026-07-26'
---

La plupart des tâches de développement portent sur des **fichiers texte et code** : source, tests, config, Markdown. Cette page couvre le cadrage des changements, la cohérence de style et la fusion sécurisée.

La clé est de modifier les bons endroits de la bonne manière — sans éditions collatérales supplémentaires.

## Ce que cette page couvre

- Chemins et encodage corrects
- Organiser les éditions multi-fichiers
- Coordonner avec outils de formatage et linters

## Types de fichiers et notes

| Type | Notes |
|---|---|
| Source `.ts` `.py` etc. | Suivre `AGENTS.md` et patterns existants |
| Config `.json` `.yaml` `.toml` | Facile à casser la structure ; exiger syntaxe valide |
| Docs `.md` | Liens relatifs, conventions multilingues |
| Code généré | Clarifier commit vs gitignore |

contexte : [contexte fichier et dossier](/fr/guide/context/file-and-folder-context/)

## Pourquoi ces fichiers posent problème

Souvent :

- Écrit dans les mauvais fichiers
- Réécrit de grandes zones pour un petit correctif
- Style diverge des normes du projet
- Syntaxe config cassée silencieusement

## Structure de prompt recommandée

```text
Objectif : <une ligne>
Éditions autorisées : <glob de chemin>
Interdit : lockfile, répertoires non liés
Style : correspondre à <fichier exemple>
Terminé quand : lister fichiers changés + exécuter <commande de test>
```

Voir [Anatomie de tâche](/fr/prompts/task-anatomy/)

## Idées reçues courantes

### 1. « Corriger ce fichier » seul est généralement insuffisant

Ajouter :

- Fichiers autorisés
- Fichiers interdits
- Référence de style
- Comment vérifier

### 2. La config n'est pas « juste du texte »

`.json`, `.yaml`, `.toml` échouent souvent sur structure, indentation, syntaxe.

### 3. Changement plus grand ≠ plus rapide

Des modifications limitées, explicables et faciles à examiner sont généralement plus fiables qu’une vaste refonte faite « au passage ».

## Encodage et fins de ligne

- Par défaut **UTF-8** ; déclarer encodages spéciaux dans `AGENTS.md`
- Correspondre à `.editorconfig` / `prettier` pour éviter des diffs de nouvelle ligne sur tout le fichier
- Gros fichiers : @ fonctions spécifiques, pas réécriture complète

## Si vous craignez l'expansion de périmètre

Exiger :

1. Lister les fichiers affectés d'abord
2. Changement minimal pour cette tâche seulement
3. Étapes de vérification après édition

## Focus de revue

- [Revoir les diffs](/fr/guide/quality/review-diffs/) : logique, périmètre, suppressions
- [Exécuter les tests](/fr/guide/quality/run-tests/)
- Pas de placeholders `TODO` non implémentés laissés

## Erreurs courantes

- « Refactorer tout le projet » → des centaines de fichiers
- Édition texte sur fichiers binaires ou minifiés
- Liens doc en chemins absolus → 404 sur le site

Les éditions texte et code échouent quand le périmètre s'étend et la revue est difficile. Indiquer périmètre, style et vérification dès le départ.
