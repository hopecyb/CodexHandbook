---
title: Scripts e pipelines
description: Orquestrar codex exec em shell, Makefile e GitHub Actions — repetível e auditável.
locale: pt
source_locale: zh-CN
source_revision: "07aeb4f"
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
reviewed_at: '2026-10-26'
legacyVerification:
  status: verified
  products: CLI / GitHub Actions
  basis: 'Conferido com as recomendações oficiais atuais de Non-interactive mode e Codex GitHub Action: correção de `--cd` e separação, por padrão, entre o job com a API key e a permissão de escrita no repositório.'
  checkedAt: '2026-08-26'
---

Aqui trata-se de passar o Codex de uma operação pontual a um passo automatizado que **a equipa possa repetir, rastrear se falhar e que outra pessoa possa retomar**.

Em resumo: o script fixa o fluxo; o pipeline repete-o segundo regras.

Este capítulo explica como embutir [codex exec](/pt/guide/developer-platform/non-interactive/codex-exec/) em shell, Makefile ou um pipeline de CI.

## Conteúdo desta página

- Divisão entre script local e job de CI
- Gestão de prompt e secrets
- Combinação com [Automatização de revisão de código](/pt/guide/developer-platform/ci-cd/code-review-automation/)

## O que se resolve aqui

«Scripts e pipelines» converte «hoje fiz à mão uma vez» em «a equipa poderá repetir da mesma forma com estabilidade».

Por isso importam três coisas:

- Repetível
- Auditável
- Transferível

## Porque muitas equipas não «colam o prompt na página de CI»

Porque é difícil de manter:

- Quem chega depois não sabe como foi desenhado
- Uma mudança de lógica não passa por code review normal
- Se a tarefa falhar, custa saber se mudou o prompt, o ambiente ou o script

Meter prompt, scripts e regras em Git é, na prática, versionar o fluxo automatizado.

## Mal-entendidos frequentes

### A automatização prioriza a estabilidade, não «quanto antes melhor»

Na primeira vez muita gente quer encadear todo o fluxo de uma vez.

Se o prompt ainda muda com frequência, o critério de sucesso não está claro e os limites de permissão não estão fechados, quanto antes automatizares, mais difícil será depurar depois.

### O script serve para fixar a prática

Um bom script converte passos que viviam na memória de alguém em ficheiros que qualquer pessoa entende e pode rever.

## Fragmento mínimo de Shell utilizável

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cd "$ROOT" --ephemeral "$(cat "$PROMPT_FILE")"
```

Inclui `prompts/ci/security-review.md` em Git; as alterações passam por review.

## Hábitos que mais convém formar primeiro

Na primeira vez não procures «grande e completo»; fixa primeiro estas três:

1. Onde vive o ficheiro de prompt
2. Como se chama o script de entrada
3. Como se julga sucesso e falha

Assim, acrescentar logs, schema ou notificações depois será muito mais fluido.

## GitHub Actions: usar a Action oficial

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0
      - name: Run review
        uses: openai/codex-action@v1
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          prompt-file: prompts/ci/pr-review.md
```

:::caution
No GitHub Actions, dá preferência à Action oficial `openai/codex-action`. Não definas a API key como variável de ambiente de todo o job que executa código do repositório. Se uma etapa posterior precisar escrever no PR, separa a permissão de escrita e a chave em jobs distintos e usa um artifact de patch para a passagem.
:::

## Fluxo de trabalho recomendado

| Camada | Conteúdo |
|---|---|
| Repositório | `prompts/`, `tools/run-codex.sh` |
| CI | Checkout só de leitura, CLI fixado, subir log artifact |
| Callback | Opcional: [Webhook](/pt/guide/developer-platform/webhooks/overview/) para atualizar sistemas internos |

## Como julgar

Se algo cumprir estas duas condições, encaixa bem em script ou pipeline:

- Vais fazê-lo de forma repetida
- Queres que cada vez se faça da forma mais consistente possível

Por exemplo: revisão de PR, resumo de alterações, scan de segurança, verificação de documentação.

Não apresses «tudo automático» antes de o fluxo se estabilizar; primeiro fixa a prática num script e depois liga o script ao pipeline: costuma ser mais estável.

## Erros frequentes

- Concatenar dinamicamente `${{ github.event.pull_request.body }}` sem escape (injeção)
- Sem controlo de concorrência no mesmo PR; repetições que gastam quota
- Passa em local, em CI faltam dependências (sem `npm ci`)
- O critério de sucesso é só «acabou de correr», sem parsear uma conclusão estruturada
- Dar de entrada demasiado privilégio de escrita à automatização

## Limites de segurança

- Privilégio mínimo do token de CI; proibir `git push` salvo um job de aprovação independente
- Em workflows de fork PR, cuidado com os secrets (`pull_request_target` requer revisão de segurança)

## Lista de aceitação

- [ ] prompt e scripts têm versão em Git
- [ ] A falha de CI bloqueia o merge (se a política o exigir)
- [ ] A política de retenção de artifacts cumpre a conformidade
- [ ] O comportamento coincide com o `make review` local

## Fontes de referência
- Documentação de integração OpenAI Codex + GitHub
