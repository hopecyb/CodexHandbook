---
title: Fichiers texte et code
description: Faire lire et écrire correctement à Codex les sources, configs et fichiers de documentation texte.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

La plupart du travail de développement est des **fichiers texte et code** : source, tests, config, Markdown. Cette page couvre le cadrage des changements, la cohérence de style et la fusion sécurisée.

La clé est changer les bons endroits de la bonne manière — sans éditions collatérales supplémentaires.

## Ce que cette page couvre

- Chemins et encodage corrects
- Organiser les éditions multi-fichiers
- Coordonner avec formateurs et linters

## Types de fichiers et notes

| Type | Notes |
|---|---|
| Source `.ts` `.py` etc. | Suivre `AGENTS.md` et patterns existants |
| Config `.json` `.yaml` `.toml` | Facile à casser la structure ; exiger syntaxe valide |
| Docs `.md` | Liens relatifs, conventions multilingues |
| Code généré | Clarifier commit vs gitignore |

Contexte : [Contexte fichier et dossier](/guide/context/file-and-folder-context/)

## Pourquoi ces fichiers se trompent

Souvent :

- Écrit dans les mauvais fichiers
- Réécrit de grandes zones pour un petit correctif
- Style diverge des normes du projet
- Syntaxe config cassée silencieusement

## Structure de Prompt recommandée

```text
Objectif : <une ligne>
Éditions autorisées : <glob de chemin>
Interdit : lockfile, répertoires non liés
Style : correspondre à <fichier exemple>
Terminé quand : lister fichiers changés + exécuter <commande de test>
```

Voir [Anatomie de Tâche](/prompts/task-anatomy/)

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

Petites éditions petites, explicables, révisables battent les refactors « en passant ».

## Encodage et fins de ligne

- Par défaut **UTF-8** ; déclarer encodages spéciaux dans `AGENTS.md`
- Correspondre à `.editorconfig` / `prettier` pour éviter des diffs de nouvelle ligne sur tout le fichier
- Gros fichiers : @ fonctions spécifiques, pas réécriture complète

## Si vous craignez l'expansion de périmètre

Exiger :

1. Lister les fichiers affectés d'abord
2. Changement minimal pour cette Tâche seulement
3. Étapes de Vérification après édition

## Focus de revue

- [Revoir les diffs](/guide/quality/review-diffs/) : logique, périmètre, suppressions
- [Exécuter les tests](/guide/quality/run-tests/)
- Pas de placeholders `TODO` non implémentés laissés

## Erreurs courantes

- « Refactorer tout le projet » → des centaines de fichiers
- Édition texte sur fichiers binaires ou minifiés
- Liens doc en chemins absolus → 404 sur le site

Les éditions texte et code échouent quand le périmètre s'étend et la revue est difficile. Indiquer périmètre, style et Vérification dès le départ.

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Vérifié croisé avec les pages vérifiées Contexte fichier/dossier, anatomie de Tâche, review-diffs et run-tests ; principe stable : cadrer les chemins, correspondre au style, indiquer la Vérification.  
**Dernière vérification :** 2026-07-26
