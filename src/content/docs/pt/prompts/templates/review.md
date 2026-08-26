---
title: Template de revisão
description: Revisão estruturada de diffs e riscos de mudança.
locale: pt
source_locale: zh-CN
source_revision: 0c747c3
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Template de revisão

O desvio mais fácil numa tarefa de revisão é começar já a «corrigir por si».

É mais seguro achar os problemas primeiro e só depois decidir se altera.

## Template

```text
Reveja o diff atual face a 【main/ramo-alvo】; não altere código ainda.
Dimensões:
1. Ultrapassa o alcance de 【issue/especificação】?
2. Erros de lógica, limites, tratamento de erros
3. Segurança (segredos, injeção, permissões)
4. Testes e docs acompanham a mudança?
Saída: lista classificada 🔴 bloqueante / 🟡 sugestão / 🟢 ok, cada item com arquivo e número de linha.
```

## Quando usar este template

- Rever um PR
- Rever um diff
- Avaliar riscos de uma ronda de mudanças em docs ou configuração

## Ideias erradas habituais

### 1. Revisão = pedir umas opiniões

Mais precisamente: pedir que encontre problemas de forma estruturada.

### 2. Sem bug óbvio = aprovado

A revisão também deve ver:

- se ultrapassa o alcance
- se testes e docs acompanharam
- se há problemas de segurança e de limites

O foco deste template é trazer riscos à superfície por dimensões fixas — não avaliar de forma vaga se «está bom».

## Relacionado

- [Rever antes de fazer merge](/pt/cases/workflows/review-before-merge/)
- [Caso: rever um PR](/pt/cases/review-a-pr/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página oferece um template de tarefas de revisão; links e estrutura foram revistos; o corpo não depende de factos voláteis do produto.
