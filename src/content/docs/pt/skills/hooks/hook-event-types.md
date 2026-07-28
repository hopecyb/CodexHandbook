---
title: Tipos de evento Hook
description: Pontos de disparo de Hook na cadeia de execução do Codex — validação, log e bloqueio na fase certa.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Aqui o tema é **quando** a mesma checagem deve disparar.

**Eventos Hook** são os momentos em que o sistema chama a lógica que você configurou em nós fixos. Entender os tipos de evento permite aplicar «auditoria e validação» de [Visão geral de Hooks](/skills/hooks/hooks-overview/) na configuração, sem atrasar cada chamada de ferramenta.

## Conteúdo

- Fases comuns de evento e cenários adequados
- Divisão de trabalho com [regras de comando](/guide/customization/rules/command-rules/)
- Performance e estratégia de falha na configuração

## Um princípio de julgamento

Não comece perguntando «esse Hook consegue implementar?».  
Pergunte primeiro: você quer barrar **antes** de acontecer, ou só registrar **depois**?

Muitos Hooks no lugar errado falham porque o momento de disparo foi mal escolhido.

:::note
**Nomes de eventos e campos seguem a [documentação oficial de Hooks](https://developers.openai.com/codex).** A tabela abaixo é agrupamento conceitual; após atualizar o CLI, confira `--help` e release notes.
:::

## Agrupamento de eventos (conceito)

| Fase | Eventos típicos (nomes conceituais) | Adequado para |
|---|---|---|
| Sessão | `session.start` / `session.end` | Checagem de ambiente, resumo de mudanças, nota final de auditoria |
| Antes da ferramenta | `tool.call.before` / `pre_tool_use` | Bloquear comandos perigosos, scan de padrão de segredo |
| Depois da ferramenta | `tool.call.after` / `post_tool_use` | Log estruturado, métricas, arquivo mascarado |
| Prompt | `user_prompt.submit` | Scan de política, limite de comprimento |
| Artefato | `artifact.create` | Cabeçalho de licença, whitelist de tipo de arquivo |
| Integração | `pr.before_create` (se suportado) | Número de issue, formato de changelog |

Não pendure a mesma lógica em vários eventos; escolha o ponto **mais cedo em que ainda dá para bloquear**.

## Como entender essas fases

- **Sessão**: no início ou fim desta Tarefa
- **Antes da ferramenta**: comando ou ferramenta ainda não executou de fato
- **Depois da ferramenta**: a ação já aconteceu — dá para registrar, resumir, checar de novo
- **Prompt**: assim que o conteúdo do usuário é enviado
- **Artefato**: assim que arquivo ou resultado é gerado

Entenda nesse nível primeiro; não force memorizar nomes de evento.

## Relação com o motor de regras

```text
Prompt do usuário → (opcional) Hook de prompt
    → Modelo propõe chamada de ferramenta
    → Motor de regras allow/deny
    → (opcional) Hook pre_tool → execução → Hook post_tool
```

- **Regras**: declarativas, rápidas, adequadas a padrões de comando conhecidos
- **Hook**: scripts imperativos, adequados a políticas complexas e sistemas externos

## Equívocos comuns

### 1. Se dá para detectar, antes ou depois dá no mesmo

Dá muita diferença.

Se o objetivo é «impedir o efeito colateral», pendure o mais cedo possível.  
Se a ação já terminou e só no `post_tool` você descobre o problema, em geral já é tarde.

### 2. Quanto mais eventos e mais fineza, mais profissional a configuração

Na configuração, busque «poucos e precisos» — primeiro acerte a lógica no ponto mais adequado.

### 3. Tipo de evento Hook é só detalhe técnico

Afeta diretamente:

- Se o risco é barrado a tempo
- Se o log é útil
- Se a interação fica lenta

## Estratégia de falha

| Estratégia | Quando usar |
|---|---|
| `block` | Violação de segurança, requisito rígido de conformidade |
| `warn` | Estilo, checagens sugeridas |
| `log` | Só observação, sem bloquear |

Timeout ou crash de Hook deve ser **seguro por padrão**: em produção, tenda a block ou fail closed, e registre o erro para triagem.

## Se não souber onde pendurar

Regra simplificada:

- Quer impedir ação perigosa: priorize eventos anteriores
- Quer registrar o que aconteceu: priorize eventos posteriores
- Quer checagem de abertura ou resumo de fechamento: eventos de sessão

Isso cobre a maioria dos cenários de configuração.

## Ideia de configuração mínima

1. Escolha um evento (comece por log só leitura em `post_tool`)
2. Script recebe payload JSON no stdin (nome da ferramenta, resumo de argumentos, diretório de trabalho)
3. Código de saída `0` = ok; diferente de `0` = block/warn conforme a política
4. Unit test: rode o script com fixture JSON fixa

Primeiro deixe claro se quer barrar ou registrar; depois decida em qual evento o Hook deve pendurar.

Exemplos completos: [Exemplos de configuração de Hook](/skills/hooks/hooks-examples/).

## Erros comuns

- Bloquear em `post_tool` o que deveria estar em `pre_tool` (efeito colateral já ocorreu)
- Chamar LLM ou rede lenta dentro do Hook — mata a interação
- Payload do evento com segredo escrito em log em texto claro
- Hook sem versionamento — ambientes da equipe inconsistentes

## Limites de segurança

- Permissão do script Hook deve ser ≤ Permissão do Agent monitorado
- Veja [casos de equipe Hook](/skills/hooks/hooks-overview/#casos-recomendados-para-a-equipe) e [modelo de ameaça](/guide/team-enterprise/security/threat-model/)

## Checklist de aceite

- [ ] Consegue citar o evento mais usado da equipe e o motivo
- [ ] Em falha, mensagem de erro legível
- [ ] Script com unit test ou fixture
- [ ] Configuração entra na revisão de código

## Fontes
- Referência OpenAI Codex Hooks
---

**Status:** outdated  
**Produtos aplicáveis:** CLI / App (conforme a versão)  
**Nota de revisão:** O núcleo desta página é agrupamento de eventos Hook, payload e estratégia de falha — detalhes de implementação de alta volatilidade; o material oficial público em 2026-07-26 não basta para marcar como estável.  
**Última Verificação:** 2026-07-26
