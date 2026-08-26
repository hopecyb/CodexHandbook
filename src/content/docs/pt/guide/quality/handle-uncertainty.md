---
title: Lidar com incerteza
description: Quando a informação falta, exigir perguntas em vez de inventar.
locale: pt
source_locale: zh-CN
source_revision: ea6795e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 50
---

Quando a informação não chega, confirme primeiro e só depois continue.

Uma das situações mais problemáticas com o Codex é ele preencher informação em falta com uma resposta que *parece* razoável.
Se a premissa estiver errada, os passos seguintes desviam-se todos.

## O que é «incerteza»

Aqui, «incerteza» significa sobretudo:

- Ainda não há evidência suficiente para confirmar
- A informação relevante não está no Contexto atual
- Se continuar a adivinhar, o risco aumenta

O melhor é declarar de antemão «quando parar primeiro para confirmar».

Fixe no Prompt:

```text
Quando a informação for insuficiente, pergunte primeiro; não invente caminhos de ficheiros, APIs ou regras de negócio.
```

Se detetar invenção: pare, corrija os factos e, se necessário, abra uma Thread nova.

## Forma de julgar

Se uma conclusão cumprir qualquer um destes pontos, não continue a adivinhar:

- Não encontra evidência nos ficheiros atuais
- Você não forneceu explicitamente essa regra de negócio
- Precisa de factos externos ainda não verificados na fonte
- Um erro de adivinhação afetaria vários passos seguintes

## Mal-entendidos habituais

### 1. Resposta completa ≠ saber de verdade

Conteúdo completo e fluido às vezes só está bem preenchido — não significa que exista no seu projeto.

### 2. Com informação incompleta, o ponto não é preencher o vazio

Dar informação completa é melhor, mas na colaboração real a incompleção é comum.

O mais importante são duas coisas:

- Quando faltar informação, deve parar primeiro para confirmar
- Deve poder perguntar, em vez de ser forçado a adivinhar até ao fim

### 3. Fazer perguntas não atrasa necessariamente a eficiência

Na superfície há um passo a mais; em geral reduz retrabalho.

Muitos problemas começam a crescer a partir de «adivinhar primeiro e fazer».

### 4. Se adivinhou, pare primeiro e só depois continue

Pare o erro primeiro; depois continue. Ordem:

1. Indique claramente qual ponto está errado
2. Acrescente a informação verdadeira
3. Se necessário, faça-o recomeçar com base nos factos corrigidos

## Frases que pode acrescentar diretamente

Para reduzir adivinhação, pode escrever:

```text
Se não puder confirmar a partir dos ficheiros existentes ou da informação que forneci, pergunte primeiro; não complete por conta própria.
```

## Mais uma frase

Também pode acrescentar:

```text
Se houver várias interpretações possíveis, liste primeiro os pontos de incerteza e só depois continue.
```

O pior é tratar a adivinhação como facto e avançar.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica princípios de perguntar e corrigir quando a informação falta; conceitos, frases de Prompt e ordem de tratamento foram revistos, e o corpo não depende de factos voláteis de produto.  
**Última verificação:** 2026-07-26
