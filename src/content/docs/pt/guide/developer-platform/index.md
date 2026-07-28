---
title: Plataforma para desenvolvedores
description: Incorpora o Codex ao teu stack de engenharia com SDK, CLI não interativo e CI/CD — para desenvolvedores de integração.
sidebar:
  order: 50
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

A **plataforma para desenvolvedores** é para quem quer **productizar** o Codex em pipelines: apps à medida, revisão em lote, portões de release, portais internos de desenvolvimento. O uso quotidiano de «escrever um Prompt para corrigir um bug» continua a começar em [Primeiros passos](/guide/getting-started/).

Este capítulo não trata do uso diário do Codex, mas de como o ligar aos teus próprios sistemas.

Orienta-se a cenários como:

- Executar Tarefas automaticamente em CI
- Integrar o Codex no teu backend ou ferramentas internas
- Fazer do Codex parte do fluxo de trabalho da equipa

## O que esta página cobre

- O limite entre a plataforma para desenvolvedores e o manual de produto para utilizadores finais
- Arquitetura típica de integração
- Navegação do capítulo e roteiro

## Divisão com o manual de produto

| Pergunta do leitor | Para onde ir |
|---|---|
| Como executar `codex` no terminal | [Manual de produto CLI](/guide/cli/) |
| Como fazer revisão com exec em CI | [Modo não interativo](/guide/cli/non-interactive-mode/) + CI deste capítulo |
| Como embutir um Agent na tua App | [Visão geral do SDK](/guide/developer-platform/sdk-overview/) |
| Modelo de Permissões e segurança | [Padrões de Aprovação humana](/cases/workflows/human-approval-patterns/) |

## Arquitetura típica (conceito)

```text
O teu sistema (CI / plataforma interna / SaaS)
        ↓ API ou CLI
Codex (modelo + Ferramentas + política)
        ↓
Fornecedor Git / tickets / repositório de artefatos
```

## Princípios de desenho

1. **Idempotente e retentável**: revisões repetidas do mesmo PR devem ser comparáveis
2. **Privilégio mínimo**: token de CI só de leitura ou limitado a repositórios
3. **Observável**: conservar versão do Prompt, modelo e artefato do Diff
4. **Divisão humano-máquina**: comentário automático ≠ merge automático

## Navegação do capítulo

| Tema | Páginas |
|---|---|
| SDK | [Visão geral do SDK](/guide/developer-platform/sdk-overview/) |
| Não interativo | [codex exec](/guide/developer-platform/non-interactive/codex-exec/) · [Scripts e pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/) · [Saída estruturada](/guide/developer-platform/non-interactive/structured-output/) · [Códigos de saída e retries](/guide/developer-platform/non-interactive/exit-codes-and-retries/) |
| Webhooks | [Visão geral](/guide/developer-platform/webhooks/overview/) |
| CI/CD | [Automatização de revisão de código](/guide/developer-platform/ci-cd/code-review-automation/) |

Mais sobre `codex-sdk/`, `app-server/` e `architecture-patterns/` no [esquema do capítulo](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md).

## Mal-entendidos frequentes

### 1. Tenho de aprender este capítulo para «saber mesmo» usar o Codex?

Se agora só queres começar a usar o Codex, podes lê-lo mais tarde.

### 2. Qual é a relação com CLI / App / IDE?

Podes entender assim:

- **App / CLI / IDE**: entradas onde tu ou a tua equipa usam o Codex diretamente
- **Plataforma para desenvolvedores**: ligar o Codex a outros sistemas e fluxos

### 3. Que página vale mais a pena ler primeiro neste capítulo?

Para formar o conceito, prioriza [Visão geral do SDK](/guide/developer-platform/sdk-overview/) e a relação com o [modo não interativo](/guide/cli/non-interactive-mode/).

Este capítulo fala de «como ligar o Codex ao sistema». Para o primeiro uso prático, começa pelo conteúdo de primeiros passos.

## Fontes de referência

- Documentação oficial da API / SDK OpenAI Codex
- Capítulos para desenvolvedores de KimYx0207
- Tutoriais de CI e automatização de stormzhang
- Casos de engenharia de codex.bozhouai.com

---

**Estado:** verified  
**Produtos aplicáveis:** API / CLI / Cloud  
**Base de verificação:** Cruzado com a estrutura atual do capítulo developer-platform, as entradas de navegação e as páginas relacionadas de CLI/CI/SDK; esta página só clarifica a divisão estável de que a plataforma para desenvolvedores aponta à integração de engenharia, sem declarar parâmetros ou comportamentos de runtime concretos.  
**Última verificação:** 2026-07-26
