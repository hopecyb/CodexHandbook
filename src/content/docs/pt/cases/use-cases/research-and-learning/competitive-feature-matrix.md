---
title: "Caso: matriz de comparação de funcionalidades"
description: Investigação com citações e produção de tabelas — fluxo reutilizável também por leitores não técnicos.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Produto, operações, investigadores |
| Cliente | App ou CLI |
| Tempo estimado | 45 minutos |
| Data de verificação | 2026-07-25 |

## 1. Objetivo e contexto

**Objetivo:** Produzir uma tabela de comparação de 3–5 concorrentes (funcionalidades, pistas de preços, cenários de uso), com fonte em cada conclusão.

**Critérios de sucesso:**

- Tabela Markdown + marcação «a confirmar»
- Sem inventar preços nem números de versão
- Sem escrever segredos internos em documentação externa

## 2. Preparação

- Clarificar dimensões de comparação (no prompt ou em `@brief.md` de antemão)
- Ativar [pesquisa na web](/guide/tools/web-search/) (se o produto suportá-la)

## 3. Fluxo de trabalho

Seguir [investigação com fontes](/cases/workflows/research-with-sources/):

```text
Compare as funcionalidades de «colaboração em equipa» de A/B/C:
para cada dimensão, 1–2 frases + URL da fonte;
documentação oficial tem prioridade sobre blogs;
se o preço não for verificável, marque «a confirmar»;
produza tabela markdown; não altere outros ficheiros do repositório.
```

**Verificação:** Abrir manualmente 3 URLs; verificar datas face à [política de verificação](/guide/start-here/handbook-version-policy/).

## 4. Falha e recuperação

- Fontes em conflito: exigir as duas versões em paralelo; não forçar unificação
- Contexto demasiado longo: dividir em «primeiro A vs B, depois acrescentar C»

## 5. Consolidação

- Modelo da tabela de comparação no diretório de modelos ou base de conhecimento da equipa
- Pode tornar-se Skill: `source-backed-research`

## 6. Capítulos relacionados

- [Artefato primeiro](/cases/workflows/artifact-first-work/)
- [Validar fontes](/guide/quality/validate-sources/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI  
**Base de verificação:** Cruzado com os capítulos já verificados deste manual sobre investigação com fontes, pesquisa na web, validação de fontes e política de versões; o conteúdo limita-se à estrutura estável do caso de investigação «produzir tabela de comparação de concorrentes com fontes», sem fixar preços ou versões de produto concretas.  
**Última verificação:** 2026-07-26
