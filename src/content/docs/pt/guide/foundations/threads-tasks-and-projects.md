---
title: Thread, Tarefa e projeto
description: Esclareça a relação entre sessão, Tarefa e área de trabalho do projeto.
locale: pt
source_locale: zh-CN
source_revision: "c360452"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 60
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Esta página só explica a relação em três camadas entre projeto, Thread e Tarefa; links internos e formulações conceituais foram revisados, e o texto não depende de fatos de produto voláteis.
  checkedAt: '2026-07-26'
---

Produtos diferentes podem usar palavras um pouco distintas; neste handbook unificamos assim:

- **Projeto / área de trabalho**: pasta ou raiz do repositório a que o Codex se vincula
- **Thread / sessão**: uma conversa contínua; o contexto se acumula
- **tarefa**: um trabalho com objetivo claro (pode incluir várias chamadas de Ferramenta)

Muita gente mistura estes termos — e o problema mais comum fica assim:

- Por que ele ainda lembra o que eu disse antes
- Por que, mesmo tendo mudado a pergunta, ele segue na direção antiga
- Por que «no mesmo projeto» ainda se recomenda abrir uma Thread nova

O projeto define *onde* ele trabalha; a Thread define *ao longo de qual conversa* ele continua; a tarefa define *o que* você quer que ele faça desta vez. Separar as três camadas deixa muitos hábitos de uso bem mais claros.

![Ilustração: vista em corte de uma grande caixa de projeto com várias pastas de tarefas, cada uma com algumas conversas](/illustrations/threads-tasks-projects.webp)

## Separe as três camadas primeiro

- **Projeto / área de trabalho**: para qual repositório ou pasta você o levou
- **Thread / sessão**: a conversa contínua atual entre vocês
- **tarefa**: um objetivo concreto dentro dessa conversa

No mesmo projeto pode haver muitas Threads.
Na mesma Thread pode ter havido mais de uma tarefa.
O problema costuma ser este: a tarefa mudou, mas a Thread ainda carrega contexto antigo.

## Sugestões práticas

- Ao mudar de tema, **abra uma Thread nova**, para evitar interferência do contexto antigo
- Em tarefas longas, escreva fases e checkpoints; veja [Prompts para tarefas longas](/pt/prompts/long-running-tasks/)
- Quando precisar continuar entre sessões, faça um resumo de Transferência: veja [Transferência e retomada](/pt/guide/agent-work/handoff-and-resume/)

## Mal-entendidos comuns

### 1. No mesmo repositório deveria usar sempre a mesma Thread?

Não necessariamente.
O repositório não mudou — isso não quer dizer que a tarefa não mudou.
Quando a tarefa muda de tema, a Thread antiga pode começar a trazer ruído.

### 2. Abrir uma Thread nova equivale a perder todo o contexto?

Isso não é necessariamente ruim.
Muitas vezes você precisa exatamente «descartar contexto irrelevante» e manter só o que é realmente relevante para esta tarefa.

### 3. tarefa e Thread são a mesma coisa?

Não são o mesmo conceito.
A Thread é como um recipiente; a tarefa é um trabalho concreto dentro do recipiente.

O projeto define onde ele age; a Thread define que histórico ele carrega; a tarefa define o que deve concluir desta vez.
