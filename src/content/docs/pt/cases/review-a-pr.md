---
title: Revisar um PR
description: Use o Codex para uma revisão estruturada do diff antes de fundir.
locale: pt
source_locale: zh-CN
source_revision: 29b081c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Revisar um PR

## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Programadores / equipas |
| Cliente | CLI / IDE / Cloud |
| Tempo estimado | 20–40 minutos |

## 1. Objetivo e contexto

**Objetivo:** Antes de fundir, detetar alargamento de âmbito, riscos de segurança e lacunas de testes.

**Critérios de sucesso:** A saída da revisão é rastreável a ficheiros/linhas concretas; P0 tratados ou a fusão bloqueada.

## 2. Prompt recomendado

```text
Compare o diff do ramo atual com main (não altere código ainda):
1. Sai do âmbito do issue?
2. Há riscos de segurança evidentes (segredos, injeção, permissões)?
3. Faltam testes ou documentação?
Produza uma checklist, marque P0/P1 e inclua caminhos de ficheiro.
```

## 3. Consolidação na equipa

- Usar o Skill [`$pr-review`](/pt/skills/examples/review-skill/)
- Integração CI em [automatização de revisão de código](/pt/guide/developer-platform/ci-cd/code-review-automation/)

## 4. Relacionado

- [Modelo de revisão](/pt/prompts/templates/review/)
- [Revisão antes de fundir](/pt/cases/workflows/review-before-merge/)
---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Os use cases atuais do Codex em OpenAI Developers ainda incluem “Review GitHub pull requests”, com ênfase em captar regressões e problemas potenciais antes da revisão humana; o exemplo desta página exige apenas revisão estruturada do diff, saída P0/P1 e caminhos de ficheiro, sem depender de UI ou comandos fixos.  
**Última verificação:** 2026-07-26
