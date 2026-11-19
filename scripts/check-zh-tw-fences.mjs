#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CONTENT_LOCALE_PREFIXES, createZhTwConverter } from './lib/zh-tw-convert.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsRoot = path.join(root, 'src/content/docs');
const targetRoot = path.join(docsRoot, 'zh-tw');
const translatableLanguages = new Set(['text', 'txt', 'plaintext', 'markdown', 'md', 'prompt']);
const converter = createZhTwConverter();
const issues = [];
let checked = 0;
let preservedUntyped = 0;

function walkSources(directory = docsRoot, files = []) {
	for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
		const fullPath = path.join(directory, entry.name);
		if (entry.isDirectory()) {
			if (directory === docsRoot && CONTENT_LOCALE_PREFIXES.has(entry.name)) continue;
			walkSources(fullPath, files);
		} else if (/\.(md|mdx)$/.test(entry.name)) {
			files.push(fullPath);
		}
	}
	return files;
}

function language(info) {
	return info.trim().split(/\s+/, 1)[0].toLowerCase().replace(/^\{?\.?/, '').replace(/\}?$/, '');
}

function allFences(text) {
	const pattern = /^(?<marker>`{3,}|~{3,})(?<info>[^\r\n]*)\r?\n(?<body>[\s\S]*?)^\k<marker>[ \t]*$/gm;
	return [...text.matchAll(pattern)]
		.map((match) => ({
			body: match.groups.body,
			language: language(match.groups.info),
			line: text.slice(0, match.index).split(/\r?\n/).length,
		}));
}

for (const sourcePath of walkSources()) {
	const relativePath = path.relative(docsRoot, sourcePath);
	const targetPath = path.join(targetRoot, relativePath);
	if (!fs.existsSync(targetPath)) {
		issues.push(`${path.relative(root, targetPath)}: missing generated page`);
		continue;
	}

	const sourceAllFences = allFences(fs.readFileSync(sourcePath, 'utf8'));
	const targetAllFences = allFences(fs.readFileSync(targetPath, 'utf8'));
	preservedUntyped += sourceAllFences.filter((fence) => fence.language === '' && /[\u4e00-\u9fff]/.test(fence.body)).length;
	const sourceFences = sourceAllFences.filter((fence) => translatableLanguages.has(fence.language));
	const targetFences = targetAllFences.filter((fence) => translatableLanguages.has(fence.language));
	checked += sourceFences.length;
	if (sourceFences.length !== targetFences.length) {
		issues.push(`${path.relative(root, targetPath)}: ${targetFences.length} generated prose fences != ${sourceFences.length} source fences`);
		continue;
	}

	for (let index = 0; index < sourceFences.length; index += 1) {
		const expected = converter(sourceFences[index].body);
		if (targetFences[index].body !== expected) {
			issues.push(`${path.relative(root, targetPath)}:${targetFences[index].line}: differs from one-pass OpenCC + glossary output`);
		}
	}
}

console.log(`Checked ${checked} explicitly translatable zh-TW fences; ${issues.length} generation mismatch(es).`);
console.log(`Preserved ${preservedUntyped} untyped fence(s) containing Chinese by policy.`);
for (const issue of issues.slice(0, 80)) console.log(`  - ${issue}`);
if (issues.length > 80) console.log(`  - … and ${issues.length - 80} more`);
if (issues.length > 0) process.exitCode = 1;
