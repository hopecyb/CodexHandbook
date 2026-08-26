---
title: Revisão antes de fundir
description: Antes do merge, use o Codex para revisão estruturada do diff e de riscos — divisão clara entre humano e máquina.
locale: pt
source_locale: zh-CN
source_revision: ce05ae9
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Revisão antes de fundir** coloca [qualidade e verificação](/pt/guide/quality/) no fluxo Git: antes de fundir o PR, o Codex verifica se diff, testes, segurança e especificação estão alinhados. Comentários automáticos não substituem a fusão automática.

## Foco desta página

- Divisão entre revisão local e revisão Cloud/CI
- Que dimensões o prompt de revisão deve cobrir
- Quando a assinatura humana final é obrigatória

## Prática mínima viável

**Local (autoavaliação do autor)**

```text
Compare o diff do ramo atual com main (não altere código ainda):
1. Sai do âmbito do issue?
2. Há riscos de segurança evidentes (segredos, injeção, permissões)?
3. Faltam testes ou documentação?
Produza uma checklist e marque P0/P1.
```

**CI (portão da equipa)**

- Versão fixa do prompt + token só de leitura
- Resultado em comentário de PR ou check run
- Ver [automatização de revisão de código](/pt/guide/developer-platform/ci-cd/code-review-automation/)

## Dimensões de revisão recomendadas

| Dimensão | Foco |
|---|---|
| Correção | Lógica, limites, tratamento de erros |
| Testes | Novo comportamento tem cobertura? |
| Segurança | Segredos, injeção, pistas de vulnerabilidades em dependências |
| Manutenibilidade | Nomes, duplicação, API pública |
| Especificação | Consistente com issue/documento de especificação |

Pode combinar com [rever diffs](/pt/guide/quality/review-diffs/); itens de alto risco seguem [padrões de aprovação humana](/pt/cases/workflows/human-approval-patterns/).

## Erros comuns

- Pedir ao modelo só «LGTM» sem base concreta
- Colar a descrição completa do PR sem sanitizar no prompt de CI (risco de injeção)
- Revisão aprovada mas testes de CI não corridos
- Bot de fusão automática ativo sem proteção de ramo

## Limites de segurança

- Revisão com permissões só de leitura; correções devem ser em **novo commit** disparado por humanos
- Não registar PII de utilizadores nem segredos nos logs de revisão

## Lista de aceitação

- [ ] Saída da revisão rastreável a ficheiros/linhas concretas
- [ ] Problemas P0 bloquearam a fusão ou já foram corrigidos
- [ ] Alinhado com a checklist de review da equipa
- [ ] Maintainer humano tem a decisão final em itens controversos

## Capítulos relacionados

- [Revisão de código Cloud](/pt/guide/web-and-cloud/code-review/)
- [Criar Pull Requests](/pt/guide/web-and-cloud/create-pull-requests/)

---

**Estado:** verified  
**Produtos aplicáveis:** CLI / IDE / Cloud  
**Base de verificação:** Cruzado com os use cases públicos atuais de code review / pull request em OpenAI Developers e com os capítulos já verificados deste manual sobre qualidade, revisão de diffs e Cloud; esta página confirma apenas os princípios estáveis «revisão estruturada antes de fundir, revisão só de leitura e assinatura humana final».  
**Última verificação:** 2026-07-26
