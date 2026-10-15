import test from 'node:test';
import assert from 'node:assert/strict';
import { rehypeLocaleInternalLinks } from '../src/utils/rehypeLocaleInternalLinks.mjs';

test('shared downloads retain their URLs while document links follow the locale', () => {
  for (const locale of ['zh-tw', 'en', 'fr']) {
    const links = ['/downloads/reading-event/reading-event-1.0.0.zip', '/downloads/reading-event/solution/index.html', '/downloads/first-project/README.md#开始', '/guide/quality/', 'https://example.com/', '/zh-tw/guide/'];
    const tree = { type: 'root', children: links.map(href => ({type: 'element', tagName: 'a', properties: {href}})) };
    rehypeLocaleInternalLinks()(tree, {path: `/repo/src/content/docs/${locale}/cases/example.md`});
    assert.deepEqual(tree.children.map(x=>x.properties.href), [...links.slice(0,3), `/${locale}/guide/quality/`, ...links.slice(4)]);
  }
});
