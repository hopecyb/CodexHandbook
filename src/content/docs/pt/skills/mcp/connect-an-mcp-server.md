---
legacyVerification:
  status: "verified"
  products: "App ChatGPT para desktop / Codex CLI / IDE"
  checkedAt: "2026-08-25"
title: Ligar um servidor MCP
description: Configura, autentica e verifica o primeiro servidor MCP com a CLI ou o config.toml.
locale: pt
source_locale: zh-CN
source_revision: '67b417d'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Este capítulo usa as interfaces oficiais atuais para completar o ciclo mínimo: **adicionar o servidor → consultar a configuração → confirmar as ferramentas numa sessão → fazer uma chamada só de leitura**.

![Ilustração: um assistente encaixa um conector em um servidor, a autorização acende a luz verde e uma requisição de teste segue pelo cabo até um banco de dados e volta com um resultado](/illustrations/mcp-connect.webp)

## Antes de começar

- Lê a [Visão geral de MCP](/pt/skills/mcp/mcp-overview/).
- Confirma que `codex mcp --help` funciona no teu computador.
- Para a primeira ligação, escolhe uma origem confiável e um cenário só de leitura.
- Não escrevas tokens reais no histórico de comandos, nos prompts nem no repositório.

## Caminho A: adicionar um servidor STDIO com a CLI

O exemplo oficial usa o servidor de documentação Context7:

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
codex mcp list
```

O comando escreve o servidor na configuração do Codex. Depois de `--` vem o comando que inicia o servidor STDIO. A primeira execução pode baixar um pacote npm; confirma antes o nome e a origem do pacote.

## Caminho B: editar diretamente o config.toml

A configuração do usuário fica, por padrão, em `~/.codex/config.toml`. Num projeto de confiança também podes usar `.codex/config.toml` ao nível do projeto.

Exemplo STDIO:

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
startup_timeout_sec = 10
tool_timeout_sec = 60
```

Exemplo remoto de Streamable HTTP:

```toml
[mcp_servers.internal_docs]
url = "https://mcp.example.com"
bearer_token_env_var = "INTERNAL_DOCS_TOKEN"
enabled_tools = ["search_docs", "get_doc"]
```

`internal_docs`, o endereço e os nomes das ferramentas são apenas exemplos da estrutura. Substitui-os pelos valores reais indicados na documentação do teu servidor. `bearer_token_env_var` guarda o **nome da variável de ambiente**, não o próprio token.

## Servidores OAuth

Depois de configurares um servidor que suporta OAuth, executa:

```bash
codex mcp login <server-name>
```

As listas de servidores MCP na aplicação de desktop e no IDE também assinalam os que precisam de OAuth e apresentam uma ação Authenticate.

## Como consultar nos três clientes

| Ambiente | Entrada para configuração ou consulta |
|---|---|
| Aplicação de desktop do ChatGPT | Settings → MCP servers; depois de guardar, Restart; usa `/mcp` para ver a ligação |
| Codex CLI | `codex mcp add/list/login`; no TUI, usa `/mcp` |
| Extensão IDE | Menu da roda dentada → MCP servers; depois de guardar, Restart extension |

Os três partilham a configuração no mesmo Codex host; não é preciso manter três arquivos separados. O ChatGPT Web não lê a configuração local.

## Prompt de verificação

```text
Usa apenas o servidor MCP atualmente ligado para fazer estas verificações:
1. Lista os nomes das ferramentas disponíveis para consultar documentação de desenvolvimento.
2. Escolhe uma ferramenta só de leitura e procura a utilização básica do test runner de Node.js.
3. Indica que ferramenta foi realmente chamada.
4. Não executes escritas nem ligues outros serviços.
```

As evidências de aceitação são: o servidor aparece em `codex mcp list` ou `/mcp`, uma ferramenta só de leitura devolve um resultado estruturado e não há pedidos de permissões irrelevantes.

## Opções de privilégio mínimo

- `enabled_tools`: permite apenas as ferramentas da lista.
- `disabled_tools`: exclui ferramentas adicionais depois da allowlist.
- `enabled = false`: conserva a configuração, mas desativa temporariamente o servidor.
- `required = true`: faz falhar o arranque se o servidor não iniciar; adequado apenas quando é uma dependência indispensável.

## Se falhar

Não alteres vários campos ao mesmo tempo por adivinhação. Regista o erro exato e segue [Depurar uma ligação MCP](/pt/skills/mcp/debugging-mcp/) para verificar, pela ordem, a leitura da configuração, o processo ou a rede, a autenticação e uma ferramenta individual.

## Fonte oficial

- [OpenAI: ligar o Codex a um servidor MCP](https://learn.chatgpt.com/docs/extend/mcp#connect-codex-to-an-mcp-server)
