#!/usr/bin/env node
/**
 * Validate structural and metadata parity for zh-CN pages changed in the
 * current worktree. This catches metadata-only "syncs" whose translated body
 * still reflects an older source structure.
 */
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const docsRoot = path.join(root, 'src/content/docs');
const supportedLocales = ['en', 'fr', 'de', 'es', 'pt', 'vi', 'ja', 'ko'];
const localeIndex = process.argv.indexOf('--locale');
const summaryOnly = process.argv.includes('--summary');
const locales =
	localeIndex >= 0
		? process.argv[localeIndex + 1]?.split(',').map((locale) => locale.trim()).filter(Boolean)
		: supportedLocales;
if (!locales || locales.length === 0) {
	throw new Error('Pass one or more comma-separated locales after --locale.');
}
for (const locale of locales) {
	if (!supportedLocales.includes(locale)) throw new Error(`Unsupported locale: ${locale}`);
}
const localeRoots = new Set([...supportedLocales, 'zh-tw']);
const localizedDiagramNames = new Set([
	'codex-client-selection',
	'codex-work-system-architecture',
	'extension-selection-map',
	'hook-lifecycle-events',
	'sandbox-approval-flow',
	'scheduled-task-safety-loop',
	'subagent-orchestration',
	'task-execution-loop',
	'verified-bug-fix-workflow',
]);
const localizedContentRoots = new Set(['ai-roadmap', 'cases', 'guide', 'pets', 'prompts', 'skills', 'theme']);

function revision(text) {
	return createHash('sha1').update(text).digest('hex').slice(0, 7);
}

function splitDocument(content) {
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
	return match ? { frontmatter: match[1], body: content.slice(match[0].length) } : { frontmatter: '', body: content };
}

function metadata(frontmatter, key) {
	return frontmatter.match(new RegExp(`^${key}:\\s*['"]?([^'"\\n]+)`, 'm'))?.[1]?.trim() ?? null;
}

function countTableBlocks(body) {
	let count = 0;
	let inTable = false;
	for (const line of body.split(/\r?\n/)) {
		const tableLine = /^\s*\|.*\|\s*$/.test(line);
		if (tableLine && !inTable) count += 1;
		inTable = tableLine;
	}
	return count;
}

function structure(body) {
	return {
		headings: [...body.matchAll(/^(#{2,6})\s+/gm)].map((match) => match[1].length).join(','),
		fences: (body.match(/^```/gm) ?? []).length,
		tables: countTableBlocks(body),
		images: (body.match(/!\[[^\]]*]\([^\n)]+\)/g) ?? []).length,
		orderedItems: (body.match(/^\s*\d+\.\s+/gm) ?? []).length,
	};
}

function internalPaths(body) {
	const paths = [];
	for (const match of body.matchAll(/\]\((\/[^)\s#]+)(?:#[^)\s]*)?\)/g)) paths.push(match[1]);
	for (const match of body.matchAll(/href=["'](\/[^"'#]+)(?:#[^"']*)?["']/g)) paths.push(match[1]);
	return paths;
}

function shouldLocalizePath(pathname) {
	const first = pathname.split('/').filter(Boolean)[0];
	if (!first || localeRoots.has(first)) return false;
	return localizedContentRoots.has(first);
}

function changedSourceIds() {
	const output = execFileSync('git', ['diff', '--name-only', '--diff-filter=AM', '--', 'src/content/docs'], {
		cwd: root,
		encoding: 'utf8',
	});
	const prefix = 'src/content/docs/';
	return output
		.split(/\r?\n/)
		.filter((file) => file.startsWith(prefix))
		.map((file) => file.slice(prefix.length))
		.filter((id) => !localeRoots.has(id.split('/')[0]) && /\.(md|mdx)$/.test(id));
}

const issues = [];
const issueCounts = Object.fromEntries(locales.map((locale) => [locale, 0]));
const failedPages = Object.fromEntries(locales.map((locale) => [locale, new Set()]));
const ids = changedSourceIds();

function addIssue(locale, message) {
	issues.push(message);
	issueCounts[locale] += 1;
	failedPages[locale].add(message.split(':', 1)[0]);
}

for (const id of ids) {
	const sourcePath = path.join(docsRoot, id);
	const sourceContent = fs.readFileSync(sourcePath, 'utf8');
	const source = splitDocument(sourceContent);
	const expectedRevision = revision(sourceContent);
	const expectedStructure = structure(source.body);

	for (const locale of locales) {
		const translationPath = path.join(docsRoot, locale, id);
		const label = `${locale}/${id}`;
		if (!fs.existsSync(translationPath)) {
			addIssue(locale, `${label}: missing translation`);
			continue;
		}

		const translationContent = fs.readFileSync(translationPath, 'utf8');
		const translation = splitDocument(translationContent);
		const actualRevision = metadata(translation.frontmatter, 'source_revision');
		if (actualRevision !== expectedRevision) {
			addIssue(locale, `${label}: source_revision ${actualRevision ?? 'missing'} != ${expectedRevision}`);
		}

		const status = metadata(translation.frontmatter, 'translation_status');
		if (status !== 'reviewed') {
			addIssue(locale, `${label}: translation_status is ${status ?? 'missing'}, expected reviewed`);
		}

		const actualStructure = structure(translation.body);
		for (const key of Object.keys(expectedStructure)) {
			if (actualStructure[key] !== expectedStructure[key]) {
				addIssue(locale, `${label}: ${key} ${JSON.stringify(actualStructure[key])} != ${JSON.stringify(expectedStructure[key])}`);
			}
		}

		if (/--cwd\b/.test(translation.body)) addIssue(locale, `${label}: contains stale --cwd`);
		for (const diagramName of localizedDiagramNames) {
			if (translation.body.includes(`/diagrams/${diagramName}-zh-cn.svg`)) {
				addIssue(locale, `${label}: references zh-CN diagram ${diagramName}`);
			}
		}

		for (const pathname of internalPaths(translation.body)) {
			if (shouldLocalizePath(pathname)) {
				addIssue(locale, `${label}: unlocalized internal link ${pathname}`);
			}
		}
	}
}

console.log('i18n changed-page parity');
console.log(`  source pages: ${ids.length}`);
console.log(`  locale checks: ${ids.length * locales.length}`);
console.log(`  issues: ${issues.length}`);
console.log(`  by locale: ${locales.map((locale) => `${locale} ${issueCounts[locale]}`).join(', ')}`);
console.log(
	`  passing pages: ${locales.map((locale) => `${locale} ${ids.length - failedPages[locale].size}/${ids.length}`).join(', ')}`,
);
if (!summaryOnly) {
	for (const issue of issues.slice(0, 240)) console.log(`  - ${issue}`);
	if (issues.length > 240) console.log(`  - … and ${issues.length - 240} more`);
}

if (issues.length > 0) process.exitCode = 1;
