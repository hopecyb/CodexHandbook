---
title: MCP
description: Páginas sobre conectar ferramentas e fontes de dados externas — quando MCP é realmente necessário.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`MCP` é um padrão de conexão: o Codex usa MCP para ligar ferramentas e fontes de dados externas.

Se Skill tende a «passos para fazer o trabalho», MCP trata de «trazer a ferramenta externa para dentro».

## Conteúdo deste grupo

- Em que situações MCP é realmente necessário
- Como conectar sistemas externos sem abrir Permissão demais
- Quando a conexão ou a chamada falha, quais classes de problema olhar primeiro

## Ordem recomendada

1. [Visão geral de MCP](/skills/mcp/mcp-overview/): separe o papel de MCP, Skill e Plugin
2. [Conectar um servidor MCP](/skills/mcp/connect-an-mcp-server/): conecte o primeiro servidor pela lógica de configuração
3. [Depurar MCP](/skills/mcp/debugging-mcp/): o que fazer quando não conecta, a ferramenta não aparece ou a Permissão está errada

## Equívocos comuns

### 1. Com MCP conectado, o Codex «faz tudo»

O que ele pode fazer depende só das ferramentas que aquele servidor MCP expõe e de quanta Permissão essas ferramentas concedem.

### 2. MCP é só um problema técnico de integração

Assim que conecta a sistemas reais, vira ao mesmo tempo:

- Problema de Permissão
- Problema de exposição de dados
- Problema de auditoria

Aqui não é só «como conectar», mas também «como não conectar de forma desordenada».

MCP só vale a pena quando a Tarefa precisa tocar sistemas reais fora do repositório.

---

**Status:** outdated  
**Produtos aplicáveis:** App / CLI / IDE  
**Nota de revisão:** Estas páginas envolvem a forma atual de integração MCP no Codex, o local de configuração e a combinação com Permissões; a documentação oficial pública cobre pouco o detalhe do cliente — precisa ser reescrita conforme o produto vigente.  
**Última Verificação:** 2026-07-26
