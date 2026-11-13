---
title: Exemples de configuration de Hooks
description: Mettre en place un garde-fou PreToolUse testable avec un vrai hooks.json et un script Python de la bibliothèque standard.
legacyVerification:
  status: verified
  products: Environnements utilisant un hôte Codex local ; gestion de la confiance avec `/hooks` dans Codex CLI
  checkedAt: '2026-08-25'
locale: fr
source_locale: zh-CN
source_revision: "06e9fa2"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---
Ce chapitre ne contient plus les anciens noms d’événements et champs de configuration donnés à titre indicatif. L’exemple suit la structure officielle actuelle de `hooks.json` et comprend des tests exécutables.

Les fichiers complets se trouvent dans [`examples/hooks/secret-guard/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/hooks/secret-guard).

![Illustration : une barrière lumineuse sur le chemin d'un appel d'outil — un scanner laisse passer les commandes sûres par la voie verte et une barrière rouge arrête une commande dangereuse, avec un panneau de tests aux voyants verts](/illustrations/hooks-guardrail.webp)

## Objectif et limites

Objectif : si l’entrée d’une commande `Bash` ou `apply_patch` contient une chaîne de test ressemblant à un AWS Access Key ID, refuser l’appel avant l’exécution de l’outil.

Cet exemple montre uniquement la structure des entrées, sorties et tests d’un Hook :

- il ne remplace pas un détecteur de secrets professionnel ;
- l’expression régulière peut produire des faux positifs et des faux négatifs ;
- il n’analyse pas les outils hébergés ;
- il ne doit pas enregistrer l’entrée complète de l’outil.

## 1. Configurer hooks.json

```json
{
  "description": "Block obvious secret-shaped strings before local writes.",
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|apply_patch",
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$(git rev-parse --show-toplevel)/examples/hooks/secret-guard/pre_tool_use_guard.py\"",
            "timeout": 3,
            "statusMessage": "Checking tool input for secret-shaped strings"
          }
        ]
      }
    ]
  }
}
```

Dans un dépôt qui utilise réellement ce Hook, placez généralement la configuration dans `.codex/hooks.json` et le script dans `.codex/hooks/`. Le chemin `examples/` est conservé ici pour pouvoir vérifier directement les fichiers complets du dépôt de ce manuel.

## 2. Sortie de refus

Le script lit le JSON de l’événement sur stdin et n’examine que `tool_input.command`. En cas de correspondance, il affiche :

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Secret-shaped string blocked by example hook."
  }
}
```

Sans correspondance, il se termine avec le code `0` et sans sortie. Un texte ordinaire sur stdout ne constitue pas une décision `PreToolUse` valide.

## 3. Exécuter les tests

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

Résultat attendu : trois tests réussissent, couvrant une commande normale, une clé suspecte et un `tool_input` qui n’est pas un dictionnaire.

Vous pouvez aussi fournir manuellement une fixture :

```bash
printf '%s\n' '{"hook_event_name":"PreToolUse","tool_name":"Bash","tool_input":{"command":"git status"}}' \
  | python3 examples/hooks/secret-guard/pre_tool_use_guard.py
```

Une entrée normale ne produit rien sur stdout.

## 4. Activer le Hook dans un projet

1. Placez la configuration et le script dans le dépôt cible, puis utilisez un chemin stable à l’intérieur de ce dépôt.
2. Exécutez les tests unitaires et une vraie commande normale dans un dépôt isolé.
3. Démarrez Codex et ouvrez `/hooks` pour examiner la provenance et la définition exacte.
4. Après avoir accordé votre confiance, vérifiez séparément qu’une entrée normale passe et que la chaîne de test est refusée.
5. Examinez à nouveau le Hook après une modification du script : un changement de hash remet un Hook non géré en attente de confiance.

## Passer d’un avertissement à un blocage

En production, les équipes commencent généralement par un audit ou un ajout de contexte qui ne bloque rien, puis passent à `deny`. Avant ce changement, répondez au moins à ces questions :

- Les fixtures couvrent-elles les faux positifs connus ?
- Un délai dépassé ou un plantage du script est-il compréhensible pour l’utilisateur ?
- La règle est-elle également appliquée par CI ou par une politique côté serveur ?
- Le contournement et la reprise d’urgence sont-ils vérifiables dans les journaux ?

## Source officielle

- [OpenAI : configuration des Hooks et sortie PreToolUse](https://learn.chatgpt.com/docs/hooks)
