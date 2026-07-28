---
title: "Portée et priorité de AGENTS.md"
description: Fichiers multiples, monorepos et qui l'emporte entre les règles projet et les prompts de conversation.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Lorsque plusieurs fichiers `AGENTS.md`, des fichiers de configuration et la conversation actuelle coexistent, il faut clarifier **quelle règle s'applique**.

Cette page traite de : quand deux règles semblent différentes, quelle suivre ?

## Vue d'ensemble de la priorité

```text
Politique organisation gérée > AGENTS.md du sous-répertoire le plus proche > AGENTS.md à la racine du dépôt > configuration utilisateur > conversation actuelle
```

« Plus proche » signifie le fichier sous-répertoire **le plus proche du chemin de travail actuel**. Par exemple, en travaillant sous `packages/web/AGENTS.md`, ce fichier se fusionne avec le fichier racine ; en cas de conflit, **le sous-répertoire l'emporte**.

## Comment comprendre « le plus proche gagne »

Imaginez :

- Les règles racine sont la « loi par défaut du dépôt entier »
- Les règles de sous-répertoire sont les « notes spéciales pour cette zone locale »

Les règles plus proches de l'endroit où vous travaillez sont donc généralement plus spécifiques et devraient avoir la priorité.

## Relation avec les prompts de conversation

| Source | Persistance | Bon pour |
|---|---|---|
| AGENTS.md | Multi-session, versionné | Consensus d'équipe, commandes de build, zones interdites |
| Prompt de tâche | Cette session seulement | Objectif, portée, échéance de cette tâche |
| Référence @ fichier | Renforcement du contexte de session | Fichiers d'implémentation spécifiques, fichiers de design |

**Ne** collez pas l'intégralité de `AGENTS.md` dans le chat à répétition ; si vous devez souligner un point, référez-le en une ligne : « Suivre les exigences de test dans AGENTS.md ; en plus, ne pas modifier `legacy/` cette fois. »

## Modèle monorepo

```text
repo/
├── AGENTS.md              # Dépôt entier : gestionnaire de paquets, CI, sécurité
├── apps/
│   └── web/
│       └── AGENTS.md      # Frontend : bibliothèque de composants, commandes E2E
└── packages/
    └── api/
        └── AGENTS.md      # Backend : conventions de migration de base de données
```

Principes :

- **Fichier racine** : 10–20 règles strictes partagées dans le dépôt
- **Fichiers sous-paquets** : commandes et notes de répertoire propres à ce paquet uniquement
- Éviter trois fichiers 80 % dupliqués — mettre le contenu partagé à la racine ; les sous-paquets écrivent uniquement les deltas

## Frontière avec les préférences personnelles

Les habitudes personnelles (thème, modèle par défaut, chemins locaux) appartiennent à la **configuration utilisateur** ; ne les mettez pas dans le `AGENTS.md` de l'équipe ou les collaborateurs en pâtiront par erreur.

## Idées reçues courantes

### 1. Ce que je dis dans la conversation actuelle est le plus récent, donc a la priorité la plus haute

La conversation sert aux « exigences supplémentaires cette fois », pas pour annuler à la légère les règles strictes de l'équipe ou de l'organisation.

### 2. Le `AGENTS.md` de sous-répertoire copie simplement les règles racine

Ce ne devrait pas être le cas.

Meilleure pratique :

- Les règles racine contiennent ce qui est commun
- Les sous-répertoires écrivent uniquement les deltas et exceptions

### 3. Connaître l'ordre seul ne suffit pas

Il faut aussi savoir :

- Quel type d'information appartient à quelle couche
- Pourquoi une couche l'emporte en cas de conflit

## Comment juger en cas de conflit

Quand deux règles semblent en conflit, vérifiez dans cet ordre :

1. Quelle est plus proche du répertoire de travail actuel
2. Quelle est une règle projet à long terme versus un ajout temporaire pour cette fois seulement
3. Si la politique organisation ou gérée restreint depuis le niveau supérieur

En cas de conflit de règles, privilégiez généralement la couche plus proche, plus stricte et plus explicite — ne supposez pas que « la dernière phrase » gagne toujours.

## Erreurs courantes

- `AGENTS.md` de sous-répertoire en contradiction avec le fichier racine sans indiquer qui l'emporte
- Mettre des clés sensibles dans `AGENTS.md` et les committer dans Git — utilisez la gestion des secrets et les variables d'environnement
- S'attendre à qu'une « relaxation temporaire » en conversation annule la politique gérée par l'équipe (généralement impossible)

## Liste de contrôle d'acceptation

- [ ] `AGENTS.md` racine et fichiers sous-paquets ont une division claire des responsabilités
- [ ] Conscience claire que les règles en conflit favorisent le sous-répertoire
- [ ] Les prompts de tâche écrivent uniquement les deltas, pas une copie complète du manuel projet

---

**Statut :** obsolète  
**Produits concernés :** App / CLI / IDE / Cloud  
**Note de révision :** Cette page décrit actuellement la priorité entre `AGENTS.md`, la configuration utilisateur et la conversation actuelle comme un ordre linéaire trop fixe ; la priorité réelle peut différer selon les clients, les capacités gérées par l'organisation et les environnements d'exécution. Une réécriture est nécessaire après ajout des sources officielles actuelles.  
**Dernière vérification :** 2026-07-26
