---
title: Template de diagnóstico
description: Localize a causa-raiz antes de discutir a correção.
locale: pt
source_locale: zh-CN
source_revision: b89ce2b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Template de diagnóstico

O equívoco comum em tarefas de diagnóstico: dizer «primeiro investigue», mas na prática esperar que corrija já.

O foco deste template é separar «encontrar a causa» de «corrigir».

## Template

```text
Fenómeno: 【mensagem de erro, teste falhado, relatório de utilizador】
Contexto: 【mudanças recentes, ambiente, passos de reprodução】
Entradas: @【logs/testes/código relacionado】
Restrições: não altere código ainda; liste 2–3 causas-raiz possíveis e métodos de verificação.
Saída:
1. Causa-raiz mais provável (com evidência)
2. Passos de verificação executáveis (comandos ou checkpoints)
3. Se a verificação passar, rascunho do plano de correção (aguarde a minha confirmação antes de executar)
```

## Quando usar este template

- Bug ainda sem localização
- Testes a falhar sem saber em que camada
- Suspeita de problema complexo; não quer correção por adivinhação

## Ideias erradas habituais

### 1. Diagnóstico é lento; melhor alterar já

Muito retrabalho vem de saltar o diagnóstico.

### 2. Listar 2–3 causas possíveis é demasiado verboso?

Não — ajuda a ver se ele está a adivinhar ao acaso.

O template de diagnóstico pede primeiro *por que* quebrou; só depois discute *como* corrigir.

## Relacionado

- [Diagnosticar antes de corrigir](/pt/cases/workflows/diagnose-before-fixing/)
- [Caso: corrigir um bug](/pt/cases/fix-a-bug/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página oferece um template de tarefas de diagnóstico; links e estrutura foram revistos; o corpo não depende de factos voláteis do produto.
