---
title: Objectifs, Contexte et actions
description: Décomposer une interaction réussie en objectif, contexte, actions et acceptation.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Une interaction Codex fiable comporte généralement quatre parties :

1. **Objectif** : ce qu'il faut livrer à la fin
2. **Contexte** : arrière-plan, fichiers, contraintes pertinents
3. **Actions** : étapes que Codex peut entreprendre (lire, modifier, exécuter)
4. **Acceptation** : ce que signifie « terminé » et comment vérifier

Les chapitres de prompting développent ces quatre éléments en cadre stable — voir [Anatomie d'une bonne Tâche](/prompts/task-anatomy/).

## Petit exemple

> Objectif : Corriger la hiérarchie des titres dans `notes.md`.  
> Contexte : Uniquement ce fichier ; conserver l'ordre des paragraphes existants.  
> Actions : Peut modifier ce fichier ; ne pas installer de dépendances.  
> Acceptation : Après ouverture du fichier, les titres vont de H1 à H3 sans niveau sauté.


---

**Statut :** review  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-25
