---
title: contexto
description: Gerir o contexto de projeto, arquivos e conversa.
sidebar:
  order: 16
locale: pt
source_locale: zh-CN
source_revision: "d2baf42"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
legacyVerification: {"status": "verified", "products": "App / CLI / IDE / Cloud", "basis": "Esta página só explica as camadas de contexto e o percurso de leitura; ligações internas e formulação conceptual foram revistas, e o corpo não depende de fatos voláteis como versão do produto, preço ou interface.", "checkedAt": "2026-07-26"}
---

O Contexto é a informação que o modelo «consegue utilizar de forma eficaz neste momento». Se o contexto estiver mal gerido, até o melhor prompt fica afogado em ruído.

No uso real, é o que o Codex está mesmo a ver agora, o que pode usar como referência e o que usa para decidir. O que você sabe mas não lhe forneceu nesta tarefa **não** conta como contexto desta ocasião.

![Ilustração: regras do projeto, arquivos selecionados e conversa chegam ao agente em três camadas enquanto um funil filtra o irrelevante](/illustrations/context-layers.webp)

## Por que este capítulo importa especialmente

Muitos «por que voltou a perceber mal?» acabam por não ser o prompt curto demais, mas o contexto mal gerido.

Situações comuns:

- Deu demasiado conteúdo irrelevante
- Não entregou os ficheiros-chave
- A conversa antiga desviou a tarefa nova
- Informação em conflito sem dizer quem tem prioridade

## Como ler este capítulo

Na primeira leitura sistemática, pode seguir esta ordem:

1. Perceber primeiro o que o contexto inclui
2. Depois ver como se separam as camadas de projeto, arquivos e conversa
3. Por fim prioridade, compactação, foco e informação sensível

## Navegação do capítulo

- [Contexto do projeto](/pt/guide/context/project-context/)
- [Contexto de arquivos e pastas](/pt/guide/context/file-and-folder-context/)
- [Contexto da conversa](/pt/guide/context/conversation-context/)
- [Prioridade do contexto](/pt/guide/context/context-priority/)
- [Compactação](/pt/guide/context/compaction/)
- [Manter o foco](/pt/guide/context/keep-context-focused/)
- [Contexto sensível](/pt/guide/context/sensitive-context/)

Este capítulo insiste nisto: o contexto depende do que «ele realmente viu desta vez». Se acha que deveria saber, mas nesta ocasião não lhe forneceu, isso não conta como contexto.
