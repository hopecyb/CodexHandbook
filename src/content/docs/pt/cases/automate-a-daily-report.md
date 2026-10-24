---
caseCategory: team
directoryOrder: 110
contentType: case
outputs: [markdown]
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Os use cases atuais do Codex em OpenAI Developers ainda incluem “Automate bug triage” e “Turn feedback into actions”; esta página define o relatório diário como «Markdown de formato fixo + código de saída claro + script ou Skill reutilizável» — um padrão estável de fluxo automatizado, sem depender de uma integração específica."
  checkedAt: "2026-07-26"
title: Automatizar um relatório diário
description: Transforme trabalho de resumo repetitivo num script ou Skill reutilizável.
locale: pt
source_locale: zh-CN
source_revision: 2149e0a
translation_status: reviewed
translated_at: 2026-10-24
reviewed_at: 2026-08-26
---

## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Equipas |
| Cliente | CLI |
| Tempo estimado | 1–2 horas (primeira versão) |

## 1. Objetivo e contexto

**Objetivo:** Gerar diariamente, de forma automática, um resumo de alterações, resultados de testes e lista de tarefas pendentes.

**Critérios de sucesso:** Um comando ou Skill produz Markdown em formato fixo; falhas têm código de saída claro.

## 2. Prompt recomendado

```text
Objetivo: gerar o relatório diário em Markdown desde ontem até agora.
Conteúdo: resumo do git log, estado do CI (se legível), lista de PRs abertos.
Saída: reports/daily-YYYY-MM-DD.md
Restrições: git só de leitura; não fazer push; fornecer scripts/generate-daily.sh para reexecução.
```

## 3. Consolidação

- [Exemplo de Skill de automatização](/pt/skills/examples/automation-skill/)
- [Tarefas agendadas](/pt/skills/automations/scheduled-tasks/)
