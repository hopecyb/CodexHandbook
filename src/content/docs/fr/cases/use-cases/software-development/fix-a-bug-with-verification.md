---
title: "Cas pratique : corriger un bug avec vérification"
description: Utilisez un bug exécutable de calcul de remise pour reproduire le rouge, localiser la cause racine, effectuer la correction minimale, vérifier le vert, lancer la régression et réviser le diff.
locale: fr
source_locale: zh-CN
source_revision: 91d8575
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Il ne s'agit pas d'un modèle de prompt dans lequel il suffirait de remplacer des noms de fichiers. Vous allez exécuter un véritable code de départ, observer l'échec d'un test, puis examiner comment la correction de référence fait réussir la même suite.

## Métadonnées

| Champ | Valeur |
|---|---|
| Public | Développeurs |
| Client | CLI ou IDE avec un dépôt local |
| Durée estimée | 25 à 45 minutes |
| Prérequis | Savoir exécuter une commande Node.js et lire du JavaScript simple |
| Dépendance | Module intégré `node:test` ; aucun paquet tiers |
| Vérifié le | 2026-08-25 |

## 1. Objectif et contexte

**Contexte métier :** `calculateTotal` reçoit un pourcentage de remise. Sans remise, le résultat est correct. En revanche, lorsque `10` signifie 10 %, la fonction traite cette valeur comme un ratio à multiplier directement et produit un total négatif.

**Objectif :** localiser l'erreur de calcul, appliquer la correction minimale et prouver que les mêmes tests passent du rouge au vert.

**Critères de réussite :**

- La suite de départ présente de façon fiable un échec : 36 attendu, -360 obtenu.
- Les trois tests réussissent après la correction.
- Seule la conversion du pourcentage change ; l'API du panier n'est pas réécrite.
- Vous savez expliquer pourquoi le vert après correction doit être conservé avec le rouge avant correction.

**Hors périmètre :** bibliothèques de précision monétaire, taxes, conversion de devises, mises à niveau et interface utilisateur.

![Flux de correction de bug avec vérification](/diagrams/verified-bug-fix-workflow-fr.svg)

Les deux chemins de retour sont essentiels : l'échec d'un test concerné ramène à la correction minimale ; l'échec de la régression ou de la révision du diff ramène à l'analyse de la cause racine. Ne supprimez jamais une assertion et n'élargissez jamais les modifications uniquement pour obtenir le vert.

## 2. Préparer le matériel

```text
examples/complete-workflows/developer/verified-bug-fix/
├── brief.md
├── starter/
│   ├── cart.js
│   └── cart.test.js
├── prompts/
│   ├── 01-explore.md
│   ├── 02-fix-and-verify.md
│   └── 03-review.md
├── solution/
│   ├── cart.js
│   └── cart.test.js
└── validation.md
```

`starter/` contient volontairement le bug ; `solution/` est une référence exécutable indépendante. Ne vous exercez pas directement sur la solution.

## 3. Reproduire le rouge

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js
```

Résultat attendu : code de sortie non nul et un échec sur trois tests. La preuve principale ressemble à ceci :

```text
Expected values to be strictly equal:

-360 !== 36
```

Si le test n'échoue pas, arrêtez-vous. Vérifiez le chemin `starter/`, la version de Node.js et l'éventuelle modification préalable des fichiers. Sans rouge stable, vous ne disposez d'aucun état de référence pour le problème initial.

## 4. Explorer en lecture seule

### Exploration

```text
Ne modifie aucun fichier. Lis :
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.js
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

En six points au maximum, indique :
1. l'entrée qui déclenche l'échec ;
2. les valeurs attendue et obtenue ;
3. la différence entre pourcentage et ratio dans la formule ;
4. l'emplacement exact de la correction minimale ;
5. le comportement public qui doit rester inchangé ;
6. les commandes de vérification à exécuter après la correction.
```

Une explication correcte indique que l'appelant transmet `10` pour représenter 10 %, mais que l'implémentation calcule `subtotal * 10` sans diviser par `100`.

## 5. Planifier et effectuer la correction minimale

```text
Modifie uniquement la conversion du pourcentage dans starter/cart.js.
Ne change ni le nom de la fonction, ni ses paramètres, ni les assertions,
ni la structure des fichiers, et n'ajoute aucune dépendance.

