---
title: Manter o contexto focado
description: Controlar o alcance, abrir threads novas e fazer transferência.
locale: pt
source_locale: zh-CN
source_revision: "5a55fa8"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 60
legacyVerification: {"status": "verified", "products": "App / CLI / IDE / Cloud", "basis": "Esta página só explica como fechar e manter o contexto focado; conceitos, formulações de portão de fase e ligações internas foram revistos, e o corpo não depende de fatos voláteis do produto.", "checkedAt": "2026-07-26"}
---

Muitas tarefas ficam cada vez mais confusas à medida que a conversa avança; a causa comum é o contexto já se ter dispersado.

Focar o contexto é tratar de um objetivo claro de cada vez, sem misturar problemas antigos com novos.

## Por que a conversa fica cada vez mais confusa

«Dizer um pouco mais para ficar mais seguro» em geral não se verifica; o contexto não pode ir empilhando sem fim.

Para o Codex, se na mesma tarefa enfiar ao mesmo tempo:

- O problema original
- Um problema novo «já que estamos»
- Ideias que surgem a meio
- Detalhes já discutidos que agora já não importam

O resultado habitual é o foco ficar turvo.

## Por que a tarefa se desvia cada vez mais

Causas comuns:

- Vários objetivos na mesma conversa
- Restrições ditas antes que você próprio esqueceu depois
- Problemas já resolvidos que continuam a ocupar atenção
- Um requisito novo a meio, sem delimitar novamente o foco

O resultado costuma ser: você acha que está a acrescentar informação; o Codex vê o foco cada vez mais disperso.

## Práticas básicas

- Uma tarefa, um objetivo
- Resumir periodicamente «concluído / por concluir / restrições ainda válidas»
- Em tarefas longas, usar pontos de controle entre etapas
- Entre sessões, usar [Transferência e retoma](/pt/guide/agent-work/handoff-and-resume/)

## Sinais de que é preciso retomar o foco

Se notar estes sinais, retome o foco:

- Você próprio precisa de voltar atrás na conversa para saber onde está
- Na mesma tarefa já começou a discutir um segundo problema
- «Já que estamos, faça mais isto» multiplica-se
- Começa a citar conclusões antigas que já não importam

## Que problema cada prática resolve

### Uma tarefa, um objetivo

Não peça na mesma tarefa ao mesmo tempo:

- Corrigir um bug
- Alterar texto
- Refatorar «já que estamos»
- Investigar ainda outro problema novo

Ao separar, o alcance fica mais claro e é mais fácil verificar.

### Resumir periodicamente «concluído / por concluir / restrições ainda válidas»

É uma calibração a meio da tarefa. Quando a tarefa alonga, este passo evita que ambos esqueçam onde estão.

### Pontos de controle entre etapas em tarefas longas

Um «ponto de controle entre etapas» é concluir primeiro uma pequena etapa, confirmar que não desviou, e só depois passar ao seguinte.

Por exemplo: primeiro «só localizar o problema», depois «só propor o plano», por fim «só então executar alterações».

### Transferência entre sessões

Se a tarefa não cabe numa só sessão, deixe o estado-chave numa transferência curta.

## Instruções prontas para retomar o foco

A meio, pode escrever assim:

```text
Vamos retomar o foco por um momento.
Concluído: A.
Por concluir: B.
Restrições ainda válidas: alterar só o front-end, não a API; não instalar novas dependências.
Próximo passo só: C.
```

## Armadilhas comuns

### 1. Querer dizer todos os requisitos de uma vez e perder a hierarquia

Mais informação não é informação mais clara. Se a tarefa principal e as «já que estamos» não se separam, o Codex mistura com mais facilidade.

### 2. A Tarefa já mudou e continua na conversa antiga

Se a direção já mudou, às vezes forçar a conversa é menos limpo do que abrir uma thread nova.

### 3. Sem confirmação por fases, alterar demais de uma vez

Quanto mais altera, mais difícil fica depois julgar em que passo começou o desvio.

Focar o contexto não é falar menos: é deixar a informação que ainda vale e cortar a tempo o que já não importa. Contexto confuso → execução fácil de desviar.
