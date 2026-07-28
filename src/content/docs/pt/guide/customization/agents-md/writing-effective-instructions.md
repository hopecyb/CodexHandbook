---
title: Escrever instruções eficazes
description: Checklist de escrita para AGENTS.md — curto, rígido, executável, verificável.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Instruções de projeto eficazes aproximam-se de uma **checklist**. O objetivo é o Codex cometer menos erros previsíveis já na primeira tentativa.

Na primeira redação, o problema comum é ter muitas ideias escritas, mas restrições realmente críticas pouco claras.

## Conteúdo

- Como devem parecer as instruções do projeto
- O que significa «curto, rígido, executável»
- Que estilos de escrita mais confundem o Codex e as pessoas

## Estrutura recomendada

```md
# Instruções do projeto

## Começo rápido (3–5 linhas)
Instalação, servidor de desenvolvimento, comando de teste mais usado

## Obrigatório
Liste com numeração as regras inegociáveis

## Código e diretórios
Nomenclatura, localização, convenções de dependências

## Definição de concluído
O que conta como «pronto para submeter»

## Proibido
Declare explicitamente o que não fazer
```

## Princípios de escrita

### 1. Restrições rígidas à frente

Coloque «obrigatório» e «proibido» no início do ficheiro. Com Contexto limitado, o modelo dá mais peso ao começo — a mesma lógica de [Prioridade de Contexto](/guide/context/context-priority/).

### 2. Comandos copiáveis

Escreva comandos **realmente executáveis**, não «corra os testes»:

```md
# Bom
pnpm test --filter @app/web

# Mau
Garanta que os testes passam
```

### 3. Critérios de conclusão verificáveis

```md
## Definição de concluído
- `pnpm lint` e `pnpm test` sem falhas
- Novas APIs com testes unitários correspondentes
- Alterações visíveis ao utilizador com passos de teste manual (navegador + telemóvel)
```

### 4. O «porquê» numa frase, no máximo

```md
- Não altere `generated/`: é gerado por código; alterações manuais são sobrescritas no próximo build
```

Contexto longo deve ligar à documentação formal em `docs/`.

## O que são «boas instruções»

Boas instruções permitem a pessoas e ao Codex captar depressa:

- O que fazer primeiro
- O que não se pode fazer
- Até que ponto conta como concluído

Se depois de ler ainda não souber que comando correr primeiro, o que não tocar e como saber que acabou, ainda não está suficientemente útil.

## Fragmento de playbook de equipa

```md
## PR e Git
- Nomes de branches: prefixos `feat/`, `fix/`, `docs/`
- Um PR faz uma só coisa; refactors amplos em PR separado
- Antes do merge, review humano do diff é obrigatório, mesmo que o Codex já tenha corrido testes

## Colaboração com o Codex
- Em Tarefas grandes, exigir primeiro «apresente o plano; espere a minha confirmação antes de alterar código»
- Em migrações de base de dados, emitir primeiro o SQL da migração para revisão humana
```

## Erros habituais

| Erro | Consequência |
|---|---|
| Empilhar uma enciclopédia de frameworks | Comandos de teste críticos ignorados |
| Regras contraditórias | O modelo escolhe uma ao acaso |
| Só frases vazias como «seja elegante» | Impossível verificar |
| Incluir segredos ou URLs de intranet | Risco de fuga |

## Mal-entendidos habituais

### 1. Mais detalhe não é automaticamente melhor

Demasiado disperso, longo ou enciclopédico afoga as regras de prioridade realmente alta.

### 2. Frases como «respeite as normas» contam como instrução?

Normalmente não são executáveis.  
Melhor escrever diretamente:

- Comandos reais
- Diretórios explícitos
- Critérios de conclusão concretos

### 3. Pode misturar contexto de fundo e regras de execução à vontade?

Também não se recomenda.  
Melhor:

- Regras à frente
- Contexto comprimido numa frase
- Explicações longas em docs

## Ao reescrever, fixe estes pontos

Se tiver instruções de projeto dispersas, pode condensá-las assim:

1. Traga «obrigatório/proibido» para a frente
2. Transforme frases vazias em comandos ou itens de verificação concretos
3. Encurte blocos longos de contexto; troque por ligações
4. Dê um conjunto mínimo de definição de concluído

Boas instruções de projeto não se medem pela quantidade, e sim por restrições, comandos e critérios de conclusão suficientemente claros para executar de imediato.

## Ritmo de manutenção

- Sempre que mudarem comandos de CI, **atualize em sincronia** o `AGENTS.md`
- Revisão trimestral: apague regras desatualizadas
- Primeiro passo do onboarding de novos membros: ler AGENTS.md e concluir o «começo rápido»

## Leitura complementar

- [Instruções do projeto](/guide/customization/project-instructions/)
- [Explorar—planear—executar—verificar](/cases/workflows/explore-plan-execute-verify/)
- [Definir concluído](/prompts/define-done/)

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com as páginas atuais da série `AGENTS.md` deste repositório e com capítulos de Contexto e fluxos de trabalho; esta página limita-se a princípios estáveis de escrita e ritmo de manutenção, sem transformar detalhes de implementação de um cliente concreto em compromisso permanente.  
**Última verificação:** 2026-07-26
