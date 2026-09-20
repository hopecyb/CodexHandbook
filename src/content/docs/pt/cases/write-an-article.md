---
caseCategory: creation
directoryOrder: 20
title: Escrever um artigo com fontes a partir de três documentos
description: Use descrição de produto, entrevista sintética e notas de versão para praticar mapeamento factual, conflitos e revisão; baixe o pacote completo.
contentType: case
audiences: [creator, beginner]
task: source-backed-writing
level: beginner
estimatedMinutes: 50
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Três fontes sintéticas criadas para o exercício e sete fatos essenciais foram conferidos item a item; a validação estrutural passou. Trata-se de autoverificação do autor, sem experimento comparativo com modelo real nem segunda revisão humana.
  evidence:
    - label: Descrição sintética do produto
      href: /downloads/source-backed-article/sources/01-product.md
    - label: Entrevista sintética
      href: /downloads/source-backed-article/sources/02-interview.md
    - label: Notas de versão com conflito não resolvido
      href: /downloads/source-backed-article/sources/03-changelog.md
    - label: Registro de conferência do autor e limites
      href: /downloads/source-backed-article/validation/record.md
assets:
  - path: /downloads/source-backed-article/source-backed-article-1.0.0.zip
    purpose: Três fontes, prompts, rascunhos inicial e final, tabela de fatos, diff de revisão e validador
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /pt/cases/
  label: Escolher tarefa prática
next:
  link: /pt/cases/create-a-slide-deck/
  label: Transformar o artigo em apresentação
locale: pt
source_locale: zh-CN
source_revision: e2bb5ea
translation_status: draft
translated_at: '2026-09-20'
---

O objetivo é um artigo curto em chinês cujos fatos principais possam ser rastreados até as fontes. Você tratará descrições conflitantes, distinguirá suporte documental, inferência do autor e dúvidas pendentes, e revisará um rascunho intencionalmente errado.

Dificuldade inicial. Duração estimada de 45–60 minutos, cálculo editorial não medido com leitores. Requisitos: fornecer arquivos locais ao Codex e ler Markdown. A validação estrutural opcional requer Python 3.10+.

[Baixar o pacote completo v1.0.0 (ZIP)](/downloads/source-backed-article/source-backed-article-1.0.0.zip)

Todos os materiais são originais deste site. O produto “Shiye” e a pessoa entrevistada “Xiaolin” são fictícios; não representam produto ou depoimento de usuário reais.

## O resultado final

O artigo final de referência segue “conferir um resumo antes de ampliar o uso” e aborda limites de entrada, teste limitado, conferência do resumo e questões abertas.

| Arquivo | Finalidade |
|---|---|
| `outline.md` | Pergunta do leitor e sequência do artigo |
| `article.md` | Texto em chinês com IDs de fatos |
| `claim-map.csv` | Sete fatos/recomendações, IDs de fontes, seções e tipos de evidência |
| `unresolved.md` | Questões que os documentos não respondem |
| `revision.diff` | Diferença textual real do rascunho elaborado para a versão final |

[Ver artigo de referência](/downloads/source-backed-article/solution/article.md) · [Ver tabela de fatos](/downloads/source-backed-article/solution/claim-map.csv)

## Baixar e preparar

Descompacte e abra `source-backed-article`. Leia `brief.md` e `sources/index.csv`. A licença CC0 1.0 permite modificar e redistribuir. Você pode deixar solution fechado até produzir sua própria versão.

P é a descrição do produto, I é a entrevista sintética e C são as notas de versão. Há IDs estáveis como P1, I2, C3; cite a seção específica, não apenas “os documentos”.

## 1. Organizar primeiro fatos e conflitos

```text
Leia brief.md, sources/index.csv e as três fontes listadas.
Liste primeiro fatos diretamente apoiados, informações ausentes e afirmações conflitantes; anexe ID da fonte e seção a cada item.
Não busque na Internet informações para completar o produto fictício nem apresente a entrevista sintética como depoimento real.
Não resolva conflitos automaticamente pela data do documento. Entregue a tabela de fatos antes de escrever o artigo.
```

