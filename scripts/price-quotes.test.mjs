import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const records = JSON.parse(fs.readFileSync(new URL('../src/data/chatgptPriceQuotes.json', import.meta.url)));

test('每条价格都有可追溯来源、原币种、渠道和日期', () => {
	assert.equal(new Set(records.map(row => row.id)).size, records.length);
	for (const row of records) {
		assert.match(row.amount, /^\d+\.\d{2}$/);
		assert.equal(new URL(row.source).hostname, 'apps.apple.com');
		assert.equal(row.channel, 'App Store');
		assert.equal(row.region, 'US');
		assert.equal(row.currency, 'USD');
		assert.match(row.checkedAt, /^\d{4}-\d{2}-\d{2}$/);
		assert.equal(row.period, null, '来源未注明周期，不推断月付或年付');
		assert.equal(row.tax, null, '来源未注明税费，不假定含税');
		assert.equal('factor' in row, false);
	}
});

test('保留同名不同价格，不合并成推断的年付套餐', () => {
	assert.deepEqual(records.filter(row => row.label === 'ChatGPT Plus').map(row => row.amount), ['19.99', '200.00']);
});
