---
title: Perfis de configuração
description: Sobrepõe um conjunto de definições com nome à configuração do Codex CLI através de um ficheiro independente.
locale: pt
source_locale: zh-CN
source_revision: 6ab30c5
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

Na versão atual da Codex CLI, `--profile <name>` sobrepõe `$CODEX_HOME/<name>.config.toml` à configuração de base do utilizador. Destina-se sobretudo à CLI; não o descrevas como um “modo de um clique” universal na aplicação de desktop.

## Exemplo mínimo

A configuração de base conserva os valores predefinidos partilhados:

```toml
# ~/.codex/config.toml
model_reasoning_effort = "medium"
```

Um perfil de revisão só de leitura:

```toml
# ~/.codex/review.config.toml
sandbox_mode = "read-only"
approval_policy = "never"
```

Para iniciar:

```bash
codex --profile review
# Forma abreviada
codex -p review
```

Confirma o significado destes parâmetros na tua versão local:

```bash
codex --help
```

A ajuda atual deve indicar o caminho do ficheiro de perfil e como este se sobrepõe à configuração de base. Se a tua versão for diferente, segue a saída local e a referência oficial atual da configuração.

## Quando usar um Profile

| Profile | Objetivo | Exemplo de limite |
|---|---|---|
| `review` | Inspeção só de leitura | `read-only`, sem escritas |
| `workspace` | Alterações correntes no projeto | Escritas apenas no espaço de trabalho, aprovações quando necessárias |
| `ci` | Verificações não interativas | Saída fixa, sem push |

Um Profile apenas guarda um ponto de partida para a configuração. Não se sobrepõe aos requisitos da organização nem torna um prompt automaticamente seguro. Em especial, não definas `danger-full-access` como perfil predefinido de uso fácil.

## Não confundir com Permission Profile

- **Profile de configuração**: `--profile name` seleciona `<name>.config.toml` e pode sobrepor várias definições do Codex.
- **Permission Profile (Beta)**: `default_permissions` e `[permissions.<name>]` definem os limites do sistema de ficheiros e da rede.

Ambos se chamam profile, mas têm finalidades e estruturas diferentes. A versão atual de Permission Profile também não se combina com o antigo `sandbox_mode`; escolhe um sistema de permissões para configurar.

## Limites do uso em equipa

Os Profiles de configuração ficam no Codex home do utilizador. Na versão atual, não são configurações de projeto que possam ser simplesmente incluídas no repositório. Uma equipa pode publicar exemplos revistos para que cada membro os instale e confira explicitamente. Não assumas que um clone do repositório ativa automaticamente um perfil pessoal.

## Aceitação

1. Executa `codex --help` e confirma o suporte atual de `-p/--profile`.
2. Testa `review` com uma tarefa só de leitura.
3. Pede a leitura de um ficheiro fora do espaço de trabalho ou a escrita de um ficheiro e confirma que o limite bloqueia a operação.
4. Confere a configuração efetiva, sem te guiares apenas pelo nome do ficheiro.

## Fontes oficiais

- [Schema da configuração do Codex](https://github.com/openai/codex/blob/main/codex-rs/core/config.schema.json)
- [Camadas da configuração no código-fonte da Codex CLI](https://github.com/openai/codex/blob/main/codex-rs/config/src/loader/mod.rs)
