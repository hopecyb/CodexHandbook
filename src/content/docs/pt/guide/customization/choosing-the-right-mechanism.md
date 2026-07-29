---
title: Escolher o mecanismo adequado
description: Prompt temporário, AGENTS.md, memória, Skill, MCP — em que camada colocar cada um, com um quadro de decisão.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

O problema de muitas equipas é **colocar a mesma informação no sítio errado**: regras que deveriam estar no repositório vão para o chat; fluxos que deveriam ser Skills enchem `AGENTS.md`; dados que deveriam ser só de leitura recebem MCP com Permissões altas.

Aqui interessa uma pergunta prática:

> Quando percebe que «isto vai voltar a acontecer», em que camada o deve ancorar?

## Tabela resumida

| Mecanismo | O que encaixa melhor |
|---|---|
| Prompt único | Objetivo, restrições e critérios de aceitação só para esta Tarefa |
| `AGENTS.md` | Regras de colaboração a nível de repositório e restrições de longo prazo |
| Memória | Preferências pessoais ou poucos factos não sensíveis repetidos entre sessões |
| Skill | Fluxos reutilizáveis, checklists, rotinas especializadas |
| MCP | Acesso a Ferramentas externas, fontes de dados e capacidades de sistema |

Se a tabela não chegar, continue a ler.

## Método de decisão em cinco passos

### 1. Informação válida só para a Tarefa atual

Este tipo de informação vai prioritariamente no **Prompt desta vez**.

Adequado:

- «Desta vez só altere `docs/`, não toque no código»
- «Saída: resumo em português; no fim, uma pergunta por confirmar»
- «Analise primeiro a causa; não altere ficheiros de imediato»

Inadequado:

- A equipa exige `pnpm test` a longo prazo
- Diretórios proibidos no repositório
- Toda a revisão de PR deve seguir o mesmo modelo de saída

Essas regras de longo prazo devem descer de camada.

### 2. É regra de colaboração do projeto ou hábito pessoal?

Se for uma **regra que todos os colaboradores devem conhecer**, coloque em [`AGENTS.md`](/guide/customization/agents-md/what-is-agents-md/).

Por exemplo:

- Comandos de teste, lint e build
- Que diretórios não se tocam
- Regras de mensagem de commit ou de aceitação de PR
- Normas especiais de subdiretórios num monorepo

Se for só **a sua preferência** — «explicar em português», «conclusão primeiro, detalhes depois» — encaixa melhor em [memória](/guide/customization/memories-and-persistent-context/) ou configuração pessoal.

Regra prática:

- O que precisa de entrar em review de PR → prioridade ao repositório
- O que os outros não verem não importa → aí considere a camada pessoal

### 3. É «regra» ou «passos»?

Muita documentação falha porque mistura regras e passos.

| Se pertence a… | Encaixa melhor em |
|---|---|
| «Não faça push direto para main» | `AGENTS.md` |
| «No review, veja primeiro testes, depois riscos, depois regressão» | Skill |
| «Antes de publicar, corra estes 4 comandos» | Skill ou script |
| «Só permitir acesso só de leitura a dados de issues» | MCP + configuração de Permissões |

Ao decidir, fixe estes dois pontos:

- A **regra** responde «o que se pode e o que não se pode»
- Os **passos** respondem «como se costuma fazer este tipo de coisa»

Passos reutilizáveis encaixam normalmente melhor como [Skill](/skills/overview/).

## Combinações comuns, não escolha exclusiva

Equipas maduras raramente usam um só mecanismo — combinam-nos.

### Combinação 1: `AGENTS.md` + Skill

Adequado: revisão de código, verificação de release, diagnóstico de falhas.

Divisão:

- `AGENTS.md` escreve restrições rígidas: não fazer merge automático, que verificações são obrigatórias
- Skill escreve o fluxo: como rever, que modelo de saída, como classificar problemas

### Combinação 2: Skill + MCP

Adequado: ler tickets, consultar bases de dados, obter mockups, gerar relatórios semanais.

Divisão:

- Skill define a ordem de execução e o formato de saída
- MCP define «a que se liga, o que se consulta, o que se pode alterar»

Pode vê-los assim:

> Skill é o manual de trabalho; MCP é a caixa de Ferramentas ligada.

