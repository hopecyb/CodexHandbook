---
caseCategory: team
directoryOrder: 115
contentType: case
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "A documentação atual de planos do Codex no OpenAI Help Center ainda indica que a App para desktop suporta Codex agents em paralelo, worktrees integrados e delegação na cloud; esta página resume apenas o padrão de colaboração «exploração em paralelo, isolamento por diretório, evitar push paralelo, fusão humana de conclusões», sem depender de um único fluxo de UI."
  checkedAt: "2026-07-26"
title: Coordenar vários Agents
description: Caso de colaboração com exploração em paralelo, divisão de trabalho e fusão de resultados.
locale: pt
source_locale: zh-CN
source_revision: "7b143fc"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---


## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Desenvolvedores / equipes |
| Cliente | App para desktop |
| Tempo estimado | Depende da tarefa |

## 1. Objetivo e contexto

**Objetivo:** Dividir subproblemas paralelizáveis por vários Agents e fundir as conclusões manualmente.

**Critérios de sucesso:** Cada sub-Agent tem definição de conclusão própria e não sobrescreve o mesmo arquivo.

## 2. Padrões recomendados

### Exploração em paralelo, escolha humana

```text
Agent 1: prós, contras e esforço da opção A
Agent 2: prós, contras e esforço da opção B
(Após a sua escolha, um único Agent executa)
```

### Isolamento com árvores de trabalho

Agents diferentes alteram ramos diferentes em [git worktrees](/pt/guide/desktop-app/worktrees/) distintos; a fusão final é humana.

## 3. Regras de coordenação (sugeridas em AGENTS.md)

- Cada Agent com limites de diretório claros
- Proibir `git push` em paralelo
- Correr CI unificado antes de fundir

## 4. Relacionado

- [Colaboração multi-Agent](/pt/cases/workflows/multi-agent-coordination/)
- [Subagents](/pt/guide/agent-work/subagents/)
