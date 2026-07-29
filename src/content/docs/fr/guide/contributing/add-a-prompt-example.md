---
title: Ajouter un exemple de Prompt
description: Soumettre des Prompts reproductibles à examples/prompts avec métadonnées et critères d'acceptation.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Les exemples de Prompt vivent à la racine du dépôt [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts), liés depuis les pages du handbook. Spécification de design : [`docs/planning/examples-system.md`](/docs/planning/examples-system.md).

## Ce que cette page couvre

Blocages courants :

- Ce qui rend un Prompt « digne d'inclusion »
- Quel format permet à d'autres de le réutiliser

Cette page explique comment soumettre quelque chose que **d'autres peuvent essayer, apprendre et reproduire**.

## Critères d'inclusion

Nous collectons des exemples reproductibles avec Contexte, limites et critères d'acceptation — pas des snippets d'inspiration.

Un exemple solide répond à :

- Quand l'utiliser
- Exactement quoi dire
- Comment juger le succès ensuite

Les one-liners astucieux sans prérequis ou Vérification sont des notes — pas des exemples.

## Nommage des fichiers

```text
examples/prompts/<category>/<slug>.md
```

Exemples de `category` : `development`, `research`, `meta-workflows`, `team`.

## Métadonnées requises (frontmatter YAML)

```yaml
---
id: prompt.fix-bug-with-tests
title: Fix Bug and Add Tests
content_type: prompt
audience: [beginner, developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, file-editing, testing]
status: draft
last_verified: YYYY-MM-DD
---
```

## Sections de corps requises

1. **Cas d'usage**
2. **Prérequis** (permissions, branche, fichiers de Contexte)
3. **Prompt recommandé** (complet, prêt à copier-coller)
4. **Critères d'acceptation** (checklist, objectivement vérifiables)
5. **Modes d'échec courants**
6. **Pages handbook associées** (liens vers `src/content/docs/`)

Optionnel : variante minimale, décomposition pédagogique, variables remplaçables.

## Idées reçues courantes

### Ne pas enfouir le Prompt

Le contexte et la théorie sont bien — mais mettre le **Prompt copier-coller** en premier, puis prérequis et échecs, puis explication.

### Utilisé une fois ≠ exemple complet

Les lecteurs ne partagent pas vos hypothèses implicites. Indiquer :

- Quel point d'entrée produit
- Fichiers, captures ou Contexte requis
- Si éditions, commandes ou réseau sont supposés autorisés

### Pas de vrais secrets dans les exemples

Les vrais tokens, comptes, URLs internes ou données client n'ont pas leur place dans un repo public.

Enseigner la méthode — pas votre environnement de production.

## Exemple de critères d'acceptation

```markdown
## Critères d'acceptation

- [ ] Le test qui échouait passe maintenant
- [ ] La suite de tests convenue passe
- [ ] Le diff ne touche que les fichiers liés à la Tâche
- [ ] Pas de `git push` exécuté
```

## Barre de qualité

- Objectif clair et définition de terminé
- Limites de permission et sécurité énoncées
- Pas de vraies clés ou PII
- Statut `verified` nécessite [vérification indépendante](/guide/contributing/verify-technical-content/)

## Flux de soumission

1. Identifier la classe de Tâche réelle que cela résout
2. Écrire un Prompt copier-coller
3. Indiquer les prérequis et limites minimums
4. Définir ce que le succès ressemble
5. Vérifier les secrets et le répertoire correct

## Checklist PR

- [ ] Nouveau chemin de fichier indexé dans `examples/README.md` si l'index est maintenu
- [ ] Au moins une page cas ou workflow lie l'exemple (optionnel mais recommandé)

Un bon exemple de Prompt permet à quelqu'un de reproduire et obtenir un résultat similaire.

---

**Statut :** vérifié  
**Base de vérification :** Vérifié croisé layout `examples/` actuel, frontmatter d'exemple, indexation et flux de contribution ; aligné avec les patterns de liens cas/workflow — pas le comportement UI produit volatil.  
**Dernière vérification :** 2026-07-26
