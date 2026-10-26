---
title: Projetos e Tarefas
description: Gerir projetos e Tarefas na App.
locale: pt
source_locale: zh-CN
source_revision: "6a1f17f"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 20
legacyVerification:
  status: verified
  products: App
  basis: A documentação atual da aplicação de desktop no OpenAI Help Center continua a distinguir o projeto / Contexto de projeto da sessão concreta de chat/work/codex, e explica que pode abrir uma pasta ou projeto local na aplicação; esta página só esclarece a separação «projeto = local de trabalho, Tarefa = encargo desta ocasião».
  checkedAt: '2026-07-26'
---

«Projeto» e «tarefa» parecem simples, mas na primeira vez é fácil misturá-los. O projeto é o conjunto de ficheiros ou o repositório com que trabalha; a tarefa é o que pede concretamente ao Codex nesta ocasião.

Por exemplo:

- O repositório do seu site de documentação → projeto
- «Tornar a terminologia da página inicial mais fácil de entender» → tarefa

Esta distinção importa porque na App de desktop existem sempre duas camadas ao mesmo tempo:

- Em que projeto está a trabalhar agora
- O que pede concretamente nesta ocasião

## Projeto

- Adicione um diretório de prática ou a raiz do repositório
- Foque-se num projeto de cada vez, para reduzir misturas de contexto

O «projeto» pode ser visto como o **local de trabalho** desta colaboração.
Se o local estiver errado, muitos problemas posteriores também partem de uma base errada.

## tarefa

- Inicie a tarefa com um prompt completo
- Observe o plano e as chamadas a ferramentas
- Aprove ou rejeite quando for preciso

A «tarefa» é o **encargo concreto** desta ocasião.
Quanto mais claro for o encargo, menos o Codex terá de adivinhar enquanto trabalha.

Contraste de conceitos: [Threads, tarefas e projetos](/pt/guide/foundations/threads-tasks-and-projects/)

## Mal-entendidos frequentes

### 1. Por que escolher o projeto primeiro, em vez de perguntar já?

Porque o Codex precisa de saber sobre que ficheiros ou repositório está a trabalhar desta vez.

Se o projeto estiver errado, surgem mais perguntas do tipo «por que não vê os ficheiros» ou «por que alterou outra coisa».

### 2. Um projeto pode ter muitas tarefas?

Sim.
A forma mais estável é:

- No mesmo projeto
- Uma tarefa clara de cada vez
- Terminar antes de abrir a seguinte

Assim é mais difícil misturar contexto.

### 3. Como formular a tarefa no início?

Inclua, na medida do possível, estes três tipos de informação:

- Objetivo
- Limite de alcance
- Critérios de conclusão

### 4. Um pedido grande deve ir todo numa só tarefa?

Se o alcance for muito amplo, é mais estável:

- Manter o mesmo projeto
- Dividir em várias tarefas
- Cada tarefa com um objetivo claro

## Ordem habitual

Na primeira vez na App de desktop, pode seguir esta ordem:

1. Confirmar que o projeto está certo
2. Confirmar que o objetivo da tarefa trata só de uma coisa principal
3. Acrescentar limites de alcance e critérios de conclusão
4. Depois de começar, acompanhar sobretudo o plano, as chamadas a ferramentas e o resultado das mudanças
