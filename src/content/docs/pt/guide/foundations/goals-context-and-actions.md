---
title: Objetivo, Contexto e ação
description: Divida uma interação bem-sucedida em objetivo, contexto, ação e aceite.
locale: pt
source_locale: zh-CN
source_revision: "280cea9"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 30
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Esta página só explica o framework de desmonte de Tarefa em objetivo, Contexto, ação e aceite; links internos e a estrutura do exemplo foram revisados, e o texto não depende de fatos de produto voláteis.
  checkedAt: '2026-07-26'
---

Algumas tarefas fluem rápido; outras desviam quanto mais se conversa. A diferença não é o modelo ficar de repente mais inteligente ou mais burro — é você ter (ou não) definido as partes da tarefa com clareza.

Na versão mais simples: o objetivo diz «o que entregar no fim»; o contexto diz «com base em quê»; a ação diz «como pode fazer»; o aceite diz «até que ponto conta como pronto».

Uma interação mais estável com o Codex costuma ter quatro blocos:

1. **Objetivo**: o que entregar no final
2. **contexto**: informações de contexto relevantes, arquivos, restrições
3. **Ação**: passos que o Codex pode tomar (ler, alterar, rodar)
4. **Aceite**: o que conta como concluído e como verificar

O ensino de prompt desenvolve estes quatro blocos num framework estável; veja [Anatomia de uma boa tarefa](/pt/prompts/task-anatomy/).

## O que cada bloco controla

Dá para ver como dar uma tarefa a um assistente de execução:

- **Objetivo**: o que você quer que ele entregue de fato
- **contexto**: quais premissas ele precisa saber antes de julgar
- **Ação**: se pode ler arquivos, alterá-los, rodar comandos, buscar na rede
- **Aceite**: com que critério você dirá «pode» depois

Faltar qualquer bloco facilita problemas:

- Sem objetivo: ele fica ocupado, mas não necessariamente no ponto certo
- Sem contexto: ele adivinha
- Sem limites de ação: pode fazer demais ou ter medo de fazer
- Sem aceite: vocês entendem «concluído» de formas diferentes

## Mal-entendidos comuns

### 1. Só deixar o objetivo claro ainda não basta

Não basta.

Por exemplo: «ajude a ajustar a página inicial» é só direção — não é o bastante para execução estável. Ele ainda precisa saber:

- Qual arquivo alterar
- O que preservar
- O que não mexer
- Como você espera que fique no final

### 2. Quanto mais contexto, melhor

Contexto de menos faz ele adivinhar; contexto demais afoga o essencial. O ponto é dar **contexto relevante**, não despejar toda a informação.

### 3. A ação pode ficar sem dizer — ele julga sozinho?

Às vezes sim, mas para iniciantes é instável.

Se você escrever com clareza:

- Quais arquivos pode editar
- Não instalar dependências
- Não alterar configuração
- Dar o plano antes de agir

o resultado fica bem mais estável.

## Quando não souber como escrever, organize nesta ordem

Se não souber como organizar a tarefa, use estas quatro frases:

1. O que quero que você conclua no final
2. Com base em quais informações de contexto e restrições
3. O que pode e o que não pode fazer
4. Com que critério vou verificar se terminou

Isso é bem mais claro do que só escrever «ajude a resolver este problema».

## Exemplo pequeno

> Objetivo: organizar a hierarquia de títulos de `notes.md`.
> contexto: alterar só este arquivo; preservar a ordem dos parágrafos.
> Ação: pode editar o arquivo; não instalar dependências.
> Aceite: ao abrir o arquivo, os títulos vão de H1 a H3 sem pular níveis.

Uma tarefa mais estável precisa, no mínimo, deixar claros o objetivo, o contexto, os limites de ação e a forma de aceite.
