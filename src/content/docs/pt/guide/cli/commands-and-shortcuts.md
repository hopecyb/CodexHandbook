---
title: Comandos e atalhos
description: Subcomandos da CLI, operações na sessão e hábitos de teclado — explicação orientada ao produto; parâmetros completos na zona de referência.
locale: pt
source_locale: zh-CN
source_revision: "2896e32"
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 50
reviewed_at: 2026-10-26
legacyVerification: {"status": "verified", "products": "CLI", "basis": "Conferido com as páginas oficiais atuais Developer commands e Non-interactive mode: codex, codex exec, --cd / -C e comandos de barra dentro da sessão. Para atalhos de teclado, o leitor deve consultar o preenchimento automático e --help da versão instalada.", "checkedAt": "2026-08-26"}
---

A eficiência no terminal vem de três blocos: **forma de arranque**, **atalhos dentro da sessão** e **coordenação com scripts/editores**. Esta página fala de uso e hábitos; tabelas de parâmetros em [Referência de comandos da CLI](/pt/guide/reference/commands/) e [Atalhos de teclado](/pt/guide/reference/keyboard-shortcuts/).

## Conteúdo desta página

- Quando usar `codex` e quando usar `codex exec`
- Que tipos de operação são comuns numa sessão interativa
- Como solidificar operações repetidas em aliases ou scripts

## O que distinguir primeiro

Muitos iniciantes, ao ver a CLI pela primeira vez, pensam que «comandos e atalhos» é decorar sintaxe e parâmetros.

O mais prático é distinguir três coisas:

- Está agora a **conversar enquanto faz**
- Ou quer que **corra uma tarefa de uma vez**
- Ou só quer **encurtar ações que repete muitas vezes**

Com isto claro, a escolha de muitos comandos fica bem mais simples.

## Vista geral das entradas de comando

| O que quer fazer | Entrada | Detalhe |
|---|---|---|
| Conversar enquanto altera código | TUI interativa `codex` | [Modo interativo](/pt/guide/cli/interactive-mode/) |
| Tarefa pontual em CI / pipeline | `codex exec` | [Modo não interativo](/pt/guide/cli/non-interactive-mode/) |
| Alterar o comportamento predefinido | Arquivo de configuração | [Configuração da CLI](/pt/guide/cli/configuration/) |

:::note
`codex` e `codex exec` são atualmente entradas estáveis (Stable). Para os parâmetros específicos, consulte `codex --help` e `codex exec --help`.
:::

## Mal-entendidos frequentes

### `codex` e `codex exec` não são «simples» vs «profissional»

Muita gente interpreta assim:

- Um é o modo simples
- Outro é o modo profissional

Uma divisão mais útil:

- `codex` adequa-se quando está presente e guia enquanto observa
- `codex exec` adequa-se quando já descreveu a tarefa com clareza e a deixa correr num fluxo de uma vez

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
- Rever a tarefa anterior: histórico do terminal ou histórico da sessão (se existir)

### Comandos de barra

No prompt, digite `/` para disparar fluxos internos (revisão, compactar contexto, etc.). **Não decore a lista de cor** — siga a completação `/` do ambiente atual. Classificação para aprendizagem: [Consulta rápida de comandos de barra](/pt/guide/reference/slash-commands/).

### Relacionados com aprovação

Quando o Agent pede para correr shell ou escrever arquivos, a interface interativa pede aprovar / rejeitar / permitir sempre (se existir). Antes de deixar sem supervisão, leia [Aprovação e Sandbox](/pt/guide/cli/approvals-and-sandbox/).

## Atalhos na camada Shell (recomendado)

Escreva uma função «entrar no projeto + arrancar o Codex» para reduzir erros de diretório:

```bash
# Exemplo ~/.zshrc (ajuste conforme precisar)
cx() {
  cd "$1" || return 1
  codex
}
```

A revisão não interativa pode encapsular-se num script, com o prompt em `prompts/review.md`, para facilitar a gestão de versões.

## Pode familiarizar-se assim

No início com a CLI, siga esta ordem:

1. Arranque `codex` no diretório certo
2. Depois decida quando usar `codex exec`
3. Por fim, transforme ações frequentes em alias, função ou script

Assim evita cair logo em «ainda não domina a ferramenta e já a encapsulou noutra camada».

## Divisão de papéis com IDE / App

| | CLI | Extensão IDE |
|---|---|---|
| Contexto | Diretório indicado por `--cd` / `-C`; leitura dos arquivos por ferramentas | Arquivos abertos, código selecionado |
| Adequado a | Scripts, SSH remoto, terminal puro | Alterar enquanto vê o diff |
| Atalhos | Teclas do terminal + `/` | Paleta de comandos do editor |

IDE: [Fluxo de tarefas locais](/pt/guide/ide/local-task-workflow/)

## Erros comuns

- Arrancar no diretório errado e alterar o projeto ao lado
- Tratar `/review` da aplicação como subcomando do terminal e correr no shell externo
- Colar na sessão interativa um «Prompt universal» de terceiros sem rever

Não tenha pressa em decorar todos os comandos e atalhos. Perceba primeiro se «agora é conversar enquanto faz» ou «deixar correr de uma vez» — a escolha do comando fica bem mais simples.

## Lista de aceitação

- [ ] Consegue iniciar uma sessão interativa na raiz do repositório alvo
- [ ] Sabe onde consultar os comandos `/` suportados pela versão atual
- [ ] Consegue escrever uma tarefa mínima só de leitura com `codex exec` (se o ambiente oferecer)

## Fontes de referência
- Documentação da OpenAI Codex CLI
