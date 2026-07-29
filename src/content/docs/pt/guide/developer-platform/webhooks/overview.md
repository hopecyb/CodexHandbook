---
title: Visão geral de Webhooks
description: Ligar o estado de Tarefas Codex a sistemas internos com callbacks HTTP — eventos, assinatura e idempotência.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Um **Webhook** permite-te, quando muda o estado de uma Tarefa Codex ou Cloud, enviar um callback HTTP ao teu próprio serviço e disparar atualizações de tickets, notificações Slack ou mesas de Aprovação internas. Este capítulo é a entrada de integração por eventos da [plataforma para desenvolvedores](/guide/developer-platform/).

## O que esta página cobre

- Quando escolher Webhook face a polling com SDK
- Eventos habituais e campos do payload (conceito)
- Verificar assinatura, replay e idempotência

## Primeiro compreende o que faz

Se é a primeira vez com Webhooks, pensa assim: quando muda o estado da Tarefa, o Codex notifica o teu sistema, em vez de tu perguntares uma e outra vez «já está?».

Encaixa quando «ao terminar a Tarefa ainda há que encadear outra ação de sistema».

:::note
Rota do Webhook, nomes de eventos e algoritmo de assinatura conforme a [documentação oficial da API](https://developers.openai.com/codex).
:::

## Mal-entendidos frequentes

### O Webhook não é a resposta por omissão a toda a automatização

Se só corres um `codex exec` e olhas o código de saída, normalmente não precisas de Webhook.

O Webhook encaixa melhor em:

- Tarefas longas
- Orquestração multi-passo
- Notificar ou disparar outros sistemas ao terminar

### Receber o callback ≠ poder confiar nele de imediato

Muitos principiantes tratam o Webhook como «mensagem oficial, pode usar-se tal qual».

Sem verificação de assinatura, idempotência e tratamento de timeouts, podes acabar com pedidos falsificados, entregas duplicadas ou problemas por instabilidade do sistema.

## Quando usar Webhook

| Adequado | Não adequado |
|---|---|
| Notificar sistemas internos ao completar a Tarefa | Precisas de streaming palavra a palavra em tempo forte |
| Integrar com um bus de eventos existente | Um cron simples só precisa do código de saída de `exec` |
| Orquestração multi-passo (completar → disparar deploy) | Sem endpoint alcançável da internet e sem querer usar fila |

Pipelines simples podem bastar com [Scripts e pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/); um serviço multi-tenant productizado costuma combinar **SDK + Webhook**.

## Eventos típicos (conceito)

| Evento | Uso |
|---|---|
| `task.completed` | Obter resultado, atualizar estado do PR |
| `task.failed` | Alerta, fila de retries |
| `task.needs_approval` | Empurrar para UI de Aprovação humana |
| `review.posted` | Sincronizar a conclusão da revisão de código |

O payload deveria incluir: `task_id`, estado, marca temporal, identificador de repo/projeto; **evita** pôr o Prompt completo no body do webhook se contiver PII.

## Requisitos mínimos do recetor

1. Terminal **HTTPS**; verificar o cabeçalho de assinatura oficial (p. ex. `X-Signature` + HMAC)
2. **Idempotência**: o mesmo `event_id` processa-se uma só vez
3. **2xx rápido**: a lógica pesada para uma fila assíncrona
4. **Logs desensibilizados**: não registar secrets nem a entrada completa do utilizador

Esquema (pseudocódigo):

```python
def handle(request):
    verify_signature(request.headers, request.body)
    event = parse_json(request.body)
    if already_processed(event["id"]):
        return 200
    enqueue(process_codex_event, event)
    return 200
```

## Relação com CI

- Dentro de CI, `codex exec` costuma **não** precisar de webhook; basta o código de saída
- Tarefas longas em Cloud e Aprovação a partir do telemóvel encaixam melhor com webhook para sistemas internos

## Erros frequentes

- Sem verificação de assinatura; callbacks falsificados
- Processar além do timeout da plataforma e provocar reentregas
- Correr um segundo Codex de forma síncrona no handler do webhook
- Expor o URL do webhook no frontend do cliente

## Como decidir se usá-lo

Se não tiveres claro o cenário, pergunta:

1. Preciso que me notifiquem de forma ativa quando muda o estado da Tarefa?
2. Ao terminar, há um passo seguinte ao nível de sistema que deva encadear-se sozinho?
3. Já tenho um backend que possa receber de forma segura callbacks HTTP?

Quanto mais respostas forem «sim», mais sentido tem o Webhook.

## Limites de segurança

- Ver [modelo de ameaças](/guide/team-enterprise/security/threat-model/) e [uso aceitável](/guide/team-enterprise/governance/acceptable-use/)
- Inclui a rotação do segredo do webhook no calendário de operações

## Lista de aceitação

- [ ] Falha de verificação de assinatura → 4xx
- [ ] Tabela de idempotência ou chave de dedupe implementada
- [ ] Worker assíncrono e DLQ (fila de letra morta) configurados
- [ ] Convénio de campos alinhado com [saída estruturada](/guide/developer-platform/non-interactive/structured-output/)

O Webhook serve para ligar mudanças de estado de Tarefa a outros sistemas; antes há que deixar bem assinatura, idempotência e processamento assíncrono.

## Fontes de referência
- Documentação de eventos da API OpenAI Codex / Cloud
---

**Estado:** verified  
**Produtos aplicáveis:** API / Cloud  
**Base de verificação:** Cruzado com a documentação pública atual da OpenAI Developers sobre plataforma para desenvolvedores e integração orientada a eventos, e com as páginas verificadas de Webhooks, CI/CD, saída estruturada e limites de segurança de equipa; esta página só confirma o princípio estável de que o Webhook serve para notificar estado e que o recetor deve verificar assinatura, ser idempotente e processar de forma assíncrona.  
**Última verificação:** 2026-07-26
