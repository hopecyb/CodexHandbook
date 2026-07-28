---
title: Scripts e pipelines
description: Orquestrar codex exec em shell, Makefile e GitHub Actions — repetível e auditável.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Aqui trata-se de passar o Codex de uma operação pontual a um passo automatizado que **a equipa possa repetir, rastrear se falhar e que outra pessoa possa retomar**.

Em resumo: o script fixa o fluxo; o pipeline repete-o segundo regras.

Este capítulo explica como embutir [codex exec](/guide/developer-platform/non-interactive/codex-exec/) em shell, Makefile ou um pipeline de CI.

## Conteúdo desta página

- Divisão entre script local e job de CI
- Gestão de Prompt e secrets
- Combinação com [Automatização de revisão de código](/guide/developer-platform/ci-cd/code-review-automation/)

## O que se resolve aqui

«Scripts e pipelines» converte «hoje fiz à mão uma vez» em «a equipa poderá repetir da mesma forma com estabilidade».

Por isso importam três coisas:

- Repetível
- Auditável
- Transferível

## Porque muitas equipas não «colam o Prompt na página de CI»

Porque é difícil de manter:

- Quem chega depois não sabe como foi desenhado
- Uma mudança de lógica não passa por code review normal
- Se a Tarefa falhar, custa saber se mudou o Prompt, o ambiente ou o script

Meter Prompt, scripts e regras em Git é, na prática, versionar o fluxo automatizado.

## Mal-entendidos frequentes

### A automatização prioriza a estabilidade, não «quanto antes melhor»

Na primeira vez muita gente quer encadear todo o fluxo de uma vez.

Se o Prompt ainda muda com frequência, o critério de sucesso não está claro e os limites de Permissão não estão fechados, quanto antes automatizares, mais difícil será depurar depois.

### O script serve para fixar a prática

Um bom script converte passos que viviam na memória de alguém em ficheiros que qualquer pessoa entende e pode rever.

## Fragmento mínimo de Shell utilizável

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cwd "$ROOT" "$(cat "$PROMPT_FILE")"
```

Inclui `prompts/ci/security-review.md` em Git; as alterações passam por review.

## Hábitos que mais convém formar primeiro

Na primeira vez não procures «grande e completo»; fixa primeiro estas três:

1. Onde vive o ficheiro de Prompt
2. Como se chama o script de entrada
3. Como se julga sucesso e falha

Assim, acrescentar logs, schema ou notificações depois será muito mais fluido.

## Esquema de GitHub Actions

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install Codex CLI
        run: |
          # Fixa o número de versão conforme a documentação oficial de instalação
          npm install -g @openai/codex@<pinned-version>
      - name: Run review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          codex exec --cwd . "$(cat prompts/ci/pr-review.md)"
```

:::caution
Ajusta o método de instalação e o scope de Permissões do exemplo aos requisitos de segurança da tua organização; **não** faças echo de secrets no workflow.
:::

## Fluxo de trabalho recomendado

| Camada | Conteúdo |
|---|---|
| Repositório | `prompts/`, `tools/run-codex.sh` |
| CI | Checkout só de leitura, CLI fixado, subir log artifact |
| Callback | Opcional: [Webhook](/guide/developer-platform/webhooks/overview/) para atualizar sistemas internos |

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

- Privilégio mínimo do token de CI; proibir `git push` salvo um job de Aprovação independente
- Em workflows de fork PR, cuidado com os secrets (`pull_request_target` requer revisão de segurança)

## Lista de aceitação

- [ ] Prompt e scripts têm versão em Git
- [ ] A falha de CI bloqueia o merge (se a política o exigir)
- [ ] A política de retenção de artifacts cumpre a conformidade
- [ ] O comportamento coincide com o `make review` local

## Fontes de referência

- Documentação de integração OpenAI Codex + GitHub
- Capítulos de automatização de codex.bozhouai.com

---

**Estado:** outdated  
**Produtos aplicáveis:** CLI  
**Nota de revisão:** O princípio de «meter Prompt, scripts e pipelines em Git para review» continua válido, mas os exemplos dependem de `codex exec`, do método de instalação do CLI e do cabling concreto de GitHub Actions — detalhes de implementação muito voláteis; restaurar-se-á `verified` quando houver documentação oficial de pipelines atualizada.  
**Última verificação:** 2026-07-26
