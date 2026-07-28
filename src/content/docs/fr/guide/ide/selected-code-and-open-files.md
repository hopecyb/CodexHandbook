---
title: Sélection et fichiers ouverts
description: Utiliser le code sélectionné et les fichiers ouverts pour cadrer précisément le périmètre de Tâche IDE.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

L'extension IDE excelle sur les modifications **petites et haute précision** : sélectionner du code, énoncer l'intention, Codex modifie le Contexte proche. Cette page montre comment sélection et fichiers ouverts resserrent le périmètre et évitent d'éditer au mauvais endroit.

La sélection dit à Codex : concentre-toi ici — n'élargis pas le périmètre de ton côté.

## Ce qui est couvert

- Sélection vs fichier entier vs chemin @ — quand utiliser quoi
- Organiser le Contexte pour des refactorisations multi-fichiers
- Réduire « il a changé plein de fichiers non liés »

## Trois façons de borner le périmètre

| Méthode | Quand | Exemple |
|---|---|---|
| **Sélection** | Fonction unique, composant, près de la stack trace | Sélectionner `parseUser()`, ajouter gestion null |
| **Fichiers ouverts** | Plusieurs endroits liés dans le fichier | Ouvrir `auth.ts` + `auth.test.ts` |
| **Chemin @** | Cross-répertoire, pas ouvert | `@src/api/client.ts` aligner types avec backend |

Concept plus profond : [Contexte de fichiers et dossiers](/guide/context/file-and-folder-context/)

## Approche minimum viable

1. Sélectionnez le **plus petit extrait pertinent** (souvent 10–80 lignes) ; énoncez objectif et [définition du terminé](/prompts/define-done/) dans le Prompt
2. Si les appelants comptent, ouvrez ou @ 1–2 fichiers en amont
3. Demandez de « modifier seulement les fichiers liés à X ; lister les fichiers avant d'éditer »
4. Acceptez le diff IDE bloc par bloc — pas tout accepter

## Tâches multi-fichiers

```text
Ouvrir : implémentation + tests + définitions de types
Sélection : optionnelle — partir de la fonction d'entrée
Prompt : limites de module, répertoires qui ne doivent pas changer
```

Grandes refactorisations : préférez [worktrees App de bureau](/guide/desktop-app/worktrees/) ou [mode planification](/guide/agent-work/planning/). L'IDE convient aux finitions et petits commits.

## Questions courantes

### 1. Dois-je toujours sélectionner ?

Non — mais si vous savez que la focalisation est une petite région, la sélection bat un vague « corrige cette fonction ».

### 2. Plus de lignes sélectionnées ≠ plus sûr

Trop large assouplit à nouveau le périmètre ; trop petit peut manquer le Contexte nécessaire. Visez « juste assez ».

### 3. Fichiers ouverts vs chemins @ ?

- **Fichiers ouverts** : montrer ce que vous regardez actuellement
- **Chemins @** : nommer explicitement les fichiers à inclure

La sélection et les fichiers ouverts existent pour éviter de traîner un périmètre non lié.

## Associer à la revue

Avant d'accepter, vérifiez [revoir les diffs](/guide/quality/review-diffs/) :

- Seuls les fichiers convenus ont changé ?
- Suppressions inattendues hors sélection ?
- Les tests couvrent les nouvelles branches ?

Page produit : [Revoir les changements IDE](/guide/ide/reviewing-changes/)

## Erreurs courantes

| Erreur | Conséquence |
|---|---|
| Sélectionner un fichier entier de 1000 lignes | Contexte gaspillé, modifications surdimensionnées |
| Zéro sélection, « optimise ça » | Le modèle élargit le périmètre |
| Tout accepter sans lire le diff | Dérive de style ou problèmes de sécurité |

## Références
- [Contraintes et limites](/prompts/constraints-and-boundaries/)
---

**Statut :** vérifié  
**Produits concernés :** IDE  
**Base de vérification :** Cette page décrit un contrôle de périmètre IDE stable : sélection, fichiers ouverts et chemins @ explicites — organisation générale du Contexte dans l'éditeur, sans lien avec un nom de bouton d'extension spécifique.  
**Dernière vérification :** 2026-07-26
