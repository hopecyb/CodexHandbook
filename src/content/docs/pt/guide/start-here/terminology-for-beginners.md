---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página só oferece um guia de terminologia para iniciantes; links internos e as explicações dos termos foram revisados, e o texto não depende de fatos de produto voláteis."
  checkedAt: "2026-07-26"
title: Terminologia para iniciantes
description: Definições curtas de tarefa, contexto, Sandbox, Skill e outros termos comuns.
locale: pt
source_locale: zh-CN
source_revision: "a18bacf"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 6
---

Entradas mais completas estão no [Glossário](/pt/guide/reference/glossary/). Aqui listamos primeiro os termos mais comuns — e os que mais atrapalham a leitura.

Ao abrir o manual do Codex pela primeira vez, o que mais trava costuma ser a densidade de nomes. Cada palavra isolada parece familiar; juntas, confundem.

Há dois casos comuns:

- Você entende cada palavra, mas não sabe o que ela significa na operação real
- Não sabe quais termos precisa dominar agora e quais podem ficar para depois

Não trate isto como prova de terminologia. Basta saber aproximadamente o que cada palavra diz, para não travar o tempo todo ao ler o texto.

## Os primeiros termos a conhecer

Se o objetivo atual é só completar a primeira tarefa, entenda estes 6 primeiro:

| Termo | Por que entender primeiro |
|---|---|
| **Prompt** | Como você deixa a tarefa clara |
| **contexto** | Que informação o Codex consegue ver agora |
| **Agent** | Por que ele não só devolve um parágrafo |
| **aprovação** | Por que às vezes ele para e pergunta |
| **Diff** | Como você verifica o que ele mudou de fato |
| **tarefa** | A unidade básica de um trabalho completo |

| Termo | Explicação simples |
|---|---|
| **Prompt** | Objetivo, contexto e requisitos que você dá ao Codex |
| **contexto (context)** | Projeto, arquivos e conversa que o modelo vê agora |
| **Agent** | Forma de execução que chama ferramentas e itera em direção a um objetivo |
| **ferramenta (tool)** | Capacidades invocáveis: ler arquivos, rodar comandos, buscar etc. |
| **Sandbox** | Ambiente de execução que limita o alcance no sistema de arquivos e na rede |
| **aprovação (approval)** | Algumas operações só continuam com seu consentimento explícito |
| **Diff** | Comparação antes/depois da mudança, para você revisar |
| **Thread / sessão** | Uma conversa contínua e o contexto acumulado |
| **tarefa** | Unidade de trabalho com objetivo (pode atravessar várias chamadas de ferramenta) |
| **Skill** | Pacote reutilizável de instruções e recursos especializados (avançado) |
| **MCP** | Protocolo para conectar ferramentas e fontes de dados externas (avançado) |
| **tarefa Cloud** | tarefa que roda em ambiente na nuvem, não no Sandbox local |

## Em linguagem mais direta

- **Prompt**: o que você diz ao dar a tarefa
- **contexto**: o material que ele tem em mãos neste momento
- **Agent**: não só responde com um parágrafo — ele avança a tarefa de verdade
- **aprovação**: algumas coisas ele não pode fazer sozinho; precisa do seu ok
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
- O que ele vê: contexto
- Como ele age: Agent, ferramenta
- Se ele pode agir: aprovação, Sandbox
- Como você verifica: Diff, resultado da tarefa

## Estes termos podem esperar

A maior parte do que segue é conteúdo avançado; na primeira vez não precisa dominar:

- Skill
- MCP
- Hook
- Plugin
- Detalhes de ambiente Cloud

Complete a [primeira tarefa](/pt/guide/getting-started/run-your-first-task/) e depois volte a estes termos — costuma ficar mais natural.

Quando aparecer uma palavra nova, consulte aqui e continue lendo.

Na primeira leitura do manual, trate estes termos como pistas. Saber aproximadamente o que significam é mais prático do que memorizar tudo de início.
