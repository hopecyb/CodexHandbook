---
title: Token, Contexto e Compactação
description: Entenda a janela de Contexto, o uso e a Compactação.
locale: pt
source_locale: zh-CN
source_revision: "cd44efe"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 100
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Esta página só explica os conceitos básicos de Token, janela de Contexto e Compactação; links internos e formulações de exemplo foram revisados, e o texto não depende de fatos de produto voláteis.
  checkedAt: '2026-07-26'
---

Na primeira leitura esta página pode parecer abstrata — não precisa dominar o mecanismo interno de cara. O modelo não tem memória infinita. Quando o conteúdo fica demais, disperso ou longo demais, ele pode perder o foco, e restrições importantes ditas antes podem ir enfraquecendo.

Por trás disso aparecem três termos comuns: Token, contexto e Compactação.

**Token** é a unidade de medida do texto processado pelo modelo. A **janela de contexto** é o limite de informação que dá para usar de forma eficaz de uma vez.

Quando a conversa ou os arquivos crescem demais, o sistema pode fazer **Compactação (compaction)**: manter um resumo e descartar detalhes. Depois da Compactação, o Agent pode «esquecer» restrições iniciais.

![Ilustração: um longo rolo de conversa passa por uma prensa e sai como um cartão de resumo que cabe numa janela limitada](/illustrations/tokens-compaction.webp)

## Separe estes três termos

Dá para ver assim:

- **Token**: «unidade de volume» ao processar informação
- **Janela de contexto**: a capacidade de informação que ele carrega nesta vez
- **Compactação**: quando há conteúdo demais, o sistema resume a conversa anterior e libera espaço para continuar

O ponto é: **um resumo não consegue guardar todos os detalhes**.

Por isso, em conversas longas, exigências que você disse só uma vez e não reiterou depois ficam mais fáceis de enfraquecer.

## Mal-entendidos comuns

### 1. Se eu disse uma vez, ele deveria lembrar para sempre?

Se aquela frase ficou enterrada numa conversa antiga e não aparece na informação-chave atual, pode ser compactada depois.

### 2. Quanto mais contexto, mais estável?

Um pouco mais de contexto relevante ajuda — mas informação irrelevante demais traz dois problemas:

- O foco fica turvo
- Restrições-chave ficam mais fáceis de afogar

### 3. Compactação significa que o modelo quebrou?

Compactação é um ato de gestão de recursos. Com informação demais, o sistema só pode seguir com uma versão mais condensada.

## O que fazer nessa situação

Se temer que exigências-chave sejam esquecidas, faça isto:

- Escreva as restrições-chave na mensagem atual
- Coloque regras de longo prazo na descrição do projeto ou em documentos fixos
- Ao mudar claramente de tema, abra uma tarefa ou Thread nova
- Em condições de contorno importantes, não diga só uma vez

## Prática

- Escreva restrições-chave na mensagem atual ou na descrição do projeto — não as enterre só numa conversa antiga
- Ao mudar de tema, abra uma Thread nova
- Princípios e sugestões práticas: [Compactação de contexto](/pt/guide/context/compaction/) e [Manter o contexto focado](/pt/guide/context/keep-context-focused/)

Aqui ficam os conceitos. Para orientações práticas, continue em [contexto](/pt/guide/context/).
