---
title: "Três comparações de prompts: 12 execuções e revisão critério a critério"
description: Pratique comparações A/B com um relatório semanal, um artigo e uma correção de bug. Baixe entradas, prompts e modelos de registro fixos sem presumir que prompts mais longos sejam melhores.
contentType: prompt
audiences: [creator, developer]
level: intermediate
outputs: [markdown, json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  environment: Darwin arm64; Codex 26.911.61220 / build 9647; 12 contextos de Agent independentes; modelo e configurações de raciocínio reais desconhecidos.
  summary: Cada um dos três pares A/B foi repetido duas vezes. Foram preservados artefatos, tempos e erros de ferramentas. O Agent principal fez uma revisão não cega; alguns registros estão incompletos. Essas execuções não demonstram efeitos gerais nem representam testes com leitores reais.
  evidence:
    - label: Pontuações por critério e limitações das 12 execuções
      href: /downloads/prompt-comparison-results/review.md
    - label: Execuções reais e tempos
      href: /downloads/prompt-comparison-results/runs.json
    - label: Verificações posteriores dos artefatos
      href: /downloads/prompt-comparison-results/reviewer-checks.json
assets:
  - path: /downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip
    purpose: Doze tarefas, entradas, cópias públicas dos artefatos originais, registros, tempos, pontuações por critério e scripts de revisão
    license: CC0-1.0
    version: 1.0.0
  - path: /downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip
    purpose: Nove arquivos de entrada fixos, seis prompts, critérios comuns de pontuação, orientações para revisão humana e um modelo de registro em branco
    license: CC0-1.0
    version: 1.0.0
locale: pt
source_locale: zh-CN
source_revision: "e6a23bb"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

O objetivo de comparar é descobrir quais requisitos afetam a entrega, não provar que prompts mais longos são melhores. Esta página reúne três conjuntos de entradas fixas e os registros de 12 execuções reais concluídas em 18 de setembro de 2026. A amostra mostra principalmente diferenças nas evidências entregues; é pequena demais para estabelecer efeitos gerais.

[Baixar todos os materiais](/downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip) · [Protocolo de execução](/downloads/prompt-comparisons/README.md) · [Registro em branco](/downloads/prompt-comparisons/blank-run.json)

## Três tarefas, um método de comparação

Em cada par, A e B usam as mesmas entradas e ferramentas. B mantém toda a tarefa de A e acrescenta um conjunto de requisitos explícitos de aceitação. Por isso, não se pode atribuir uma diferença a uma frase isolada desse conjunto.

| tarefa | Entrada fixa | O que B acrescenta | O que observar |
|---|---|---|---|
| Relatório semanal de vendas | CSV sintético de 46 linhas e dicionário de dados | Decisões linha a linha, explicações de anomalias e registro de conferência independente | Além de números corretos, é possível rastrear reembolsos, duplicatas e bases zero? |
| Artigo baseado em fontes | Três fontes sintéticas com conflitos intencionais | Tabela de fatos, lista de questões em aberto e nenhuma escolha sem fundamento entre fontes conflitantes | As incertezas são preservadas? Cada afirmação específica tem apoio de uma fonte? |
| Correção de bug | Implementação de carrinho de compras e testes originais | Testes falhando antes da correção, passando depois, registros e diff | A correção foi de fato verificada sem alterar os testes para contornar o erro? |

[Relatório A](/downloads/prompt-comparisons/cases/sales/A.md) / [B](/downloads/prompt-comparisons/cases/sales/B.md) · [Artigo A](/downloads/prompt-comparisons/cases/article/A.md) / [B](/downloads/prompt-comparisons/cases/article/B.md) · [Bug A](/downloads/prompt-comparisons/cases/bug/A.md) / [B](/downloads/prompt-comparisons/cases/bug/B.md)

A também pode conferir fontes e executar testes por iniciativa própria; B também pode falhar. Não trate uma expectativa como resultado.

## Cinco critérios comuns de pontuação

A e B usam o mesmo [rubric.json](/downloads/prompt-comparisons/rubric.json): correção da tarefa, rastreabilidade das evidências, controle de escopo, tratamento da incerteza e reprodutibilidade. Em cada critério, 0 significa não atendido, 1 parcialmente atendido e 2 atendido com evidências verificáveis. Use null quando a execução não ocorreu ou não pode ser avaliada.

Cada nota precisa estar ligada a evidências específicas. Um relatório bem escrito não merece nota alta se os números estiverem errados; links em um artigo não tornam seus fatos corretos por si só; código não está verificado apenas porque diz que “os testes passaram”. Não deixe uma média esconder um erro factual crucial.

## As 12 execuções reais

[Baixar resultados e registros](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) · [Pontuações por critério e tempos](/downloads/prompt-comparison-results/review.md) · [Condições de amostragem](/downloads/prompt-comparison-results/README.md)

Cada grupo seguiu a ordem A1 → B1 → B2 → A2, com três tarefas diferentes em paralelo por rodada. Cada execução usou um novo contexto de Agent e diretório de trabalho, sem fornecer respostas da avaliação. O modelo e as configurações de raciocínio não foram definidos explicitamente; os valores reais são desconhecidos. A separação dos diretórios dependia de instruções, não de isolamento pelo sistema operacional. O Agent principal revisou sem cegamento; não houve notas humanas independentes.

| tarefa | Duas observações de A | Duas observações de B | O que essas execuções mostram |
|---|---|---|---|
| Relatório semanal de vendas | Números, lançamentos e tratamento de anomalias corretos; também houve conferências espontâneas | Números corretos e explicação da conferência; uma execução não salvou o comando completo de cálculo | Os requisitos adicionais não garantiram registros completos |
| Artigo baseado em fontes | Fatos, fontes e conflitos tratados corretamente; o texto foi entregue | Os mesmos limites factuais foram preservados, com uma tabela de fatos e questões em aberto | Havia mais material para revisão |
| Correção de bug | Testes originais inalterados e três testes passando depois; o registro de falha anterior não foi salvo | Foram preservadas falhas anteriores, aprovações posteriores, códigos de saída e diffs | A cadeia de verificação foi mais completa, mas as quatro execuções omitiram a versão de Node usada |

As tabelas completas mostram notas de 0 a 2 para cada um dos cinco critérios, sem classificação geral. A falta de uma tabela de fatos no artigo A afeta o critério de reprodutibilidade acordado; não significa que o texto esteja incorreto. Bug A e B tiveram ambos reprodutibilidade parcialmente atendida, mas por motivos diferentes. O número isolado não conta toda a história.

Os hashes das entradas e dos textos das tarefas permaneceram iguais entre execuções. Uma revisão posterior recalculou o CSV de vendas e conferiu as quatro correções de bug com os testes originais inalterados. As [verificações da revisão](/downloads/prompt-comparison-results/reviewer-checks.json) ficam separadas dos registros de comandos executados pelos Agents do experimento.

## Preserve também falhas e limitações

- O prompt comum da tarefa de vendas citava `data-dictionary.md`, mas o arquivo estava em `input/data-dictionary.md`. As quatro execuções encontraram primeiro esse erro de caminho e depois se recuperaram. É um defeito do material, não um efeito dos requisitos de A ou B. Para manter as entradas congeladas, o prompt não foi alterado durante a rodada.
- Em `run-07`, o comando Python foi resumido, mas o código completo não foi preservado. O pacote de resultados mantém essa lacuna e não afirma que o comando inteiro foi registrado na época.
- Os Agents organizaram os próprios registros; eles não são exportações completas de auditoria da plataforma. As cópias públicas substituem apenas caminhos locais absolutos. Os hashes dos arquivos originais e públicos são guardados separadamente.
- O tempo inclui espera por ferramentas e escrita de registros, e as tarefas rodaram em paralelo. Não há referência humana nem medição de custo. Modelo e configurações de raciocínio são desconhecidos; os resultados não permitem classificar modelos por velocidade ou tempo poupado.

Houve apenas duas execuções por variante e tarefa. A avaliação não foi cega, e alguns critérios coincidem com os lembretes de B. O exercício mostra diferenças nos artefatos e nas evidências de verificação. Não publica uma taxa geral de sucesso nem afirma que “B venceu” ou que “mais longo é melhor”.

## Execute e registre sua própria comparação

1. Crie diretórios de trabalho separados para A e B. Copie entradas idênticas e confira seus hashes. Não forneça ao modelo as respostas da rubrica.
2. Inicie uma tarefa nova a cada vez. Fixe modelo, configuração de raciocínio, cliente, ferramentas e limite de tempo; registre honestamente qualquer configuração desconhecida. Não compartilhe o resultado de uma execução com a seguinte.
3. Defina antecipadamente o número de repetições e as condições de parada. Alterne a ordem A→B e B→A. Guarde falhas, interrupções e tentativas repetidas, não só a melhor saída.
4. Registre caminhos reais de saída, modelo, ambiente, tempo, erros de ferramentas e hash da entrada. Anote separadamente o tempo de retrabalho humano. Não preencha zero para uma execução não realizada.
5. Avalie cada critério pela mesma régua, ocultando do revisor as etiquetas das variantes quando possível. Compare critérios e tipos de falha antes de decidir se vale a pena acrescentar os requisitos.

Poucas observações descrevem apenas estas entradas e este ambiente. Elas não estabelecem uma taxa geral de sucesso nem provam que uma frase específica causou uma melhora.

## O que foi verificado e o que falta

Você pode executar a conferência dos materiais:

```sh
python3 scripts/check_materials.py
```

Foram conferidos os nove arquivos de entrada fixos, os três pares de prompts A/B com requisitos adicionados e a ausência de notas inventadas nos registros em branco. Esse script não chama um modelo nem testa a eficácia dos prompts.

As 12 execuções, as pontuações por critério e os tempos foram registrados. Ainda faltam as identificações reais do modelo, os registros completos da plataforma e uma revisão humana independente. O pacote de resultados também contém `python3 scripts/check_results.py` para conferir novamente os artefatos salvos, sem executar o modelo de novo. Para os exercícios originais completos, veja o [relatório semanal](/pt/cases/analyze-a-spreadsheet/), o [artigo](/pt/cases/write-an-article/) e a [trilha para desenvolvedores](/pt/guide/learning-paths/developer/).
