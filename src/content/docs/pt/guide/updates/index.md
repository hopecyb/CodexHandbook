---
title: Atualizações e correções do manual
description: Veja mudanças no manual, exercícios afetados, limites de verificação e como relatar um problema ligado a uma página específica.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Organizado a partir do conteúdo atual do repositório e dos registros de execução. É um histórico de mudanças do manual, não um anúncio de produto da OpenAI nem prova de publicação do site.
locale: pt
source_locale: zh-CN
source_revision: '1686a65'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-11-19
---

Esta página registra o que mudou no manual, quais operações foram afetadas e até onde chegou a verificação. As datas indicam a preparação do conteúdo; para saber o estado real da publicação, confira a versão do site que está acessando. Mudanças em recursos do produto devem ser verificadas nas fontes oficiais citadas nos tutoriais correspondentes.

## 2026-09-18: exercícios executáveis e limites da verificação

| Mudança | Efeito para quem lê | Registro de verificação |
|---|---|---|
| O [relatório semanal de vendas](/pt/cases/analyze-a-spreadsheet/) inclui entradas e resultados completos | Baixe 46 linhas de dados sintéticos para praticar reembolsos, duplicatas e comparação entre períodos | [Conferência independente dos cálculos](/downloads/sales-weekly-report/record.md) |
| O [artigo baseado em fontes](/pt/cases/write-an-article/) inclui mapa de fatos e materiais conflitantes | Preserve o que é desconhecido sem tratar uma entrevista sintética como depoimento real | [Conferência de fontes e estrutura](/downloads/source-backed-article/validation/record.md) |
| A [apresentação](/pt/cases/create-a-slide-deck/) oferece PPTX, PDF e prévia de oito páginas | Confira texto editável e aparência dos slides; compatibilidade com todos os programas não é garantida | [Registro de software e renderização](/downloads/article-to-slides/validation/record.md) |
| O [caminho para criadores](/pt/guide/learning-paths/creator/) e o [caminho para desenvolvedores](/pt/guide/learning-paths/developer/) agora seguem entregáveis | Cada etapa traz material, critérios de aceitação e próximo passo; desenvolvedores podem registrar testes vermelhos e verdes | [Registro de nova execução](/downloads/developer-path/run-record.json) |
| [Quatro tipos de Skill](/pt/skills/examples/) têm pacotes completos para download | Revisão, escrita, pesquisa e automação incluem referências e verificações; exemplos de acionamento não são medição de roteamento | “Ambiente de verificação e evidências” nas páginas detalhadas |
| A [triagem de Issues](/pt/cases/use-cases/team-automation/issue-triage-suggestions/) corrige schema e critério de lançamento | “Três amostras e 80% de acordo” não justificam mais o lançamento; revisão humana continua recomendada | [Registro de teste a seco](/downloads/issue-triage/validation/record.md) |
| [Verificação de links](/pt/cases/use-cases/team-automation/scheduled-link-check/) e [recuperação de falhas](/pt/guide/reference/troubleshooting/failure-recovery-lab/) incluem material executado | Reproduza erros locais e recuperação; links externos, agendamento real e falhas de login não foram testados | [Registro de recuperação](/downloads/failure-recovery/validation/record.md) |

## 2026-09-18: filtro de casos e navegação dos caminhos

O [diretório de casos](/pt/cases/) permite filtrar por tipo de tarefa e palavra-chave, com URLs filtradas compartilháveis. Os cartões obtêm entregáveis e estado de verificação dos metadados de cada caso. Nas versões em chinês simplificado e tradicional, a barra lateral de aprendizagem mostra somente o caminho atual, seus passos e a ajuda relacionada; a visão geral para iniciantes fica no topo e as cinco etapas são numeradas. É possível redefinir um filtro sem resultados. Sem scripts, ainda se pode ler todos os casos.

## 2026-09-18: doze execuções de comparação de prompts

As [três comparações de prompts](/pt/prompts/comparison-lab/) agora incluem duas execuções reais de A e B para relatório de vendas, artigo com fontes e correção de bug, com resultados, duração e notas por critério. O [pacote de resultados](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) conserva erros de ferramentas, lacunas nos logs e hashes de caminhos anonimizados. O Agent principal avaliou sem ocultar a variante, os modelos reais usados são desconhecidos e os dados não provam taxa geral de sucesso nem economia de tempo.

## 2026-09-18: exercício completo de site

O caso [criar um site](/pt/cases/build-a-website/) inclui requisitos fixos, página HTML inicial, resultado de referência, modelo de aceitação e falha de âncora em botão. A página de referência foi conferida em desktop e com largura de 375 px; as correções reais e logs de links foram guardados. Não se afirma que houve implantação, inscrições ou efeito do modelo.

