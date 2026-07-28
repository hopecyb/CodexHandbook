---
title: Terminal integrado
description: Usar o terminal na App em conjunto com as Tarefas.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


O terminal integrado facilita ver a saída dos comandos que o Agent corre, ou executar você mesmo comandos de Verificação.

Sem sair da App de desktop, também vê aqui o processo e o resultado dos comandos.

No início, preste atenção a:

- O que exatamente correu
- Por que diz que a Verificação passou
- Por que um passo falhou

## Cuidados ao usar

- Inclua os «comandos de Verificação» nos critérios de aceitação do Prompt
- Não cole chaves de produção no terminal integrado
- Não volte a correr à mão, em produção, comandos que não compreende

## Mal-entendidos frequentes

### 1. É preciso saber usar o terminal para usar a App de desktop?

Muitas Tarefas básicas não exigem que digite comandos.  
Mas convém saber para que serve a zona do terminal, para não ficar completamente perdido quando precisar de conferir.

### 2. Sai muito texto — o que olhar?

Preste atenção a:

- Há erro evidente?
- Que comando correu?
- No fim: sucesso, falha ou conclusão parcial?

### 3. Posso copiar o comando e correr outra vez?

Sim, desde que compreenda o que faz — sobretudo não volte a correr às cegas em produção.

O terminal integrado mostra o processo de Verificação de forma direta e também ajuda a familiarizar-se gradualmente com o que a linha de comando está a fazer.


---

**Estado:** outdated  
**Produtos aplicáveis:** App  
**Nota de revisão:** Esta página assume uma experiência estável de «terminal integrado» para ver e reexecutar na App de desktop, mas o material oficial verificável atual confirma sobretudo que o Codex pode trabalhar com folders, repositories, terminals e developer tools locais; ainda não basta para sustentar a redação concreta da interface aqui descrita.  
**Última verificação:** 2026-07-26
