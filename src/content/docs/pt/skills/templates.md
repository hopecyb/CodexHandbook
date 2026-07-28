---
title: Diretório templates/
description: Forneça templates de saída e esqueletos de relatório no Skill.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`templates/` não é só «economizar um pouco de formatação». O papel prático é deixar a saída do Skill mais estável, sem improvisar a estrutura toda vez.

Se `references/` tende a «o que consultar na entrada», `templates/` tende a «como a saída deve parecer». Resultados com estrutura fixa e fáceis de revisar cabem bem aqui.

# Diretório templates/

`templates/` guarda formatos de saída reutilizados na execução do Skill — por exemplo relatório de revisão, esqueleto de changelog, tabela de comparação de pesquisa.

## Exemplo

```text
review-skill/
├── SKILL.md
└── templates/
    └── review-report.md
```

Em `SKILL.md`, indique: «Emita a conclusão da revisão na estrutura de templates/review-report.md.»

## O que faz

- `SKILL.md` cuida do fluxo
- `templates/` cuida da aparência do resultado

Ou:

- Skill decide «como fazer»
- template decide «como apresentar no fim»

Isso reduz dois problemas comuns:

- Estrutura diferente a cada saída
- A informação existe, mas é difícil de ler, comparar e revisar

## Quando vale usar `templates/`

Se um tipo de resultado deve sempre parecer parecido, use template — por exemplo:

- Relatório de revisão
- changelog
- Tabela de comparação de pesquisa
- Checklist de release

No primeiro Skill, `templates/` não é obrigatório.  
Mas assim que você começar a repetir «saia neste formato», vale extrair.

## Diferença em relação a references/

| Diretório | Foco |
|---|---|
| `references/` | Normas de entrada, regras, API |
| `templates/` | Formato de saída, estrutura de relatório |

## Equívocos comuns

### 1. Template só deixa o resultado «mais bonito»

Não é só estética: a saída fica mais estável, mais fácil de comparar e de revisar.

### 2. Com template, o Skill não precisa esclarecer requisitos de saída

Também não.

`SKILL.md` ainda deve dizer quando usar o template e quais campos são obrigatórios.

### 3. Toda saída merece template

Nem sempre.

Se o resultado quase não se repete, ou a estrutura muda muito a cada vez, forçar template só atrapalha.

## Quando criar `templates/` à parte

Se duas ou três vezes seguidas você repetir «saia nesta estrutura», vale virar `templates/`.

O valor central de `templates/` é estrutura de saída estável e mais fácil de reutilizar.
---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base da Verificação:** O runtime atual do Codex permite que Skills orientem o uso de arquivos anexos; esta página trata do padrão estável de template de saída, sem depender da UI ou do fluxo de instalação do cliente.  
**Última Verificação:** 2026-07-26
