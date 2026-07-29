---
title: Editores suportados
description: Que editores a extensão IDE do Codex suporta, como escolher e limitações habituais.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

A extensão IDE incorpora o Codex no **editor que já usa**, para iniciar Tarefas, ver Diff e aceitar mudanças na mesma interface em que escreve código. Esta página explica o alcance do suporte e a escolha; os passos de instalação estão em [Instalar a extensão IDE](/guide/ide/installation/).

## Conteúdo desta página

- Que editores têm extensão oficial
- Como escolher entre extensão IDE, App de desktop e CLI
- Como alinhar o fluxo numa equipa com vários editores

## O que olhar na escolha

Aqui tratamos de duas coisas: que editores estão no suporte oficial e, se já tem um editor habitual, se convém continuar a usar o Codex no IDE.

## Alcance do suporte oficial

**A lista concreta e os requisitos de versão seguem a [documentação OpenAI Codex](https://developers.openai.com/codex)**. Os casos comuns incluem:

| Editor | Utilizador típico | Notas |
|---|---|---|
| Visual Studio Code | Maioria dos programadores | Instalação pelo marketplace; ecossistema mais maduro |
| Forks da família VS Code, como Cursor | Quem já usa editores com IA | Em geral compatíveis com o mecanismo de extensões do VS Code; confirme com testes |
| Série JetBrains (se a OpenAI oferecer) | Utilizadores de Java/Kotlin/IDEA | Funções e UI podem diferir ligeiramente da versão VS Code |

Editores fora da lista oficial: use a [CLI](/guide/cli/) ou a [App de desktop](/guide/desktop-app/) como alternativa; não dependa de extensões portadas não oficiais.

## Mal-entendidos frequentes

### Suportar um editor não significa que as funções sejam iguais às de outras entradas

Há quem interprete «há extensão» como «no IDE consigo fazer tudo».

Cada entrada tem um enfoque diferente:

- O IDE inclina-se para alterar código de perto
- A App inclina-se para Tarefas ao nível do projeto e coordenação multi-tarefa
- A CLI inclina-se para terminal, scripts e ambientes remotos

### Escolher o editor não é só questão de hábito

Se o trabalho principal for:

- Alterações locais de código
- Trabalhar com seleção
- Alterar e testar ao mesmo tempo

O IDE costuma encaixar melhor.

Se o habitual for:

- Tarefas longas
- Coordenação de documentação
- Várias Tarefas em paralelo

A App ou a CLI costumam servir melhor.

## Quando escolher a extensão IDE

| Adequado | Menos adequado |
|---|---|
| Ao alterar código, quer que «ficheiro/seleção atuais» entrem automaticamente no Contexto | Precisa de vários Agents em paralelo, árvores de trabalho e outras capacidades exclusivas da App |
| Costuma ver Diff inline no editor | Faz sobretudo Tarefas longas não relacionadas com código (documentação, pesquisa) |
| Já corre testes e depuração no IDE | Precisa de um ambiente Cloud padronizado para montar o repositório do zero |

Entrada de decisão: [Escolher o cliente Codex](/guide/getting-started/choose-your-codex-client/)

## Divisão de papéis com a App de desktop

```text
Extensão IDE: a editar → mudanças pequenas → revisão inline → testes locais
App de desktop: Tarefas ao nível do projeto → Agents em paralelo → árvores de trabalho → notificações e delegação Cloud
```

Ambas podem partilhar a mesma conta e a configuração do projeto; ver [Contexto do editor](/guide/ide/editor-context/) e [Âmbito do AGENTS.md](/guide/customization/agents-md/scope-and-precedence/).

## Alinhamento na equipa

1. No README, indique o **editor recomendado + versão mínima da extensão**
2. As regras centrais ficam em `AGENTS.md`, sem amarrar a funcionalidades privadas de um IDE
3. O code review continua a basear-se no Diff do Git, sem depender de vistas «só visíveis num IDE»

## Como decidir que entrada usar

Se estiver incerto, use estas perguntas:

1. Passa a maior parte do tempo a alterar código no editor?
2. Depende muito do ficheiro atual, da seleção e do Diff inline?
3. Por agora não precisa de vários Agents, árvores de trabalho ou gestão de Tarefas mais forte?

Se a maioria das respostas for «sim», comece pela extensão IDE.

## Erros comuns

- Assumir que a extensão IDE e a App são 1:1 em funções
- Iniciar Tarefas sem abrir a raiz da área de trabalho, o que provoca erros de caminho e de resolução do `AGENTS.md`
- Misturar várias extensões de IA, com conflitos de Contexto e atalhos

Muitas vezes escolhe-se a extensão IDE simplesmente porque o trabalho principal já está no editor.

## Fontes de referência
- Documentação IDE do OpenAI Codex
---

**Estado:** outdated  
**Produtos aplicáveis:** IDE  
**Nota de revisão:** O centro de ajuda oficial atual só confirma com força suficiente que «Codex VS Code extension is compatible with most VS Code forks»; esta página estende-se a formas concretas de suporte e comparação com Cursor, Windsurf, JetBrains, etc.; convém marcá-la como `outdated` até completar a matriz de suporte vigente.  
**Última verificação:** 2026-07-26
