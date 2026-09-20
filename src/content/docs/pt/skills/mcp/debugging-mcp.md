---
title: Depurar uma ligação MCP
description: "Localiza falhas MCP em quatro camadas: configuração, transporte, autenticação e ferramentas."
locale: pt
source_locale: zh-CN
source_revision: d35b635
translation_status: draft
translated_at: 2026-09-20
---

É comum resumir todas as falhas MCP a “a ferramenta não funciona”. É mais rápido identificar primeiro em que camada ocorre a falha e depois alterar apenas uma variável de cada vez.

## Guardar primeiro quatro evidências

```bash
codex mcp list
codex mcp --help
node --version   # apenas se o servidor STDIO usar Node.js
python3 --version # apenas se o servidor STDIO usar Python
```

Regista também o nome do servidor, se usa STDIO ou Streamable HTTP, a mensagem de erro exata e em que ambiente aconteceu (aplicação de desktop, CLI ou IDE). Não guardes o token completo.

## Diagnóstico em quatro camadas

| Camada | Sintoma típico | Primeira verificação |
|---|---|---|
| Configuração | O servidor não aparece na lista | Caminho do ficheiro, sintaxe TOML, nome do servidor, `enabled` |
| Arranque/ligação | Tempo limite da inicialização esgotado | Comando STDIO e PATH, ou URL HTTP, TLS e proxy |
| Autenticação | 401/403 ou pedido de início de sessão | Estado OAuth, variável de ambiente do token, scope |
| Ferramenta | O servidor está online, mas a chamada falha | Nome da ferramenta, argumentos, allowlist e tempo limite |

## 1. Confirmar que a configuração foi lida

- O ficheiro do utilizador é `~/.codex/config.toml`.
- O ficheiro do projeto é `.codex/config.toml` e só é carregado em projetos de confiança.
- A aplicação de desktop, a CLI e o IDE partilham a configuração no mesmo Codex host. Não mantenhas três cópias que acabam por divergir.
- Consulta o estado real com `codex mcp list` ou `/mcp` na sessão. A existência de um ficheiro não comprova o sucesso da ligação.

## 2. O servidor STDIO não arranca

Verifica se `command` está disponível no PATH, se a versão do runtime cumpre os requisitos do servidor, se `cwd` existe e se a origem das dependências é fiável.

Executar diretamente o comando de arranque mostra apenas que o executável consegue iniciar. Um servidor MCP pode parecer não terminar porque está à espera de entrada do protocolo; isso pode ser normal e não equivale a testar uma chamada completa de ferramenta.

Só aumentes `startup_timeout_sec` se a inicialização for realmente lenta. O valor predefinido é 10 segundos; um valor arbitrariamente alto pode apenas esconder um comando incorreto.

## 3. Falha na ligação Streamable HTTP

Verifica pela seguinte ordem:

1. A URL e o certificado TLS
2. O proxy da empresa ou a VPN
3. Se existe a variável de ambiente apontada por `bearer_token_env_var`
4. Se o OAuth exige nova execução de `codex mcp login <server-name>`
5. Se os registos do servidor receberam o pedido de inicialização

Não mudes o token para um valor estático em `http_headers` como medida de “depuração temporária”. Pode acabar no ficheiro de configuração ou numa captura de ecrã.

## 4. O servidor está online, mas a ferramenta não funciona

| Sintoma | Verificação |
|---|---|
| As ferramentas não aparecem | `enabled_tools` / `disabled_tools` e lista devolvida pelo servidor |
| Tool not found | Versão do servidor, mudança de nome da ferramenta ou lista antiga mantida pela sessão |
| Falha na validação dos argumentos | Conferir o schema da ferramenta em vez de adivinhar campos a partir de um prompt antigo |
| Chamada excede o tempo limite | Reduzir a consulta e depois verificar `tool_timeout_sec`; valor predefinido: 60 segundos |
| Resultado vazio | Verificar no sistema de origem, com a mesma conta, o âmbito dos dados e os filtros |

## Prompt de reprodução mínima

```text
Verifica apenas o servidor MCP <server-name>:
1. Indica os nomes das ferramentas atualmente visíveis.
2. Chama <readonly-tool> usando apenas <minimal-arguments>.
3. Preserva o tipo de erro e a mensagem do servidor, mas oculta as credenciais.
4. Não chames outros servidores nem executes operações de escrita.
```

## Critérios para concluir a depuração

- [ ] O estado apresentado por `codex mcp list` corresponde ao esperado.
- [ ] Uma ferramenta só de leitura funciona com o mínimo de argumentos.
- [ ] A causa raiz foi atribuída a uma camada concreta, não apenas a “reiniciar resolveu”.
- [ ] Tokens temporários, registos de debug e permissões amplas foram retirados.
- [ ] A configuração da equipa e as instruções de correção foram atualizadas.

## Fonte oficial

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
