---
title: "Padrões de aprovação humana"
description: "Distinga autorização da tarefa de aprovação de ferramenta; prepare um resultado revisável antes de pausar para uma ação concreta que exija autorização."
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Foram verificadas as funções distintas do sandbox e da aprovação. Os padrões de colaboração abaixo são recomendações do manual, não regras uniformes de diálogo para todos os clientes."
  evidence:
    - label: "Orientação oficial sobre sandbox e aprovações"
      href: https://learn.chatgpt.com/docs/agent-approvals-security
locale: pt
source_locale: zh-CN
source_revision: "f60dbb5"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---
A aprovação deve corresponder a uma ação específica e a seus efeitos. A autorização da tarefa diz o que o usuário quer concluir; a aprovação da ferramenta determina se uma ação pode ocorrer no ambiente atual. Escrever arquivo, executar comando ou acessar a rede não exige perguntar a cada vez por natureza. O comportamento depende do escopo autorizado, da política de ferramentas e do sandbox. Veja a [orientação oficial](https://learn.chatgpt.com/docs/agent-approvals-security).

## Três formas de colaboração que podem ser escolhidas

| Forma | O que pode continuar | Quando esperar |
|---|---|---|
| Análise somente de leitura | Ler, comparar e formar uma proposta | Não alterar a implementação sem autorização do usuário |
| Implementação dentro do escopo autorizado | Alterar a área indicada, verificar e preparar resultado revisável | Falta informação essencial, o escopo muda ou surge ação não autorizada |
| Aprovação separada da ação final | Concluir rascunhos, builds, prévias e preparação de recuperação | Antes de publicar, enviar ou outra ação expressamente reservada |

São acordos de colaboração, não nomes de novos modos do produto. Não peça de novo uma autorização clara que ainda vale. Se uma política obrigatória exigir aprovação interativa, siga esse mecanismo.

## Padrão 1: nesta vez apenas propor

```text
Nesta vez, trabalhe somente em leitura: examine o projeto e proponha alterações. Não mude o código nem faça commit.
Se uma verificação escrever cache, snapshot ou arquivo de saída, explique; não presuma que todo “teste” é somente de leitura.
```

É adequado quando o objetivo ainda não foi definido e alternativas precisam ser comparadas. Mesmo em tarefa só de leitura, observe os efeitos reais dos comandos. Não combine “testes podem rodar” e “nada pode ser escrito no disco” sem conferir.

## Padrão 2: concluir continuamente o trabalho local

```text
Você pode alterar estes três documentos e os links internos relacionados e rodar as verificações de build existentes.
Conclua dentro desse escopo sem esperar a cada etapa; resolva detalhes comuns de implementação e relate-os.
Não publique o site nem envie mensagens. Explique antes qualquer escolha necessária ou ação fora do escopo.
```

Aqui alterar e verificar já estão autorizados; não é necessário perguntar antes de cada escrita. A permissão para um comando específico ainda depende do ambiente; um prompt não contorna uma recusa.

## Padrão 3: aprovar uma publicação específica

Prepare antes uma versão revisável e apresente:

- A versão ou o artefato exato a publicar e os resultados de verificação.
- O ambiente de destino, destinatário ou pessoas afetadas.
- Os efeitos externos esperados e a forma de recuperação necessária.
- As autorizações ou condições que ainda faltam.

Aprovar “esta versão no site de teste” não autoriza qualquer versão futura no site de produção. Por outro lado, se a mesma ação já foi aprovada claramente, um modelo genérico não deve pedir confirmação outra vez.

## Continuar após uma recusa

Guarde a recusa original e diferencie autorização ausente, proibição por política e falha de ambiente. Continue se conseguir restringir o trabalho a uma abordagem ainda válida para a tarefa. Não contorne a mesma restrição trocando ferramenta, grafia do comando ou texto do prompt. Se o usuário realmente precisar agir, explique ação bloqueada, motivo e próximos passos possíveis.

## O que a pessoa revisora verifica

Confira se escopo e resultado coincidem, se a verificação ocorreu de fato e se os efeitos externos são compreendidos. Ter um plano não concede aprovação automática; “nenhum achado” não garante risco zero.

Para a forma de trabalho, veja [classificação de tarefas](/pt/prompts/ask-for-a-plan/); para conflitos de instruções, [prioridade do contexto](/pt/guide/context/context-priority/); fluxos sem supervisão também precisam de [mecanismos de parada, falha e notificação](/pt/skills/automations/scheduled-tasks/).
