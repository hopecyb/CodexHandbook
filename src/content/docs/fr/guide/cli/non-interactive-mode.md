---
title: Mode non interactif
description: Exécuter Codex sans TTY — adapté à la CI, aux tâches cron et aux pipelines d'automatisation.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Le mode non interactif permet à Codex de terminer des Tâches **sans conversation TTY** — le point d'entrée pour intégrer l'agent dans des scripts et la CI.

## Ce que couvre cette page

- Quand utiliser le non interactif vs une session `codex` interactive
- Exigences de sécurité et d'Approbation supplémentaires sans surveillance
- Lien avec [Configuration CLI](/guide/cli/configuration/)

## Bons cas d'usage

| Bon cas | Mauvais cas |
|---|---|
| Prompts de revue fixes en CI | Besoin de clarification multi-tours |
| Vérifications nocturnes de liens doc | Refactorisations exploratoires |
| Génération de code basée sur modèle | Décisions produit à forte ambiguïté |

## Idée centrale

Les exécutions non interactives typiquement :

1. Prennent une **Tâche complète** depuis les arguments ou stdin
2. S'exécutent dans un répertoire de travail spécifié
3. Sortent avec un code de statut succès/échec
4. Émettent des logs ou une sortie structurée pour les étapes suivantes

**Les noms de commandes et drapeaux suivent la doc CLI officielle** (souvent `codex exec` ou équivalent) ; revérifiez `--help` après les mises à jour.

## Exemple minimal (illustratif)

```bash
# Racine du dépôt, revue en lecture seule (drapeaux selon doc officielle)
codex exec --cwd . "Lister les risques de sécurité dans le diff vs main ; ne pas modifier les fichiers"
```

Conseils :

- `cd` vers un worktree propre dans les scripts shell
- Stockez les Prompts dans des fichiers versionnés `prompts/` ou heredocs
- Faire échouer la CI sur les codes de sortie non nuls

## Sécurité

Sans surveillance = **personne pour cliquer rejeter** :

| Principe | Pratique |
|---|---|
| Moindre privilège | Jetons lecture seule, Bac à sable serré |
| Pas de push | La CI ouvre des PR ou téléverse des artefacts seulement |
| Prompts fixes | Ne jamais concaténer du texte de PR non assaini (risque d'injection) |
| Audit | Conserver logs et artefacts de diff |

Voir [Modèles d'Approbation humaine](/cases/workflows/human-approval-patterns/).

## Interactif vs non interactif

| | Interactif | Non interactif |
|---|---|---|
| Entrée | TUI `codex` | `exec` / pipes |
| Humain dans la boucle | Fort | Faible — concevoir à l'avance |
| Apprentissage | Oui | Non |
| CI | Non | Oui |

Usage interactif : [Mode interactif CLI](/guide/cli/interactive-mode/)

## Erreurs courantes

- Coller un long historique de chat dans un seul exec
- Identifiants de production et accès écriture en CI
- Version CLI non épinglée causant une dérive soudaine du pipeline

---

**Statut :** revue  
**Produits concernés :** CLI  
**Dernière vérification :** 2026-07-25
