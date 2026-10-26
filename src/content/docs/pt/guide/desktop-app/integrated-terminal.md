---
title: Terminal integrado
description: Executa comandos no projeto ou worktree atual e verifica os resultados das tarefas com saídas reais.
locale: pt
source_locale: zh-CN
source_revision: "727e93e"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 60
legacyVerification:
  status: verified
  products: App
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-26'
---

Cada conversa na aplicação de desktop do ChatGPT tem um terminal associado ao projeto ou worktree atual. Não serve apenas para ver registos: é também a janela de evidências onde verificas as conclusões do Codex.

Podes abri-lo pelo ícone de terminal no canto superior direito da aplicação ou premindo `Ctrl` e a tecla de acento grave ao mesmo tempo. O ChatGPT pode ler a saída atual do terminal, pelo que também lhe podes pedir que analise uma compilação falhada ou um servidor de desenvolvimento em execução.

## Fluxo mínimo de verificação

Num projeto JavaScript, podes executar pela ordem indicada:

```bash
git status --short
pnpm test
pnpm run lint
```

Os comandos variam entre projetos. Consulta primeiro `README.md`, `package.json` ou as regras do projeto. Inclui no prompt os comandos que confirmaste:

```text
Depois da alteração, executa pnpm test e pnpm run lint.
Indica o estado de saída de cada comando. Se algum falhar, não afirmes que a tarefa está concluída.
```

Na aceitação, regista pelo menos o que foi executado, se terminou com êxito, o primeiro erro relevante de cada falha e as verificações que não chegaram a ser executadas.

## Como lidar com processos longos

Um servidor de desenvolvimento continua a executar; isso não significa que o comando tenha bloqueado. Depois de o iniciar, verifica:

- se a saída mostra um endereço local;
- se a página abre no navegador;
- se surgem mais tarde erros de execução no terminal.

Envia um sinal de interrupção quando precisares de o parar. Não arranques vários servidores só porque a saída deixou de apresentar novidades por algum tempo.

## Actions reutilizáveis

Se executas muitas vezes o mesmo comando, podes definir uma Action no ambiente local. Ela aparece como atalho na aplicação de desktop e é executada no terminal integrado. É adequada para verificações de baixo risco como `test`, `lint` e `build`, mas não para ocultar ações de publicação em produção ou de limpeza da base de dados.

## Limites de segurança

- Não coloques segredos de produção na conversa nem no histórico do terminal.
- Para um comando que não compreendes, pede primeiro uma explicação do objetivo, do alcance do impacto e de como o reverter.
- Não voltes a executar às cegas comandos de eliminação, migração ou publicação em produção.
- O facto de um comando poder ser executado no terminal não significa que tenha autorização para a operação de negócio.

A documentação oficial inclui comandos comuns como `git status`, `git pull --rebase`, testes e lint. Para os comandos deste projeto, a fonte final deve ser a própria documentação do projeto.

## Fontes oficiais

- [Terminal integrado](https://learn.chatgpt.com/docs/integrated-terminal)
- [Ambientes locais](https://learn.chatgpt.com/docs/environments/local)
