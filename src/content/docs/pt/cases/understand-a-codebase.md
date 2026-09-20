---
caseCategory: development
directoryOrder: 60
contentType: case
outputs: [markdown]
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Os use cases atuais do Codex em OpenAI Developers ainda incluem “Understand large codebases”, com foco em seguir o caminho principal, identificar módulos críticos e localizar ficheiros relevantes; o exemplo desta página é exploração só de leitura, alinhado com o posicionamento oficial atual."
  checkedAt: "2026-07-26"
title: Compreender um código-base
description: Explore um repositório desconhecido em modo só de leitura e construa um mapa cognitivo acionável.
locale: pt
source_locale: zh-CN
source_revision: c89ee30
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---


## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Programadores |
| Cliente | CLI / IDE |
| Tempo estimado | 30–60 minutos |

## 1. Objetivo e contexto

**Objetivo:** Antes de alterar, clarificar limites de módulos, pontos de entrada e zonas de risco.

**Critérios de sucesso:** Conseguir explicar a outros o caminho principal «do pedido à resposta» ou «do comando à saída».

## 2. Prompt recomendado

```text
Não altere código. Leia @src/ e @README e, em no máximo 8 pontos, explique:
1. Objetivo do projeto e stack tecnológica
2. Responsabilidade dos diretórios principais
3. Pontos de entrada para arranque/testes
4. Os 3 ficheiros mais relevantes para [o meu objetivo]
5. 3 perguntas para eu confirmar
```

## 3. Verificação

- Confrontar com `package.json` / ficheiros de entrada reais
- Registar as conclusões num issue ou num resumo em `AGENTS.md`

## 4. Relacionado

- [Modelo de compreensão](/pt/prompts/templates/understand/)
- [Explorar—Planear—Executar—Verificar](/pt/cases/workflows/explore-plan-execute-verify/)
