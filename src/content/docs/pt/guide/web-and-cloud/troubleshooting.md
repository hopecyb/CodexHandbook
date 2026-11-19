---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: Solução de problemas do Cloud
description: Localize falhas do Cloud nas camadas de repositório, setup, rede, Agent e entrega.
locale: pt
source_locale: zh-CN
source_revision: "019fac1"
translation_status: stale
translated_at: 2026-09-20
reviewed_at: 2026-10-26
sidebar:
  order: 80
---

Repetir uma tarefa no Cloud consome tempo novamente, mas não resolve automaticamente permissões, dependências ou configurações de rede ausentes. Primeiro, descubra em qual etapa ocorreu a falha.

## Diagnóstico em cinco camadas

| Etapa | Sintomas comuns | Primeira verificação |
|---|---|---|
| Conexão com o repositório | Repositório ausente da lista, erro 403, branch inexistente | Escopo da autorização GitHub, política da organização, branch inicial |
| Contêiner/setup | `command not found`, falha na instalação de dependências | Versão do ambiente de execução, setup script, Secret |
| Rede do Agent | O setup consegue baixar arquivos, mas `curl` falha no Agent | Agent access desativado por padrão, allowlist, métodos HTTP |
| Execução do Agent | Alterações fora do escopo, comando de teste inexistente | Escopo do prompt, `AGENTS.md`, registros de trabalho |
| Entrega | Diff incompleto, PR não pode ser aberto | Estado da branch, permissão de escrita, regras de proteção |

## Guarde as evidências primeiro

Registre repositório, commit inicial, nome do ambiente, etapa da falha, primeiro erro útil e comando completo. Não guarde apenas a mensagem final «exit 1».

```text
Ambiente: api-node22
Ponto de partida: main@abc123
Etapa: setup
Comando: pnpm install --frozen-lockfile
Primeiro erro: ERR_PNPM_FETCH_401 ...
Diferença local: o ambiente local usa ~/.npmrc; o Cloud não tem NPM_TOKEN configurado
```

Esse registro aponta diretamente para a correção, sem exigir que a próxima tentativa comece com novas suposições.

## Problemas frequentes

### O Secret está disponível no setup, mas vazio no Agent

Esse é o comportamento previsto: o Secret é removido antes da etapa do Agent. Faça a instalação que precisa de credenciais no setup. Não o transforme em uma variável de ambiente comum para contornar essa proteção.

### O setup tem acesso à rede, mas o Agent não

Esse também é o comportamento padrão. Se a tarefa realmente exigir que o Agent acesse a internet, ative o acesso no ambiente, restrinja domínios e métodos HTTP e depois revise os logs.

### O cache mantém dependências antigas

Alterações em setup, maintenance, variáveis ou secrets invalidam o cache automaticamente. Se uma mudança no próprio repositório o tornar incompatível, use Reset cache na página do ambiente. Em ambientes compartilhados, avalie antes o impacto sobre outras pessoas.

### Funciona localmente, mas falha no Cloud

Compare versões de Node/Python, lockfile, dependências do sistema, configurações locais ocultas, serviços por VPN ou localhost e caminhos sensíveis a maiúsculas e minúsculas. Registre as diferenças explicitamente no setup e nas regras do repositório.

### A revisão do PR não foi acionada

Confirme que o Cloud está configurado para o repositório, que Code review está ativado, que o comentário contém `@codex review` e que a integração GitHub tem as permissões necessárias. Reviews automáticos exigem ativação separada.

## Quando voltar ao ambiente local

Se o problema depende de um serviço da sua máquina ou se duas tentativas consecutivas foram gastas corrigindo o ambiente, e não o código, faça primeiro uma reprodução mínima local. Depois registre o comando, as versões e os testes que funcionaram em `AGENTS.md` ou no setup antes de devolver a tarefa ao Cloud.

## Critérios de aceitação após resolver

- [ ] A execução pode ser repetida no mesmo ambiente a partir de um ponto inicial limpo.
- [ ] O problema não foi escondido com permissões mais amplas no repositório ou acesso irrestrito à rede.
- [ ] Os logs não expõem Secrets.
- [ ] O diff e os testes resultantes continuam sujeitos à revisão humana.

## Fontes oficiais

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
