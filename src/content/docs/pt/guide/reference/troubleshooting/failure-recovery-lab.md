---
title: Cinco exercícios de recuperação de falhas com registros reais
description: Use logs reais da CLI para diagnosticar problemas de fonte, citação, vínculo da entrada, escopo do diretório e arquivo de estado, mudando uma variável por vez.
contentType: case
audiences: [creator, developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: Cinco falhas intencionalmente planejadas foram executadas, cada uma corrigida com uma única mudança e aprovada após nova execução. Os hashes das entradas originais não mudaram. Não são incidentes de produção nem experimento de taxa de sucesso de modelos.
  environment: Python 3.12.11 / Darwin arm64; cópias temporárias e entradas sintéticas, sem rede ou chamadas a modelos.
  evidence:
    - label: Resumo das cinco execuções reais
      href: /downloads/failure-recovery/validation/summary.json
    - label: Escopo da verificação
      href: /downloads/failure-recovery/validation/record.md
assets:
  - path: /downloads/failure-recovery/failure-recovery-1.0.0.zip
    purpose: Cinco falhas reproduzíveis, scripts e entradas necessários, logs antes e depois da correção e instruções de execução
    license: CC0-1.0
    version: 1.0.0
locale: pt
source_locale: zh-CN
source_revision: "fc91872"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Guarde primeiro o erro, identifique a camada que falhou e só então mude uma variável e execute de novo. Esta página demonstra o processo com cinco entradas fixas. O autor criou as falhas intencionalmente; os logs vêm de execuções reais na linha de comando, não de incidentes de clientes.

[Baixar o pacote completo de recuperação](/downloads/failure-recovery/failure-recovery-1.0.0.zip) · [README](/downloads/failure-recovery/README.md)

## Reproduza as falhas primeiro

Basta a biblioteca padrão do Python 3.10 ou posterior, sem conta nem rede. No diretório extraído, execute:

```sh
python3 scripts/reproduce.py --output my-recovery-logs
```

O diretório de saída não pode existir ainda, para não sobrescrever evidências antigas. O script usa cópias temporárias. As cinco execuções antes da correção devem terminar com código diferente de zero; depois da correção, todas com 0, sem mudar as entradas originais. Cada log inclui comando, código de saída, saída padrão e erros. Os caminhos temporários são normalizados como `<WORK>`.

## 1. Hash da fonte não corresponde

**Sintoma:** `FAIL: Source changed: P`, código de saída 1.

**Diagnóstico:** um trecho foi acrescentado por engano a um arquivo de fonte fixo, mas o índice de fontes não mudou. Compare primeiro com o material original; não atualize simplesmente o hash para tornar o teste verde.

**Única mudança:** restaure os bytes originais conhecidos desse arquivo. Não altere os outros materiais, o artigo ou o índice. A nova execução termina com código 0.

[Log da falha](/downloads/failure-recovery/validation/01-source-changed-before.json) · [Log da recuperação](/downloads/failure-recovery/validation/01-source-changed-after.json)

Se uma fonte real tiver mudado, confira novamente sua versão, conteúdo e conclusões e mantenha um novo registro da fonte. Restaurar o arquivo anterior só faz sentido neste caso porque a alteração foi claramente acidental.

## 2. Citação do artigo ausente da tabela de fatos

**Sintoma:** `FAIL: Unmapped or unused claim ID`, código de saída 1.

**Diagnóstico:** o artigo escreveu F99 em vez de F1; a tabela de fatos não tem F99. A revisão de P1 confirma que a frase ainda corresponde a F1.

**Única mudança:** corrija apenas o identificador para F1 e execute novamente; o código será 0. Não invente uma linha nova na tabela para esconder uma citação desconhecida.

[Log da falha](/downloads/failure-recovery/validation/02-unmapped-citation-before.json) · [Log da recuperação](/downloads/failure-recovery/validation/02-unmapped-citation-after.json)

Um identificador correto não comprova que a fonte sustenta a redação. Verifique cada frase; veja o [Skill de escrita](/pt/skills/examples/writing-skill/).

## 3. Proposta de triagem não corresponde à entrada

**Sintoma:** `FAIL: Stale input hash`, código de saída 1.

**Diagnóstico:** o hash de entrada na proposta não corresponde à Issue fixa atual. Neste exercício, o hash foi corrompido intencionalmente para acionar a verificação do vínculo da entrada.

**Única mudança:** substitua a proposta pela referência completa já conferida com a entrada atual. Deixe entrada e schema como estão; a nova execução termina com código 0. Nenhum modelo foi chamado para refazer a triagem, e a conclusão antiga não foi reaproveitada apenas recalculando o hash.

[Log da falha](/downloads/failure-recovery/validation/03-stale-proposal-before.json) · [Log da recuperação](/downloads/failure-recovery/validation/03-stale-proposal-after.json)

Se o conteúdo de uma Issue real mudar, reanalise o impacto da mudança sobre a conclusão. Veja o [caso de triagem de Issues](/pt/cases/use-cases/team-automation/issue-triage-suggestions/).

## 4. Mesmo arquivo de estado usado para outro diretório

**Sintoma:** `State version/site mismatch`, código de saída 3.

**Diagnóstico:** o estado está vinculado ao site fixed, mas o argumento `--site` aponta para broken. O erro ocorre na verificação de escopo; os links não falharam de repente.

**Única mudança:** aponte somente `--site` de volta para o diretório original, mantendo o arquivo de estado e os outros argumentos. A nova execução termina com código 0. A chamada incorreta não sobrescreveu o estado existente.

[Log da falha](/downloads/failure-recovery/validation/04-wrong-site-scope-before.json) · [Log da recuperação](/downloads/failure-recovery/validation/04-wrong-site-scope-after.json)

Se você realmente precisa monitorar outro site, crie um estado separado para ele. Não exclua o estado antigo para contornar a proteção de escopo.

## 5. JSON de estado corrompido

**Sintoma:** a análise do JSON falha, o executor informa `stopped` e termina com código 3.

**Diagnóstico:** o arquivo de estado foi truncado. Histórico e base de deduplicação não podem mais ser lidos com segurança. O programa recusa continuar e preserva o conteúdo danificado em vez de reiniciar silenciosamente com estado vazio.

**Única mudança:** restaure o backup conhecido como válido, salvo antes deste exercício. Não mude o comando nem o site. A nova execução termina com código 0.

[Log da falha](/downloads/failure-recovery/validation/05-corrupt-state-before.json) · [Log da recuperação](/downloads/failure-recovery/validation/05-corrupt-state-after.json)

Sem backup, primeiro preserve o arquivo danificado, examine os registros da execução e reconstrua o estado manualmente. Excluí-lo diretamente pode perder eventos pendentes e gerar candidatos duplicados. Veja o [Skill de automação](/pt/skills/examples/automation-skill/).

## Aplique o método à sua tarefa

Guarde a versão da entrada, o comando real e o erro completo. Determine se o problema está na entrada, na estrutura, no escopo ou no estado. Anote uma causa a testar, mude só a variável correspondente, repita a mesma verificação e mantenha o resultado. Após a recuperação, confira também se o objetivo original foi alcançado; o código de saída não basta.

Estes exercícios não cobrem falhas reais de login, Skills que não são acionados no cliente, restrições de rede ou problemas de aprovação. Para esses casos, volte ao [índice de solução de problemas por sintoma](/pt/guide/reference/troubleshooting/) e guarde os dados do ambiente real. O comportamento dos scripts aqui não garante o comportamento do cliente.
