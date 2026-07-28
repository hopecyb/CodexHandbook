---
title: Investigação com fontes
description: Use o Codex para pesquisa, comparação e verificação de factos — com fontes e conclusões rastreáveis.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

O fluxo de trabalho de **investigação com fontes** exige que as conclusões voltem a **fontes** (documentação oficial, artigos, ficheiros do repositório), e não a invenções confiante do modelo. Adequado a seleção tecnológica, comparação de concorrentes, revisão de literatura e interpretação de políticas.

## Que problema resolve esta página

- Quando usar [pesquisa na web](/guide/tools/web-search/) vs. repositório só de leitura
- Como exigir formato de citação e marcação de incerteza
- Ligação a [validar fontes](/guide/quality/validate-sources/)

## Prática mínima viável

```text
Investigue a «adequação de Rust vs Go neste repositório»:
1. Liste primeiro as dimensões de avaliação (desempenho, ecossistema, familiaridade da equipa)
2. Cada conclusão com URL da fonte ou caminho de ficheiro @no repositório
3. O que não for verificável, marque como «a confirmar»
4. Termine com recomendação e questões em aberto
Não altere código.
```

## Fluxo recomendado

```text
Definir o problema e exclusões
    → Recolher fontes (pesquisa / ler docs / MCP)
    → Tabela de comparação + prós e contras
    → Marcar confiança e fontes em conflito
    → Decisão humana ou passar à fase de especificação
```

Tarefas de investigação longas devem ser divididas em várias rondas; ver [gestão de tarefas longas](/prompts/long-running-tasks/).

## Erros comuns

- Não exigir URLs — o resultado não é reauditável
- Misturar blogs desatualizados com documentação oficial sem o dizer
- Tratar conclusões de investigação como instruções de implementação, saltando a especificação
- Carregar ficheiros com dados confidenciais para ferramentas externas não autorizadas

## Limites de segurança

- Material interno não público não deve sair por MCP não controlado
- Factos voláteis (preços, versões, disponibilidade regional) devem marcar a [data de verificação](/guide/start-here/handbook-version-policy/)

## Lista de aceitação

- [ ] Conclusões-chave têm pelo menos uma fonte clicável ou rastreável
- [ ] Informação em conflito é apresentada em paralelo
- [ ] Itens «incertos» estão listados, sem se fazerem passar por factos
- [ ] Dados sensíveis não aparecem no prompt nem nos logs

## Capítulos relacionados

- [Lidar com incerteza](/guide/quality/handle-uncertainty/)
- [Caso: refatorar documentação com revisão](/cases/use-cases/content-creation/refactor-docs-with-review/)

## Fontes de referência

- Métodos de investigação e citação do CodexGuide
- Capítulos de pesquisa e verificação de stormzhang

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Os use cases atuais do Codex em OpenAI Developers ainda incluem “Learn a new concept”, com ênfase em transformar material denso em aprendizagem ou investigação verificável; esta página exige ainda URL ou caminho de ficheiro do repositório em cada conclusão e marca explicitamente itens a confirmar — alinhado com as melhores práticas atuais de «investigação com fontes».  
**Última verificação:** 2026-07-26
