---
title: Templates de Prompts
description: Esqueletos reutilizáveis por tipo de tarefa — entender, criar, alterar, diagnosticar, rever, pesquisar, automatizar.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Templates de Prompts

Ao ver «template», duas reações são comuns:

- achar o template demasiado rígido e não querer usá-lo
- copiar à letra sem distinguir o que precisa de ser alterado

A função principal do template é ajudar a não omitir blocos críticos — não pensar por si.

O objetivo das páginas de template é preservar a estrutura da tarefa, não gerar a única resposta correta.

## Como usar um template

Pode seguir assim:

1. Escolha o tipo de template mais próximo da tarefa
2. Substitua o conteúdo em `【】` pela sua tarefa real
3. Apague blocos irrelevantes
4. Acrescente restrições e aceitação específicas desta tarefa

O template é andaime, não resposta-padrão.

| Template | Cenário |
|---|---|
| [Entender](/prompts/templates/understand/) | Ler código-base, docs ou material; construir compreensão primeiro |
| [Criar](/prompts/templates/create/) | Implementar do zero uma função, texto ou artefato |
| [Alterar](/prompts/templates/change/) | Iterar sobre o que já existe |
| [Diagnosticar](/prompts/templates/diagnose/) | Localizar a causa-raiz; ainda sem alterar código |
| [Rever](/prompts/templates/review/) | Rever diff, PR ou alterações de documentação |
| [Pesquisar](/prompts/templates/research/) | Investigação e comparação com citações |
| [Automatizar](/prompts/templates/automate/) | Tarefas repetidas, scripts e fluxos sem supervisão |

## De template a workflow

Alguns Prompts bastam uma vez; outros repetem-se e devem ser estabilizados.

| Tarefa repetida | Começa como | Quando estabilizar, evolui para |
|---|---|---|
| Preparar PR | Template de revisão/alteração | Skill com checklist fixo |
| Gerar docs de API | Template de criação/alteração | Skill + script de documentação |
| Aumentar cobertura de testes | Template de alteração | Skill + comandos de teste acordados |
| Investigar performance | Template de diagnóstico | Subagent ou Skill dedicado |
| Verificar formato sempre que há escrita | Não é só template | Hook |
| Ler tickets externos antes de alterar código | Template de pesquisa | MCP + Skill |

Template serve para tarefas iniciadas por pessoas; Skill para processos repetidos; Hook para verificações automáticas; MCP para acesso a sistemas externos.

## Ideias erradas habituais

### 1. Template = copiar tal e qual

Sem substituir placeholders nem apagar blocos irrelevantes, o template esvazia a tarefa.

### 2. Usar template torna o Prompt «profissional» sozinho

O template só preserva estrutura; não decide por si:

- qual é o objetivo real
- até onde traçar restrições
- como escrever a aceitação

### 3. Quanto mais completo o template, melhor

Para iniciantes, «suficiente sem inchado» basta.

Escolha primeiro o tipo certo; depois adapte-o à sua tarefa — não trate o template em si como a tarefa.

Princípios de escrita: [Fundamentos de Prompts](/prompts/basics/) e [Anatomia de uma tarefa](/prompts/task-anatomy/).

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página só explica como usar templates; links e classificação foram revistos; o corpo não depende de factos voláteis do produto.
