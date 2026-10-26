---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "O runtime atual do Codex lê sob demanda o corpo do Skill e o material relacionado; a descrição de `references/` aqui é um princípio estável de organização documental."
  checkedAt: "2026-07-26"
title: Diretório references/
description: Organize documentação longa de referência no Skill com divulgação progressiva.
locale: pt
source_locale: zh-CN
source_revision: "955bfa7"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---

`references/` serve para material longo que não precisa expandir de imediato toda vez — evita um fluxo principal longo e confuso.

Não é só «colocar mais documentos»: é guardar à parte o que **não precisa ser lido sempre, mas é útil em algum passo**, e abrir sob demanda.


Quando o corpo de `SKILL.md` fica longo demais, mova normas detalhadas, APIs e checklists para `references/` e cite nos passos sob demanda.

## Exemplo

```text
my-skill/
├── SKILL.md
└── references/
    ├── style-guide.md
    └── api-contracts.md
```

Em `SKILL.md`, escreva:

```md
Ao revisar o estilo de código, leia references/style-guide.md e verifique conforme as regras.
```

## O que faz

- `SKILL.md` cuida do fluxo principal
- `references/` cuida do «material a abrir quando precisar»

Ou, de forma direta:

- `SKILL.md` é a instrução de trabalho
- `references/` é o armário de material

Assim a leitura do Skill não começa soterrada por informações de contexto; e quando precisar de detalhe, há base.

## Quando vale extrair `references/`
Se `SKILL.md` começar a mostrar estes sinais, considere separar:

- Um bloco grande de normas ocupa espaço toda vez
- Vários temas de referência misturados
- O fluxo principal é interrompido por informações de contexto e a primeira leitura perde a linha

No primeiro Skill, `references/` não é obrigatório.
A ordem comum é **fazer funcionar primeiro e extrair quando o conteúdo realmente alongar**.
## Equívocos comuns

### 1. `references/` não é só «copiar um pouco do conteúdo para fora»

O papel principal é manter o fluxo curto, claro e executável.

### 2. Mais material de referência não é automaticamente melhor

Se enfiar tudo em `references/`, só move a bagunça de um arquivo para vários.

### 3. Com `references/`, `SKILL.md` pode ficar bem superficial

O fluxo principal ainda deve permanecer em `SKILL.md`; senão, na primeira leitura ninguém sabe como executar.

## Princípios

- Fluxo principal em `SKILL.md`; referências carregadas sob demanda
- Um arquivo, um tema — facilita a manutenção
- Não repita em references os passos que já estão em SKILL.md
