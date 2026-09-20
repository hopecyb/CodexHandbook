---
title: codex exec
description: Entrada de execução não interativa para entregar uma tarefa completa de uma só vez em scripts e CI.
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "Comparado com as páginas oficiais atuais de Non-interactive mode e Developer commands para confirmar que `codex exec` é Stable, `--cd` / `-C`, a sandbox predefinida de leitura, `workspace-write`, a saída JSONL e a saída por schema."
  checkedAt: "2026-08-26"
locale: pt
source_locale: zh-CN
source_revision: 6d7c481
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 10
---

Se o `codex` interativo permite conversar enquanto trabalha, **`codex exec`** aproxima-se de entregar uma tarefa de uma só vez e receber o resultado quando ela termina.

É a base do [modo não interativo](/pt/guide/cli/non-interactive-mode/): não há conversa de ida e volta nem esclarecimentos durante a execução; o processo termina com um resultado ou um estado de falha. Este capítulo destina-se a quem integra a [plataforma de desenvolvimento](/pt/guide/developer-platform/) e também a quem quer ligar o Codex a scripts ou CI pela primeira vez.

## Conteúdo desta página

- Diferenças entre `exec` e o `codex` interativo.
- Forma mínima do comando e diretório de trabalho.
- Exigências de aprovação e sandbox numa execução sem supervisão.

## O que faz `exec`

Pode pensar em `codex exec` como:

- emitir uma ordem de trabalho única;
- executá-la até ao fim e devolver o resultado.

Depois de descrever bem essa ordem, o comando executa-a, devolve o resultado e termina.

Por isso, é adequado quando:

- os limites da tarefa já estão definidos;
- não são necessários esclarecimentos durante a execução;
- pretende repetir a execução de forma estável mais tarde.

## Porque existe

Num CI não estará a conversar com o Codex nem à espera que ele pare dez vezes para lhe fazer perguntas.

Os usos habituais de `codex exec` incluem:

- automatização da revisão de código;
- tarefas agendadas;
- scripts em lote;
- uma etapa única de análise ou geração numa pipeline.

É adequado quando **os limites da tarefa já estão claros**. Se ainda está a explorar o problema, o modo interativo costuma ser mais indicado.

:::note
**Os nomes dos comandos e parâmetros devem seguir a CLI oficial.** Após uma atualização, execute `codex --help` e `codex exec --help` para confirmar.
:::

## Procedimento mínimo

```bash
cd /path/to/repo
codex exec --cd . "Apenas leitura: compara o diff da branch atual com main, enumera os três maiores riscos de segurança e não modifiques ficheiros"
```

Por predefinição, a execução usa uma sandbox de leitura. Se precisar de permitir escrita no workspace, indique-o explicitamente:

```bash
codex exec --cd . --sandbox workspace-write "Corrige o teste que falha; modifica apenas src/auth e tests/auth"
```

O progresso é escrito em `stderr` e a resposta final em `stdout`. Use `--json` quando um programa precisar de consumir o fluxo completo de eventos, `-o` / `--output-last-message` quando precisar apenas do ficheiro com a última resposta e `--output-schema` quando forem necessários campos estáveis.

Princípios:

- Num script shell, faça primeiro `cd` para um worktree limpo.
- Guarde o prompt num ficheiro `prompts/` versionado ou num heredoc, para evitar erros de escape da shell.
- No CI, use o **código de saída** para determinar sucesso ou falha.

## Uma realidade fácil de esquecer

No modo interativo, ainda pode acrescentar «não era isso que eu queria dizer». No modo `exec`, **uma primeira instrução errada pode desviar a execução inteira**.

Por isso, num prompt para `exec`, explicite mais do que o habitual:

- o que fazer;
- o que não fazer;
- o formato da saída;
- o que conta como conclusão;
- como deve terminar em caso de falha.

## Equívocos frequentes

### `exec` é mais indicado para tarefas fixas

Muitos interpretam-no inicialmente como um «modo avançado da CLI».

A descrição mais correta é que serve para **execuções estáveis e repetíveis**.

### Um prompt curto não é necessariamente claro

No modo interativo, uma formulação vaga pode ser esclarecida mais tarde.

Em `exec`, um prompt curto que omite âmbito, restrições e critérios de sucesso raramente é mais elegante: aumenta o risco de desvio.

## Fluxo de trabalho recomendado

```text
Preparar o repositório (checkout, install, token de leitura)
    → fixar a versão do prompt (git sha)
    → codex exec
    → recolher stdout / artefactos
    → código de saída diferente de 0 faz falhar o CI; não repetir indefinidamente
```

Este fluxo continua em [Scripts e pipelines](/pt/guide/developer-platform/non-interactive/scripts-and-pipelines/).

## Como o encarar

- Um comando de tarefa única que pode ser usado em scripts.
- Uma opção para scripts, CI ou cron.

É por isso que muitas equipas o colocam por trás de `make review`, GitHub Actions, cron ou botões de uma plataforma interna.

## Comparação com o modo interativo

| | `codex` interativo | `codex exec` |
|---|---|---|
| Esclarecimentos | Podem ocorrer em várias rondas | Tudo deve ficar claro de início |
| Aprovação | Há uma pessoa presente | A política deve ser mais restrita de antemão |
| Mais adequado para | Aprender, explorar | CI, cron |

## Como escolher em caso de dúvida

- Ainda está a explorar os requisitos e pode mudar frequentemente de ideia: prefira o modo interativo.
- A tarefa já é um modelo que quer executar repetidamente: use `codex exec`.

`codex exec` é mais adequado a tarefas já definidas que valerá a pena voltar a executar. Se ainda está a decidir enquanto trabalha, não se apresse a colocá-las num fluxo não interativo.

## Erros frequentes

- Colocar um longo histórico de conversa numa única execução de `exec`.
- Usar no CI um token com permissão de escrita e um prompt que inclua texto não saneado do corpo de um PR.
- Não fixar a versão da CLI, causando falhas inesperadas na pipeline.
- Ignorar um código de saída diferente de zero e marcar o CI como aprovado.
- Forçar tarefas complexas que exigem julgamento humano a funcionar sem supervisão.

## Limites de segurança

- Sem supervisão significa [aprovação humana](/pt/cases/workflows/human-approval-patterns/) mais fraca; use leitura como padrão.
- Consulte [Credenciais de segurança](/pt/guide/developer-platform/ci-cd/code-review-automation/#permissions-and-security) (referência na secção correspondente).

## Lista de aceitação

- [ ] O ambiente local e o CI usam o mesmo ficheiro de prompt.
- [ ] O CI trata corretamente os códigos de saída.
- [ ] Os registos não contêm chaves nem dados pessoais identificáveis.
- [ ] A sandbox e as regras são iguais ou mais restritas do que no desenvolvimento interativo.

## Capítulos relacionados

- [Modo não interativo da CLI](/pt/guide/cli/non-interactive-mode/)
- [Saída estruturada](/pt/guide/developer-platform/non-interactive/structured-output/)
- [Códigos de saída e repetições](/pt/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Fonte de referência

- Documentação da OpenAI Codex CLI
