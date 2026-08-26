---
title: Reprise après échec
description: Quand une tâche dévie, les tests passent au rouge ou le contexte s'épuise — comment revenir en arrière en sécurité et continuer.
locale: fr
source_locale: zh-CN
source_revision: a03b8c5
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

La **reprise après échec** couvre comment stabiliser la situation après qu'une tâche a dévié ou s'est interrompue. Ce chapitre propose des étapes reproductibles **détecter → limiter les dégâts → récupérer → tirer les leçons**, à associer à [Annuler et récupérer](/fr/guide/getting-started/undo-and-recover/) et à la [Gestion des tâches longues](/fr/cases/workflows/long-running-task-management/).

## Ce que couvre cette page

- Quand faire `git stash`, annuler des commits ou ouvrir un nouveau fil
- Comment empaqueter les informations d'échec dans le prompt suivant
- Comment les équipes consignent les problèmes récurrents

## Signaux d'échec

| Signal | Action possible |
|---|---|
| Tests en échec massif | Arrêter l'exécution, réduire le diff |
| Mauvais répertoire/branche | Annuler, re-`@` le bon chemin |
| Plan et implémentation fortement divergents | Revenir à l'exploration ou à la planification |
| Contexte trop long, contraintes oubliées | Nouveau fil + transfert par résumé |
| Approbations/règles refusées à répétition | Vérifier si les règles entrent en conflit avec la tâche |

## Flux de récupération minimal viable

```text
1. Arrêter toute modification supplémentaire (dire explicitement « ne pas écrire de code pour l'instant »)
2. Sauvegarder l'état : git status / stash / enregistrer l'ID du fil
3. Résumer en 5 points maximum : objectif, ce qui est fait, symptôme d'échec, hypothèse
4. Choisir : revenir en arrière / réduire le périmètre / continuer dans un nouveau fil
5. En cas de succès, consigner dans AGENTS.md ou rétrospective de cas
```

Exemple de prompt :

```text
Les modifications actuelles ont fait échouer 12 tests. Ne continuez pas à corriger.
Listez les fichiers affectés par les 3 derniers commits, proposez un point de retour arrière minimal,
et donnez un plan de correction plus restreint.
```

## Flux de travail recommandé

```text
Détecter (tests / humain / CI)
    → Limiter les dégâts (arrêter d'écrire, isoler la branche)
    → Diagnostiquer (voir « diagnostiquer avant de corriger »)
    → Réessayer par petites étapes
    → Capitaliser les leçons
```

Multi-Agent : voir [Coordination multi-Agent](/fr/cases/workflows/multi-agent-coordination/) — en cas d'échec, préciser quel sous-tâche gère le retour arrière.

## Erreurs courantes

- Empiler des correctifs dans la mauvaise direction
- Ne pas sauvegarder les journaux d'échec — le nouveau fil répète la même erreur
- Forcer un `git push` pour sauver la situation
- Ne pas distinguer l'environnement (local vs Cloud) — étapes de récupération invalides

## Limites de sécurité

- La récupération elle-même est contrainte par les [règles de commande](/fr/guide/customization/rules/command-rules/)
- Incidents de production : revenir en arrière d'abord, analyse des causes ensuite — ne pas laisser l'Agent corriger directement les données de production

## Liste de contrôle d'acceptation

- [ ] Peut expliquer la stratégie de récupération choisie et pourquoi
- [ ] Dépôt de nouveau dans un état compilable/testable
- [ ] Cause d'échec et leçon consignées (issue ou AGENTS.md)
- [ ] Si nouveau fil nécessaire, résumé des contraintes clés inclus

## Chapitres connexes

- [Diagnostiquer avant de corriger](/fr/cases/workflows/diagnose-before-fixing/)
- [Transfert et reprise](/fr/guide/agent-work/handoff-and-resume/)
- [Référence des erreurs](/fr/guide/reference/error-reference/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les chapitres vérifiés sur le transfert et la reprise, le diagnostic, les règles de commande et la référence des erreurs ; cette page décrit des méthodes générales de limitation des dégâts et de poursuite après échec, sans traiter le bouton ou la commande de récupération d'un client comme règle fixe.
