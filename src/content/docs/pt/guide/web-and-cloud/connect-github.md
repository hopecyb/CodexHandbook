---
legacyVerification:
  status: "verified"
  products: "Cloud / GitHub"
  checkedAt: "2026-08-26"
title: Ligar o GitHub
description: Configura o acesso do Codex Cloud ao GitHub com o menor conjunto de repositórios necessário.
locale: pt
source_locale: zh-CN
source_revision: "b126a7e"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
sidebar:
  order: 10
---

Antes de criar um ambiente para um repositório, o Codex Cloud precisa de uma ligação ao GitHub ou ao GitLab (Beta). O escopo da autorização do GitHub determina que repositórios consegue ver. Um clone local e as alterações ainda não enviadas para o remoto ficam fora desse escopo.

## Passos para ligar

1. Abre o Codex Cloud e inicia sessão com uma conta ChatGPT.
2. Liga o GitHub quando a aplicação o pedir.
3. No tela de autorização do GitHub, seleciona a organização e **apenas os repositórios necessários**.
4. Volta ao Codex, seleciona o repositório e cria um ambiente Cloud.
5. Usa uma tarefa só de leitura ou com uma pequena alteração para verificar o clone, o ramo e o diff.
6. Se precisares de revisão de PR, ativa Code review para o repositório em Codex Settings.

Autoriza apenas os repositórios necessários para esta tarefa. Para repositórios de equipe, confirma também que a organização permite instalar a integração, que a tua conta tem as permissões adequadas e que a proteção dos ramos se mantém.

## Verificações antes e depois de ligar

- [ ] O repositório de destino não é um fork com o mesmo nome escolhido por engano.
- [ ] O ramo padrão e o ponto de partida da tarefa estão confirmados.
- [ ] As alterações locais necessárias já foram enviadas ou estão expressamente excluídas da tarefa.
- [ ] Escritas diretas no ramo principal sem revisão estão bloqueadas.
- [ ] O ambiente não contém credenciais de produção com permissões totais.
- [ ] A primeira tarefa altera apenas arquivos de baixo risco.

## Duas formas de usar o GitHub

### Pedir ao Cloud que implemente uma tarefa

No Codex Cloud, seleciona o ambiente do repositório e o ramo de partida e descreve o objetivo. Quando a tarefa terminar, revê o diff antes de criar um PR.

### Pedir ao Codex que reveja um PR

Depois de ativares Code review para o repositório, escreve num comentário do PR:

```text
@codex review
```

O Codex publica uma revisão padrão do GitHub. A revisão automática tem de ser ativada separadamente em Codex Settings. A equipe pode acrescentar regras específicas do repositório em `## Code Review Rules` no `AGENTS.md`.

## Como diagnosticar erros de permissão

- **O repositório não aparece na lista**: verifica o escopo dos repositórios autorizados no GitHub.
- **Um repositório da organização devolve 403**: verifica as políticas da organização, o SSO e a permissão para instalar a integração.
- **Não é possível ativar a revisão automática**: confirma que tens as permissões GitHub push ou admin necessárias à configuração.
- **O Cloud não vê um commit local**: o Cloud faz checkout apenas do repositório remoto; envia primeiro o commit para um ramo explícito.

Não autorizes todos os repositórios privados só para resolver um erro 403. Identifica primeiro o repositório pretendido e a permissão específica em falta.

## Fontes oficiais

- [Início rápido do Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Revisão de Pull Requests do GitHub](https://learn.chatgpt.com/docs/third-party/github)
