#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = execFileSync('git', ['ls-files', '-z', '--cached', '--others', '--exclude-standard'], { cwd: root })
	.toString('utf8')
	.split('\0')
	.filter(Boolean);
const issues = [];

const forbiddenPath = /(?:^|\/)(__pycache__)(?:\/|$)|\.py[co]$/;
const personalPathPatterns = [
	/\/Users\/[^/<>\s]+\/(?:Workspace|Projects|Documents|Desktop|Downloads|\.pyenv)\//g,
	/\/home\/[^/<>\s]+\/(?:workspace|projects|documents|desktop|downloads|\.pyenv)\//gi,
	/[A-Z]:\\Users\\[^\\<>\s]+\\(?:Workspace|Projects|Documents|Desktop|Downloads)\\/g,
];
const badUrlPlaceholder = ['https://example.invalid', '/repo'].join('');
const credentialPatterns = [
	{ label: 'AWS access key', pattern: /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/g },
	{ label: 'OpenAI-style secret', pattern: /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/g },
	{ label: 'GitHub token', pattern: /\bgh[pousr]_[A-Za-z0-9]{30,}\b/g },
	{ label: 'Slack token', pattern: /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/g },
	{ label: 'private key block', pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g },
];
const obviousPlaceholder = /(?:EXAMPLE|PLACEHOLDER|REDACTED|YOUR[_-]?|DUMMY|TEST)/i;

for (const file of files) {
	const fullPath = path.join(root, file);
	if (!fs.existsSync(fullPath)) continue;
	if (forbiddenPath.test(file)) issues.push(`${file}: generated Python cache is tracked`);
	const stat = fs.statSync(fullPath);
	if (!stat.isFile() || stat.size > 5 * 1024 * 1024) continue;
	const buffer = fs.readFileSync(fullPath);
	if (buffer.includes(0)) continue;
	const text = buffer.toString('utf8');
	if (text.includes(badUrlPlaceholder)) issues.push(`${file}: contains the obsolete URL-shaped repository placeholder`);
	for (const pattern of personalPathPatterns) {
		pattern.lastIndex = 0;
		if (pattern.test(text)) issues.push(`${file}: contains a machine-specific absolute user path`);
	}
	for (const { label, pattern } of credentialPatterns) {
		pattern.lastIndex = 0;
		for (const match of text.matchAll(pattern)) {
			if (!obviousPlaceholder.test(match[0])) issues.push(`${file}: contains a possible ${label}`);
		}
	}
}

console.log(`Checked ${files.length} repository paths; ${issues.length} hygiene issue(s).`);
for (const issue of issues) console.log(`  - ${issue}`);
if (issues.length > 0) process.exitCode = 1;
