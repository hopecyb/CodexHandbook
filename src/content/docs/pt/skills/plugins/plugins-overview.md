---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / aplicação de ambiente de trabalho / Mobile; Codex de ambiente de trabalho e CLI; a extensão IDE não suporta Plugins"
  checkedAt: "2026-08-26"
title: Visão geral dos Plugins
description: Compreender os componentes, os ambientes suportados, a instalação, a verificação e os limites de confiança dos Plugins.
locale: pt
source_locale: zh-CN
source_revision: 4efe5a8
translation_status: draft
translated_at: "2026-09-20"
---

O ChatGPT e o Codex usam o mesmo catálogo público de Plugins. Um Plugin reúne capacidades relacionadas num fluxo de trabalho que se pode descobrir e instalar; não inventa um novo protocolo de chamadas de ferramentas.

![Ilustração: pacotes de extensão com laço seguem num trilho até várias estações; um é aberto e outro removido de forma limpa](/illustrations/plugins-overview.webp)

## O que um Plugin pode incluir

| Componente | Função | O que deve verificar quem instala |
|---|---|---|
| Skills | Passos, referências e scripts reutilizáveis | Se as instruções servem para a tarefa atual e se os scripts são de confiança |
| Connectors | Ligação ao GitHub, Slack, Google Drive e outros serviços | Âmbito OAuth, ações de leitura/escrita e dados externos abrangidos |
| Servidores MCP | Definir ferramentas, autenticação e devolução de dados estruturados | Origem do servidor, lista de ferramentas, logs e permissões |
| Extensões do browser | Capacidade de browser para um fluxo específico | Âmbito e necessidade do acesso ao browser |
| Hooks | Executar comandos ou ferramentas MCP em pontos do ciclo de vida | Rever e aprovar a definição exata antes de ativar |
| Modelos de Scheduled task | Ponto de partida reutilizável nos ambientes que suportam tarefas agendadas | Frequência, permissões, condição de saída e revisão humana |

## Diferença entre Plugin, Skill e MCP

| Mecanismo | Pergunta principal | Exemplo num conjunto de revisão de PR |
|---|---|---|
| Skill | Que passos seguir? | Ler o diff, verificar as provas, ordenar riscos |
| MCP / Connector | Que ferramentas externas se podem chamar? | Ler um PR do GitHub e os seus comentários |
| Hook | Em que momento do ciclo de vida se deve verificar? | Procurar segredos depois de escrever um ficheiro |
| Plugin | Como instalar e distribuir estas capacidades em conjunto? | «Pacote de revisão de PR» da equipa |

O Plugin é a camada de distribuição, não a última etapa da execução. Consulte o [mapa das capacidades de extensão](/pt/skills/capability-map/).

## Instalar e verificar pela primeira vez

### ChatGPT Web / aplicação de ambiente de trabalho

1. Abra o separador Plugins.
2. Veja o publicador, a descrição e as capacidades incluídas.
3. Instale; se for pedida ligação a um serviço externo, reveja separadamente o âmbito da autorização.
4. Faça uma verificação de baixo risco numa nova tarefa Chat, Work ou Codex.

### Codex CLI

1. Introduza `/plugins` para abrir o navegador de Plugins.
2. Instale a partir de um marketplace configurado.
3. **Inicie uma nova sessão** e só então verifique o Skill ou a ferramenta instalados com o pacote.

A extensão IDE não suporta atualmente Plugins. Não procure resolver a «ausência de entrada no IDE» como se fosse uma avaria; use a aplicação de ambiente de trabalho ChatGPT ou o Codex CLI para gerir Plugins.

## Prompt de verificação de baixo risco

```text
Examine apenas o <plugin-name> que acabei de instalar; não faça alterações:
1. Liste os Skills e as ferramentas desse Plugin relevantes para esta tarefa.
2. Indique quais são só de leitura e quais podem causar efeitos externos.
3. Faça uma chamada mínima com dados de teste ou uma consulta só de leitura.
4. Diga qual componente foi realmente usado e que autorizações ainda precisam de confirmação humana.
```

Se o Plugin precisar de uma ligação externa, na primeira verificação não envie mensagens, altere estados, apague dados nem escreva muitos ficheiros.

## Processo de adoção pela equipa

1. **Inventariar os componentes**: listar Skills, conectores, MCP, extensões de browser, Hooks e modelos.
2. **Verificar a origem**: confirmar marketplace, repositório, publicador e política de atualização.
3. **Autorizar o mínimo**: testar com conta de ensaio e âmbitos só de leitura.
4. **Fazer um piloto isolado**: começar num projeto não produtivo ou numa pequena equipa.
5. **Rever os Hooks**: usar `/hooks` para verificar o hash e o comportamento dos Hooks incluídos no Plugin.
6. **Documentar a saída**: registar como desativar, desinstalar, reverter e revogar OAuth.

## Limites a não ignorar

- A instalação ter sido bem-sucedida não prova que os componentes são seguros ou adequados aos dados atuais.
- Um Plugin pode pedir ligação a serviços externos; conceder essa autorização é um passo independente e de risco elevado.
- Os Hooks de um Plugin correm juntamente com Hooks correspondentes de outras origens; não substituem automaticamente os existentes.
- O administrador do workspace pode controlar os Plugins e ferramentas disponíveis; o catálogo visível a um utilizador não equivale ao que a organização permite.
- Em Mobile, podem usar-se os Plugins da conta, mas não se deve pressupor uma interface de gestão completa.

## Quando não é necessário criar um Plugin

- Só existe um `SKILL.md` simples, sem problema de combinação ou distribuição.
- Trata-se de um script pessoal pontual ainda em experimentação rápida.
- As permissões e a política de atualização ainda não estão estáveis.
- Os utilizadores pretendidos trabalham apenas na extensão IDE.

Em geral, é mais fácil rever um Skill ou um fluxo MCP isolado, torná-lo estável e só depois considerar a sua distribuição em conjunto.

## Lista de verificação

- [ ] O ambiente de destino suporta Plugins.
- [ ] O publicador e a origem são rastreáveis.
- [ ] As ligações externas e os âmbitos OAuth foram revistos.
- [ ] Os Hooks do Plugin foram revistos e aprovados.
- [ ] Uma tarefa mínima só de leitura foi concluída com sucesso.
- [ ] Uma nova sessão encontra o Skill ou a ferramenta esperados.
- [ ] A equipa documentou desativação, reversão e revogação de autorizações.

## Fontes oficiais

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)
