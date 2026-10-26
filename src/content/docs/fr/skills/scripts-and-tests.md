---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Le runtime autorise scripts et commandes déterministes dans les skills ; principe « action stable scriptée, flux contraint par Skill » aligné avec les capacités actuelles."
  checkedAt: "2026-07-26"
title: Scripts/ et tests
description: Scripts déterministes dans un Skill et validation de leur comportement.
locale: fr
source_locale: zh-CN
source_revision: '900e6e4'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
---

Au début, on place souvent tout dans `SKILL.md`, ce qui convient à un processus simple. Dès qu’une étape doit s’exécuter de façon **stable, répétable et vérifiable**, un script est plus fiable qu’une simple description.

Actions fixes → script ; jugement et collaboration → Skill.


Si une étape doit s'exécuter de façon déterministe (tests, diff, format), placez un script dans `scripts/` et documentez dans `SKILL.md` quand l'appeler.

## Exemple

```text
my-skill/
├── SKILL.md
└── scripts/
    └── run-checks.sh
```

## Quand envisager scripts/

- exécution identique à chaque fois
- le code de sortie compte
- la description en langage naturel serait lourde
- réutilisation future en CI ou autre outil

Ex. : lancer checks, générer diff, valider format, export rapport fixe.

## Tests suggérés

- exécution manuelle du script, codes de sortie et sortie
- déclenchement Skill bout en bout, appel script attendu
- équipe : CI ou pre-commit, script toujours valide

## Malentendus

### 1. scripts/ = complexité inutile

Un script peut **simplifier** une étape instable.

### 2. script local OK = Skill OK

Vérifier aussi :

- déclenchement correct par le Skill
- politique d'approbation
- environnement équipe / CI

### 3. tester le Skill = tester le script

Tester le script ne suffit pas : il vérifie une action, tandis que le Skill doit aussi être testé sur le moment et la manière de l’appeler, ainsi que sur la conformité du résultat.

## Ordre de validation

1. script seul
2. codes de sortie et messages clairs
3. flux complet via Skill
4. environnement réaliste

Cette séquence permet de distinguer un défaut du script d’une mauvaise intégration au Skill.

Actions répétables stables : ne pas compter sur le texte seul. Script d'abord, puis intégration Skill.

Les scripts héritent des approbations ; voir [Règles de commandes](/fr/guide/customization/rules/command-rules/) et [Sécurité des Skills](/fr/skills/security/).
