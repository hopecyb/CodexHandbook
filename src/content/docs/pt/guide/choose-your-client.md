---
title: Escolher o cliente Codex
description: Escolher App desktop, CLI, integracao IDE ou Cloud conforme o local do trabalho.
sidebar:
  order: 2
locale: pt
source_locale: zh-CN
source_revision: 1e89f67
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Na primeira escolha nao precisa de comparar dezenas de funcionalidades. Comece por uma pergunta: **onde acontece principalmente este trabalho?**

![Escolha do cliente Codex conforme o local do trabalho](/diagrams/codex-client-selection-pt.svg)

## Escolha em 30 segundos

| Local principal | Entrada | Interacao adequada |
|---|---|---|
| Projetos locais e tarefas paralelas | **App desktop** | Ver tarefas, rever diffs, aprovacoes e trabalhos longos |
| Terminal, scripts ou linha de comandos | **CLI** | Entregar tarefas, executar comandos e automatizar scripts |
| VS Code, editores compativeis, Xcode ou JetBrains | **Integracao IDE** | Perguntar com contexto, alterar e rever no editor |
| Repositorio remoto e ambiente isolado | **Cloud** | Executar remotamente, trabalhar em paralelo e rever depois |

Sem preferencia clara, o **App desktop** costuma ser o inicio mais intuitivo. Se ja trabalha diariamente no terminal ou VS Code, mantenha-se nesse espaco.

## O que cada entrada resolve

### App desktop: consola do trabalho local

E adequado para ver o estado das tarefas, alteracoes e aprovacoes:

- acompanhar varias tarefas ou projetos
- isolar alteracoes paralelas com worktrees
- rever um diff, perguntar e corrigir
- organizar trabalhos longos em projetos locais

Exemplo: uma tarefa corrige uma regressao de sessao e outra analisa um gargalo; depois reveja ambas separadamente.

### CLI: Codex no fluxo do terminal

A CLI fica perto dos testes, do Git e dos scripts e facilita documentar passos repetiveis.

```bash
codex
```

Exemplo: a partir da raiz do repositorio, execute primeiro o teste que falha, localize a causa, aplique a alteracao minima e repita o teste.

### Integracao IDE: em torno do codigo atual

E adequada quando a questao depende do ficheiro, selecao ou diff atual. VS Code, Cursor, Windsurf e editores compativeis usam a extensao Codex; Xcode e JetBrains tem integracoes proprias.

Exemplo: selecione uma funcao dificil, explique entradas, saidas e excecoes e adicione testes de limites.

### Cloud: delegar num ambiente remoto isolado

Cloud e adequado para repositorios ligados e tarefas independentes do computador local. E util para exploracao paralela, trabalhos longos e revisao centralizada.

## Nao sao opcoes exclusivas

1. Esclareca uma questao local no IDE.
2. Entregue a exploracao longa ao App desktop ou Cloud.
3. Execute os comandos da equipa na CLI.
4. Confirme o diff final no App ou na interface de revisao.

Nao escolha a entrada «mais forte», mas **a mais proxima do contexto e cujo resultado seja facil de rever**.

## Dois cenarios comuns

### Primeiro bug num projeto real

Comece pelo App desktop para ver conversa, alteracoes e permissoes; depois experimente CLI ou IDE.

### A equipa ja tem comandos e CI

Comece pela CLI e registe instalacao, testes e formatacao em `AGENTS.md` para reutilizar as mesmas regras.

## Verifique logo depois de escolher

1. Peca que leia e explique um ficheiro.
2. Solicite uma alteracao pequena e reversivel.
3. Reveja o diff, nao apenas a resposta.
4. Execute um comando de verificacao.
5. Recuse ou restrinja um pedido de permissao.

Consulte [comparacao de funcionalidades](/pt/guide/reference/feature-comparison/) e [permissoes e sandbox](/pt/guide/permissions-and-sandbox/).

---

**Estado:** verified

**Produtos aplicaveis:** App / CLI / IDE / Cloud

**Ultima verificacao:** 2026-08-26
