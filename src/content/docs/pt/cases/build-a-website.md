---
caseCategory: creation
directoryOrder: 40
title: 'Criar um site: dos materiais do evento a uma página para visualizar'
description: Baixe os requisitos, a página inicial e o resultado de referência para praticar layout responsivo, uso do teclado e correção reproduzível de um botão.
contentType: case
audiences: [creator, developer]
level: beginner
outputs: [html, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  environment: Python 3.12.11 / Darwin arm64; navegador integrado do Codex (versão exata do motor desconhecida), janelas de 1280×720 e 375×812.
  summary: A página de referência foi conferida no navegador em telas larga e estreita, incluindo botão e teclado. Um link quebrado foi reproduzido e corrigido. Isso não comprova compatibilidade entre navegadores, desempenho do modelo nem conclusão por leitores.
  evidence:
    - label: Revisão no navegador e ajuste visual real
      href: /downloads/reading-event/validation/browser-review.md
    - label: Registro da falha do link e da correção
      href: /downloads/reading-event/validation/recovery.json
assets:
  - path: /downloads/reading-event/reading-event-1.0.0.zip
    purpose: Requisitos fixos, fatos fictícios, HTML inicial, página de referência, exemplo quebrado, modelo de aceite e script de validação
    license: CC0-1.0
    version: 1.0.0
locale: pt
source_locale: zh-CN
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
source_revision: "55fd86a"
---

Transforme os materiais de um evento em um site de uma página que possa ser aberto no navegador. Entregue uma página estática local e um registro de aceite. O evento e o local são fictícios; a forma de inscrição ainda não foi definida.

[Baixar o pacote completo](/downloads/reading-event/reading-event-1.0.0.zip) · [Abrir a solução de referência](/downloads/reading-event/solution/index.html) · [Ler sobre os materiais](/downloads/reading-event/README.md)

## Objetivo e preparação

A página deve apresentar o evento, horário, local, limite de vagas, custo, o que levar e informações pendentes. O botão principal deve ir apenas às orientações de participação na própria página, sem sugerir que a inscrição já está disponível.

Depois de extrair o pacote, copie `starter` para uma nova pasta `work` e deixe o modelo editar somente `work/index.html`. Use `facts.md`, `brief.md` e `prompt.md` da raiz do pacote como entradas somente para leitura. Consulte `solution` apenas depois de terminar. O HTML pode ser aberto diretamente no navegador, sem instalar dependências de frontend.

Para usar um servidor local, siga o comando Python opcional no README. Se a porta estiver ocupada, escolha outra livre; não encerre um serviço desconhecido.

## Envie a tarefa

```text
Com base em facts.md e brief.md, termine o index.html atual como uma página
para um encontro de leitura. Altere somente index.html, usando HTML e CSS
incorporado. Não adicione dependências, acesso à rede, implantação ou envio.
Mantenha a forma de inscrição como pendente; o botão principal deve apenas
saltar para as orientações de participação nesta página. Ao terminar, confira
a tela de desktop, uma tela estreita de 375 px, o foco do teclado e os links
internos. Liste as verificações efetivamente feitas e o que falta; não declare
aprovados testes que não foram executados.
```

O [esboço do layout](/downloads/reading-event/wireframe.md) descreve a ordem de leitura em duas colunas no desktop e uma no celular. Cores e decoração podem mudar; os fatos, pontos desconhecidos e critérios de aceite não podem.

## Confira o resultado

| Verificação | Critério de aceite |
|---|---|
| Fatos | 17/10/2026, 14h–15h30, sala de leitura fictícia, 18 pessoas, grátis e levar um livro de forma voluntária correspondem aos materiais |
| Pendências | A inscrição permanece pendente; sem inventar QR code, telefone ou link |
| Celular | Legível a 375 px, sem rolagem horizontal |
| Interação | Tab alcança o botão principal com foco visível; Enter ou clique leva às orientações de participação |
| Escopo | Somente `work/index.html` mudou; sem nova dependência, formulário de coleta ou publicação externa |

Copie o [modelo de aceite](/downloads/reading-event/review-template.md) para fora da pasta de trabalho e preencha seus próprios resultados. A página de referência foi escrita pelo autor; o registro dele não substitui a conferência do resultado produzido pelo modelo nesta execução.

## Acompanhe uma falha de botão e sua correção

No pacote, o botão de `fixtures/broken.html` aponta incorretamente para `#signup`, enquanto a seção real é `#participation`. A página parece completa, mas o botão não chega ao destino.

Execução opcional:

```sh
python3 validation/reproduce.py
```

O reprodutor verifica a página quebrada em uma pasta temporária, sai com código 1 e informa `missing-fragment`. Depois altera apenas o `href`, verifica de novo e sai com código 0. O fixture original fica inalterado. O [registro salvo](/downloads/reading-event/validation/recovery.json) contém as duas verificações.

Não “corrija” apagando o botão ou ignorando o teste. Mude apenas o link de destino e clique para conferir. O script de links não avalia design, fatos nem experiência com teclado; verifique esses aspectos separadamente.

## Ajuste visual real e limites da verificação

Na primeira checagem móvel do autor, o texto decorativo de um livro saía do cartão. Ele ajustou tamanho da fonte e espaçamento interno na tela estreita e verificou novamente. As observações de desktop e celular, foco do teclado, botão principal e fatos F1–F7 estão na [revisão do navegador](/downloads/reading-event/validation/browser-review.md).

Este exercício não testou todos os navegadores, um celular físico, o uso completo de leitor de tela nem a conclusão por leitores independentes. O site não foi publicado e a taxa de sucesso do modelo não foi medida. Antes de publicar, confirme separadamente hospedagem, conteúdo público e permissão de implantação.

Próximo: [revisar diferenças](/pt/guide/quality/review-diffs/) · [laboratório de recuperação de falhas](/pt/guide/reference/troubleshooting/failure-recovery-lab/)
