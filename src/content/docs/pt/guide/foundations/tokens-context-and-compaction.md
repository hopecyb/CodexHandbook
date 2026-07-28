---
title: Token, Contexto e Compactação
description: Entenda a janela de Contexto, o uso e a Compactação.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Na primeira leitura esta página pode parecer abstrata — não precisa dominar o mecanismo interno de cara. O modelo não tem memória infinita. Quando o conteúdo fica demais, disperso ou longo demais, ele pode perder o foco, e restrições importantes ditas antes podem ir enfraquecendo.

Por trás disso aparecem três termos comuns: Token, Contexto e Compactação.

**Token** é a unidade de medida do texto processado pelo modelo. A **janela de Contexto** é o limite de informação que dá para usar de forma eficaz de uma vez.

Quando a conversa ou os arquivos crescem demais, o sistema pode fazer **Compactação (compaction)**: manter um resumo e descartar detalhes. Depois da Compactação, o Agent pode «esquecer» restrições iniciais.

## Separe estes três termos

Dá para ver assim:

- **Token**: «unidade de volume» ao processar informação
- **Janela de Contexto**: a capacidade de informação que ele carrega nesta vez
- **Compactação**: quando há conteúdo demais, o sistema resume a conversa anterior e libera espaço para continuar

O ponto é: **um resumo não consegue guardar todos os detalhes**.

Por isso, em conversas longas, exigências que você disse só uma vez e não reiterou depois ficam mais fáceis de enfraquecer.

## Mal-entendidos comuns

### 1. Se eu disse uma vez, ele deveria lembrar para sempre?

Se aquela frase ficou enterrada numa conversa antiga e não aparece na informação-chave atual, pode ser compactada depois.

### 2. Quanto mais Contexto, mais estável?

Um pouco mais de Contexto relevante ajuda — mas informação irrelevante demais traz dois problemas:

- O foco fica turvo
- Restrições-chave ficam mais fáceis de afogar

### 3. Compactação significa que o modelo quebrou?

Compactação é um ato de gestão de recursos. Com informação demais, o sistema só pode seguir com uma versão mais condensada.

## O que fazer nessa situação

Se temer que exigências-chave sejam esquecidas, faça isto:

- Escreva as restrições-chave na mensagem atual
- Coloque regras de longo prazo na descrição do projeto ou em documentos fixos
- Ao mudar claramente de tema, abra uma Tarefa ou Thread nova
- Em condições de contorno importantes, não diga só uma vez

## Prática

- Escreva restrições-chave na mensagem atual ou na descrição do projeto — não as enterre só numa conversa antiga
- Ao mudar de tema, abra uma Thread nova
- Princípios e sugestões práticas: [Compactação de Contexto](/guide/context/compaction/) e [Manter o Contexto focado](/guide/context/keep-context-focused/)

Aqui ficam os conceitos. O controle concreto pode seguir no `05`.

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica os conceitos básicos de Token, janela de Contexto e Compactação; links internos e formulações de exemplo foram revisados, e o texto não depende de fatos de produto voláteis.  
**Última verificação:** 2026-07-26
