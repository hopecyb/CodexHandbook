---
title: Projetos e Tarefas
description: Gerir projetos e Tarefas na App.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

«Projeto» e «Tarefa» parecem simples, mas na primeira vez é fácil misturá-los. O projeto é o conjunto de ficheiros ou o repositório com que trabalha; a Tarefa é o que pede concretamente ao Codex nesta ocasião.

Por exemplo:

- O repositório do seu site de documentação → projeto
- «Tornar a terminologia da página inicial mais fácil de entender» → Tarefa

Esta distinção importa porque na App de desktop existem sempre duas camadas ao mesmo tempo:

- Em que projeto está a trabalhar agora
- O que pede concretamente nesta ocasião

## Projeto

- Adicione um diretório de prática ou a raiz do repositório
- Foque-se num projeto de cada vez, para reduzir misturas de Contexto

O «projeto» pode ser visto como o **local de trabalho** desta colaboração.  
Se o local estiver errado, muitos problemas a seguir também desviam.

## Tarefa

- Inicie a Tarefa com um Prompt completo
- Observe o plano e as chamadas a Ferramentas
- Aprove ou rejeite quando for preciso

A «Tarefa» é o **encargo concreto** desta ocasião.  
Quanto mais claro for o encargo, menos o Codex terá de adivinhar enquanto trabalha.

Contraste de conceitos: [Threads, Tarefas e projetos](/guide/foundations/threads-tasks-and-projects/)

## Mal-entendidos frequentes

### 1. Por que escolher o projeto primeiro, em vez de perguntar já?

Porque o Codex precisa de saber sobre que ficheiros ou repositório está a trabalhar desta vez.

Se o projeto estiver errado, surgem mais perguntas do tipo «por que não vê os ficheiros» ou «por que alterou outra coisa».

### 2. Um projeto pode ter muitas Tarefas?

Sim.  
A forma mais estável é:

- No mesmo projeto
- Uma Tarefa clara de cada vez
- Terminar antes de abrir a seguinte

Assim é mais difícil misturar Contexto.

### 3. Como formular a Tarefa no início?

Inclua, na medida do possível, estes três tipos de informação:

- Objetivo
- Limite de alcance
- Como contar como concluído

### 4. Um pedido grande deve ir todo numa só Tarefa?

Se o alcance for muito amplo, é mais estável:

- Manter o mesmo projeto
- Dividir em várias Tarefas
- Cada Tarefa com um objetivo claro

## Ordem habitual

Na primeira vez na App de desktop, pode seguir esta ordem:

1. Confirmar que o projeto está certo
2. Confirmar que o objetivo da Tarefa trata só de uma coisa principal
3. Acrescentar limites de alcance e critérios de conclusão
4. Depois de começar, acompanhar sobretudo o plano, as chamadas a Ferramentas e o resultado das mudanças

---

**Estado:** verified  
**Produtos aplicáveis:** App  
**Base de verificação:** A documentação atual da aplicação de desktop no OpenAI Help Center continua a distinguir o projeto / Contexto de projeto da sessão concreta de chat/work/codex, e explica que pode abrir uma pasta ou projeto local na aplicação; esta página só esclarece a separação «projeto = local de trabalho, Tarefa = encargo desta ocasião».  
**Última verificação:** 2026-07-26
