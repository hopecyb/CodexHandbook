---
title: Commandes et raccourcis
description: Sous-commandes CLI, actions en session et habitudes clavier — orienté produit ; drapeaux complets dans la référence.
locale: fr
source_locale: zh-CN
source_revision: 6a36a12
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

L'efficacité en terminal vient de trois domaines : **comment vous lancez**, **raccourcis en session** et **association avec scripts/éditeurs**. Cette page couvre les habitudes ; les tableaux de drapeaux sont dans [Référence des commandes CLI](/fr/guide/reference/commands/) et [Raccourcis clavier](/fr/guide/reference/keyboard-shortcuts/).

## Ce qui est couvert

- Quand utiliser `codex` vs `codex exec`
- Types d'opérations courantes en session
- Transformer les répétitions en alias ou scripts

## Commencer par distinguer

Beaucoup de nouveaux supposent que « commandes et raccourcis » signifie mémoriser syntaxe et drapeaux.

Plus pratique : distinguer trois modes :

- **Discuter en travaillant**
- **Tâche unique jusqu'au bout**
- **Raccourcir les actions répétées**

Cette clarté choisit généralement la bonne commande.

## Vue d'ensemble des entrées de commande

| Objectif | Entrée | Détails |
|---|---|---|
| Discuter et éditer interactivement | TUI interactif `codex` | [Mode interactif](/fr/guide/cli/interactive-mode/) |
| CI / pipeline en un coup | `codex exec` (ou équivalent) | [Mode non interactif](/fr/guide/cli/non-interactive-mode/) |
| Changer les valeurs par défaut | Fichiers de config | [Configuration CLI](/fr/guide/cli/configuration/) |

:::note
Les noms de sous-commandes changent selon la version — faites confiance à `codex --help`.
:::

## Idées reçues courantes

### `codex` et `codex exec` ne sont pas débutant vs pro

Pas « mode simple » vs « mode expert ».

Division pratique :

- `codex` quand vous êtes présent pour orienter
- `codex exec` quand la Tâche est définie à l'avance pour une exécution unique

### Plus de raccourcis n'est pas mieux au début

Maîtrisez d'abord :

- Démarrer une session
- Découvrir les commandes `/` dans votre environnement
- Quitter, redémarrer, changer de répertoire

C'est suffisant pour commencer.

## « Raccourcis » en session

Les touches et commandes `/` exactes varient selon la version ; les catégories sont stables :

### Saisie et historique

- Saisie multiligne : combo nouvelle ligne spécifique au produit (souvent `Shift+Enter` ou mode éditeur)
- Rappeler la dernière Tâche : historique terminal ou historique en session si disponible

### Commandes slash

Taper `/` au Prompt déclenche des flux intégrés (revue, compaction du Contexte, etc.). **Ne mémorisez pas une liste figée** — utilisez la complétion `/` dans votre environnement. Taxonomie orientée apprentissage : [référence des commandes slash](/fr/guide/reference/slash-commands/).

### Approbations

Quand l'Agent demande shell ou écritures fichier, l'interface propose approuver/refuser/toujours autoriser (si offert). Lisez [Approbations et Bac à sable](/fr/guide/cli/approvals-and-sandbox/) avant usage sans surveillance.

## Raccourcis couche shell (recommandés)

Encapsulez « entrer dans le projet + démarrer Codex » pour éviter les erreurs de répertoire :

```bash
# Exemple ~/.zshrc (ajuster selon besoin)
cx() {
  cd "$1" || return 1
  codex
}
```

La revue non interactive peut être un script avec Prompt dans `prompts/review.md` pour le contrôle de version.

## Parcours d'apprentissage

1. Démarrer `codex` dans le bon répertoire
2. Apprendre quand `codex exec` convient
3. Encapsuler les actions fréquentes en alias, fonctions ou scripts

Évitez la sur-abstraction avant que l'outil de base paraisse naturel.

## vs IDE / App

| | CLI | Extension IDE |
|---|---|---|
| Contexte | `--cd` / `-C`, fichiers lus par les outils | Fichiers ouverts, sélection |
| Idéal pour | Scripts, SSH distant, terminal pur | Éditer en voyant le diff |
| Raccourcis | Touches terminal + `/` | Palette de commandes éditeur |

IDE : [Flux de Tâche locale](/fr/guide/ide/local-task-workflow/)

## Erreurs courantes

- Démarrer dans le mauvais répertoire, éditer le projet voisin
- Lancer `/review` in-app comme sous-commande terminal dans un shell externe
- Coller des « Prompts magiques » tiers non revus dans la session interactive

Pas besoin de chaque commande et raccourci le premier jour. Clarifiez « discuter en travaillant » vs « exécuter une fois » et le choix de commande se simplifie.

## Liste de contrôle d'acceptation

- [ ] Peut démarrer une session interactive à la racine du dépôt
- [ ] Sait où trouver les commandes `/` pour votre version
- [ ] Peut écrire une Tâche `codex exec` minimale en lecture seule (si disponible)

## Références
- Documentation CLI OpenAI Codex
---

**Statut :** obsolète  
**Produits concernés :** CLI  
**Note de revue :** Couvre `codex`, `codex exec`, catégories de commandes `/` et raccourcis de session — détails qui changent selon la version ; manque de doc officielle actuelle forte sur commandes/raccourcis pour Vérifier ; nécessite réécriture avant Vérification.  
**Dernière vérification :** 2026-07-26
