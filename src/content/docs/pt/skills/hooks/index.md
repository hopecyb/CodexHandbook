---
title: Hooks
description: Adicione checagens, logs e bloqueios em nós fixos de execução — quando bloquear e quando só registrar.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Hook é inserir automaticamente uma checagem ou um registro em um momento fixo.

Trata de checagens, registros e interceptação nos nós do fluxo — não define como a Tarefa em si deve ser feita.

## Conteúdo

Este grupo responde principalmente a 3 perguntas:

- Em que momento exatamente disparar o Hook
- Você quer impedir o problema ou só registrar
- Na primeira configuração, como começar com baixo risco

## Ordem de leitura

1. [Visão geral de Hooks](/skills/hooks/hooks-overview/): primeiro separe Hook de Skill e MCP
2. [Tipos de evento Hook](/skills/hooks/hook-event-types/): saiba se deve anexar antes, depois, ou no início/fim da sessão
3. [Exemplos de configuração de Hook](/skills/hooks/hooks-examples/): veja três padrões comuns — «só registrar / bloquear primeiro / checagem leve de entrada»

## Ordem de configuração

Não comece pela estratégia de bloqueio mais rígida. Uma ordem melhor:

1. Primeiro `log`
2. Depois `warn`
3. Então `block`

Assim fica mais fácil validar:

- Se o evento está no nó certo
- Se há muitos falsos positivos
- Se a performance atrasa o uso diário

Pense no Hook como um portão pequeno nos nós do fluxo, para checar, registrar ou interceptar.

---

**Status:** outdated  
**Produtos aplicáveis:** CLI / App (conforme a versão)  
**Nota de revisão:** A superfície de suporte, o modelo de eventos e o ponto de configuração de Hooks dependem fortemente da versão do cliente; até 2026-07-26, o material oficial público não basta para homologar este grupo de forma estável — marcado como `outdated`.  
**Última Verificação:** 2026-07-26
