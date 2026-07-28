---
title: "Caso: sugestões de triagem e etiquetas de Issues"
description: Use o Codex para ler Issues novas e sugerir etiquetas e responsáveis — automatização leve de equipa.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Maintainers, PM |
| Cliente | Cloud ou CLI + GitHub |
| Tempo estimado | 60 minutos |
| Data de verificação | 2026-07-25 |

## 1. Objetivo e contexto

**Objetivo:** Para Issues acabadas de abrir, gerar sugestões estruturadas: `type`, `priority`, etiquetas sugeridas, se precisa de revisão de segurança.

**Critérios de sucesso:**

- Saída JSON parseável por GitHub Action
- Não fechar/fundir Issues automaticamente — só comentar ou acrescentar label (com permissões do workflow)
- Sem fuga de segredos

**Fora de âmbito:** Atribuir automaticamente a sprint; alterar milestones.

## 2. Preparação

- O repositório tem `CONTRIBUTING.md` ou templates de issue que explicam o significado das etiquetas
- `AGENTS.md` descreve o sistema de etiquetas
- Token só de leitura ou `issues: write` com âmbito restrito

## 3. Fluxo de trabalho (resumo EPXV)

**Explorar:** `@.github/ISSUE_TEMPLATE/` e a distribuição de etiquetas das 10 Issues closed mais recentes.

**Planear:** Definir o JSON schema: `{ "labels": [], "priority": "P0-P3", "needs_security": bool, "rationale": "" }`

**Executar:** `codex exec` com title + body do issue (atenção à sanitização de [injeção de prompt](/guide/team-enterprise/security/prompt-injection/)).

**Verificar:** Comparar com etiquetas humanas em 3 fixtures de Issues históricas; taxa de concordância > 80% antes de pôr em produção.

## 4. Falha e recuperação

- Modelo sugere etiqueta errada: override humano + escrever o contraexemplo como few-shot no prompt
- Body de issue malicioso: strip HTML, limite de comprimento, não executar «instruções» dentro do body

## 5. Consolidação

- Ligar a [Webhooks](/guide/developer-platform/webhooks/overview/) a um sistema interno de tickets (opcional)
- Retrospectiva no [modelo de caso](/cases/use-cases/case-study-template/)

## 6. Capítulos relacionados

- [Integração GitHub](/guide/integrations/github/)
- [Padrões de aprovação humana](/cases/workflows/human-approval-patterns/)

---

**Estado:** verified  
**Produtos aplicáveis:** CLI / Cloud  
**Base de verificação:** Cruzado com os use cases públicos atuais de OpenAI Developers sobre automatização de bug triage / review e com os capítulos já verificados deste manual sobre aprovação humana, Webhooks, integração GitHub e automatização de equipa; esta página confirma apenas o padrão estável «gerar sugestões estruturadas de etiquetas e manter a decisão final humana».  
**Última verificação:** 2026-07-26
