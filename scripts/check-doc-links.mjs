#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import remarkParse from 'remark-parse';
import { unified } from 'unified';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const docsRoot = path.join(root, 'src/content/docs');
const extensions = new Set(['.md', '.mdx']);
const parser = unified().use(remarkParse);

function walk(dir, files = []) {
	if (!fs.existsSync(dir)) return files;

	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			walk(fullPath, files);
		} else if (extensions.has(path.extname(entry.name))) {
			files.push(fullPath);
		}
	}

	return files;
}

function visit(node, callback) {
	if (!node || typeof node !== 'object') return;
	callback(node);
	if (!Array.isArray(node.children)) return;
	for (const child of node.children) visit(child, callback);
}

function stripQueryAndHash(url) {
	return url.split('#', 1)[0].split('?', 1)[0];
}

function isExternal(url) {
	return /^(?:https?:|mailto:|tel:|data:)/i.test(url) || url.startsWith('//');
}

function existsAny(candidates) {
	return candidates.some((candidate) => fs.existsSync(candidate));
}

function resolveSitePath(url, isImage) {
	const pathname = decodeURIComponent(stripQueryAndHash(url));
	if (pathname === '/') return true;

	const relative = pathname.replace(/^\/+|\/+$/g, '');
	if (!relative) return true;

	const publicPath = path.join(root, 'public', relative);
	if (isImage || fs.existsSync(publicPath)) return fs.existsSync(publicPath);

	return existsAny([
		path.join(docsRoot, `${relative}.md`),
		path.join(docsRoot, `${relative}.mdx`),
		path.join(docsRoot, relative, 'index.md'),
		path.join(docsRoot, relative, 'index.mdx'),
		path.join(root, 'src/pages', `${relative}.astro`),
		path.join(root, 'src/pages', `${relative}.ts`),
		path.join(root, 'src/pages', relative, 'index.astro'),
	]);
}

function resolveRelativePath(sourcePath, url) {
	const pathname = decodeURIComponent(stripQueryAndHash(url));
	if (!pathname) return true;

	const resolved = path.resolve(path.dirname(sourcePath), pathname);
	if (fs.existsSync(resolved)) return true;

	return existsAny([
		`${resolved}.md`,
		`${resolved}.mdx`,
		path.join(resolved, 'README.md'),
		path.join(resolved, 'index.md'),
		path.join(resolved, 'index.mdx'),
	]);
}

const sourceFiles = [
	...walk(docsRoot),
	...walk(path.join(root, 'docs')),
	...walk(path.join(root, 'examples')),
	...['README.md', 'STYLE_GUIDE.md', 'CONTRIBUTING.md']
		.map((file) => path.join(root, file))
		.filter((file) => fs.existsSync(file)),
].sort();

const failures = [];
let checked = 0;

for (const sourcePath of sourceFiles) {
	const source = fs.readFileSync(sourcePath, 'utf8');
	const tree = parser.parse(source);

	visit(tree, (node) => {
		if (node.type !== 'link' && node.type !== 'image') return;
		const url = String(node.url ?? '').trim();
		if (!url || url.startsWith('#') || isExternal(url)) return;

		checked += 1;
		const valid = url.startsWith('/')
			? resolveSitePath(url, node.type === 'image')
			: resolveRelativePath(sourcePath, url);

		if (!valid) {
			failures.push({
				file: path.relative(root, sourcePath),
				line: node.position?.start?.line ?? 0,
				url,
			});
		}
	});
}

if (failures.length > 0) {
	console.error(`Found ${failures.length} broken internal link(s) or image reference(s):`);
	for (const failure of failures) {
		console.error(`  ${failure.file}:${failure.line} -> ${failure.url}`);
	}
	process.exitCode = 1;
} else {
	console.log(`Checked ${checked} internal links and image references across ${sourceFiles.length} source files.`);
}
