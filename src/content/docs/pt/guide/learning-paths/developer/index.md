---
title: Percurso de desenvolvedor (visão geral)
description: Visão geral da rota relacionada com desenvolvimento de software; passos aprofundados a completar depois.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


> Estado MVP: esta página é uma visão geral. Os cinco passos completos serão completados em marcos posteriores.

Se queres usar o Codex sobretudo para alterar código, compreender projetos e corrigir problemas, podes começar por este percurso.

## Situações adequadas

- Quem precisa de ler código, alterar código e correr testes
- Quem quer ligar o Codex a um fluxo de desenvolvimento real
- Quem quer dominar o fluxo «escrever Tarefa → ver Diff → correr Verificação»

## O que podes ler agora

- [Primeiros passos](/guide/getting-started/) e [CLI](/guide/cli/) / [IDE](/guide/ide/)
- [Correr testes](/guide/quality/run-tests/) · [Rever Diffs](/guide/quality/review-diffs/)
- [Planeamento do Agent](/guide/agent-work/planning/)

## Mal-entendidos frequentes

### 1. O percurso de desenvolvedor é deixá-lo começar a escrever código

O que mais afeta a qualidade costuma ser:

- Se compreendeu o âmbito
- Se definiste critérios de conclusão
- Se no fim olhaste a sério para o Diff e para a Verificação

### 2. Já sei programar, posso saltar os conceitos básicos

Melhor não saltar por completo.

A forma de trabalho do Codex não é a mesma que o autocomplete de um editor; conceitos como Permissão, Contexto e chamada de Ferramentas afetam diretamente o resultado.

## Ordem de leitura sugerida

Se vais usar o Codex no desenvolvimento, lê nesta ordem:

1. [Primeiros passos](/guide/getting-started/)
2. [CLI](/guide/cli/) ou [IDE](/guide/ide/)
3. [Trabalho do Agent](/guide/agent-work/)
4. [Correr testes](/guide/quality/run-tests/)
5. [Rever Diffs](/guide/quality/review-diffs/)

Este percurso valoriza alterações controláveis e resultados verificáveis — não só «fazê-lo escrever já».

## Passos planeados (esquema)

Compreender o código → Correção e implementação → Testes e revisão → Fluxos automatizados → Desenvolvimento multi-Agent


---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE  
**Base de verificação:** Cruzado com entradas de desenvolvimento, trabalho do Agent, correr testes e rever Diffs; esta página é só «visão geral da ordem de leitura do desenvolvedor», sem comprometer comportamentos por omissão de implementação ou Ferramentas.  
**Última verificação:** 2026-07-26
