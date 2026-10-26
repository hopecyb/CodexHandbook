---
title: 'Exemple : Skill de revue avec un périmètre de diff explicite'
description: Téléchargez le pack scoped-review, distinguez les revues des modifications indexées, non indexées et des commits de branche, puis reproduisez un piège Git.
contentType: skill
audiences:
- developer
level: intermediate
outputs:
- markdown
- json
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Sept contrôles de régression du collecteur de diffs et les vérifications de structure du Skill ont réussi. Les exemples de déclenchement et conclusions de revue ont été conçus par l'auteur ; aucun essai de routage automatique entre modèles ni mesure du taux de détection des défauts n'a été réalisé.
  environment: Python 3.12.11 / Git / Darwin arm64 ; dépôts synthétiques temporaires, sans dépendance tierce.
  evidence:
  - label: Portée et limites de l'exécution réelle
    href: /downloads/skills/scoped-review/validation/record.md
assets:
- path: /downloads/skills/scoped-review/scoped-review-1.0.0.zip
  purpose: Skill, collecteur, guide des périmètres, entrées synthétiques, revue de référence et tests de régression
  license: CC0-1.0
  version: 1.0.0
locale: fr
source_locale: zh-CN
source_revision: "e29d1b3"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: 2026-10-26
---

Avant une revue, définissez ce qui sera comparé. Ce Skill évite de confondre « modifications locales non commitées » avec « commits par rapport à main », ou de manquer une erreur indexée parce que l'arbre de travail semble correct.

[Télécharger scoped-review v1.0.0](/downloads/skills/scoped-review/scoped-review-1.0.0.zip) · [Voir SKILL.md](/downloads/skills/scoped-review/SKILL.md) · [Guide d'installation et d'utilisation](/downloads/skills/scoped-review/README.md)

## Ce qu'il peut faire

| Demande | Périmètre collecté | Exclusion |
|---|---|---|
| Examiner seulement les modifications indexées | HEAD → index | Contenu non indexé |
| Examiner seulement les modifications non indexées | Index → arbre de travail | Patch indexé |
| Examiner les modifications locales non commitées | Conserver les deux patchs séparément ; lister les nouveaux fichiers | Lire séparément le contenu des nouveaux fichiers |
| Examiner les commits par rapport à une branche nommée | Base de fusion unique → HEAD | Contenu local non commité |

Le Skill ne choisit pas `main` par défaut. Une base absente provoque une erreur au lieu de modifier discrètement le périmètre. Le collecteur fournit des preuves ; juger les défauts exige encore de lire le code et les tests pertinents.

## Installer et lancer une première fois

Il vous faut Python 3.10+, Git et un dépôt local d'entraînement comportant déjà un commit. Placez le dossier `scoped-review/` extrait dans `.agents/skills/` du projet cible et vérifiez que l'entrée est `.agents/skills/scoped-review/SKILL.md`. S'il existe déjà un Skill du même nom, comparez-les et ne l’écrasez pas.

Pour la découverte et les entrées des Skills locaux, référez-vous au [guide officiel](https://learn.chatgpt.com/docs/build-skills). Vérifiez qu'il est disponible après installation, puis invoquez-le explicitement :

```text
$scoped-review Examine les modifications de code actuellement non commitées dans ce dépôt d'entraînement.
Ne modifie aucun fichier. Présente d'abord les constats, puis précise la couverture
des fichiers indexés, non indexés et nouveaux.
```

Ce pack pédagogique ne s'installe pas automatiquement dans votre configuration personnelle. Vous pouvez aussi exécuter directement le script fourni pour observer le périmètre collecté.

## Reproduire un cas facile à manquer

L'entrée synthétique se trouve dans `fixtures/scenario.json` :

1. La formule de remise de base est correcte.
2. Indexez une formule erronée : `amount * (1 - percent)`.
3. Rétablissez la bonne formule dans l'arbre de travail : `amount * (1 - percent / 100)`, sans indexer cette correction.

À ce stade, `git diff HEAD` peut n'afficher aucun changement, alors qu'un commit de l'index introduirait l'erreur. Pour `amount=40, percent=10`, la version indexée produit -360 au lieu de 36.

Une bonne revue signale que la version indexée est fausse et que le patch non indexé la corrige. La [référence complète de l'auteur](/downloads/skills/scoped-review/fixtures/expected-review.md) explique aussi pourquoi le mode branche ne doit pas être mêlé à ce problème local ; ce n'est pas une sortie réelle de modèle.

## Exécuter les vérifications fournies

Dans le dossier Skill extrait, exécutez :

```sh
python3 validation/test_scopes.py
```

Sept tests dans des dépôts Git temporaires vérifient les périmètres, la régression de revue manquée, le rejet d'une base invalide, la liste des nouveaux fichiers et l'absence de modification du dépôt examiné. Une exécution réussie sort avec le code 0. Ces tests n'écrivent pas dans votre vrai projet.

Pour utiliser le collecteur sur un dépôt :

```sh
python3 scripts/collect_diff.py --repo /path/to/your/repo --mode working-tree
```

Remplacez le chemin par celui d'un dépôt que vous êtes autorisé à examiner. Le mode branche exige aussi `--base`. La sortie JSON peut contenir du code privé et n'est pas téléversée automatiquement. Les commandes complètes figurent dans le [guide des périmètres](/downloads/skills/scoped-review/references/scopes.md).

## Quand ne pas le déclencher

La révision d'un article ou le développement d'une fonctionnalité ne relèvent pas de ce Skill. Face à « fais une revue », utilisez le contexte pour définir le périmètre ; demandez une précision s'il reste incertain. Les [cas de déclenchement](/downloads/skills/scoped-review/fixtures/trigger-cases.json) du pack décrivent sept demandes attendues. Aucun routage automatique réel n'a été mesuré.

## Critères de fin et limites

- Le rapport précise le snapshot, la base et les fichiers réellement examinés.
- Les constats donnent emplacement, condition de déclenchement, effet et preuves ; une préférence de style n'est pas présentée comme un blocage.
- Le contenu des fichiers non suivis pertinents a été examiné ou clairement marqué comme non examiné. Les fichiers binaires, fichiers ignorés et sous-modules ne sont pas présentés comme couverts.
- Indiquez les vérifications effectuées et non effectuées. L'absence de constats ne garantit pas l'absence de défauts.
- La revue se termine par un rapport ; elle ne modifie aucun fichier, ne crée aucun commit et ne pousse rien automatiquement.

Utilisez les modèles de revue et de passation du [parcours développeur](/fr/guide/learning-paths/developer/) pour conserver le résultat. L'ancien squelette court `pr-review` reste utile pour comprendre la structure ; ce pack porte un autre nom pour ne pas écraser une version personnelle.
