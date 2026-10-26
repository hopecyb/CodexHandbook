---
legacyVerification:
  status: "verified"
  products: "App / Codex (conforme versão e permissões)"
  basis: "O OpenAI Help Center atual já publica a descrição do navegador integrado na App de ambiente de trabalho: abrir páginas em Work ou Codex, mudar de separadores, baixar arquivos, usar modo de anotações e aprovar o acesso site a site. Esta página foca cenários adequados da ferramenta de navegador, diferença face a pesquisa/Computer Use e limites de segurança."
  checkedAt: "2026-07-26"
title: ferramenta de navegador
description: Fazer o Codex abrir páginas web, verificar o estado da UI e validar comportamento frontend — capacidades e limites.
locale: pt
source_locale: zh-CN
source_revision: "802f889"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 40
---

A **ferramenta de navegador** permite ao Agent aceder a páginas web reais num ambiente controlado: ler o DOM, capturar imagens da tela e, por vezes, interações simples. Serve para aceitação frontend, verificação de ligações de documentação e comparação com mockups — não substitui auditoria de segurança, nem deve operar backends de produção à vontade.

É uma ferramenta diferente da pesquisa: a pesquisa encontra informação na web; o navegador abre a página de verdade.

## Que problemas resolve

Costuma usar-se para:

- Como é que esta página está agora de fato
- O que acontece ao clicar neste botão
- O layout parte-se em larguras reais

Só ler código ou descrições textuais costuma não chegar — é preciso abrir a página de verdade.

## Conteúdo desta página

- O que a ferramenta de navegador pode e não pode fazer
- Diferença face a pesquisa Web e Computer Use
- Como autorizar e restringir com segurança

## Visão geral de capacidades

| Adequado | Inadequado |
|---|---|
| Abrir a página do dev server local e ver o layout | Crawling em massa de sites limitados pelos ToS |
| Verificar 404 em ligações de documentação pública | Login automático em sistemas não autorizados |
| Comparar página estática e implementação | Substituir um framework E2E completo |
| Ler texto visível da página para ajudar no debug | Sites com verificação humana complexa |

contexto de seleção: [Seleção de ferramentas](/pt/guide/tools/tool-selection/)

## Comparação com outras ferramentas

| ferramenta | Entrada | Saída |
|---|---|---|
| Pesquisa Web | Termo de pesquisa | Resumos e ligações |
| Navegador | URL / endereço local | Estrutura da página, capturas de tela, resultado da interação |
| Computer Use | GUI da tela inteira | Operação em qualquer aplicação (mais pesado, mais sensível) |

## Mal-entendidos habituais

### 1. A ferramenta de navegador não substitui testes automatizados

Pode ajudar a verificar a página, capturar imagens da tela e clicar em algumas interações — não substitui um sistema de testes completo.

### 2. A página abrir ≠ a página estar bem

Abrir só diz que «a página existe»; layout, texto, interação e ligações ainda precisam de verificação.

### 3. Em que situações usá-la?

Cenários mais comuns:

- Ver se a página local tem problemas de layout
- Verificar se ligações dão 404
- Conferir se a página e o mockup coincidem em traços gerais
- Confirmar se «o código parece certo e a página real também»

## Critério de juízo

Se a pergunta for:

- «Como fica a renderização real»
- «O que se vê de fato na página»
- «Que feedback a página dá depois deste clique»

O navegador costuma encaixar melhor do que análise só de texto.

## Fluxo de trabalho recomendado

1. **Frontend local**: primeiro `npm run dev`, depois dê `http://localhost:PORT/path`
2. **tarefa clara**: «verificar se o formulário de login ultrapassa os limites a 375px de largura», não «olhe a página»
3. **Limites claros**: proibir acesso à internet externa; proibir submeter formulários para produção
4. **Aceitação**: comparar com [Verificar artefatos](/pt/guide/quality/verify-artifacts/) e capturas de tela

## Redação aplicável diretamente

Pode pedir assim:

```text
Aceda só a http://localhost:4321/guide/foundations/local-vs-cloud/ e verifique o layout do primeiro ecrã e o aspeto da imagem de capa.
Não aceda à internet externa; não submeta nenhum formulário.
Se encontrar problemas, dê evidência em ecrã e sugestões de correção.
```

## Limites de segurança

- Por defeito, assuma que o navegador pode aceder a **tudo o que a sua máquina ou ambiente alcança** — incluindo admin de intranet
- Na tarefa declare: `só aceder a localhost` ou lista branca de domínios
- Não corra tarefas de repositórios não confiáveis numa configuração de navegador já com sessão pessoal iniciada
- A política de navegador em Cloud é definida por [Ambientes Cloud](/pt/guide/web-and-cloud/cloud-environments/) e pela política de rede

Conceito de aprovação: [permissões e Aprovações](/pt/guide/foundations/permissions-and-approvals/)

## Erros habituais

- Dar URL de produção sem restringir a só leitura
- Tratar uma captura de tela do navegador como «teste passou» sem correr testes automatizados
- Misturar com pesquisa Web: a pesquisa não substitui a verificação de renderização real

## Lista de verificação

- [ ] O escopo de acesso está fixo no Prompt
- [ ] Problemas visuais críticos têm uma captura de tela ou descrição textual
- [ ] Conclusões alinhadas com testes unitários/E2E, ou diferenças conhecidas registadas
