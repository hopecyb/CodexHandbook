import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const header = fs.readFileSync(new URL('../src/components/Header.astro', import.meta.url), 'utf8');

test('desktop dropdowns belong to one mutually exclusive details group', () => {
	const menuTags = [...header.matchAll(/<details\b[^>]*class:list=\{\{[^}]*'more-menu'[^>]*>/g)].map(
		([tag]) => tag,
	);

	assert.equal(menuTags.length, 2, 'expected both desktop dropdowns to be covered');

	const groupNames = menuTags.map((tag) => tag.match(/\bname=["']([^"']+)["']/)?.[1]);
	assert.ok(groupNames.every(Boolean), 'every desktop dropdown needs a details group name');
	assert.equal(new Set(groupNames).size, 1, 'desktop dropdowns must share one details group name');
});
