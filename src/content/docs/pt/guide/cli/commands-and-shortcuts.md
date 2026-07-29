---
title: Comandos e atalhos
description: Subcomandos da CLI, operações na sessão e hábitos de teclado — explicação orientada ao produto; parâmetros completos na zona de referência.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

A eficiência no terminal vem de três blocos: **forma de arranque**, **atalhos dentro da sessão** e **coordenação com scripts/editores**. Esta página fala de uso e hábitos; tabelas de parâmetros em [Referência de comandos da CLI](/guide/reference/commands/) e [Atalhos de teclado](/guide/reference/keyboard-shortcuts/).

## Conteúdo desta página

- Quando usar `codex` e quando usar `codex exec`
- Que tipos de operação são comuns numa sessão interativa
- Como solidificar operações repetidas em aliases ou scripts

## O que distinguir primeiro

Muitos iniciantes, ao ver a CLI pela primeira vez, pensam que «comandos e atalhos» é decorar sintaxe e parâmetros.

O mais prático é distinguir três coisas:

- Está agora a **conversar enquanto faz**
- Ou quer que **corra uma Tarefa de uma vez**
- Ou só quer **encurtar ações que repete muitas vezes**

Com isto claro, a escolha de muitos comandos fica bem mais simples.

## Vista geral das entradas de comando

| O que quer fazer | Entrada | Detalhe |
|---|---|---|
| Conversar enquanto altera código | TUI interativa `codex` | [Modo interativo](/guide/cli/interactive-mode/) |
| Tarefa pontual em CI / pipeline | `codex exec` (ou equivalente) | [Modo não interativo](/guide/cli/non-interactive-mode/) |
| Alterar o comportamento predefinido | Ficheiro de configuração | [Configuração da CLI](/guide/cli/configuration/) |

:::note
Os nomes dos subcomandos mudam com a versão; siga `codex --help`.
:::

## Mal-entendidos frequentes

### `codex` e `codex exec` não são «simples» vs «profissional»

Muita gente interpreta assim:

- Um é o modo simples
- Outro é o modo profissional

Uma divisão mais útil:

- `codex` adequa-se quando está presente e guia enquanto observa
- `codex exec` adequa-se quando já descreveu a Tarefa com clareza e a deixa correr num fluxo de uma vez

### Quanto mais atalhos, melhor? Não

No início, não precisa de memorizar todas as teclas e comandos `/`.

Domine primeiro:

- Como iniciar a sessão
- Como ver que comandos `/` o ambiente atual suporta
- Como sair, reabrir e mudar de diretório

Com isto já basta.

## «Atalhos» na sessão interativa

As teclas concretas e os comandos `/` diferem entre versões, mas as categorias são estáveis:

### Entrada e histórico

- Entrada multilinha: use a combinação de nova linha indicada pelo produto (comum: `Shift+Enter` ou modo editor)
- Rever a Tarefa anterior: histórico do terminal ou histórico da sessão (se existir)

### Comandos de barra

No prompt, digite `/` para disparar fluxos internos (revisão, compactar Contexto, etc.). **Não decore a lista de cor** — siga a completação `/` do ambiente atual. Classificação para aprendizagem: [Consulta rápida de comandos de barra](/guide/reference/slash-commands/).

### Relacionados com Aprovação

Quando o Agent pede para correr shell ou escrever ficheiros, a interface interativa pede aprovar / rejeitar / permitir sempre (se existir). Antes de deixar sem supervisão, leia [Aprovação e Sandbox](/guide/cli/approvals-and-sandbox/).

## Atalhos na camada Shell (recomendado)

Escreva uma função «entrar no projeto + arrancar o Codex» para reduzir erros de diretório:

```bash
# Exemplo ~/.zshrc (ajuste conforme precisar)
cx() {
  cd "$1" || return 1
  codex
}
```

A revisão não interativa pode encapsular-se num script, com o Prompt em `prompts/review.md`, para facilitar a gestão de versões.

## Pode familiarizar-se assim

No início com a CLI, siga esta ordem:

1. Arranque `codex` no diretório certo
2. Depois decida quando usar `codex exec`
3. Por fim, transforme ações frequentes em alias, função ou script

Assim evita cair logo em «ainda não domina a ferramenta e já a encapsulou noutra camada».

## Divisão de papéis com IDE / App

| | CLI | Extensão IDE |
|---|---|---|
| Contexto | `--cwd`, ficheiros `@` (conforme a versão) | Ficheiros abertos, código selecionado |
| Adequado a | Scripts, SSH remoto, terminal puro | Alterar enquanto vê o Diff |
| Atalhos | Teclas do terminal + `/` | Paleta de comandos do editor |

IDE: [Fluxo de Tarefas locais](/guide/ide/local-task-workflow/)

## Erros comuns

- Arrancar no diretório errado e alterar o projeto ao lado
- Tratar `/review` da aplicação como subcomando do terminal e correr no shell externo
- Colar na sessão interativa um «Prompt universal» de terceiros sem rever

Não tenha pressa em decorar todos os comandos e atalhos. Perceba primeiro se «agora é conversar enquanto faz» ou «deixar correr de uma vez» — a escolha do comando fica bem mais simples.

## Lista de aceitação

- [ ] Consegue iniciar uma sessão interativa na raiz do repositório alvo
- [ ] Sabe onde consultar os comandos `/` suportados pela versão atual
- [ ] Consegue escrever uma Tarefa mínima só de leitura com `codex exec` (se o ambiente oferecer)

## Fontes de referência
- Documentação da OpenAI Codex CLI
---

**Estado:** outdated  
**Produtos aplicáveis:** CLI  
**Nota de revisão:** Esta página envolve detalhes de interação da CLI que mudam facilmente com a versão — `codex`, `codex exec`, categorias de comandos `/` e atalhos na sessão; falta documentação oficial vigente de comandos/atalhos bastante sólida para sustentar estas descrições; é preciso reescrever e voltar a verificar.  
**Última verificação:** 2026-07-26
