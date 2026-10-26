---
legacyVerification:
  status: "verified"
  products: "App ChatGPT para desktop / Codex CLI / IDE; ChatGPT Web usa ferramentas MCP remotas por Plugins"
  checkedAt: "2026-08-25"
title: Visão geral de MCP
description: Compreende o cliente, o servidor, as ferramentas, a autenticação e os limites de segurança do MCP.
locale: pt
source_locale: zh-CN
source_revision: "98a0626"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

O MCP transforma a intenção de um modelo usar uma capacidade externa numa chamada de ferramenta estruturada. Serve para ligar documentação de terceiros, navegadores, Figma, sistemas de tickets ou serviços internos.

![Ilustração: o assistente se conecta a um hub universal com cabos padrão ligados a banco de dados, calendário, quadro de chamados e nuvem](/illustrations/mcp-overview.webp)

## Uma cadeia de chamadas

```text
Codex numa tarefa
  -> cliente MCP (fornecido pelo Codex host)
  -> servidor MCP (processo local ou serviço remoto)
  -> sistema externo (documentação, design, tickets, API interna)
  -> resultado estruturado devolvido à tarefa
```

| Componente | Responsabilidade | O que não faz |
|---|---|---|
| Codex host | Lê a configuração, liga aos servidores e disponibiliza ferramentas ao Agent | Não define as permissões de negócio do servidor |
| Servidor MCP | Define ferramentas, autenticação, argumentos e resultados estruturados | Não garante automaticamente a segurança das ferramentas |
| Skill | Indica quando e em que passos usar as ferramentas | Não estabelece a ligação à rede |
| Plugin | Combina e distribui Skills, conectores, MCP e outras capacidades | Não é outro protocolo de ferramentas |

## Formas de servidor atualmente suportadas

### STDIO

O Codex inicia um processo local e comunica através da entrada e saída padrão. É adequado a ferramentas de desenvolvimento locais e serviços que só funcionam na máquina atual.

Risco principal: o processo herda o ambiente de execução local. Analisa o comando, a origem das dependências e as variáveis de ambiente transmitidas.

### Streamable HTTP

O Codex liga-se a um endereço remoto. A documentação oficial atual confirma o suporte a Bearer token, OAuth e autenticação por sessão ChatGPT para servidores de confiança da própria OpenAI.

Risco principal: o serviço remoto recebe os argumentos das ferramentas. Verifica TLS, identidade, registros, retenção de dados e permissões das ferramentas.

## Combinar MCP, Skill e Plugin

Considera uma verificação semanal de tickets de alta prioridade:

| Camada | Conteúdo |
|---|---|
| MCP | Disponibiliza ferramentas como `search_issues` e `get_issue` |
| Skill | Define filtros, evidências necessárias e formato do relatório |
| Plugin | Distribui à equipe o Skill, o conector e a definição de MCP |
| Scheduled task | Executa a tarefa já verificada num horário fixo |

São responsabilidades diferentes, não degraus de uma escala de evolução. Consulta o [mapa das capacidades de extensão](/pt/skills/capability-map/) para a relação completa.

## Quando vale a pena ligar MCP

| Vale a pena | Ainda não vale a pena |
|---|---|
| Consultar repetidamente o mesmo sistema externo | Consultar uma página Web pública uma única vez |
| Precisar de argumentos e resultados estruturados | As operações sobre arquivos do repositório são suficientes |
| Precisar de OAuth ou controle detalhado das ferramentas | Só há operações de escrita muito privilegiadas e não existe ambiente de teste |
| A equipe precisa de reutilizar a mesma ligação | Não é possível verificar a origem do servidor |

## Níveis de segurança

1. **Ensaio só de leitura**: documentos públicos ou conta de teste, apenas com ferramentas de consulta.
2. **Validação em equipe**: limitar projeto, funções e allowlist de ferramentas; registar falhas e duração.
3. **Escritas limitadas**: pequenas operações reversíveis com aprovação humana.
4. **Operação governada**: autorizações revogáveis, configuração verificável, registros sem dados sensíveis e separação por ambiente.

Não coloques tokens em prompts, no Git ou em cabeçalhos HTTP estáticos. Dá preferência a OAuth, `bearer_token_env_var` ou ao encaminhamento de variáveis de ambiente.

## Lista antes da ligação

- [ ] É possível verificar a origem, a versão e o comando de arranque do servidor.
- [ ] A lista de ferramentas distingue operações de leitura e de escrita.
- [ ] É usada uma conta de teste ou com permissões mínimas.
- [ ] Está claro que argumentos e resultados podem entrar nos registros remotos.
- [ ] As escritas têm aprovação, possibilidade de reversão e trilho de auditoria.
- [ ] A equipe sabe desativar o servidor e revogar a autorização.

## Próximo passo

Vai para [Ligar um servidor MCP](/pt/skills/mcp/connect-an-mcp-server/). Começa com um servidor só de leitura e depois verifica com `codex mcp list` e `/mcp`.

## Fontes oficiais

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
