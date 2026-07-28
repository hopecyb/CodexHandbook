---
title: Travail piloté par la spécification
description: Rédiger d'abord une spécification vérifiable, puis faire implémenter Codex selon le plan — adapté aux livraisons à besoin clair.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Le **travail piloté par la spécification** consiste à préparer une courte spécification avant de modifier de nombreux fichiers — objectifs, périmètre, interfaces et critères d'acceptation. Cela peut suivre [Brainstormer avant de construire](/cases/workflows/brainstorm-before-building/), ou entrer directement dans l'[EPXV](/cases/workflows/explore-plan-execute-verify/) avec des besoins déjà clarifiés.

## Ce que couvre cette page

- Quel niveau de détail suffit pour la spécification
- Comment garder Codex aligné sur la spec sans dérive de périmètre
- Rapport entre spécification, description de PR et issue

## Modèle de spécification minimal viable

```markdown
## Objectif
Une phrase de valeur utilisateur

## Périmètre
- Inclus : …
- Exclu : …

## Interface / comportement
- Entrées / sorties / cas d'erreur

## Critères d'acceptation
- [ ] Éléments vérifiables automatiquement
- [ ] Éléments nécessitant une vérification humaine

## Contraintes
- Modules à ne pas modifier, performance, compatibilité
```

Placer le modèle dans `docs/specs/` du dépôt ou dans le corps d'une issue, et le référencer avec `@` dans les tâches.

## Flux de travail recommandé

```text
① Rédiger la spec (Codex peut aider ; l'humain révise)
② Confirmer la spec → répondre « exécuter selon la spec »
③ Exécuter étape par étape en regardant les critères d'acceptation
④ Toute modification de spec doit explicitement incrémenter la version ou le changelog
```

Exemple de prompt :

```text
Lisez @docs/specs/export-csv.md. Listez d'abord le plan d'implémentation et les risques par rapport à la spec ;
n'ajoutez pas de fonctionnalités absentes de la spec. Attendez ma confirmation avant d'écrire du code.
```

## Association avec le travail piloté par les tests

Les critères d'acceptation de la spec doivent être **testables** autant que possible ; écrire les tests d'abord quand c'est faisable — voir [Travail piloté par les tests](/cases/workflows/test-driven-work/).

## Erreurs courantes

- Spec aussi longue qu'un document de conception — les contraintes clés se perdent
- Le périmètre grossit discrètement pendant l'exécution sans mise à jour de la spec
- Critères d'acceptation vagues (« plus utilisable ») menant à des débats
- Spec en conflit avec les conventions d'architecture de `AGENTS.md`

## Limites de sécurité

- Appels d'API externes uniquement si la spec autorise explicitement l'implémentation liée au réseau
- Le traitement des champs PII doit être indiqué dans la spec

## Liste de contrôle d'acceptation

- [ ] Éléments hors périmètre explicitement exclus
- [ ] Au moins 3 critères d'acceptation vérifiables
- [ ] Confirmation humaine ou écrite avant l'exécution
- [ ] Modifications resynchronisées dans le fichier de spec

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les chapitres vérifiés sur le brainstorm, l'EPXV, le travail piloté par les tests et `AGENTS.md` ; le contenu se limite au mode stable « rédiger une spec vérifiable d'abord, puis exécuter selon la spec ».
