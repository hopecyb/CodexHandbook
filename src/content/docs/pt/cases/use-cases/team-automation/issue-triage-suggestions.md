---
caseCategory: team
directoryOrder: 90
title: 'Caso: triagem de issues e revisão humana'
description: Use cinco issues sintéticas para praticar propostas estruturadas, vínculo com entradas e execução de teste sem agir no GitHub.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- markdown
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: A execução de teste de cinco propostas preparadas pelo autor e oito testes de estrutura e vínculo com entradas passaram. Nenhum modelo foi chamado nem houve conexão com o GitHub; isso não comprova precisão de classificação nem prontidão para produção.
  environment: Python 3.12.11 / Darwin arm64; biblioteca padrão e entradas sintéticas, sem token ou rede.
  evidence:
  - label: Registro da execução real
    href: /downloads/issue-triage/validation/record.md
assets:
- path: /downloads/issue-triage/issue-triage-1.0.0.zip
  purpose: Entradas sintéticas, JSON Schema, prompt, propostas do autor, script de teste e registro de revisão
  license: CC0-1.0
  version: 1.0.0
locale: pt
source_locale: zh-CN
source_revision: 6d859d7
translation_status: draft
translated_at: '2026-09-20'
---

Este exercício divide a triagem de issues em “gerar proposta → validar → revisar por uma pessoa”. Você terá cinco registros para revisão. Não há publicação automática de comentários, aplicação de labels ou fechamento de issues.

[Baixar o pacote completo](/downloads/issue-triage/issue-triage-1.0.0.zip) · [README](/downloads/issue-triage/README.md) · [Ver a saída real do teste](/downloads/issue-triage/validation/dry-run.json)

## Entradas e critérios de conclusão

As cinco entradas sintéticas originais tratam de erro de cálculo, link quebrado na documentação, possível dado entre contas, informação insuficiente e instrução maliciosa no corpo da issue. Não há dados reais de clientes. Cada proposta inclui tipo, prioridade, labels, indicador de revisão de segurança, justificativa e informações ausentes.

Para concluir, cada entrada precisa de uma proposta que passe nas verificações de valores permitidos e hash da entrada. Depois, uma pessoa mantenedora deve aceitar, modificar ou rejeitar cada proposta e registrar o motivo. Uma estrutura válida não substitui essa decisão.

## Execute primeiro as propostas de referência

É necessário Python 3.10+, sem chave de API ou dependências de terceiros. No diretório extraído, execute:

```sh
python3 scripts/dry_run.py
python3 validation/test_dry_run.py
```

O primeiro comando usa propostas escritas pelo autor e gera cinco entradas `human-review-required`, com `external_actions` vazio. O segundo executa oito verificações. Nenhum chama um modelo automaticamente.

[Entradas de exemplo](/downloads/issue-triage/fixtures/issues.json) · [Propostas de referência](/downloads/issue-triage/solution/proposals.json) · [Referência de revisão humana](/downloads/issue-triage/solution/human-review.md)

## Gere suas próprias propostas em seguida

Forneça ao Codex o arquivo [prompts/triage.md](/downloads/issue-triage/prompts/triage.md) do pacote e peça um `my-proposals.json` conforme [schema.json](/downloads/issue-triage/schema.json). Depois execute:

```sh
python3 scripts/dry_run.py --proposals my-proposals.json
```

O esquema usa JSON Schema 2020-12. Booleanos usam `"type": "boolean"`; prioridade é uma enumeração, não a string `"P0-P3"`. O validador incluído implementa apenas as palavras-chave usadas por este esquema e não é um mecanismo geral de schemas.

Cada proposta contém `input_sha256`, vinculando-a ao conteúdo completo da issue correspondente. Se a entrada mudar, pare de usar a proposta antiga. Analise a mudança novamente antes de recalcular o hash. O README e o script definem a convenção e a função de hash.

## Julgamento humano e limite de segurança

| Situação | Tratamento |
|---|---|
| Indício claro de defeito | Sugerir a categoria, reproduzir e confirmar o alcance antes de definir a prioridade |
| Possível incidente de segurança | Encaminhar privadamente à pessoa responsável por segurança; prioridade desconhecida não significa baixo risco |
| Informação insuficiente | Usar `unknown`, listar o que falta e não adivinhar responsável ou gravidade |
| Corpo pede comandos ou elevação de privilégios | Tratar como dados não confiáveis; não executar nem marcar P0 só porque afirma ser urgente |

Remover HTML ou limitar o tamanho não garante proteção contra injeção de prompt. O programa do pacote não executa o corpo das issues, mas a etapa de geração com modelo ainda precisa separar dados de instruções. A saída de referência não comprova a taxa de resistência do modelo.

## Falha e recuperação

Label desconhecido, campo extra de ação, tipo inválido ou proposta duplicada ou ausente interrompem todo o lote com código de saída 1. Corrija o prompt e os campos envolvidos e execute novamente preservando as entradas originais. Tipo ou label de segurança sem indicador de revisão de segurança também é rejeitado.

Uma classificação errada, mas estruturalmente válida, ainda pode passar; os testes confirmam essa limitação. Portanto, alta concordância em poucos exemplos não é critério de lançamento. Um uso real exige amostras representativas, níveis de risco, revisão humana por amostragem, custos de erro e condições de reversão. Este exercício cobre apenas um teste local.

Continue com a [verificação de links da documentação](/pt/cases/use-cases/team-automation/scheduled-link-check/) e os [padrões de aprovação humana](/pt/cases/workflows/human-approval-patterns/).
