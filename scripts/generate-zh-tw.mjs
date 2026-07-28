#!/usr/bin/env node
/**
 * Generate Traditional Chinese (zh-tw) docs from Simplified Chinese (root) sources.
 *
 * Usage:
 *   node scripts/generate-zh-tw.mjs
 *   node scripts/generate-zh-tw.mjs --check
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	CONTENT_LOCALE_PREFIXES,
	convertDocument,
	createZhTwConverter,
	sourceRevision,
} from './lib/zh-tw-convert.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const docsRoot = path.join(root, 'src/content/docs');
const outputRoot = path.join(docsRoot, 'zh-tw');
const checkOnly = process.argv.includes('--check');

function walkSourceFiles(dir, files = []) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (CONTENT_LOCALE_PREFIXES.has(entry.name) && path.dirname(fullPath) === docsRoot) {
				continue;
			}
			walkSourceFiles(fullPath, files);
		} else if (/\.(md|mdx)$/.test(entry.name)) {
			files.push(fullPath);
		}
	}
	return files;
}

function ensureDir(filePath) {
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeIfChanged(filePath, content) {
	if (fs.existsSync(filePath)) {
		const existing = fs.readFileSync(filePath, 'utf8');
		if (existing === content) return false;
	}

	if (!checkOnly) {
		ensureDir(filePath);
		fs.writeFileSync(filePath, content, 'utf8');
	}
	return true;
}

function removeStaleOutputs(generatedPaths) {
	if (!fs.existsSync(outputRoot)) return 0;

	let removed = 0;
	const stack = [outputRoot];
	while (stack.length > 0) {
		const current = stack.pop();
		for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
			const fullPath = path.join(current, entry.name);
			if (entry.isDirectory()) {
				stack.push(fullPath);
				continue;
			}

			if (!generatedPaths.has(fullPath)) {
				if (!checkOnly) fs.unlinkSync(fullPath);
				removed += 1;
			}
		}
	}

	if (!checkOnly) {
		const pruneEmptyDirs = (dir) => {
			for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
				if (entry.isDirectory()) pruneEmptyDirs(path.join(dir, entry.name));
			}
			if (dir !== outputRoot && fs.readdirSync(dir).length === 0) {
				fs.rmdirSync(dir);
			}
		};
		if (fs.existsSync(outputRoot)) pruneEmptyDirs(outputRoot);
	}

	return removed;
}

const converter = createZhTwConverter();
const translatedAt = new Date().toISOString().slice(0, 10);
const sourceFiles = walkSourceFiles(docsRoot).sort();
const generatedPaths = new Set();

let written = 0;
let unchanged = 0;

for (const sourcePath of sourceFiles) {
	const relativePath = path.relative(docsRoot, sourcePath);
	const targetPath = path.join(outputRoot, relativePath);
	const source = fs.readFileSync(sourcePath, 'utf8');
	const output = convertDocument(source, {
		converter,
		sourceRevision: sourceRevision(source),
		translatedAt,
	});

	generatedPaths.add(targetPath);
	if (writeIfChanged(targetPath, output)) written += 1;
	else unchanged += 1;
}

const removed = removeStaleOutputs(generatedPaths);

console.log(`zh-tw generation ${checkOnly ? '(check)' : 'complete'}`);
console.log(`  source pages: ${sourceFiles.length}`);
console.log(`  written:      ${written}`);
console.log(`  unchanged:    ${unchanged}`);
console.log(`  removed:      ${removed}`);
console.log(`  output:       ${path.relative(root, outputRoot)}/`);

if (checkOnly && (written > 0 || removed > 0)) {
	process.exitCode = 1;
}
