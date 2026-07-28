---
title: scripts/ et tests
description: Scripts déterministes dans un Skill et validation de leur comportement.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Au début, tout dans `SKILL.md` — OK pour un flux simple. Dès qu'une étape doit être **stable, répétable et vérifiable**, un script bat la prose.

Actions fixes → script ; jugement et collaboration → Skill.

# scripts/ et tests

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

Le script = une action ; le Skill = quand, comment, sortie attendue.

## Ordre de validation

1. script seul
2. codes de sortie et messages clairs
3. flux complet via Skill
4. environnement réaliste

Sépare « script cassé » et « intégration Skill incorrecte ».

Actions répétables stables : ne pas compter sur le texte seul. Script d'abord, puis intégration Skill.

Les scripts héritent des approbations ; voir [Règles de commandes](/guide/customization/rules/command-rules/) et [Sécurité des Skills](/skills/security/).

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Le runtime autorise scripts et commandes déterministes dans les skills ; principe « action stable scriptée, flux contraint par Skill » aligné avec les capacités actuelles.
