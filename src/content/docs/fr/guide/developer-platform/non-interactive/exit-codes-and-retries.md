---
title: "Codes de sortie et retries"
description: Interpréter succès et échec de codex exec dans les pipelines — quand retry vs fail fast.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La CI s'appuie sur les **codes de sortie de processus** pour juger le succès d'une étape. Cette page couvre la sémantique courante pour [codex exec](/guide/developer-platform/non-interactive/codex-exec/), la stratégie de retry et le design idempotent.

## Ce que cette page couvre

- Codes de sortie vs « la revue n'a pas passé » métier
- Retry sur erreurs 429/réseau ou non
- Éviter les effets de bord en double au retry

## Ce que les codes de sortie vous disent

Si c'est nouveau, considérez un code de sortie comme un court résultat laissé aux scripts et CI quand une tâche se termine.

Il n'explique généralement pas beaucoup — il dit seulement au pipeline :

- Succès cette fois
- Ou échec

« Retry » répond à une question différente : cet échec doit arrêter immédiatement, ou un autre essai vaut le coup ?

:::note
La table exacte des codes de sortie suit la doc CLI officielle ; le tableau ci-dessous est une **orientation de design** pour l'intégration.
:::

## Idées reçues courantes

### Tous les échecs ne sont pas pareils

Les débutants traitent souvent chaque non-`0` comme un type d'échec.

Au minimum, distinguer :

- Tâche crashée
- Politique ou bac à sable a bloqué
- Service externe a eu un problème transitoire
- Run réussi mais conclusion de revue « échec »

Chacun nécessite une gestion différente — pas retry global.

### « Auto retry » n'est pas automatiquement plus fiable

Si l'échec ne disparaîtra pas au retry — permissions, blocages de politique, mauvais prompt — le retry ne gaspille que temps et quota.

## Sémantique recommandée (conceptuelle)

| Situation | Gestion suggérée |
|---|---|
| `0` | Tâche complétée et critères de succès du prompt atteints |
| Non-`0` avec deny politique/bac à sable dans les logs | **Ne pas** retry aveuglément ; corriger config ou prompt |
| Non-`0` avec API 429/5xx | Retries backoff exponentiel limités |
| Problèmes P0 trouvés mais exécution réussie | Utiliser [sortie structurée](/guide/developer-platform/non-interactive/structured-output/) `pass: false` + script wrapper `exit 1` |

« Problème de sécurité trouvé » ne devrait pas reposer sur un crash — définir **explicitement** `pass: false` en JSON et laisser un script wrapper choisir le code de sortie.

## Modèle de retry (bash)

```bash
max=3
delay=10
for i in $(seq 1 $max); do
  if codex exec --cwd . "$(cat "$PROMPT")"; then
    exit 0
  fi
  code=$?
  if [ "$code" -eq 2 ]; then
    echo "Erreur de politique, pas de retry" >&2
    exit "$code"
  fi
  sleep $((delay * i))
done
exit 1
```

Aligner les codes « ne pas retry » avec la doc officielle et brancher dans `case`.

## Idempotence et effets de bord

| Risque | Mitigation |
|---|---|
| Commentaires PR en double | Utiliser id de check run ou « mettre à jour si commentaire bot existe » |
| Écritures de fichiers en double | exec par défaut revue lecture seule ; écritures dans job séparé + porte humaine |
| Notifications en double | Webhook avec clé de dedupe |

## Quand hésiter

Demandez :

1. Cela ressemble à un glitch externe transitoire ?
2. Au retry, pourrions-nous dupliquer commentaires, écritures ou notifications ?
3. La vraie correction est config, prompt ou permissions ?

Plus proche de (1) : retry limité peut aider. Plus proche de (2) ou (3) : arrêter et corriger la cause racine.

## Erreurs courantes

- Ignorer les codes de sortie ; CI toujours verte
- Retry infini sur erreurs de politique, brûlant le quota
- Retry sans prompt/git sha fixe, résultats non comparable

Séparer d'abord « panne temporaire » de « retry n'aidera pas », puis décider si retry. Tous les échecs ne méritent pas un autre run.

## Liste de contrôle d'acceptation

- [ ] CI échoue sur codes de sortie non-zéro
- [ ] Nombre de retries et backoff ont des limites supérieures
- [ ] « Revue échouée » vs « run crashé » sont distinguables
- [ ] Logs retiennent assez de détail pour le dépannage

## Lié

- [Référence d'erreurs](/guide/reference/error-reference/)
- [Récupération après échec](/cases/workflows/failure-recovery/)

## Sources de référence

- Orientations retry API OpenAI (conceptuel)
- Dépannage CI stormzhang

---

**Statut :** obsolète  
**Produits concernés :** CLI  
**Note de révision :** Cette page donne des conseils d'ingénierie raisonnables sur codes de sortie et retries, mais les exemples supposent une sémantique de sortie spécifique (ex. `code=2`) et le comportement `codex exec` sans support officiel actuel fort ; restaurer `vérifié` après vérification de la nouvelle doc CLI.  
**Dernière vérification :** 2026-07-26
