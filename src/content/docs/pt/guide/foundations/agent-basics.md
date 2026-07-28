---
title: Fundamentos de Agent
description: Explica como o Agent chama Ferramentas e avança de forma iterativa em torno de um objetivo.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


O **Agent** continua trabalhando em torno do objetivo: entender o objetivo → escolher Ferramentas → observar o resultado → ajustar o próximo passo, até concluir ou precisar da sua intervenção.

A IA comum se parece mais com alguém que responde perguntas; o Agent se parece mais com alguém que, ao receber a Tarefa, avança passo a passo.

## Diferença entre Agent e chat comum

| | Chat comum | Agent |
|---|---|---|
| Saída | Sobretudo sugestões em texto | Pode ler/escrever arquivos, rodar comandos, alterar o repositório |
| Processo | Uma resposta | Várias chamadas de Ferramenta |
| Risco | Sugestões enganosas | Também pode estragar arquivos ou executar comandos perigosos |
| Seu papel | Ler | Definir limites, Aprovação, aceite |

## Uma analogia direta

Dá para comparar assim:

- **Chat comum**: como perguntar a um amigo «como se resolve esta questão»
- **Agent**: como pedir a um colega que faça uma versão primeiro e depois revisar juntos

Por isso, no modo Agent, você precisa se preocupar mais com:

- O que ele pode acessar
- Se deve dar um plano antes
- Como você vai aceitar o resultado depois

## Por que separar essa diferença

Muitos usos inadequados vêm do mesmo mal-entendido:

> Achar que ele «só está falando»

Quando ele começa a ler arquivos, alterá-los e rodar comandos, deixa de ser só sugestão na janela de chat — passa a participar do trabalho real.

No começo, leia também:

1. [Permissões e Aprovação](/guide/foundations/permissions-and-approvals/)
2. [Rodar a primeira Tarefa](/guide/getting-started/run-your-first-task/)
3. [Revisar o resultado](/guide/getting-started/review-the-result/)

## Conceitos relacionados

- Skill / Plugin / MCP: ampliam «o que sabe fazer» e «a que se conecta» — veja [Extensão e automação](/skills/) e [Mapa de capacidades](/guide/start-here/codex-capability-map/)
- Aprovação humana: veja [Permissões e Aprovação](/guide/foundations/permissions-and-approvals/)

A característica do Agent é conseguir fazer vários passos seguidos em torno do objetivo — não só devolver um parágrafo.


---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica a diferença de colaboração entre Agent e chat comum; links internos, conceitos e analogias foram revisados, e o texto não depende de fatos de produto voláteis.  
**Última verificação:** 2026-07-26
