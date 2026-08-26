---
title: Répertoire references/
description: Organiser la longue doc de référence dans un Skill pour la divulgation progressive.
locale: fr
source_locale: zh-CN
source_revision: c595507
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

`references/` accueille ce qui ne doit pas s'ouvrir à chaque exécution — pour ne pas encombrer le flux principal.

Ce n'est pas « plus de fichiers », c'est isoler ce qui est **utile à une étape** mais pas **nécessaire tout de suite**.

# Répertoire references/

Quand `SKILL.md` devient trop long, déplacez normes détaillées, API, checklists vers `references/`, citées dans les étapes.

## Exemple

```text
my-skill/
├── SKILL.md
└── references/
    ├── style-guide.md
    └── api-contracts.md
```

Dans `SKILL.md` :

```md
Pour le style de code, lire references/style-guide.md et appliquer ses règles.
```

## Rôles

- `SKILL.md` → fil principal
- `references/` → ouvrir à la demande

- `SKILL.md` = mode opératoire
- `references/` = armoire documentaire

Le lecteur n'est pas noyé d'emblée ; le détail reste accessible.

## Quand découper

- long bloc de normes à chaque fois
- plusieurs thèmes de référence mélangés
- le flux est coupé par le contexte

Pas obligatoire au début — **d'abord faire tourner, puis découper**.

## Malentendus

### 1. Pas seulement « déplacer du texte »

Garder le flux court et actionnable.

### 2. Pas « plus = mieux »

Tout dans `references/` = chaos déplacé.

### 3. SKILL.md peut rester minimal

Le flux d'exécution doit rester dans `SKILL.md`.

## Principes

- flux dans `SKILL.md`, références à la demande
- un fichier = un thème
- ne pas dupliquer les étapes déjà dans SKILL.md

## Règle simple

« **Selon quelle règle** » → `references/`  
« **Quelle étape d'abord** » → `SKILL.md`

`references/` raccourcit le principal ; le détail s'ouvre quand il faut.

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Le runtime lit skill et références à la demande ; organisation documentaire stable.
