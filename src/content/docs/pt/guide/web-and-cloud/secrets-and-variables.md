---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: Secrets e variáveis de ambiente
description: Escolha entre Secrets do setup do Cloud e variáveis de ambiente comuns disponíveis durante toda a conversa.
sidebar:
  order: 30
locale: pt
source_locale: zh-CN
source_revision: "78937be"
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-10-26
---

As variáveis de ambiente e os Secrets do Cloud têm ciclos de vida diferentes. Essa diferença determina para que podem ser usados com segurança; não se resume a ocultar ou não um valor na interface.

| Tipo | Fases em que fica disponível | Conteúdo adequado |
|---|---|---|
| Variável de ambiente | Setup e toda a fase do Agent | Configuração não sensível, como modo de execução ou URL base de uma API pública |
| Secret | Apenas o setup script | Tokens de pacotes privados ou credenciais necessárias para instalar dependências |

Os Secrets são armazenados com criptografia adicional, descriptografados durante a execução da tarefa e removidos antes do início da fase do Agent. Não são um canal geral de credenciais para o Agent chamar APIs de produção durante a execução.

## Exemplo correto: instalar um pacote privado

Crie um Secret `NPM_TOKEN` nas configurações do ambiente. O setup script o usa para gerar uma configuração temporária de autenticação e instalar dependências:

```bash
set -euo pipefail
printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > ~/.npmrc
pnpm install --frozen-lockfile
rm -f ~/.npmrc
```

Na fase do Agent, o token já não é necessário: são usadas apenas as dependências instaladas. Não imprima o Secret nos logs do setup com `echo`.

## Exemplo incorreto

```text
Configure a API_KEY de produção como variável de ambiente comum
 e peça ao Agent para usar curl em uma API externa e validar pedidos reais.
```

Isso deixa o valor sensível disponível durante toda a fase do Agent e, quando há acesso à rede, cria risco de vazamento ou ações acidentais. Use dados de teste, mocks, credenciais temporárias de teste com permissões mínimas ou restrinja ao setup a preparação que exige autenticação.

## Verificar a configuração

1. Liste separadamente os valores realmente necessários ao setup e ao Agent.
2. Use Secrets para valores sensíveis necessários apenas à instalação.
3. Use variáveis de ambiente para configurações não sensíveis necessárias ao Agent.
4. Não escreva valores em prompts, issues, PRs, no repositório nem em `AGENTS.md`.
5. Execute um scanner de Secrets e revise os logs do setup.
6. Faça a rotação periódica das credenciais e exclua as que não são mais usadas.

O setup é executado em uma sessão Bash independente. Um `export` comum não se mantém automaticamente na fase do Agent. Configure diretamente como variável de ambiente qualquer valor não sensível que precise estar disponível durante toda a conversa, sem depender do estado temporário da shell.

## Relação com CI

Os Secrets do GitHub Actions e do Codex Cloud pertencem a sistemas de armazenamento diferentes e não são sincronizados automaticamente. Você pode padronizar os **nomes** para facilitar a documentação, mas não copie o mesmo token de produção com permissões além das necessárias à tarefa.

## O que fazer após um vazamento

Revogue ou faça a rotação das credenciais imediatamente. Depois, remova o conteúdo exposto dos logs, conversas, issues e histórico do Git. Excluir apenas o arquivo atual não revoga um Secret que já foi propagado.

## Fonte oficial

- [Cloud environments: variables and secrets](https://learn.chatgpt.com/docs/environments/cloud-environment)
