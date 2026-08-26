---
title: Criar um site
description: Caso de protótipo — dos requisitos a uma página pré-visualizável.
locale: pt
source_locale: zh-CN
source_revision: b3ec6d8
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Criar um site

## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Criadores / programadores |
| Cliente | App / IDE |
| Tempo estimado | 2–4 horas |

## 1. Objetivo e contexto

**Objetivo:** Com base em requisitos simples, criar uma página estática ou um site pequeno pré-visualizável localmente.

**Critérios de sucesso:** Abre no browser, o estilo corresponde à descrição e não há alterações irrelevantes a ficheiros.

## 2. Prompt recomendado

```text
Objetivo: criar uma landing page de uma página para [produto/evento], com título, três funcionalidades e botão CTA.
Tecnologia: HTML + CSS (ou o framework já do projeto), amigável a dispositivos móveis.
Restrições: alterar apenas ficheiros de página sob src/; não introduzir novas dependências sem a minha aprovação.
Aceitação: pnpm dev permite pré-visualizar; descreva os blocos principais com capturas.
Primeiro apresente o plano de wireframe; espere a minha confirmação antes de escrever código.
```

## 3. Verificação

- Pré-visualizar localmente em vários breakpoints
- Confirmar que configuração ou lockfiles não foram alterados por engano

## 4. Relacionado

- [Modelo de criação](/pt/prompts/templates/create/)
- [Trabalho orientado a artefatos](/pt/cases/workflows/artifact-first-work/)
---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Os use cases atuais do Codex em OpenAI Developers ainda incluem “Get from idea to proof of concept”, “Build responsive front-end designs” e “Deploy an app or website”; o exemplo desta página limita-se a um protótipo de site pequeno ou landing page, exige wireframe primeiro, restringe o âmbito das alterações e valida com pré-visualização no browser.  
**Última verificação:** 2026-07-26
