---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / aplicação de ambiente de trabalho; CLI e IDE para preparação e testes"
  checkedAt: "2026-08-26"
title: Guia completo de tarefas agendadas
description: Escolher tarefas independentes ou dentro de uma conversa e configurar projeto local, worktree, permissões, prompt e revisão.
locale: pt
source_locale: zh-CN
source_revision: '532489c'
translation_status: reviewed
translated_at: "2026-09-20"
reviewed_at: 2026-10-26
---

A parte realmente difícil de uma tarefa agendada não é escolher a hora. É garantir que cada execução sem supervisão tem dados de entrada estáveis, permissões restritas, resultados fáceis de rever e condições de paragem.

![Ciclo seguro da verificação manual à execução agendada, revisão humana e ajuste](/illustrations/flow-scheduled-safety.webp)

## A quem se destina

- Pessoas que querem produzir relatórios diários ou semanais, verificar documentos ou acompanhar PR.
- Programadores que precisam de executar manutenção periódica num projeto local ou num worktree isolado.
- Responsáveis que avaliam permissões, tratamento de falhas e Skills partilhados pela equipe.

## Limites de suporte

| Ambiente | O que permite fazer | Limite principal |
|---|---|---|
| ChatGPT Web | Criar e gerir tarefas, consultar execuções; usar arquivos carregados, ferramentas ligadas, Skills e Plugins | Não acede diretamente a pastas do computador local |
| Aplicação de ambiente de trabalho ChatGPT | Criar e gerir tarefas; escolher um projeto local ou Git worktree | tarefas com arquivos locais exigem computador ligado, aplicação em execução e projeto existente |
| Codex CLI | Preparar e testar manualmente prompts, Skills e scripts | Não tem interface de gestão Scheduled |
| Extensão IDE | Verificar comandos e alterações no workspace | Não tem interface de gestão Scheduled |

## 1. Escolher uma tarefa independente ou dentro de uma conversa

### Scheduled task independente

Cada execução começa com o prompt guardado e aparece como uma execução separada em Scheduled. É adequada para relatórios diários ou semanais e verificações de estado independentes; uma tarefa pode abranger vários projetos.

### Scheduled task dentro de uma conversa

Regressa à mesma conversa segundo o horário definido e conserva o contexto existente. É adequada para verificar periodicamente trabalhos longos, acompanhar o estado de um PR, continuar uma investigação ou manter discussões anteriores.

Critério de escolha: se cada execução deve «começar de novo», escolha uma tarefa independente; se precisa de continuar o contexto do mesmo problema, escolha uma tarefa dentro da conversa.

## 2. Escolher os materiais da execução

### Executar na Web

Coloque as instruções duradouras no prompt da tarefa ou num Skill e disponibilize o material necessário em arquivos carregados, num Project ou em serviços ligados. Não escreva «ler latest.csv no meu ambiente de trabalho»: a Web não acede diretamente a caminhos locais.

### Usar um projeto local na aplicação de ambiente de trabalho

Num repositório Git, pode escolher:

- **Projeto local**: trabalha diretamente no checkout principal e pode tocar em arquivos que está a editar.
- **Worktree dedicado**: isola as alterações em segundo plano do trabalho ainda por concluir; é adequado para tarefas que modificam arquivos.

Projetos que não usam Git são executados diretamente na pasta do projeto. tarefas frequentes em worktrees podem acumular árvores de trabalho. Arquive execuções que já não são necessárias para evitar manter muitos worktrees sem intenção.

## 3. Verificar primeiro manualmente

Execute numa conversa normal exatamente o mesmo prompt, modelo, nível de raciocínio e ferramentas. Confirme pelo menos que:

- os dados de entrada continuam claros sem explicações no momento da execução;
- quando não há alterações, a tarefa termina em silêncio;
- uma pessoa consegue rever rapidamente o resultado;
- comandos, Skills e ferramentas ligadas funcionam;
- na falta de permissões ou materiais, a tarefa pára e explica o motivo em vez de adivinhar.

