---
title: Política de versão do handbook
description: Explica o status do conteúdo, a data de verificação e como as atualizações contínuas funcionam.
locale: pt
source_locale: zh-CN
source_revision: a608dc3
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 8
---

## Atualização contínua

Este handbook não fica congelado indefinidamente em uma única versão do Codex. O produto muda; por isso, cada página explica o que foi verificado por meio de status, data de verificação e evidências específicas. A data, por si só, não é uma nota de confiabilidade.

## Conteúdo

- Por que este handbook não pode pressupor que nada muda
- Como ler o status e a data de verificação no início da página
- Em quem confiar quando houver conflito com o oficial

## Status da página

| Status | Significado |
|---|---|
| planned | Planejado, ainda não escrito |
| draft | Em redação |
| review | Conteúdo pronto, aguardando revisão |
| verified | Verificado conforme a base indicada |
| outdated | Precisa de atualização após mudanças no produto |
| archived | Mantido por histórico, fora da navegação principal |

## Como ler o status da página

- `planned`: ainda não foi escrito
- `draft`: em escrita, ainda instável
- `review`: o núcleo já existe, mas ainda precisa de revisão
- `verified`: já foi verificado conforme a base indicada
- `outdated`: pode ter sido correto antes, mas agora desconfie de desatualização
- `archived`: mantido como referência, não como conteúdo principal atual

## Registro de verificação e atualização do conteúdo

No início de cada página aparecem separadamente o status editorial, o método de verificação, a data da verificação e as evidências aplicáveis. `editorial` indica revisão editorial, `source-checked` indica conferência de fontes e `run-tested` indica que um exemplo foi executado no ambiente registrado. Nenhum desses métodos substitui os outros. As notas históricas ficam separadas e não se tornam automaticamente evidência de uma execução atual.

[Atualizações e correções do conteúdo](/pt/guide/updates/) explica mudanças específicas e seus efeitos. No fim das páginas com texto em chinês, é possível abrir um rascunho de correção no GitHub com informações da página atual. Verifique-o e remova dados sensíveis antes de enviar.

## Base oficial

O comportamento do produto segue a documentação da OpenAI: [https://developers.openai.com/codex](https://developers.openai.com/codex). Este repositório é um guia comunitário; se houver conflito com o oficial, prevalece o oficial — e issues são bem-vindas.

## Mal-entendidos comuns

### 1. Estar no handbook não significa que nunca muda

Estes conteúdos mudam com mais facilidade:

- Forma de instalação
- Fluxos de login e conta
- Permissões, modelos e opções de configuração
- Comportamento de Cloud e das entradas de produto

### 2. `review` não significa que não se pode ler

`review` indica que o conteúdo principal já existe, mas ainda não chegou ao nível máximo de confirmação — não que não sirva de referência.

### 3. Em conflito entre handbook comunitário e documentação oficial, não acredite metade em cada um

Dá para separar assim:

- Entendimento e explicação de caminhos: handbook
- Comportamento e parâmetros mais recentes: oficial

## Como julgar se uma página é confiável

Se suspeitar que uma página está desatualizada, olhe estas três coisas:

1. O status editorial no início da página é `review`, `verified` ou `outdated`?
2. A data da última verificação está longe de hoje?
3. O tema é conceitual, ou é instalação, configuração, permissões — coisas que mudam fácil?

Sempre que envolver comportamento, parâmetros e regras atuais, a documentação oficial vigente prevalece.
