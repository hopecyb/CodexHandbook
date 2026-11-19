import assert from 'node:assert/strict';
import test from 'node:test';
import {
	convertDocument,
	convertTranslatableText,
	createZhTwConverter,
	sourceRevision,
} from './lib/zh-tw-convert.mjs';

const converter = createZhTwConverter();

test('converts explicitly typed prose fences but preserves code and untyped fences', () => {
	const source = [
		'正文里的任务。',
		'',
		'```text',
		'请检查这个文件，并说明风险。',
		'```',
		'',
		'```js',
		'const 任务 = "保持原样";',
		'```',
		'',
		'```',
		'未标语言的围栏保持原样。',
		'```',
	].join('\n');

	const converted = convertTranslatableText(source, converter);
	assert.match(converted, /正文裡的任務/);
	assert.match(converted, /請檢查這個檔案，並說明風險/);
	assert.match(converted, /const 任务 = "保持原样"/);
	assert.match(converted, /未标语言的围栏保持原样/);
});

test('applies one OpenCC pass followed by the approved glossary term', () => {
	assert.equal(converter('官方文档'), '官方文件');
});

test('generated documents are deterministic and omit wall-clock metadata', () => {
	const source = '---\ntitle: 测试页面\n---\n\n正文。\n';
	const options = { converter, sourceRevision: sourceRevision(source) };
	const first = convertDocument(source, options);
	const second = convertDocument(source, options);

	assert.equal(first, second);
	assert.doesNotMatch(first, /translated_at:/);
	assert.match(first, /locale: zh-TW/);
});
