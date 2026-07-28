---
title: Tabelas e folhas de cálculo
description: Ler, limpar, analisar e exportar CSV, Excel e dados tabulares — sem partir estrutura nem encoding.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Tarefas de tabelas são o típico erro silencioso: separador, encoding, cabeçalho, fórmula ou formato de data — qualquer falha e o downstream desaba.

## Conteúdo desta página

- Como fazer o Codex ler e escrever CSV / Excel com segurança
- Estrutura de Prompt para Tarefas de análise de dados
- Como aceitar números e contagens de linhas

## Escolha de formato

| Formato | Vantagens | Cuidados |
|---|---|---|
| CSV | Texto com diff, universal | Encoding (UTF-8 BOM), separador, escape de aspas |
| TSV | Menos conflito com vírgulas | Igual ao CSV |
| XLSX | Várias folhas, fórmulas | Binário, diff difícil; ler/escrever com biblioteca |
| Google Sheets | Colaboração | Muitas vezes via MCP ou exportação CSV |

Dados pequenos, para Git: **priorize CSV/TSV**. Relatórios complexos: **fonte CSV + script que gera XLSX**.

Veja primeiro estes três pontos:

- Quer diff, rastreio e reprodutibilidade → priorize CSV / TSV
- Quer entregar a quem usa Excel → depois exporte XLSX
- Não misture «formato final de visualização» com «formato-fonte ideal para processamento automático»

## Leitura e análise

Estrutura de Prompt recomendada:

```text
Ficheiro: data/sales_2025.csv
Encoding: UTF-8
Tarefa: agregar revenue por region; saída summary.csv
Restrições: não alterar o ficheiro original; valores vazios = 0; duas casas decimais
Aceitação: imprimir as primeiras 5 linhas + total de linhas
```

Contexto: [Contexto de ficheiros e diretórios](/guide/context/file-and-folder-context/)

## Porque Tarefas de tabelas falham em silêncio com facilidade

Os pontos realmente problemáticos costumam ser:

- Datas tratadas como texto ou como data
- Valores vazios = 0, saltar ou erro
- Qual coluna é o identificador único
- Decimais e montantes: arredondar ou não
- Se o ficheiro original pode ser alterado

Sem isto claro, o Codex pode «parecer concluído» com resultado pouco fiável.

## Escrita e limpeza

- Declare **nomes de colunas, ordem, tipos** (datas em ISO 8601)
- Tabelas grandes: processe por lotes; evite carregar tudo e esgotar memória
- Deduplicação e chaves de merge vão na descrição da Tarefa — não deixe o Agent adivinhar a «chave primária»

## Mal-entendidos habituais

### 1. Se o ficheiro abre, o tratamento está certo

Não.

Em Tarefas de tabelas, «abre» e «os dados não foram estragados» são coisas diferentes.

### 2. No Excel parece bem ≠ está bem

Alguns erros só aparecem quando sistemas a jusante consomem, por exemplo:

- Encoding errado
- Ordem das colunas mudou
- Tipo numérico mudou
- Fórmulas gravadas como valores mortos

### 3. Deixar o Agent decidir sozinho vazios, datas e chave primária

Normalmente não se recomenda.

Quanto mais explícitas estas regras, mais estável o resultado.

## Ao encomendar, clarifique estes pontos

Tente formular o pedido nestas 5 coisas:

1. Qual é o ficheiro de entrada
2. Como se deve chamar o ficheiro de saída
3. Que colunas manter, agregar ou limpar
4. Como tratar vazios, datas e duplicados
5. Como verificar o resultado

Muito mais estável do que só «organize este Excel».

Se usar Python: `pandas`; se Node: `csv-parse` / `xlsx`, etc. — acorde a biblioteca padrão do projeto em `AGENTS.md`.

## Relação com a Verificação

- Cruzar contagens e totais com os dados de origem
- Abrir o Excel e ver se datas foram tratadas como números
- [Verificar Artefatos](/guide/quality/verify-artifacts/): comparar por amostragem

Em Tarefas de tabelas, o mais importante é clarificar colunas, tipos, regras e aceitação.

## Erros habituais

- Excel abre CSV com texto CJK corrompido (falta BOM ou encoding errado)
- Erro de soma em floating point sem declaração de arredondamento
- Alterar fórmulas no Excel sem guardar como script reproduzível

## Lista de verificação

- [ ] Nomes e tipos de colunas cumprem o acordo do consumidor a jusante
- [ ] Totais/amostras coincidem com verificação humana ou SQL
- [ ] O ficheiro original não foi sobrescrito por acidente (ou a alteração é visível no diff)

## Referências
- [Definir restrições](/prompts/constraints-and-boundaries/)
---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com capítulos já verificados deste manual sobre Contexto de ficheiros, Verificar Artefatos e limites de restrições; esta página confirma só o princípio estável de que «colunas, tipos, vazios, datas e aceitação devem ser explícitos», sem tratar uma biblioteca ou plataforma como única implementação.  
**Última verificação:** 2026-07-26
