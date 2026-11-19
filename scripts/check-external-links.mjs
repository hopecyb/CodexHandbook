#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkUrl } from './lib/external-link-check.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const timeoutMs = Number(process.env.LINK_CHECK_TIMEOUT_MS ?? 12_000);
const concurrency = Number(process.env.LINK_CHECK_CONCURRENCY ?? 8);
const retries = Number(process.env.LINK_CHECK_RETRIES ?? 2);
const extensions = /\.(?:md|mdx|astro|mjs|js|json|yml|yaml)$/i;

const tracked = execFileSync('git', ['ls-files', '-z'], { cwd: root })
	.toString('utf8')
	.split('\0')
	.filter((file) => extensions.test(file));

const urls = new Set();
for (const file of tracked) {
	const text = fs.readFileSync(path.join(root, file), 'utf8');
	for (const match of text.matchAll(/https?:\/\/[^\s<>"'`\])}]+/g)) {
		const value = match[0].replace(/[.,;:!?]+$/, '');
		try {
			const url = new URL(value);
			if (['localhost', '127.0.0.1'].includes(url.hostname)) continue;
			if (url.hostname.endsWith('.invalid') || /(^|\.)example\.(?:com|org|net)$/.test(url.hostname)) continue;
			if (url.href.includes('...') || /\{[^}]+\}/.test(url.href)) continue;
			url.hash = '';
			urls.add(url.href);
		} catch {
			// A malformed example is not a fetchable external link.
		}
	}
}

const queue = [...urls].sort();
const results = [];
let cursor = 0;
async function worker() {
	while (cursor < queue.length) {
		const index = cursor;
		cursor += 1;
		results[index] = await checkUrl(queue[index], { timeoutMs, retries });
	}
}

await Promise.all(Array.from({ length: Math.min(concurrency, queue.length || 1) }, () => worker()));
const failures = results.filter((result) => result.error);
console.log(`Checked ${results.length} unique external links; ${failures.length} failed.`);
for (const failure of failures) console.log(`  - ${failure.url}: ${failure.error}`);
if (failures.length > 0) process.exitCode = 1;
