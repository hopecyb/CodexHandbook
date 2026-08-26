---
title: scripts/ e testes
description: Adicione scripts determinísticos a um Skill e valide o comportamento.
locale: pt
source_locale: zh-CN
source_revision: 5a7da46
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

No começo de um Skill, é comum colocar tudo em `SKILL.md`. Fluxos simples aceitam isso; mas quando um passo precisa ser **estável, repetível e verificável**, script é mais confiável do que só texto.

Ações fixas vão para script; julgamento e colaboração ficam no Skill.

# scripts/ e testes

Quando um passo deve ser determinístico (rodar testes, gerar diff, validar formato), coloque o script em `scripts/` e diga em `SKILL.md` quando chamá-lo.

## Exemplo

```text
my-skill/
├── SKILL.md
└── scripts/
    └── run-checks.sh
```

## Quando considerar `scripts/`

Se um passo atender a qualquer um destes pontos, priorize script:

- Deve executar exatamente igual toda vez
- O código de saída em si importa
- Descrever em linguagem natural fica verboso demais
- Você quer reutilizar depois em CI ou outras ferramentas

Ações como «rodar checagens», «gerar diff», «validar formato», «exportar relatório fixo» cabem bem em script.

## Sugestões de teste

- Rode o script manualmente num repositório de prática; confira código de saída e stdout
- Dispare o fluxo ponta a ponta pelo Skill e veja se o script é chamado como esperado
- Em equipe: valide no CI ou no pre-commit se o script ainda funciona

## Equívocos comuns

### 1. Script deixa o Skill mais complexo — melhor não usar

Se o script fixar um passo que era instável, o conjunto fica mais simples.

### 2. Se o script roda localmente, o Skill está ok

Ainda precisa checar:

- Se o Skill dispara corretamente
- Se a política de Aprovação não bloqueia
- Se ainda roda no ambiente da equipe ou no CI

### 3. «Testar o Skill» = testar o script

Não basta.

O script testa uma ação;  
o Skill ainda precisa testar «quando chamar, como chamar e se a saída bate com o esperado».

## Ordem comum de Verificação

No começo, use esta ordem:

1. Rode o script sozinho
2. Veja se código de saída e stdout estão claros
3. Deixe o Skill chamar o fluxo completo uma vez
4. Teste de novo num ambiente mais próximo do real

Assim fica mais fácil separar «script quebrado» de «integração do Skill errada».

Ações que devem se repetir de forma estável não dependam só de texto. Faça o script funcionar primeiro; depois confirme a chamada pelo Skill.

Scripts herdam a política atual de Aprovação; veja [regras de comando](/pt/guide/customization/rules/command-rules/) e [Segurança de Skills](/pt/skills/security/).
---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base da Verificação:** O runtime atual do Codex permite Skills com scripts e comandos determinísticos; o princípio «ações estáveis em script, fluxo ainda governado pelo Skill» alinha-se às capacidades atuais.  
**Última Verificação:** 2026-07-26
