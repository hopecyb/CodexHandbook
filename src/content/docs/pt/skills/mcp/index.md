---
legacyVerification:
  status: "verified"
  products: "App ChatGPT para desktop / Codex CLI / IDE; ChatGPT Web usa ferramentas MCP remotas por Plugins"
  basis: "Suporte dos clientes, configuração compartilhada, transportes e comandos da CLI."
  checkedAt: "2026-08-25"
title: MCP
description: Conecte ferramentas e contexto de terceiros ao ChatGPT e ao Codex com controle de acesso.
locale: pt
source_locale: zh-CN
source_revision: "8d9ec38"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

O MCP (Model Context Protocol) resolve a questão de como um Agent usa ferramentas e dados fora do repositório. Ele não define, por si só, um fluxo de trabalho.

## Para quem é

- Desenvolvedores que querem consultar documentação, designs, tickets ou ferramentas internas pelo Codex.
- Equipes que precisam padronizar ferramentas externas, OAuth e permissões mínimas.
- Responsáveis por investigar casos em que o servidor está configurado, mas as ferramentas não aparecem ou falham.

Se a tarefa só precisa ler ou escrever no repositório atual, comece com os recursos internos de arquivos e terminal. Conecte o MCP quando precisar de contexto ou ações de terceiros.

## Ordem de leitura

1. [Visão geral do MCP](/pt/skills/mcp/mcp-overview/): diferencie as responsabilidades de MCP, Skill e Plugin.
2. [Conectar um servidor MCP](/pt/skills/mcp/connect-an-mcp-server/): adicione o primeiro servidor pelo CLI ou por `config.toml`.
3. [Depurar uma conexão MCP](/pt/skills/mcp/debugging-mcp/): investigue as camadas de configuração, inicialização, autenticação e ferramentas.

## Limites de suporte atuais

- O aplicativo ChatGPT para desktop, o Codex CLI e a extensão IDE compartilham a configuração MCP no mesmo Codex host.
- Os clientes Codex locais aceitam servidores STDIO e Streamable HTTP.
- O ChatGPT Web não lê o `~/.codex/config.toml` local; ele usa ferramentas MCP remotas fornecidas por Plugins instalados.

## Três pontos para lembrar

1. O MCP expõe ferramentas, mas não define um procedimento confiável. Registre procedimentos estáveis em uma Skill ou em `AGENTS.md`.
2. O que um servidor pode fazer depende das ferramentas que ele expõe e do alcance das credenciais associadas.
3. Na primeira conexão, comece com acesso somente leitura, um ambiente de teste e poucas ferramentas. Não faça o teste com um token de administrador de produção.

## Fontes oficiais

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [Especificação do Model Context Protocol](https://modelcontextprotocol.io/)
