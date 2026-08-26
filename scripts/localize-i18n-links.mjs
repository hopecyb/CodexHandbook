#!/usr/bin/env node
/**
 * Prefix absolute documentation links in translated pages with their locale.
 * Public assets and repository-only paths such as /diagrams, /docs, and
 * /examples intentionally remain shared.
 *
 * Usage:
 *   node scripts/localize-i18n-links.mjs
 *   node scripts/localize-i18n-links.mjs --check
 *   node scripts/localize-i18n-links.mjs --locale en,fr
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const docsRoot = path.join(root, 'src/content/docs');
const supportedLocales = ['en', 'fr', 'de', 'es', 'pt', 'vi', 'ja', 'ko', 'zh-tw'];
const localeRoots = new Set(supportedLocales);
const localizedContentRoots = new Set(['ai-roadmap', 'cases', 'guide', 'pets', 'prompts', 'skills', 'theme']);
const repositoryUrl = 'https://github.com/hopecyb/CodexHandbook';
const checkOnly = process.argv.includes('--check');
const localeIndex = process.argv.indexOf('--locale');
const locales =
	localeIndex >= 0
		? process.argv[localeIndex + 1]?.split(',').map((locale) => locale.trim()).filter(Boolean)
		: supportedLocales;

if (!locales || locales.length === 0) throw new Error('Pass one or more locales after --locale.');
for (const locale of locales) {
	if (!localeRoots.has(locale)) throw new Error(`Unsupported locale: ${locale}`);
}

function walk(dir, files = []) {
	if (!fs.existsSync(dir)) return files;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(fullPath, files);
		else if (/\.(md|mdx)$/.test(entry.name)) files.push(fullPath);
	}
	return files;
}

function normalizeRepositoryPath(pathname) {
	const segments = pathname.split('/').filter(Boolean);
	if (localeRoots.has(segments[0])) segments.shift();
	if (segments[0] === 'docs') return `${repositoryUrl}/blob/main/${segments.join('/')}`;
	if (segments[0] === 'examples') return `${repositoryUrl}/blob/main/${segments.join('/')}`;
	return pathname;
}

function localizePath(pathname, locale) {
	const repositoryPath = normalizeRepositoryPath(pathname);
	if (repositoryPath !== pathname) return repositoryPath;
	if (!pathname.startsWith('/') || pathname.startsWith('//')) return pathname;
	const first = pathname.split('/').filter(Boolean)[0];
	if (!first || localeRoots.has(first) || !localizedContentRoots.has(first)) return pathname;
	return `/${locale}${pathname}`;
}

function localizeContent(content, locale) {
	let output = content.replace(/href=(['"])(\/[^'"]*)\1/g, (match, quote, pathname) => {
		const next = localizePath(pathname, locale);
		return next === pathname ? match : `href=${quote}${next}${quote}`;
	});

	output = output.replace(/(?<!!)(\[[^\]\n]*\]\()(\/[^)\s]+)([^)]*\))/g, (match, prefix, pathname, suffix) => {
		const next = localizePath(pathname, locale);
		return next === pathname ? match : `${prefix}${next}${suffix}`;
	});

	return output.replace(/(^|\s)link:\s*(\/[^\s]+)/gm, (match, prefix, pathname) => {
		const next = localizePath(pathname, locale);
		return next === pathname ? match : `${prefix}link: ${next}`;
	});
}

let checked = 0;
let changed = 0;

for (const locale of locales) {
	for (const filePath of walk(path.join(docsRoot, locale)).sort()) {
		checked += 1;
		const current = fs.readFileSync(filePath, 'utf8');
		const next = localizeContent(current, locale);
		if (next === current) continue;
		changed += 1;
		if (!checkOnly) fs.writeFileSync(filePath, next, 'utf8');
	}
}

console.log(`i18n link localization ${checkOnly ? '(check)' : 'complete'}`);
console.log(`  locales: ${locales.join(', ')}`);
console.log(`  pages checked: ${checked}`);
console.log(`  pages ${checkOnly ? 'needing changes' : 'changed'}: ${changed}`);

if (checkOnly && changed > 0) process.exitCode = 1;
