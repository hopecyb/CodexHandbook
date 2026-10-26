---
title: "Exemplo: Skill de escrita com fontes e amostra de estilo"
description: "Baixe um pacote completo para praticar mapeamento de afirmações, revisão de estilo, preservação de conflitos e verificação humana."
contentType: skill
audiences: [creator]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "As verificações da estrutura de fontes e citações e oito testes de regressão passaram. O artigo e o estilo foram revistos pelo autor; os casos de acionamento são expectativas de projeto. A qualidade da escrita do modelo e o roteamento automático não foram testados."
  environment: "Python 3.12.11 / Darwin arm64; três fontes sintéticas originais, cópias temporárias, sem dependências de terceiros."
  evidence:
    - label: "Escopo da verificação e registro de revisão do autor"
      href: /downloads/skills/source-backed-writer/validation/record.md
assets:
  - path: /downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip
    purpose: "Skill, amostra de estilo, fontes sintéticas, rascunho de referência, mapa de afirmações, diff de revisão e verificações estruturais"
    license: CC0-1.0
    version: 1.0.0
locale: pt
source_locale: zh-CN
source_revision: "cbaec37"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---
Este Skill transforma fontes fornecidas em um artigo cujas afirmações podem ser rastreadas, preservando exigências de estilo, evidências e pendências. Serve para escrita baseada em fontes e revisão factual; corrigir um erro de digitação não exige todo o fluxo.

[Baixar source-backed-writer v1.0.0](/downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip) · [Ver SKILL.md](/downloads/skills/source-backed-writer/SKILL.md) · [Instruções de instalação](/downloads/skills/source-backed-writer/README.md)

## Conteúdo do pacote

| Material | Finalidade |
|---|---|
| Três fontes sintéticas e índice de hashes | Exercitar entrada fixa sem tratar um produto fictício como opção real de compra |
| Amostra de estilo e contraexemplo criado | Ver como ações concretas substituem promessas de resultado sem base |
| Estrutura, rascunho, versão final e diff | Separar mudanças nos fatos, estrutura e redação |
| Sete afirmações mapeadas e lista de pendências | Distinguir suporte da fonte, inferência do autor e informação não confirmada |
| Casos positivos e negativos de acionamento, scripts e registro | Definir escopo e limites das verificações |

O material reutiliza a ferramenta fictícia «Shiye (拾页)» do [exercício de artigo com fontes](/pt/cases/write-an-article/). Você pode fazer esse exercício antes e depois salvar o método como Skill.

## Instalação e primeira chamada

Coloque a pasta completa em `.agents/skills/source-backed-writer/` do projeto de exercício, com `SKILL.md` no primeiro nível. Se já houver um Skill com o mesmo nome, compare as versões primeiro e não substitua o Skill existente. Veja [Usar um Skill](/pt/skills/use-a-skill/) para a descoberta; após confirmar que ele aparece no cliente, chame-o explicitamente:

```text
$source-backed-writer Leia as três fontes em sources/ deste pacote didático.
Escreva uma apresentação para autores individuais seguindo references/style.md e salve
article.md, claim-map.csv e unresolved.md em my-output/.
Preserve a identidade sintética. Não publique.
```

Leitura e escrita não exigem Python. A verificação estrutural opcional usa só a biblioteca padrão do Python 3.10+. Na pasta do Skill descompactada:

```sh
# Verificar o rascunho de referência incluído
python3 scripts/check_article.py
# Verificar seu texto no formato do pacote
python3 scripts/check_article.py --output my-output
# Reproduzir oito verificações em cópias temporárias
python3 validation/test_checks.py
```

Esta página executou os scripts, mas não verificou descoberta automática ou chamada do modelo em um cliente específico. Numa tarefa real com outro formato de saída, confira seu próprio contrato em vez de forçar o formato didático.

## Como o estilo afeta o artigo

A [amostra de estilo](/downloads/skills/source-backed-writer/references/style.md) traz uma comparação planejada:

> Contraexemplo: 拾页 é uma solução universal que trata sem esforço qualquer formato e dobra sua produtividade.

Altere para: “A descrição cita apenas Markdown e texto simples. Primeiro teste com uma pequena cópia de suas notas e depois volte ao texto original indicado pelo resumo.” A primeira frase vem da fonte; a segunda é conselho do autor. Separe-as no mapa de afirmações. Se o usuário pedir outro tom ou estrutura, siga a tarefa concreta.

[Versão final de referência](/downloads/skills/source-backed-writer/solution/article.md) · [Mapa de afirmações](/downloads/skills/source-backed-writer/solution/claim-map.csv) · [Diff de revisão](/downloads/skills/source-backed-writer/solution/revision.diff)

## Lidar com conflitos e lacunas

A descrição P3 diz que o envio de diagnósticos vem desativado, mas o resumo de versão C2 diz que vem ativado nas novas instalações. A versão final apresenta as duas informações sem presumir que a mais recente está correta. Os campos enviados não foram informados e continuam na [lista de pendências](/downloads/skills/source-backed-writer/solution/unresolved.md).

A entrevista sintética não tem medição de tempo nem amostra fixa de avaliação; não sustenta “dobrar a eficiência” nem uma taxa de precisão. Remova números sem base, restaure as ressalvas e atualize o mapa de afirmações. Buscar uma resposta plausível para um produto fictício não é solução.

## Aceitação e limites das verificações

Depois de escrever, confira:

- Afirmações importantes têm local rastreável; fatos, conselhos e desconhecidos estão separados.
- Identidade sintética, limites da entrada e conflito pendente continuam no artigo.
- A revisão de estilo não remove ressalvas necessárias nem altera a estrutura pedida pelo usuário.
- Depois de validar o formato das citações, confronte cada frase com as fontes; IDs presentes não bastam.

O script identifica mudanças de hash nas fontes e erros estruturais de citação, mas não julga se a fonte realmente sustenta o sentido de uma afirmação. O pacote testa deliberadamente uma promessa falsa de capacidade que passa na verificação estrutural com ID válido. A revisão factual humana continua necessária.

## Quando não acionar

Corrigir erro de digitação, revisar um patch Git ou implementar recurso de software não deve virar automaticamente uma tarefa completa de artigo. Terminar o artigo não autoriza publicá-lo. Os [casos de acionamento](/downloads/skills/source-backed-writer/fixtures/trigger-cases.json) são expectativas de projeto, não taxa de sucesso de roteamento.

Depois volte à [trilha de criadores](/pt/guide/learning-paths/creator/) e registre estilo e critérios de aceitação em suas instruções reutilizáveis.
