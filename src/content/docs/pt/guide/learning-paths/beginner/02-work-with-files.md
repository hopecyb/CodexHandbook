---
title: Trabalhar com ficheiros
description: Adicione uma linha apenas ao ficheiro indicado e observe a alteração real.
contentType: path
audiences:
- beginner
level: beginner
editorialStatus: review
sidebar:
  order: 20
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: Os materiais fixos e o resultado de referência do autor estão completos. O script de operações com ficheiros num diretório temporário foi executado, mas ainda não houve um teste independente com um modelo ou leitores.
prev:
  link: /pt/guide/learning-paths/beginner/01-talk-to-codex/
  label: Conversar com o Codex
next:
  link: /pt/guide/learning-paths/beginner/03-give-clear-tasks/
  label: Dar tarefas claras
locale: pt
source_locale: zh-CN
source_revision: 'a379994'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

## Pré-requisitos

Já concluiu o primeiro passo e `work` ainda contém os três ficheiros originais. Guarde `starter` fora do diretório de trabalho como referência inicial.

## Fazer uma edição verificável

```text
Adiciona o comentário de estado seguinte apenas na primeira linha de notice.md:
<!-- 状态：练习草稿，未发布 -->
Mantém o texto original caráter por caráter. Não alteres outros ficheiros nem cries ficheiros novos.
No fim, indica onde fizeste a alteração. Não publiques nem envies notificações.
```

Compare o ficheiro linha a linha com o original na vista de diferenças do cliente atual ou num editor. Aqui basta uma pequena alteração; não é preciso acrescentar um processo de «planear primeiro e confirmar cada passo».

## Condições de conclusão

Só notice.md mudou, com exatamente uma linha de comentário acrescentada; os outros dois ficheiros permanecem inalterados. Compare com o [resultado do segundo passo](/downloads/first-project/references/step-2-notice.md). O comentário pode ficar oculto na apresentação de Markdown; examine o ficheiro em texto bruto.

Se o modelo alterar o texto, restaure notice.md a partir do original em `starter` e repita este passo. Restaure apenas este ficheiro do exercício, sem reiniciar o projeto inteiro. Veja [Desfazer e recuperar](/pt/guide/getting-started/undo-and-recover/).

[Pacote de exercícios e preparação](/pt/guide/learning-paths/beginner/)
