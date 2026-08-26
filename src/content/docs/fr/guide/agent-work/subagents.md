---
title: Sous-agents
description: Déléguez un travail bien délimité à des contextes indépendants, puis laissez l'Agent principal réunir les preuves, résoudre les conflits et accepter le résultat.
locale: fr
source_locale: zh-CN
source_revision: d65f0ec
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Un **sous-agent** est une unité de travail indépendante lancée par l'Agent principal pour traiter un sous-problème défini. Il dispose de son propre contexte et renvoie ses conclusions et ses preuves au fil principal. Les décisions globales et l'acceptation finale restent du ressort de l'Agent principal.

![Orchestration des sous-agents Codex : l'Agent principal délègue un travail délimité, les sous-agents renvoient des preuves, puis l'Agent principal les réunit et vérifie](/diagrams/subagent-orchestration-fr.svg)

## Trois niveaux d'isolation

| Niveau | Isolé ? | Signification |
|---|---|---|
| Contexte de conversation | Oui | Chaque sous-agent se concentre sur sa tâche sans emporter tous les détails du fil principal |
| Bac à sable et mode d'autorisation | Hérités | Une exécution indépendante n'accorde pas de droits supplémentaires |
| Fichiers du workspace | Pas nécessairement | Plusieurs Agents peuvent voir le même workspace ; des écritures concurrentes peuvent entrer en conflit |

Règle essentielle : **l'isolation du contexte n'est pas l'isolation des fichiers.** Avant de modifier en parallèle, répartissez la propriété par répertoire, composant ou worktree.

## Disponibilité actuelle

Les versions actuelles de Codex proposent les sous-agents par défaut et rendent leur activité visible dans les interfaces concernées de l'App de bureau, de la CLI et de l'IDE. Les détails de l'interface peuvent changer ; le principe stable consiste à demander à Codex de déléguer les travaux indépendants, tandis que le fil principal se charge de leur synthèse.

Dans la CLI, utilisez `/agent` pour examiner les fils ou passer de l'un à l'autre. Les interfaces IDE compatibles affichent les Agents en arrière-plan, et l'App de bureau montre l'activité des fils de la tâche. Les contrôles exacts dépendent du client et du compte.

## Quand décomposer le travail

Envisagez un sous-agent lorsque la tâche répond à au moins deux critères :

1. Elle peut être décrite indépendamment, sans synchronisation fréquente avec le fil principal.
2. Elle possède un livrable explicite, comme une liste de fichiers, un résultat de test ou une conclusion d'une page.
3. Elle peut s'exécuter en parallèle, ou une exploration isolée réduit fortement le bruit dans le fil principal.

### Travaux adaptés au parallélisme

- Cartographier en lecture seule le frontend, le backend et les tests séparément.
- Examiner en parallèle plusieurs tests en échec sans lien entre eux.
- Recueillir des preuves séparées pour deux options techniques.
- Confier à des rôles spécialisés la sécurité, les performances ou la documentation.

### Travaux à conserver dans le fil principal

- Les exigences restent floues et demandent un dialogue avec l'utilisateur.
- Les étapes doivent être exécutées dans un ordre strict.
- Les modifications se concentrent dans un même fichier ou une même zone de code.
- « Explorer » n'est associé à aucun critère de fin.

Les sous-agents augmentent la consommation de tokens et le coût de synthèse. Ne parallélisez pas une petite tâche qu'un seul fil clair peut traiter efficacement.

## Les responsabilités de l'Agent principal demeurent

L'Agent principal conserve :

- l'objectif global, les contraintes de l'utilisateur et les décisions finales ;
- les limites des sous-tâches et la propriété des fichiers ;
- l'arbitrage entre des conclusions contradictoires ;
- les tests et le build après fusion, ainsi que le compte rendu des risques.

Lorsqu'un sous-agent indique « terminé », il signale seulement la fin de sa sous-tâche ; cela ne prouve pas que la tâche globale est terminée.

## Rédiger un contrat de délégation vérifiable

```text
Lance un sous-agent pour analyser en lecture seule le renouvellement de session
dans packages/auth.

Périmètre : packages/auth et les tests associés ; ne modifier aucun fichier.
Question : un ancien token peut-il être réutilisé après l'échec du renouvellement ?
Livrable : conclusion, fichiers et lignes clés, parcours de reproduction, test conseillé.
Vérification : chaque affirmation doit être vérifiable dans le code ou les tests.
Retour : moins de 500 mots ; le fil principal décide de toute modification.
```

Ce contrat précise la responsabilité, le périmètre, la question, l'interdiction, la méthode de vérification et le propriétaire de la décision.

## Exemple en trois branches

Pour une régression de connexion intermittente :

| Sous-tâche | Autorisation et périmètre | Livrable |
|---|---|---|
| A : parcours du code | Lecture seule de `src/auth/` | Chaîne d'appels du point d'entrée à la branche en échec |
| B : preuves de test | Lecture seule des tests et journaux | Reproduction stable minimale |
| C : changements récents | Lecture seule de l'historique Git associé | Modification la plus susceptible d'avoir introduit la régression et preuves |

Lorsque les trois résultats reviennent, comparez les preuves avant de choisir une correction. Ne laissez pas A, B et C modifier simultanément `src/auth/session.ts`.

## Isoler les écritures parallèles

1. Répartissez les écritures entre des répertoires ou composants sans chevauchement.
2. Attribuez des worktrees ou des branches distincts.
3. Indiquez précisément les fichiers dont chaque Agent est responsable.
4. Laissez l'Agent principal fusionner les résultats et relancer la vérification.

La réussite des tests isolés ne garantit pas celle de l'ensemble une fois fusionné.

## Liste de contrôle d'acceptation

- Le résultat répond-il à la question initiale sans élargir le périmètre ?
- Contient-il des emplacements de fichiers, journaux ou tests vérifiables ?
- Respecte-t-il les contraintes de lecture seule, de répertoire et de commande ?
- Les résultats contradictoires ont-ils été explicitement arbitrés ?
- Les tests complets et le build ont-ils été relancés après la fusion ?
- Les problèmes non résolus et les risques restants sont-ils indiqués ?

## Associer les autres capacités

- Un **Skill** conserve une méthode de sous-tâche et son format de sortie.
- **MCP** fournit des outils ou des données externes contrôlés.
- Un **Hook** ajoute des garde-fous au démarrage, à l'arrêt ou aux appels d'outils d'un sous-agent.
- Un **worktree** isole les modifications de fichiers ; il résout les conflits de workspace, pas ceux de contexte.

Poursuivez avec [Coordination multi-Agent](/fr/cases/workflows/multi-agent-coordination/) et [Passation et reprise](/fr/guide/agent-work/handoff-and-resume/).

---

**Statut :** verified

**Produits concernés :** App / CLI / IDE

**Base de vérification :** comparaison avec la documentation actuelle sur les sous-agents. Cette page explique l'isolation du contexte, l'héritage des autorisations, les points d'accès à l'activité, le coût en tokens, les conflits d'écriture et la responsabilité finale de l'Agent principal.

**Dernière vérification :** 2026-08-26
