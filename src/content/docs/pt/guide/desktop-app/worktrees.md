---
title: Árvores de trabalho
description: Use Git worktree para isolar conversas paralelas e regressar em segurança ao diretório de trabalho local.
legacyVerification:
  status: verified
  products: App
  checkedAt: '2026-08-26'
locale: pt
source_locale: zh-CN
source_revision: "3569716"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 40
reviewed_at: '2026-10-26'
---

Uma árvore de trabalho (worktree) permite ter vários diretórios de checkout independentes para o mesmo repositório Git. Cada diretório tem os seus ficheiros e o estado da sua branch, mas partilha os metadados Git do repositório. É útil para deixar várias conversas de programação avançarem em paralelo sem se sobreporem nos ficheiros.

## Pré-requisitos

- O projeto tem de estar num repositório Git.
- Cada tarefa deve poder ser descrita e verificada de forma independente.
- As tarefas paralelas não devem modificar o mesmo conjunto de ficheiros centrais.

Se está a experimentar o Codex pela primeira vez, conclua primeiro as tarefas em sequência no modo Local. Use worktrees quando a espera ou os conflitos de ficheiros se tornarem problemas reais.

## Criar na App

1. Na zona de escrita de uma nova conversa, selecione **Worktree** por baixo do campo de entrada.
2. Escolha a branch de partida: a branch principal, uma branch de funcionalidade ou a branch atual com alterações não preparadas para commit.
3. Envie o prompt; a App cria o Git worktree.
4. Na conversa independente, examine, teste e reveja as alterações.
5. Quando estiver pronto para regressar ao checkout local, use **Handoff**.

Por predefinição, o worktree criado fica em detached HEAD. Isso não impede o Codex de trabalhar, mas antes de conservar ou partilhar commits deve definir a branch de destino e como será feita a integração.

## Exemplo de duas tarefas paralelas

| Conversa | tarefa no worktree | Ficheiros atribuídos | Critério de aceitação |
|---|---|---|---|
| A | Corrigir um erro de início de sessão | `src/auth/**` | Testes de autenticação aprovados |
| B | Completar a documentação de autenticação | `docs/auth/**` | verificação de ligações aprovada |

Não deixe A e B alterar ao mesmo tempo um ficheiro de bloqueio partilhado ou o mesmo ficheiro de configuração. Se for inevitável, combine previamente que uma conversa fará a alteração e a outra fornecerá apenas a análise.

## Verificações antes da entrega

```bash
git status --short
git diff --check
git diff --stat
```

Depois, execute os testes adequados à tarefa. Só faça Handoff, commit ou merge quando souber claramente de que conversa veio cada alteração, qual é a branch de destino e se a verificação passou.

## Relação com tarefas agendadas e Remote

- Uma tarefa agendada num repositório Git pode usar um worktree de segundo plano dedicado para evitar conflitos com o trabalho atual.
- Remote permite controlar, a partir de um dispositivo móvel, uma conversa num worktree do computador ligado. O repositório e os comandos continuam nesse computador ou no respetivo ambiente de desenvolvimento remoto.
- Um projeto sem Git não dispõe do isolamento de worktree; as tarefas agendadas usam diretamente o diretório do projeto.

## Fontes oficiais

- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Trabalho prolongado e conversas paralelas](https://learn.chatgpt.com/docs/long-running-work)
