---
title: Visão geral de MCP
description: Model Context Protocol — conecte o Codex com segurança a ferramentas e fontes de dados externas.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

MCP é um padrão de conexão para o Codex ligar ferramentas e fontes de dados externas.

Se você quer que o Codex consulte Jira, leia uma base de conhecimento, acesse APIs internas ou opere uma ferramenta controlada, precisa de um mecanismo para **como conectar, o que pode chamar e como gerir Permissão**. **MCP (Model Context Protocol)** resolve isso.

## Conteúdo

- MCP resolve o problema de o Codex «não alcançar sistemas reais»
- Divisão de papéis com Skill e Plugin
- Por que MCP deve entrar na governança de segurança

## Primeiro: o que não é

MCP não é:

- Colar usuário e senha direto no Codex
- Deixar o modelo «conectar como quiser»
- Tornar qualquer serviço de terceiros confiável por padrão

É uma forma padronizada de fiação, para tornar a conexão a sistemas externos mais controlável e auditável.

## Conceitos centrais

```text
Codex  ←→  Cliente MCP  ←→  Servidor MCP  ←→  Sistema externo
```

| Componente | Papel |
|---|---|
| Servidor MCP | Expõe um conjunto de ferramentas (ex.: `search_issues`, `get_user`) |
| Configuração | Diz ao Codex como iniciar/conectar o servidor |
| Chamada de ferramenta | O modelo escolhe a ferramenta na Tarefa; muitas vezes exige sua Aprovação |

MCP **não fornece** a lógica de negócio em si. Seu servidor implementa as regras de leitura/escrita; o Codex escolhe qual ferramenta usar na Tarefa.

## Onde MCP se encaixa

Skill tende a «manual de operação»; MCP trata de «interface de ferramenta».

- Skill explica os passos
- MCP entrega certas ferramentas externas às mãos do Codex

Muitas vezes os dois aparecem juntos:  
o Skill define o fluxo; algum passo do fluxo chama uma ferramenta MCP.

## Relação com Skill e Plugin

| | MCP | Skill | Plugin |
|---|---|---|---|
| Essência | Protocolo de ferramenta | Instrução de workflow | Pacote de distribuição |
| Conteúdo típico | Encapsulamento de API | Passos e normas | Skill + MCP + conectores de app |
| Quem mantém | Você ou servidor de terceiros | Você ou a equipe | Publicador |

Combinação comum: **Skill define o fluxo**; em algum passo **chama ferramenta MCP** para puxar a lista de tickets.

## Quando considerar MCP

Se a Tarefa só precisa ler/escrever arquivos do repositório atual, em geral não precisa de MCP.  
Se precisa tocar sistemas reais «fora do repositório», comece a considerar MCP, API ou outra integração controlada.

## Cenários adequados

| Adequado a MCP | Não adequado a MCP |
|---|---|
| Consultar tickets Linear/Jira | Só alterar código dentro do repositório |
| Consulta só leitura a docs/base de conhecimento | Um `curl` simples basta e não precisa reutilizar |
| Ferramentas internas controladas | Escrita em produção de alta Permissão sem auditoria |

## Equívocos comuns

### 1. Com MCP conectado, o Codex faz tudo

O que ele pode fazer depende das ferramentas que o servidor MCP expõe e do que essas ferramentas permitem.

### 2. MCP é só integração técnica, não segurança

Assim que MCP conecta a sistemas reais, vira ao mesmo tempo:

- Problema de Permissão
- Problema de exposição de dados
- Problema de auditoria
- Problema de cadeia de suprimentos

### 3. Com MCP, não precisa mais de Skill nem docs

Ainda precisa. MCP resolve «dá para chamar a ferramenta»; não resolve «em que fluxo chamar e quando não chamar».

## Limites de segurança

- **Permissão mínima**: só leitura, projeto limitado, IP limitado
- **Credenciais**: OAuth ou token de curta duração — não no Prompt, não no Git
- **Aprovação humana**: escrita, exclusão em lote, envio externo de mensagens devem ter revisão
- **Cadeia de suprimentos**: conecte só servidores confiáveis; revise o código-fonte de MCP de terceiros

Cenários empresariais: roadmap `11-team-enterprise/security/plugin-and-mcp-risk`.

## Ordem de integração

1. Leia a documentação oficial de MCP e confirme o formato de configuração do cliente atual
2. Comece com um servidor de exemplo oficial ou da comunidade **só leitura**
3. Valide uma única chamada de ferramenta num projeto de teste
4. Só então conecte sistemas reais e escreva o runbook

Passos práticos: [Conectar um servidor MCP](/skills/mcp/connect-an-mcp-server/)

## Começar só leitura

Quando MCP toca um sistema real, entra na cadeia de permissões, dados e auditoria. O caminho mais seguro é: dados de teste, validação só leitura pela equipa, poucas escritas reversíveis com aprovação humana e, depois, governação com papéis, auditoria e auth revogável.

Se o valor do servidor depende de escritas privilegiadas, separa primeiro ferramentas de leitura e escrita.

## Checklist antes da ligação

- Que ferramentas o servidor expõe? Há escrita?
- Onde ficam as credenciais e como revogar por pessoa/projeto/ambiente?
- Logs podem conter dados de clientes, documentos internos ou fragmentos de secret?
- Uma chamada de ferramenta foi testada em sandbox?
- Escritas têm confirmação humana, rollback e auditoria?

## Erros comuns

- Dar Permissão alta demais ao servidor MCP «para facilitar o desenvolvimento»
- Tratar MCP como substituto de Skill (a descrição do fluxo ainda deve estar em Skill ou AGENTS.md)
- Mudança de configuração fora da revisão de código

## Fontes
- [Model Context Protocol](https://modelcontextprotocol.io/)
- Documentação OpenAI Codex MCP
---

**Status:** outdated  
**Produtos aplicáveis:** App / CLI / IDE  
**Nota de revisão:** Há conteúdo conceitual, mas também julgamentos de implementação atual («formato de configuração do cliente», «comportamento de Aprovação»); até 2026-07-26 a base oficial pública não basta para homologar por completo.  
**Última Verificação:** 2026-07-26
