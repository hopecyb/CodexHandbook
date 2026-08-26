---
title: Depuração de Prompts
description: Como localizar o problema no Prompt quando o resultado se desvia.
locale: pt
source_locale: zh-CN
source_revision: 9b92e1f
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Quando o resultado falha, causas comuns:

- o objetivo não foi escrito como resultado verificável
- as restrições não estão claras
- o contexto está incompleto ou desatualizado
- a tarefa é grande demais e não pediu plano primeiro

O foco da depuração de Prompts é descobrir **qual camada de informação faltou**.

## Localize primeiro onde está o problema

Se o resultado desviou, não precisa recomeçar tudo. Localizar a camada economiza trabalho:

1. Objetivo pouco claro?
2. Alcance fora de controlo?
3. Contexto insuficiente?
4. Tarefa grande demais?
5. Ou a rota de ferramentas em si estava errada?

## Quando o resultado falha, pergunte nesta ordem:

1. O objetivo é verificável?
2. As restrições estão claras? O Agent viu-as?
3. O contexto está desatualizado ou em conflito? (compactação / Thread antiga)
4. Devia ter pedido um plano primeiro?
5. A ferramenta foi mal escolhida? (não deveria ir à rede e foi)

## O que cada ponto inspeciona

### 1. O objetivo é verificável

Se o objetivo é vago — «otimize um pouco» — o desvio é comum.

### 2. As restrições estão claras

Muitos «excesso de mudança» não vêm de incapacidade; vêm de não ter dito «só até aqui».

### 3. Contexto desatualizado ou em conflito

Em Threads longas é fácil:

- ter dito A antes
- acrescentar B depois
- o estado atual ser uma mistura

### 4. Devia pedir plano primeiro

Com tarefa grande, executar direto desvia mais do que planear primeiro.

### 5. Ferramenta mal escolhida

Por exemplo: queria foco no código local e ele foi à web; ou queria pesquisa com citações e respondeu só de memória.

## Ideias erradas habituais

### 1. Resultado errado = Prompt inteiro inutilizável

Muitas vezes basta um acréscimo pequeno:

- clarificar aceitação
- reduzir o alcance
- pedir plano primeiro

### 2. Depurar = alongar cada vez mais o Prompt

Às vezes o que falta é apagar ruído e deixar só os limites críticos.

### 3. Quanto mais longa a Thread, melhor — há mais contexto

Em Threads muito longas, restrições antigas, informação desatualizada e resíduos de compactação começam a interferir.

## Uma ordem de remediação suficiente

Para puxar o problema de volta ao trilho:

1. Reescreva o objetivo para ficar verificável
2. Acrescente «só alterar isto / não alterar aquilo»
3. Se a tarefa for grande, peça plano primeiro
4. Se ainda estiver confuso, reduza a um arquivo ou a uma reprodução de um só problema
5. Se ainda falhar, abra uma Thread nova e restate os limites críticos

O núcleo da depuração de Prompts é achar que camada crítica não foi transmitida — não complicar a redação.

Se continuar a falhar, reduza a uma reprodução num único arquivo, ou abra uma Thread nova e restate as restrições.

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página só descreve a abordagem de depuração de Prompts; links e ordem de depuração foram revistos; o corpo não depende de factos voláteis do produto.
