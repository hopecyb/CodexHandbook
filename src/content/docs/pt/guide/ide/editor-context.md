---
title: Contexto do editor
description: Como a extensão IDE passa ao Codex os ficheiros abertos, a área de trabalho e as regras do projeto.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

No IDE, o Codex não lê só o seu Prompt: obtém automaticamente o **estado do editor**. Essa é a vantagem central do IDE face à CLI. Perceber de onde vem o Contexto evita a frustração de «tenho o ficheiro aberto e ele não o vê».

No IDE, o Codex não olha só para o que diz: também usa o que está a ver no editor neste momento.

## Conteúdo desta página

- Que Contexto a extensão IDE anexa automaticamente
- Como se sobrepõe a ficheiros `@`, seleção e `AGENTS.md`
- Como reduzir ruído e melhorar a taxa de acerto

## Fontes de Contexto (camadas conceptuais)

| Fonte | Quem controla | Conteúdo típico |
|---|---|---|
| Raiz da área de trabalho | A pasta que abriu | Estrutura do projeto, `AGENTS.md`, ficheiros de configuração |
| Ficheiro aberto atual | Separadores do editor | Código-fonte em edição |
| Seleção | O código que destacou | Função, fragmento de erro |
| `@` explícito | Os caminhos que `@` na conversa | Ficheiros noutros diretórios, documentação |
| Regras do projeto | `AGENTS.md` etc. no repositório | Normas de código, comandos de teste |

Prioridade e conflitos: [Prioridade do Contexto](/guide/context/context-priority/).

## Fluxo recomendado

1. **Abra o repositório pela raiz da área de trabalho**; não abra só uma subpasta (exceções em monorepos conforme a documentação da equipa)
2. Em lógica local, **selecione primeiro o código relevante** e só depois descreva a Tarefa → [Seleção e ficheiros abertos](/guide/ide/selected-code-and-open-files/)
3. Em Tarefas entre módulos, nomeie ficheiros-chave com `@`, em vez de assumir que «ele encontra sozinho»
4. Em sessões longas, [compacte o Contexto](/guide/context/compaction/) periodicamente ou abra uma Thread nova

## Diferenças face à CLI

| | Extensão IDE | CLI |
|---|---|---|
| Perceção de ficheiros | Forte (abrir já entra no Contexto) | Precisa de `--cwd` e Ferramentas a ler o disco |
| Seleção | Suporte nativo | Precisa de colar ou indicar o caminho |
| Adequado a | Alterações ao nível da linha, explicar código | Scripts, CI, ambientes sem GUI |

## Dúvidas frequentes

### 1. O ficheiro está aberto — por que não altera como eu quero?

Porque «ficheiro aberto» não significa «o foco está suficientemente claro».

Se o alcance da Tarefa continuar vago, pode olhar para outro conteúdo relacionado ou não apanhar o fragmento que mais lhe importa.

### 2. Quanto mais ficheiros abertos, melhor?

Abrir demasiados ficheiros irrelevantes torna o Contexto ruidoso e dilui o foco.

### 3. Com Contexto automático no IDE, já não preciso de escrever com clareza?

O Contexto automático ajuda, mas não substitui a descrição da Tarefa.  
Objetivo, restrições e critérios de conclusão continuam a ter de ficar claros.

O Contexto do IDE ajuda, mas não adivinha por si; quanto mais preciso for o alcance dos ficheiros, mais estável costuma ser o resultado.

## Informação sensível

Não deixe `.env` com chaves aberto em primeiro plano no editor durante muito tempo; ver [Contexto sensível](/guide/context/sensitive-context/).

Antes de colar registos ou dados de clientes, desensibilize; o IDE não julga conformidade por si.

## Erros comuns

- Esperar ler `AGENTS.md` em modo de ficheiro único (sem área de trabalho)
- Abrir dezenas de ficheiros grandes irrelevantes e consumir a janela de Contexto
- Dizer só «esta função» sem selecionar nem `@` o ficheiro

## Lista de aceitação

- [ ] Raiz da área de trabalho correta
- [ ] 1–3 ficheiros relacionados com a Tarefa abertos ou `@`
- [ ] Comandos de teste em `AGENTS.md` alinhados com o terminal do IDE

## Fontes de referência

- [Contexto de ficheiros e pastas](/guide/context/file-and-folder-context/)
- stormzhang `09-ide.md`

---

**Estado:** verified  
**Produtos aplicáveis:** IDE  
**Base de verificação:** O OpenAI Help Center continua a tratar a IDE extension como uma das principais entradas emparelhadas com ferramentas locais; esta página não assume botões de um editor concreto e resume a metodologia estável em que área de trabalho, ficheiros abertos, seleção, ficheiros `@` e regras do projeto formam juntos o Contexto do IDE.  
**Última verificação:** 2026-07-26
