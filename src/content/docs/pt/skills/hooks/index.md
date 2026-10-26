---
legacyVerification:
  status: "verified"
  products: "Ambientes com host Codex local; siga a documentação oficial do Codex CLI para revisão de confiança e gerenciamento com `/hooks`"
  checkedAt: "2026-08-25"
title: Hooks
description: Execute scripts ou ferramentas MCP em pontos do ciclo de vida do Codex para verificar, registrar e aplicar políticas.
locale: pt
source_locale: zh-CN
source_revision: "a0312e9"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Um Hook é um manipulador automático do ciclo de vida do Codex. Ele pode executar um script ou uma ferramenta MCP quando a sessão começa, um prompt é enviado, uma ferramenta é chamada ou termina, o contexto é compactado, um subagente para ou a thread principal termina.

## O que este conjunto de páginas resolve

- Como escolher o evento correto sem inventar nomes como `pre_tool`, que não existem.
- Como distinguir o bloqueio antes da execução do feedback após a execução.
- Como começar por um Hook testável e de baixo risco.
- Como examinar os limites de confiança de Hooks do projeto e de Hooks incluídos em Plugins.

## Ordem de leitura

1. [Visão geral dos Hooks](/pt/skills/hooks/hooks-overview/): entenda as camadas de configuração, a confiança e o comportamento de execução.
2. [Tipos de evento de Hook](/pt/skills/hooks/hook-event-types/): escolha o evento e o matcher conforme o ciclo de vida.
3. [Exemplos de configuração de Hook](/pt/skills/hooks/hooks-examples/): execute um exemplo de proteção `PreToolUse` que pode ser testado com testes unitários.

## Critério rápido

| Objetivo | Considere primeiro |
|---|---|
| Recusar ou alterar a entrada antes de executar uma ferramenta | `PreToolUse` |
| Decidir quando o Codex está prestes a pedir ampliação de permissões | `PermissionRequest` |
| Registrar ou acrescentar feedback após a ferramenta terminar | `PostToolUse` |
| Verificar ou acrescentar contexto quando um prompt é enviado | `UserPromptSubmit` |
| Pedir que a thread principal ou um subagente continue por mais um turno | `Stop` / `SubagentStop` |

Hooks não substituem o sandbox, a aprovação, as regras de comando nem as permissões do servidor. São uma camada adicional de proteção, e alguns caminhos de ferramentas gerenciadas não passam por Hooks locais de ferramentas.

## Fonte oficial

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)
