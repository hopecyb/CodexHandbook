---
title: Visão geral do SDK
description: Lançar Tarefas Codex na tua aplicação com o SDK oficial — conceitos de autenticação, sessão e tratamento de erros.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

O SDK (nome e linguagens conforme a [documentação oficial](https://developers.openai.com/codex)) permite criar Tarefas, consultar o estado e obter resultados no **teu próprio serviço**, sem depender só da TUI do terminal.

Se vês «SDK» pela primeira vez, pensa nele como um conjunto de ferramentas de desenvolvimento para um programa chamar o Codex — não como uma interface de cliques para pessoas.

Ou seja: serve para «o teu sistema chamar o Codex». Se só lanças uma Tarefa pontual, normalmente ainda não precisas do SDK.

## O que esta página cobre

- Quando usar o SDK em vez de CLI `exec`
- Autenticação e isolamento de tenant
- Ideias de combinação com Webhook e filas

Vista geral da plataforma: [Plataforma para desenvolvedores](/guide/developer-platform/)

## SDK vs CLI

| | SDK | CLI `exec` |
|---|---|---|
| Onde se integra | Serviço backend, ferramentas internas | Shell, GitHub Actions |
| Gestão de estado | O teu código | Código de saída do processo |
| Adequado para | Produto multi-tenant, UI à medida | Pipelines simples |

Muitas equipas usam **CLI em CI e SDK no produto**.

## Mal-entendidos frequentes

### 1. Em que se diferenciam SDK e CLI?

Em traços gerais:

- **CLI**: chama-o uma pessoa ou um script no terminal
- **SDK**: escreves código e embutes a capacidade do Codex no teu serviço

### 2. Devo aprender primeiro o SDK?

Normalmente não.

Se só queres aprender a usar o Codex, a entrada local e o modo interativo do CLI costumam ser melhor primeiro passo.

### 3. Quando vale a pena o SDK?

Quando aparecem necessidades como:

- Lançar Tarefas Codex a partir do teu próprio produto
- Gerir tu o estado e o resultado das Tarefas
- Fazer UI, Permissões e fluxos à medida

O SDK serve para «ligar sistemas a partir de um programa», não como entrada principal na primeira vez que usas o Codex.

## Conceitos centrais (independentes da linguagem)

1. **Autenticação**: API key da organização ou OAuth delegado — scope mínimo
2. **Tarefa / Thread**: um pedido de utilizador com ID rastreável
3. **Política de Ferramentas**: o servidor fixa Sandbox e Aprovação, alinhado com o cliente
4. **Resultado**: histórico de mensagens, Diff de ficheiros, URL de artefatos (conforme a API)
5. **Erros**: distinguir retentáveis (429) e não retentáveis (400)

Índice de erros: [Referência de erros e avisos](/guide/reference/error-reference/)

## Lista mínima de integração

- [ ] Testar em staging com um repo só de leitura
- [ ] Desensibilizar logs; não registar o Prompt completo do utilizador se contiver PII
- [ ] Timeout e cancelamento: poder abortar a Tarefa se o utilizador abandonar a página
- [ ] Fixar versão do SDK e do model ID

## Encaixe com CI/CD

O SDK pode disparar Cloud ou um runner remoto, ou a CI pode chamar o teu serviço para atualizar o estado do PR. Padrões de exemplo em [Automatização de revisão de código](/guide/developer-platform/ci-cd/code-review-automation/).

## Erros frequentes

- Usar o cookie de sessão do browser do utilizador como API key
- Sem limite de concorrência; um pico de tráfego esgota a quota
- Fazer merge automático de PRs gerados pelo SDK

## Fontes de referência
- Referência do SDK OpenAI Codex
---

**Estado:** verified  
**Produtos aplicáveis:** API  
**Base de verificação:** Cruzado com a documentação pública atual da OpenAI Developers sobre API/modelos Codex e casos da plataforma para desenvolvedores, e com os capítulos verificados de resumo da plataforma, CI/CD e modo não interativo; esta página só confirma o princípio estável de que o SDK serve para integração programática, gestão de estado e UI à medida.  
**Última verificação:** 2026-07-26
