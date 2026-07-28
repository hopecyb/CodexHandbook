---
title: Analisar uma folha de cálculo
description: Carregue ou referencie dados tabulares para resumos e insights.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Analisar uma folha de cálculo

## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Criadores / negócio |
| Cliente | App |
| Tempo estimado | 30–60 minutos |

## 1. Objetivo e contexto

**Objetivo:** Limpar, agregar e sugerir visualizações para CSV/Excel.

**Critérios de sucesso:** Conclusões reproduzíveis; números-chave rastreáveis às linhas/colunas da tabela original.

## 2. Prompt recomendado

```text
Entrada: @data/sales-q1.csv
Objetivo: agregar vendas por região, variação face ao período anterior e Top 3 produtos; assinalar outliers.
Restrições: não modificar o ficheiro original; produzir summary.md e, opcionalmente, notas de chart.
Aceitação: cada número em summary indica o método de cálculo ou o nome da coluna citada.
```

## 3. Verificação

- Recalcular por amostragem 2–3 números agregados
- Confirmar que nenhum PII foi escrito em logs ou enviado para fora

## 4. Relacionado

- [Tabelas e folhas de cálculo](/guide/files-and-artifacts/tables-and-spreadsheets/)
---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Os use cases atuais do Codex em OpenAI Developers ainda incluem “Query tabular data” e “Clean and prepare messy data”; o exemplo desta página foca limpeza só de leitura, agregação e análise de anomalias em CSV/Excel, exigindo que números-chave sejam rastreáveis aos campos da tabela original — alinhado com os cenários oficiais atuais.  
**Última verificação:** 2026-07-26
