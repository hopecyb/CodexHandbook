---
title: Comandos de barra e atalhos
description: Consulta introdutória sobre comandos / e chamadas $ a Skills; não é um manual completo de parâmetros.
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE"
  basis: "Comparado com a documentação oficial atual de Slash commands da App de desktop e Developer commands. Os conjuntos de comandos diferem por interface; a disponibilidade final deve ser confirmada pelo preenchimento automático no composer."
  checkedAt: "2026-08-26"
locale: pt
source_locale: zh-CN
source_revision: a34c90f
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 40
---

Ao ver comandos de barra pela primeira vez, é fácil pensar que são termos difíceis de decorar. É mais simples encará-los como atalhos que pode escolher explicitamente para iniciar um fluxo conhecido.

Em geral, servem para entrar rapidamente num modo fixo ou num processo integrado. Os comandos de barra (`/command`) estão relacionados com a chamada `$name` de um [Skill](/pt/skills/overview/), mas não são a mesma coisa. A lista concreta **varia conforme o produto e o acesso**, e difere entre a App de desktop, a CLI, o IDE e o ChatGPT Web. Antes de usar um comando, consulte o preenchimento automático de `/` no composer atual e a documentação oficial.

## Distinguir os tipos de entrada

| Entrada | Quem inicia | Utilização típica |
|---|---|---|
| Comando de barra, como `/review` | O utilizador escreve `/` | Processo fixo integrado ou configurado |
| `$skill-name` | O utilizador ou o modelo | Skill do projeto ou do utilizador |
| Linguagem natural | O utilizador | Tarefa geral |

## A diferença em poucas palavras

- `/comando`: escolhe ativamente um atalho na conversa.
- `$skill`: o utilizador ou o modelo indica um Skill pelo nome.
- Linguagem natural: descreve diretamente o pedido e deixa o modelo escolher como trabalhar.

Se já conhece o fluxo que pretende iniciar, experimentar `/comando` é o caminho mais direto.

## O que é um comando de barra

- Não é um comando de terminal.
- Não é uma palavra-passe ou um código obscuro.
- Pode encará-lo como uma entrada para um «botão de atalho» no chat.

É especialmente útil quando:

- já sabe que tipo de processo quer iniciar;
- não quer voltar a explicar sempre a mesma intenção.

## Equívocos frequentes

### 1. Comandos de barra são comandos de terminal

São atalhos na interface de conversa, não comandos `codex ...` para executar numa shell.

### 2. A lista de comandos de barra nunca muda

Os comandos disponíveis podem variar por produto, versão e ambiente. Consulte a **lista de preenchimento automático** do ambiente atual em vez de confiar numa lista antiga.

### 3. Um comando de barra contorna aprovações e sandbox

Se o processo acionado escrever ficheiros, executar comandos ou aceder à rede, continua sujeito às políticas atuais.

### 4. É preciso saber comandos de barra para usar bem o Codex

A linguagem natural permite executar a maioria das tarefas. Os comandos de barra servem sobretudo para acelerar processos conhecidos depois de ganhar familiaridade com o produto.

## Entradas comuns atualmente

### App de desktop / IDE

- `/plan`: mudar para o modo de planeamento em várias etapas.
- `/review`: rever alterações não submetidas ou comparar com uma branch de referência.
- `/status`: ver o chat ID, a utilização de contexto e os rate limits.
- `/mcp`: verificar o estado das ligações MCP.
- `/init`: gerar a estrutura inicial de `AGENTS.md` para o projeto atual.

### Controlo de sessão específico da CLI

- `/permissions`: ajustar o modo de permissões da sessão atual.
- `/agent`: verificar ou mudar a thread do Agent.
- `/model`: escolher o modelo atual.
- `/status`: conferir as definições da sessão atual.

O ChatGPT Web tem o seu próprio menu de comandos no composer. Não presuma que um comando da App ou da CLI está disponível com o mesmo nome no Web.

## Cuidados de utilização

1. **Escreva `/` primeiro** para ver o que o ambiente atual suporta; não decore listas desatualizadas.
2. Para um processo estável da equipa, prefira um **Skill com documentação**, evitando que só os utilizadores experientes conheçam o nome do comando.
3. As operações de escrita acionadas por comandos de barra continuam sujeitas à sandbox e às aprovações.

## Como experimentar diretamente

Pode começar assim:

1. Escreva `/`.
2. Veja o que está disponível no ambiente atual.
3. Escolha um comando cujo nome e finalidade compreenda.

## Primeiro exercício

Na primeira tentativa, siga esta ordem:

1. Escreva `/` e veja o que o ambiente atual oferece.
2. Experimente um comando cujo objetivo compreenda.
3. Observe se ele se parece mais com «mudar de modo» ou «executar um processo».
4. Se a equipa precisar de repetir esse processo durante muito tempo, considere transformá-lo num Skill.

Assim, a divisão de funções fica mais clara: o comando de barra é um atalho; o Skill preserva um processo reutilizável.

## Diferença face aos comandos da CLI

| | `/` dentro da conversa | `codex …` no terminal |
|---|---|---|
| Contexto | Sessão atual e ficheiros anexados | Diretório indicado com `--cd` / `-C` |
| Mais adequado para | Exploração interativa | Scripts e CI |

Encare os comandos de barra como atalhos da conversa. É mais útil ver o que o ambiente atual oferece realmente do que memorizar nomes de comandos.

Para subcomandos da CLI, consulte o [modo interativo da CLI](/pt/guide/cli/interactive-mode/) e o [modo não interativo](/pt/guide/cli/non-interactive-mode/). A tabela completa de parâmetros está na [referência de comandos da CLI](/pt/guide/reference/commands/).
