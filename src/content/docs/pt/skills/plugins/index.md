---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / App para desktop / Mobile; Codex para desktop e CLI; a extensão IDE não suporta Plugins"
  checkedAt: "2026-08-26"
title: Plugins
description: Explore, instale e gerencie conjuntos reutilizáveis de Skills, conectores, MCP, Hooks e modelos de tarefa.
locale: pt
source_locale: zh-CN
source_revision: "8917a59"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Um Plugin é uma unidade para combinar e distribuir recursos. Ele pode incluir Skills, conectores, servidores MCP, extensões de navegador, Hooks e modelos de Scheduled task. O trabalho em si continua sendo executado por esses componentes.

## Para quem é

- Pessoas que querem instalar um conjunto pronto de recursos a partir de um catálogo público.
- Mantenedores que precisam distribuir procedimentos, ferramentas e proteções da equipe como uma unidade versionada.
- Administradores que examinam a origem, as permissões de serviços externos e os Hooks de um Plugin.

## Superfícies atualmente compatíveis

| Superfície | Explorar/instalar | Usar |
|---|---|---|
| ChatGPT Web e aplicativo para desktop | Aba Plugins | Chat e Work |
| ChatGPT Mobile | Não é a principal interface de gerenciamento | Plugins já disponíveis na conta |
| Codex no aplicativo ChatGPT para desktop | Aba Plugins | tarefas do Codex |
| Codex CLI | Navegador `/plugins`; abra uma nova sessão após instalar | Ambiente Codex |
| Extensão IDE | **Não aceita Plugins** | Pode usar separadamente MCP, Skills e outros recursos disponíveis no IDE |

## Por onde começar a leitura

- [Visão geral dos Plugins](/pt/skills/plugins/plugins-overview/): componentes, compatibilidade, verificação da instalação e análise de segurança.
- [Mapa dos recursos de extensão](/pt/skills/capability-map/): compare Plugin, Skill, MCP, Hook e Scheduled task.

## Perguntas antes de instalar

1. Quem é a fonte e quem mantém o Plugin?
2. Quais Skills, conectores, servidores MCP, recursos de navegador e Hooks ele contém?
3. É preciso conectar contas externas? Que escopos de acesso receberá?
4. Os Hooks foram examinados e considerados confiáveis em `/hooks`?
5. Como a equipe desativa, atualiza, reverte e revoga as autorizações?

## Fonte oficial

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
