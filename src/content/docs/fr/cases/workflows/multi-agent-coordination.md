---
title: Coordination multi-Agent
description: Exploration parallèle, exécution répartie et fusion des résultats — quand découper et comment vérifier.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Le multi-Agent convient aux sous-problèmes parallèles et faiblement couplés. Il ne convient pas à deux agents modifiant le même fichier sans coordinateur.

## Quand découper

| Bon choix | Mauvais choix |
|---|---|
| Style frontend + contrat API backend explorés en parallèle | Deux personnes modifiant la même fonction |
| Un lance les tests pendant qu'un autre rédige la doc | État mutable partagé sans verrouillage |
| Explorer plusieurs options d'implémentation | Forte dépendance séquentielle pas encore cartographiée |

Capacités produit : [Agents parallèles](/guide/desktop-app/parallel-agents/), [Sous-agents](/guide/agent-work/subagents/).

## Modèles de coordination

### Modèle A : Exploration parallèle, choix humain

```text
Agent 1 : avantages/inconvénients et effort pour l'option A
Agent 2 : avantages/inconvénients et effort pour l'option B
Vous : en choisir une, puis ouvrir un seul Agent pour exécuter
```

### Modèle B : Pipeline

```text
Agent d'exploration → produit un plan → Agent d'exécution (nouveau fil avec résumé du plan)
```

Utiliser [transfert et reprise](/guide/agent-work/handoff-and-resume/) pour passer des résumés structurés — ne pas coller des conversations entières.

### Modèle C : Isolation par worktree

Des Agents différents modifient des branches différentes dans des [git worktrees](/guide/desktop-app/worktrees/) séparés ; fusion humaine à la fin.

## Règles de coordination (recommandées dans AGENTS.md)

- Chaque Agent a des limites de répertoire explicites
- Pas de `git push` en parallèle
- Lancer la CI une fois avant la fusion
- Conflits résolus par les humains — ne pas laisser les Agents deviner

## Acceptation

- [ ] Chaque sous-Agent a sa propre définition de terminé
- [ ] Suite de tests complète au vert après fusion
- [ ] Les diffs sont traçables vers la description de la sous-tâche correspondante

## Erreurs courantes

- Trois Agents en parallèle modifiant `package.json`
- Pas d'étape de synthèse — on ne sait pas quelle conclusion suivre

---

**Statut :** verified  
**Produits concernés :** App / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec la documentation publique actuelle d'OpenAI Developers sur le multi-agent / sous-agents, ainsi que les chapitres vérifiés sur les sous-agents, le transfert/reprise et le travail parallèle ; le contenu se limite aux méthodes stables « quand découper, comment isoler les limites, comment synthétiser et vérifier humainement », sans figer les entrées beta ou UI actuelles.
