---
title: Política de uso aceitável
description: Acordos ao nível da equipa sobre o que o Codex pode e não pode fazer, alinhados com tecnologia e formação.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

A **política de uso aceitável (AUP)** converte «posso usar o Codex para isto?» num consenso organizacional, em vez de o deixar ao critério individual. Complementa o [modelo de ameaças](/guide/team-enterprise/security/threat-model/): o modelo fala de riscos; a AUP fala de **limites de comportamento**.

## Conteúdo

- Temas que a AUP deve cobrir
- Encaixe com RH/conformidade e controlos técnicos
- Rascunho de cláusulas de exemplo (requer localização legal)

## O que a AUP gere

A AUP responde sobretudo a: mesmo que seja tecnicamente possível, está permitido fazê-lo na nossa equipa?

Não substitui a política técnica; escreve os limites organizacionais como regras que todos possam compreender e aplicar.

:::caution
O seguinte é um **esquema educativo**, não um parecer jurídico. Antes de o publicar formalmente deve revê-lo jurídico e conformidade.
:::

## Mal-entendidos frequentes

### A AUP também importa a quem a usa no dia a dia

Muita gente vê estas políticas como um requisito formal, alheias ao utilizador de primeira linha.

Mas no trabalho diário costumam aparecer perguntas como:

- Que dados não se podem passar ao Codex
- Em que cenários é preciso revisão humana
- Que extensões e ligações externas não se podem ligar à ligeira

Assim, não é só um documento jurídico: também é o limite real de uso.

### Ter política escrita não significa que a equipa a cumpra

Se a política diz «as alterações de produção requerem Aprovação», mas a Ferramenta permite saltá-la por omissão, a política perde efeito depressa.

Por isso o importante da AUP é alinhá-la com formação, Permissões, configuração e auditoria, não só escrevê-la completa.

## Temas recomendados

| Tema | Pontos-chave |
|---|---|
| Usos permitidos | Desenvolvimento, documentação, investigação, automatização interna |
| Usos proibidos | Acesso não autorizado, conteúdo de assédio, contornar controlos de segurança |
| Classificação de dados | Que repos/dados se podem usar; regras de PII de clientes |
| Responsabilidade da saída | Merge após revisão humana; não usar a saída como conselho jurídico/médico externo |
| Extensões | Só Plugin/MCP da lista aprovada |
| Contas | Proibido partilhar lugares pessoais; recuperar ao sair |
| Incidentes | Canal para reportar comportamento suspeito |

## Estrutura básica

1. **Propósito e alcance**
2. **Cenários de uso permitidos** (ligação ao [mapa de capacidades](/guide/start-here/codex-capability-map/))
3. **Cenários de uso proibidos**
4. **Dados e confidencialidade**
5. **Requisitos de supervisão humana** (merge, alterações de produção)
6. **Consequências do incumprimento** (remissão ao manual de colaboradores existente)
7. **Contactos e data de atualização**

## Alinhamento com controlos técnicos

| Cláusula AUP | Aplicação técnica |
|---|---|
| Não exfiltrar código-fonte | Política de rede, Aprovação de MCP |
| Alterações de produção requerem Aprovação | Proteção de branches, deny de `git push` |
| Só modelos aprovados | Configuração gerida pela organização |

## Erros frequentes

- AUP escrita sem formação
- Desalinhada com a realidade técnica (a política proíbe o que a Ferramenta permite)
- Sem atualizar durante anos, desfasada relativamente a funções novas (Computer Use, etc.)

## Como julgar se uma AUP é efetiva

Pergunta primeiro:

1. Responde a limites de uso reais da equipa?
2. Pode aterrar em formação, configuração ou fluxos de Aprovação?
3. Perante uma infração, a equipa sabe como a detetar e tratar?

Se as três se aproximam de «sim», a política tem mais probabilidade de ser realmente efetiva.

## Lista de aceitação

- [ ] O onboarding inclui confirmação da AUP
- [ ] Sem contradição com as [regras de equipa](/guide/customization/rules/team-rules/)
- [ ] Revisão anual ou ao publicar funções importantes

O valor da AUP é escrever com clareza os limites de uso do Codex na equipa e alinhá-los com os controlos reais.

---

**Estado:** verified  
**Produtos aplicáveis:** Organização / equipa  
**Base de verificação:** A documentação empresarial atual da OpenAI continua a enfatizar que plugins, apps, ações externas e acesso a sistemas de origem devem gerir-se por papel e limites de Permissão; esta página define a AUP como limite de comportamento organizacional e mantém a premissa de «esquema educativo, requer localização legal», sem a apresentar como template oficial de política.  
**Última verificação:** 2026-07-26
