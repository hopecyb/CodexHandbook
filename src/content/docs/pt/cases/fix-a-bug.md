---
title: Corrigir um bug
description: Do teste em falha à correção mínima e regressão — o ciclo mais comum para programadores.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Programadores |
| Cliente | CLI ou IDE (repositório local) |
| Tempo estimado | 30–60 minutos |
| Data de verificação | 2026-07-25 |

## 1. Objetivo e contexto

**Objetivo:** Corrigir um bug de regressão já capturado por um teste unitário e acrescentar testes para evitar reincidência.

**Critérios de sucesso:**

- O teste que falhava passa
- A suíte completa continua verde
- O diff envolve apenas ficheiros necessários

**Fora de âmbito:** Refatorações em larga escala; upgrades major de dependências.

## 2. Preparação

- Clonar o repositório, `pnpm install` (ou conforme `AGENTS.md`)
- Confirmar reprodução local da falha: `pnpm test -- path/to/failing.test.ts`
- Ramo: `fix/issue-123-short-desc`

## 3. Fluxo de trabalho

### Explorar

```text
Não altere código. Leia o teste em falha @tests/auth/login.test.ts e a implementação @src/auth/login.ts;
em no máximo 5 pontos, explique a causa da falha, citando asserções e números de linha da stack.
```

### Planear

```text
Apresente o plano de correção: que ficheiros alterar, se são necessários novos testes e como verificar.
Espere a minha resposta «executar» antes de alterar código.
```

### Executar

```text
Execute os passos 1–2 do plano. Após cada passo, corra apenas os testes relacionados.
```

### Verificar

```text
Corra a suíte completa de testes; resuma o diff para a minha review; não faça git push.
```

Humano: ler o diff, confirmar que não há alterações irrelevantes e seguir [rever diffs](/guide/quality/review-diffs/).

## 4. Falha e recuperação

| Problema | Tratamento |
|---|---|
| A correção introduz novas falhas | `git stash` ou reverter o commit; reduzir o âmbito da alteração |
| Diagnóstico da causa raiz errado | Voltar à exploração e pedir novas hipóteses |
| Teste flaky | Estabilizar o teste antes de corrigir a lógica de negócio |

## 5. Consolidação

- Se este tipo de bug se repetir, acrescentar uma convenção em `AGENTS.md`
- Pode extrair o Skill `$regression-guard`: correr a lista de testes críticos antes de fundir

## 6. Capítulos relacionados

- [Compreender um código-base](/cases/understand-a-codebase/)
- [Rever diffs](/guide/quality/review-diffs/)
- [Correr testes](/guide/quality/run-tests/)

---

**Estado:** verified  
**Produtos aplicáveis:** CLI / IDE  
**Base de verificação:** A página inicial atual de OpenAI Developers ainda descreve o Codex como útil para corrigir defeitos, correr testes e rever alterações; o exemplo desta página foca o ciclo de engenharia estável «reproduzir a falha, correção mínima, complementar testes e verificar regressão», sem depender de um framework ou UI específicos.  
**Última verificação:** 2026-07-26
