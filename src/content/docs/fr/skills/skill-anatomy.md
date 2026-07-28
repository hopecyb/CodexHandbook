---
title: Anatomie d'un Skill
description: Rôles de SKILL.md, references/, templates/, scripts/ avec exemples.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Première impression d'un répertoire Skill : « je connais les dossiers, mais pourquoi cette organisation ? »

Cette page explique comment séparer **flux principal, longue doc, modèles, scripts** au lieu de tout mettre dans un fichier.

Plus lisible, modifiable et réutilisable.

# Anatomie d'un Skill

## Structure

```text
my-skill/
├── SKILL.md          # requis
├── scripts/          # optionnel : étapes déterministes
├── references/       # optionnel : longue doc
└── templates/        # optionnel : modèles de sortie
```

## Rôle de chaque couche

- `SKILL.md` : quoi, quand, quelles étapes
- `references/` : armoire à docs longues, pas tout dans le principal
- `templates/` : squelettes de sortie, moins d'improvisation
- `scripts/` : étapes déterministes en script, pas seulement en prose

Au début, un seul `SKILL.md` suffit.  
`references/`, `templates/`, `scripts/` quand la complexité grandit.

## Exemple minimal SKILL.md

```md
---
name: pr-review
description: Revoir le diff vs main, risques et lacunes de tests. Pour review, PR ou avant merge.
---

## Étapes
1. Diff vs main
2. Par fichier : logique, sécurité, perf, tests
3. Liste : bloquant / suggestion / nit
4. Pas de push ni merge auto
```

## Idées reçues

### 1. Tout créer d'un coup

Beaucoup de bons Skills n'ont qu'un `SKILL.md` au début.

### 2. references/ = plus de contenu

But : longues explications lues **à la demande**, pas dans le flux principal.

### 3. Éviter scripts/

Si une étape doit être stable et répétable, un script bat souvent la description en langage naturel.

## Tableau des répertoires

| Répertoire | Usage |
|---|---|
| `SKILL.md` | flux, déclenchement, interdictions |
| `references/` | longue doc, normes, API |
| `templates/` | format de sortie, squelette de rapport |
| `scripts/` | commandes et checks déterministes |

## Quand découper

1. le flux principal est-il illisible d'un coup ?
2. y a-t-il une grosse doc pas nécessaire à chaque fois ?
3. format de sortie toujours le même ?
4. une étape assez stable pour un script ?

Un ou deux « oui » → commencer à découper.

D'abord `SKILL.md`, puis références, modèles et scripts au besoin.

Exercice : [Créer votre premier Skill](/skills/create-your-first-skill/).

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Le runtime centre encore les skills sur `SKILL.md` avec scripts et références optionnels ; page sur les rôles des répertoires, sans entrée produit versionnée.
