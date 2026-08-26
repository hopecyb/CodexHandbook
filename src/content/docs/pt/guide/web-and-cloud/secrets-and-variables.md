---
title: Secrets e variaveis de ambiente
description: Escolher corretamente entre Secrets da configuracao Cloud e variaveis de ambiente normais disponiveis durante toda a conversa.
sidebar:
  order: 30
locale: pt
source_locale: zh-CN
source_revision: 08f8d64
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

As variaveis de ambiente e os Secrets do Cloud tem ciclos de vida diferentes. Essa diferenca determina para que podem ser usados com seguranca; nao se resume a interface ocultar ou nao o valor.

| Tipo | Fase em que esta visivel | Conteudo adequado |
|---|---|---|
| Variavel de ambiente | Configuracao e toda a fase do Agent | Configuracao nao sensivel, como o modo de execucao ou o URL base de uma API publica |
| Secret | Apenas o script de configuracao | Token de pacotes privados ou credenciais necessarias para instalar dependencias |

Os Secrets sao armazenados com encriptacao adicional, desencriptados durante a execucao da tarefa e removidos antes do inicio da fase do Agent. Nao sao um canal geral de credenciais para o Agent chamar APIs de producao durante a execucao.

## Exemplo correto: instalar um pacote privado

Crie um Secret `NPM_TOKEN` na configuracao do ambiente. O script de configuracao usa-o para gerar uma configuracao de autenticacao temporaria e instalar as dependencias:

```bash
set -euo pipefail
printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > ~/.npmrc
pnpm install --frozen-lockfile
rm -f ~/.npmrc
```

A fase do Agent ja nao precisa do token: usa apenas as dependencias instaladas. O script nao deve imprimir o Secret nos logs com `echo`.

## Exemplo incorreto

```text
Configure a API_KEY de producao como variavel de ambiente normal
e peca ao Agent para consultar uma API externa e validar encomendas reais.
```

O valor sensivel ficaria disponivel durante toda a fase do Agent. Com acesso a internet, isso cria risco de fuga de dados ou de operacoes acidentais. Use fixtures, mocks, credenciais de teste temporarias com privilegios minimos ou limite a configuracao qualquer preparacao que exija autenticacao.

## Verificar a configuracao

1. Liste separadamente os valores de que a configuracao e a fase do Agent realmente precisam.
2. Use Secrets para valores sensiveis necessarios apenas durante a instalacao.
3. Use variaveis de ambiente para configuracao nao sensivel necessaria ao Agent.
4. Nao escreva valores em prompts, issues, PR, no repositorio nem em `AGENTS.md`.
5. Execute um scanner de Secrets e reveja os logs de configuracao.
6. Rode as credenciais e elimine as que ja nao sao usadas.

A configuracao corre numa sessao Bash independente. Um `export` normal nao passa automaticamente para a fase do Agent. Configure diretamente como variavel de ambiente qualquer valor nao sensivel que tenha de estar disponivel durante toda a conversa.

## Relacao com CI

Os Secrets do GitHub Actions e do Codex Cloud pertencem a sistemas de armazenamento diferentes e nao sao sincronizados automaticamente. Pode uniformizar os **nomes** para facilitar a documentacao, mas nao reutilize um token de producao com mais privilegios do que a tarefa exige.

## O que fazer depois de uma fuga

Revogue ou rode as credenciais imediatamente. Depois, remova o valor exposto de logs, conversas, issues e do historico do Git. Eliminar apenas o ficheiro atual nao invalida um Secret que ja foi propagado.

## Base oficial

- [Cloud environments: variables and secrets](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**Estado:** verified

**Produtos aplicaveis:** Cloud

**Ultima verificacao:** 2026-08-26
