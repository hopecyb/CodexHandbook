---
title: Trabalho orientado por testes
description: Defina ou complete primeiro os testes em falha e deixe-os conduzir a implementação — para que as alterações do Codex sejam objetivamente aceitáveis.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Trabalho orientado por testes** (TDD ou «testes primeiro») consiste em fazer o teste falhar e depois, com a implementação mínima, fazê-lo passar. Adequado a código-bases com infraestrutura de testes e diretamente relacionado com cenários como [correção de bug com verificação](/cases/use-cases/software-development/fix-a-bug-with-verification/).

## Foco desta página

- Quando exigir «escrever/correr testes primeiro»
- Como instruir o Codex a não saltar passos de teste
- Estratégia de recuo quando os testes falham

## Para quem

- Repositórios com testes unitários/de integração
- Bugs de regressão, alterações de comportamento de API, refatorações

Cenários inadequados: protótipos sem infraestrutura de testes; alterações pontuais em sites só de texto. Nestes casos, prefira [EPXV](/cases/workflows/explore-plan-execute-verify/) com verificação humana.

## Prática mínima viável

```text
1. Escreva um teste em falha para o comportamento esperado (ou indique um teste já em falha)
2. Implemente apenas o código mínimo para esse teste passar
3. Corra a suíte relacionada e depois a completa
4. Não apague asserções nem mocke a lógica real só para passar o teste
```

Prompt:

```text
Siga TDD: primeiro escreva um teste em falha para «entrada vazia devolve []» em @src/foo.ts;
corra o teste e confirme a falha antes de alterar a implementação; em cada passo, corra apenas o ficheiro de teste relacionado.
```

## Fluxo recomendado

| Fase | Artefato |
|---|---|
| Vermelho | Teste em falha + explicação da causa |
| Verde | Implementação mínima + testes a passar |
| Refatorar | Organizar o código sob proteção dos testes (passo opcional separado) |

Combine com [diagnosticar antes de corrigir](/cases/workflows/diagnose-before-fixing/): leia primeiro a asserção em falha e a stack, depois mexa na implementação.

## Erros comuns

- Declarar concluído sem correr testes
- Alterar testes para acomodar implementação errada
- Correr um único teste e declarar a suíte toda verde
- Correr repetidamente a suíte E2E lenta — use `-t` ou filtro por ficheiro

## Limites de segurança

- Comandos de teste devem estar no âmbito permitido pelas [regras de comando](/guide/customization/rules/command-rules/)
- Se testes de integração tocarem APIs de produção, a especificação deve proibi-lo ou exigir mock

## Lista de aceitação

- [ ] Evidência de falha→sucesso nos testes (logs ou CI)
- [ ] Suíte completa ou no âmbito acordado a passar
- [ ] Diff sem remoção irrelevante de testes
- [ ] Consistente com [definir concluído](/prompts/define-done/)

## Capítulos relacionados

- [Correr testes](/guide/quality/run-tests/)
- [Caso: correção de bug com verificação](/cases/use-cases/software-development/fix-a-bug-with-verification/)

## Fontes de referência

- Capítulos de testes e qualidade de stormzhang
- Fluxos de programador do CodexGuide

---

**Estado:** verified  
**Produtos aplicáveis:** CLI / IDE  
**Base de verificação:** Cruzado com os capítulos já verificados deste manual sobre correr testes, definição de concluído, correção de bug com verificação e regras de comando; o conteúdo foca o método estável «fazer o teste falhar primeiro, depois conduzir a passagem com implementação mínima».  
**Última verificação:** 2026-07-26
