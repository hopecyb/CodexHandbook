---
title: 'Exemplo: Skill de automação'
description: Empacote checagens repetidas ou geração de relatórios como Skill.
locale: pt
source_locale: zh-CN
source_revision: 0d33e2d
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Exemplo: Skill de automação

## Esqueleto de SKILL.md

```md
---
name: daily-report
description: Resume alterações de ontem, resultados de teste e pendências em Markdown de relatório diário. Use quando o usuário quiser relatório diário, material de standup ou resumo de progresso.
---

## Fluxo
1. Ler git log (intervalo de tempo indicado) e resumo do status de CI
2. Listar itens concluídos, bloqueios e plano de amanhã
3. Gravar em reports/daily-YYYY-MM-DD.md
4. Não enviar e-mail nem mensagem, a menos que eu peça explicitamente

## scripts/
- scripts/collect-metrics.sh (opcional)
```

## Relacionado

- [Caso: automatizar relatório diário](/pt/cases/automate-a-daily-report/)
- [Tarefas agendadas](/pt/skills/automations/scheduled-tasks/)
---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base da Verificação:** Esqueleto ilustrativo de Skill de resumo repetitivo; ainda é um padrão estável de workflow suportado por Codex/Skills, sem amarrar a uma entrada específica de automação.  
**Última Verificação:** 2026-07-26
