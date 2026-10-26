---
title: Modelo de caso
description: Estrutura unificada para redigir e fazer retrospectiva de casos Codex — facilita consolidação e comparação na equipe.
locale: pt
source_locale: zh-CN
source_revision: "74ef905"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
legacyVerification: {"status": "verified", "products": "App / CLI / IDE / Cloud", "basis": "Cruzado com o fluxo EPXV já verificado deste manual, recuperação de falhas, instruções de projeto e estrutura da biblioteca de casos; esta página só oferece um modelo unificado para redigir e fazer retrospectiva de casos, sem declarar comportamento concreto de produto.", "checkedAt": "2026-07-26"}
---

Copie este modelo para criar uma nova página de caso ou um documento interno de retrospectiva.

Antes de copiar, elimine as seções desnecessárias conforme o público e o entregável reais.

---

## Metadados

| Campo | Preencher |
|---|---|
| Título do caso | |
| Público | Iniciantes / desenvolvedores / criadores / equipes |
| Cliente usado | App / CLI / IDE / Cloud |
| Tempo estimado | |
| Data de verificação | YYYY-MM-DD |

## 1. Objetivo e contexto

- **Objetivo de negócio:** Uma frase
- **Critérios de sucesso:** Observáveis e verificáveis
- **Fora de escopo:** Exclusões explícitas

## 2. Preparação

- Conta / permissões / estado do repositório
- Arquivos de contexto necessários (`AGENTS.md`, mockups, etc.)
- Riscos: dados, produção, segredos

## 3. Fluxo de trabalho (EPXV)

### Explorar

- Prompt de entrada (resumo)
- Descobertas-chave

### Planejar

- Lista de passos
- Pontos de confirmação humana

### Executar

- Escopo real das alterações
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
- 3 sugestões para a equipe

## 6. Fontes de referência
- Ligações à documentação oficial
- Se este caso foi adaptado de um tutorial externo (apenas o tipo de tarefa como referência)
