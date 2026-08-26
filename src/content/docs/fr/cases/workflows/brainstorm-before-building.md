---
title: Brainstormer avant de construire
description: Exploration structurée pour converger vers une approche avant le code ou la rédaction longue — réduit les retours en arrière.
locale: fr
source_locale: zh-CN
source_revision: 9bf8989
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Brainstormer avant de construire** convient aux tâches où l'objectif est flou ou où plusieurs approches existent : nouvelles fonctionnalités, refontes, sujets de contenu, choix techniques. Cela se relie à la phase ① Explorer de [exploration—planification—exécution—vérification](/fr/cases/workflows/explore-plan-execute-verify/), mais met l'accent sur la **divergence et la convergence** plutôt que de lire immédiatement le code et modifier des fichiers.

## Ce que couvre cette page

- Quand le brainstorm vaut la peine vs aller directement à l'EPXV
- Comment borner la divergence et éviter les discussions vides
- Livrables : tableau d'options, enregistrement de décision, plan des prochaines étapes

## Public visé

| Scénario | Exemple |
|---|---|
| Produit / fonctionnalité | « Ajouter une exportation pour les utilisateurs — trois options d'UI » |
| Contenu | « À qui s'adresse ce tutoriel, comment le structurer » |
| Technique | « File d'attente ou cron pour les tâches planifiées » |

## Approche minimale viable

**Phase A — Diverger (limitée dans le temps)**

```text
Ne modifiez encore aucun fichier. Pour le besoin « export CSV », listez 3 chemins d'implémentation :
chacun avec avantages/inconvénients, modules concernés, effort estimé (S/M/L).
Ne choisissez pas l'approche finale.
```

**Phase B — Converger**

```text
À partir du tableau ci-dessus, recommandez 1 option par défaut et 1 alternative ;
indiquez 2 points de décision que je dois confirmer (format, permissions).
```

**Phase C — Entrer en planification**

Après confirmation, enchaîner avec le [travail piloté par la spécification](/fr/cases/workflows/specification-driven-work/) ou l'EPXV ② Planifier.

## Flux de travail recommandé

```text
Énoncer les contraintes (temps, pile technique, parties immuables)
    → Diverger sur 3–5 options (pas de code)
    → Classer par valeur / risque / coût
    → L'humain choisit la direction ou demande plus d'informations
    → Plan écrit + exécution
```

Fixer une **limite de temps** : par exemple, terminer la divergence en 15 minutes pour éviter la dérive.

## Erreurs courantes

- Traiter le brainstorm comme de l'exécution — le modèle commence à modifier des fichiers — utiliser la contrainte « ne pas modifier pour l'instant »
- Trop d'options sans classement — fatigue décisionnelle
- Options rejetées non consignées — même débat deux semaines plus tard
- Contraintes ignorées — plan élégant mais irréalisable

## Limites de sécurité

- Le brainstorm peut encore lire des fichiers sensibles — utiliser `@` pour cadrer précisément les références
- Les options de conformité ou de confidentialité nécessitent une revue juridique/sécurité humaine — pas de décision du seul modèle

## Liste de contrôle d'acceptation

- [ ] Au moins 2 options viables avec une recommandation claire
- [ ] Points de décision marqués, en attente de confirmation humaine
- [ ] Aucune écriture non autorisée dans le dépôt
- [ ] L'étape suivante peut s'enchaîner avec un plan écrit

## Chapitres connexes

- [Exploration—planification—exécution—vérification](/fr/cases/workflows/explore-plan-execute-verify/)
- [Travail piloté par la spécification](/fr/cases/workflows/specification-driven-work/)
- [Demander un plan](/fr/prompts/ask-for-a-plan/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les chapitres vérifiés sur l'EPXV, la planification, le travail piloté par la spécification et les prompts ; cette page décrit uniquement la méthode stable « diverger d'abord, converger, puis planifier », sans dépendre des détails d'entrée produit.
