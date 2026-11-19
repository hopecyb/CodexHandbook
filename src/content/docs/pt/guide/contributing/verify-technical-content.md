---
legacyVerification:
  status: "verified"
  basis: "Conferido com o sistema de estados atual do manual, várias rodadas de revisão concluídas e o princípio de prioridade das fontes oficiais. Esta página descreve os critérios internos para elevar uma página a `verified` e os princípios de rebaixamento."
  checkedAt: "2026-07-26"
title: Verificar conteúdo técnico
description: Como conferir fatos técnicos, reproduzir etapas e registrar escopo e evidências.
locale: pt
source_locale: zh-CN
source_revision: '7fba563'
translation_status: reviewed
reviewed_at: 2026-11-19
translated_at: 2026-09-20
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Normas de contribuição atualizadas para os novos campos de metadados do site; isto não significa que todos os mecanismos do produto aqui citados tenham sido testados novamente.
sidebar:
  order: 30
---

Comandos, permissões, preços e funcionalidades podem mudar entre versões. A conferência técnica deve ajudar os leitores a entender quais afirmações têm respaldo atual, a que ambientes se aplicam e o que ainda precisam confirmar por conta própria.

## Objetivo da conferência

Conferir vai além de melhorar a redação. Os fatos principais devem corresponder ao produto atual, as etapas devem funcionar no ambiente informado e as conclusões devem permanecer dentro do que as evidências sustentam.

## Prioridade das evidências

1. Use primeiro a documentação oficial da OpenAI para comportamento, parâmetros e limites do produto.
2. Qualquer exemplo descrito como “executado” deve ter resultado real e informações do ambiente.
3. Artigos da comunidade podem ajudar a descobrir temas, mas não substituem fontes oficiais nem uma execução real.
4. Um link funcionar não prova que o conteúdo sustenta uma afirmação; leia a fonte.
5. Se uma informação não puder ser confirmada, declare a incerteza em vez de preencher lacunas com suposições.

## Escopo a registrar

- Produto aplicável: App, CLI, IDE ou Cloud
- Sistema operacional, cliente e versões de dependências importantes
- Etapas realmente executadas e forma de conferir o resultado
- Plataformas, pontos de entrada e casos-limite não cobertos
- A página específica da fonte, e não apenas a página inicial do site

## Ordem da conferência

1. Identifique o produto, o ponto de entrada e o cenário discutido na página.
2. Compare fatos voláteis com a documentação oficial atual.
3. Se a página afirmar que as etapas podem ser executadas, faça tudo desde o início num ambiente limpo.
4. Reduza o alcance de afirmações não testadas ou incertas e informe a limitação no texto.
5. Confira links internos, links externos e pré-requisitos necessários.

## Informações que mudam com frequência

Após lançamentos importantes do produto, confira primeiro:

- Comandos, subcomandos e flags
- Permissões padrão e comportamento do sandbox
- Planos, modelos, preços, cotas e disponibilidade regional
- MCP, Hooks e outras interfaces de integração
- Localização de menus, nomes de botões e pontos de entrada

## Quando algo não puder ser confirmado

Não apresente uma inferência como fato. Remova detalhes obsoletos, reescreva a seção em torno de um método estável ou registre a dúvida numa PR ou issue. Para comportamento, preços e políticas atuais, as fontes oficiais prevalecem.

## Relacionado

- [Confiabilidade do conteúdo](/pt/guide/start-here/handbook-version-policy/)
- [Recursos oficiais](/pt/guide/reference/official-resources/)