Ensuite :
1. exécute starter/cart.test.js ;
2. affiche le résumé réel des tests ;
3. explique la ligne modifiée ;
4. ne crée aucun commit et ne pousse rien.
```

Le cœur de la correction est :

```js
const discount = subtotal * (discountPercent / 100);
```

Remplacer la valeur attendue `36` par `-360` ne ferait que réécrire l'attente ; la règle métier resterait incorrecte.

## 6. Vérifier le vert

Pour conserver le code de départ intact, exécutez la solution de référence :

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

Résultat attendu : les trois tests réussissent et le code de sortie vaut zéro.

Conservez au minimum les éléments suivants :

| Preuve | Question traitée |
|---|---|
| Commande en échec avant correction | Le problème initial est-il reproductible ? |
| Assertion en échec | Le test couvre-t-il réellement le bug ? |
| Diff du code | La modification touche-t-elle uniquement la cause ? |
| Test concerné après correction | Le même comportement est-il maintenant correct ? |
| Tests plus larges | Un comportement voisin a-t-il régressé ? |

Cet exercice ne contient qu'une suite. Dans un dépôt réel, exécutez également le lint, les contrôles de types et la suite complète indiqués dans `AGENTS.md`.

## 7. Réviser

```text
Révise cette correction sans modifier de fichier. Commence par les constats :
- Convertit-elle réellement le pourcentage au lieu d'affaiblir les tests ?
- Modifie-t-elle la signature ou une logique sans rapport ?
- Le panier vide, l'absence de remise et la remise de 10 % sont-ils couverts ?
- Quels risques de précision monétaire restent hors périmètre ?
```

Vérifiez également qu'aucune dépendance, aucun journal de débogage, aucun formatage du fichier entier et aucune opération Git n'ont été ajoutés.

## 8. Échecs et récupération

| Problème | Réponse |
|---|---|
| Le code de départ ne produit pas d'échec | Exécuter `starter/cart.test.js` et restaurer le code de départ |
| Le vert apparaît après modification du test | Restaurer l'assertion ; modifier uniquement la conversion du pourcentage |
| Le test concerné échoue encore | Comparer les valeurs et l'emplacement de `/ 100` |
| La suite complète présente de nouveaux échecs | Revenir à la cause racine, au comportement public et au périmètre |
| Le test est flaky | Stabiliser l'environnement ; une seule exécution verte ne constitue pas une preuve |

## 9. Transposer le flux dans un dépôt réel

```text
Objectif : corriger [comportement incorrect observable].
Reproduction : [commande exacte] ; échec stable : [assertion].
Périmètre : uniquement [implémentation] et tests nécessaires ; aucun refactoring
ni mise à niveau.
Acceptation : tests initial et de limites réussis ; [commande complète] réussie ;
diff sans modification étrangère.
Autorisations : aucun push, aucune publication, aucune donnée de production ;
s'arrêter avant tout accès supplémentaire.
Localiser la cause racine et les risques en lecture seule ; attendre l'approbation
du plan avant de modifier.
```

## 10. Pérenniser le processus

- Ajoutez une règle dans `AGENTS.md` si cette catégorie de bugs se répète.
- Extrayez un Skill `regression-guard` qui exige les preuves du rouge, du vert et de la régression.
- Placez les tests de limites fréquents dans la CI plutôt que de les conserver uniquement dans les conversations.

## 11. Chapitres associés

- [Diagnostiquer avant de corriger](/fr/cases/workflows/diagnose-before-fixing/)
- [Parcours développeur](/fr/guide/learning-paths/developer/)
- [Exécuter les tests](/fr/guide/quality/run-tests/)
- [Réviser les diffs](/fr/guide/quality/review-diffs/)
- [Définir les critères de fin](/fr/prompts/define-done/)

---

**Statut :** verified
**Produits concernés :** CLI / IDE
**Base de vérification :** le code de départ a été vérifié avec un échec attendu sur trois tests ; les trois tests de la solution de référence réussissent. La chaîne de preuves suit le rouge, la cause racine, la correction minimale, le vert, la régression et la révision humaine.
**Dernière vérification :** 2026-08-25
