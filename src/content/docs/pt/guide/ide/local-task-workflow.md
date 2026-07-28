---
title: Fluxo de Tarefas locais
description: Iniciar, acompanhar e concluir Tarefas locais do Codex no IDE a partir de ficheiros abertos e seleções.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

A Tarefa local no IDE é o ciclo «**abrir → selecionar → descrever → rever → testar**», adequado a mudanças pequenas e frequentes. Aqui fica o percurso prático mais comum; detalhes de Contexto em [Seleção e ficheiros abertos](/guide/ide/selected-code-and-open-files/).

## Fluxo recomendado

1. **Abra a raiz da área de trabalho** (o repositório inteiro, não um ficheiro isolado)
2. Abra os ficheiros relevantes; se for preciso, [selecione o fragmento de código](/guide/ide/selected-code-and-open-files/)
3. No painel do Codex, deixe claro: objetivo, restrições, [definição de concluído](/prompts/define-done/)
4. Se a Tarefa for complexa, primeiro [peça um plano](/prompts/ask-for-a-plan/) e só depois execute
5. Na vista de Diff / inline, [reveja as mudanças](/guide/ide/reviewing-changes/)
6. No terminal do IDE, corra os comandos de teste do projeto
7. Faça você o `git commit` (salvo se a equipa autorizar explicitamente o Agent a fazer commit)

## Exemplo de Prompt (ilustrativo)

```text
Altere apenas src/auth/login.ts e os testes correspondentes.
Objetivo: corrigir o 500 ao submeter e-mail vazio; passar a 400 + mensagem de erro.
Proibido: alterar package-lock, git push.
Concluído: correr npm test -- auth e listar um resumo das mudanças.
```

## Quando mudar para outra entrada

| Situação | Sugestão |
|---|---|
| Várias Tarefas em paralelo, árvores de trabalho | [App de desktop](/guide/desktop-app/) |
| Scripts / CI | [CLI não interativa](/guide/cli/non-interactive-mode/) |
| Ambiente remoto padronizado, abrir PR | [Tarefas Cloud no IDE](/guide/ide/cloud-task-workflow/) |

## Erros comuns

- Não abrir a área de trabalho e não conseguir ler o `AGENTS.md`
- Aceitar de uma vez todas as sugestões inline
- Fazer commit sem correr testes

Contexto: [Contexto do editor](/guide/ide/editor-context/) · [Contexto de ficheiros e pastas](/guide/context/file-and-folder-context/)

## Dúvidas frequentes

### 1. Por que insistir em «abrir a raiz da área de trabalho»?

Porque muito do Contexto da extensão IDE depende de abrir o projeto completo, e não um ficheiro isolado.

### 2. Como é conveniente alterar no IDE, posso rever menos?

Não.

Quanto mais conveniente, mais fácil aceitar por impulso — por isso é ainda mais importante manter o hábito de verificar.

### 3. Que Tarefa convém na primeira vez?

Algo deste género:

- Alterar só 1 ou 2 ficheiros
- Resultado fácil de perceber de relance
- Fácil de testar ou pré-visualizar depois

As Tarefas locais no IDE encaixam em passos curtos e rápidos, mas «conveniente» não significa saltar a revisão e a Verificação.

---

**Estado:** verified  
**Produtos aplicáveis:** IDE  
**Base de verificação:** O centro de ajuda atual da OpenAI continua a descrever a IDE extension como cliente que trabalha com o repositório local; o fluxo desta página centra-se no ciclo estável «abrir área de trabalho, delimitar ficheiros, descrever a Tarefa, rever Diff, correr testes, commit humano», sem depender de uma UI concreta da extensão.  
**Última verificação:** 2026-07-26
