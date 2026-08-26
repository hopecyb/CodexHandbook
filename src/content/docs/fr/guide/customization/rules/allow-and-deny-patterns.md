---
title: "Règles Allow et Deny"
description: Contraindre ce que l'Agent peut exécuter avec des règles de commandes et de chemins — habitudes personnelles et lignes de base d'équipe.
locale: fr
source_locale: zh-CN
source_revision: 0ae6680
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Les **Rules** déclarent dans la configuration ou les fichiers projet quelles commandes shell, chemins et appels d'outils sont **autorisés ou interdits**, réduisant l'approbation manuelle à chaque fois tout en empêchant l'automatisation dangereuse.

## Contenu

- Comment fonctionnent les règles Allow / Deny
- Relation avec le bac à sable, les dialogues d'approbation et `AGENTS.md`
- Exemples de règles d'équipe

## Ce que les règles font réellement

Si « règles » semble abstrait, commencez ici : convenir à l'avance de ce que Codex peut et ne peut pas faire, au lieu de juger et cliquer approuver à chaque fois.

Leur valeur est principalement double :

- Réduire les opérations à faible risque que vous confirmez quotidiennement de toute façon
- Bloquer les opérations à haut risque qui ne devraient pas s'exécuter automatiquement

## Types de règles (conceptuels)

| Type | Exemple |
|---|---|
| Liste d'autorisation de commandes | Autoriser `npm test`, `git status` |
| Liste de refus de commandes | Interdire `rm -rf`, `curl \| bash` |
| Chemins | Interdire l'écriture `../`, interdire la lecture `~/.ssh` |
| Réseau | Interdire l'outbound ou autoriser uniquement les domaines de registre |

Comparer avec [Matrice des permissions](/fr/guide/reference/permission-matrix/) : les règles sont une application **configurable** ; la matrice décrit les **défauts typiques**.

## Couches recommandées

```text
Politique gérée organisation (ne peut pas être annulée)
    ↓
Règles projet + AGENTS.md (revue Git)
    ↓
Supplément de liste d'autorisation personnelle (local uniquement)
    ↓
Contraintes de prompt de tâche unique
```

## Idées reçues courantes

### Les règles ne visent pas seulement moins de dialogues

Beaucoup entendent d'abord « liste d'autorisation » et pensent que l'objectif est moins de popups.

Moins de popups n'est qu'une partie ; plus important est d'autoriser les actions à faible risque et bloquer les actions à haut risque.

### Les règles ne sont pas le bac à sable

Le bac à sable limite « jusqu'où vous pouvez aller » ; les règles conviennent de « quelles actions ne devraient pas arriver en principe ».

Utilisez les deux ; ne choisissez pas l'un pour remplacer l'autre.

### Les lignes de base d'équipe ne peuvent pas vivre sur la machine d'une personne

Si seules vos règles locales connaissent « pas de push » ou « ne pas toucher `.env` », les autres peuvent encore intervenir.

Les lignes de base d'équipe devraient vivre où elles peuvent être revues.

## Exemple d'équipe (illustratif — pas prêt à copier-coller)

**Autoriser :**

- Installation de dépendances **dans le projet** via le gestionnaire de paquets
- Scripts de test depuis la documentation

**Interdire :**

- `git push`, `git reset --hard`
- Lecture/écriture `.env*` (sauf tâche explicite)
- Requêtes POST vers l'internet public contenant le contenu du dépôt

Les règles devraient vivre dans des fichiers revus par l'équipe, pas seulement dans un accord verbal.

## Erreurs courantes

- Liste d'autorisation trop large (autoriser `bash` est comme tout autoriser)
- Seulement deny, pas allow — encore trop d'approbations
- Règles en contradiction avec `AGENTS.md`

## Pour commencer

En organisant les règles, vous n'avez pas besoin d'une politique complète le premier jour. Ces deux étapes suffisent :

1. Lister explicitement 3–5 commandes quotidiennes à faible risque
2. Lister quelques actions à haut risque que vous ne voulez jamais automatiser

Exécuter d'abord la frontière minimale ; affiner plus tard.

## Frontières de sécurité

- Les règles **ne peuvent pas** remplacer la revue de code et la protection de branche
- Les prompts malveillants peuvent tenter de contourner les règles — garder les défauts du bac à sable stricts
- Les changements de règles passent par PR ; traiter comme les changements CI

De bonnes règles allow/deny indiquent à l'avance quelles actions sont raisonnables et quelles ne devraient pas arriver.

---

**Statut :** vérifié  
**Produits concernés :** CLI / App  
**Base de vérification :** La documentation actuelle des permissions Codex/plugin d'OpenAI continue d'accentuer la couche entre actions lecture/écriture, approbation, frontières de source et contrôle d'accès basé sur les rôles ; cette page ne déclare pas une syntaxe de fichier de règles spécifique et explique allow/deny comme un modèle de frontière d'exécution, distinct du bac à sable, l'approbation et les flux de revue d'équipe.  
**Dernière vérification :** 2026-07-26
