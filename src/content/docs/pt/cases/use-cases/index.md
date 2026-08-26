---
title: Cenários e biblioteca de casos
description: Tarefas reais de ponta a ponta — preparação, execução, verificação, recuperação de falhas e retrospectiva.
locale: pt
source_locale: zh-CN
source_revision: 6349392
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

A biblioteca de casos responde: «**Com este tipo de objetivo real, como é a experiência de percorrer o Codex de ponta a ponta?**» Complementa as páginas de produto isoladas.

## Caso vs tutorial

| | Tutorial introdutório | Biblioteca de casos |
|---|---|---|
| Objetivo | Aprender um botão/conceito | Entregar um tipo de resultado real |
| Estrutura | Por funcionalidade do produto | Por tipo de tarefa |
| Tratamento de falhas | Muitas vezes omitido | Obrigatório |

## Como usar

1. Escolha o caso mais próximo do seu objetivo (ou use só a «lista de preparação»)
2. Confrontar com [Explorar—Planear—Executar—Verificar](/pt/cases/workflows/explore-plan-execute-verify/)
3. No fim, use o [modelo de caso](/pt/cases/use-cases/case-study-template/) para retrospectiva e decida se consolida como Skill

## Casos starter existentes

| Domínio | Caso | Descrição |
|---|---|---|
| Desenvolvimento de software | [Correção de bug com verificação](/pt/cases/use-cases/software-development/fix-a-bug-with-verification/) | Ciclo mais comum para programadores |
| Criação de conteúdo | [Refatorar um site de documentação com revisão](/pt/cases/use-cases/content-creation/refactor-docs-with-review/) | Documentação multi-ficheiro e aceitação por build |
| Investigação e aprendizagem | [Matriz de comparação de funcionalidades](/pt/cases/use-cases/research-and-learning/competitive-feature-matrix/) | Resultado de investigação com fontes |
| Automatização de equipa | [Verificação agendada de ligações na documentação](/pt/cases/use-cases/team-automation/scheduled-link-check/) · [Sugestões de triagem de Issues](/pt/cases/use-cases/team-automation/issue-triage-suggestions/) | Automatização leve de CI e tickets |

Prompts reutilizáveis em [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts) do repositório. Mais casos por domínio serão acrescentados a esta biblioteca.

## Direções de contribuição

- Passos reproduzíveis (repositório, ramo, comandos)
- Indicar cliente aplicável e data de verificação
- Não escrever narrativas de «sucesso à primeira» impossíveis de verificar

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzado com a estrutura atual da biblioteca de casos neste repositório, páginas de entrada por domínio, modelo de caso e entrada de prompts em examples; esta página só faz navegação «organizar casos por tipo de tarefa real».  
**Última verificação:** 2026-07-26
