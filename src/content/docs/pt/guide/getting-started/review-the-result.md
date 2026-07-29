---
title: Revisar o resultado
description: Leia as mudanças, verifique o Artefato e decida aceitar ou modificar.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 90
---

Depois de concluir a Tarefa, muitos iniciantes pulam este passo.

Para usar o Codex com mais estabilidade, importa saber **revisar o resultado**.

Não olhe só o «concluído» — veja o que ele alterou de fato e se o resultado é o que você queria.

## Lista de verificação

1. **Olhar o Diff**: alterou só os arquivos permitidos?
2. **Abrir o Artefato**: o conteúdo atende ao critério de aceite?
3. **Pedir correção**: se falta pouco, continue com feedback preciso
4. **Decidir**: aceitar / alterar à mão / [desfazer](/guide/getting-started/undo-and-recover/)

Mais métodos: [Revisar Diff](/guide/quality/review-diffs/).

## Pontos fáceis de passar por alto

### 1. Só ler o resumo, sem ver a mudança real

O Codex pode escrever um resumo fluente — mas o que importa de verdade é:

- Alterou o arquivo errado?
- Alterou de passagem algo que você não autorizou?
- O resultado realmente atende às condições de aceite?

### 2. Ver «mais ou menos» e aceitar de cara

«Mais ou menos» costuma deixar buracos pequenos depois.  
Se falta pouco, um feedback preciso é melhor do que aceitar em silêncio.

### 3. Perceber que está errado e não saber como dizer

Você pode continuar com este tipo de frase:

```text
O resultado está perto, mas ainda há dois problemas: 1) … 2) … Corrija só estes dois pontos; não mexa no resto.
```

## Ordem de revisão

Na primeira prática, verifique nesta ordem:

1. **Alcance**: quais arquivos ele alterou
2. **Resultado**: página, documento ou saída de código atendem ao pedido?
3. **Efeitos colaterais**: introduziu mudanças extras ou erros novos?

No aceite, o ponto central é confirmar se desta vez dá para receber o resultado com tranquilidade.

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE  
**Base de verificação:** Cruzado com os capítulos já verificados deste handbook sobre revisar Diff, definição de pronto e desfazer/recuperar; esta página foca no método estável de «ver alcance, ver resultado, ver efeitos colaterais e então decidir se recebe».  
**Última verificação:** 2026-07-26
