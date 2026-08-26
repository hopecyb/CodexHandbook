#!/usr/bin/env node
/**
 * Translation coverage report for Codex Handbook.
 * Compares zh-CN (root) pages under src/content/docs/ with locale mirrors (default: en).
 *
 * Usage:
 *   node scripts/i18n-status.mjs
 *   node scripts/i18n-status.mjs --locale en
 *   node scripts/i18n-status.mjs --locale en --missing
 */
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const docsRoot = path.join(root, 'src/content/docs');

const args = process.argv.slice(2);
const localeIdx = args.indexOf('--locale');
const locale = localeIdx >= 0 ? args[localeIdx + 1] : 'en';
const showMissing = args.includes('--missing');
const showAll = args.includes('--all-missing');
const showStale = args.includes('--stale');

const CONTENT_LOCALE_PREFIXES = new Set([
	'en',
	'zh-tw',
	'fr',
	'ja',
	'ko',
	'es',
	'de',
	'pt',
	'vi',
]);

function walk(dir, files = []) {
	if (!fs.existsSync(dir)) return files;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (CONTENT_LOCALE_PREFIXES.has(entry.name) && path.dirname(full) === docsRoot) {
				continue;
			}
			walk(full, files);
		} else if (/\.(md|mdx)$/.test(entry.name)) {
			files.push(full);
		}
	}
	return files;
}

function relId(absPath, base) {
	return path.relative(base, absPath).split(path.sep).join('/');
}

function revision(text) {
	return createHash('sha1').update(text).digest('hex').slice(0, 7);
}

function readTranslationMeta(filePath) {
	const text = fs.readFileSync(filePath, 'utf8');
	const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) return { translation_status: 'unknown', source_revision: null };
	const fm = match[1];
	const status = fm.match(/translation_status:\s*(\S+)/)?.[1] ?? 'missing-field';
	const sourceRevision = fm.match(/source_revision:\s*['"]?([a-f0-9]{7})['"]?/i)?.[1] ?? null;
	return { translation_status: status, source_revision: sourceRevision };
}

const zhFiles = walk(docsRoot).map((f) => relId(f, docsRoot)).sort();
const localeRoot = path.join(docsRoot, locale);
const enFiles = walk(localeRoot).map((f) => relId(f, localeRoot)).sort();

const zhSet = new Set(zhFiles);
const enSet = new Set(enFiles);
const missing = zhFiles.filter((id) => !enSet.has(id));
const extra = enFiles.filter((id) => !zhSet.has(id));

const statusCounts = {};
const revisionCounts = { current: 0, stale: 0, missing: 0 };
const stale = [];
for (const id of enFiles) {
	const { translation_status, source_revision } = readTranslationMeta(path.join(localeRoot, id));
	statusCounts[translation_status] = (statusCounts[translation_status] ?? 0) + 1;

	const sourcePath = path.join(docsRoot, id);
	if (!fs.existsSync(sourcePath) || !source_revision) {
		revisionCounts.missing += 1;
		continue;
	}

	const currentRevision = revision(fs.readFileSync(sourcePath, 'utf8'));
	if (source_revision === currentRevision) {
		revisionCounts.current += 1;
	} else {
		revisionCounts.stale += 1;
		stale.push({ id, expected: currentRevision, actual: source_revision });
	}
}

function moduleOf(id) {
	const top = id.split('/')[0];
	if (top === 'guide') {
		return `guide/${id.split('/')[1] ?? ''}`;
	}
	return top;
}

const modules = new Map();
for (const id of zhFiles) {
	const mod = moduleOf(id);
	const row = modules.get(mod) ?? { zh: 0, en: 0, missing: 0 };
	row.zh += 1;
	if (enSet.has(id)) row.en += 1;
	else row.missing += 1;
	modules.set(mod, row);
}

const coverage = zhFiles.length === 0 ? 0 : ((enFiles.length / zhFiles.length) * 100).toFixed(1);

console.log(`Codex Handbook i18n status — locale: ${locale}`);
console.log('─'.repeat(60));
console.log(`zh-CN (root) pages: ${zhFiles.length}`);
console.log(`${locale} pages:          ${enFiles.length}`);
console.log(`Missing:              ${missing.length}`);
console.log(`Extra (no zh source): ${extra.length}`);
console.log(`Coverage:             ${coverage}%`);
console.log('');
console.log('translation_status distribution (existing locale pages):');
for (const [status, count] of Object.entries(statusCounts).sort((a, b) => b[1] - a[1])) {
	console.log(`  ${status.padEnd(16)} ${count}`);
}
console.log('');
console.log('source_revision freshness:');
console.log(`  current          ${revisionCounts.current}`);
console.log(`  stale            ${revisionCounts.stale}`);
console.log(`  missing          ${revisionCounts.missing}`);
console.log('');
console.log('By module:');
console.log(
	`${'module'.padEnd(32)} ${'zh'.padStart(4)} ${'en'.padStart(4)} ${'miss'.padStart(5)} ${'pct'.padStart(6)}`,
);
const sortedMods = [...modules.entries()].sort((a, b) => b[1].missing - a[1].missing || a[0].localeCompare(b[0]));
for (const [mod, row] of sortedMods) {
	const pct = row.zh === 0 ? '—' : `${((row.en / row.zh) * 100).toFixed(0)}%`;
	console.log(
		`${mod.padEnd(32)} ${String(row.zh).padStart(4)} ${String(row.en).padStart(4)} ${String(row.missing).padStart(5)} ${pct.padStart(6)}`,
	);
}

if (showMissing || showAll) {
	console.log('');
	console.log(`Missing ${locale} pages (${missing.length}):`);
	const list = showAll ? missing : missing.slice(0, 80);
	for (const id of list) console.log(`  ${id}`);
	if (!showAll && missing.length > 80) {
		console.log(`  … and ${missing.length - 80} more (use --all-missing)`);
	}
}

if (extra.length > 0 && (showMissing || showAll)) {
	console.log('');
	console.log(`Extra ${locale} pages with no zh source (${extra.length}):`);
	for (const id of extra) console.log(`  ${id}`);
}

if (showStale || showAll) {
	console.log('');
	console.log(`Stale ${locale} pages (${stale.length}):`);
	const list = showAll ? stale : stale.slice(0, 80);
	for (const item of list) {
		console.log(`  ${item.id} (${item.actual} → ${item.expected})`);
	}
	if (!showAll && stale.length > 80) {
		console.log(`  … and ${stale.length - 80} more (use --all-missing)`);
	}
}
