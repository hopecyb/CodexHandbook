---
title: Refactorisation de site de docs avec revue
description: "Cas : mise à jour en lot des liens et chapitres dans un projet Astro/Starlight — petits diffs, validation de build."
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ce cas illustre une tâche d'**ingénierie de contenu** : Markdown multi-fichiers, configuration de barre latérale, validation de build. La pile technique est proche de ce manuel, mais le scénario est transférable à tout site statique.

## Métadonnées

| Élément | Valeur |
|---|---|
| Domaine | Création de contenu / Ingénierie documentaire |
| Point d'entrée | CLI ou IDE |
| Risque | Moyen (nombreux liens et navigation) |
| Durée | 1–3 heures (selon l'échelle) |

Modèle : [Modèle de cas](/cases/use-cases/case-study-template/)

## Contexte

Après l'ajout d'un chapitre au site de documentation, il faut :

1. Mettre à jour les slugs de barre latérale dans `astro.config`
2. Corriger les liens relatifs dans le texte
3. `npm run build` sans erreur

Les slugs sont faciles à oublier manuellement ; l'agent convient pour **exécution par checklist + validation de build**.

## Préparation

- [ ] Branche git propre
- [ ] `npm run build` fonctionne en local
- [ ] Liste des nouveaux chemins de page et position cible dans la sidebar

## Prompt de tâche (exemple)

```text
Objectif : ajouter environment-variables.md à 12-reference et l'intégrer à la barre latérale et aux liens index.
Contraintes : ne modifier que src/content/docs et astro.config.mjs ; ne pas mettre à jour les dépendances.
Acceptation : npm run build réussit ; aucun lien mort.
Étapes : d'abord config, puis md, enfin mise à jour de 12-reference/index.md.
```

## Points d'exécution

- **Config avant contenu** : éviter les erreurs de slug manquant au build
- Commit par lots de 3–5 fichiers pour faciliter la revue
- Utiliser [Explorer—Planifier—Exécuter—Vérifier](/cases/workflows/explore-plan-execute-verify/)

## Contrôles

- [ ] Chaque slug de la barre latérale a un fichier correspondant
- [ ] Les liens internes suivent la convention de chemins relatifs
- [ ] Aucun avertissement Starlight dans les journaux de build (si l'équipe exige zéro avertissement)

## Reprise après échec

| Problème | Traitement |
|---|---|
| Erreur de slug sidebar | Consulter la doc astro, corriger le slug ou compléter le md |
| Lien mort | `grep` le chemin cible ; corriger le lien ou ajouter la page |
| OOM au build | Modifications par lots ; augmenter la mémoire Node en local |

## Rétrospective

- Au troisième « nouveau chapitre + sidebar » similaire, capitaliser en Skill
- Cocher les éléments terminés dans ROADMAP pour éviter le décalage doc/plan

## Sources de référence

- Flux réel d'itération documentaire M2 de ce dépôt
- Cas de maintenance documentaire codex.bozhouai.com (référence de structure)

---

**Statut :** verified  
**Produits concernés :** CLI / IDE  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les chapitres vérifiés sur les livrables de contenu, EPXV, validation de build et modèle de cas ; ce contenu se limite au cas stable « modifications par petits pas sur un site multi-fichiers, validation de build et reprise après échec ».
