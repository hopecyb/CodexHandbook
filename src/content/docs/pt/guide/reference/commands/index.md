---
title: Referência de comandos CLI
description: Consulta rápida de subcomandos e parâmetros habituais do CLI Codex — índice de aprendizagem, não substitui o manual oficial.
locale: pt
source_locale: zh-CN
source_revision: bdc537d
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 50
reviewed_at: 2026-08-26
---

A página de referência de comandos serve sobretudo para escolher a entrada, não para memorizar parâmetros de uma vez:

> **Agora devo usar a entrada interativa ou a de comando único?**

Esta página resume as entradas habituais do **CLI Codex** para procurar e contrastar. **Nomes de comando, parâmetros e valores por omissão mudam com a versão**; antes de executar, corre `codex --help` e o `--help` do subcomando, e prevalece a [documentação OpenAI Codex](https://developers.openai.com/codex).

## Quando usá-la

Usos habituais:

- Se devo entrar já ao interativo ou correr um comando de uma só vez
- Se a Tarefa é mais de chat ou mais de script
- Sei que quero o CLI, mas não sei que tipo de entrada olhar

## Escolha de entrada

- Ver, conversar e corrigir ao mesmo tempo: usa `codex`
- Entregar a Tarefa de uma vez e obter o resultado ao terminar: olha `codex exec`

Para quem começa com o CLI, isso já resolve a maior parte da escolha de entrada.

## Resumo de comandos (esquema)

| Entrada | Uso | Detalhe |
|---|---|---|
| `codex` | Sessão TUI interativa | [Modo interativo](/pt/guide/cli/interactive-mode/) |
| `codex exec` (ou equivalente) | Tarefa não interativa única / por pipeline | [Modo não interativo](/pt/guide/cli/non-interactive-mode/) |
| Relacionado com configuração | Ler/escrever configuração de utilizador/projeto | [Configuração do CLI](/pt/guide/cli/configuration/) |

:::caution[Sensível à versão]
Os nomes de parâmetros da tabela seguinte são redações habituais em documentação comunitária e **não garantem coincidir com o teu CLI instalado**. Após atualizar, volta a contrastar `--help`.
:::

## Mal-entendidos frequentes

### 1. Não precisas de memorizar todos os comandos da página de referência

O prático é saber primeiro «que tipo de entrada encaixa com a Tarefa atual»; o resto consulta-se no momento com `--help`.

### 2. `codex exec` não é só a versão avançada de `codex`

Orienta-se mais a desatendido, scripts e CI, não a uma entrada interativa «mais potente».

### 3. Ver um parâmetro não implica que devas tocá-lo já

Muitos parâmetros dependem da versão, do ambiente e da política de segurança atuais; compreende a intenção antes de decidir se os moves.

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

Mais leve do que afundar-te de golpe no detalhe de parâmetros.

## Exec não interativo (conceito)

```bash
# Diretório de trabalho e Prompt único (esquema)
codex exec --cd /path/to/repo "a tua descrição completa da Tarefa"

# Intenções habituais (nomes de parâmetro conforme o oficial)
# --cd          diretório de trabalho
# --model        modelo fixo
# --sandbox      política de Sandbox
# --approval     política de Aprovação (especialmente importante sem supervisão)
# pipeline stdin  ler o Prompt a partir de um ficheiro ou um comando a montante
```

Segurança: [Padrões de Aprovação humana](/pt/cases/workflows/human-approval-patterns/)

## Configuração e autenticação (conceito)

| Operação | Explicação |
|---|---|
| Início de sessão | Alinhado com [Iniciar sessão e autenticação](/pt/guide/getting-started/sign-in-and-authentication/) |
| Ficheiro de configuração | Nível utilizador / projeto; ver [Referência de configuração](/pt/guide/reference/configuration-reference/) |
| MCP | [Ligar MCP](/pt/skills/mcp/connect-an-mcp-server/) |

## Código de saída e automatização

O modo não interativo costuma usar o **código de saída** para sucesso/falha, pensado para CI:

- `0`: a Tarefa terminou segundo o acordado
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
| Aprovação bloqueia CI | Endurecer o Prompt + Sandbox só de leitura |

[Diagnóstico do CLI](/pt/guide/cli/troubleshooting/)

---

**Estado:** outdated  
**Produtos aplicáveis:** CLI  
**Nota de revisão:** Embora se tenha escrito o mais possível como «mapa de entradas», o núcleo continua a girar em torno de `codex`, `codex exec`, comandos `/` de sessão e intenções de parâmetros; são detalhes de produto do CLI muito voláteis; restaurar-se-á `verified` quando houver documentação oficial de comandos da versão mais recente.  
**Última verificação:** 2026-07-26
