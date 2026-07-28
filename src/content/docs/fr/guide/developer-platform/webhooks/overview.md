---
title: "Vue d'ensemble Webhooks"
description: Connectez l'état des tâches Codex aux systèmes internes via callbacks HTTP — événements, signatures et idempotence.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Les **Webhooks** permettent à Codex ou Cloud d'envoyer des callbacks HTTP quand l'état d'une tâche change — pour mettre à jour les tickets, notifications Slack ou UI d'approbation interne. Ce chapitre est l'entrée d'intégration événementielle pour la [plateforme développeur](/guide/developer-platform/).

## Ce que cette page couvre

- Webhooks vs polling avec le SDK
- Événements courants et champs de payload (conceptuels)
- Vérification de signature, replay et idempotence

## Ce que ça fait

Si les webhooks sont nouveaux : quand l'état d'une tâche change, Codex notifie votre système au lieu que vous polliez « c'est fini ? »

Idéal quand quelque chose d'autre doit arriver après qu'une tâche se termine.

:::note
Les chemins webhook, noms d'événements et algorithmes de signature suivent la [doc API officielle](https://developers.openai.com/codex).
:::

## Idées reçues courantes

### Les webhooks ne sont pas le défaut pour toute automatisation

Pour un seul `codex exec`, les codes de sortie suffisent généralement — pas besoin de webhook.

Les webhooks conviennent mieux :

- Tâches longues
- Orchestration multi-étapes
- Notifier ou piloter d'autres systèmes à la fin

### Recevoir un callback ne signifie pas le croire

Sans vérification de signature, idempotence et gestion de timeout, vous risquez des requêtes forgées, livraison en double ou instabilité.

## Quand utiliser les webhooks

| Convient | Ne convient pas |
|---|---|
| Notifications de fin de tâche vers systèmes internes | Streaming token temps réel fort |
| Intégration avec bus d'événements existants | Cron simple qui n'a besoin que des codes de sortie `exec` |
| Flux multi-étapes (terminé → trigger deploy) | Pas de endpoint public et pas de queue |

Pipelines simples : [Scripts et pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/) uniquement. Services multi-tenant industrialisés combinent souvent **SDK + Webhook**.

## Événements typiques (conceptuels)

| Événement | Usage |
|---|---|
| `task.completed` | Récupérer résultats, mettre à jour statut PR |
| `task.failed` | Alerter, queue de retry |
| `task.needs_approval` | Pousser vers UI d'approbation humaine |
| `review.posted` | Synchroniser conclusions de revue de code |

Le payload devrait inclure : `task_id`, statut, timestamp, id repo/projet ; **éviter** les prompts complets dans le corps webhook s'ils contiennent des PII.

## Exigences minimales du receiver

1. Endpoint **HTTPS** ; vérifier l'en-tête de signature officiel (ex. `X-Signature` + HMAC)
2. **Idempotence** : traiter chaque `event_id` une fois
3. **2xx rapide** : logique lourde dans queue async
4. **Rédaction des logs** : pas de clés ni d'entrée utilisateur complète

Sketch (pseudocode) :

```python
def handle(request):
    verify_signature(request.headers, request.body)
    event = parse_json(request.body)
    if already_processed(event["id"]):
        return 200
    enqueue(process_codex_event, event)
    return 200
```

## Relation avec CI

- `codex exec` en CI **n'a généralement pas** besoin de webhooks — les codes de sortie suffisent
- Tâches Cloud longues et scénarios d'approbation mobile conviennent aux webhooks vers systèmes internes

## Erreurs courantes

- Pas de vérification de signature ; callbacks forgés
- Handler dépasse le timeout plateforme → livraison en double
- Deuxième run Codex synchrone dans le handler webhook
- URL webhook exposée dans le frontend client

## Comment décider

Demandez :

1. Ai-je besoin de notification proactive sur les changements d'état de tâche ?
2. Après qu'une tâche se termine, y a-t-il une étape système suivante à automatiser ?
3. Ai-je un backend qui peut recevoir des callbacks HTTP en sécurité ?

Plus de réponses « oui » → les webhooks comptent plus.

## Frontières de sécurité

- Voir [Modèle de menace](/guide/team-enterprise/security/threat-model/) et [Usage acceptable](/guide/team-enterprise/governance/acceptable-use/)
- Rotation des secrets webhook sur un calendrier ops

## Liste de contrôle d'acceptation

- [ ] Échec de signature retourne 4xx
- [ ] Table d'idempotence ou clé de dedupe implémentée
- [ ] Worker async et DLQ configurés
- [ ] Aligné avec les conventions de champs [sortie structurée](/guide/developer-platform/non-interactive/structured-output/)

Les webhooks connectent les changements d'état de tâche aux autres systèmes — après que vérification de signature, idempotence et traitement async sont en place.

## Sources de référence
- Documentation événements API OpenAI Codex / Cloud
---

**Statut :** vérifié  
**Produits concernés :** API / Cloud  
**Base de vérification :** Recoupement avec les orientations publiques plateforme développeur et intégration événementielle d'OpenAI Developers, plus les pages vérifiées section Webhooks, CI/CD, sortie structurée et sécurité d'équipe de ce handbook ; confirme les principes stables : webhooks pour notification de statut, receivers doivent vérifier signatures, imposer idempotence et traiter async.  
**Dernière vérification :** 2026-07-26
