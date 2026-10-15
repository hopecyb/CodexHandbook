---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: Web e Cloud (visão geral)
description: O percurso das tarefas remotas, da ligação ao repositório e do ambiente reproduzível à revisão e ao Pull Request.
locale: pt
source_locale: zh-CN
source_revision: 86fa0ac
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 13
---

O Codex Cloud executa tarefas de programação em ambientes de nuvem isolados. É adequado para tarefas longas em segundo plano, tentativas paralelas e trabalho iniciado a partir do GitHub, GitLab (Beta), Linear ou Slack. Não controla remotamente o seu computador nem vê automaticamente os ficheiros locais que ainda não foram enviados para o repositório remoto.

![Ilustração: um repositório no navegador se conecta a contêineres isolados na nuvem; o resultado volta como um pull request com marca verde](/illustrations/web-and-cloud.webp)

## Etapas de uma tarefa Cloud

```text
Iniciar sessão com o ChatGPT
  → ligar o GitHub / GitLab
  → criar um ambiente para o repositório
  → fazer checkout do branch ou commit escolhido
  → instalar dependências com o setup script
  → deixar o Agent modificar e verificar dentro da política de rede
  → examinar o resumo, os logs e o diff
  → pedir alterações ou criar um PR
  → juntar após revisão humana e CI
```

O valor do Cloud está no isolamento, na reprodutibilidade e no paralelismo; a revisão continua a ser necessária.

## Local ou Cloud

| Escolher local | Escolher Cloud |
|---|---|
| Depende de ficheiros ainda não confirmados ou de serviços locais | Os dados de entrada já estão no repositório remoto |
| É preciso interagir com um processo em tempo real | A tarefa pode correr autonomamente em segundo plano |
| Alteração rápida e de âmbito reduzido | Compilação, testes ou tentativas paralelas com várias etapas |
| Uma ferramenta necessária só existe neste computador | O ambiente pode ser recriado por scripts |

Leia primeiro [Execução local e na nuvem](/pt/guide/foundations/local-vs-cloud/) para compreender os limites de execução.

## Ordem de aprendizagem recomendada

1. [Ligar o GitHub](/pt/guide/web-and-cloud/connect-github/): autorizar apenas os repositórios necessários;
2. [Ambientes Cloud](/pt/guide/web-and-cloud/cloud-environments/): fixar ferramentas, versões e setup;
3. [Secrets e variáveis de ambiente](/pt/guide/web-and-cloud/secrets-and-variables/): distinguir Secrets da instalação das variáveis usadas na execução;
4. [Acesso à Internet](/pt/guide/web-and-cloud/internet-access/): o Agent começa sem acesso à rede; abrir apenas os domínios e métodos necessários;
5. [Delegar e acompanhar](/pt/guide/web-and-cloud/delegate-and-follow-up/): definir objetivo, restrições e critérios de aceitação;
6. [Criar Pull Requests](/pt/guide/web-and-cloud/create-pull-requests/) e [Revisão de código](/pt/guide/web-and-cloud/code-review/): transformar o resultado num artefacto pronto para integrar;
7. [Resolver problemas no Cloud](/pt/guide/web-and-cloud/troubleshooting/): localizar falhas nas camadas do repositório, setup, rede e tarefa.

Se iniciar a tarefa a partir da aplicação de ambiente de trabalho ou do IDE, consulte também [Tarefas locais e na nuvem](/pt/guide/desktop-app/local-and-cloud-tasks/) e [Tarefas Cloud no IDE](/pt/guide/ide/cloud-task-workflow/).

## Primeiro exercício

Escolha um repositório de teste sem credenciais de produção. Peça ao Codex apenas que corrija ligações da documentação e execute a verificação de ligações. O êxito significa que o ambiente arrancou, o diff inclui apenas os ficheiros esperados, a saída do comando está visível e é possível criar um PR com o resultado. A indicação «concluído» na página não deve ser o único critério de aceitação.

## Fontes oficiais

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Ambientes Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)
