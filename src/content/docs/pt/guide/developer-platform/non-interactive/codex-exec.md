---
title: codex exec
description: Entrada de execução não interativa — entregar uma Tarefa completa de uma vez em scripts e CI.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Se o `codex` interativo é conversar e agir ao mesmo tempo, **`codex exec`** parece-se mais a entregar a Tarefa de uma vez e devolver o resultado ao terminar.

É o núcleo do [modo não interativo](/guide/cli/non-interactive-mode/): sem ida e volta de chat, sem esclarecimentos a meio do caminho; ao acabar o processo tens resultado ou estado de falha. Este capítulo destina-se a integradores da [plataforma para desenvolvedores](/guide/developer-platform/), e também a quem quiser meter o Codex num script ou CI pela primeira vez.

## Conteúdo desta página

- Diferenças entre `exec` e o `codex` interativo
- Forma mínima do comando e diretório de trabalho
- Requisitos de Aprovação e Sandbox sem supervisão humana

## O que faz `exec`

Podes entender `codex exec` como:

- Emitir uma ordem de trabalho de uma só vez
- Devolver o resultado ao terminar

Quando essa ordem está clara, corre segundo essa descrição; ao acabar, dá-te o resultado e termina.

Por isso encaixa em cenários onde:

- O limite da Tarefa já está fixo
- Não é preciso esclarecer a meio do caminho
- Queres poder repetí-lo de forma estável

## Porque existe

Não vais conversar com o Codex em CI, nem esperar que se detenha dez vezes a perguntar-te.

Assim, `codex exec` costuma servir para:

- Automatização de revisão de código
- Tarefas agendadas
- Scripts em lote
- Um passo único de análise ou geração num pipeline

Encaixa quando **o limite da Tarefa já está claro**; se ainda exploras com vaguidade, o modo interativo costuma ser melhor.

:::note
**O nome do comando e os parâmetros são definidos pelo CLI oficial.** Após atualizar, revê com `codex --help` e `codex exec --help`.
:::

## Prática mínima utilizável

```bash
cd /path/to/repo
codex exec --cwd . "Só leitura: compara o Diff do branch atual com main, enumera os 3 riscos de segurança mais altos, não modifiques ficheiros"
```

Princípios:

- No script Shell, faz primeiro `cd` a um worktree limpo
- Põe o Prompt em `prompts/` do repo ou num heredoc, para evitar erros de escape do shell
- Em CI, julga o sucesso ou a falha pelo **código de saída**

## A realidade mais fácil de passar por alto

No modo interativo ainda podes acrescentar «não era isso».  
No modo `exec`, **se a primeira formulação correr mal, toda a ronda pode desviar-se**.

Assim, ao escrever o Prompt de `exec` sê mais explícito do que o habitual sobre:

- O que fazer
- O que não fazer
- Formato de saída
- O que conta como terminado
- Como queres que saia se falhar

## Mal-entendidos frequentes

### `exec` encaixa melhor em Tarefas fixas

Na primeira vez muita gente vê-o como «o modo avançado do CLI».

Mais preciso: serve para **executar de forma estável e repetível**.

### Curto não é o mesmo que claro

No modo interativo, se fores vago, ainda podes completar depois.

Em `exec`, um Prompt curto que omite limites, restrições e critérios de sucesso não é mais elegante: costuma ser mais fácil de descontrolar.

## Fluxo de trabalho recomendado

```text
Preparar o repo (checkout, install, token só de leitura)
    → Fixar versão do Prompt (git sha)
    → codex exec
    → Recolher stdout / artifact
    → Se não for 0, falhar CI; não fazer retry sem limite
```

Encaixa com [Scripts e pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/).

## Como podes pensá-lo

- Um comando de Tarefa única que se pode scriptar
- Adequado para scripts, CI ou cron

Por isso muitas equipas o ligam atrás de `make review`, GitHub Actions, cron ou um botão de plataforma interna.

## Comparação com o modo interativo

| | `codex` interativo | `codex exec` |
|---|---|---|
| Esclarecer | Várias rondas | Há que dizer tudo de uma vez |
| Aprovação | Pessoa presente | Há que endurecer a política de antemão |
| Adequado | Aprender, explorar | CI, cron |

## Como escolher se não tiveres claro

- Ainda exploras o requisito e podes mudar de opinião com frequência: prioriza o modo interativo
- A Tarefa já é um template fixo e só queres repeti-la com estabilidade: então `codex exec`

`codex exec` encaixa em Tarefas «já claras e que vais querer voltar a executar»; se ainda pensas e mudas de ideia, ainda não o metas num fluxo não interativo.

## Erros frequentes

- Meter um histórico longo de chat num só exec
- CI com token de escrita e Prompt que inclui o body do PR sem sanitizar
- Não fixar a versão do CLI e o pipeline falhar de golpe
- Ignorar códigos de saída diferentes de zero e marcar green na mesma
- Forçar em fluxos desatendidos Tarefas complexas que precisam de juízo humano

## Limites de segurança

- Sem supervisão = [Aprovação humana](/cases/workflows/human-approval-patterns/) enfraquecida → só leitura por omissão
- Ver [Permissões e segurança](/guide/developer-platform/ci-cd/code-review-automation/#permissoes-e-seguranca) (referência cruzada do mesmo capítulo)

## Lista de aceitação

- [ ] Local e CI usam o mesmo ficheiro de Prompt
- [ ] O código de saída é bem tratado pela CI
- [ ] Os logs não contêm secrets nem PII
- [ ] Sandbox e regras iguais ou mais estritas do que no desenvolvimento interativo

## Capítulos relacionados

- [Modo não interativo do CLI](/guide/cli/non-interactive-mode/)
- [Saída estruturada](/guide/developer-platform/non-interactive/structured-output/)
- [Códigos de saída e retries](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Fontes de referência
- Documentação do CLI OpenAI Codex
---

**Estado:** outdated  
**Produtos aplicáveis:** CLI  
**Nota de revisão:** Esta página oferece ideias úteis sobre `codex exec`, `--cwd` e integração não interativa, mas falta documentação oficial vigente suficientemente sólida para confirmar um a um a entrada do comando, os parâmetros e o comportamento; até completar essa base, não convém marcá-la como `verified`.  
**Última verificação:** 2026-07-26
