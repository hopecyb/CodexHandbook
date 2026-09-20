---
title: "Rever resultados"
description: "Pratique a identificação de erros num exemplo fixo e depois reveja o seu próprio aviso."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 40
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "Os materiais fixos e o resultado de referência do autor estão completos. O script de operações com ficheiros num diretório temporário foi executado, mas ainda não houve um teste independente com um modelo ou leitores."
  evidence:
    - label: "Registo das operações com ficheiros do autor"
      href: "/downloads/first-project/validation/record.json"
prev:
  link: "/pt/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "Dar tarefas claras"
next:
  link: "/pt/guide/learning-paths/beginner/05-complete-first-project/"
  label: "Concluir o primeiro pequeno projeto"
locale: pt
source_locale: zh-CN
source_revision: "e426ec4"
translation_status: draft
translated_at: 2026-09-20
---

## Comece por um exemplo com erros conhecidos

Abra o [aviso com erros preparado pelo autor](/downloads/first-project/references/flawed-notice.md), compare-o com `facts.md` e registe cada frase errada, o número do facto correspondente e como a corrigir. Este exemplo não é uma saída do modelo e não demonstra que um determinado prompt tenha necessariamente de falhar.

Não flexibilize deliberadamente as permissões do seu diretório de trabalho real para provocar alterações fora do âmbito. O exemplo fixo já permite treinar a identificação de erros e comparar resultados de forma repetível.

## Depois reveja o seu próprio resultado

Copie `templates/review.md` do pacote para uma nova pasta `records` fora do diretório de trabalho e preencha cada ponto:

- A hora, o local, a lotação, o custo e a preparação estão corretos?
- O modo de inscrição continua desconhecido e os números dos factos sustentam o texto?
- Só notice.md foi alterado? Os factos e a nota originais mantêm-se iguais?
- Foram criados ou eliminados outros ficheiros, ou enviado algo para o exterior?

Marque os pontos desconhecidos como «não verificados»; não os considere aprovados só porque o modelo diz «concluído».

## Condições de conclusão

Identifique autonomamente os quatro erros factuais do exemplo e depois consulte a [chave de revisão](/downloads/first-project/references/review-key.md): a hora de fim, o número de participantes, um modo de inscrição inventado e a transformação da sugestão de levar um livro voluntariamente numa obrigação. Se o seu aviso tiver problemas, corrija-os e volte a verificar.

Guarde o registo de revisão que realmente preencheu; não copie a referência do autor como prova de conclusão. Relacionado: [Rever diferenças](/pt/guide/quality/review-diffs/).

[Pacote de exercícios e preparação](/pt/guide/learning-paths/beginner/)
