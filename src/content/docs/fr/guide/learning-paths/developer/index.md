---
title: "Parcours développeur : lire le code, corriger, examiner et transmettre"
description: "Un bug de panier sert à pratiquer la lecture du code, les tests rouge/vert, la revue du diff et la transmission, avec trois modèles à remplir."
contentType: path
audiences: [developer]
level: beginner
outputs: [javascript, markdown, test-log]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "L’exercice de référence a été relancé : un des trois tests échoue au départ, les trois réussissent après la correction de référence, et les deux fichiers de test sont identiques. Les modèles ont été relus par l’auteur ; aucun lecteur indépendant n’a encore terminé le parcours."
  environment: "Node.js v22.16.0 / Darwin arm64 ; module node:test intégré, sans dépendance tierce."
  evidence:
    - label: "Résumé de l’exécution réelle"
      href: /downloads/developer-path/run-record.json
    - label: "Référence de revue de l’auteur et limites du périmètre"
      href: /downloads/developer-path/review-reference.md
sidebar:
  order: 20
prev:
  link: /fr/guide/learning-paths/
  label: "Choisir un parcours"
next:
  link: /fr/cases/use-cases/software-development/fix-a-bug-with-verification/
  label: "Commencer une correction de bug vérifiée"
locale: fr
source_locale: zh-CN
source_revision: 22d8bd3
translation_status: draft
translated_at: 2026-09-20
---
Utilisez un petit exercice de panier pour mener quatre activités : expliquer le code, corriger un défaut, examiner les différences et transmettre les preuves. Il n’est pas nécessaire de maîtriser d’abord tous les clients, réglages ou fonctions multi-agents.

Prérequis : savoir lire du JavaScript simple et lancer des tests Node.js dans un terminal local. L’environnement de référence est Node.js 22.16.0, sans dépendance tierce. Utilisez la CLI, un IDE ou un autre client ayant accès aux fichiers locaux et au terminal ; c’est Node.js qui détermine le comportement des tests.

## Préparer le code et le dossier de preuves