O conflito é intencional: P3 diz que o envio de diagnóstico vem desligado por padrão; C2 diz que vem ligado nas instalações novas; C3 esclarece que não há correção do mantenedor. A resposta correta é registrar “não confirmado”, não selecionar a fonte mais recente como conclusão final.

## 2. Escrever continuamente no escopo definido

`prompts/02-outline-and-write.md` define o público e quatro partes: o que faz, como testar, o que conferir e o que permanece aberto. Confirmada a estrutura, pode escrever de uma vez, sem parar a cada seção.

Guarde os produtos em `my-output/` e preserve as fontes. Marque fatos importantes como `[F1]`. No mapa, registre:

```text
claim_id,article_section,claim,source_id,locator,evidence_type,confidence_note
```

Os tipos de evidência são “apoiado pelo original”, “inferência do autor” e “não confirmado”. Sugerir testes com poucas cópias de arquivos é julgamento do autor, não promessa do produto nem operação obrigatória.

## 3. Corrigir os fatos antes do tom

`solution/draft.md` é um contraexemplo elaborado pelo autor, não saída real de um modelo. Ele afirma sem suporte capacidade de PDF/imagem, uso totalmente offline, garantia de efeito e testemunho real.

| Problema do rascunho | Revisão | Motivo |
|---|---|---|
| “Aceita PDF e todo tipo de imagem” | Limitar a Markdown e texto simples | P1 define os formatos de entrada |
| “Totalmente offline; diagnóstico desligado por padrão” | Mostrar conflito e pergunta pendente | P3/C2 divergem e campos enviados não são conhecidos |
| “Xiaolin comprova precisão e economia de tempo” | Manter identidade sintética, sem números de efeito | I3 não traz medição de tempo ou amostra fixa de avaliação |
| “Ferramenta universal que aumenta facilmente a produtividade” | Descrever entradas, ações e conferências concretas | Reduzir exagero sem adicionar fatos |

Veja o [diff de revisão](/downloads/source-backed-article/solution/revision.diff) e as [notas de revisão](/downloads/source-backed-article/solution/revision-notes.md). Apenas melhorar o tom e deixar capacidades falsas não conclui a revisão.

## 4. Conferir a estrutura e ler cada fonte

Com Python 3.10+ no diretório do exercício:

```sh
python3 validation/check.py --output my-output
```

O script confere hashes das três fontes, IDs do texto, seções de origem e arquivo de questões pendentes. A versão de referência passa; uma cópia temporária com F99 inexistente é rejeitada.

**Validação estrutural não garante veracidade factual.** Abra o original de cada afirmação e verifique se sustenta a frase e se condições como “somente” e “ainda não confirmado” foram preservadas. Fazer um trecho sintético parecer testemunho real continua errado mesmo com ID de citação.

Sem script, abra manualmente os três originais seguindo a tabela e confira IDs e formulações. Não diga que passou em uma verificação que não executou.

## Recuperação após falhas

- Arquivo inexistente: confira a pasta descompactada e o índice; não invente conteúdo.
- ID de citação inexistente: corrija a correspondência ou retire o fato sem fonte; mantenha incertezas justificadas.
- Fontes em conflito: apresente as duas versões e indique quem deve fornecer qual prova; não decida por data, maioria ou tom.
- Artigo publicitário: remova primeiro promessas sem base e substitua por ações e limites concretos.

## Critérios de conclusão

Fatos principais são localizáveis, sugestões do autor estão separadas, conflitos e lacunas continuam visíveis e a identidade sintética foi mantida. A entrega permanece local, sem publicação automática.

Depois [crie oito slides editáveis](/pt/cases/create-a-slide-deck/) com o artigo. O pacote de slides contém entradas independentes, PPTX, PDF, oito prévias e registro de validação; se fizer o percurso inteiro, prefira seu artigo concluído e conferido.
