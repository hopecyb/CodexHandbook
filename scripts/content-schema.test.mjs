import assert from 'node:assert/strict';
import test from 'node:test';
import { handbookSchema, verification } from '../src/utils/contentSchema.mjs';

const base = { kind: 'editorial', checkedAt: '2026-09-18', summary: '检查了中文结构。' };

test('编辑审阅不要求或虚构实跑环境', () => {
	assert.equal(verification.parse(base).kind, 'editorial');
	assert.equal(verification.safeParse({ ...base, checkedAt: '2026-02-30' }).success, false);
});

test('缺环境或证据时拒绝实跑标记', () => {
	const run = { ...base, kind: 'run-tested' };
	assert.equal(verification.safeParse(run).success, false);
	assert.equal(verification.safeParse({ ...run, environment: 'Node.js 22 / macOS' }).success, false);
	assert.equal(verification.safeParse({ ...run, evidence: [{ label: '日志', href: '/downloads/log.md' }] }).success, false);
	assert.equal(verification.safeParse({ ...run, environment: 'Node.js 22 / macOS', evidence: [{ label: '日志', href: '/downloads/log.md' }] }).success, true);
});

test('来源核对必须包含来源，历史 verified 不转换为实跑', () => {
	assert.equal(verification.safeParse({ ...base, kind: 'source-checked' }).success, false);
	const page = handbookSchema.parse({ legacyVerification: { status: 'verified', checkedAt: '2026-07-26' } });
	assert.equal(page.verification, undefined);
	assert.equal(page.editorialStatus, undefined);
});
