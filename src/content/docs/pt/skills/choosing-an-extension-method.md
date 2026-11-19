---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / App para desktop / Codex CLI / IDE (a disponibilidade varia conforme o mecanismo)"
  basis: "As responsabilidades, os pontos de acesso dos produtos e os limites de segurança foram conferidos com a documentação oficial da OpenAI sobre Skills, Plugins, MCP, Hooks e Scheduled tasks em 2026-08-25."
  checkedAt: "2026-08-25"
title: "Como escolher um método de extensão"
description: "Escolha entre prompt, AGENTS.md, Skill, MCP, Hook, Plugin e Scheduled task de acordo com o que precisa permanecer ou acontecer automaticamente."
locale: pt
source_locale: zh-CN
source_revision: 'ef86d5a'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Quando há muitos mecanismos de extensão, o erro mais comum é escolher primeiro o nome de uma tecnologia e depois procurar um problema que caiba nela. Uma ordem mais segura começa com a pergunta: **o que exatamente quero preservar, ou o que quero que aconteça automaticamente?**

Estes são os nomes que mais se confundem:

- Prompt
- `AGENTS.md`
- Skill
- MCP
- Plugin
- Scheduled task

Mesmo quando a intenção é “estender o Codex”, às vezes um único prompt é suficiente; só em outros casos é necessário um mecanismo mais complexo.

## Diagrama de escolha

![Diagrama para escolher um método de extensão do Codex](/illustrations/map-extension-selection.webp)

Esta não é uma árvore de decisões com opções mutuamente exclusivas. Um fluxo de trabalho consolidado pode usar `AGENTS.md`, Skill e MCP ao mesmo tempo. O diagrama ajuda a não atribuir a um mecanismo uma responsabilidade para a qual ele não é adequado.

## Sete perguntas para decidir

### 1. A necessidade vale apenas para a tarefa atual?

Comece com um prompt. Deixe claros o objetivo, as entradas, o escopo, os critérios de aceitação e as permissões. É a opção de menor custo e a mais fácil para observar o problema real.

### 2. A regra deve valer sempre que alguém trabalhar neste repositório?

Registre-a no `AGENTS.md`. Por exemplo: comandos de teste, estilo de código, diretórios que não podem ser modificados e regras para instalar dependências. Não transforme um pedido pontual em regra permanente do projeto.

### 3. tarefas semelhantes seguem etapas e produzem saídas estáveis?

Transforme o processo em um Skill. Ele é adequado para guardar instruções reutilizáveis, além de modelos, referências, recursos ou scripts auxiliares quando necessário. Se o processo ainda não tem critérios de sucesso estáveis, continue experimentando com prompts.

### 4. São necessários dados ou ações fora do repositório?

Avalie MCP ou um Connector. Primeiro, liste as ferramentas e os dados realmente necessários; dê preferência a acesso somente de leitura, escopo mínimo e configuração auditável. Se arquivos locais ou comandos existentes resolverem o problema, não é preciso acrescentar uma conexão externa.

### 5. É preciso verificar algo em um ponto fixo do ciclo de vida?

Use um Hook. Exemplos: verificar comandos perigosos antes de chamar uma ferramenta, examinar um patch após a escrita ou registrar um resumo ao final da sessão. Hooks são executados automaticamente; por isso, é indispensável testar o comportamento diante de tempo limite, falhas e falsos positivos.

### 6. É preciso distribuir um conjunto de capacidades para outras pessoas?

Considere um Plugin. Ele é uma camada de composição e distribuição que pode incluir Skills, conectores, MCP, Hooks e modelos de Scheduled task. Instalar um Plugin não significa confiar automaticamente nas conexões, nos scripts ou nos Hooks que ele contém.

### 7. A tarefa já funciona de modo estável quando executada manualmente e precisa se repetir no tempo?

Só então crie uma Scheduled task. Verifique primeiro o prompt, o Skill, as permissões e o formato do resultado em uma tarefa comum. Após programar a execução, acompanhe as primeiras rodadas e mantenha a publicação ou a mesclagem sujeita à aprovação humana.

## Exemplos de cenários

