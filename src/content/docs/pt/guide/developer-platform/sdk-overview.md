---
title: 'Visão geral do SDK: tarefas locais e integração de clientes'
description: Diferencie o SDK do Codex, a CLI não interativa, o App Server e um serviço remoto de tarefas criado por você.
contentType: reference
audiences:
- developer
level: intermediate
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Local de execução, interfaces de threads e limites de integração foram conferidos na documentação oficial do SDK e do App Server. O exemplo mínimo passou apenas por verificação de sintaxe; não houve chamada autenticada ao modelo.
  evidence:
  - label: Documentação oficial do Codex SDK
    href: https://learn.chatgpt.com/docs/codex-sdk
  - label: Documentação oficial do Codex App Server
    href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: pt
source_locale: zh-CN
source_revision: "e888ae6"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: '2026-10-26'
---

O Codex SDK permite que um programa controle um Codex Agent local. “Local” é a máquina que executa SDK e Agent: seu computador ou um runner de CI administrado por você. Isso não é automaticamente um serviço HTTP hospedado para criar tarefas Cloud, consultar seu estado e baixar artefatos. Veja a [documentação oficial do SDK](https://learn.chatgpt.com/docs/codex-sdk).

## Escolha a entrada conforme o objetivo

| Objetivo | Comece por | O que ainda é sua responsabilidade |
|---|---|---|
| Executar uma tarefa em script | [`codex exec`](/pt/guide/developer-platform/non-interactive/codex-exec/) | Diretório de trabalho, entrada, código de saída e armazenamento dos resultados |
| Executar e continuar tarefas por programa | Codex SDK | Ciclo de vida, ambiente, falhas e validação |
| Criar cliente com sessões, aprovações e eventos em streaming | App Server | Interação, conexão, identidade e implantação do cliente |
| Oferecer plataforma remota para vários usuários | Sua própria arquitetura | Fila, isolamento de tenants, credenciais, armazenamento, cancelamento e callbacks |

A última linha é uma escolha de arquitetura, não uma plataforma hospedada incluída no SDK. A orientação oficial usa o SDK para automação e CI e o App Server para integração aprofundada de clientes. O App Server troca solicitações e eventos por JSON-RPC bidirecional. Veja a [documentação do App Server](https://learn.chatgpt.com/docs/app-server).

## Chamada mínima ao SDK TypeScript

O pacote oficial TypeScript é `@openai/codex-sdk` e requer Node.js 18 ou superior. O exemplo usa sintaxe de módulos JavaScript para mostrar a interface básica do mesmo pacote; não é um serviço de produção completo.

Instale a dependência em diretório de exercício próprio e preserve a versão resolvida e o lockfile:

```sh
npm init -y
npm install --save-exact @openai/codex-sdk
npm ls @openai/codex-sdk
```

Prepare um `README.md` sem informações sensíveis e salve isto como `example.mjs`:

```js
import { Codex } from '@openai/codex-sdk';

const agent = new Codex();
const session = agent.startThread();
const answer = await session.run(
  'Leia apenas o README.md do diretório atual e resuma sua finalidade em três tópicos em chinês; não altere arquivos nem execute ações externas.'
);
console.log(answer.finalResponse);
```

Depois execute `node example.mjs`. Antes, conclua a autenticação adequada ao ambiente e confira o sandbox e as aprovações efetivos. “Somente leitura” no prompt é uma restrição da tarefa, não substitui as restrições de execução. A chamada pode consumir uso da conta; esta página não fez instalação nem chamada por você.

Métodos e campos de retorno foram confrontados com o [exemplo oficial](https://learn.chatgpt.com/docs/codex-sdk). O site só verificou a sintaxe JavaScript: não fixou e testou uma versão publicada específica do SDK nem forneceu uma falsa saída de sucesso. Ao reproduzir, registre versão do pacote, CLI/runtime, sistema, tipo de autenticação sem segredos e resultado.

## Continuar e retomar tarefas

Você pode chamar `run()` novamente no mesmo objeto thread; passe um ID existente a `resumeThread()` para retomar. A possibilidade de retomar depende do ambiente que armazena o estado. Um ID não é uma URL Cloud consultável em qualquer máquina. Há também interface oficial em Python; confira nomes e dependências na seção correspondente e não misture código das linguagens. Veja [threads e interfaces por linguagem](https://learn.chatgpt.com/docs/codex-sdk).

Ao retomar, confira primeiro se os arquivos atuais correspondem ao histórico descrito em [Passagem e retomada](/pt/guide/agent-work/handoff-and-resume/).

## O que verificar após uma chamada bem-sucedida

1. **Local de execução:** registre diretório de trabalho e arquivos realmente lidos ou alterados, não apenas o prompt.
2. **Resultado:** confira resposta, diff e testes. Receber `finalResponse` não significa aprovação do resultado de negócio.
3. **Tipo de falha:** diferencie dependência/processo local, autenticação, serviço do modelo e validação da tarefa; não reduza todos os erros a 400/429.
4. **Efeito de repetir:** procure arquivos ou efeitos externos já produzidos antes de decidir pelo retry; não reenvie cegamente a mesma solicitação.
5. **permissões:** ambiente e ferramentas disponíveis são responsabilidade sua. O nome do SDK não concede automaticamente Cloud, gestão da organização ou isolamento multi-tenant.

São recomendações de integração deste site, não uma lista de campos retornados pelo SDK. Consulte os tipos da versão instalada e a documentação oficial para os campos reais.

## Relação com callbacks, filas e execução remota

Seu runner pode executar o SDK e seu serviço enviar um aviso de conclusão. Nesse caso, estado da fila, callback HTTP, formato de assinatura e política de retry pertencem ao protocolo do seu sistema. O fluxo de eventos do App Server também não é diretamente um endereço Webhook.

Continue em [Limites de Webhooks e eventos de tarefas](/pt/guide/developer-platform/webhooks/overview/) e [Scripts e pipelines](/pt/guide/developer-platform/non-interactive/scripts-and-pipelines/). Esta página não promete que uma chamada do SDK crie automaticamente tarefas Codex Cloud, URLs de artefatos ou delegação OAuth.