Utilisez `examples/complete-workflows/developer/verified-bug-fix/` dans le [dépôt source du manuel](https://github.com/hopecyb/CodexHandbook). Lisez d’abord `brief.md` et `README.md`, sans consulter `solution/`. Les étapes détaillées figurent dans [Corriger un bug avec vérification](/fr/cases/use-cases/software-development/fix-a-bug-with-verification/).

Dans le dossier de l’exercice :

```sh
# work/ ne doit pas encore exister ; si vous avez déjà un exercice, choisissez un autre nom sans l’écraser.
cp -R starter work
mkdir -p evidence
```

Corrigez dans `work/`. Conservez `starter/` comme état initial en échec et `solution/` comme solution de référence. Enregistrez les modèles ci-dessous dans `evidence/`. Les modèles téléchargeables ne contiennent pas tout le code : utilisez-les avec l’exercice du dépôt.

| Étape | Prérequis | Production | Critère de réussite |
|---|---|---|---|
| 1. Lire le code | `brief.md` et `starter/` | `code-map.md` | Entrée, parcours des données, échec et cause étayés par des fichiers |
| 2. Corriger et vérifier | Cause et tests inchangés | `work/cart.js`, `red.txt`, `green.txt` | Reproduire d’abord l’échec, puis réussir les mêmes tests |
| 3. Examiner le diff | Modification et deux sorties de tests | `review.md`, diff du code | Attentes et API inchangées, aucun changement étranger |
| 4. Transmettre | Preuves des trois premières étapes | `handoff.md` | Le successeur trouve les fichiers actuels et relance l’étape suivante |

## 1. Lire le code et créer une carte vérifiable

[Téléchargez le modèle de lecture du code](/downloads/developer-path/code-map-template.md). Demandez à Codex de lire `brief.md`, `starter/cart.js` et `starter/cart.test.js`, puis d’expliquer en lecture seule le point d’entrée, le parcours des données, l’entrée déclenchante, les valeurs réelle et attendue, la ligne à l’origine du défaut et les limites du périmètre.

Consignez le résultat dans `evidence/code-map.md`. L’exercice ne compte que deux fichiers principaux ; un diagramme d’architecture complexe n’est pas nécessaire. Pour terminer, expliquez que `10` signifie dix pour cent, pourquoi le code fautif transforme un sous-total de 40 en total de -360 et pourquoi le résultat attendu est 36.

Consultez au besoin la [référence de lecture de l’auteur](/downloads/developer-path/code-map-reference.md), mais vérifiez vos conclusions dans le code réel. Ne modifiez l’implémentation qu’après cela.

## 2. Conserver le rouge, puis apporter la correction minimale

Exécutez les commandes suivantes depuis `verified-bug-fix/` :

```sh
node --test work/cart.test.js > evidence/red.txt 2>&1
```

Le code de sortie attendu est 1 : un test sur trois échoue. Ouvrez `evidence/red.txt` et vérifiez que le test de réduction affiche -360 en valeur réelle et 36 en valeur attendue. Si tout réussit, vérifiez que vous n’utilisez pas la solution de référence ou un fichier déjà modifié ; ne supposez pas avoir reproduit l’échec.

Vous pouvez donner directement ces limites à Codex :

```text
À partir de brief.md et evidence/code-map.md, corrige uniquement la conversion du pourcentage dans work/cart.js.
Conserve la signature de fonction et les assertions de work/cart.test.js. N’ajoute aucune dépendance et ne refactorise pas.
Exécute ensuite node --test work/cart.test.js et enregistre la vraie sortie dans evidence/green.txt.
Si le résultat est inattendu, conserve la preuve de l’échec et cherche la cause ; ne modifie pas les assertions pour les adapter au code.
Fournis un résumé des modifications et des résultats des tests. Ne crée pas de commit et ne pousse rien.
```

La réussite exige que les trois tests d’origine passent avec un code de sortie 0 et que le changement se limite à la cause. Une commande de test en échec peut quand même produire un journal : la présence de `green.txt` ne prouve pas la réussite.

## 3. Examiner le diff et les oublis

[Téléchargez le modèle de revue](/downloads/developer-path/review-template.md) et indiquez la vraie comparaison : le `starter/` conservé face à votre `work/`, pas `main` par défaut. La présence ou non de modifications non commitées dans le dépôt n’entre pas en jeu.

```sh
diff -u starter/cart.js work/cart.js
diff -u starter/cart.test.js work/cart.test.js
```

La première commande doit montrer la conversion du pourcentage ; son code de sortie 1 signifie qu’il existe une différence, pas que la commande a échoué. La seconde ne doit rien afficher et doit sortir avec 0. Demandez à Codex d’examiner en lecture seule les vrais diffs et journaux rouge/vert, puis inscrivez constats, preuves, points non couverts et décisions dans `evidence/review.md`.

Pour terminer, vérifiez que les tests n’ont pas été assouplis, que l’API reste identique et qu’aucune dépendance ou modification sans rapport n’a été ajoutée. La précision monétaire, les taxes et les entrées invalides ne sont pas couvertes ; trois tests réussis ne prouvent pas la sûreté en production. Consultez la [référence de revue de l’auteur](/downloads/developer-path/review-reference.md).

## 4. Rédiger une transmission, puis reprendre depuis les fichiers

[Téléchargez le modèle de transmission](/downloads/developer-path/handoff-template.md). Dans `evidence/handoff.md`, notez le dossier actuel, les fichiers modifiés, les contraintes encore valables, les chemins des preuves, la prochaine commande et le résultat attendu. Dans un vrai projet Git, ajoutez la branche, le commit et l’état de l’arbre de travail.

Une tâche de reprise en lecture seule peut être formulée ainsi :

```text
Lis evidence/handoff.md, puis vérifie d’abord que les fichiers actuels de work/ correspondent à la description transmise.
Depuis la racine de l’exercice, exécute node --test work/cart.test.js et note le vrai code de sortie et son résumé.
Compare le code et les tests de work avec starter. Si l’état diffère, explique-le ; ne réutilise pas un ancien résultat vert.
Ne modifie pas le code, ne crée pas de commit et ne pousse rien.
```

Exécutez-la dans une nouvelle tâche ou demandez à un collaborateur de la vérifier. La rouvrir vous-même n’est qu’un exercice de reprise, pas une revue humaine indépendante. Pour la forme, voir le [journal de transmission de l’auteur](/downloads/developer-path/handoff-reference.md).

La transmission est réussie si ce fichier suffit à retrouver le code, les tests et les limites, puis à exécuter le résultat actuel. Si cette exécution n’a pas eu lieu, laissez « en attente de vérification après transmission » dans le journal.

## Où revenir en cas de problème

- Fichier introuvable : vérifiez le dossier du terminal et la présence de `work/`, puis revenez à la préparation.
- Pas de résultat rouge : vérifiez l’état initial et les tests ; le vert de la solution de référence ne reproduit pas l’échec.
- Tests réussis uniquement après modification des tests : restaurez les assertions d’origine et revenez à l’analyse de la cause.
- Modifications sans rapport : conservez le diff, réduisez la correction et relancez les tests.
- Transmission non conforme aux fichiers : fiez-vous aux fichiers actuels, mettez le journal à jour, puis continuez.

Dans un vrai projet, ajoutez à cette structure de preuves le lint, la vérification des types et les tests complets requis par le dépôt. Déterminez leur nécessité et leurs commandes dans les consignes réelles du projet. Cet exercice n’inclut pas ces vérifications supplémentaires : n’inventez pas de résultats réussis.
