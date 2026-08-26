---
title: 'Exemplo: Skill de revisão'
description: Exemplo de Skill baseado em pr-review, para reutilizar ou adaptar em equipe.
locale: pt
source_locale: zh-CN
source_revision: 5fb154c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Exemplo: Skill de revisão

Este exemplo corresponde ao `pr-review` em [Criar seu primeiro Skill](/pt/skills/create-your-first-skill/) — ajuste conforme a equipe.

## SKILL.md

```md
---
name: pr-review
description: Revisa o git diff; lista problemas bloqueantes, lacunas de teste e sugestões de estilo. Use quando o usuário mencionar review, revisão ou checagem antes do merge. Não serve para escrever funcionalidades novas.
---

# Revisão de PR

## Entrada
- Branch de comparação padrão: main (se não existir, use o branch padrão)

## Fluxo
1. Listar arquivos alterados e o tipo de mudança (feature/fix/refactor/docs)
2. Para cada mudança lógica: falta teste? Quebra API?
3. Verificar se há segredos, logs de debug ou diff grande e irrelevante
4. Saída: 🔴 Bloqueante / 🟡 Sugestão / 🟢 OK

## Proibido
- Não fazer git push
- Não alterar APIs públicas não discutidas
```

## Teste

```text
$pr-review Por favor revise minhas alterações ainda não commitadas
```
---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base da Verificação:** Revisar diff e emitir conclusão estruturada continua sendo cenário típico do Codex; esta página oferece um esqueleto ilustrativo de `SKILL.md`, sem depender de UI volátil.  
**Última Verificação:** 2026-07-26
