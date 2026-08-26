#!/usr/bin/env node
/**
 * Align translation source_revision metadata for zh-CN pages whose body did
 * not change in the current worktree. Translation review status is preserved.
 *
 * Usage:
 *   node scripts/sync-i18n-revisions.mjs
 *   node scripts/sync-i18n-revisions.mjs --check
 */
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const docsRoot = path.join(root, 'src/content/docs');
const checkOnly = process.argv.includes('--check');
const locales = ['en', 'fr', 'de', 'es', 'pt', 'vi', 'ja', 'ko'];
const localeTags = { en: 'en', fr: 'fr', de: 'de', es: 'es', pt: 'pt', vi: 'vi', ja: 'ja', ko: 'ko' };
const localeRoots = new Set([...locales, 'zh-tw']);

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

function changedSourceIds() {
	const output = execFileSync(
		'git',
		['diff', '--name-only', '--diff-filter=AM', '--', 'src/content/docs'],
		{ cwd: root, encoding: 'utf8' },
	);
	const prefix = 'src/content/docs/';
	return new Set(
		output
			.split(/\r?\n/)
			.filter((file) => file.startsWith(prefix))
			.map((file) => file.slice(prefix.length))
			.filter((id) => !localeRoots.has(id.split('/')[0])),
	);
}

function setFrontmatterField(frontmatter, key, value) {
	const line = `${key}: ${value}`;
	const pattern = new RegExp(`^${key}:.*$`, 'm');
	return pattern.test(frontmatter) ? frontmatter.replace(pattern, line) : `${frontmatter.trimEnd()}\n${line}`;
}

function updateTranslation(content, locale, revision) {
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) return content;
	let frontmatter = match[1];
	frontmatter = setFrontmatterField(frontmatter, 'locale', localeTags[locale]);
	frontmatter = setFrontmatterField(frontmatter, 'source_locale', 'zh-CN');
	frontmatter = setFrontmatterField(frontmatter, 'source_revision', revision);
	return content.replace(match[0], `---\n${frontmatter}\n---`);
}

const changed = changedSourceIds();
const sourceFiles = walkSources(docsRoot).sort();
let written = 0;
let unchanged = 0;
let skippedChanged = 0;
let missing = 0;

for (const sourcePath of sourceFiles) {
	const id = path.relative(docsRoot, sourcePath).split(path.sep).join('/');
	if (changed.has(id)) {
		skippedChanged += locales.length;
		continue;
	}

	const revision = sourceRevision(fs.readFileSync(sourcePath, 'utf8'));
	for (const locale of locales) {
		const translationPath = path.join(docsRoot, locale, id);
		if (!fs.existsSync(translationPath)) {
			missing += 1;
			continue;
		}
		const current = fs.readFileSync(translationPath, 'utf8');
		const next = updateTranslation(current, locale, revision);
		if (next === current) {
			unchanged += 1;
			continue;
		}
		written += 1;
		if (!checkOnly) fs.writeFileSync(translationPath, next, 'utf8');
	}
}

console.log(`i18n revision sync ${checkOnly ? '(check)' : 'complete'}`);
console.log(`  source pages:          ${sourceFiles.length}`);
console.log(`  changed-page entries:  ${skippedChanged}`);
console.log(`  written:               ${written}`);
console.log(`  unchanged:             ${unchanged}`);
console.log(`  missing translations:  ${missing}`);

if (checkOnly && written > 0) process.exitCode = 1;
if (missing > 0) process.exitCode = 1;
