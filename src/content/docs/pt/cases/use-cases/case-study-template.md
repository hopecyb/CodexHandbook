---
title: Modelo de caso
description: Estrutura unificada para redigir e fazer retrospectiva de casos Codex — facilita consolidação e comparação na equipa.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Copie este modelo para criar uma nova página de caso ou um documento interno de retrospectiva.

Antes de copiar, elimine as secções desnecessárias conforme o público e o entregável reais.

---

## Metadados

| Campo | Preencher |
|---|---|
| Título do caso | |
| Público | Principiantes / programadores / criadores / equipas |
| Cliente usado | App / CLI / IDE / Cloud |
| Tempo estimado | |
| Data de verificação | YYYY-MM-DD |

## 1. Objetivo e contexto

- **Objetivo de negócio:** Uma frase
- **Critérios de sucesso:** Observáveis e verificáveis
- **Fora de âmbito:** Exclusões explícitas

## 2. Preparação

- Conta / permissões / estado do repositório
- Ficheiros de contexto necessários (`AGENTS.md`, mockups, etc.)
- Riscos: dados, produção, segredos

## 3. Fluxo de trabalho (EPXV)

### Explorar

- Prompt de entrada (resumo)
- Descobertas-chave

### Planear

- Lista de passos
- Pontos de confirmação humana

### Executar

- Âmbito real das alterações
- Desvios face ao plano e motivos

### Verificar

- Testes automáticos
- Verificação humana
- Evidência (capturas, logs, ligações)

## 4. Falha e recuperação

- Que problemas ocorreram
- Como desfazer ou corrigir
- Se recomeçasse, o que mudaria no prompt/configuração

## 5. Consolidação

- Escrever em `AGENTS.md` / Skill / Automation?
- 3 sugestões para a equipa

## 6. Fontes de referência

- Ligações à documentação oficial
- Se este caso foi adaptado de um tutorial externo (apenas o tipo de tarefa como referência)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzado com o fluxo EPXV já verificado deste manual, recuperação de falhas, instruções de projeto e estrutura da biblioteca de casos; esta página só oferece um modelo unificado para redigir e fazer retrospectiva de casos, sem declarar comportamento concreto de produto.  
**Última verificação:** 2026-07-26
