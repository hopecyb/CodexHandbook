---
title: Terminologia para iniciantes
description: Definições curtas de Tarefa, Contexto, Sandbox, Skill e outros termos comuns.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 6
---

Entradas mais completas estão no [Glossário](/guide/reference/glossary/). Aqui listamos primeiro os termos mais comuns — e os que mais atrapalham a leitura.

Ao abrir o handbook do Codex pela primeira vez, o que mais trava costuma ser a densidade de nomes. Cada palavra isolada parece familiar; juntas, confundem.

Há dois casos comuns:

- Você entende cada palavra, mas não sabe o que ela significa na operação real
- Não sabe quais termos precisa dominar agora e quais podem ficar para depois

Não trate isto como prova de terminologia. Basta saber aproximadamente o que cada palavra diz, para não travar o tempo todo ao ler o texto.

## Os primeiros termos a conhecer

Se o objetivo atual é só completar a primeira Tarefa, entenda estes 6 primeiro:

| Termo | Por que entender primeiro |
|---|---|
| **Prompt** | Como você deixa a Tarefa clara |
| **Contexto** | Que informação o Codex consegue ver agora |
| **Agent** | Por que ele não só devolve um parágrafo |
| **Aprovação** | Por que às vezes ele para e pergunta |
| **Diff** | Como você verifica o que ele mudou de fato |
| **Tarefa** | A unidade básica de um trabalho completo |

| Termo | Explicação simples |
|---|---|
| **Prompt** | Objetivo, contexto e requisitos que você dá ao Codex |
| **Contexto (context)** | Projeto, arquivos e conversa que o modelo vê agora |
| **Agent** | Forma de execução que chama Ferramentas e itera em direção a um objetivo |
| **Ferramenta (tool)** | Capacidades invocáveis: ler arquivos, rodar comandos, buscar etc. |
| **Sandbox** | Ambiente de execução que limita o alcance no sistema de arquivos e na rede |
| **Aprovação (approval)** | Algumas operações só continuam com seu consentimento explícito |
| **Diff** | Comparação antes/depois da mudança, para você revisar |
| **Thread / sessão** | Uma conversa contínua e o Contexto acumulado |
| **Tarefa** | Unidade de trabalho com objetivo (pode atravessar várias chamadas de Ferramenta) |
| **Skill** | Pacote reutilizável de instruções e recursos especializados (avançado) |
| **MCP** | Protocolo para conectar Ferramentas e fontes de dados externas (avançado) |
| **Tarefa Cloud** | Tarefa que roda em ambiente na nuvem, não no Sandbox local |

## Em linguagem mais direta

- **Prompt**: o que você diz ao dar a Tarefa
- **Contexto**: o material que ele tem em mãos neste momento
- **Agent**: não só responde com um parágrafo — ele avança a Tarefa de verdade
- **Aprovação**: algumas coisas ele não pode fazer sozinho; precisa do seu ok
- **Diff**: comparação entre antes e depois da mudança
- **Skill**: empacota um jeito fixo de trabalhar para reutilizar

## Como usar

Quando encontrar estes termos em outras páginas, não precisa parar para consultar a definição toda vez:

- Se entendeu aproximadamente, continue lendo
- Se continua vago depois de ver várias vezes, volte aqui
- Se já atrapalha o entendimento do fluxo, leia a página temática correspondente

## Dá para agrupar

Se não quiser memorizar tudo de uma vez, agrupe assim:

- O que você diz: Prompt
- O que ele vê: Contexto
- Como ele age: Agent, Ferramenta
- Se ele pode agir: Aprovação, Sandbox
- Como você verifica: Diff, resultado da Tarefa

## Estes termos podem esperar

A maior parte do que segue é conteúdo avançado; na primeira vez não precisa dominar:

- Skill
- MCP
- Hook
- Plugin
- Detalhes de ambiente Cloud

Complete a [primeira Tarefa](/guide/getting-started/run-your-first-task/) e depois volte a estes termos — costuma ficar mais natural.

Quando aparecer uma palavra nova, consulte aqui e continue lendo.

Na primeira leitura do handbook, trate estes termos como pistas. Saber aproximadamente o que significam é mais prático do que memorizar tudo de início.


---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só oferece um guia de terminologia para iniciantes; links internos e as explicações dos termos foram revisados, e o texto não depende de fatos de produto voláteis.  
**Última verificação:** 2026-07-26
