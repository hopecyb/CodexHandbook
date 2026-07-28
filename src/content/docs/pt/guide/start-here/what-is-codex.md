---
title: O que é o Codex
description: Explica em linguagem simples o que o Codex pode e não pode fazer, e as principais entradas de uso.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 2
---

O Codex é um **Agent de programação e trabalho com IA** da OpenAI. Você dá um objetivo; ele combina arquivos do projeto, Ferramentas e sua Aprovação para ler conteúdo, alterar conteúdo, rodar comandos, gerar resultados e então entregar o processo e as mudanças para você revisar.

Ele se parece mais com um colega digital que usa Ferramentas. Você define o objetivo, os limites e os critérios de aceite; ele pesquisa, altera arquivos e executa passos — mas a decisão final continua sendo sua.

A documentação oficial do produto é a [OpenAI Codex](https://developers.openai.com/codex); este handbook é um guia comunitário open source para aprender de forma sistemática e começar na prática. Não substitui a documentação oficial.

## Em que difere de um chat de IA comum

Muita gente, ao ver o Codex pela primeira vez, acha que é «só um chat de IA um pouco mais forte». A diferença principal está na capacidade de execução.

| O que você costuma usar | Como entender |
|---|---|
| Chatbot comum | Dá sugestões, explica conceitos, escreve um trecho |
| Codex | Além de responder, pode **ler arquivos, alterar arquivos, rodar comandos e gerar Artefatos** |

Ferramentas de chat comuns ficam sobretudo na resposta; o Codex, dentro do que você autoriza, age de verdade.

## Que tipo de Tarefa vale entregar a ele

Se a Tarefa, além de «conversar», precisa ler material, alterar coisas, rodar passos e produzir resultado, combina bem com o Codex.

Se você só quer um conceito, uma frase de inspiração ou uma sugestão genérica, um chat de IA comum também resolve.

## Em que situações dá para usar

Mesmo sem ser programador, você pode entender por estes cenários:

- **Ler e organizar material**: resumir documentos, atas, capturas de tela, planilhas
- **Escrever e editar conteúdo**: polir artigos, completar sumários, ajustar documentação
- **Fazer projetos pequenos**: montar uma página, alterar uma configuração, completar um template
- **Investigar e corrigir problemas**: ajudar a localizar o erro e o que olhar em seguida
- **Automatizar trabalho repetitivo**: deixar que ele rode primeiro um fluxo fixo

Quem programa pode encaixá-lo no fluxo de desenvolvimento; quem não programa pode tratá-lo como um assistente que executa passos.

## O que ele pode fazer

- **Compreender**: resumir informação de repositórios, documentos, tabelas e capturas
- **Criar e modificar**: escrever textos, alterar código, gerar páginas e configurações
- **Executar**: sob sua autorização, rodar comandos de terminal, buscar e navegar
- **Colaborar**: continuar a Tarefa entre App, CLI, IDE, Cloud e outras entradas
- **Estender**: conectar fluxos repetíveis e sistemas externos via Skills, Plugins, MCP, Hooks etc. (capítulos avançados virão depois)

## O que ele não pode fazer (importante)

- Não substitui sua responsabilidade final sobre fatos, segurança e decisões de negócio
- Não garante que a primeira geração esteja totalmente correta; o resultado precisa ser verificável
- Não pode ultrapassar Sandbox, rede ou políticas da organização sem autorização
- Não deve ser tratado como «pipeline de publicação automática sem aceite»

## Julgamento básico ao usar

Trate o Codex como assistente; não entregue a responsabilidade junto.

Deixe-o fazer, investigar e alterar primeiro — e no fim confirme você mesmo:

- Ele alterou o lugar certo?
- Entendeu mal o seu objetivo?
- Os fatos que apresentou são confiáveis?
- As mudanças podem trazer efeitos colaterais?

## Fluxo comum

O fluxo costuma ser assim:

1. Você enuncia um objetivo
2. Ele responde ou apresenta um plano
3. Se for alterar arquivos ou rodar comandos, pode pedir sua Aprovação
4. Ao terminar, informa o que mudou
5. Você verifica se o resultado corresponde ao esperado

O exemplo completo deste fluxo está em [Rodar a primeira Tarefa](/guide/getting-started/run-your-first-task/).

## Principais entradas de uso

| Entrada | Ideal para |
|---|---|
| App desktop | Padrão para iniciantes; projetos, Tarefas e revisão de Diff visual |
| CLI | Usuários de terminal, scripts e automação |
| Extensão IDE | Trabalhar no editor com arquivos abertos e seleção |
| Web / Cloud | Conectar repositórios, ambientes na nuvem e Tarefas longas |
| Mobile e remoto | Monitorar, aprovar e acompanhar de forma leve |

Tabela comparativa em [Comparação de recursos](/guide/reference/feature-comparison/). Relações de conceitos em [Mapa de capacidades](/guide/start-here/).

## Próximos passos

Se quiser fixar só três pontos, lembre:

1. O Codex não é só chat — ele também executa ações após autorização
2. A Tarefa precisa deixar claro o objetivo, os limites e o que conta como «pronto»
3. Todo resultado precisa ser verificado; não confie às cegas

Páginas relacionadas:

1. [Escolher o cliente Codex](/guide/choose-your-client/)
2. [Terminologia para iniciantes](/guide/start-here/terminology-for-beginners/)
3. [Rodar a primeira Tarefa](/guide/getting-started/run-your-first-task/)


---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica o posicionamento básico do Codex, Tarefas adequadas e o modo de colaboração; links internos e formulações conceituais foram revisados, e o texto não mantém valores padrão de produto granulares e voláteis.  
**Última verificação:** 2026-07-26
