---
title: "Exemplo: um Skill de pesquisa que distingue conflitos de informações ausentes"
description: "Baixe um pacote completo de pesquisa e pratique com fontes sintéticas fixas os estados das fontes, conflitos de evidências, questões em aberto e relatórios rastreáveis."
contentType: skill
audiences: [creator, developer]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "As verificações de fontes locais e oito testes de regressão passaram. O autor conferiu o relatório de referência com as fontes; roteamento do modelo, qualidade da pesquisa e falhas de rede não foram medidos."
  environment: "Python 3.12.11 / Darwin arm64; biblioteca padrão, três fontes sintéticas e um arquivo local deliberadamente ausente."
  evidence:
    - label: Escopo real da verificação e limitações
      href: /downloads/skills/evidence-research/validation/record.md
assets:
  - path: /downloads/skills/evidence-research/evidence-research-1.0.0.zip
    purpose: "Skill de pesquisa, fontes fixas, tabela de evidências, relatório e verificador de status"
    license: CC0-1.0
    version: 1.0.0
locale: pt
source_locale: zh-CN
source_revision: "cf2b232"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Uma fonte que não abre, uma fonte que nada diz sobre um fato e duas fontes divergentes exigem tratamentos diferentes. Este Skill preserva essas distinções para mostrar quais conclusões são verificáveis e quais ainda precisam de evidência.

[Baixar evidence-research v1.0.0 completo](/downloads/skills/evidence-research/evidence-research-1.0.0.zip) · [SKILL.md](/downloads/skills/evidence-research/SKILL.md) · [Instruções de instalação](/downloads/skills/evidence-research/README.md)

## Pergunta e materiais fixos

O pacote reutiliza a ferramenta fictícia “Shiye (拾页)” do [exercício de artigo](/pt/cases/write-an-article/). Investigue formatos de entrada, configuração padrão do diagnóstico e campos enviados. Há três fontes sintéticas originais; a quarta nota de manutenção no catálogo falta intencionalmente. Não procure páginas reais desse produto fictício nem invente respostas.

| Estado da evidência | Exemplo no pacote | Como relatar |
|---|---|---|
| `supported`: sustentado | P1 lista apenas Markdown e texto puro | Declare escopo e localização; não afirme ter testado o produto |
| `conflict`: conflito | P3 diz desligado por padrão; C2 diz ligado | Apresente ambos e preserve lacunas de versão e condições |
| `unknown`: desconhecido | Campos de envio do diagnóstico não são listados | Diga o que falta; não adivinhe o conteúdo enviado |
| `unavailable`: fonte indisponível | O arquivo local de M não foi fornecido | Preserve a fonte falha e seu impacto; não finja tê-la lido |

[Relatório de referência](/downloads/skills/evidence-research/solution/report.md) · [Tabela de evidências](/downloads/skills/evidence-research/solution/evidence.csv) · [Formato de saída](/downloads/skills/evidence-research/references/evidence-format.md)

## Instalação e chamada

Coloque o diretório completo em `.agents/skills/evidence-research/` no projeto de prática e confirme `SKILL.md` como entrada. Não sobrescreva um Skill personalizado de mesmo nome. Após confirmar que ele aparece no cliente pelo guia [Usar um Skill](/pt/skills/use-a-skill/), invoque:

```text
$evidence-research Com as fontes em sources/catalog.json deste pacote,
determine se os formatos de entrada, a configuração padrão do diagnóstico
e os campos enviados por 拾页 1.2 podem ser confirmados.
Produza my-output/report.md e evidence.csv, apontando conflitos
e fontes que não abrem. Preserve a identidade sintética;
não pesquise sites reais desse produto fictício.
```

`fixtures/trigger-cases.json` traz exemplos positivos e negativos: comparação de fontes e checagem de evidências se aplicam; poesia criativa e simples contagem de arquivos dispensam esse fluxo. São expectativas de projeto; o acionamento automático não foi medido.

## Verificar fontes e relatório

As verificações opcionais exigem Python 3.10+ sem dependências de terceiros. No diretório extraído:

```sh
# Mostrar o estado real de cada fonte
python3 scripts/check_evidence.py --inspect-only
# Verificar o relatório de referência
python3 scripts/check_evidence.py
# Verificar relatório no formato do pacote
python3 scripts/check_evidence.py --output my-output
# Executar testes de regressão em cópias temporárias
python3 validation/test_checks.py
```

O resultado de referência esperado é P/I/C `available`, M `missing`, com quatro registros de evidência estruturalmente válidos. Código de saída 0 significa que a verificação terminou e a estrutura está correta; não significa que todas as fontes estavam disponíveis. Leia cada status, especialmente com `--inspect-only`.

O verificador detecta mudanças de hash, arquivos ausentes ou ilegíveis e arquivos sem hash esperado. Fonte indisponível não pode ser usada como prova lida nem sumir silenciosamente do relatório. O script processa apenas arquivos locais; não testa status HTTP nem acesso a páginas Web.

## Recuperação após falha

- **Arquivo ausente:** confira o caminho. Se a fonte realmente não foi fornecida, mantenha o estado indisponível e entregue as demais conclusões fundamentadas.
- **Conteúdo alterado:** compare versões e diferenças e confira novamente as citações. Não apenas atualize o hash para passar.
- **Evidências conflitantes:** confira versões, condições de instalação e público aplicável. Se não resolver, deixe a questão aberta, sem escolher só pela data.
- **Fato ausente:** liste campos ou explicações necessários do mantenedor. Não apresente sugestões como fatos confirmados.

O exemplo não exige respostas que não existem nas entradas fixas. Se uma pesquisa real autorizar fontes alternativas, registre o motivo da escolha e o que foi efetivamente acessado.

## Critérios de conclusão e limites

O relatório deve cobrir perguntas, fontes lidas, fontes falhas, evidência para cada conclusão e próximos dados a obter. O autor conferiu o relatório de referência com as fontes fixas, mas não houve leitor independente nem segunda revisão.

Os oito testes também mostram uma lacuna: a afirmação falsa “aceita todos os formatos com precisão perfeita” pode passar na checagem estrutural quando contém uma citação válida. O script não prova suporte semântico nem decide se dois trechos realmente se contradizem. Leia as fontes originais antes de entregar.

Em seguida, use o [Skill de escrita](/pt/skills/examples/writing-skill/) para transformar conclusões verificadas em artigo, preservando conflitos e pontos desconhecidos.
