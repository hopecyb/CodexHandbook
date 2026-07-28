---
title: Contexto e arquivos
description: Gerencie projeto, arquivos, Contexto de conversa e tipos comuns de entrada.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 15
---

# Contexto e arquivos

Contexto é a informação que o Codex, neste momento, consegue ver, consultar e usar para agir.

Você já tem tudo claro na cabeça, mas a outra parte não viu o material-chave — e desviou.  
Com o Codex é igual. Se o Contexto estiver mal gerido, até o melhor Prompt afoga no ruído.

## O que o Contexto inclui

Dá para ver como a informação de que um colega novo no grupo dependeria:

- Os requisitos da Tarefa que você enviou: o problema atual
- Os arquivos que você abriu para ele: o material de fundo
- Documentos de regras no repositório: acordos da equipe
- O histórico da conversa: a memória dele desta Tarefa

Somados, isso é o Contexto de que ele depende agora.

## Fontes comuns de problema

Muitos «por que ele entendeu errado de novo» não vêm de o modelo ser «burro» — e sim de Contexto problemático, por exemplo:

- Pouca informação: ele só pode adivinhar
- Informação demais: o essencial afoga
- Você achou que ele conhecia o arquivo, mas nunca disse com clareza
- Seguiu demais uma conversa antiga: a informação inicial já não está focada

O ponto desta página é um critério simples:

> **Deixe-o ver a informação realmente relevante; não deixe o irrelevante ocupar o lugar.**

## Gestão de Contexto

- [Contexto do projeto](/guide/context/project-context/) — `AGENTS.md`, convenções do repositório
- [Contexto de arquivos e pastas](/guide/context/file-and-folder-context/) — referências @ e alcance
- [Contexto da conversa](/guide/context/conversation-context/) — Thread e Compactação
- [Manter o foco](/guide/context/keep-context-focused/) — evitar ruído irrelevante
- [Contexto sensível](/guide/context/sensitive-context/) — chaves e privacidade

Como organizar o histórico no Prompt: [Objetivos e Contexto](/prompts/goals-and-context/).

## Arquivos e Artefatos

Além de «dizer o que fazer», você costuma precisar «mostrar coisas».

Essas «coisas» podem ser:

- Um trecho de código ou documento
- Uma captura de tela
- Um PDF
- Uma planilha
- Uma apresentação

Tipos diferentes de arquivo mudam um pouco a forma de leitura do Codex, a forma adequada de perguntar e a forma de aceite.

## Arquivos e Artefatos

- [Arquivos de texto e código](/guide/files-and-artifacts/text-and-code-files/)
- [Imagens e capturas](/guide/files-and-artifacts/images-and-screenshots/)
- [PDF e documentos](/guide/files-and-artifacts/pdf-and-documents/)
- [Tabelas e planilhas](/guide/files-and-artifacts/tables-and-spreadsheets/)
- [Apresentações](/guide/files-and-artifacts/presentations/)

## Ordem de leitura sugerida

Não precisa ler tudo de uma vez. Pode seguir esta ordem:

1. Leia primeiro [Contexto de arquivos e pastas](/guide/context/file-and-folder-context/) — entenda «quais arquivos deixar ele ver»
2. Depois [Manter o foco](/guide/context/keep-context-focused/) — evite dispersar a Tarefa na conversa
3. Conforme o tipo de material em mãos, leia o capítulo de arquivo correspondente

Contexto é o monte de informação que o Codex tem à mão ao julgar; se você der certo, o resultado também fica mais fácil de acertar.

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página é visão geral de navegação e método do site; o framework «requisitos da Tarefa, material de arquivo, regras do projeto e histórico da conversa formam juntos o Contexto» foi cruzado item a item com os capítulos atuais de Contexto e de tratamento de arquivos, sem depender de detalhes voláteis de interface.  
**Última verificação:** 2026-07-26
