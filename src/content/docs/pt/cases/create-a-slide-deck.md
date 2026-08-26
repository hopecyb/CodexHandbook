---
title: Criar uma apresentação
description: Caso de geração de artefato — do esboço a um deck apresentável.
locale: pt
source_locale: zh-CN
source_revision: 42c7a26
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Criar uma apresentação

## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Criadores |
| Cliente | App |
| Tempo estimado | 1–2 horas |

## 1. Objetivo e contexto

**Objetivo:** Gerar uma apresentação com estrutura clara a partir de um tema (Markdown/HTML/PPT, conforme as capacidades do ambiente).

**Critérios de sucesso:** Número de diapositivos alinhado com o esboço, cada página com pontos claros de fala e sem dados inventados.

## 2. Prompt recomendado

```text
Tema: [tema da apresentação]
Público: [contexto da audiência]
Duração: [minutos]
Primeiro dê secções e, por diapositivo, título + 3 pontos; não gere o ficheiro final ainda.
Após confirmação, exporte para o diretório slides/, formato: [mdx/html/pptx].
Restrições: dados devem citar fonte ou marcar «exemplo»; não fazer pedidos de rede externos sem aprovação.
```

## 3. Verificação

- Ler cada diapositivo e confirmar se se apresenta em cerca de um minuto
- Verificar a origem de gráficos e números

## 4. Relacionado

- [Capacidades de apresentações](/pt/guide/files-and-artifacts/presentations/)
---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Os use cases atuais do Codex em OpenAI Developers ainda incluem “Generate slide decks”, descrito como manipular ficheiros pptx e combinar geração de imagens para criar apresentações; o conteúdo desta página mantém-se no fluxo estável «esboço primeiro, saída conforme o ambiente, números com fonte ou marcados como exemplo».  
**Última verificação:** 2026-07-26
