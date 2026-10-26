---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / App para desktop / Codex CLI / IDE (consulte no texto a disponibilidade de cada mecanismo)"
  basis: "O modelo de responsabilidades e os limites dos pontos de acesso foram reorganizados com base na documentação oficial da OpenAI sobre Skills, Plugins, MCP, Hooks, Scheduled tasks e Subagents, acessível em 2026-08-25."
  checkedAt: "2026-08-25"
title: "Mapa das capacidades de extensão"
description: "Entenda o sistema de extensões do Codex por oito responsabilidades: tarefa, regras, processo, ferramentas, proteção, distribuição, acionamento e trabalho paralelo."
locale: pt
source_locale: zh-CN
source_revision: "183812c"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

É fácil confundir os mecanismos de extensão porque eles costumam aparecer no mesmo fluxo de trabalho, embora resolvam tipos diferentes de problema.

Esta página apresenta primeiro uma visão do sistema: prompts e `AGENTS.md` fornecem as tarefas e regras; Skills fornecem processos reutilizáveis; MCP oferece ferramentas externas; Hooks atuam em pontos do ciclo de vida; Plugins combinam e distribuem capacidades; Scheduled tasks iniciam execuções no horário definido. Esses mecanismos podem ser combinados, sem uma ordem fixa de “evolução”.

## Arquitetura do sistema

![Arquitetura de um sistema de trabalho reutilizável com Codex](/diagrams/codex-work-system-architecture-pt.svg)

Ao ler o diagrama, observe três pontos:

- **A descrição da tarefa** determina o que fazer nesta execução; as regras do projeto determinam o que deve ser seguido em todas as execuções.
- **As capacidades de execução** podem ampliar o alcance do trabalho, mas não provam automaticamente que o resultado está correto. MCP, subagents e scripts também estão sujeitos a permissões e critérios de aceitação.
- **Distribuição e acionamento** não são o fluxo de trabalho em si. Um Plugin reúne capacidades; uma Scheduled task inicia uma execução no horário definido.

## Oito tipos de responsabilidade

| Responsabilidade | Mecanismo | Mais adequado para | Não se encarrega de |
|---|---|---|---|
| tarefa atual | Prompt | Definir o que fazer agora, o escopo e a aceitação | Regras permanentes do projeto |
| Regras persistentes | `AGENTS.md` | Comandos do repositório, convenções e limites de diretórios | Todas as etapas de uma classe de tarefas |
| Processo reutilizável | Skill | Etapas estáveis, referências, modelos e scripts auxiliares | Obter, por si só, permissão para sistemas externos |
| ferramentas externas | MCP / Connector | Permitir que o Codex acesse dados e execute ações fora do repositório | Decidir se o objetivo de negócio está correto |
| Proteção no ciclo de vida | Hook | Registrar, verificar, acrescentar contexto ou bloquear antes e depois de eventos da sessão ou chamadas de ferramenta | Substituir testes e revisão humana |
| Composição e distribuição | Plugin | Empacotar Skills, conectores, MCP, Hooks e modelos de tarefa | Tornar todos os componentes automaticamente confiáveis |
| Acionamento por tempo | Scheduled task | Executar periodicamente uma tarefa já verificada | Substituir prompts claros e condições de parada |
| Divisão paralela do trabalho | Subagent | Delegar investigação, testes ou revisão independentes | Eliminar conflitos de escrita e custos de coordenação |

## Como combinar essas capacidades em uma tarefa

Suponha que uma equipe verifique semanalmente os riscos das dependências:

1. O `AGENTS.md` define o gerenciador de pacotes permitido, os comandos de teste e os diretórios que não podem ser alterados.
2. Um Skill `dependency-audit` fixa as etapas de levantamento das dependências, consulta aos avisos, classificação de riscos e verificação.
3. O MCP do GitHub ou do registro de pacotes fornece informações externas; dê preferência a permissões somente de leitura.
4. Um Hook pode impedir a saída de credenciais reais ou registrar chamadas a ferramentas externas.
5. Um Plugin distribui o Skill, a configuração do MCP e o Hook para a equipe.
6. Uma Scheduled task inicia a execução toda semana e cria apenas um relatório ou uma issue em rascunho, para revisão humana antes da publicação.

A ausência de uma dessas camadas não torna a solução “menos avançada”. Para uma verificação local e pontual das dependências, um prompt claro e os comandos existentes no terminal talvez sejam suficientes.

## Correspondências comuns

| Necessidade | Escolha sugerida |
|---|---|
| Unificar o estilo do código e os comandos de teste | `AGENTS.md` |
| Padronizar o processo de revisão de PRs | Skill |
| Ler tickets do Jira ou Linear | MCP |
| Instalar um conjunto de integrações para toda a equipe | Plugin |
| Procurar credenciais antes de cada commit | Hooks |
| Gerar automaticamente um rascunho de relatório toda segunda-feira | Automations (com publicação por uma pessoa) |

## De uma execução bem-sucedida a um recurso da equipe

Use a sequência abaixo para decidir se vale a pena consolidar o processo:

| Etapa | Forma | Quando faz sentido |
|---|---|---|
| Prompt de uso único | Descrição da tarefa na conversa atual | O trabalho será feito uma vez, ou o problema ainda está sendo explorado |
| Modelo | Estrutura fixa de “objetivo, contexto, restrições e aceitação” | A classe de tarefa se repete, mas as etapas ainda estão mudando |
| Skill | `SKILL.md` com modelos, referências ou scripts | O processo está estável e os critérios de sucesso estão claros |
| Plugin | Pacote que combina Skills, conectores, MCP, Hooks e modelos | É preciso padronizar instalação, atualizações e governança |
| Scheduled task | tarefa salva, regra de horário e histórico de execuções | O trabalho já foi verificado manualmente e vale a pena repeti-lo periodicamente |

MCP, Hooks e subagents não são etapas obrigatórias dessa sequência. Adicione-os apenas quando a tarefa realmente exigir ferramentas externas, proteção em pontos do ciclo de vida ou divisão paralela do trabalho.

Consulte a lógica detalhada em [Como escolher um método de extensão](/pt/skills/choosing-an-extension-method/).

## Limites atuais dos produtos

- Um Codex Skill é definido por um diretório que contém `SKILL.md` e pode incluir scripts, referências e outros recursos; o Codex carrega as instruções completas quando necessário.
- O App para desktop, o Codex CLI e a extensão para IDE compartilham a configuração de MCP no mesmo host do Codex.
- Atualmente, os Plugins podem ser usados nos pontos de acesso compatíveis do ChatGPT, na experiência do Codex para desktop e no Codex CLI; a extensão para IDE não oferece navegação nem uso de Plugins.
- Scheduled tasks são criadas e gerenciadas pelo ChatGPT Web ou pelo App para desktop. O CLI e a IDE podem ajudar a testar previamente prompts, Skills ou scripts, mas não oferecem uma interface para gerenciar Scheduled tasks.
- Subagents são adequados para investigação, testes e revisão independentes em modo somente de leitura; a escrita paralela nos mesmos arquivos aumenta o custo dos conflitos.

Os pontos de acesso dos produtos ainda podem mudar. Antes de fazer uma configuração específica, consulte a [comparação de funcionalidades](/pt/guide/reference/feature-comparison/) e as fontes oficiais abaixo.

## Fontes oficiais

- [Skills e Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Criar Codex Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [Subagents do Codex](https://learn.chatgpt.com/docs/agent-configuration/subagents)
