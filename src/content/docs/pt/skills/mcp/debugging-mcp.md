---
title: Depurar conexões MCP
description: Passos sistemáticos quando o servidor MCP não sobe, a ferramenta dá timeout ou o resultado parece errado.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

MCP traz sistemas externos para o Codex. Falhas costumam cair em três classes: **processo não sobe**, **autenticação errada**, **lógica da ferramenta ou timeout**. Esta página dá a ordem de checagem, para não ficar alterando configuração no chute.

## Conteúdo desta página

- Como reproduzir o mínimo de um problema MCP
- Checklist de logs e configuração
- Quando suspeitar da implementação do servidor, não do Codex

Relacionado: [Visão geral de MCP](/skills/mcp/mcp-overview/) · [Conectar um servidor MCP](/skills/mcp/connect-an-mcp-server/)

## Triagem

```text
1. O servidor sobe sozinho no terminal?
2. A sintaxe e o caminho do JSON/TOML de configuração estão corretos?
3. As variáveis de ambiente são visíveis no processo MCP?
4. A sessão do Codex foi reiniciada para carregar a nova configuração?
5. A chamada a uma ferramenta isolada dá timeout / parâmetros errados?
```

## Falha na inicialização

| Item | Observação |
|---|---|
| Caminho do comando | `npx`, `uvx`, caminho absoluto estão no PATH? |
| Versão de dependências | Node/Python atendem ao servidor MCP? |
| Execução manual | Copie command + args da configuração e rode no shell |
| Transporte | stdio vs HTTP/SSE bate com a documentação? |

## Falha de autenticação

- A API key é injetada por variável de ambiente (não escrita no repositório)?
- MCP OAuth expirou e precisa reautorizar?
- Proxy corporativo bloqueia saída MCP?

Índice de variáveis de ambiente: [variáveis de ambiente](/guide/reference/environment-variables/)

## Chamada de ferramenta anormal

| Sintoma | Possível causa |
|---|---|
| Tool not found | Versão do servidor e schema do cliente incompatíveis |
| Timeout | API externa lenta; aumente o timeout ou otimize a consulta |
| Resultado vazio | Nome de parâmetro errado; veja logs do servidor MCP |
| Caracteres corrompidos | Encoding diferente de UTF-8 |

No Prompt, peça ao Agent para **imprimir a estrutura retornada pela ferramenta** (com dados sensíveis mascarados) para facilitar a depuração.

## Hábitos seguros de depuração

- Use API key de **tenant de teste**, não de produção
- Não cole token completo no chat nos logs de debug
- Se suspeitar de MCP malicioso, desconecte na hora e rotacione as chaves

Índice de erros: [referência de erros e avisos](/guide/reference/error-reference/)

## Erros comuns

- Alterar configuração sem reiniciar a sessão do Codex
- IDE e CLI com configurações MCP inconsistentes
- Deixar log do servidor MCP em debug para sempre e colar screenshot com segredo

## Checklist de aceite

- [ ] Consegue iniciar o servidor MCP sozinho no terminal
- [ ] Chamou com sucesso pelo menos uma ferramenta só leitura
- [ ] Registrou o template padrão de configuração MCP da equipe

## Fontes
- Especificação e guia de debug do Model Context Protocol
---

**Status:** outdated  
**Produtos aplicáveis:** CLI / IDE / App  
**Nota de revisão:** Os passos de triagem dependem de como o cliente Codex atual carrega, exibe e chama ferramentas MCP; essa parte tem risco alto de mudança — precisa reconfirmação com a documentação vigente.  
**Última Verificação:** 2026-07-26
