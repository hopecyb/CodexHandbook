---
caseCategory: team
directoryOrder: 100
title: 'Caso: verificação de links da documentação e recuperação de falhas'
description: Baixe um exercício de links HTML estáticos, corrija uma página ausente e uma âncora quebrada por etapas e prepare execução periódica.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- html
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Sete testes do script passaram. Em uma cópia temporária, a correção de um problema por vez reduziu as falhas de duas para uma e depois zero. Links externos não foram verificados on-line; CI e agendador reais não foram executados.
  environment: Python 3.12.11 / Darwin arm64; biblioteca padrão e HTML estático sintético original, sem token.
  evidence:
  - label: Registro real de execução e recuperação
    href: /downloads/docs-link-audit/validation/record.md
assets:
- path: /downloads/docs-link-audit/docs-link-audit-1.0.0.zip
  purpose: Script de verificação de links, entradas com falhas, correção de referência, testes e registro da recuperação por etapas
  license: CC0-1.0
  version: 1.0.0
locale: pt
source_locale: zh-CN
source_revision: 0d21aa9
translation_status: draft
translated_at: '2026-09-20'
---

Antes de agendar verificações, confirme que o script realmente encontra problemas e informa o que foi verificado. O exercício começa com dois links quebrados de propósito. Mude um destino por vez e observe o resultado.

[Baixar o pacote completo](/downloads/docs-link-audit/docs-link-audit-1.0.0.zip) · [README](/downloads/docs-link-audit/README.md) · [Registro real de recuperação](/downloads/docs-link-audit/validation/recovery.json)

## Execute primeiro o exemplo com falhas

É necessário Python 3.10+, sem dependências de terceiros, chave de API ou rede. No diretório extraído, execute:

```sh
python3 scripts/check_links.py fixtures/site
```

Espere código de saída 1. O relatório informa arquivo, linha, URL e motivo: `/missing/` na linha 4 de `index.html` não tem página correspondente, e `#old-anchor` na linha 5 não existe na página de destino. Outro link externo aparece em `unchecked`; ele não é considerado aprovado silenciosamente.

## Corrija um problema por vez

Copie `fixtures/site` para seu diretório `work/`, preservando a entrada original. Primeiro troque `/missing/` por `/guide/` e execute:

```sh
python3 scripts/check_links.py work
```

O código ainda é 1, mas só resta o problema da âncora. Troque `#old-anchor` por `#install` e execute novamente: o código passa a 0. Compare com `solution/site` e a [referência de revisão humana](/downloads/docs-link-audit/solution/review.md) para confirmar que nada mais mudou.

Na autoverificação real do autor, as falhas foram 2, depois 1 e então 0, sem alterar o hash do exemplo original. [JSON antes da correção](/downloads/docs-link-audit/validation/stage-0.json) · [JSON depois](/downloads/docs-link-audit/validation/stage-2.json)

## Entenda o resultado e os limites

| Resultado | Significado | Próximo passo |
|---|---|---|
| Saída 0 | Referências locais passaram | Leia `unchecked`; isso não comprova acesso aos links externos |
| Saída 1 | Página ou âncora ausente, ou caminho fora dos limites | Confirme a intenção de cada link antes de corrigir |
| Saída 2 | A verificação não terminou | Confira diretório, saída da compilação, erros de leitura ou tag `base` não suportada |

O script lê o HTML gerado e aceita `index.html` de diretório, caminhos relativos e desde a raiz e âncoras HTML. Não analisa rotas JavaScript dinâmicas, URLs em CSS, `srcset` ou reescritas específicas de frameworks. Ele para diante de `base href` para evitar interpretação incorreta de caminhos relativos. URLs externas e outros protocolos são informados explicitamente como não verificados.

Execute os sete testes incluídos:

```sh
python3 validation/test_links.py
```

Em um projeto real, compile primeiro conforme suas instruções e passe ao script o diretório de saída. Este site já tem um verificador próprio de referências internas; o pacote didático não substitui todas as validações apropriadas ao framework.

## Depois integre a uma rotina periódica

Passe ao agendador existente “compilar projeto → verificar links → salvar código de saída e JSON”, com diretório de trabalho e ambiente de dependências fixos. Se a compilação falhar, pare em vez de ler uma saída antiga. Evite escritas simultâneas no mesmo registro.

Rode manualmente uma vez, acione manualmente no ambiente de agendamento final e só então defina a recorrência. Compare com o resultado anterior: fique em silêncio se nada mudou e prepare um resumo para falhas novas, erro de verificação ou recuperação. O envio real de notificações continua sujeito à autorização.

O pacote não criou tarefa agendada, enviou notificações, alterou um site real nem executou CI. As etapas de agendamento são orientação de integração, não prova de execução do agendador. Veja o [guia de tarefas agendadas](/pt/skills/automations/scheduled-tasks/).

## Como tratar links externos

Defina separadamente o escopo e a frequência autorizados. Um 404, restrição de autenticação, timeout e falha temporária do serviço têm significados distintos. Uma falha de acesso não basta para remover o link. O pacote não verificou links externos reais nem apresentou respostas simuladas como falhas reais de rede.

Ao combinar com o [exercício de triagem de issues](/pt/cases/use-cases/team-automation/issue-triage-suggestions/), gere primeiro um relatório local e notas de revisão humana antes de decidir criar um ticket.
