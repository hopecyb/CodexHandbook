---
title: PDF e documentos
description: Âmbito, Ferramentas e pontos de aceitação ao pedir ao Codex para ler, resumir ou gerar documentos PDF.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Os PDF servem para especificações, papers, digitalizações e relatórios exportados. Ao contrário do texto puro, o PDF tem **estrutura complexa, volume grande e diff difícil** — precisa de uma forma de Tarefa própria.

Ao entregar um PDF ao Codex, o problema mais comum é compreensão incompleta da estrutura, ou um âmbito demasiado amplo.

## Conteúdo desta página

- Como fazer o Agent «ler» corretamente o conteúdo do PDF
- Acordos de formato e caminho ao gerar ou alterar PDF
- Como evitar na aceitação «parece haver ficheiro mas não abre»

## Porque o PDF falha com mais facilidade

O PDF é mais problemático que texto porque pode misturar:

- Imagens digitalizadas
- Layout em várias colunas
- Cabeçalhos e rodapés
- Tabelas
- Texto e imagens misturados

Quanto mais claro «que secção ver e que resultado quer», mais estável o efeito.

## Ler PDF

### Prática recomendada

1. **Indique o caminho do ficheiro**: `docs/spec.pdf` ou referência @ (conforme o cliente)
2. **Diga o que quer**: resumo, comparar um capítulo, extrair dados de tabelas
3. **Páginas ou capítulos**: em documentos longos, limite o âmbito e poupe Contexto
4. **Conteúdo sensível**: contratos, digitalizações de documentos de identidade → fluxo de [Contexto sensível](/guide/context/sensitive-context/)

### Limitações

- PDF digitalizado pode precisar de OCR; resultados errados exigem amostragem humana
- Layout complexo, várias colunas e notas de rodapé perdem estrutura com facilidade
- PDF enorme: não meta o documento inteiro numa só Tarefa — processe por secções ou converta primeiro num esboço Markdown

## Mal-entendidos habituais

### 1. Meter o PDF inteiro ≠ extrair o essencial de forma estável

Se o PDF for longo, com estrutura complexa e páginas digitalizadas, o mais estável continua a ser:

- Indicar o âmbito
- Indicar a Tarefa
- Processar por secções

### 2. PDF digitalizado e PDF de texto diferem muito

O digitalizado costuma depender primeiro de OCR; um erro de OCR desvia resumo, extração e juízo a seguir.

### 3. Gerar um ficheiro PDF ≠ já concluído

Ainda tem de confirmar:

- Se abre
- Se o texto tem caracteres estranhos
- Se páginas, índice e tabelas estão certos
- Se as fontes (p. ex. CJK) estão mesmo embutidas

## Gerar ou atualizar PDF

| Método | Adequado para |
|---|---|
| Compilar a partir de Markdown/LaTeX | Documentação técnica, relatórios (reproduzível) |
| Imprimir a partir de HTML | Layout simples |
| Geração por biblioteca (p. ex. reportlab) | Recibos, etiquetas programáticas |

No Prompt declare:

- Caminho de saída e nome do ficheiro
- Tamanho de página, idioma, requisitos de fonte (em PDF com CJK, atenção ao embedding de fontes)
- Se faz commit no Git (binários grandes costumam ir para artifact ou release)

## Redação aplicável diretamente

Pode pedir assim:

```text
Leia só as páginas 12-18 de `docs/spec.pdf` e extraia os critérios de aceitação.
Não resuma o documento inteiro.
Se OCR ou reconhecimento de layout forem incertos, marque-os explicitamente.
```

## Estratégia no repositório

- PDF binários grandes: considere **Git LFS** ou fora do repositório
- Quando o diff for ilegível, aceite **abrindo o ficheiro** + [Verificar Artefatos](/guide/quality/verify-artifacts/)
- Lista de gerados: [Aceitação de Artefatos gerados](/guide/files-and-artifacts/generated-artifacts/)

## Erros habituais

- Pedir «alterar uma letra no PDF» sem fonte editável (`.md` / `.tex`)
- Meter PDF confidencial num repositório público e processar em Cloud
- Aceitar só por «o ficheiro existe», sem abrir

## Lista de verificação

- [ ] O PDF abre no leitor/ambiente de impressão alvo
- [ ] Páginas, índice e tabelas-chave correspondem ao esperado
- [ ] Volume do repositório e política LFS cumprem a norma da equipa

Com PDF, quanto mais claro o âmbito, mais estável. Depois de gerar, não veja só se o ficheiro existe — confirme que abre e que o conteúdo está certo.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com capítulos já verificados deste manual sobre Contexto de ficheiros, Verificar Artefatos, Contexto sensível e tratamento de imagens/ficheiros; esta página confirma só o princípio estável de «limitar o âmbito do PDF, desconfiar de erros de OCR/layout, abrir de facto após gerar».  
**Última verificação:** 2026-07-26
