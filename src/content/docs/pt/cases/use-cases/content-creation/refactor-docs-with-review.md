---
title: Refatorar um site de documentação com revisão
description: "Caso: atualizar ligações e capítulos em lote num projeto de documentação Astro/Starlight — diffs pequenos, verificação por build."
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Este caso demonstra tarefas de **engenharia de conteúdo**: Markdown multi-ficheiro, configuração da barra lateral, verificação por build. A stack é semelhante à deste manual, mas o cenário migra para qualquer site estático.

## Metadados

| Item | Valor |
|---|---|
| Domínio | Criação de conteúdo / engenharia de documentação |
| Entrada | CLI ou IDE |
| Risco | Médio (muitas ligações e navegação) |
| Duração | 1–3 horas (conforme a escala) |

Descrição do modelo: [modelo de caso](/cases/use-cases/case-study-template/)

## Contexto

Após acrescentar um capítulo ao site de documentação, é preciso:

1. Atualizar os slugs da barra lateral em `astro.config`
2. Corrigir ligações relativas no texto
3. `npm run build` sem erros

Humanos esquecem facilmente slugs; adequado a um Agent **executar por checklist + aceitar com build**.

## Preparação

- [ ] Ramo git limpo
- [ ] `npm run build` a correr localmente
- [ ] Lista de caminhos das novas páginas e posição-alvo na sidebar

## Prompt da tarefa (exemplo)

```text
Objetivo: acrescentar environment-variables.md a 12-reference e ligá-lo à barra lateral e ao index.
Restrições: alterar apenas src/content/docs e astro.config.mjs; não atualizar dependências.
Aceitação: npm run build com sucesso; sem ligações mortas.
Passos: alterar config primeiro, depois escrever o md, por fim atualizar 12-reference/index.md.
```

## Pontos de execução

- **Config primeiro, conteúdo depois:** evitar build a reportar missing slug
- Commit de 3–5 ficheiros por lote, para facilitar a review
- Usar [Explorar—Planear—Executar—Verificar](/cases/workflows/explore-plan-execute-verify/)

## Verificação

- [ ] Cada slug da barra lateral tem ficheiro correspondente
- [ ] Ligações internas seguem a convenção de caminhos relativos
- [ ] Log do build sem avisos Starlight (se a equipa exigir zero avisos)

## Recuperação de falhas

| Problema | Tratamento |
|---|---|
| Erro de slug na sidebar | Confrontar docs Astro; corrigir slug ou acrescentar md |
| Ligação morta | `grep` o caminho-alvo; corrigir ligação ou acrescentar página |
| Build OOM | Alterar por lotes; aumentar memória Node localmente |

## Retrospectiva

- À terceira ocorrência do mesmo «novo capítulo + sidebar», consolidar como Skill
- Marcar itens concluídos no ROADMAP para evitar desfasamento entre documentação e plano

## Fontes de referência
- Fluxo real de iteração M2 da documentação neste repositório
---

**Estado:** verified  
**Produtos aplicáveis:** CLI / IDE  
**Base de verificação:** Cruzado com os capítulos já verificados deste manual sobre artefatos de conteúdo, EPXV, aceitação por build e modelo de caso; o conteúdo limita-se ao caso estável de engenharia de conteúdo «alterações pequenas multi-ficheiro num site de documentação, verificação por build e recuperação de falhas».  
**Última verificação:** 2026-07-26
