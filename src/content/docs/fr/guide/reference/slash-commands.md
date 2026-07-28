---
title: "Commandes slash et entrée rapide"
description: Commandes `/` et invocation Skill `$` — référence rapide d'apprentissage, pas manuel complet des paramètres.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Les commandes slash ne sont pas du jargon à mémoriser — ce sont des points d'entrée rapides nommés que vous invoquez volontairement.

Elles sautent généralement dans un mode fixe ou un flux intégré. Les commandes slash (`/command`) se rapportent à l'invocation Skill `$name` de [Skill](/skills/overview/) mais ne sont pas identiques. Les listes **changent par produit et version** — utiliser l'autocomplétion `/` dans le client et la doc officielle avant de compter sur les noms.

## Division conceptuelle

| Entrée | Qui invoque | Usage typique |
|---|---|---|
| `/review` etc. | Vous tapez `/` | Flux intégrés ou configurés fixes |
| `$skill-name` | Vous ou le modèle | Skill projet ou utilisateur |
| Langage naturel | Vous | Tâches générales |

## Trois façons en termes simples

- `/command` : vous choisissez un raccourci dans le chat
- `$skill` : vous ou le modèle nomme un Skill
- Langage naturel : vous énoncez le besoin ; le modèle décide comment

Si vous connaissez le flux que vous voulez, `/command` est plus direct.

## Ce que c'est

- Pas une commande terminal
- Pas vocabulaire secret
- Imaginez « bouton raccourci dans le chat »

Idéal quand :

- Vous savez quel flux vous voulez
- Vous ne voulez pas réexpliquer la même intention à chaque fois

## Idées reçues courantes

### 1. Les commandes slash ne sont pas des commandes shell

Ce sont des raccourcis chat — pas `codex ...` dans le terminal.

### 2. Les listes ne sont pas fixes pour toujours

Les commandes disponibles diffèrent par produit, version et environnement — **l'autocomplétion dans votre environnement** bat la mémorisation.

### 3. Slash ne contourne pas approbation et bac à sable

Si le flux écrit des fichiers, exécute des commandes ou utilise le réseau, la politique s'applique encore.

### 4. Vous pouvez bien utiliser Codex sans commandes slash

Le langage naturel couvre la plupart du travail. Les commandes slash accélèrent les flux connus une fois à l'aise.

## Catégories courantes (illustratif)

Les noms peuvent être ajoutés ou supprimés par version — **catégories d'apprentissage uniquement** :

### Session et mode

- Basculer mode plan, compacter contexte, voir aide
- Associe avec [Planification](/guide/agent-work/planning/)

### Revue et qualité

- Revue diff ou PR actuel
- Avec [Revoir les diffs](/guide/quality/review-diffs/)

### Workspace et Git

- Statut, message de commit draft (vous confirmez encore le commit)
- Suivre [Modèles d'approbation humaine](/cases/workflows/human-approval-patterns/)

### Extensions

- Installer ou lister Skills (ex. `skill-installer` si disponible)

## Notes d'utilisation

1. **Tapez `/` d'abord** — voir ce que votre environnement supporte ; ne pas mémoriser listes obsolètes
2. Flux d'équipe → **Skill + docs** pour que la connaissance ne soit pas tribale
3. Écritures déclenchées par slash encore soumises au bac à sable et approbation

## Essayez

1. Tapez `/`
2. Voyez ce qui est disponible
3. Choisissez une commande dont vous comprenez le nom et l'objectif

## Chemin première fois

1. `/` pour voir les offres
2. Essayer une commande claire
3. Noter : changement de mode vs exécution de flux de travail
4. Pour flux d'équipe récurrents, envisager un Skill

Montre la division : slash = entrée rapide, Skill = flux réutilisable durable.

## vs commandes CLI

| | `/` en chat | Terminal `codex …` |
|---|---|---|
| Contexte | Session actuelle et fichiers @ | Répertoire `--cwd` |
| Idéal pour | Exploration interactive | Scripts, CI |

Les commandes slash sont des raccourcis chat — ce que votre environnement offre réellement bat mémoriser les noms.

Sous-commandes CLI : [Mode interactif CLI](/guide/cli/interactive-mode/) et [Mode non interactif](/guide/cli/non-interactive-mode/). Table complète des paramètres : [Référence commandes CLI](/guide/reference/commands/).

---

**Statut :** obsolète  
**Produits concernés :** App / CLI / IDE  
**Note de révision :** Centre `/review`, catégories slash et relations `$skill` — disponibilité, nommage et comportement changent rapidement ; sans liste officielle actuelle de commandes et doc de comportement, `obsolète` est approprié.  
**Dernière vérification :** 2026-07-26
