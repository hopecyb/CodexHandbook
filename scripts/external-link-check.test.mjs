import assert from 'node:assert/strict';
import test from 'node:test';
import { checkUrl } from './lib/external-link-check.mjs';

test('falls back to GET when HEAD returns 405', async () => {
	const methods = [];
	const fetchImpl = async (_url, options) => {
		methods.push(options.method);
		return options.method === 'HEAD'
			? { ok: false, status: 405 }
			: { ok: true, status: 200 };
	};

	const result = await checkUrl('https://docs.example.test/page', {
		fetchImpl,
		timeoutMs: 100,
		retries: 0,
	});
	assert.deepEqual(methods, ['HEAD', 'GET']);
	assert.equal(result.status, 200);
	assert.equal(result.error, undefined);
});

test('does not treat a GET 405 as reachable', async () => {
	const result = await checkUrl('https://docs.example.test/page', {
		fetchImpl: async () => ({ ok: false, status: 405 }),
		timeoutMs: 100,
		retries: 0,
	});
	assert.equal(result.error, 'HTTP 405');
});
