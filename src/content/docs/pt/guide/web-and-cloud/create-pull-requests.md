---
title: Criar um Pull Request
description: Entregue o resultado de uma tarefa Cloud como PR verificável e revisto por pessoas, sem fusão automática.
legacyVerification:
  status: "verified"
  products: "Cloud、GitHub"
  checkedAt: "2026-08-26"
locale: pt
source_locale: zh-CN
source_revision: "39371d4"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 40
---

Depois de uma tarefa Cloud terminar, examine primeiro o resumo e o diff. Crie um Pull Request apenas quando o resultado cumprir o âmbito e os critérios de verificação; caso contrário, continue a corrigi-lo na mesma conversa.

## Da tarefa ao PR

```text
Escolher o ambiente e a branch de partida
  → executar a tarefa Cloud
  → rever o resumo, os registos e o diff
  → fazer seguimento, se necessário
  → Create Pull Request
  → CI + revisão complementar do Codex + revisão humana
  → uma pessoa decide se faz o merge
```

Indique no prompt «criar um PR, mas não fazer merge». Contudo, não dependa apenas de uma instrução em linguagem natural; ative também a proteção de branches e os required checks no repositório.

## Modelo de tarefa reutilizável

```text
Objetivo: corrigir a regressão de timeout no início de sessão do issue #42.
Ponto de partida: main.
Âmbito: apenas packages/auth/** e os testes correspondentes.
Proibido: atualizar dependências, alterar a API pública ou escrever diretamente em main.
Verificação: pnpm test --filter auth; pnpm typecheck.
Entrega: criar um PR para main, mas não fazer merge.
A descrição do PR deve incluir a causa raiz, um resumo das alterações,
os comandos e resultados dos testes, os riscos e a forma de reverter.
```

## Verificações antes de criar

- [ ] O commit de partida está correto e não faltam entradas locais ainda não enviadas.
- [ ] O diff contém apenas alterações do âmbito da tarefa.
- [ ] O nome da nova branch é reconhecível e não substitui trabalho de outra pessoa.
- [ ] Os testes foram realmente executados e as falhas não ficaram ocultas no resumo.
- [ ] Não há credenciais, registos temporários, caches ou formatação sem relação.
- [ ] Uma alteração grande foi dividida em PRs que possam ser revistos de forma independente.

## A descrição do PR deve responder, pelo menos

1. Porque é necessária a alteração?
2. O que foi realmente alterado?
3. Como foi verificada, incluindo comandos e resultados?
4. Quais são os riscos, limitações e método de reversão?
5. O que ficou explicitamente por fazer?

Para alterações de UI, acrescente capturas de ecrã reais; para alterações de comportamento, passos de reprodução; para migrações, explicações de compatibilidade e reversão.

## Depois de criar

Aguarde os required checks, peça uma revisão complementar com `@codex review` e faça com que uma pessoa conhecedora do contexto examine o diff principal. Se forem necessárias correções, aplique os comentários concretos na mesma branch do PR; não abra uma branch sem relação e produza dois resultados paralelos.

Criar e fundir um PR são dois limites de permissão distintos. O facto de o Cloud conseguir criar um PR não justifica contornar a política de merge da equipa.

## Fontes oficiais

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)
