---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / App para desktop; CLI e IDE apenas para preparação e testes, sem interface de gerenciamento"
  checkedAt: "2026-08-26"
title: tarefas agendadas
description: Repita no ChatGPT, em horários definidos, tarefas que já foram verificadas.
locale: pt
source_locale: zh-CN
source_revision: "759c38e"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Uma Scheduled task (tarefa agendada) permite que o ChatGPT repita um trabalho em segundo plano de acordo com uma programação. Ela serve para relatórios periódicos, acompanhamento contínuo e manutenção recorrente. Não equivale a um webhook genérico, a um evento do repositório ou a um sistema de CI.

![Ilustração: uma esteira em laço sob um grande relógio e um calendário — uma tarefa verificada roda no horário e gera um relatório que um revisor humano aprova e pode pausar a qualquer momento](/illustrations/automations-schedule.webp)

## Primeiro, avalie se é adequada

| Adequada | Inadequada |
|---|---|
| Fontes de entrada estáveis e resultado que pode ser revisado | O problema precisa ser redefinido a cada execução |
| Acionamento por horário ou intervalo | O acionamento precisa ocorrer exatamente em um Git push ou na abertura de um PR |
| Verificações somente leitura, resumos e rascunhos | Mesclar a branch principal ou excluir dados em massa sem supervisão |
| Critérios claros para ausência de mudanças e interrupção | Repetir indefinidamente após uma falha |

## Onde gerenciar atualmente

- Crie e gerencie tarefas agendadas no ChatGPT Web ou no aplicativo para desktop.
- O Codex CLI e a extensão IDE não oferecem uma interface de gerenciamento de Scheduled tasks; use esses ambientes para testar primeiro o prompt, a Skill ou o script.
- O aplicativo para desktop pode executar a tarefa em um projeto local ou em um worktree isolado, mas o computador precisa estar ligado, o aplicativo em execução e o projeto ainda disponível no disco.
- Uma tarefa na Web pode usar contexto enviado, ferramentas conectadas, Skills e Plugins, mas não acessa diretamente uma pasta local.

## Neste conjunto de páginas

- [Guia completo de tarefas agendadas](/pt/skills/automations/scheduled-tasks/): escolha o modo de execução, escreva um prompt durável e defina permissões e critérios de aceitação.

## Fonte oficial

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)
