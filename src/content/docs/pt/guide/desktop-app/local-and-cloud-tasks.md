---
title: Tarefas locais e Cloud
description: Alternar execução local e Cloud na App.
locale: pt
source_locale: zh-CN
source_revision: 95e2382
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 70
---

Aqui trata-se de onde a Tarefa corre na App de desktop: na máquina local ou num ambiente remoto.

Na App, escolha o local de execução da Tarefa:

- **Local**: ficheiros e ambiente da máquina; iteração rápida
- **Cloud**: ambiente na nuvem; adequado a repositórios remotos e Tarefas longas

Conceitos: [Local e Cloud](/pt/guide/foundations/local-vs-cloud/) · Visão geral: [Web e Cloud](/pt/guide/web-and-cloud/)

Antes de alternar, confirme: as chaves devem aparecer nesse ambiente? A política de rede permite?

## Mal-entendidos frequentes

### 1. Estou na App de desktop — por que ainda distinguir local e Cloud?

Porque a App é só a entrada; não significa que todas as Tarefas corram na sua máquina.

### 2. Qual escolher por defeito?

Na maioria dos casos, comece pelo local, principalmente porque:

- Os ficheiros estão no seu computador
- Os resultados são mais fáceis de inspecionar
- Em caso de erro, é mais fácil reverter

### 3. Quando considerar Cloud?

Situações comuns:

- A Tarefa é longa
- Precisa de ligar a um ambiente de repositório remoto
- Precisa de um ambiente unificado
- Não quer ocupar a máquina local

Na App de desktop, se o local basta, use o local; se a Tarefa for mais longa, mais remota ou precisar de ambiente unificado, considere Cloud.

---

**Estado:** verified  
**Produtos aplicáveis:** App  
**Base de verificação:** A documentação atual do OpenAI Help Center (*ChatGPT Work and Codex* e *Using Codex with your ChatGPT plan*) distingue claramente local workflows e cloud tasks; esta página só resume, no contexto da App de desktop, o critério de que o local encaixa melhor com iteração rápida e Cloud com repositórios remotos e Tarefas longas.  
**Última verificação:** 2026-07-26
