---
title: Thread, Tarefa e projeto
description: Esclareça a relação entre sessão, Tarefa e área de trabalho do projeto.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Produtos diferentes podem usar palavras um pouco distintas; neste handbook unificamos assim:

- **Projeto / área de trabalho**: pasta ou raiz do repositório a que o Codex se vincula
- **Thread / sessão**: uma conversa contínua; o Contexto se acumula
- **Tarefa**: um trabalho com objetivo claro (pode incluir várias chamadas de Ferramenta)

Muita gente mistura estes termos — e o problema mais comum fica assim:

- Por que ele ainda lembra o que eu disse antes
- Por que, mesmo tendo mudado a pergunta, ele segue na direção antiga
- Por que «no mesmo projeto» ainda se recomenda abrir uma Thread nova

O projeto define *onde* ele trabalha; a Thread define *ao longo de qual conversa* ele continua; a Tarefa define *o que* você quer que ele faça desta vez. Separar as três camadas deixa muitos hábitos de uso bem mais claros.

## Separe as três camadas primeiro

- **Projeto / área de trabalho**: para qual repositório ou pasta você o levou
- **Thread / sessão**: a conversa contínua atual entre vocês
- **Tarefa**: um objetivo concreto dentro dessa conversa

No mesmo projeto pode haver muitas Threads.  
Na mesma Thread pode ter havido mais de uma Tarefa.  
O problema costuma ser este: a Tarefa mudou, mas a Thread ainda carrega Contexto antigo.

## Sugestões práticas

- Ao mudar de tema, **abra uma Thread nova**, para evitar interferência do Contexto antigo
- Em Tarefas longas, escreva fases e checkpoints; veja [Prompts para Tarefas longas](/prompts/long-running-tasks/)
- Quando precisar continuar entre sessões, faça um resumo de Transferência: veja [Transferência e retomada](/guide/agent-work/handoff-and-resume/)

## Mal-entendidos comuns

### 1. No mesmo repositório deveria usar sempre a mesma Thread?

Não necessariamente.  
O repositório não mudou — isso não quer dizer que a Tarefa não mudou.  
Quando a Tarefa muda de tema, a Thread antiga pode começar a trazer ruído.

### 2. Abrir uma Thread nova equivale a perder todo o Contexto?

Isso não é necessariamente ruim.  
Muitas vezes você precisa exatamente «descartar Contexto irrelevante» e manter só o que é realmente relevante para esta Tarefa.

### 3. Tarefa e Thread são a mesma coisa?

Não são o mesmo conceito.  
A Thread é como um recipiente; a Tarefa é um trabalho concreto dentro do recipiente.

O projeto define onde ele age; a Thread define que histórico ele carrega; a Tarefa define o que deve concluir desta vez.


---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica a relação em três camadas entre projeto, Thread e Tarefa; links internos e formulações conceituais foram revisados, e o texto não depende de fatos de produto voláteis.  
**Última verificação:** 2026-07-26
