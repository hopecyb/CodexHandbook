---
title: Trabalho do Agent
description: Fazer o Codex trabalhar como um executor colaborativo, não como uma máquina de respostas pontuais.
sidebar:
  order: 31
locale: pt
source_locale: zh-CN
source_revision: 477e693
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

O trabalho do Agent foca-se em: como **levar uma Tarefa a um estado de conclusão verificável**. Quando planear primeiro, quando dividir subtarefas, quando corrigir a meio, quando fazer Transferência e retomar — é o que este capítulo trata.

Este capítulo fala de forma de colaboração, não de uma funcionalidade isolada.

Em muitas Tarefas, o difícil não é enunciar o pedido, e sim levá-lo até «realmente concluído e verificável».

## O que este capítulo cobre

- Em Tarefas complexas, como convergir primeiro num plano
- Ao detetar desvio na execução, como corrigir a passo pequeno
- Que subproblemas vale a pena dar a Subagents
- Em Tarefas longas interrompidas, como fazer Transferência e retomar

## Ordem de leitura recomendada

1. [Planeamento](/pt/guide/agent-work/planning/)
2. [Progresso e reorientação](/pt/guide/agent-work/progress-and-steering/)
3. [Subagents](/pt/guide/agent-work/subagents/)
4. [Transferência e retoma](/pt/guide/agent-work/handoff-and-resume/)

## Um quadro comum

O trabalho do Agent pode ver-se como quatro ações contínuas:

```text
Compreender primeiro → depois planear → corrigir durante a execução → por fim Transferência/fecho
```

Se faltar qualquer passo intermédio, consequências comuns:

- Sem compreensão: direção errada
- Sem plano: a meio descobrir que o âmbito explodiu
- Sem correção: cada vez mais desviado
- Sem Transferência: Tarefa longa interrompida e ninguém sabe onde ficou

## Mal-entendidos habituais

### 1. Trabalho do Agent = Prompt um pouco mais longo

Não chega.

O Prompt é só o ponto de partida; o que decide a qualidade da Tarefa também inclui:

- Há plano?
- Há correção a meio?
- Há divisão da parte complexa?
- Ficou estado que permita continuar?

### 2. Mudar de direção a meio = o trabalho anterior foi em vão

Muitas vezes, executar e fechar o âmbito ao mesmo tempo é o normal — não precisa de fingir que acertou tudo à primeira.

### 3. Dividir Subagents = sempre mais eficiente

Nem sempre.

Se os limites não estiverem claros, quanto mais subtarefas, mais confusa a Thread principal.

## Relação com outros capítulos

- Fluxo principal completo: [Explorar—planear—executar—verificar](/pt/cases/workflows/explore-plan-execute-verify/)
- Clarificar a Tarefa: [Prompts](/pt/prompts/)
- Gerir Contexto: [Contexto](/pt/guide/context/)
- Paralelismo multi-pessoa/multi-Tarefa: [Agents em paralelo](/pt/guide/desktop-app/parallel-agents/) e [Coordenação multi-Agent](/pt/cases/workflows/multi-agent-coordination/)

## Corra primeiro este fluxo mínimo

Se só quiser a forma mais básica de fazer a Tarefa avançar:

1. Clarifique a Tarefa
2. Se for complexa, peça primeiro um plano
3. Durante a execução, corrija a passo pequeno segundo o resultado
4. Antes de terminar, exija um resultado verificável

Com estes 4 passos fluidos, aprender Subagents e Transferência fica mais natural.

O trabalho do Agent valoriza sobretudo se a Tarefa continua a avançar na direção certa em planeamento, execução, correção e fecho.

## Armadilhas comuns

- Tratar o Agent como caixa de pesquisa: só um objetivo vago
- Achar que «mudar de ideia a meio» = recomeçar do zero
- Tarefa longa sem qualquer Artefato de Transferência
- Dividir subtarefas sem limites — a Thread principal fica mais confusa

## Referências
- Explicações oficiais OpenAI Codex sobre colaboração e execução de Tarefas
---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada parágrafo a parágrafo com capítulos já verificados deste manual sobre planeamento, Contexto, Verificação e colaboração multi-Tarefa; esta página mantém só princípios estáveis de fluxo de colaboração, sem tratar a UI ou entradas atuais de um cliente como contrato permanente.  
**Última verificação:** 2026-07-26
