---
title: "Instructions projet"
description: Contexte au niveau projet au-delà de AGENTS.md — comment README, docs et références de conversation divisent les responsabilités.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Les « instructions projet » sont le **contexte statique** que Codex utilise pour comprendre un dépôt, pas limité à un seul format de fichier.

## Contenu

- En dehors de `AGENTS.md`, où devrait vivre l'information au niveau projet
- Comment README, docs et fichiers de script divisent les responsabilités
- Ce qui appartient au dépôt versus ce qui devrait rester uniquement dans la conversation actuelle

## Composants du contexte projet

| Source | Rôle |
|---|---|
| `AGENTS.md` | Règles de collaboration et commandes (autoritaire : série AGENTS de ce chapitre) |
| `README.md` | Ce qu'est le projet et comment le démarrer |
| `docs/` | Architecture, ADR, runbooks |
| Dépendances et scripts | Vérité exécutable dans `package.json`, `Makefile`, et similaires |

Codex lit ces matériaux avec des outils ; la clé est une **source unique de vérité** — les commandes de démarrage dans le README doivent réellement fonctionner.

## Pratique de base

1. Assurer que le `README.md` racine a quatre sections : objectif, installation, développement, test
2. Ancrer les **instructions que vous répétez à Codex** dans `AGENTS.md`
3. Dans les tâches, utiliser `@` pour pointer vers des fichiers spécifiques au lieu de coller le texte complet :

```text
Corriger le null pointer dans @src/auth/login.ts selon les exigences de test dans @AGENTS.md.
Voir @docs/auth-flow.md pour le design associé.
```

## Pourquoi c'est important

Situations courantes :

- Le README dit une chose
- La doc dit autre chose
- La commande qui s'exécute réellement est cachée dans `package.json`

Alors non seulement les humains sont confus — Codex aussi. Le point est de garder la « vérité projet » dans le dépôt aussi concentrée et cohérente que possible.

## Division des responsabilités avec le « contexte de conversation »

- **Instructions projet** : relativement stables pour des mois
- **Contexte de conversation** : objectif, contraintes et conclusions intermédiaires de cette tâche

Dans les longues tâches, si une règle revient sans cesse, **la réécrire** dans `AGENTS.md` ou `docs/` au lieu de copier-coller sur dix fils. Voir [Garder le contexte focalisé](/guide/context/keep-context-focused/).

## Erreurs courantes

- README obsolète ; Codex exécute de mauvaises commandes
- Entasser toute la documentation dans un `CONTEXT.md` géant que personne ne maintient
- Mettre des informations sensibles dans la documentation publique du dépôt

## Idées reçues courantes

### 1. Si j'explique clairement dans le chat, une doc de dépôt désordonnée est acceptable

Cela peut marcher à court terme ; à long terme ça empire.

La prochaine fois vous réexpliquez, et les autres ne voient jamais ce que vous avez dit cette fois.

### 2. `AGENTS.md` peut résoudre tous les problèmes d'instructions projet ?

Non.

`AGENTS.md` convient mieux aux règles et contraintes de collaboration qu'à remplacer l'introduction projet, le contexte d'architecture et les instructions de run complètes.

### 3. Plus de documentation est toujours mieux

Ce qui compte plus :

- Division claire des responsabilités
- Contenu cohérent
- Commandes clés qui s'exécutent réellement

## Division des responsabilités suggérée

- `README.md` : ce qu'est le projet, comment démarrer, comment tester
- `AGENTS.md` : règles de collaboration, zones interdites, définition de terminé
- `docs/` : contexte plus long, architecture, documentation de processus
- Scripts et fichiers de config : vérité exécutable

Le point des instructions projet est d'aider Codex et les humains à trouver la même « vérité du dépôt ». Le nombre de documents n'est pas l'objectif.

## Liste de contrôle d'acceptation

- [ ] Quelqu'un qui clone fraîchement le dépôt (ou Codex) peut exécuter les tests depuis README + AGENTS.md
- [ ] Les prompts de tâche reposent principalement sur des références @, évitant le long contexte répété

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Recoupement avec la description publique actuelle d'OpenAI Developers sur le contexte projet et la collaboration fichier, et les chapitres vérifiés du handbook sur contexte projet, fichiers et flux de travail ; le contenu de la page ne conserve que la division stable des responsabilités entre README, `AGENTS.md`, `docs/` et conversation de tâche.  
**Dernière vérification :** 2026-07-26
