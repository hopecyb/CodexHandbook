---
title: Conversas e Agents em paralelo
description: Use conversas e worktrees separados para avançar tarefas independentes que podem ser avaliadas individualmente.
locale: pt
source_locale: zh-CN
source_revision: "2336db1"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 30
legacyVerification:
  status: verified
  products: App, CLI, IDE
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-26'
---

A unidade básica do trabalho em paralelo é uma conversa com contexto, mensagens, resultados e objetivo próprios. Uma tarefa não é adequada ao paralelismo apenas por ter muitas etapas. As tarefas precisam ser **independentes entre si, ter limites claros de arquivos e poder ser avaliadas separadamente**.

![Diagrama em que a conversa principal distribui tarefas independentes entre subagentes e reúne evidências e conflitos](/illustrations/flow-subagents.webp)

## Primeiro, avalie se é possível trabalhar em paralelo

| Pode ser paralelo | Deve continuar em sequência |
|---|---|
| Duas pesquisas somente leitura | A segunda depende da conclusão da primeira |
| Código e documentação em diretórios separados | Alterações simultâneas no mesmo arquivo central |
| Protótipos separados para duas soluções | Requisitos ainda mudam com frequência |
| Cada parte tem testes independentes | Só é possível avaliar após integrar tudo |

A orientação oficial recomenda evitar que duas conversas gravem na mesma fonte de dados. Para programar em paralelo, use worktrees Git diferentes.

## Do simples ao complexo

### 1. Comece com tarefas somente leitura

```text
Tarefa: analise apenas a falha mais recente do módulo de autenticação; não altere arquivos.
Escopo: src/auth/** e os testes correspondentes.
Entrega: hipótese da causa raiz, caminhos das evidências, pontos ainda incertos
         e comandos de verificação sugeridos.
```

Tarefas somente leitura não geram conflitos de mesclagem e são adequadas para o primeiro exercício.

### 2. Depois, distribua tarefas de escrita

Defina para cada conversa o objetivo, os arquivos sob sua responsabilidade, as áreas proibidas e os critérios de aceitação:

```text
Objetivo: complementar a documentação dos códigos de erro de autenticação.
Responsabilidade: apenas docs/auth/**.
Proibido: alterar src/**, arquivos de lock e configurações compartilhadas.
Aceitação: execute pnpm check:links e relate o resultado.
```

Cada conversa que programa deve usar um [worktree](/pt/guide/desktop-app/worktrees/) separado. A conversa principal ou um único responsável designado modifica a configuração compartilhada.

### 3. Reúna e confira os resultados

Não junte as entregas sem análise. A conversa principal deve verificar:

1. se cada parte respeitou seus limites;
2. se as evidências e os testes podem ser reproduzidos;
3. se as conclusões se contradizem;
4. se a integração exige novos testes.

## tarefas longas e modo Goal

Digite `/goal` no aplicativo para desktop, no CLI ou no IDE para iniciar o modo Goal. O objetivo deve definir resultado, restrições e critérios de verificação. Cada conversa tem seu próprio objetivo. A execução paralela não amplia o sandbox nem as permissões; ações que exigem uma decisão ainda serão pausadas.

Para uma coordenação mais detalhada no nível das ferramentas, veja [Subagentes](/pt/guide/agent-work/subagents/).

## Fontes oficiais

- [tarefas longas](https://learn.chatgpt.com/docs/long-running-work)
- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Subagentes](https://learn.chatgpt.com/docs/agent-configuration/subagents)
