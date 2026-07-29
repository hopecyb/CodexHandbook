---
title: Ferramenta de browser
description: Fazer o Codex abrir páginas web, verificar o estado da UI e validar comportamento frontend — capacidades e limites.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

A **Ferramenta de browser** permite ao Agent aceder a páginas web reais num ambiente controlado: ler o DOM, fazer ecrãs e, por vezes, interações simples. Serve para aceitação frontend, verificação de ligações de documentação e comparação com mockups — não substitui auditoria de segurança, nem deve operar backends de produção à vontade.

É uma Ferramenta diferente da pesquisa: a pesquisa encontra informação na web; o browser abre a página de verdade.

## Que problemas resolve

Costuma usar-se para:

- Como é que esta página está agora de facto
- O que acontece ao clicar neste botão
- O layout parte-se em larguras reais

Só ler código ou descrições textuais costuma não chegar — é preciso abrir a página de verdade.

## Conteúdo desta página

- O que a Ferramenta de browser pode e não pode fazer
- Diferença face a pesquisa Web e Computer Use
- Como autorizar e restringir com segurança

## Visão geral de capacidades

| Adequado | Inadequado |
|---|---|
| Abrir a página do dev server local e ver o layout | Crawling em massa de sites limitados pelos ToS |
| Verificar 404 em ligações de documentação pública | Login automático em sistemas não autorizados |
| Comparar página estática e implementação | Substituir um framework E2E completo |
| Ler texto visível da página para ajudar no debug | Sites com verificação humana complexa |

Contexto de seleção: [Seleção de Ferramentas](/guide/tools/tool-selection/)

## Comparação com outras Ferramentas

| Ferramenta | Entrada | Saída |
|---|---|---|
| Pesquisa Web | Termo de pesquisa | Resumos e ligações |
| Browser | URL / endereço local | Estrutura da página, ecrãs, resultado da interação |
| Computer Use | GUI do ecrã inteiro | Operação em qualquer aplicação (mais pesado, mais sensível) |

## Mal-entendidos habituais

### 1. A Ferramenta de browser não substitui testes automatizados

Pode ajudar a verificar a página, fazer ecrãs e clicar em algumas interações — não substitui um sistema de testes completo.

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
- «O que se vê de facto na página»
- «Que feedback a página dá depois deste clique»

O browser costuma encaixar melhor do que análise só de texto.

## Fluxo de trabalho recomendado

1. **Frontend local**: primeiro `npm run dev`, depois dê `http://localhost:PORT/path`
2. **Tarefa clara**: «verificar se o formulário de login overflow a 375px de largura», não «olhe a página»
3. **Limites claros**: proibir acesso à internet externa; proibir submeter formulários para produção
4. **Aceitação**: comparar com [Verificar Artefatos](/guide/quality/verify-artifacts/) e ecrãs

## Redação aplicável diretamente

Pode pedir assim:

```text
Aceda só a http://localhost:4321/guide/foundations/local-vs-cloud/ e verifique o layout do primeiro ecrã e o aspeto da imagem de capa.
Não aceda à internet externa; não submeta nenhum formulário.
Se encontrar problemas, dê evidência em ecrã e sugestões de correção.
```

## Limites de segurança

- Por defeito, assuma que o browser pode aceder a **tudo o que a sua máquina ou ambiente alcança** — incluindo admin de intranet
- Na Tarefa declare: `só aceder a localhost` ou lista branca de domínios
- Não corra Tarefas de repositórios não fiáveis numa configuração de browser já com sessão pessoal iniciada
- A política de browser em Cloud é definida por [Ambientes Cloud](/guide/web-and-cloud/cloud-environments/) e pela política de rede

Conceito de Aprovação: [Permissões e Aprovações](/guide/foundations/permissions-and-approvals/)

## Erros habituais

- Dar URL de produção sem restringir a só leitura
- Tratar ecrã do browser como «teste passou» sem correr testes automatizados
- Misturar com pesquisa Web: a pesquisa não substitui a verificação de renderização real

## Lista de verificação

- [ ] O âmbito de acesso está fixo no Prompt
- [ ] Problemas visuais críticos têm ecrã ou descrição textual
- [ ] Conclusões alinhadas com testes unitários/E2E, ou diferenças conhecidas registadas

---

**Estado:** verificado  
**Produtos aplicáveis:** App / Codex (conforme versão e Permissões)  
**Base de verificação:** O OpenAI Help Center atual já publica a descrição do browser integrado na App de ambiente de trabalho: abrir páginas em Work ou Codex, mudar de separadores, descarregar ficheiros, usar modo de anotações e aprovar o acesso site a site. Esta página foca cenários adequados da Ferramenta de browser, diferença face a pesquisa/Computer Use e limites de segurança.  
**Última verificação:** 2026-07-26
