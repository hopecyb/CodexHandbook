---
title: contexto do projeto
description: Descrição do projeto e contexto ao nível do diretório.
locale: pt
source_locale: zh-CN
source_revision: "fb3eb50"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 10
legacyVerification: {"status": "verified", "products": "App / CLI / IDE / Cloud", "basis": "Esta página só explica como registrar contexto de longo prazo ao nível do projeto; conceitos, exemplos e fronteiras foram revistos, e o corpo não depende de fatos voláteis do produto.", "checkedAt": "2026-07-26"}
---

«Contexto do projeto» é a informação de fundo estável a longo prazo neste projeto — a que muitas tarefas voltam a usar.

Por exemplo:

- Como a estrutura de diretórios está organizada
- Quais são os comandos habituais
- Que convenções de estilo de código existem
- Que arquivos não se devem alterar à leve
- Como verificar depois de concluir

Se isto depender sempre de explicações improvisadas a cada tarefa, cansa e é fácil esquecer.

## O que significa concretamente

O Contexto do projeto pode ver-se como a explicação de «como colaborar por defeito neste projeto a longo prazo».

Não descreve o que fazer nesta ocasião concreta; antecipa ao Codex:

- Como o repositório se organiza no dia a dia
- Que hábitos são válidos a longo prazo
- Que fronteiras é melhor não tocar
- Como se costuma verificar depois de concluir

Assim, de cada vez que entra no projeto, não precisa de adivinhar os hábitos da equipe do zero.

## Por que aqui costuma falhar

Muita gente, na primeira vez com o Codex, enfia todos os requisitos na tarefa atual.

A curto prazo parece funcionar, mas depressa surgem problemas:

- Tem de explicar tudo outra vez em cada ocasião
- Formulações inconsistentes entre tarefas
- Algumas regras-chave esquecidas
- Em conversas longas, o fundo realmente importante deixa de se destacar

A forma de tratar divide-se em duas:

- Coloque **regras válidas a longo prazo** no contexto do projeto
- Escreva **requisitos especiais desta tarefa** no prompt atual

## Como distinguir da tarefa atual

A divisão mais simples tem duas camadas:

- **Contexto do projeto**: neste projeto, é assim no dia a dia
- **Prompt da tarefa**: nesta ocasião, o que quero concretamente

Por exemplo:

- «Os componentes ficam todos em `src/components/`» → Contexto do projeto
- «Desta vez altere só o texto do banner da página inicial» → Tarefa atual

## Mal-entendidos frequentes

### 1. Quanto mais contexto do projeto, melhor?

O que realmente tem valor é o que:

- É válido a longo prazo
- Serve em várias tarefas
- Sem o dizer, é fácil cair em armadilhas

Se enfiar também detalhes de uma só vez, a própria descrição do projeto vira ruído.

### 2. Se em cada tarefa explicar com clareza, não preciso de contexto do projeto?

A curto prazo funciona; a longo prazo cansa.

Depressa encontra:

- Repetir as mesmas frases
- Formulações inconsistentes entre tarefas
- Regras ditas desta vez e esquecidas na seguinte

### 3. O Contexto do projeto não restringe demais?

Não, desde que o trate como regra predefinida a longo prazo, e não como ordem rígida e imutável.

Os requisitos realmente especiais devem continuar no prompt da tarefa atual.

## Locais habituais

Coloque convenções estáveis na descrição do projeto, por exemplo `AGENTS.md` ou instruções de projeto do produto:

- Estrutura de diretórios
- Comandos habituais
- Estilo de código
- Proibições

No prompt da tarefa, escreva só as **diferenças desta ocasião**; o contexto longo e repetido deve ser registrado no nível do projeto. Configuração em profundidade no marco `06-customization`.

## Como decidir se vai para o contexto do projeto

Se uma nota cumprir estas duas condições, vale a pena considerar:

1. Na próxima vez, é muito provável que volte a precisar dela
2. Se esquecer, erra de novo ou perde tempo

## O que priorizar ao organizar

O que vale registrar primeiro:

- Comandos habituais
- Convenções de diretórios
- Estilo de código
- Zonas proibidas de alteração
- Forma predefinida de verificação

Tudo o que é muito provável voltar a usar vale registrar no contexto do projeto — não precisa de digitar outra vez em cada ocasião.
