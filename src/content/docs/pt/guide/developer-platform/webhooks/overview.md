---
title: Limites de Webhooks e eventos de tarefas
description: Diferencie resultados locais do Codex, eventos do App Server e callbacks HTTP que você próprio cria.
contentType: reference
audiences: [developer]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Os modelos de execução e eventos do SDK e do App Server foram conferidos. A seção de callback HTTP recomenda uma arquitetura própria; não afirma existir contrato unificado de Webhook do Codex Cloud.
  evidence:
    - label: Documentação oficial do SDK
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: Protocolo e eventos do App Server
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: pt
source_locale: zh-CN
source_revision: 8a84ab8
translation_status: draft
translated_at: '2026-09-20'
---

Depois que uma tarefa termina, você pode avisar um sistema interno por retorno de programa, status de saída, fluxo de eventos ou callback HTTP. Primeiro identifique emissor e protocolo; depois decida se precisa de Webhook.

## Não confunda três mecanismos

| Mecanismo | Como receber | Limite |
|---|---|---|
| Execução local do SDK/CLI | Resultado do programa ou status do processo | Não é API hospedada de callback HTTP |
| Eventos do App Server | Notificações JSON-RPC em conexão existente | É preciso conectar, inicializar e tratar mensagens pelo protocolo |
| Callback do seu runner | Requisição HTTP do seu serviço | Você define nomes de eventos, assinaturas, retries e armazenamento |

`turn/completed` do App Server é uma notificação do protocolo; o status final pode indicar conclusão, interrupção ou falha. Confira status e resultado de negócio antes de disparar uma implantação apenas pelo nome do evento. Veja a [documentação oficial de eventos](https://learn.chatgpt.com/docs/app-server).

Esta página não verificou um endpoint unificado de registro de Webhook do Codex Cloud, cabeçalho de assinatura nem contrato de evento `task.completed`. Por isso não apresenta URL, Header ou tabela de eventos como interface oficial. Se um produto específico oferece Webhooks, siga sua documentação versionada.

## Quando criar um callback próprio

Uma tarefa única de CI em geral pode avançar pelo código de saída e pela saída salva. Não é necessário criar receptor público só porque ela é “assíncrona”.

Se seu sistema agenda tarefas entre processos e atualiza um ticket quando terminam, você pode desenhar esta cadeia interna:

```text
Fila própria → runner controlado executando SDK/CLI → salvar resultado e status
                                               → serviço próprio de notificação → ticket interno
```

É uma recomendação de arquitetura do site, não uma função de implantação do SDK. Veja [Visão geral do SDK](/pt/guide/developer-platform/sdk-overview/) para local de execução e limites de integração.

## O que definir no protocolo próprio

- **Identidade e integridade:** estabeleça como o receptor verifica o emissor; use autenticação revisada, sem inventar um “cabeçalho oficial de assinatura”.
- **IDs estáveis e deduplicação:** registre IDs de tarefa e evento e número de tentativas; uma entrega duplicada não deve duplicar efeitos externos.
- **Estado e versão:** diferencie conclusão da execução, falha, interrupção e aceitação de negócio; versione o payload.
- **Recebimento durável:** confirme somente após armazenar ou enfileirar com confiabilidade. Falhas devem permitir retry; não retorne sucesso antes de perder o evento.
- **Escopo de dados:** envie apenas resumo e referências seguras necessários ao próximo sistema; não registre credenciais.
- **Condições de parada:** limite retries e defina intervenção humana e cancelamento de ações posteriores.

São requisitos de projeto a implementar e verificar, não exemplo pronto para executar. A página não conecta tickets automaticamente, não envia mensagens e não cria implantação.

## Cenários mínimos de aceitação

No ambiente de teste, verifique sucesso, falha de execução, cancelamento, evento duplicado, identidade errada e indisponibilidade temporária do receptor. Entregas duplicadas devem produzir um só efeito de negócio, cancelamento não deve contar como sucesso e resultado gerado não validado não deve ser publicado diretamente.

Comece pelo [caso de triagem de issues](/pt/cases/use-cases/team-automation/issue-triage-suggestions/) e pela [verificação agendada de links](/pt/cases/use-cases/team-automation/scheduled-link-check/); o estado dos materiais consta das próprias páginas.
