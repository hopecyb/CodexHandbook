#!/usr/bin/env node
/**
 * Keep translation freshness metadata honest.
 *
 * Default mode marks translations stale when their source hash differs. It
 * never advances source_revision automatically. A reviewer can advance one
 * translation only with an explicit acknowledgement:
 *
 *   node scripts/sync-i18n-revisions.mjs
 *   node scripts/sync-i18n-revisions.mjs --check
 *   node scripts/sync-i18n-revisions.mjs --confirm-reviewed \
 *     --locale ja --page guide/start-here/index.md --reviewed-at 2026-11-19
 */
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const docsRoot = path.join(root, 'src/content/docs');
const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const confirmReviewed = args.includes('--confirm-reviewed');
const locales = ['en', 'fr', 'de', 'es', 'pt', 'vi', 'ja', 'ko', 'th', 'ru'];
const localeRoots = new Set([...locales, 'zh-tw']);

function option(name) {
	const index = args.indexOf(name);
	return index >= 0 ? args[index + 1] : null;
}

const selectedLocale = option('--locale');
const selectedPage = option('--page');
const reviewedAt = option('--reviewed-at');

if (confirmReviewed) {
	if (!locales.includes(selectedLocale)) throw new Error(`Unsupported locale: ${selectedLocale ?? 'missing'}`);
	if (!selectedPage || selectedPage.startsWith('/') || selectedPage.includes('..') || !/\.(md|mdx)$/.test(selectedPage)) {
		throw new Error('--confirm-reviewed requires a safe relative --page ending in .md or .mdx.');
	}
	if (!/^\d{4}-\d{2}-\d{2}$/.test(reviewedAt ?? '')) {
		throw new Error('--confirm-reviewed requires --reviewed-at YYYY-MM-DD.');
	}
}

function walkSources(dir, files = []) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (path.dirname(fullPath) === docsRoot && localeRoots.has(entry.name)) continue;
			walkSources(fullPath, files);
		} else if (/\.(md|mdx)$/.test(entry.name)) {
			files.push(fullPath);
		}
	}
	return files;
}

function sourceRevision(content) {
	return createHash('sha1').update(content).digest('hex').slice(0, 7);
}

function metadata(frontmatter, key) {
	return frontmatter.match(new RegExp(`^${key}:\\s*['\"]?([^'\"\\n]+)`, 'm'))?.[1]?.trim() ?? null;
}

function setFrontmatterField(frontmatter, key, value) {
	const line = `${key}: ${value}`;
	const pattern = new RegExp(`^${key}:.*$`, 'm');
	return pattern.test(frontmatter) ? frontmatter.replace(pattern, line) : `${frontmatter.trimEnd()}\n${line}`;
}

function updateFrontmatter(content, updates) {
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) throw new Error('Translation has no YAML frontmatter.');
	let frontmatter = match[1];
	for (const [key, value] of Object.entries(updates)) frontmatter = setFrontmatterField(frontmatter, key, value);
	return content.replace(match[0], `---\n${frontmatter}\n---`);
}

const sourceFiles = confirmReviewed ? [path.join(docsRoot, selectedPage)] : walkSources(docsRoot).sort();
let written = 0;
let unchanged = 0;
let markedStale = 0;
let alreadyStale = 0;
let confirmedReviewed = 0;
let missing = 0;

for (const sourcePath of sourceFiles) {
	if (!fs.existsSync(sourcePath)) throw new Error(`Source page not found: ${path.relative(root, sourcePath)}`);
	const id = path.relative(docsRoot, sourcePath).split(path.sep).join('/');
	const revision = sourceRevision(fs.readFileSync(sourcePath, 'utf8'));
	const targetLocales = confirmReviewed ? [selectedLocale] : locales;

	for (const locale of targetLocales) {
		const translationPath = path.join(docsRoot, locale, id);
		if (!fs.existsSync(translationPath)) {
			missing += 1;
			continue;
		}

		const current = fs.readFileSync(translationPath, 'utf8');
		const match = current.match(/^---\r?\n([\s\S]*?)\r?\n---/);
		if (!match) throw new Error(`Translation has no YAML frontmatter: ${path.relative(root, translationPath)}`);
		const currentRevision = metadata(match[1], 'source_revision');
		const currentStatus = metadata(match[1], 'translation_status');
		let next = current;

		if (confirmReviewed) {
			next = updateFrontmatter(current, {
				locale,
				source_locale: 'zh-CN',
				source_revision: revision,
				translation_status: 'reviewed',
				reviewed_at: reviewedAt,
			});
			confirmedReviewed += 1;
		} else if (currentRevision !== revision) {
			if (currentStatus === 'stale') {
				alreadyStale += 1;
			} else {
				next = updateFrontmatter(current, { translation_status: 'stale' });
				markedStale += 1;
			}
		}

		if (next === current) {
			unchanged += 1;
			continue;
		}
		written += 1;
		if (!checkOnly) fs.writeFileSync(translationPath, next, 'utf8');
	}
}

console.log(`i18n freshness ${checkOnly ? '(check)' : 'complete'}`);
console.log(`  source pages:       ${sourceFiles.length}`);
console.log(`  marked stale:       ${markedStale}`);
console.log(`  already stale:      ${alreadyStale}`);
console.log(`  confirmed reviewed: ${confirmedReviewed}`);
console.log(`  written:            ${written}`);
console.log(`  unchanged:          ${unchanged}`);
console.log(`  missing:            ${missing}`);

if (checkOnly && written > 0) process.exitCode = 1;
if (missing > 0) process.exitCode = 1;
