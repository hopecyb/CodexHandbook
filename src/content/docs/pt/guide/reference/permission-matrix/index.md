---
title: Matriz de permissões
description: Distinguir Permission Profiles locais, o sandbox anterior e a política de rede do Cloud.
legacyVerification:
  status: "verified"
  products: "App、CLI、IDE、Cloud"
  checkedAt: "2026-08-26"
locale: pt
source_locale: zh-CN
source_revision: "c6ad6aa"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
sidebar:
  order: 70
---

Não tente prever as permissões com uma tabela fixa de «a App, a CLI, o IDE ou o Cloud vão mostrar um pedido de aprovação?». O comportamento real depende do local de execução, da configuração efetiva, dos requisitos da organização, do sistema operacional e da ação pedida.

![Fluxo de decisão entre bloqueio pela sandbox, aprovação humana e resultado da execução](/illustrations/flow-sandbox-approval.webp)

## Distinguir primeiro três mecanismos

| Mecanismo | Âmbito | Controle principal |
|---|---|---|
| Permission Profiles locais (Beta) | Comandos locais em macOS, Linux, WSL e Windows nativo | `read`/`write`/`deny` no sistema de arquivos e destinos de rede |
| Definições anteriores de sandbox | Codex local | `read-only`, `workspace-write`, `danger-full-access` e política de aprovação |
| Política de ambiente Cloud | Codex Cloud | Contentor isolado, acesso à rede na preparação, allowlist de rede do Agent e métodos HTTP |

Os Permission Profiles não se combinam com o antigo `sandbox_mode`. Se a configuração carregada contiver `sandbox_mode`, se for passado `--sandbox` na linha de comandos ou se um Profile de configuração definir uma sandbox, o Codex usa as definições anteriores de sandbox em vez de `default_permissions`.

## Permission Profiles locais integrados

| Nome | Limite | Uso adequado |
|---|---|---|
| `:read-only` | Comandos locais apenas de leitura | Compreender código, rever, explorar um repositório pela primeira vez |
| `:workspace` | Permite escrever nas workspace roots atuais e nos diretórios temporários do sistema | Desenvolvimento corrente |
| `:danger-full-access` | Remove as restrições da sandbox local | Apenas quando já existe isolamento externo e esta capacidade é explicitamente necessária |

Um profile personalizado pode definir `read`, `write` ou `deny` para caminhos e usar regras mais específicas para excluir arquivos sensíveis, como `.env`, de um âmbito mais amplo. Quando as regras para o mesmo caminho entram em conflito, `deny` prevalece sobre `write`, e `write` sobre `read`.

## Exemplo de permissões mínimas

```toml
default_permissions = "project-edit"

[features]
network_proxy = true

[permissions.project-edit.filesystem]
":minimal" = "read"

[permissions.project-edit.filesystem.":workspace_roots"]
"." = "write"
".devcontainer" = "read"
"**/*.env" = "deny"

[permissions.project-edit.network]
enabled = true

[permissions.project-edit.network.domains]
"api.openai.com" = "allow"
"tracking.example.com" = "deny"
```

`network.enabled = true` apenas permite que os comandos acedam à rede. Também é necessário ativar `features.network_proxy` para que as regras de domínio sejam aplicadas pelo proxy.

## Avaliar por ação

| Ação | Risco principal | Limite mínimo |
|---|---|---|
| Ler código-fonte | Arquivos sensíveis entram no contexto | `read` no workspace, `deny` explícito para credenciais |
| Alterar arquivos | Substituição ou eliminação fora do âmbito | Escrever apenas no workspace de destino e ver primeiro o diff |
| Executar testes | Efeitos secundários dos scripts | Rever scripts e usar um ambiente controlado |
| Instalar dependências | Cadeia de fornecimento e acesso à rede | Fixar versões e limitar domínios |
| Git push / PR | Mudança de estado externo | Branch separada, proteção de branch e revisão humana |
| ferramentas MCP/Plugin | Dados de terceiros e operações de escrita | Scope mínimo, aprovação por ação e registros |

`AGENTS.md` pode dizer «não fazer push», mas isso não constitui uma barreira técnica de aplicação obrigatória. Combine estas regras com sandbox/permissions, permissões do GitHub e revisão humana.

## Método de verificação da equipe

1. Registe o cliente e a versão do Codex.
2. Liste todas as camadas de configuração carregadas.
3. Confirme se está ativo um Permission Profile ou o sandbox anterior.
4. Num diretório de teste sem dados sensíveis, verifique separadamente `read`, `write`, `deny` e o acesso à rede.
5. Só depois ligue o repositório real, mantendo as barreiras de Git e da organização.

Os Permission Profiles ainda estão em Beta. Repita estas verificações após uma atualização.

## Fontes oficiais

- [Permissions (Beta)](https://learn.chatgpt.com/docs/permissions)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)
- [Cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
