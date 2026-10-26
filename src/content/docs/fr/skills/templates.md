---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Le runtime permet de guider l'usage de fichiers joints dans un skill ; page sur les modèles de sortie, sans UI ou installation versionnées."
  checkedAt: "2026-07-26"
title: Répertoire templates/
description: Modèles de sortie et squelettes de rapport dans un Skill.
locale: fr
source_locale: zh-CN
source_revision: '82a9e01'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
---

`templates/` ne sert pas qu'à « gagner du temps de mise en page » — il **stabilise** la sortie du Skill.

`references/` définit les informations à consulter ; `templates/` définit la forme du résultat. Placez-y les formats qui doivent rester stables et faciles à vérifier.


Formats réutilisés à l'exécution : rapport de revue, squelette changelog, tableau comparatif.

## Exemple

```text
review-skill/
├── SKILL.md
└── templates/
    └── review-report.md
```

Dans `SKILL.md` : « Produis la revue selon la structure de templates/review-report.md. »

## Rôles

- `SKILL.md` → processus
- `templates/` → forme du résultat

- Skill = **comment**
- template = **comment présenter**

Réduit :

- sorties différentes à chaque fois
- info présente mais illisible ou difficile à comparer

## Quand l'utiliser

Si vous voulez toujours la même forme :

- rapport de revue
- changelog
- tableau de recherche
- checklist de release

Pas obligatoire au premier Skill.
Dès que vous répétez « sors selon cette structure », extrayez un template.

## Idées reçues

### 1. template = cosmétique

Un modèle ne sert pas seulement à améliorer l’apparence : il stabilise les résultats et facilite leur comparaison et leur vérification.

### 2. template remplace les consignes dans SKILL.md

Non : `SKILL.md` doit dire quand utiliser le template et quels champs sont obligatoires.

### 3. tout mérite un template

Si peu de répétition ou structure très variable, un template peut gêner.

## Seuil

Deux ou trois fois « selon cette structure » → `templates/`.

Valeur centrale : **structure de sortie stable** pour la réutilisation.
