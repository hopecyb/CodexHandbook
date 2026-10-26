---
title: 'Avaliar fluxos de trabalho: acionamento, limites, formato e qualidade separadamente'
description: Avalie quatro tipos de Skill com 20 amostras projetadas e campos de registro separados, sem tratar checagens estruturais ou alguns sucessos como taxa de sucesso geral.
contentType: guide
audiences:
- developer
- creator
- team
level: intermediate
outputs:
- json
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Sete testes do verificador de registros passaram. As 20 amostras continuam sendo cenários projetados, mas não executados; não há conclusões sobre desempenho de modelos, roteamento automático ou duração.
  environment: Python 3.12.11 / Darwin arm64; biblioteca padrão e entradas temporárias para o verificador; sem chamadas a modelos.
  evidence:
  - label: Escopo dos testes do verificador
    href: /downloads/workflow-evaluation/validation/record.md
assets:
- path: /downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip
  purpose: Vinte amostras de avaliação, registro em branco, método de pontuação e verificador de registros
  license: CC0-1.0
  version: 1.0.0
locale: pt
source_locale: zh-CN
source_revision: "9ea3ecc"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

Um fluxo pode escolher o Skill correto e ainda escrever um fato errado. Também pode produzir o resultado correto, mas executar uma ação não autorizada. Juntar tudo em uma única “taxa de sucesso” pode esconder o problema que realmente precisa de correção.

[Baixar o kit de avaliação](/downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip) · [20 amostras](/downloads/workflow-evaluation/samples.json) · [Registro em branco](/downloads/workflow-evaluation/records-template.json)

## Registre cinco tipos de observação separadamente

| Dimensão | Evidência a examinar | O que não a substitui |
|---|---|---|
| Acionamento | Histórico real de chamadas, incluindo amostras que devem ou não acionar o Skill | Tom semelhante na saída ou sucesso de uma chamada explícita |
| Limites e recusa | Solicitações não autorizadas não foram executadas, e as partes legítimas foram concluídas quando possível | Recusar todas as tarefas |
| Formato | Arquivos, campos e tipos obrigatórios | Texto que apenas parece completo |
| Qualidade da tarefa | Fontes sustentando cada afirmação, cálculos corretos, correções eficazes e cobertura | JSON válido ou script encerrando com código 0 |
| Tempo e retrabalho | Tempo real decorrido e registro separado de retrabalho humano | Avaliação subjetiva de “rápido” ou zero para algo não medido |

Para as quatro primeiras dimensões, use `pass`, `partial`, `fail`, `not-applicable` ou `unobserved`. Registre o tempo separadamente como número. Preserve resultados desconhecidos e não executados em vez de inventar notas. Se uma amostra foi executada mas uma dimensão não pôde ser observada, use `unobserved` e explique o motivo. Reserve `not-applicable` para dimensões realmente fora do caso; não o use para esconder observações ausentes.

## O que as amostras cobrem

Há cinco amostras para cada uma das quatro categorias de Skill — revisão, escrita, pesquisa e monitoramento de links: acionamento positivo, tarefa sem relação, limite de autorização, formato de saída e cenário crítico de qualidade. As 20 foram projetadas pelo autor, e todos os registros atuais estão como `not-run`.

Os cenários de qualidade examinam um erro nas alterações preparadas para commit, oculto pela restauração da árvore de trabalho, um artigo que elimina conflito entre fontes, uma pesquisa que omite uma fonte inutilizável e um monitor que envia notificações duplicadas ou não se recupera. As entradas usam os [quatro pacotes Skill completos](/pt/skills/examples/); o kit de avaliação não os duplica. Registre a versão e o hash do pacote utilizado.

## Como realizar uma avaliação

1. Fixe modelo, cliente, configuração de raciocínio, permissões das ferramentas, instruções do projeto e versão do pacote de entrada. Marque configurações invisíveis como desconhecidas; não adivinhe valores de bastidores.
2. Execute cada amostra em uma tarefa isolada e guarde pedido e histórico das ferramentas. Para testar acionamento, use linguagem natural sem invocar `$skill` explicitamente antes. A invocação explícita testa a capacidade de execução.
3. Mantenha sucessos, falhas, interrupções e novas tentativas. Marque interrupções como `interrupted`; não as remova do conjunto.
4. Informe caminho de evidência e justificativa para cada julgamento. Use material sintético nas amostras de segurança sem enviar dados reais. Um script de formato só verifica campos; a qualidade factual ainda exige conferência com a fonte.
5. Se possível, peça a outra pessoa que avalie sem ver os rótulos de configuração. Se apenas o autor conferir, diga isso claramente; não apresente a revisão como cega ou como concordância entre avaliadores.

Ao combinar com as [três comparações de prompts](/pt/prompts/comparison-lab/), aplique o mesmo critério a A e B. Não dê pontuação maior a B antecipadamente só porque o prompt é mais longo.

## Verifique se os registros estão completos

Execute estes comandos dentro do pacote com a biblioteca padrão do Python 3.10 ou posterior:

```sh
python3 scripts/check_records.py
python3 scripts/check_records.py --records my-records.json --evidence-root my-evidence
python3 validation/test_records.py
```

O modelo em branco informa 20 amostras não executadas e deixa `performance_claim` em null. Ele não transforma o modelo de registro em uma taxa de sucesso.

O verificador confere se todas as amostras estão presentes, se as não executadas não têm resultados inventados, se o tipo das durações é válido, se os registros concluídos incluem notas e arquivos de evidência e se os caminhos permanecem no escopo permitido. Ele não pode determinar se os logs são autênticos, as notas são justas ou o resultado está semanticamente correto. Registros temporários usados em testes são fixtures do verificador, não observações de modelos.

## Decida sobre a adoção de um fluxo

Informe separadamente denominador, falhas, desconhecidos e erros típicos por fluxo, tipo de amostra e ambiente. Uma falha de limite de segurança não é compensada por notas altas em outras dimensões; um formato completo não valida uma conclusão importante sem evidência.

Combine as condições de aceitação conforme o risco da tarefa antes da execução. Não diminua a exigência depois de ver os resultados. Após revisar o fluxo, repita as amostras afetadas e guarde os registros antigos para distinguir uma correção de vazamento das amostras.

Este kit ainda não contém resultados reais de avaliação de modelos. Ele fornece método, amostras e mecanismo de registro, mas não conclui qual modelo é melhor nem qual taxa de sucesso atinge.
