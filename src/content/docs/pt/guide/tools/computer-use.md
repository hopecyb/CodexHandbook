---
title: Computer Use
description: Capacidade avançada de operar a GUI via ecrã e dispositivos de entrada — cenários, riscos e Aprovação.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

**Computer Use** permite ao Agent ver o ecrã, mover o ponteiro e escrever texto como uma pessoa — não se limita ao browser ou ao terminal. É a capacidade mais forte e também a que exige **mais risco e Aprovação**.

O Computer Use atua na camada de ecrã, rato e teclado; não é a mesma classe que a Ferramenta de browser ou o terminal — por isso deve ativar-se com mais cuidado.

## Conteúdo desta página

- Divisão de papéis entre Computer Use, browser e terminal
- Que Tarefas valem a pena ativar
- Como pessoas e equipas se protegem

## Limites de capacidade

| Camada | Capacidades típicas |
|---|---|
| Terminal | Shell, scripts, programas CLI |
| Browser | DOM da página web, interação limitada |
| Computer Use | Aplicações de ambiente de trabalho, diálogos do sistema, fluxos multi-janela |

## Em que difere das outras Ferramentas

Pode distinguí-lo assim:

- Trabalhar em todo o ambiente de trabalho
- Alternar entre várias janelas
- Clicar em botões reais e diálogos do sistema

Por isso o âmbito de interfaces e informação a que acede costuma ser maior.

Adequado:

- Fluxos de cliques repetidos em software de demonstração sem API (com a sua supervisão)
- Copiar dados entre aplicações (com conformidade)
- Validar o comportamento da própria App de ambiente de trabalho

Inadequado:

- Escrever código no dia a dia (IDE + terminal é mais eficiente)
- Operações de produção sem supervisão
- Contornar software de segurança ou DRM

## Mal-entendidos habituais

### 1. Mais capacidade = prioridade?

Só nestes casos o valor fica mais claro:

- A Tarefa envolve mesmo GUI de ambiente de trabalho
- Não há Ferramenta mais leve e segura que a complete

### 2. Se eu estiver a olhar, não há risco?

Ter alguém ao lado é mais seguro, mas ainda pode ocorrer:

- Clicar por engano numa caixa de confirmação
- Abrir uma janela que não se deveria
- Levar informação sensível do ecrã para o fluxo

### 3. Substitui toda a automação de GUI?

Serve melhor para assistência temporária, validação de fluxos e passos de GUI sem API — não como automação de produção estável, de longo prazo e sem supervisão.

## Modelo de risco

Computer Use quase equivale a **entregar teclado e rato ao Agent**:

- Pode abrir correio, chat, gestor de ficheiros
- Pode clicar por engano em diálogos de confirmação
- O ecrã pode conter informação sensível nas notificações

Leitura obrigatória: [Permissões e Aprovações](/guide/foundations/permissions-and-approvals/), [Sandbox e rede](/guide/foundations/sandbox-and-network/)

## Como decidir se deve usá-lo

Se o objetivo for só:

- Alterar código
- Correr testes
- Ver páginas web
- Consultar material

Em geral não precisa de Computer Use primeiro — Ferramentas mais leves bastam.

Considere ativá-lo se a Tarefa for:

- Tem de operar uma aplicação de ambiente de trabalho
- Tem de atravessar várias janelas GUI
- Tem de tratar interfaces que browser e terminal não alcançam

Aí vale a pena considerá-lo a sério.

## Forma de uso recomendada

1. **Ambiente dedicado**: máquina virtual ou conta de utilizador secundária; sem janelas privadas no ecrã
2. **Tarefa mínima**: «verificar a fórmula no Calculator», não «trate todos os meus e-mails»
3. **Humano no ciclo**: mantenha visível; esteja pronto a interromper
4. **Gravação/logs**: para retrospectiva da equipa (atenção: a gravação também contém informação sensível)
5. **Verificação no fim**: sistema de ficheiros, área de transferência, aplicações abertas

Ambientes empresariais podem desativar por defeito; a política gerida manda.

## Escolha face à Ferramenta de browser

```text
Só precisa de ver a página web?     → Ferramenta de browser
Operar aplicações fora do IDE?      → Computer Use (com mais cautela)
Só alterar código e correr testes?  → Terminal + Ferramentas de ficheiros
```

Ver [Seleção de Ferramentas](/guide/tools/tool-selection/)

## Redação aplicável diretamente

Pode escrever assim:

```text
Só permitir operar Calculator e a aplicação de teste local; não abrir correio, chat, gestor de ficheiros nem qualquer backend de produção.
Se aparecer uma caixa de confirmação do sistema, pare primeiro, explique e só depois continue.
```

## Erros habituais

- Correr Computer Use de projetos não fiáveis no ambiente de trabalho principal
- Continuar a Tarefa com 2FA, banco ou dados de clientes no ecrã
- Tratar automação de GUI como estratégia completa de testes

## Lista de verificação

- [ ] Ativado só em ambiente isolado
- [ ] O Prompt declara aplicações permitidas e proibições
- [ ] Após a Tarefa, verificar ausência de ficheiros/ligações de rede inesperadas
- [ ] A política da organização permite esta capacidade

---

**Estado:** verificado  
**Produtos aplicáveis:** App / Codex (conforme versão, região e Permissões)  
**Base de verificação:** Os materiais atuais do OpenAI Help Center sobre planos Codex e capacidades de ambiente de trabalho continuam a tratar Computer Use como funcionalidade relacionada com o Codex; as notas de lançamento Business também confirmam suporte a Computer Use no Windows a partir de 2026-05-29. Este texto só resume o modelo de risco, cenários adequados e limites de Aprovação, sem declarar disponibilidade predefinida em todas as plataformas ou contas.  
**Última verificação:** 2026-07-26
