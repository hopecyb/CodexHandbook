---
caseCategory: office
directoryOrder: 10
title: Do CSV de vendas a um relatório semanal verificável
description: Pratique limpeza, agrupamento, comparação semanal e conferência independente com 46 linhas de vendas fictícias; baixe materiais e respostas.
contentType: case
audiences: [creator, beginner]
task: data-analysis
level: beginner
estimatedMinutes: 40
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: O script de referência foi executado e passaram as conferências independentes com centavos inteiros e SQL. Trata-se de autoverificação do autor, ainda sem teste com leitores comuns nem segunda revisão humana.
  environment: Darwin 27.0.0 / arm64, Python 3.12.11; script da biblioteca padrão, independente de um cliente Codex específico.
  evidence:
    - label: Ver registro de execução e revisão
      href: /downloads/sales-weekly-report/record.md
assets:
  - path: /downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip
    purpose: Materiais completos, respostas de referência e scripts de conferência
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /pt/cases/
  label: Escolher tarefa prática
next:
  link: /pt/guide/verification/
  label: Aprender a verificar resultados
locale: pt
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 2b4f164
---

Neste exercício, entregue um relatório semanal de vendas, resumo por região, ranking de produtos e registro de limpeza linha a linha. Os dados de entrada são sintéticos e criados para este site; não são necessários dados reais de clientes.

Nível: iniciante. A estimativa de 30–45 minutos é editorial e não foi cronometrada com leitores. Pré-requisito: conseguir fornecer arquivos locais ao Codex. Ler o resultado de referência não exige programação; para executar o validador é necessário Python 3.10+.

[Baixar pacote completo v1.0.0 (ZIP)](/downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip) · [Baixar apenas o CSV de vendas](/downloads/sales-weekly-report/sales.csv)

## Veja primeiro o resultado esperado

| Indicador | Valor de referência | Ponto de conferência |
|---|---:|---|
| Vendas líquidas no período atual | 4.644,75 yuans | Incluir reembolsos |
| Líquido da região Leste | 1.281,25 yuans | 1.401,75 − 120,50 |
| Valor sem data | 199,99 yuans | Isolar, sem adivinhar a semana |

O período atual vai de 07/09/2026 a 13/09/2026; o anterior, de 31/08/2026 a 06/09/2026. A variação entre as duas semanas civis completas é 87,04%. Este é apenas um resultado de dados sintéticos e não explica causas reais de negócios.

[Ver relatório de referência](/downloads/sales-weekly-report/summary.md). Faça o exercício antes de comparar com a resposta.

## Baixe os materiais

O pacote inclui briefing, dicionário de dados, três prompts, CSV de 46 linhas, relatório de referência, três CSVs de resumo e registro, implementação de referência, script de verificação independente e registro de validação. Tudo está sob CC0 1.0 e pode ser alterado e redistribuído.

Depois de descompactar, abra a pasta `sales-weekly-report`. Baixar só o CSV não faz os demais arquivos citados aparecerem automaticamente.

## 1. Confirme arquivos e critérios

Passe esta tarefa ao Codex. A forma de oferecer arquivos varia por cliente; primeiro garanta que ele realmente os leu.

```text
Leia brief.md, starter/data-dictionary.md e starter/sales.csv.
Confirme que existem e liste campos, intervalo de datas, quantidade de
registros e números das linhas que exigem tratamento especial.
Não altere a tabela original nem consulte solution. Diferencie duplicatas
exatas, falta de data, valores negativos e zero verdadeiro.
Descreva as duas semanas segundo o dicionário; liste conflitos.
Se não houver conflito, prossiga.
```

As 46 linhas originais incluem dois reembolsos, uma duplicata exata e uma linha sem data. De uma duplicata exata, mantenha apenas a primeira; se registros com o mesmo ID diferirem, pare a conferência. Não invente a data ausente; valor zero é válido. Ao final, 44 linhas devem ser incluídas.

## 2. Gere relatório e registro de cálculos