### Combinação 3: `AGENTS.md` + memória

Adequado: regras de equipa estáveis, mas hábitos de expressão diferentes por pessoa.

Divisão:

- `AGENTS.md` escreve normas públicas da equipa
- A memória guarda preferências pessoais: idioma, estilo de explicação, estrutura de saída predefinida

Não inverta. Regras de equipa não devem existir só na memória de alguém.

## Uma matriz de decisão mais prática

| Pergunta | Sim | Não |
|---|---|---|
| Afeta só a Tarefa atual? | Prompt | Continuar |
| Todos devem cumprir? | `AGENTS.md` / configuração do projeto | Continuar |
| É um fluxo repetível? | Skill | Continuar |
| Precisa de dados externos em tempo real ou de operações? | MCP | Continuar |
| É só preferência pessoal de longo prazo? | Memória / configuração de utilizador | Prompt |

Quando um requisito cai nas duas colunas ao mesmo tempo, normalmente deve **dividir camadas**, não forçar tudo no mesmo sítio.

## Três exemplos típicos

### Exemplo 1: a equipa esquece sempre os testes de regressão

Não diga só no grupo «lembrem-se de correr os testes».

Abordagem mais estável:

1. Em `AGENTS.md`, declare «alterações de lógica de negócio devem correr `pnpm test`»
2. Se o fluxo for complexo, acrescente um Skill de execução de testes
3. Use a CI como última rede de segurança

### Exemplo 2: em cada PR review quer a mesma estrutura de saída do Codex

Não cole o modelo inteiro de cada vez.

Abordagem mais estável:

1. Faça da estrutura de saída um Skill
2. Em `description`, deixe claro «usar quando o utilizador diga review, revisão, verificação pré-merge»
3. Se a equipa o usar de forma unificada, documente o caminho do Skill no projeto

### Exemplo 3: precisa de ler tickets do Linear e depois alterar código

Não cole o Token da API na conversa.

Abordagem mais estável:

1. Ligue o Linear via MCP
2. Permissões só de leitura por defeito
3. Se quiser um fluxo fixo, use um Skill: «ler o ticket primeiro, depois o código, depois propor o plano»

## Armadilhas mais comuns

### Transformar `AGENTS.md` numa enciclopédia

Resultado: restrições rígidas ficam pouco visíveis; comandos e zonas proibidas importantes afogam-se. `AGENTS.md` encaixa melhor curto, rígido e executável.

### Tratar Skill como «caixa de arrumação universal»

Um Skill que mistura review, release, debug e relatório diário torna-se difícil de acionar e de manter.

### Tratar MCP como resposta predefinida

Informação que se lê diretamente do repositório não precisa de uma Ferramenta externa só por «parecer avançado». MCP é extensão de capacidade, não prémio de complexidade.

### Deixar a memória carregar factos de equipa

Quem os memorizou na sua conta, quando sai ou muda de máquina as regras desaparecem. Esse tipo de informação deve voltar ao repositório.

## Ordem recomendada de implementação

Se a equipa ainda estiver desorganizada, pode convergir nesta ordem:

1. Escreva primeiro um `AGENTS.md` mínimo viável
2. Converta em Skills os fluxos repetidos três ou mais vezes
3. Só introduza MCP quando precisar de facto de sistemas externos
4. Por último organize memória e preferências pessoais

Assim estabiliza primeiro o **consenso de colaboração** e depois amplia capacidades.

## Leitura complementar

- [O que é AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)
- [Memórias e Contexto persistente](/guide/customization/memories-and-persistent-context/)
- [Visão geral de Skills](/skills/overview/)
- [Visão geral de MCP](/skills/mcp/mcp-overview/)
- [Como escolher o método de extensão](/skills/choosing-an-extension-method/)

## Referências
- Documentação oficial OpenAI Codex (conforme a versão atual)
---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com capítulos já verificados deste manual sobre `AGENTS.md`, Contexto, Skills, MCP e qualidade; esta página mantém apenas o quadro estável de decisão: «requisitos temporários, regras de projeto, preferências pessoais, encapsulamento de fluxos e capacidades externas devem viver em camadas diferentes».  
**Última verificação:** 2026-07-26