## 2026-09-18: entrada chinesa mais objetiva

A página inicial organiza tarefas, caminhos por função, busca de problemas e materiais reutilizáveis, removendo explicações repetidas de posicionamento e capacidades. A navegação principal em chinês simplificado e tradicional destaca tarefas, caminhos de aprendizagem e referências. O roteiro passa ao menu de recursos, e o celular usa as mesmas entradas.

## 2026-09-18: materiais fixos para iniciantes e exercício de recuperação

O [caminho de cinco passos para iniciantes](/pt/guide/learning-paths/beginner/) usa um único conjunto de materiais sintéticos de evento, comunicado de referência, quatro exemplos de erro e modelos de revisão e passagem de trabalho. O exercício vai de leitura e edição de um único arquivo à restauração real de uma cópia. O registro do script do autor demonstra apenas as operações de arquivo; não há avaliação independente de modelo nem prova de conclusão por leitores.

## 2026-09-18: datas do roteiro e entradas práticas

O [roteiro de aplicações de IA](/pt/ai-roadmap/) agora distingue artigos científicos, lançamentos de produto, artigos de engenharia e temas de projeto que não estão ordenados pela primeira data de publicação. Cada tema inclui fontes concretas e um exercício. A data de um artigo não representa mais adoção em toda a indústria, nem uma verificação estrutural de pacote Skill é apresentada como teste de acionamento no cliente. As URLs antigas permanecem; meses e anos históricos não são datas de eventos atuais. Cada tema inclui no texto links para as fontes e limites de aplicação.

## 2026-09-18: esclarecimentos contra leituras equivocadas

- A entrada de preços passou a “Referência de preços”. Capturas com fontes nas moedas originais ficam separadas de dados desconhecidos; estimativas não formam mais uma lista mundial do mais barato ao mais caro. Confira o preço real exibido pelo vendedor antes de comprar.
- As páginas correspondentes agora explicam no próprio texto as fontes, os limites de aplicação e o escopo das execuções reais. “Executado” cobre apenas os scripts e ambientes listados, não representa uma taxa de confiabilidade das saídas de modelos.
- A [prioridade das instruções](/pt/guide/context/context-priority/) diferencia papéis das mensagens, descoberta das instruções do projeto e permissões de execução, sem afirmar genericamente que instruções mais novas ou restritivas sempre prevalecem.
- [SDK](/pt/guide/developer-platform/sdk-overview/) e [Webhook](/pt/guide/developer-platform/webhooks/overview/) distinguem execução local, serviço próprio e desenho de callback; interfaces propostas não são descritas como contratos oficiais.
- Os [níveis de tarefa](/pt/prompts/ask-for-a-plan/) distinguem execução direta, planejamento prévio e aprovação de ações, evitando pausa indiscriminada em cada etapa.

As páginas correspondentes descrevem as fontes e os limites no texto. Este resumo não é uma referência completa das interfaces.

## Ao encontrar um problema em uma página

Todas as páginas do manual têm no rodapé um link localizado “Relatar um problema nesta página (rascunho no GitHub)”. Ele inclui apenas o título e o caminho no site e abre um rascunho de Issue público que ainda não foi enviado. Revise-o antes de enviar; é necessária uma conta GitHub.

Informe a seção, o conteúdo esperado e atual, o ambiente necessário e evidências públicas. Remova chaves de API, dados de contas, caminhos privados, dados de clientes e logs não anonimizados. O rascunho não coleta dados de tarefas nem inclui a query string da página.

Sem conta GitHub, copie o caminho e a descrição do problema para uma nota local e peça a um colaborador com acesso para enviar. Não há promessa de prazo de resposta e nenhuma mensagem é enviada automaticamente.

## Como a equipe do manual trata os relatos

Após reproduzir ou conferir a fonte, registre por que o relato foi aceito, corrigido ou ainda não pôde ser confirmado. Ao mudar um fato do produto, atualize o texto e as evidências sem marcar páginas não relacionadas como atualizadas. Ao mudar um exercício, sincronize o material de origem, o pacote para download e o artigo. Se uma conclusão anterior deixou de valer, explique o impacto do método antigo e os passos de migração, em vez de apenas escrever “conteúdo otimizado”.

Ao atualizar esta página, vincule as páginas afetadas e as fontes públicas e informe o que ainda não foi testado. Este é o histórico de mudanças de um manual da comunidade, não o changelog oficial da OpenAI.
