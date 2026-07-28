---
title: Verificar Artefatos
description: Verificar documentação gerada, páginas e outros Artefatos.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Aqui, «Artefato» é o que a Tarefa entrega no fim, por exemplo:

- Um documento
- Uma página
- Uma imagem
- Uma tabela
- Um ficheiro gerado

Não assuma que o Artefato está correto só porque o código parece certo.

## Porque verificar Artefatos à parte

Muitas Tarefas entregam mais do que o diff de código — incluem o que o utilizador vê e usa de facto.

Ao verificar Artefatos, costuma olhar:

- Se a coisa final se pode usar
- Se a apresentação corresponde ao esperado
- Se, ao partilhar, parece estranha, errada ou incompleta

Alguns problemas não estão na camada de código, e sim na apresentação final.

Por exemplo:

- O código da página corre, mas o layout está errado
- A estrutura do texto está certa, mas lê-se mal
- O formato da ligação está correto, mas ao abrir está errado
- A tabela foi gerada, mas a ordem dos campos não segue o hábito de uso

Por isso «gerou» ≠ «utilizável».

Para Artefatos não de código: abra o ficheiro, verifique ligações, compare com o design, leia o texto em voz alta. Para páginas: pré-visualização em dispositivo real ou navegador — não só o código gerado.

## Verificar por tipo de Artefato

Pode decidir como verificar pelo tipo:

- **Página**: renderização real, layout, ligações, interação
- **Documento**: estrutura, terminologia, legibilidade, ligações
- **Imagem**: tamanho, nitidez, texto, detalhes
- **Tabela ou ficheiro exportado**: campos, ordem, abertura, legibilidade

## Mal-entendidos habituais

### 1. Build a passar ≠ página sem problemas

Build a passar só diz «conseguiu ser gerado»; não diz «está com o aspeto certo, conteúdo certo, interação certa».

### 2. Conteúdo documental também se verifica

Sim.

Sobretudo:

- Hierarquia de títulos razoável
- Ligações clicáveis e corretas
- Terminologia consistente
- Texto natural e legível

### 3. Só um ecrã não chega

O ecrã serve para uma visão rápida; muitos problemas só aparecem ao abrir o ficheiro ou a página reais.

## Aplicação direta

Pode exigir diretamente:

```text
No fim, faça uma auto-verificação na perspetiva do Artefato final e diga-me o que abriu de facto, o que encontrou e o que ainda não verificou.
```

## Ordem de verificação

Pode seguir esta ordem:

1. Abra primeiro o Artefato real
2. Compare ponto a ponto com os seus critérios de aceitação
3. Veja problemas pequenos na camada de experiência

Conseguir correr só diz que a base não partiu; poder entregar ainda depende do efeito de uso final.


---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica métodos de Verificação orientados ao entregável final; ligações internas, classificação de Artefatos e ordem de verificação foram revistas, e o corpo não depende de factos voláteis de produto.  
**Última verificação:** 2026-07-26
