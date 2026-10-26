---
title: Ajouter un exemple de prompt
description: Soumettre des prompts reproductibles à examples/prompts avec métadonnées et critères d'acceptation.
locale: fr
source_locale: zh-CN
source_revision: '15dabd2'
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: '2026-10-26'
sidebar:
  order: 20
legacyVerification:
  status: verified
  basis: Recoupement du répertoire actuel `examples/`, du frontmatter des exemples, de leur indexation et du processus de contribution. Les exigences correspondent aux liens des cas et workflows existants et ne dépendent pas du comportement changeant d’un client Codex.
  checkedAt: '2026-07-26'
---

Les exemples de prompt vivent à la racine du dépôt [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts), liés depuis les pages du manuel. Spécification de design : [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md).

## Ce que cette page couvre

Blocages courants :

- Ce qui rend un prompt « digne d'inclusion »
- Quel format permet à d'autres de le réutiliser

Cette page explique comment soumettre quelque chose que **d'autres peuvent essayer, apprendre et reproduire**.

## Critères d'inclusion

Nous collectons des exemples reproductibles avec contexte, limites et critères d'acceptation — pas des snippets d'inspiration.

Un exemple solide répond à :

- Quand l'utiliser
- Exactement quoi dire
- Comment juger le succès ensuite

Les formules astucieuses en une ligne sans prérequis ou vérification sont des notes — pas des exemples.

## Nommage des fichiers

```text
examples/prompts/<category>/<slug>.md
```

Exemples de `category` : `development`, `research`, `meta-workflows`, `team`.

## Métadonnées requises (frontmatter YAML)

```yaml
---
id: prompt.fix-bug-with-tests
title: Corriger un bug et ajouter des tests
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
2. **Prérequis** (permissions, branche, fichiers de contexte)
3. **prompt recommandé** (complet, prêt à copier-coller)
4. **Critères d'acceptation** (checklist, objectivement vérifiables)
5. **Modes d'échec courants**
6. **Pages manuel associées** (liens vers `src/content/docs/`)

Optionnel : variante minimale, décomposition pédagogique, variables remplaçables.

## Idées reçues courantes

### Ne pas enfouir le prompt

Le contexte et la théorie sont bien — mais mettre le **prompt copier-coller** en premier, puis prérequis et échecs, puis explication.

### Utilisé une fois ≠ exemple complet

Les lecteurs ne partagent pas vos hypothèses implicites. Indiquer :

- Quel point d'entrée produit
- Fichiers, captures ou contexte requis
- Si éditions, commandes ou réseau sont supposés autorisés

### Pas de vrais secrets dans les exemples

Les vrais tokens, comptes, URLs internes ou données client n'ont pas leur place dans un repo public.

Enseigner la méthode — pas votre environnement de production.

## Exemple de critères d'acceptation

```markdown
## Critères d'acceptation

- [ ] Le test qui échouait passe maintenant
- [ ] La suite de tests convenue passe
- [ ] Le diff ne touche que les fichiers liés à la tâche
- [ ] Pas de `git push` exécuté
```

## Barre de qualité

- Objectif clair et définition de terminé
- Limites de permission et sécurité énoncées
- Pas de vraies clés ou PII
- Statut `verified` nécessite [vérification indépendante](/fr/guide/contributing/verify-technical-content/)

## Flux de soumission

1. Identifier la classe de tâche réelle que cela résout
2. Écrire un prompt copier-coller
3. Indiquer les prérequis et limites minimums
4. Définir les critères de réussite
5. Vérifier les secrets et le répertoire correct

## Checklist PR

- [ ] Nouveau chemin de fichier indexé dans `examples/README.md` si l'index est maintenu
- [ ] Au moins une page cas ou workflow lie l'exemple (optionnel mais recommandé)

Un bon exemple de prompt permet à quelqu'un de reproduire et obtenir un résultat similaire.
