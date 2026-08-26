---
title: "Caso: verificação agendada de ligações na documentação"
description: Use Codex não interativo ou CI para detetar ligações mortas no site — caso introdutório de automatização de equipa.
locale: pt
source_locale: zh-CN
source_revision: e8fa8bd
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Maintainers de equipa, Technical Writers |
| Cliente | CLI + GitHub Actions |
| Tempo estimado | 45–90 minutos (inclui a primeira configuração de CI) |
| Data de verificação | 2026-07-25 |

## 1. Objetivo e contexto

**Objetivo:** Verificar semanalmente, de forma automática, ligações internas do site de documentação e amostragem de ligações externas críticas; reportar ligações mortas em PR ou issue.

**Critérios de sucesso:**

- CI ou workflow agendado repetível
- Lista estruturada de ligações mortas (ficheiro, número de linha, URL)
- Não alterar ficheiros irrelevantes; não fazer push

**Fora de âmbito:** Crawler do site inteiro; páginas após login; testes de desempenho.

## 2. Preparação

- Código-fonte do site de documentação no repositório Git (como `src/content/docs/` neste manual)
- Já existe `npm run build` ou script de link checker (opcional)
- `GITHUB_TOKEN` só de leitura e `OPENAI_API_KEY` em org secrets

## 3. Fluxo de trabalho

### Explorar

```text
Leia @src/content/docs/ e os scripts atuais em package.json.
Liste se já existe link check; se não, sugira o esquema mínimo: ligações internas em markdown + amostragem de docs oficiais externas.
Não altere ficheiros.
```

### Planear

```text
Apresente o plano: caminho do ficheiro de prompt, nome do workflow CI, campos do JSON estruturado de saída.
Espere a minha confirmação antes de criar ficheiros.
```

### Executar

- Acrescentar `prompts/ci/link-check.md`
- Acrescentar `.github/workflows/docs-link-check.yml` (indicativo; ver [scripts e pipelines](/pt/guide/developer-platform/non-interactive/scripts-and-pipelines/))
- Usar [codex exec](/pt/guide/developer-platform/non-interactive/codex-exec/) ou script puro + segunda classificação pelo Codex

### Verificar

- Uma corrida local com `codex exec`
- CI manual com `workflow_dispatch`
- Inserir de propósito uma ligação morta e confirmar `pass: false`

## 4. Falha e recuperação

| Problema | Tratamento |
|---|---|
| Site externo com 503 temporário | Distinguir ligação morta dura vs falha suave; definir no prompt |
| Falha ao parsear JSON | Apertar restrições de [saída estruturada](/pt/guide/developer-platform/non-interactive/structured-output/) |
| Quota esgotada | Passar a agendamento semanal + verificação incremental |

## 5. Consolidação

- Após a terceira execução bem-sucedida, consolidar como Skill: `docs-link-audit`
- [Regras de comando](/pt/guide/customization/rules/team-rules/) da equipa permitem `npm run build` e git só de leitura

## 6. Capítulos relacionados

- [Gestão de tarefas longas](/pt/cases/workflows/long-running-task-management/)
- [Tarefas agendadas Automations](/pt/skills/automations/scheduled-tasks/)
- [Percurso de aprendizagem da equipa](/pt/guide/learning-paths/team/)

---

**Estado:** verified  
**Produtos aplicáveis:** CLI  
**Base de verificação:** Cruzado com os capítulos já verificados deste manual sobre modo não interativo, scripts e pipelines, saída estruturada, regras de equipa e automatização; o conteúdo limita-se ao caso estável de automatização de equipa «verificação agendada de ligações, relatório estruturado e paragem em falha».  
**Última verificação:** 2026-07-26
