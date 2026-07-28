---
title: Compactação de Contexto
description: O que se mantém e o que se perde depois de compactar conversas longas.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


«Compactação de Contexto» pode entender-se assim: quando a conversa fica demasiado longa, o sistema reduz o conteúdo anterior a uma versão mais curta e continua a mantê-la. O objetivo é a Tarefa poder continuar; o custo é que **detalhes podem perder-se.**

## Por que isto afeta o resultado

Muitos iniciantes assumem:

«O que disse antes, ele deveria lembrar-se sempre por completo.»

Na prática, nem sempre.  
Depois de uma Tarefa longa entrar em compactação, o que mais facilmente se perde é:

- Restrições pequenas e muito finas
- Uma exceção temporária mas importante
- A lista branca de ficheiros que apontou antes
- Condições de canto nos critérios de aceitação

Por isso a compactação não é um erro: é um mecanismo com o qual precisa de colaborar.

## O que mais convém reafirmar depois da compactação

A compactação perde detalhes. Restrições-chave, critérios de aceitação e lista branca de ficheiros devem ser **declarados de novo** depois da compactação, ou escritos na descrição do projeto.

Em especial, priorize reafirmar:

- Só é permitido alterar que ficheiros
- Que conteúdo não se deve mexer de todo
- Como contar como concluído
- Até que passo já está concluído

## Mal-entendidos frequentes

### 1. Compactar = «esqueceu tudo»?

Mais exatamente: mantém o tronco, mas não garante que todos os ramos finos fiquem iguais.

### 2. Também não precisa de repetir tudo do zero

Também não.

Reexplicar a parte mais crítica, mais fácil de perder e que menos pode falhar costuma bastar.

### 3. Que informação não deve apostar que «ainda se lembra»?

Em geral:

- Alcance de ficheiros
- Proibições
- Critérios de aceitação
- Decisões importantes que confirmou

## Como recuperar depois da compactação

Se a Tarefa já for longa, pode escrever a meio um resumo curto, por exemplo:

```text
Restrições válidas neste momento:
1. Alterar só o diretório docs
2. Não ajustar a estrutura de rotas
3. Critério de conclusão: texto da página inicial atualizado e build a passar
```

Isto é mais estável do que continuar a depender da conversa longa inteira.

Camada conceptual: [Token, Contexto e compactação](/guide/foundations/tokens-context-and-compaction/)

Em Tarefas longas, as restrições mais importantes não se dizem só uma vez; depois da compactação, regras importantes valem a pena ser ditas outra vez de propósito.


---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica riscos e remédios depois da compactação de conversas longas; conceitos, exemplos e ligações internas foram revistos, e o corpo não depende de factos voláteis do produto.  
**Última verificação:** 2026-07-26
