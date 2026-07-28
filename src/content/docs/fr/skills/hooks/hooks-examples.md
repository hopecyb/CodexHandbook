---
title: Exemples de configuration Hook
description: Configurations et squelettes de scripts Hook adaptables — scan de secrets, journal d'audit, validation de format.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

En lisant des exemples Hook, confirmez ce qu'ils défendent, puis adaptez à votre environnement.

Ce chapitre fournit des configurations et scripts **illustratifs** pour adaptation en équipe. Les noms de champs et chemins suivent la [documentation officielle](https://developers.openai.com/codex) et le `codex --help` local ; testez dans un dépôt isolé avant de copier.

Prérequis : [Vue d'ensemble des Hooks](/skills/hooks/hooks-overview/) · [Types d'événements Hook](/skills/hooks/hook-event-types/)

## Confirmer le périmètre avant usage

Ne traitez pas ces exemples comme des « réponses standard » à copier-coller.  
Traitez-les comme trois modèles :

- Journal seul
- Blocage en premier
- Contrôle léger des entrées

Comprenez l'idée, puis décidez s'il faut étendre.

## Exemple 1 : Journal d'audit après appel d'outil (lecture seule)

**Objectif :** Enregistrer qui a écrit quels chemins et quand — ne pas écrire des secrets sur disque si le masquage échoue.

`hooks.json` (illustratif) :

```json
{
  "hooks": [
    {
      "event": "tool.call.after",
      "command": ".codex/hooks/audit-log.sh",
      "timeout_ms": 500
    }
  ]
}
```

`.codex/hooks/audit-log.sh` :

```bash
#!/usr/bin/env bash
# stdin : payload JSON (structure selon docs officielles)
payload=$(cat)
tool=$(echo "$payload" | jq -r '.tool // "unknown"')
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "$ts tool=$tool" >> "${CODEX_AUDIT_LOG:-/tmp/codex-audit.log}"
exit 0
```

**Validation :** Après une écriture de fichier, le journal a une ligne ; le script sort toujours 0.

Les exemples journal seul sont le risque le plus faible — généralement le meilleur point de départ.

## Exemple 2 : Bloquer des secrets suspects avant appel d'outil

**Objectif :** `block` quand le diff ou le contenu d'écriture correspond au motif de clé d'accès AWS.

```json
{
  "hooks": [
    {
      "event": "tool.call.before",
      "command": ".codex/hooks/secret-scan.sh",
      "on_failure": "block",
      "timeout_ms": 300
    }
  ]
}
```

Logique centrale dans `secret-scan.sh` (illustratif) :

```bash
#!/usr/bin/env bash
payload=$(cat)
text=$(echo "$payload" | jq -r '.arguments // empty' 2>/dev/null)
if echo "$text" | grep -qE 'AKIA[0-9A-Z]{16}'; then
  echo "Bloqué : possible clé d'accès AWS dans les arguments d'outil" >&2
  exit 1
fi
exit 0
```

**Validation :** Chaîne de test avec `AKIA` bloquée ; `git status` normal passe.

:::caution
Le scan par regex a des faux positifs/négatifs — complément seulement ; les vrais secrets doivent utiliser des scanners de secrets et pre-commit ; voir [contexte sensible](/guide/context/sensitive-context/).
:::

Utilisez des Hooks de type block quand vous savez qu'il faut stopper de vraies actions. Commencer par block rend le débogage plus coûteux.

## Exemple 3 : Politique de longueur et mots-clés à la soumission du prompt utilisateur

**Objectif :** Rejeter les tentatives évidentes de contourner les instructions système (simplifié).

```bash
#!/usr/bin/env bash
prompt=$(cat | jq -r '.prompt // empty')
if [ "${#prompt}" -gt 50000 ]; then
  echo "Prompt trop long" >&2
  exit 1
fi
if echo "$prompt" | grep -qi 'ignore previous instructions'; then
  echo "Bloqué : motif d'injection possible" >&2
  exit 1
fi
exit 0
```

**Validation :** Prompt trop long et motifs détectés échouent ; tâches normales passent.

Au minimum :

- Peut inspecter l'entrée
- Raison d'échec claire
- Ne bloque pas excessivement les requêtes normales

## Idées reçues courantes

### 1. Si l'exemple fonctionne, il est prêt pour la production

Les exemples enseignent la structure et les idées — pas une config production à déployer telle quelle.

### 2. Les Hooks block sont plus matures que les Hooks log

Beaucoup d'équipes commencent par les journaux, confirment faux positifs et performance, puis passent à warn ou block.

### 3. Les exemples Hook ne concernent que la syntaxe de script

Considérez aussi :

- Sur quel événement il s'accroche
- Stratégie d'échec
- Si l'équipe peut expliquer pourquoi il bloque ainsi

## Tester les Hooks

```bash
# Tester le script avec fixture (illustratif)
echo '{"tool":"shell","arguments":"git status"}' | .codex/hooks/secret-scan.sh
echo $?
```

## Progression courante

Beaucoup d'équipes suivent :

1. Hook journal en lecture seule
2. Hook warn
3. Hook block

Cela sépare « la logique est correcte » de « l'équipe accepte le blocage ».

Les exemples Hook servent à apprendre la structure — pas à copier mot pour mot en production.

## Erreurs courantes

- Script sans `chmod +x`, échec silencieux
- `timeout_ms` trop court provoque des faux blocages
- Chemin de journal non writable casse toute la chaîne Hook
- `curl` du payload complet sortant depuis le Hook

## Liste de validation

- [ ] Chaque Hook a des tests fixture
- [ ] Stratégie d'échec (block/warn) conforme à la politique d'équipe
- [ ] Config et scripts même dépôt, même revue PR
- [ ] Docs indiquent date de vérification et version CLI applicable

## Sources de référence
- Exemples OpenAI Codex Hooks
---

**Statut :** obsolète  
**Produits concernés :** CLI / App (selon version)  
**Base de vérification :** Inclut structure de config Hook, noms d'événements, champs de payload et exemples de scripts — fortement lié à l'implémentation actuelle ; manque de base officielle publique stable.  
**Dernière vérification :** 2026-07-26
