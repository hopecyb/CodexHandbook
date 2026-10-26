---
title: "Escopo e prioridade de AGENTS.md"
description: "Compreenda exatamente como as regras globais, da raiz do projeto e do diretório atual são encontradas e combinadas."
contentType: reference
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "As regras oficiais de descoberta e combinação foram verificadas ponto por ponto; o exemplo de diretórios e as sugestões para confirmar o carregamento são didáticos e não representam testes em todos os clientes."
  evidence:
    - label: "AGENTS.md"
      href: https://learn.chatgpt.com/docs/agent-configuration/agents-md
legacyVerification:
  status: "verified"
  products: "App、CLI、IDE、Cloud"
  checkedAt: "2026-08-26"
locale: pt
source_locale: zh-CN
source_revision: "b5f31cc"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
sidebar:
  order: 20
---

O Codex constrói uma cadeia de instruções no início de cada execução. Primeiro, importa compreender a ordem de descoberta dos próprios arquivos `AGENTS.md`, em vez de presumir uma classificação que misture políticas da organização, configuração e prompts.

## Ordem oficial de descoberta

1. **Nível global**: no diretório pessoal do Codex (por predefinição, `~/.codex`), procura primeiro `AGENTS.override.md` e, se este não existir, lê `AGENTS.md`. Neste nível, usa apenas o primeiro arquivo não vazio.
2. **Nível do projeto**: da raiz do projeto (normalmente a raiz Git) até ao diretório de trabalho atual, verifica em cada diretório `AGENTS.override.md`, `AGENTS.md` e os nomes alternativos configurados. Usa, no máximo, um arquivo por diretório.
3. **Combinação**: concatena os conteúdos da raiz até ao diretório atual. Os arquivos mais próximos deste surgem mais tarde e, por isso, podem substituir orientações anteriores.

O Codex ignora arquivos vazios. O carregamento para quando o conteúdo combinado atinge `project_doc_max_bytes`, cujo limite predefinido é 32 KiB.

## Exemplo de monorepo

```text
repo/
├── AGENTS.md
├── apps/
│   └── web/
│       └── AGENTS.md
└── services/
    └── payments/
        ├── AGENTS.md
        └── AGENTS.override.md
```

Ao iniciar em `services/payments`, o `AGENTS.md` da raiz é carregado primeiro. Se existir `AGENTS.override.md` nesse diretório, o `AGENTS.md` do mesmo diretório é ignorado.

Coloque no arquivo da raiz as regras de todo o repositório, como o gestor de pacotes, os testes comuns e as restrições de segurança. Os arquivos aninhados devem conter apenas regras adicionais do serviço. Evite duplicar 80 % do conteúdo.

## Como articular o prompt da tarefa

`AGENTS.md` contém convenções duradouras do projeto que podem ser versionadas. O prompt define o objetivo, o escopo e os critérios de aceitação desta tarefa. Por exemplo:

```text
Siga os arquivos AGENTS.md aplicáveis. Nesta tarefa, altere apenas
services/payments/retry.ts e os seus testes. Não faça rotação de chaves.
Execute make test-payments e informe o resultado real.
```

Um prompt não pode disponibilizar capacidades impedidas pelos limites do sistema, da organização, da sandbox ou das permissões. Perante um conflito, peça ao Codex para enumerar as fontes das instruções relevantes e o escopo de cada uma. Distinga as convenções predefinidas do projeto, que podem ser ajustadas, dos limites reais de execução. Se o escopo for claro, estiver autorizado e não houver conflito com instruções de nível superior, prossiga; indique o bloqueio concreto apenas quando faltarem mesmo informações ou permissões. Veja a comparação completa em [Prioridade do contexto](/pt/guide/context/context-priority/).

## Verificar o que foi realmente carregado

Inicie uma nova sessão no diretório de destino e pergunte:

```text
Antes de começar, enumere por ordem as fontes AGENTS.md / AGENTS.override.md
carregadas nesta execução e resuma separadamente as restrições acrescentadas
por cada arquivo. Não altere arquivos.
```

`AGENTS.md` é lido no arranque. Depois de o alterar, verifique numa nova execução ou sessão; não presuma que a sessão atual foi atualizada automaticamente.

## Nomes alternativos e capacidade

Se já existir um arquivo `TEAM_GUIDE.md`, pode configurar:

```toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536
```

Um nome alternativo só é usado quando não existe no mesmo diretório um arquivo de prioridade superior. Antes de aumentar o limite, remova duplicações e informação de contexto irrelevante para evitar que regras importantes fiquem de fora.

## Fonte oficial

- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
