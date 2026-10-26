---
title: 'Percurso de equipa: piloto de duas semanas, amostragem e decisão de expansão'
description: Comece por uma tarefa de baixo risco e reúna, em dez dias úteis, provas sobre papéis, execuções, revisão, reversão e expansão limitada.
contentType: path
audiences:
- team
level: intermediate
outputs:
- markdown
- csv
editorialStatus: review
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: O percurso de duas semanas, seis modelos e três cenários de exceção foram analisados pelo autor num exercício de mesa. Não houve piloto real de equipa, revisão independente nem medição de ganhos de produtividade.
assets:
- path: /downloads/two-week-pilot/two-week-pilot-1.0.0.zip
  purpose: Plano do piloto, lista de tarefas, ficha de revisão, incidente e reversão, decisão e calendário de dez dias
  license: CC0-1.0
  version: 1.0.0
sidebar:
  order: 30
locale: pt
source_locale: zh-CN
source_revision: "3b46738"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

Comece por uma tarefa limitada cujo resultado possa ser verificado. Use duas semanas para reunir provas de que vale a pena expandir o uso. Aqui, duas semanas correspondem a dez dias úteis. Se houver poucas tarefas, prolongue o piloto; não declare sucesso só porque o prazo terminou.

[Descarregar modelos do piloto de duas semanas](/downloads/two-week-pilot/two-week-pilot-1.0.0.zip) · [Instruções](/downloads/two-week-pilot/README.md) · [Calendário de dez dias](/downloads/two-week-pilot/templates/06-schedule.md)

## Antes de começar: escolher tarefa e responsáveis

Considere [sugestões de triagem de Issues](/pt/cases/use-cases/team-automation/issue-triage-suggestions/) ou uma [verificação local de ligações](/pt/cases/use-cases/team-automation/scheduled-link-check/). Primeiro execute manualmente com entradas sintéticas, mantendo a revisão humana e a saída local.

Designe responsável, executante, revisor, administrador do sistema e contacto de segurança, com substitutos. É possível acumular papéis, mas decisões sobre escritas externas ou incidentes de segurança devem ter revisão independente. Sem revisor, limite o trabalho a entradas sintéticas e rascunhos locais e registe-o como autoavaliação do autor.

Pré-requisitos: saber guardar registos, avaliar resultados, parar a execução e indicar os dados e ações permitidos. Se as permissões forem incertas, conclua primeiro a preparação local sem expandir por conta própria para sistemas de produção.

## D1–D2: estabelecer o plano e executar manualmente

Preencha o [plano do piloto](/downloads/two-week-pilot/templates/01-charter.md) e a [lista de tarefas](/downloads/two-week-pilot/templates/02-tasks.csv): problema de negócio, referência manual, âmbito das entradas, ações permitidas, exclusões, método de revisão, condições de paragem e conservação de registos.

Defina condições concretas de correção antes de executar. Não adote um limiar geral como «80% de aprovação bastam para lançar». Reveja individualmente resultados de alto risco; descreva no plano o método de amostragem e a justificação para as outras tarefas.

Condição de conclusão: uma execução manual tem entrada, saída, verificação real e responsável. A equipa distingue sucesso, falha e pausa. Só depois passe a uma amostra limitada.

## D3–D5: registar execuções e fazer a primeira revisão

Use a [ficha de revisão](/downloads/two-week-pilot/templates/03-review.csv) para guardar cada execução, falha, interrupção, versão da entrada, configuração, prova e razão para aceitar, alterar ou rejeitar o resultado.

Pelo [método de avaliação de fluxos de trabalho](/pt/guide/quality/workflow-evaluation/), examine separadamente ativação, limites, formato e qualidade. Registe à parte o tempo de espera do modelo e o retrabalho humano. Ao comparar com a referência manual, confirme que dificuldade e entradas são comparáveis; mantenha como desconhecido o que não puder comparar.

Em D5, examine tipos de falha e cobertura da amostra. Perante um problema grave de limites, pause e acrescente casos de reprodução e regressão; não apague falhas registadas nem esconda problemas baixando o padrão.

Condição de conclusão: os primeiros resultados têm revisões consultáveis e cada problema tem responsável e estado. Se persistir um problema grave, permaneça nesta fase.

## D6–D8: expansão limitada e ensaio de reversão

Acrescente amostras ou tipos de tarefas dentro do âmbito aprovado. Altere um fator principal de cada vez; não amplie permissões, troque de modelo e mude de tarefa em simultâneo. Registe versões da configuração para identificar a origem das alterações.

Use o [modelo de incidente e reversão](/downloads/two-week-pilot/templates/04-incident.md) para ensaiar a pausa, verificar processos e filas ativos, conservar provas, restaurar uma versão conhecida como boa e voltar a verificar. Parar novas execuções não desfaz efeitos externos já ocorridos.

Pode começar pelo [exercício de recuperação de falhas](/pt/guide/reference/troubleshooting/failure-recovery-lab/) num diretório isolado. Se o agendamento real, a revogação de permissões ou a entrega de mensagens não foram testados, registe essa lacuna. Um ensaio local não prova que a reversão funciona em produção.

Condição de conclusão: a equipa explica quem pausa, como confirmar a paragem, como preservar o estado de deduplicação e quando é permitida a retoma. Depois passe à revisão independente e à decisão.

## D9–D10: decidir expandir, continuar ou parar

Peça ao revisor que examine resultados críticos, enviesamento da amostra e problemas por resolver. Preencha a [decisão do piloto](/downloads/two-week-pilot/templates/05-decision.md).

| Decisão | O que explicar |
|---|---|
| Expansão limitada | tarefas, pessoas e permissões sustentadas pelas provas; amostragem contínua e responsabilidade pela reversão |
| Continuar o piloto | Amostras ou provas de recuperação em falta, responsável e data da próxima revisão |
| Parar | Como desativar o agendamento, tratar permissões, conservar registos e gerir eventos pendentes |

Explique ponto a ponto os critérios de D1, sem compensar um erro grave com uma média global favorável. Se faltar revisão independente, a amostra for insuficiente ou a referência não for comparável, declare a limitação e não publique alegações de melhoria da produtividade da equipa.

Condição de conclusão: uma decisão regista responsável, provas, âmbito e próximo passo. Mesmo a expansão se aplica apenas às tarefas e condições verificadas; não autoriza todos os membros a automatizar todo o trabalho.

## Como os modelos foram verificados

O autor realizou [três exercícios de mesa](/downloads/two-week-pilot/references/tabletop-review.md): um resultado correto mas sem permissão, uma amostra insuficiente e eventos ainda por entregar após desativar o agendamento. Servem para testar se os modelos cobrem os pontos de decisão; não são casos reais de equipa nem resultados de duas semanas de operação.

Quando alterar regras do projeto, leia [configuração do projeto](/pt/guide/customization/) e [definição de concluído](/pt/guide/quality/definition-of-done/) e incorpore no processo partilhado os requisitos concretos aprendidos no piloto.
