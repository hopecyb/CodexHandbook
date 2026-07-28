---
title: Memórias e Contexto persistente
description: Como o Codex memoriza preferências e factos entre sessões — capacidades, limites e normas de equipa.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Alguns clientes Codex suportam **memória (Memory)**: retenção, para sessões seguintes, de preferências ou factos que confirmou em várias conversas. Complementa `AGENTS.md` e a configuração do projeto, mas **não pode** substituir normas de equipa versionadas.

## Conteúdo

- O que a memória deve e não deve guardar
- Prioridade face a AGENTS.md, à função Memories e às instruções do projeto
- Como pessoas e equipas gerem o conteúdo da memória

## Para que serve a memória

Pode entender a memória assim: **o Codex ajuda-o a lembrar o que costuma repetir, mas que não vale a pena voltar a explicar de cada vez.**

Por exemplo:

- Prefere explicações em português
- Gosta de conclusão primeiro e detalhes depois
- Num projeto, «backend» por defeito aponta para um certo diretório

É mais «preferências pessoais de longo prazo e alguns factos estáveis» — não um manual do projeto, nem um cofre de segredos.

## O que a memória deve guardar

| Adequado | Inadequado |
|---|---|
| Preferências pessoais de código (idioma dos comentários, indentação) | Segredos de produção, Tokens |
| Aliases de projeto que repete («backend = `services/api`») | Estado de tarefas de sprint que muda |
| Factos não sensíveis que pediu explicitamente «por favor, lembre-se» | Normas de equipa que devem estar no Git |

Normas a nível de equipa devem ir para **`AGENTS.md` ou configuração do projeto**, para review e onboarding de novos membros. Ver [Âmbito e prioridade](/guide/customization/agents-md/scope-and-precedence/).

## Mal-entendidos habituais

### A memória não «lembra tudo para sempre»

Muita gente pensa que, se disse uma vez, o Codex daí em diante lembra de forma completa e estável.

A compreensão mais correta: a memória é uma camada auxiliar para reduzir repetição; não substitui documentação nem informação formal no repositório.

### A memória não deve carregar o consenso da equipa

Se uma regra só existe na memória da sua conta, os outros não a veem e não a podem rever.

Esse tipo de conteúdo deve voltar a:

- `AGENTS.md`
- Documentação do projeto
- Ficheiros de configuração

### A memória não é o sítio para informação sensível

Mesmo que um cliente suporte memória, não deve entregar-lhe a longo prazo:

- Tokens
- Dados de clientes
- Contas internas
- Informação de negócio não pública

## Comparação com mecanismos relacionados

| Mecanismo | Quem vê | Como muda |
|---|---|---|
| Prompt único | Tarefa atual | Você escreve |
| Memória | Normalmente só a sua conta/área de trabalho | Confirmação na conversa ou gestão nas definições |
| `AGENTS.md` | Todos os colaboradores do repositório | Git PR |
| Configuração do projeto | Segundo a camada de configuração | Ficheiro + política gerida |

## Forma recomendada de uso

1. **Escreva primeiro no repositório**: comandos de teste, estrutura de diretórios, proibição de push — isto não deve existir só na memória
2. **Memória para preferências pessoais**: p. ex. «explicar em português», «comentários de diff em inglês»
3. **Limpeza periódica**: após grandes mudanças de arquitetura, apague memórias desatualizadas
4. **Projetos sensíveis**: desative ou limite a memória para evitar fuga de Contexto entre projetos

## Como decidir se deve entrar na memória

Se não tiver a certeza se uma informação deve ir para a memória, pergunte-se:

1. É uma preferência pessoal que costumo repetir?
2. É um facto relativamente estável a curto prazo?
3. Mesmo que os outros não a vejam, a colaboração da equipa não é afetada?

Só quando as três respostas se aproximam de «sim» é que a memória é adequada.

## Limites de segurança

- Não deixe a memória tornar-se um **canal secreto** que contorna proibições de `AGENTS.md`
- Não guarde na memória dados de clientes, credenciais ou informação financeira não pública
- Ambientes empresariais podem desativar a memória — cumpra a política gerida

## Erros habituais

- Meter a «lista de epics desta semana» só na memória; os colaboradores não a veem
- Não atualizar nenhum lado quando a memória conflita com `AGENTS.md`
- Pensar que memória = «o modelo lembra para sempre o repositório inteiro»

A memória serve melhor para «preferências pessoais que se repetem e alguns factos estáveis»; não substitui documentação do repositório, regras de equipa nem a gestão de informação sensível.

## Referências

- Documentação de memória OpenAI Codex (conforme a versão)
- stormzhang `19-memory.md`
- Capítulo de memória de codex.bozhouai.com (referência de estrutura)

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI (conforme a versão)  
**Base de verificação:** Cruzada com a documentação oficial atual do OpenAI Help Center sobre ChatGPT Memory e com capítulos já verificados deste manual sobre instruções de projeto, preferências pessoais e limites de segurança; o conteúdo limita-se ao princípio estável de que «a memória serve para preferências pessoais e alguns factos estáveis, não substitui regras do repositório nem a gestão de informação sensível».  
**Última verificação:** 2026-07-26
