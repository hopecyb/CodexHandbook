---
title: Rever alterações no IDE
description: Conferir o diff junto do código e usar um reviewer em modo só de leitura para examinar a árvore de trabalho.
locale: pt
source_locale: zh-CN
source_revision: a6badd5
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 70
---

O IDE é adequado para ler rapidamente o resumo ao lado do código e examinar um diff específico. Contudo, uma alteração aparecer no editor não significa que tenha passado na aceitação. Verifica primeiro o diff, executa os testes e só depois decide o que manter.

## Fazer uma revisão local completa

1. Lê o resumo do resultado, mas não o uses em substituição do diff.
2. Expande as linhas alteradas e verifica cada ficheiro afetado.
3. Mantém as edições necessárias e pede alterações adicionais para tudo o que estiver fora do âmbito.
4. Executa `/review` na área de entrada.
5. Escolhe comparar com um ramo de base ou rever as alterações ainda não confirmadas.
6. Executa os testes do projeto e as verificações estáticas no terminal do IDE.
7. Por fim, confirma novamente o estado com as ferramentas Git.

`/review` só aparece quando o projeto aberto é um repositório Git. Apresenta os problemas por ordem de prioridade e não modifica a árvore de trabalho. No IDE podes escolher:

- **Review against a base branch**: compara o ramo atual com o ramo de base escolhido.
- **Review uncommitted changes**: verifica as alterações atuais da árvore de trabalho.

Por predefinição, o resultado aparece na conversa atual. Define `chatgpt.reviewDelivery` como `detached` para abrir uma conversa de revisão separada.

## Exemplo: dar critérios claros ao reviewer

```text
Revê as alterações atuais ainda não confirmadas. Procura primeiro defeitos que possam causar
comportamento incorreto, corrupção de dados ou problemas de segurança. Ignora preferências
puramente de estilo. Cada problema encontrado deve indicar o local no ficheiro, a condição
que o desencadeia e o impacto verificável. Se não encontrares problemas, indica as lacunas
que ainda restam nos testes.
```

## Lista de aceitação

- [ ] Os ficheiros alterados respeitam o âmbito permitido pela tarefa.
- [ ] Não há eliminações inesperadas, formatação integral de ficheiros nem ficheiros sensíveis.
- [ ] Os caminhos de falha e os casos limite estão cobertos.
- [ ] Testes, lint e verificação de tipos passam conforme as regras do projeto.
- [ ] Os problemas de alta prioridade encontrados pelo reviewer foram corrigidos ou o risco foi aceite explicitamente.
- [ ] Os resultados de `git diff --check` e `git status --short` estão conforme o esperado.

Para comentar linha a linha, preparar alterações ou reverter por hunk, passa para [Diffs, comentários e revisão](/pt/guide/desktop-app/diffs-comments-and-review/) na aplicação de desktop. O método geral está em [Rever diffs](/pt/guide/quality/review-diffs/).

## Fontes oficiais

- [Revisão de código](https://learn.chatgpt.com/docs/code-review)
- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