Inspecione as primeiras execuções agendadas antes de ajustar o prompt ou a frequência.

## 4. Um prompt de tarefa para adaptar

```text
Crie uma Scheduled task independente:

Nome: Verificação semanal de ligações quebradas na documentação
Hora: todas as segundas-feiras às 09:00, no fuso horário atual
Local de execução: worktree dedicado do projeto Git atual

Em cada execução:
1. Leia apenas docs/, src/content/docs/, examples/ e public/diagrams/.
2. Execute pnpm check:links.
3. Se a verificação passar, indique apenas o número de ficheiros e ligações verificados; não altere ficheiros.
4. Se falhar, liste «ficheiro de origem, destino quebrado, correção sugerida»; não corrija automaticamente as ligações.
5. Não aceda à Internet, não instale dependências, não faça commit nem push e não crie PR.
6. Se o comando não existir, faltar uma dependência ou o resultado for incerto, pare e identifique exatamente o que requer intervenção humana.

Condição de conclusão: termine esta execução após produzir um relatório passível de revisão; não repita a tentativa.
```

O prompt explicita horário, projeto, escopo de leitura, comando, caminhos de sucesso e falha, ações proibidas e condição de saída. O agendamento apenas volta a iniciar a tarefa; não substitui a sua descrição.

## 5. permissões e revisão humana

As tarefas agendadas correm sem supervisão e usam as definições predefinidas do sandbox.

| Modo de sandbox | Resultado habitual |
|---|---|
| read-only | Falham as chamadas para modificar arquivos, aceder à rede ou controlar aplicações locais |
| workspace-write | Pode escrever no workspace; por padrão falham a escrita fora dele, o acesso à rede e o controle de aplicações |

Comece com as permissões mais restritas que permitem concluir a tarefa. Se precisar de rede ou de acesso mais amplo a arquivos, defina uma allowlist explícita. Não atribua permissões elevadas a toda a tarefa apenas para eliminar uma falha.

Convém manter revisão humana para:

- enviar mensagens ou publicar conteúdo externamente;
- alterar o estado de produção;
- juntar PR ou fazer push para o branch principal;
- eliminar ou migrar em massa, ou alterar permissões;
- diff fora do escopo esperado ou testes falhados.

## 6. Definir «sem alterações», falha e paragem

Uma tarefa duradoura deve definir três percursos:

1. **Há resultados**: apresenta provas, gravidade e próximo passo.
2. **Sem alterações**: comunica resumidamente o escopo da verificação sem inventar problemas.
3. **Não é possível concluir**: explica quais os materiais ou permissões em falta, pára e espera por uma pessoa.

Para verificações periódicas dentro de uma conversa, defina também uma condição de fim, por exemplo: «parar quando o PR for integrado ou fechado, houver três erros iguais consecutivos ou for necessária aprovação humana».

## Uma Scheduled task não é CI orientada por eventos

Se a tarefa tiver de correr imediatamente após um `push`, a criação de um PR ou o fim de uma publicação, use um ponto de entrada orientado por eventos, como GitHub Actions, CI, webhook ou Codex SDK. Não trate uma «verificação a cada minuto» como um acionador de eventos preciso.

## Lista de verificação

- [ ] O prompt foi executado até ao fim numa conversa normal.
- [ ] Foi escolhida uma tarefa independente ou dentro de uma conversa.
- [ ] Os materiais Web ou o projeto local estarão disponíveis na altura da execução.
- [ ] O sandbox padrão é suficiente; qualquer permissão adicional tem justificação explícita.
- [ ] Foram definidos os percursos para resultados, ausência de alterações, falha e paragem.
- [ ] Uma pessoa verificou por amostragem as três primeiras execuções.
- [ ] Worktrees frequentes têm uma estratégia de arquivo e limpeza.
- [ ] As escritas importantes continuam a exigir confirmação humana.

## Fontes oficiais

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [OpenAI: Sandboxing](https://learn.chatgpt.com/docs/permissions/sandboxing)
