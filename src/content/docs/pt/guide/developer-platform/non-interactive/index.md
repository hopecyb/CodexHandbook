---
title: Modo não interativo
description: Página de orientação para lotes, scripts e pipelines — compreende primeiro que Tarefas encaixam, depois comandos e desenho da saída.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Muita gente, na primeira vez que vê «modo não interativo», interpreta-o como «Codex normal sem chat».

O modo não interativo serve melhor para meter o Codex em scripts, CI ou processamento em lote, para concluir uma coisa de forma estável com um comando.

## Ordem recomendada

1. [codex exec](/guide/developer-platform/non-interactive/codex-exec/)
2. [Scripts e pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/)
3. [Saída estruturada](/guide/developer-platform/non-interactive/structured-output/)
4. [Códigos de saída e retries](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Que problemas este grupo resolve melhor

- Como transformar uma Tarefa num passo de linha de comandos
- Como a CI decide sucesso, falha ou necessidade de retry
- Como tornar a saída mais fácil de processar por scripts seguintes

Serve para scripts e pipelines receberem resultados de forma estável — não para conversas longas de ida e volta.

---

**Estado:** verified  
**Produtos aplicáveis:** CLI / API / Cloud  
**Base de verificação:** Cruzado com a estrutura atual do subcapítulo non-interactive e as ligações de entrada; esta página só explica que o modo não interativo serve a scripts, lotes e pipelines, sem comprometer parâmetros concretos de comandos.  
**Última verificação:** 2026-07-26