Continue com `prompts/02-report.md` do pacote e grave os resultados em `my-output/`:

| Arquivo | Conteúdo necessário |
|---|---|
| `summary.md` | Total, variação, regiões, Top 3 atual, qualidade dos dados e base de cálculo |
| `region-summary.csv` | Líquido de cada região nas duas semanas, diferenças e variação; total conciliável com as regiões |
| `top-products.csv` | Produtos em ordem decrescente pelo líquido atual, incluindo reembolsos |
| `row-ledger.csv` | Número da linha original, decisão de inclusão, semana e valor de cada registro |

Mantenha entrada, `solution` e `validation` inalterados. Siga nomes dos campos e ordem das tabelas do dicionário para que a validação independente compare cada item. A região Sudoeste tinha base zero na semana anterior; use N/A para a variação, nunca 0% ou crescimento infinito.

## 3. Confira de forma independente, sem perguntar apenas “está certo?”

Na pasta do exercício descompactado, execute:

```sh
python3 validation/check.py --output my-output
```

Com os quatro resultados completos e de acordo com os critérios, aparece `result: PASS`. Mudança no hash de entrada, reembolso omitido, agrupamento errado ou registro incoerente geram erro. Se falhar, corrija seus resultados; não altere o validador para fazê-lo aceitar.

Se não puder executar Python, confira ao menos manualmente:

1. Os sete valores positivos do Leste somam 1.401,75 yuans. Com o reembolso de −120,50 na linha 44, o total é 1.281,25.
2. As três regiões atuais somam 1.281,25 + 2.101,75 + 1.261,75 = 4.644,75.
3. A linha 47 O046 não tem data; seus 199,99 yuans não entram em nenhuma das semanas. A linha 46 O001 é duplicata.

A validação automática não analisa todas as conclusões em linguagem natural. Leia o relatório e remova causas de crescimento ou julgamentos de negócios sem fonte.

## 4. Pratique a correção: reembolso omitido

**Contraexemplo planejado**: se todos os negativos forem filtrados, o total atual seria 4.765,25 yuans, 120,50 a mais. Na validação de referência, um resultado temporário foi realmente alterado para confirmar que o validador rejeita o valor errado. Não é um diálogo fictício com o modelo.

```text
Examine os registros válidos com net_sales menor que zero e explique
se devem entrar no cálculo. Preserve o sinal negativo dos reembolsos e
recalcule resumos por região e produto dos dois períodos. Liste a diferença
antes e depois. Não mude o CSV original nem o validador para ocultar a falha.
```

## 5. Recupere-se quando houver problemas

| Sintoma | Confira primeiro | Próxima ação |
|---|---|---|
| Arquivo não encontrado | `starter/sales.csv` existe na pasta atual? | Abra a pasta descompactada e referencie o arquivo; não deixe o agente recriar dados ausentes |
| Caracteres chineses corrompidos ou só uma coluna | Codificação UTF-8 e vírgula como separador? | Reimporte o CSV original sem editar valores manualmente |
| Diferença de 120,50 | O reembolso R043 foi omitido? | Mantenha negativos conforme o dicionário e recalcule as duas semanas |
| Divisão por zero na variação | A base anterior do Sudoeste era mesmo zero? | Escreva N/A e explique a base zero |
| Validador acusa arquivo ausente | Os quatro resultados foram gerados? | Complete conforme o dicionário e execute novamente; arquivo ausente não significa valor errado |

## Condições de conclusão e próximos passos

- O hash da tabela original permanece igual e os quatro resultados estão completos.
- Total, região Leste e valor sem data foram conferidos independentemente.
- O relatório registra anomalias, base zero e critérios de cálculo sem inventar causas.
- Está claro o que foi realmente executado e o que ainda exige revisão humana.

Guarde seus prompts e registro de correção. Antes de trocar os dados, confirme novamente campos e critérios. O validador fixo deste exercício não serve para quaisquer dados corporativos.

Continue em [verificar resultados](/pt/guide/verification/) ou volte aos [casos práticos](/pt/cases/).
