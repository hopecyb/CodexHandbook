---
title: Éditeurs pris en charge
description: Quels éditeurs prennent en charge l'extension IDE Codex, comment choisir et limites courantes.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

L'extension IDE intègre Codex dans **l'éditeur que vous utilisez déjà** — démarrer des Tâches, voir les diffs et accepter les changements dans la même interface. Cette page couvre le périmètre de support et le choix ; installation : [Installer l'extension IDE](/guide/ide/installation/).

## Ce qui est couvert

- Quels éditeurs ont des extensions officielles
- Extension IDE vs App de bureau vs CLI
- Unifier le flux de travail entre éditeurs dans une équipe

## Ce qu'il faut regarder en choisissant

Deux questions : quels éditeurs sont officiellement pris en charge, et rester dans l'IDE si vous avez déjà un éditeur favori.

## Périmètre de support officiel

**Liste concrète et exigences de version : [documentation OpenAI Codex](https://developers.openai.com/codex)**. Inclut couramment :

| Éditeur | Utilisateurs typiques | Notes |
|---|---|---|
| Visual Studio Code | La plupart des développeurs | Installation Marketplace ; écosystème mature |
| Forks VS Code comme Cursor | Utilisateurs d'éditeurs IA | Généralement compatible avec le mécanisme d'extension VS Code — vérifier en pratique |
| Famille JetBrains (si proposée) | Utilisateurs Java/Kotlin/IDEA | Fonctionnalités/interface peuvent différer de la build VS Code |

Éditeurs hors liste officielle : utilisez [CLI](/guide/cli/) ou [App de bureau](/guide/desktop-app/) — ne comptez pas sur des ports non officiels.

## Idées reçues courantes

### Le support officiel ne signifie pas la parité des fonctionnalités entre clients

« A une extension » n'est pas « peut tout faire ici ».

Différents points d'entrée mettent l'accent sur différents travaux :

- IDE : modifications proches du code
- App : Tâches au niveau projet et coordination multi-Tâches
- CLI : terminal, scripts, environnements distants

### Le choix d'éditeur n'est pas seulement l'habitude

L'IDE convient bien quand vous :

- Éditez surtout du code localement
- Utilisez la sélection
- Éditez et testez au même endroit

L'App ou la CLI conviennent souvent mieux pour :

- Longues Tâches
- Coordination documentaire
- Plusieurs Tâches en parallèle

## Quand choisir l'extension IDE

| Bon cas | Moins idéal |
|---|---|
| Vouloir fichier/sélection actuels dans le Contexte automatiquement | Besoin d'Agents parallèles, worktrees, fonctionnalités réservées à l'App |
| Préférer le diff inline dans l'éditeur | Surtout des Tâches longues non-code (docs, recherche) |
| Déjà lancer tests et débogage dans l'IDE | Besoin d'un environnement Cloud standardisé from scratch |

Point d'entrée décision : [Choisir votre client Codex](/guide/getting-started/choose-your-codex-client/)

## Répartition avec l'App de bureau

```text
Extension IDE : pendant l'édition → petites étapes → revue inline → tests locaux
App de bureau : Tâches projet → Agents parallèles → worktrees → notifications et délégation Cloud
```

Même compte et config projet peuvent être partagés ; voir [Contexte éditeur](/guide/ide/editor-context/) et [portée AGENTS.md](/guide/customization/agents-md/scope-and-precedence/).

## Alignement d'équipe

1. Documentez **éditeur recommandé + version minimale d'extension** dans le README
2. Standards centraux dans `AGENTS.md` — pas de fonctionnalités privées à l'IDE
3. La revue de code utilise toujours le diff Git — pas des vues qu'un seul IDE peut montrer

## Questions de décision rapides

1. Passez-vous la plupart du temps à éditer du code dans un éditeur ?
2. Comptez-vous sur fichier actuel, sélection et diff inline ?
3. N'avez-vous pas encore besoin de multi-Agent, worktrees ou gestion de Tâches plus lourde ?

Si surtout oui, commencez par l'extension IDE.

## Erreurs courantes

- Supposer que l'extension IDE et l'App sont équivalentes 1:1
- Démarrer des Tâches sans racine d'espace de travail ouverte → mauvais chemins et résolution `AGENTS.md`
- Plusieurs extensions IA en conflit pour le Contexte et les raccourcis

Souvent vous choisissez l'extension IDE simplement parce que c'est là que vous travaillez déjà.

## Références

- Documentation IDE OpenAI Codex
- stormzhang `09-ide.md`
- KimYx0207 CX-08 IDE

---

**Statut :** obsolète  
**Produits concernés :** IDE  
**Note de revue :** Le centre d'aide officiel confirme fortement que « l'extension Codex VS Code est compatible avec la plupart des forks VS Code », mais cette page étend à Cursor, Windsurf, formes de support JetBrains et comparaisons ; nécessite une matrice de support mise à jour avant `vérifié`.  
**Dernière vérification :** 2026-07-26
