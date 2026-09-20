import test from 'node:test';
import assert from 'node:assert/strict';
import { learningPathSidebar } from '../src/utils/learningPathSidebar.mjs';
const link = (href, isCurrent = false) => ({ type: 'link', href, label: href, isCurrent, attrs: {}, badge: undefined });
const flatten = (entries) => entries.flatMap((entry) => entry.type === 'group' ? flatten(entry.entries) : [entry]);
function fixture(prefix = '') {
	return [{type: 'group', label: 'guide', entries: [
		link(prefix + '/guide/learning-paths/'),
		{type: 'group', label: 'beginner', entries: [
			link(prefix + '/guide/learning-paths/beginner/01-talk-to-codex/', true),
			link(prefix + '/guide/learning-paths/beginner/'),
		]},
		link(prefix + '/guide/learning-paths/team/'),
		link(prefix + '/guide/getting-started/'),
		link(prefix + '/guide/reference/troubleshooting/'),
		link(prefix + '/guide/developer-platform/sdk-overview/'),
	]}];
}
test('beginner path keeps its steps, overview and targeted help; preserves current state', () => {
	const source = fixture();
	const original = structuredClone(source);
	const result = flatten(learningPathSidebar(source, '/guide/learning-paths/beginner/01-talk-to-codex/', undefined));
	assert.equal(result.length, 5);
	assert.equal(result.filter((entry) => entry.isCurrent).length, 1);
	assert.equal(result[0].label, '所有学习路径');
	assert.equal(result[1].href, '/guide/learning-paths/beginner/');
	assert.ok(result[2].label.startsWith('1. '));
	assert.ok(!result.some((entry) => entry.href.includes('/team/') || entry.href.includes('/sdk-')));
	assert.deepEqual(source, original);
});
test('traditional path uses traditional labels and matching locale URLs', () => {
	const result = learningPathSidebar(fixture('/zh-tw'), '/zh-tw/guide/learning-paths/beginner/', 'zh-tw');
	assert.equal(result[0].label, '所有學習路徑');
	assert.ok(flatten(result).every((entry) => entry.href.startsWith('/zh-tw/')));
});
test('reference, path directory, other locales and unknown paths retain module sidebar', () => {
	for (const [path, locale] of [['/guide/reference/',undefined],['/guide/learning-paths/',undefined],['/en/guide/learning-paths/beginner/','en'],['/guide/learning-paths/beginner-extra/',undefined]]) {
		assert.equal(learningPathSidebar(fixture(),path,locale),null);
	}
});
