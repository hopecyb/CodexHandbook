---
title: Première tâche
description: Réalisez une petite modification avec un prompt clair et apprenez à vérifier le résultat.
locale: fr
source_locale: zh-CN
source_revision: a9bcbce
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Première tâche

L'exemple ci-dessous suppose l'**application de bureau** par défaut ; le CLI et l'IDE acceptent le même prompt.

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Débutants |
| Client | Application de bureau (recommandé) |
| Durée estimée | 15–20 minutes |

## 1. Objectif et contexte

**Objectif :** Effectuer une modification de fichier sûre dans un projet d'exercice.

**Critères de succès :** Seul le fichier indiqué est modifié, le résultat correspond à la description d'acceptation, et vous comprenez le diff.

## 2. Préparation

- Client installé et connecté
- Projet d'exercice créé (contenant `hello.md` ou un fichier similaire)

## 3. Prompt recommandé

```text
Objectif : ajouter à la fin de hello.md une section « Exercice du jour » avec une liste de trois points clés.
Contraintes : ne modifier que hello.md ; ne pas supprimer le contenu existant ; ne pas lancer de requêtes réseau.
Acceptation : le titre et exactement trois éléments de liste apparaissent à la fin du fichier.
Si des informations manquent, demandez-moi d'abord, ne devinez pas.
```

## 4. Exécution et vérification

1. Demandez d'abord un plan court (ou demandez-le activement)
2. Lors de l'approbation de l'écriture de fichier, confirmez que le chemin est correct
3. Une fois terminé, vérifiez le diff point par point selon les critères d'acceptation

## 5. Étapes suivantes

- [Bases des prompts](/fr/prompts/basics/)
- [Vérification](/fr/guide/verification/)
- [Commencer ici](/fr/guide/start-here/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page est un exercice d'introduction à faible risque du manuel : modification limitée à un seul fichier, interdiction du réseau, lecture du diff et vérification point par point selon les critères d'acceptation ; les chapitres préalables (installation, projet d'exercice, vérification) ont été recoupés, le contenu ne dépend pas de détails de version produit.
