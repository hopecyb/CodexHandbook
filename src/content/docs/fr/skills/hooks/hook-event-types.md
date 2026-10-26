---
legacyVerification:
  status: verified
  products: Environnements utilisant un hôte Codex local
  checkedAt: '2026-08-25'
title: Types d’événements Hook
description: Choisir un événement selon le cycle de vie de la session, du tour de tâche, de l’appel d’outil, de la compression du contexte ou du sous-agent.
locale: fr
source_locale: zh-CN
source_revision: "07f4965"
translation_status: reviewed
translated_at: "2026-09-20"
reviewed_at: '2026-10-26'
---
Pour choisir un Hook, la première question n’est pas « comment écrire le script ? », mais « faut-il intervenir avant ou après l’effet de bord ? ». Un script associé au mauvais événement risque de ne signaler un problème qu’une fois les effets produits.

![Cycle de vie des Hooks Codex et événements principaux](/diagrams/hook-lifecycle-events-fr.svg)

## Liste actuelle des événements

| Événement | Moment du déclenchement | Ce que filtre le matcher | Usage courant |
|---|---|---|---|
| `SessionStart` | Début ou reprise d’une session | `startup`, `resume`, `clear`, `compact` | Informations sur l’environnement, restauration du contexte |
| `SubagentStart` | Démarrage d’un sous-agent | Type de sous-agent | Ajouter des contraintes au sous-agent |
| `UserPromptSubmit` | Soumission d’un prompt utilisateur | Non pris en charge ; la configuration est ignorée | Recherche de secrets, ajout de contexte de développement |
| `PreToolUse` | Avant l’exécution d’un outil local pris en charge | Nom de l’outil | Refuser ou modifier l’appel |
| `PermissionRequest` | Codex est sur le point de demander une approbation | Nom de l’outil | Autoriser, refuser ou laisser suivre l’approbation normale |
| `PostToolUse` | Après le retour d’un outil local pris en charge | Nom de l’outil | Consigner le résultat, alimenter le raisonnement suivant |
| `PreCompact` | Avant la compression du contexte | `manual` / `auto` | Sauvegarder l’état avant la compression |
| `PostCompact` | Après la compression du contexte | `manual` / `auto` | Restaurer le contexte nécessaire |
| `SubagentStop` | Un sous-agent s’apprête à terminer | Type de sous-agent | Exiger une vérification supplémentaire |
| `Stop` | Le tour de tâche principal s’apprête à terminer | Non pris en charge ; la configuration est ignorée | Demander au fil principal de poursuivre la vérification |
| `SessionEnd` | Fin du fil principal | Actuellement `other` | Journal de clôture rapide ; ne s’exécute pas pour les sous-agents |

## Matchers d’outils

Valeurs courantes :

```text
Bash
^apply_patch$
Edit|Write
mcp__filesystem__read_file
mcp__filesystem__.*
```

Les commandes shell et l’exécution unifiée correspondent à `Bash`. `apply_patch` peut aussi être reconnu par les alias `Edit` ou `Write`. Les outils MCP et les autres fonctions locales correspondent à leur nom d’outil réel.

## Trois événements souvent confondus

### PreToolUse

L’entrée contient `tool_name`, `tool_use_id` et un `tool_input` propre à l’outil. Cet événement peut renvoyer :

- `permissionDecision: "deny"` : empêcher l’appel d’un outil pris en charge ;
- `permissionDecision: "allow"` avec `updatedInput` : modifier l’entrée d’un outil pris en charge ;
- `additionalContext` : ajouter du contexte pour le modèle sans bloquer l’appel.

Un simple texte sur stdout est ignoré ; il faut produire le JSON défini par la documentation officielle. Le code de sortie `2` accompagné d’un message sur stderr peut aussi bloquer l’appel en donnant une raison.

### PermissionRequest

Cet événement ne se déclenche que si Codex s’apprêtait déjà à demander une approbation, par exemple pour une élévation shell ou un accès réseau administré. Il peut autoriser, refuser ou laisser l’interface d’approbation normale décider. Ne l’utilisez pas à la place de `PreToolUse` pour une politique générale des outils.

### PostToolUse

L’outil a déjà été exécuté ; l’événement se déclenche même si Bash se termine avec un code non nul. Renvoyer `block` ou sortir avec le code `2` ne fait que remplacer le retour donné au modèle pour qu’il le traite. Cela n’annule ni la commande, ni l’écriture d’un fichier, ni une action externe.

## Stop n’est pas un bouton « refuser la fin »

Pour `Stop`, `decision: "block"` crée automatiquement, à partir de `reason`, un prompt de continuation demandant à Codex d’effectuer un autre tour. Les effets déjà produits par les outils ne sont pas annulés. Le script doit vérifier `stop_hook_active` pour éviter une continuation infinie.

## Exercice de choix d’événement

| Besoin | Choix | Raison |
|---|---|---|
| Empêcher l’écriture d’un token suspect dans un fichier | `PreToolUse` avec `apply_patch|Edit|Write` | Agir avant l’écriture |
| Mesurer le taux d’échec des commandes shell | `PostToolUse` avec `Bash` | Le résultat de la commande est nécessaire |
| Sauvegarder les décisions clés avant une compression automatique du contexte | `PreCompact` | Se déclenche avant la compression |
| Ne pas terminer la tâche avant l’exécution des tests | `Stop` | Poursuivre le tour de tâche actuel |
| Envoyer une requête réseau de 30 secondes à la fin du fil principal | Pas `SessionEnd` | Maximum 3 secondes ; ne pas placer une tâche longue dans l’événement de clôture |

## Source officielle

- [OpenAI : événements Hook et matchers](https://learn.chatgpt.com/docs/hooks)
