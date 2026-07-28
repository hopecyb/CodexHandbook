---
title: Aprovação e Sandbox
description: Estratégias de aprovação para shell, escrita em disco e pedidos de rede na CLI, e como o Sandbox limita o comportamento do Agent.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Na CLI, o Agent pode **ler ficheiros, escrever ficheiros, correr shell e eventualmente ligar à rede** — Aprovação e Sandbox são a válvula de segurança entre si e a automação. Uma configuração inadequada provoca pop-ups frequentes no modo interativo, ou risco descontrolado em CI sem supervisão.

## Conteúdo desta página

- O que o pop-up de Aprovação pergunta e como escolher
- Como o nível de Sandbox afeta ficheiros e rede
- Como a equipa alinha a estratégia entre a CLI e o `AGENTS.md`

## O que Aprovação e Sandbox controlam cada um

Pode lembrar assim:

- **Aprovação** pergunta: «este passo deve continuar?»
- **Sandbox** limita: «mesmo que continue, até onde pode chegar?»

Juntos, determinam se o uso da CLI fica mais conservador ou com fronteiras demasiado abertas.

Base conceptual: [Permissões e Aprovações](/guide/foundations/permissions-and-approvals/) · [Sandbox e rede](/guide/foundations/sandbox-and-network/)

## Quando ocorre a Aprovação

Pontos típicos de disparo (conforme o produto):

| Tipo de operação | Risco | Tendência predefinida |
|---|---|---|
| Escrever ficheiros dentro do projeto | Médio | Costuma exigir confirmação |
| Escrever caminhos fora do projeto | Alto | Deve rejeitar ou confirmar com rigor |
| Correr shell | Alto | Confirmar o conteúdo do comando |
| Rede / curl | Alto | Confirmar destino e dados |
| Chamadas a Ferramentas MCP | Depende do servidor | Por granularidade da Ferramenta |

No modo interativo tem opções como **permitir uma vez / permitir na sessão / rejeitar** (os nomes variam com a versão). **Não clique em «permitir sempre» em comandos que não compreende.**

## Níveis de Sandbox (conceito)

| Intenção do nível | Adequado a |
|---|---|
| Estrito / só leitura | Rever código não confiável, revisão só de leitura em CI |
| Padrão | Repositórios de desenvolvimento do dia a dia |
| Afrouxado | Ambiente pessoal de confiança, e conforme a política da empresa |

O Sandbox pode limitar:

- Alcance dos diretórios graváveis
- Se pode aceder a outros projetos em `$HOME`
- Capacidades de subprocessos e rede

Entradas de configuração: [Configuração da CLI](/guide/cli/configuration/) · Matriz: [Matriz de Permissões](/guide/reference/permission-matrix/)

## Interativo vs não interativo

| Modo | Características da Aprovação |
|---|---|
| Interativo `codex` | Pessoa presente; pode julgar caso a caso |
| Não interativo `exec` | Sem si presente; precisa de apertar o Sandbox de antemão + Prompt fixo |

Leitura obrigatória em CI: [Modo não interativo](/guide/cli/non-interactive-mode/) · [Padrões de Aprovação humana](/cases/workflows/human-approval-patterns/)

Princípios recomendados para CI:

- Só leitura ou caminhos de escrita limitados
- Proibir `curl` arbitrário a carregar conteúdo do repositório
- Falha = saída diferente de zero; manter registos

## Relação com regras allow/deny

O projeto pode declarar «comandos previsíveis» em [Regras de permitir e negar](/guide/customization/rules/allow-and-deny-patterns/). **As regras têm de coincidir com o comportamento real do produto**; caso contrário o Agent continua a ser bloqueado ou fica demasiado largo.

## Erros comuns

- Na máquina local, «aprovar automaticamente todo o shell» e depois tratar repositórios de clientes
- Aprovar por engano comandos como `sudo`, apagar bases de dados ou alterar `~/.ssh`
- CI a usar a mesma configuração afrouxada da máquina de desenvolvimento
- Achar que o Sandbox substitui a revisão de código — evita operações erradas, não injecção de Prompt malicioso

## Mal-entendidos frequentes

### Muitos pop-ups não significam necessariamente definição errada

Se está a aprender a CLI, mais Aprovações costumam ser mais seguras: obrigam a perceber o que cada passo faz.

O que realmente deve preocupar é começar a aprovar sem ler o conteúdo — não o facto de perguntar muito.

### Afrouxar uma vez não significa que daí em diante é seguro

Há quem, por comodidade na primeira vez, afrouxe muito as regras e depois reutilize o mesmo conjunto noutros repositórios e Tarefas.

O problema: a fronteira de segurança deve seguir o risco da Tarefa; não deve assumir que «desta vez também está bem» só porque da última vez foi conveniente.

## Lista de aceitação

- [ ] Consegue explicar o que o último pedido de Aprovação fazia
- [ ] Sabe onde alterar o nível de Sandbox e reiniciar a sessão
- [ ] A documentação da equipa indica: que comandos são proibidos e quais podem passar automaticamente de forma previsível

No início, manter Aprovação e Sandbox da CLI mais conservadores costuma ser mais estável. Quando souber de verdade o que está a abrir, afrouxe pouco a pouco.

## Fontes de referência
- Documentação de segurança e Sandbox da OpenAI Codex CLI
---

**Estado:** verified  
**Produtos aplicáveis:** CLI  
**Base de verificação:** A documentação de introdução à CLI no OpenAI Help Center continua a distinguir, por approval modes, leitura/escrita, execução de comandos e fronteiras de Sandbox/rede; esta página foca os conceitos de Aprovação e Sandbox e as diferenças de risco entre cenários interativos e sem supervisão, sem tratar o texto concreto de botões ou nomes de modos como factos fixos.  
**Última verificação:** 2026-07-26
