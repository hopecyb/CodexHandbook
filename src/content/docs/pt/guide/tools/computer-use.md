---
legacyVerification:
  status: "verified"
  products: "App / Codex (conforme versão, região e permissões)"
  basis: "Os materiais atuais do OpenAI Help Center sobre planos Codex e capacidades de ambiente de trabalho continuam a tratar Computer Use como funcionalidade relacionada com o Codex; as notas de lançamento Business também confirmam suporte a Computer Use no Windows a partir de 2026-05-29. Este texto só resume o modelo de risco, cenários adequados e limites de aprovação, sem declarar disponibilidade padrão em todas as plataformas ou contas."
  checkedAt: "2026-07-26"
title: Computer Use
description: Capacidade avançada de operar a GUI via tela e dispositivos de entrada — cenários, riscos e aprovação.
locale: pt
source_locale: zh-CN
source_revision: "d4a2e11"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 50
---

**Computer Use** permite ao Agent ver o tela, mover o ponteiro e escrever texto como uma pessoa — não se limita ao navegador ou ao terminal. É a capacidade mais forte e também a que envolve **mais riscos e requisitos de aprovação**.

O Computer Use atua na camada de tela, mouse e teclado; não é a mesma classe que a ferramenta de navegador ou o terminal — por isso deve ativar-se com mais cuidado.

## Conteúdo desta página

- Divisão de papéis entre Computer Use, navegador e terminal
- Que tarefas valem a pena ativar
- Como pessoas e equipas se protegem

## Limites de capacidade

| Camada | Capacidades típicas |
|---|---|
| Terminal | Shell, scripts, programas CLI |
| Navegador | DOM da página web, interação limitada |
| Computer Use | Aplicações de ambiente de trabalho, diálogos do sistema, fluxos multi-janela |

## Em que difere das outras ferramentas

Pode distingui-lo assim:

- Trabalhar em todo o ambiente de trabalho
- Alternar entre várias janelas
- Clicar em botões reais e diálogos do sistema

Por isso o escopo de interfaces e informação a que acede costuma ser maior.

Adequado:

- Fluxos de cliques repetidos em software de apresentações sem API (com a sua supervisão)
- Copiar dados entre aplicações (com conformidade)
- Validar o comportamento da própria App de ambiente de trabalho

Inadequado:

- Escrever código no dia a dia (IDE + terminal é mais eficiente)
- Operações de produção sem supervisão
- Contornar software de segurança ou DRM

## Mal-entendidos habituais

### 1. Mais capacidade = prioridade?

Só nestes casos o valor fica mais claro:

- A tarefa envolve mesmo GUI de ambiente de trabalho
- Não há ferramenta mais leve e segura que a complete

### 2. Se eu estiver a olhar, não há risco?

Ter alguém ao lado é mais seguro, mas ainda pode ocorrer:

- Clicar por engano numa caixa de confirmação
- Abrir uma janela que não se deveria
- Levar informação sensível do tela para o fluxo

### 3. Substitui toda a automação de GUI?

Serve melhor para assistência temporária, validação de fluxos e passos de GUI sem API — não como automação de produção estável, de longo prazo e sem supervisão.

## Modelo de risco

Computer Use quase equivale a **entregar teclado e mouse ao Agent**:

- Pode abrir correio, chat, gestor de arquivos
- Pode clicar por engano em diálogos de confirmação
- O tela pode conter informação sensível nas notificações

Leitura obrigatória: [permissões e Aprovações](/pt/guide/foundations/permissions-and-approvals/), [Sandbox e rede](/pt/guide/foundations/sandbox-and-network/)

## Como decidir se deve usá-lo

Se o objetivo for só:

- Alterar código
- Correr testes
- Ver páginas web
- Consultar material

Em geral não precisa de Computer Use primeiro — ferramentas mais leves bastam.

Considere ativá-lo se a tarefa for:

- Tem de operar uma aplicação de ambiente de trabalho
- Tem de atravessar várias janelas GUI
- Tem de tratar interfaces que navegador e terminal não alcançam

Aí vale a pena considerá-lo a sério.

## Forma de uso recomendada

1. **Ambiente dedicado**: máquina virtual ou conta de usuário secundária; sem janelas privadas no tela
2. **tarefa mínima**: «verificar a fórmula no Calculator», não «trate todos os meus e-mails»
3. **Humano no ciclo**: mantenha visível; esteja pronto a interromper
4. **Gravação/logs**: para retrospectiva da equipe (atenção: a gravação também contém informação sensível)
5. **Verificação no fim**: sistema de arquivos, área de transferência, aplicações abertas

Ambientes empresariais podem desativar por padrão; a política gerida manda.

## Escolha face à ferramenta de navegador

```text
Só precisa de ver a página web?     → Ferramenta de browser
Operar aplicações fora do IDE?      → Computer Use (com mais cautela)
Só alterar código e correr testes?  → Terminal + Ferramentas de ficheiros
```

Ver [Seleção de ferramentas](/pt/guide/tools/tool-selection/)

## Redação aplicável diretamente

Pode escrever assim:

```text
Só permitir operar Calculator e a aplicação de teste local; não abrir correio, chat, gestor de ficheiros nem qualquer backend de produção.
Se aparecer uma caixa de confirmação do sistema, pare primeiro, explique e só depois continue.
```

## Erros habituais

- Correr Computer Use de projetos não confiáveis no ambiente de trabalho principal
- Continuar a tarefa com 2FA, banco ou dados de clientes no tela
- Tratar automação de GUI como estratégia completa de testes

## Lista de verificação

- [ ] Ativado só em ambiente isolado
- [ ] O Prompt declara aplicações permitidas e proibições
- [ ] Após a tarefa, verificar ausência de arquivos/ligações de rede inesperadas
- [ ] A política da organização permite esta capacidade
