---
title: Subagentes
description: Delegue subtarefas com limites claros a contextos independentes, mantendo no Agent principal a síntese, a resolução de conflitos e a aceitação final.
locale: pt
source_locale: zh-CN
source_revision: 'b1cefc0'
translation_status: stale
reviewed_at: 2026-10-26
translated_at: 2026-09-20
sidebar:
  order: 30
legacyVerification: {"status": "verified", "products": "App / CLI / IDE", "basis": "Conferido com a documentação oficial atual de subagentes do Codex. Esta página explicita o isolamento de contexto, a herança de permissões, a visualização de atividades, o custo em tokens e os conflitos de escrita paralela, mantendo a responsabilidade pela síntese e verificação finais no Agent principal.", "checkedAt": "2026-08-26"}
---

Um **subagente (Subagent)** é uma unidade de trabalho independente que o Agent principal inicia para resolver um subproblema definido. Tem o seu próprio contexto e devolve conclusões e evidências ao thread principal. O Agent principal continua responsável pelas decisões globais e pela aceitação final.

![Arquitetura de orquestração de subagentes Codex: o Agent principal delega tarefas delimitadas, os subagentes devolvem evidências e o Agent principal sintetiza e verifica](/illustrations/flow-subagents.webp)

## Compreender três níveis de separação

| Nível | Está separado? | Significado |
|---|---|---|
| Contexto da conversa | Sim | Cada subagente concentra-se na sua tarefa sem carregar todos os detalhes do thread principal |
| Sandbox e modo de permissões | Herdados | A execução independente não concede permissões mais elevadas |
| Arquivos do espaço de trabalho | Nem sempre | Vários Agents podem ver o mesmo espaço de trabalho; escritas simultâneas no mesmo arquivo podem entrar em conflito |

A regra mais importante é: **separar contextos não é separar arquivos.** Antes de editar código em paralelo, distribua a responsabilidade por diretórios, componentes ou worktrees.

## Onde estão disponíveis atualmente

As versões atuais do Codex disponibilizam subagentes por predefinição e mostram a respetiva atividade nas interfaces da aplicação de desktop, da CLI e do IDE que a suportam. Os detalhes da interface podem mudar, mas a forma de trabalho é estável: peça explicitamente ao Codex que delegue subtarefas independentes e deixe a síntese a cargo do thread principal.

Na CLI você pode usar `/agent` para ver ou mudar de fio. O IDE mostra Agents em segundo plano nas interfaces compatíveis, e a aplicação de desktop apresenta a atividade das threads da tarefa. A disponibilidade de um controle específico depende do cliente e das funcionalidades da conta.

## Quando vale a pena dividir o trabalho

Considere usar um subagente quando a subtarefa cumpre pelo menos duas destas condições:

1. Pode ser descrita independentemente sem sincronizar constantemente os detalhes do trabalho principal.
2. Tem um resultado claro, como uma lista de arquivos, um resultado de teste ou uma conclusão de uma página.
3. Pode decorrer em paralelo com outras tarefas ou uma pesquisa separada reduz bastante o ruído no thread principal.

### Trabalho adequado para paralelismo

- Analisar separadamente, em modo só de leitura, frontend, backend e cobertura de testes.
- Investigar em paralelo vários testes falhados que não dependem uns dos outros.
- Recolher evidências separadamente para duas soluções técnicas.
- Atribuir revisão de segurança, análise de desempenho ou conferência de documentação a papéis especializados.

### Trabalho que convém manter no thread principal

- Requisitos ainda pouco claros, que exigem diálogo contínuo com o usuário.
- Etapas que têm de decorrer numa ordem rigorosa.
- Alterações muito concentradas num único arquivo ou bloco de código.
- Subtarefas sem critérios de conclusão, como “dê uma olhada”.

Os subagentes aumentam o consumo de tokens e o custo de sintetizar resultados. Não divida em paralelo uma tarefa pequena que uma única thread bem definida consegue concluir.

## As responsabilidades do Agent principal mantêm-se

O Agent principal deve conservar sempre estas quatro responsabilidades:

- O objetivo global, as restrições do usuário e a decisão final.
- Os limites das subtarefas e a responsabilidade por arquivos.
- A resolução de conclusões contraditórias.
- Os testes e a compilação após juntar resultados, além da explicação dos riscos.

Um subagente devolver “concluído” é apenas um sinal sobre a subtarefa, não uma prova de que a tarefa completa terminou.

## Escrever um contrato de delegação verificável

Segue um exemplo de pesquisa só de leitura:

```text
Inicie um subagente para analisar, só de leitura, a lógica de renovação de sessão em packages/auth.

Escopo: packages/auth e os testes correspondentes; não altere arquivos.
Pergunta: depois de uma falha de renovação, o token antigo ainda pode ser reutilizado?
Entrega: conclusão, arquivos e linhas essenciais, caminho de reprodução e teste recomendado.
Verificação: cada afirmação deve poder ser conferida no código-fonte ou nos testes existentes.
Resposta: até 500 caracteres; o thread principal decide se deve fazer alterações.
```

O contrato deixa claras seis coisas: a responsabilidade, a área a examinar, a pergunta, as proibições, a forma de verificar e quem decide.

## Exemplo de três investigações em paralelo

Se houver uma regressão intermitente no início de sessão, o Agent principal pode dividir a pesquisa assim:

| Subtarefa | Permissão e escopo | Resultado |
|---|---|---|
| A: caminho do código | Só de leitura em `src/auth/` | Cadeia de chamadas da entrada até ao ramo de falha |
| B: evidências dos testes | Testes e registros só de leitura | Teste mínimo com reprodução estável |
| C: alterações recentes | Histórico Git relevante só de leitura | Alteração com maior probabilidade de ter introduzido a regressão e respetiva evidência |

Quando os três resultados chegarem, o Agent principal deve comparar primeiro as evidências e só depois escolher uma direção de correção. Não deixe A, B e C alterar simultaneamente `src/auth/session.ts`.

## Como separar escritas em paralelo

Reduza os conflitos pela seguinte ordem:

1. Divida as tarefas de escrita por diretórios ou componentes sem sobreposição.
2. Atribua worktrees ou ramos distintos a implementações paralelas.
3. Defina a lista exata de arquivos que cada Agent pode alterar.
4. O Agent principal reúne os resultados e repete as verificações após a integração.

Mesmo que os testes de cada subtarefa passem, o conjunto integrado pode falhar. Por isso, não omita a verificação final.

## Lista de aceitação

- O resultado responde à pergunta original sem ampliar o escopo?
- Inclui localizações de arquivos, registros ou testes que se possam conferir?
- Respeitou as restrições de leitura, diretórios e comandos?
- Os vários resultados contradizem-se? A contradição foi tratada explicitamente?
- Os testes completos e a compilação foram repetidos depois da integração?
- Explica os problemas por resolver e os riscos restantes?

## Combinar com outras capacidades

- **Skill** fixa a forma de executar a subtarefa e o formato de saída, por exemplo uma lista de controle para revisão de código.
- **MCP** disponibiliza ao subagente ferramentas externas ou dados sob controle.
- **Hook** acrescenta regras de proteção quando o subagente começa, termina ou chama ferramentas.
- **Worktree** separa alterações paralelas de arquivos; resolve conflitos do espaço de trabalho, não problemas de contexto.

Continue em [Coordenação multiagente](/pt/cases/workflows/multi-agent-coordination/) e [Passagem de trabalho e retoma](/pt/guide/agent-work/handoff-and-resume/).
