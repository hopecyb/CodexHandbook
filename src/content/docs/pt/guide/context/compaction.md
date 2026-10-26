---
title: Compactação de contexto
description: O que se mantém e o que se perde depois de compactar conversas longas.
locale: pt
source_locale: zh-CN
source_revision: "c6c9d03"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 50
legacyVerification: {"status": "verified", "products": "App / CLI / IDE / Cloud", "basis": "Esta página só explica riscos e remédios depois da compactação de conversas longas; conceitos, exemplos e ligações internas foram revistos, e o corpo não depende de fatos voláteis do produto.", "checkedAt": "2026-07-26"}
---

«Compactação de contexto» pode entender-se assim: quando a conversa fica demasiado longa, o sistema reduz o conteúdo anterior a uma versão mais curta e continua a mantê-la. O objetivo é a tarefa poder continuar; o custo é que **detalhes podem perder-se.**

## Por que isto afeta o resultado

Muitos iniciantes assumem:

«O que disse antes, ele deveria lembrar-se sempre por completo.»

Na prática, nem sempre.
Depois de uma tarefa longa entrar em compactação, o que mais facilmente se perde é:

- Restrições pequenas e muito finas
- Uma exceção temporária mas importante
- A lista branca de arquivos que apontou antes
- Casos-limite nos critérios de aceitação

Por isso a compactação não é um erro: é um mecanismo com o qual precisa de colaborar.

## O que mais convém reafirmar depois da compactação

A compactação perde detalhes. Restrições-chave, critérios de aceitação e lista branca de arquivos devem ser **declarados de novo** depois da compactação, ou escritos na descrição do projeto.

Em especial, priorize reafirmar:

- Só é permitido alterar que arquivos
- Que conteúdo não se deve mexer de todo
- Como contar como concluído
- Até que passo já está concluído

## Mal-entendidos frequentes

### 1. Compactar = «esqueceu tudo»?

Mais exatamente: preserva as informações principais, mas não garante que todos os detalhes sejam mantidos.

### 2. Também não precisa de repetir tudo do zero

Também não.

Reexplicar a parte mais crítica, mais fácil de perder e que menos pode falhar costuma bastar.

### 3. Que informação não deve apostar que «ainda se lembra»?

Em geral:

- Alcance de arquivos
- Proibições
- Critérios de aceitação
- Decisões importantes que confirmou

## Como recuperar depois da compactação

Se a tarefa já for longa, pode escrever a meio um resumo curto, por exemplo:

```text
Restrições válidas neste momento:
1. Alterar só o diretório docs
2. Não ajustar a estrutura de rotas
3. Critério de conclusão: texto da página inicial atualizado e build a passar
```

Isto é mais estável do que continuar a depender da conversa longa inteira.

Camada conceptual: [Token, contexto e compactação](/pt/guide/foundations/tokens-context-and-compaction/)

Em tarefas longas, as restrições mais importantes não se dizem só uma vez; depois da compactação, regras importantes valem a pena ser ditas outra vez de propósito.