| Cenário | Combinação recomendada |
|---|---|
| Padronizar testes e regras de commit | `AGENTS.md` |
| Lista de revisão antes de cada mesclagem | Skill `pr-review` |
| Obter o contexto de um ticket do Linear | MCP + prompt da tarefa |
| Relatório semanal de dependências | Scheduled task → criar uma issue em rascunho |
| Procurar credenciais em um patch depois de escrever arquivos | Hook ou CI; em cenários de alto risco, os dois |
| Instalar para toda a equipe o fluxo de revisão e as ferramentas do GitHub | Plugin (revisar permissões e Hooks antes de instalar) |
| Gerar semanalmente um relatório de riscos de dependências | Skill verificado + Scheduled task + revisão humana |
| Revisar em paralelo segurança, testes e facilidade de manutenção | Vários subagents somente de leitura; o Agent principal consolida os resultados |

## Dimensões de custo

| Mecanismo | Custo de criação | Custo de manutenção | Risco de segurança |
|---|---|---|---|
| Prompt | Baixo | Baixo | Baixo |
| `AGENTS.md` | Médio | Médio | Baixo |
| Skill | Médio | Médio | Baixo–médio |
| MCP | Alto | Alto | Médio–alto |
| Hook | Médio | Médio–alto | Médio–alto |
| Plugin | Baixo para instalar / alto para criar | Médio–alto | Médio–alto |
| Scheduled task | Médio | Alto | Alto |

## Antipadrões

- **Excesso de Skills:** instalar dezenas de Skills cujas descrições competem pela mesma correspondência.
- **MCP como solução para tudo:** integrar uma API à força quando `git` já resolveria.
- **Agendamento sem aceitação:** alterar código em horários programados sem condição de parada, evidência da execução nem revisão humana.
- **Reinventar a roda:** criar um MCP próprio quando já existe um Connector oficial.
- **Regra fora do lugar:** escrever um pedido pontual no `AGENTS.md` e impor uma restrição antiga a todas as tarefas futuras.
- **Hook sobrecarregado:** colocar um processo de negócio demorado em toda chamada de ferramenta, tornando o trabalho diário lento ou sujeito a bloqueios falsos.

## Perguntas frequentes

### 1. Devo começar instalando um Plugin e conectando MCP?

Muitos problemas podem ser resolvidos primeiro com prompts claros, controle de escopo e um bom uso do `AGENTS.md`.

### 2. Quantas repetições justificam criar um Skill?

Não há um número fixo. A frequência é apenas um indício; mais importantes são a estabilidade das etapas, a clareza dos critérios de sucesso e se o custo de falhas justifica verificações automáticas.

### 3. Por qual tipo de mecanismo costuma ser melhor começar?

Na maioria dos casos, o ponto de partida estará entre estas três opções:

- Prompt
- `AGENTS.md`
- Skill

Em geral, ainda não é necessário começar com MCP ou automação sem supervisão.

O importante é que a responsabilidade corresponda ao mecanismo, que as permissões sejam mínimas e que o resultado possa ser verificado.

## Exercício mínimo de aplicação

Tome como exemplo a “revisão do diff atual antes da mesclagem”:

1. Execute duas vezes a tarefa com um prompt e anote os itens de verificação que precisou repetir.
2. Registre os comandos fixos do repositório no `AGENTS.md`, como `pnpm test`, e a proibição de alterar diretórios gerados.
3. Transforme as etapas da revisão, os níveis de gravidade e o formato da resposta em um Skill `pr-review`.
4. Acrescente MCP ou Connector somente se precisar publicar comentários em PRs do GitHub ou consultar o estado do CI.
5. Acrescente Hook ou Scheduled task somente se for necessária uma verificação automática em um evento ou horário fixo.
6. Quando várias equipes precisarem instalar esse conjunto, empacote as capacidades em um Plugin.

Sempre que adicionar uma camada, responda de novo a três perguntas: que permissão foi acrescentada, como verificar seu funcionamento e como desativá-la ou revertê-la?

## Leitura complementar

- [Mapa das capacidades de extensão](/pt/skills/capability-map/)
- [Padrões de aprovação humana](/pt/cases/workflows/human-approval-patterns/)
- [Transformar um fluxo de trabalho em Skill](/pt/cases/workflows/turn-a-workflow-into-a-skill/) (página do roteiro)

## Fontes oficiais

- [Skills e Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Criar Codex Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
