---
title: Referência de comandos CLI
description: Consulta rápida de subcomandos e parâmetros habituais do CLI Codex — índice de aprendizagem, não substitui o manual oficial.
locale: pt
source_locale: zh-CN
source_revision: "6091bcc"
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 50
legacyVerification:
  status: verified
  products: CLI
  basis: 'Conferido com a tabela oficial atual de Developer commands: só são listadas entradas Stable e foram verificados --cd / -C, sandbox e aprovação. Comandos experimentais ou obsoletos ficam fora.'
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-26'
---


A página de referência de comandos serve sobretudo para escolher a entrada, não para memorizar parâmetros de uma vez:

> **Agora devo usar a entrada interativa ou a de comando único?**

Esta página reúne as entradas **Stable** atuais do Codex CLI para consulta e comparação. Antes de executar, consulta `codex --help` e o `--help` de cada subcomando; a maturidade e os parâmetros completos seguem [Developer commands](https://learn.chatgpt.com/docs/developer-commands).

## Quando usá-la

Usos habituais:

- Se devo entrar já ao interativo ou correr um comando de uma só vez
- Se a tarefa é mais de chat ou mais de script
- Sei que quero o CLI, mas não sei que tipo de entrada olhar

## Escolha de entrada

- Ver, conversar e corrigir ao mesmo tempo: usa `codex`
- Entregar a tarefa de uma vez e obter o resultado ao terminar: olha `codex exec`

Para quem começa com o CLI, isso já resolve a maior parte da escolha de entrada.

## Visão geral dos comandos Stable

| Entrada | Uso | Detalhe |
|---|---|---|
| `codex` | Sessão TUI interativa | [Modo interativo](/pt/guide/cli/interactive-mode/) |
| `codex exec` / `codex e` | tarefa única ou em pipeline, não interativa | [Modo não interativo](/pt/guide/cli/non-interactive-mode/) |
| `codex doctor` | Gerar relatório de diagnóstico de instalação, configuração, autenticação, ambiente de execução, Git e terminal | [Diagnóstico do CLI](/pt/guide/cli/troubleshooting/) |
| `codex login` / `codex logout` | Gerir a autenticação | [Início de sessão e autenticação](/pt/guide/getting-started/sign-in-and-authentication/) |
| `codex resume` / `codex fork` | Retomar ou bifurcar uma sessão guardada | [Passagem de contexto e retomada](/pt/guide/agent-work/handoff-and-resume/) |
| `codex mcp` | Gerir servidores MCP | [Ligar MCP](/pt/skills/mcp/connect-an-mcp-server/) |
| `codex plugin` | Instalar, listar e remover plugins | [Plugins](/pt/skills/plugins/) |

:::caution[Níveis de maturidade diferentes]
A referência oficial também contém comandos Experimental, Beta e Deprecated. Esta consulta básica não os mistura com os Stable; confirma a maturidade e os riscos antes de os usar.
:::

## Mal-entendidos frequentes

### 1. Não precisas de memorizar todos os comandos da página de referência

O prático é saber primeiro «que tipo de entrada encaixa com a tarefa atual»; o resto consulta-se no momento com `--help`.

### 2. `codex exec` não é só a versão avançada de `codex`

Destina-se mais à execução sem supervisão, scripts e CI, não a uma entrada interativa «mais potente».

### 3. Ver um parâmetro não implica que devas tocá-lo já

Muitos parâmetros dependem da versão, do ambiente e da política de segurança atuais; compreende a intenção antes de decidir se os alteras.

### 4. A página de referência de comandos ≠ tutorial de operação

É:

- Um mapa de entradas
- Um índice de parâmetros
- Um ponto de passagem a «que página olhar com mais detalhe»

## Modo interativo (conceito)

```bash
# Arrancar sessão interativa na raiz do repo (esquema)
codex

# Operações habituais dentro da sessão (conforme a TUI)
# - Escrever a descrição da Tarefa
# - / slash commands → ver a página slash-commands
# - Aprovar pedidos de shell / escrita de ficheiros
```

Slash commands: [Slash commands](/pt/guide/reference/slash-commands/)

## Critério de entrada

Ao começar com o CLI:

1. Corre primeiro `codex --help`
2. Decide se entrar ao interativo ou olhar `exec`
3. Quando usares de verdade um subcomando, olha o seu próprio `--help`

Assim é menos fácil travar de entrada em toda a tabela de parâmetros.

## Arranque rápido

Se queres começar já:

1. Corre primeiro `codex --help`
2. Se queres conversar e agir ao mesmo tempo, entra em `codex`
3. Se é para CI ou scripts, então estuda `codex exec`

Mais leve do que mergulhar logo nos detalhes dos parâmetros.

## Exec não interativo (conceito)

```bash
# Diretório de trabalho e prompt único (exemplo)
codex exec --cd /path/to/repo "a tua descrição completa da tarefa"

# Parâmetros habituais atuais
# --cd, -C       diretório de trabalho
# --model        fixar o modelo
# --sandbox      política de sandbox
# --ask-for-approval, -a  política de aprovação
# pipeline stdin  ler o prompt de um ficheiro ou comando anterior
```

Segurança: [Padrões de aprovação humana](/pt/cases/workflows/human-approval-patterns/)

## Configuração e autenticação (conceito)

| Operação | Explicação |
|---|---|
| Início de sessão | Alinhado com [Iniciar sessão e autenticação](/pt/guide/getting-started/sign-in-and-authentication/) |
| Ficheiro de configuração | Nível utilizador / projeto; ver [Referência de configuração](/pt/guide/reference/configuration-reference/) |
| MCP | [Ligar MCP](/pt/skills/mcp/connect-an-mcp-server/) |

## Código de saída e automatização

O modo não interativo costuma usar o **código de saída** para sucesso/falha, pensado para CI:

- `0`: a tarefa terminou segundo o acordado
- Diferente de `0`: falha ou faz falta intervenção humana — olha o log artifact

A página de comandos CLI serve sobretudo para distinguir entradas e consultar intenções; não precisas de memorizar parâmetros para começar.

Não ignores stderr em CI; conserva logs para [diagnosticar primeiro](/pt/cases/workflows/diagnose-before-fixing/).

## Diferença com os slash commands do chat

| | Terminal `codex` | `/` dentro da sessão |
|---|---|---|
| Documentação | Esta página + manual de produto | [slash-commands](/pt/guide/reference/slash-commands/) |
| Adequado | Scripts, CI | Exploração interativa |

## Diagnóstico

| Fenómeno | Aponta para |
|---|---|
| Comando não existe | [Instalar CLI](/pt/guide/getting-started/install-cli/) |
| Configuração não aplica | [Configuração do CLI](/pt/guide/cli/configuration/) |
| aprovação bloqueia CI | Endurecer o prompt + Sandbox só de leitura |

[Diagnóstico do CLI](/pt/guide/cli/troubleshooting/)
